import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  devtool: 'source-map', //https://webpack.js.org/configuration/devtool/#devtool
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  mode: 'development',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
      }
    }
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false,
    }),

    // webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.

    // create HTML file includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttriutes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true
    }),
    // Minify JS; not avalible in webpack 4.
    // new webpack.optimize.UglifyJsPlugin(),

  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
}
