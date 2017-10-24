const webpack = require('webpack');
const { resolve } = require('path');

const isProd = () => process.env.NODE_ENV === 'production';

const config = {
  context: resolve('src'),
  entry: {
    main: ['./js/main.js'],
  },
  output: {
    path: resolve('dist/js'),
    filename: '[name].bundle.js',
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              ['transform-runtime', {
                helpers: false,
                polyfill: true,
                regenerator: true,
                moduleName: 'babel-runtime',
              }],
            ],
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
    }),
  ],
};

if (isProd()) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      sourceMap: false,
    }),
  );
}

module.exports = config;
