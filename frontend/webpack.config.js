const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.PRODUCTION === 'true';

const commonConfig = {
  mode: PRODUCTION ? 'production' : 'development',
  devtool: PRODUCTION ? 'source-map' : 'eval-cheap-module-source-map',
};

const mainConfig = {
  ...commonConfig,

  entry: './src/electron.ts',

  target: 'electron-main',

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  optimization: {
    nodeEnv: 'electron',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'electron.js',
  },
};

const rendererConfig = {
  ...commonConfig,

  entry: './src/index.tsx',

  target: 'electron-renderer',

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
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

module.exports = [mainConfig, rendererConfig];
