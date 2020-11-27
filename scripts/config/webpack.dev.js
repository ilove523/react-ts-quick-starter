const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT, PROJECT_PATH } = require('../constants')

const proxySetting = require(path.join(PROJECT_PATH, 'src/setProxy.js'))
const { default: path } = require('*.svg')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT, // 默认是8080
    stats: 'errors-only', // 终端仅打印 error，其它选项 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
    contentBase: path.join(PROJECT_PATH, 'dist'),  // 加载内容的目标目录，官方推荐使用绝对路径；默认是当前目录；false表示禁用
    clientLogLevel: 'silent', // 日志等级，可选 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器，也可打开指定的浏览器及指定启动参数 https://webpack.js.org/configuration/dev-server/
    hot: true, // 热更新
    lazy: true, // 懒加载模式，webpack只编译需要的 bundle
    liveReload: false,  // hot 互斥
    proxy: { ...proxySetting }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
