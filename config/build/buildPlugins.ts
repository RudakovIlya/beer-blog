import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    /* new HtmlWebpackPlugin: Automatically includes scripts in our index.html */
    new HtmlWebpackPlugin({template: paths.html}),
    /* new ProgressPlugin: Shows the percentage progress of our build */
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}