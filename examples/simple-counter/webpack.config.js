const path = require('path');
const webpack = require('webpack');

const sourceFilelFolder = 'app';
const SRC_FOLDER = path.resolve(__dirname, sourceFilelFolder);

module.exports = {
  entry: './' + sourceFilelFolder + '/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/'
  },
  devtool: '#source-map',
  devServer: {
    inline: true,
    hot: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SRC_FOLDER,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        include: SRC_FOLDER,
        loader: 'file?name=[name].html'
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};