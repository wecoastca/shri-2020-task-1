const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './stub/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: ['node_modules']
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
          {
            loader: 'babel-loader'
          }
          ]
        }
        ,
        {
            test: /\.css$/,
            include: path.resolve(__dirname,'src'),
            exclude: /node_modules/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'style-loader'
            ],
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty'
  }
};