const merge = require("webpack-merge");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./common.js");

module.exports = () =>
  merge(common(), {
    mode: "development",

    plugins: [
      new HTMLWebpackPlugin({
        template: "./src/index.html"
      }),

      new CopyWebpackPlugin([
        { from: "src/data", to: "data" },
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/service-worker.js", to: "service-worker.js" }
      ])
    ]
  });
