var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 // 通过 npm 安装
 const webpack = require('webpack'); // 用于访问内置插件
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
              test: /\.css$/i,
              use: ['style-loader','css-loader'],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader",
                    options: {
                        implementation: require('dart-sass'),
                       }, // 将 Sass 编译成 CSS
                }]
              }
          ],
},
  mode: 'development',
  entry:'./src/index.js',
  devtool: 'inline-source-map',
  output:{
      filename:'[contenthash].js'
  },
  devServer: {
    contentBase:   './dist',
    compress: true,
    port: 7586,
  },
  plugins: [new HtmlWebpackPlugin({ 
      template:'src/assets/index.html',
      title:'niubi',
    }),
    new MiniCssExtractPlugin({
    }
    )],
};



