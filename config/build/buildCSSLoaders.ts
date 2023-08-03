import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCSSLoaders = (isDev: boolean): webpack.RuleSetRule => {
  return {
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
            localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }
}
