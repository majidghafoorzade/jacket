const path = require('path');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/client/index.tsx',
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/app.min.js'
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
