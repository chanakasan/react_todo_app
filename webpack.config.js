var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      React: 'react',
    }),
  ],
}
