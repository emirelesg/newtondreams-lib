const path = require('path');

module.exports = {
  entry: './src/expose.js',
  output: {
    path: path.resolve(__dirname, 'dist/dist'),
    filename: 'app.bundle.js'
  },
  target: 'web',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: []
};
