import webpack from "webpack"

export const buildResolvers = (): webpack.ResolveOptions => {
  return {
    /* extensions: When importing, do not specify the extension of these files "import Component from './component'" */
    extensions: ['.tsx', '.ts', '.js'],
  }
}