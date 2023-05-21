const path = require('path');

const { NODE_ENV = 'production' } = process.env;

module.exports = (target) => {

  const isWeb = target === "web";

  return {
    entry: isWeb ? './src/client/index.tsx' : './src/index.ts',
    mode: NODE_ENV,
    target,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isWeb ? 'static/js/app.min.js' : 'index.js'
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
          use: 'ts-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
          },
        }
      ]
    }
  }
}
