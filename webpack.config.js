const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const { NODE_ENV = 'production' } = process.env;

const BUILD_PATH = path.resolve(__dirname, 'build')

module.exports = (target) => {

  const isWeb = target === "web";
  const outputPath = isWeb ? path.join(BUILD_PATH, 'client') : path.join(BUILD_PATH, 'server');

  const localIdentName = NODE_ENV === 'production' ? '[hash:base64:5]' : 'local_[hash:base64:5]';

  return {
    entry: isWeb ? './src/client/index.tsx' : './src/index.ts',
    mode: NODE_ENV,
    target,
    output: {
      path: outputPath,
      // publicPath: isWeb ? "/build/client/" : "/build/server/",
      filename: isWeb ? 'client-[name].js' : 'server-[name].js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        client: path.resolve(__dirname, 'src/client/'),
        server: path.resolve(__dirname, 'src/server/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                caller: { target },
              },
            }
          ],
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
          },
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName,
                },
              },
            }
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName,
                },
              },
            },
            "sass-loader",
          ],
        }
      ]
    },
    plugins: [
      new LoadablePlugin(),
      // new MiniCssExtractPlugin({
      //   filename: 'client/css/app.min.css',
      // }),
    ],
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      },
    },
  }
}
