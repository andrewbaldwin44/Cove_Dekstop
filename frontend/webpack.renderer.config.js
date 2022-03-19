const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WEB_RENDER = process.env.WEB;
const PRODUCTION = process.env.PRODUCTION === 'true';

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',

  devtool: PRODUCTION ? 'source-map' : 'eval-cheap-module-source-map',

  entry: './src/index.tsx',

  target: WEB_RENDER ? 'browserslist' : 'electron-renderer',

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['./src', 'node_modules'],

    fallback: {
      fs: false,
    },
  },

  optimization: {
    nodeEnv: 'web',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'react.js',
  },

  devServer: {
    hot: true,
    port: '3000',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      fs: 'fs',
      React: 'react',
    }),
  ],
};
