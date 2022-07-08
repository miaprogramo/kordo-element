const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

let devtool = "eval-source-map";
if (process.env.NODE_ENV == "production") {
  devtool = "";
}

module.exports = merge(webpackBaseConfig, {
  devtool,
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
      dist: path.resolve(__dirname, "../dist"),
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, "../examples/dist/index.html"),
      template: path.join(__dirname, "../examples/index.html"),
    }),
    new FriendlyErrorsPlugin(),
  ],
});
