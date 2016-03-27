const common = require('./common')

module.exports = {
  entry: common.entry,
  output: common.createOutput({
    filename: '[name].bundle-[chunkhash].js',
    publicPath: '/assets/'
  }),
  module: {
    loaders: [
      common.createJsLoader(),
      common.createSassLoader({ extract: true }),
      common.createImagesLoader({ name: '[path][name]-[chunkhash].[ext]' }),
      common.createFontsLoader({ name: '[path][name]-[chunkhash].[ext]' })
    ]
  },
  plugins: [
    common.noErrorPlugin,
    common.occurenceOrderPlugin,
    common.dedupePlugin,
    common.uglifyPlugin,
    common.createCommonsChunkPlugin({
      filename: '[name].bundle-[chunkhash].js'
    }),
    common.createExtractCSSPlugin('[name].bundle-[chunkhash].css'),
    common.createDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    common.createAssetsPlugin()
  ],
  resolve: common.resolve,
  postcss: common.postcss
}
