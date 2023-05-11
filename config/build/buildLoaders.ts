import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    /* test: The regular expression by which we will find a file with this extension and apply loader to it */
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  return [
    typescriptLoader
  ]
}