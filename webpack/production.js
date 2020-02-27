const merge = require("webpack-merge");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const UglifyJS = require("uglify-es");
const JSONMinifyPlugin = require("node-json-minify");

const common = require("./common.js");

module.exports = () =>
  merge(common(), {
    mode: "production",

    plugins: [
      new CleanWebpackPlugin(),

      new HTMLWebpackPlugin({
        template: "./src/index.html",
        minify: {
          html5: true,
          minifyJS: true,
          minifyCSS: true,
          sortClassName: true,
          removeComments: true,
          sortAttributes: true,
          keepClosingSlash: true,
          collapseWhitespace: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true
        }
      }),

      new CopyWebpackPlugin([
        {
          from: "src/data",
          to: "data",
          transform(content) {
            return JSONMinifyPlugin(content.toString());
          }
        },
        {
          from: "src/manifest.json",
          to: "manifest.json",
          transform(content) {
            return JSONMinifyPlugin(content.toString());
          }
        },
        {
          from: "src/service-worker.js",
          to: "service-worker.js",
          transform(content) {
            return UglifyJS.minify(content.toString()).code;
          }
        }
      ])
    ]
  });
