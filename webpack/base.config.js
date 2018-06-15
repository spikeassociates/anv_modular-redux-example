const Config = require("webpack-config").Config;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = new Config().merge({
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    example: ["babel-polyfill", "./src/index.jsx"]
  },
  output: {
    libraryTarget: "umd",
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      title: "Modular redux"
    })
  ]
});

module.exports = config;
