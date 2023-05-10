const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  /* entry: Entry is the starting point of the application */
  entry: path.resolve(__dirname, 'src', 'index.js'),
  /* output: Where will we put the assembly of our application */
  output: {
    /* "[name].[contenthash].js": Solving the problem of caching files in the browser */
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    /* clean: Cleans up redundant files in build */
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})
  ]
};
