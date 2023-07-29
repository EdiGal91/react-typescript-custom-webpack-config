import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugin(htmlPath: string): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
  ];
}
