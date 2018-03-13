//创建webpack.config.js
var webpack = require('webpack');
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: true,
    port: 9000
  }
}