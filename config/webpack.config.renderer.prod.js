const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig, {
  devtool: 'source-map',

  mode: 'production',

  target: 'electron-renderer',

  entry: './src/renderer/index.js',

  output: {
    path: path.resolve(__dirname, '../app/dist'),
    filename: 'renderer.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            extends: path.join(process.cwd(), './.babelrc'),
          },
        },
      },

      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
});
