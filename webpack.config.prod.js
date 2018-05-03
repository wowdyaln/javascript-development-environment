import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map', //https://webpack.js.org/configuration/devtool/#devtool
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false,
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
}
