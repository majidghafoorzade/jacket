const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig("node"), {
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
});
