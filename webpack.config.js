import webpack from 'webpack';
import path from 'path';
import {} from 'dotenv/config';

const DIST_DIR = path.resolve(__dirname, 'client/dist');
const SRC_DIR = path.resolve(__dirname, 'client');

const config = {
  mode: process.env.NODE_ENV,
  resolve: { extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'] },
  entry: ['webpack-hot-middleware/client?reload=true', `${SRC_DIR}/index.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/client/compiled',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
