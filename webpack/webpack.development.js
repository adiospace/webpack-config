const common = require('./common')


module.exports = {
  entry: common.entry,
  output: common.createOutput(),
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
    common.createDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: common.resolve,
  postcss: common.postcss,
  devtool: 'cheap-module-source-map',
  devServer: common.devServer
}
