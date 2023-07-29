import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

const config: (env: BuildEnv) => webpack.Configuration = (env: BuildEnv) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  console.log(`mode=${mode}`);
  console.log(`port=${port}`);

  return buildWebpackConfig({
    mode: mode,
    port: port,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "src", "index.html"),
    },
  });
};

export default config;
