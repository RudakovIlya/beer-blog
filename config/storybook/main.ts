import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import { buildCSSLoaders } from '../build/buildCSSLoaders'
import { BuildPaths } from '../build/types/config'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // {
    //   name: '@storybook/addon-styling',
    //   options: {
    //     sass: {
    //       implementation: require('sass'),
    //     },
    //   },
    // },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  webpackFinal: async (webpackConfig) => {
    const paths:BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    }
    webpackConfig.resolve.modules.push(paths.src)
    webpackConfig.resolve.extensions.push('.ts', '.tsx')
    webpackConfig.module.rules.push(buildCSSLoaders(true))

    return webpackConfig
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
