const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

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
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_SENDER_ID': JSON.stringify(process.env.FIREBASE_SENDER_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
      'process.env.DEV': JSON.stringify(!PRODUCTION),
    }),
    new webpack.ProvidePlugin({
      fs: 'fs',
      React: 'react',
    }),
  ],
};
