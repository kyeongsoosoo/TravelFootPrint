const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../front/src/'),
    port: 3000,
    publicPath: 'http://locallhost:3000/dist/',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:8081',
      },
    },
  },
};

module.exports = merge(common, config);
