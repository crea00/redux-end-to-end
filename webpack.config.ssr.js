var path = require('path');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    js: './index.js'
  },
  output: { path: __dirname + '/assets', filename: 'bundle.js' },
  devtool: '#cheap-module-source-map',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJSPlugin()
  ]
}
