import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

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
  const scssLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            /* auto: Determines for which styles to apply the generation of a unique class,
            and for which not */
            auto: (resPath: string) => { return Boolean(resPath.includes('.module.')) },
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }
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
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
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
