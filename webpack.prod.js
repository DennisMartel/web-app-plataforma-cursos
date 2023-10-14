const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const common = require('./webpack.config');

/** @type { import('webpack').Configuration } */
const prodConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(require('./env.prod.js'))
    })
  ]
}

module.exports = merge(common, prodConfig)