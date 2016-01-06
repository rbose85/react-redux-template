const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app',

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: __dirname + '/app'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: __dirname + '/app'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // display only errors to reduce the amount of output
    stats: 'errors-only'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Tutorial'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
