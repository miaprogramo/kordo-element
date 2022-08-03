const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

let devtool = "eval-source-map";
let plugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": '"production"',
  }),
  new HtmlWebpackPlugin({
    inject: true,
    filename: path.join(__dirname, "../examples/dist/index.html"),
    template: path.join(__dirname, "../examples/index.html"),
  }),
  new FriendlyErrorsPlugin(),
];
if (process.env.NODE_ENV === "production") {
  devtool = "";
  plugins.unshift(new CleanWebpackPlugin());
}

module.exports = merge(webpackBaseConfig, {
  devtool,
  plugins,
  // 入口
  entry: {
    main: "./examples/main",
    vendors: ["vue", "vue-router"],
  },
  // 输出
  output: {
    path: path.join(__dirname, "../examples/dist"),
    publicPath: "",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
      "kordo-element": path.resolve(__dirname, "../src"),
    },
  },
  devServer: {
    host: "localhost",
    port: 9000,
    publicPath: "/",
    open: true,
    hot: true,
  },
});
