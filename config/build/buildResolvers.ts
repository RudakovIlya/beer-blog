import webpack from 'webpack'
import { BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => ({
  /* extensions: When importing, do not specify the extension of these files
  "import Component from './component'" */
  extensions: ['.tsx', '.ts', '.js'],
  /* preferAbsolute: Prefer absolute paths */
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {},
})
