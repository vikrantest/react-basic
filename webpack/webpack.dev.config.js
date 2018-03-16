var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(__dirname, '../app.js')
    ],
  module: {
        rules: [
          {
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [
              {
                loader: "babel-loader",
              }
            ]
          }
        ]
      },
  output: {
    path: __dirname + '/dist-vik',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist-vik',
    historyApiFallback: true
  },
}
