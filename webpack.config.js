var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./app/scripts/main.js'],
    'vendor': ['react']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
