/* eslint strict:0, no-param-reassign: 0 */

'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


// Entry config

exports.entry = {
  app: './app/main.js'
}


//
// Output config
//
exports.createOutput = options => Object.assign({
  path: './dist',
  filename: '[name].js'
}, options)


//
// Resolve config
//
const modulesDirectories = ['node_modules', './app']
const extensions = ['', '.js', '.jsx']
exports.resolve = {
  modulesDirectories,
  extensions
}


//
// Loaders config
//
exports.createJsLoader = query => {
  const defaults = {
    cacheDirectory: true
  }
  return {
    test: /.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: Object.assign({}, defaults, query)
  }
}

exports.createSassLoader = config => {
  const options = Object.assign({
    extract: false
  }, config)
  let loader = 'style!css!postcss!sass'
  if (options.extract) {
    loader = ExtractTextPlugin.extract('style', 'css!postcss!sass')
  }
  return {
    test: /\.scss$/,
    loader,
    exclude: /node_modules/
  }
}

exports.createImagesLoader = query => {
  const defaults = {
    name: '[path][name].[ext]',
    limit: 8192
  }
  return {
    test: /\.(png|jpg)$/,
    loader: 'file',
    query: Object.assign({}, defaults, query),
    exclude: /node_modules/
  }
}

exports.createFontsLoader = query => {
  const defaults = {
    name: '[path][name].[ext]'
  }
  return {
    test: /\.woff$/,
    loader: 'file',
    query: Object.assign({}, defaults, query),
    exclude: /node_modules/
  }
}


//
// Plugins config
//
exports.noErrorPlugin = new webpack.NoErrorsPlugin()
exports.uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    drop_console: true
  }
})
exports.createExtractCSSPlugin = options => new ExtractTextPlugin(options)
exports.createDefinePlugin = options => (
  new webpack.DefinePlugin(Object.assign({
    // default values
  }, options))
)

//
// Dev server config
//
exports.devServer = {
  inline: true,
  progress: true,
  colors: true,
  port: 4000
}


//
// Postcss config
//
exports.postcss = [
  require('autoprefixer')({ browsers: ['last 2 versions'] })
]
