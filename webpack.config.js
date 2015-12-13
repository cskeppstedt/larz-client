var path = require('path'),
    webpack = require('webpack'),
    ReloadPlugin = require('webpack-reload-plugin'),
    autoprefixer = require('autoprefixer-core');

var config = {
  entry: {
    'app': ['./app/main.jsx'],
    'vendor': ['react', 'firebase', 'reflux']
  },

  devtool: 'source-map',

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
      { test: /\.js$/,   loader: 'jsx-loader?harmony' },
      { test: /\.jsx$/,  loader: 'jsx-loader?harmony' },
      { test: [/\.jpg$/, /\.gif$/],  loader: 'file-loader' },
      { test: /\.css$/,  loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!postcss-loader!stylus-loader' }
    ]
  },
  postcss: [autoprefixer({})]
};

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push(
    new ReloadPlugin('localhost')
  );
}

module.exports = config;
