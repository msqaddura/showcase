var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var webpack = require("webpack");
var fs = require("fs");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  devtool: "source-map",
  watch: false,
  watchOptions: {
    ignored: ["node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../", "docs"),
    port: 9001,
    https: false,
    progress: true,
    hot: true,
    inline: true,
    open: true,
    watchOptions: {
      ignored: ["node_modules"]
    }
  },
  output: {
    path: path.resolve(__dirname, "../", "docs"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      webgladiator: path.resolve(
        __dirname,
        "../",
        "submodules/WebGLadiator/src"
      )
    },
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: "config/tsconfig.dev.json"
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "src/Resources", to: "Resources/" },
      { from: "src/static/index.html", to: "index.html" },
      { from: "src/static/favicon.ico", to: "favicon.ico" },
      { from: "src/static/loader.gif", to: "loader.gif" }
    ])
  ]
};
