var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 // 通过 npm 安装
 const webpack = require('webpack'); // 用于访问内置插件
module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              {
                loader: 'style-loader',
                options: { injectType: 'singletonStyleTag' },
              },
              'css-loader',
            ],
          },
        ],
},
  mode: 'development',
  entry:'./src/index.js',
  output:{
      filename:'[contenthash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({ 
      template:'src/assets/index.html',
      title:'niubi',
    })],
};



