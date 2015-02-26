var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./app/scripts/main.jsx'],
    'vendor': ['react', 'firebase']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.join(__dirname, "bower_components")]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
