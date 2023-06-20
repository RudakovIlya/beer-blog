import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCSSLoaders } from './buildCSSLoaders'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const fileLoader = {
    test: /\.(png|jpe?g|webp)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  const scssLoader = buildCSSLoaders(isDev)
  const typescriptLoader = {
    /* test: The regular expression by which we will find a file with this extension and apply
    loader to it */
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  }
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader,
  ]
}
