const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'stub/index.js'),
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'stub/build'),
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
          include: path.resolve(__dirname,'stub'),
          use: [
          {
            loader: 'babel-loader'
          }
          ]
        }
        ,
        {
            test: /\.css$/i,
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
     new MiniCssExtractPlugin(
     {
      filename: "[name].css",
      chunkFilename: "[id].css"
    }
    )
  ],
  node: {
    fs: 'empty',
    net: 'empty'
  }
};