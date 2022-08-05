const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Components = require("../components.json");

module.exports = merge(webpackBaseConfig, {
  entry: Components,
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/lib/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
  ],
});
