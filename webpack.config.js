var webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./app/scripts/main.js'],
    'vendor': ['react']
  },
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.purs'] 
  },
  module: {
    loaders: [
      { test: /\.purs$/, loader: "purs" }
    ]
  }
};
