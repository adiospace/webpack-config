const common = require('./common')

module.exports = {
  entry: common.entry,
  output: common.createOutput({
    filename: '[name]-[hash].js'
  }),
  module: {
    loaders: [
      common.createJsLoader(),
      common.createSassLoader({ extract: true }),
      common.createImagesLoader({ name: '[path][name]-[hash].[ext]' }),
      common.createFontsLoader({ name: '[path][name]-[hash].[ext]' })
    ]
  },
  plugins: [
    common.noErrorPlugin,
    common.uglifyPlugin,
    common.createExtractCSSPlugin('[name]-[hash].css'),
    common.createDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: common.resolve,
  postcss: common.postcss,
  devServer: common.devServer
}
