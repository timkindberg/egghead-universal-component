const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

module.exports = {
  // REQUIRED: webpackHotServerMiddleware is expecting two webpack configs,
  // one with a name 'client', one with a name 'server'.
  name: 'client',
  // Target browsers for our client config
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // REQUIRED: Extract css files into their own chunks
        use: ExtractCssChunks.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  devtool: 'eval',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    // REQUIRED: file and chunk names should match
    filename: '[name].js',
    chunkFilename: '[name].js',
    // REQUIRED: where to write files to
    path: path.resolve(__dirname, '../buildClient'),
    // REQUIRED: where files will be served from
    publicPath: '/static/'
  },
  plugins: [
    // REQUIRED: We have to initialize our ExtractCssChunks plugin
    new ExtractCssChunks(),

    // REQUIRED: Needed to put webpack bootstrap code before chunks
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'],
      filename: '[name].js',
      minChunks: Infinity
    }),
  ]
}
