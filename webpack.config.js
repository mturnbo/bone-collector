const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const templatePaths = [
  path.resolve('assets/partials')
];

const webpackConfig = {
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './public'),
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(jpg|png|eot|svg|ttf|woff|woff2)$/,
        loader: 'url'
      },
      {
        test: /\.jst$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([{
      from: './app/assets/index.html',
      to: './index.html'
    }]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    })
  ],
  resolve: {
    root: path.join(__dirname, './app'),
    extensions: ['', '.js', '.jst', '.hbs']
  },
  resolveLoader: {
    root: path.join(__dirname, './node_modules')
  }
}

module.exports = webpackConfig;