require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  context: path.resolve(__dirname),
  entry: {
    default: "./index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: ["node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'first-level/index',
      template: "./first-level/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'first-level/second-level.html',
      template: "./first-level/second-level.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        WAYKE_SEARCH_URL: `"${process.env.WAYKE_SEARCH_URL}"`,
        WAYKE_SEARCH_MLT_URL: `"${process.env.WAYKE_SEARCH_MLT_URL}"`,
        WAYKE_SEARCH_X_API_KEY: `"${process.env.WAYKE_SEARCH_X_API_KEY}"`,
        WAYKE_GRAPH_QL_URL: `"${process.env.WAYKE_GRAPH_QL_URL}"`,
        WAYKE_ECOM_URL: `"${process.env.WAYKE_ECOM_URL}"`,
        GOOGLE_MAPS_API_KEY: `"${process.env.GOOGLE_MAPS_API_KEY}"`,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              allowTsInNodeModules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|woff|woff2|svg|eot|ttf|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
