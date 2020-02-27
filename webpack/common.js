const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
  output: {
    path: path.join(__dirname, "../build"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: "/node_modules/",
        use: ["babel-loader"]
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [new CopyWebpackPlugin([{ from: "src/icons", to: "icons" }, { from: "src/images", to: "images" }])]
});
