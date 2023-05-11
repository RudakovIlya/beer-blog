import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths} = options

  return {
    mode: mode,
    /* entry: Entry is the starting point of the application */
    entry: paths.entry,
    /* module:  */
    module: {
      /* rules: Configuring loaders, they allow you to process files that go beyond js
      (png, jpg, gif, svg, scss, ts and other) */
      rules: buildLoaders(),
    },
    /* resolve: */
    resolve: buildResolvers(),
    /* output: Where will we put the assembly of our application */
    output: {
      /* "[name].[contenthash].js": Solving the problem of caching files in the browser.
        Each assembly will add a unique Hash to the file, which solves the caching problem */
      filename: '[name].[contenthash].js',
      path: paths.build,
      /* clean: Cleans up redundant files in build */
      clean: true
    },
    plugins: buildPlugins(options),
  }
}