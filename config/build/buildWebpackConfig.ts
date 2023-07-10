import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {
    mode,
    paths,
    isDev,
  } = options

  return {
    mode,
    /* entry: Entry is the starting point of the application */
    entry: paths.entry,
    /* module:  */
    module: {
      /* rules: Configuring loaders, they allow you to process files that go beyond js
      (png, jpg, gif, svg, scss, ts and other) */
      rules: buildLoaders(options),
    },
    /* resolve: */
    resolve: buildResolvers(options),
    /* output: Where will we put the assembly of our application */
    output: {
      /* "[name].[contenthash].js": Solving the problem of caching files in the browser.
        Each assembly will add a unique Hash to the file, which solves the caching problem */
      filename: '[name].[contenthash].js',
      path: paths.build,
      /* clean: Cleans up redundant files in build */
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    /* devtool: Allows you to track in which file an error occurred, because.
    it will be hard to find an error in the compiled bundle file */
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
