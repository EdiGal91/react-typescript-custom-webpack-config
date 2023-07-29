import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugin } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugin(paths.html),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: mode === "development" ? "inline-source-map" : false,
    devServer: mode === "development" ? buildDevServer(options) : undefined,
  };
}
