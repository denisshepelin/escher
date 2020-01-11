const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge.smart(common, {
  mode: 'development',
  entry: './dev-server/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dev-server',
    open: true,
    port: 7621
  }
})
