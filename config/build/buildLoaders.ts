import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ];
}
