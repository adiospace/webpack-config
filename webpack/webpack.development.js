const common = require('./common')

module.exports = {
  entry: common.entry,
  output: common.createOutput({
    publicPath: '/assets/'
  }),
  module: {
    loaders: [
      common.createJsLoader(),
      common.createSassLoader(),
      common.createImagesLoader(),
      common.createFontsLoader()
    ]
  },
  plugins: [
    common.noErrorPlugin,
    common.createCommonsChunkPlugin(),
    common.createDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    common.createAssetsPlugin()
  ],
  resolve: common.resolve,
  postcss: common.postcss,
  devtool: 'cheap-module-source-map',
  devServer: common.devServer
}
