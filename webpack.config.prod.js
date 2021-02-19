var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 // 通过 npm 安装
 const webpack = require('webpack'); // 用于访问内置插件
module.exports = {
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
          ],
},
  mode: 'production',
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
    new MiniCssExtractPlugin(
      { filename: '[name],[contenthash].css',
      chunkFilename:'[id].[contenthash].css',
      ignoreOrder:false}
    )],
};



