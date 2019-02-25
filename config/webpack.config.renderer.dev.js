const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const port = process.env.PORT || 8888;
const publicPath = `http://localhost:${port}/dist`;

module.exports = merge.smart(baseConfig, {
  devtool: 'inline-source-map',

  mode: 'development',

  target: 'electron-renderer',

  entry: './src/renderer/index.js',

  output: {
    path: path.resolve(__dirname, '../app/dist'),
    publicPath,
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
          {
            loader: 'style-loader',
            options: { singleton: true },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],

  node: {
    __dirname: false,
    __filename: false,
  },

  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, '../app'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
  },
});
