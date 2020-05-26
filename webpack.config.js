module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'newton.bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: []
};
