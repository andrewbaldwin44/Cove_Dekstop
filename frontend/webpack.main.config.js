const PRODUCTION = process.env.PRODUCTION === 'true';

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',

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
