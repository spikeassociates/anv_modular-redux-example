const webpack = require("webpack");
const Config = require("webpack-config").Config;

const dev = new Config().extend("./webpack/base.config").merge({
  entry: {
    example: ["babel-polyfill", "react-hot-loader/patch", "./src/index.jsx"]
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: "source-map",
  devServer: {
    port: 3100,
    publicPath: "/",
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
});

module.exports = dev;
