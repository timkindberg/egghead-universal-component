const path = require('path')
const webpack = require('webpack')

module.exports = {
  // REQUIRED: webpackHotServerMiddleware is expecting two webpack configs,
  // one with a name 'client', one with a name 'server'.
  name: 'server',
  // Target node for our server config
  target: 'node',
  // REQUIRED: Entry is set to the render middleware that will receive the clientStats
  // then flush the chunks and respond with the index.html string content.
  entry: path.resolve(__dirname, '../server/render.js'),
  output: {
    // REQUIRED: Makes sure to expose ../server/render.js middleware on
    // module.exports so that webpackHotServerMiddleware can call it.
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // REQUIRED: server specific version of css-loader
        use: 'css-loader/locals'
      }
    ]
  }
}
