const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  publicPath: './',
  devServer: {
    port: 9000,
    open: true,
    https: false,
  },
  productionSourceMap: false,
  css: {
    sourceMap: false,
  },
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        configFile: './stylelint.config.js',
        files: ['src/**/*.vue', 'src/**/*.s?css'],
      }),
    ],
  },
}
