import path from "path";
import { Configuration } from "webpack";
import { Configuration as Config } from "webpack-dev-server";

const config: Configuration | Config = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
  },
};

export default config;
