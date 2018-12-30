var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  // The entry is the root of our app
  entry: {
    js: './index.js'
  },
  // The output option specifies the path and the filename for our bundle
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: '#cheap-module-source-map',
  // The historyApiFallback option makes sure that any url path will take us to our application instead of giving us a 404
  devServer: {
    historyApiFallback: true
  },
  // The resolve option tells webpack to consider files ending in JSX to be JavaScript files
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  // This entry says that any file with a JS or JSX extension should be run through the babel loader
  // unless it's in our node_modules directory which contains our dependencies
  module: {
    rules: [{
      test: /.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ]
}
