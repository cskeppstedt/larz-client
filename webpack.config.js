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
    extensions: ['', '.js', '.jsx', '.purs'],
    modulesDirectories: [
      'node_modules',
      'web_modules',
      '.modules'
    ]
  },
  module: {
    loaders: [
      { test: /\.purs$/, loader: "purs?output=.modules" }
    ]
  }
};
