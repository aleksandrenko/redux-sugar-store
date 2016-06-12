import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'reduxSugarStore'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: include
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: include
      },
      {
        test: /\.json$/,
        'loader': 'json',
        include: include
      }
    ]
  }
}
