import webpack from 'webpack'

export const buildBabelLoaders = (isDev: boolean): webpack.RuleSetRule => {
  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  }
}
