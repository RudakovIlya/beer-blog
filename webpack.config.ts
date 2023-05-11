import path from 'path'
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  /* entry: Entry is the starting point of the application */
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  /* module:  */
  module: {
    /* rules: Configuring loaders, they allow you to process files that go beyond js
    (png, jpg, gif, svg, scss, ts and other) */
    rules: [
      {
        /* test: The regular expression by which we will find a file with this extension and apply loader to it */
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  /* resolve: */
  resolve: {
    /* extensions: When importing, do not specify the extension of these files "import Component from './component" */
    extensions: ['.tsx', '.ts', '.js'],
  },
  /* output: Where will we put the assembly of our application */
  output: {
    /* "[name].[contenthash].js": Solving the problem of caching files in the browser.
      Each assembly will add a unique Hash to the file, which solves the caching problem */
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    /* clean: Cleans up redundant files in build */
    clean: true
  },
  plugins: [
    /* new ProgressPlugin: Shows the percentage progress of our build */
    new webpack.ProgressPlugin(),
    /* new HtmlWebpackPlugin: Automatically includes scripts in our index.html */
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
  ],
};
export default config