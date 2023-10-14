const path = require('path');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

/** @type { import('webpack').Configuration } */
const devConfig = {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    compress: true,
    static: path.resolve(__dirname, './build'),
    allowedHosts: 'all',
    historyApiFallback: true,
    host: '127.0.0.1',
    hot: false,
    port: 3000,
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(require('./env.dev.js'))
    })
  ]
}

module.exports = merge(common, devConfig)