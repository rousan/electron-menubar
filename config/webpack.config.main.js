const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig, {
  devtool: 'source-map',

  mode: 'production',

  target: 'electron-main',

  entry: './src/main/index.js',

  output: {
    path: path.resolve(__dirname, '../app'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            extends: path.join(process.cwd(), './.babelrc'),
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],

  node: {
    __dirname: false,
    __filename: false,
  },
});
