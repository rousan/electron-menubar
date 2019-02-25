const webpack = require('webpack');
const { dependencies } = require('../package.json');

module.exports = {
  externals: [...Object.keys(dependencies || {})],

  output: {
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new webpack.NamedModulesPlugin(),
  ],
};
