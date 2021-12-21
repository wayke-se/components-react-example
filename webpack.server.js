require("dotenv").config();
const path = require("path");

module.exports = {
  devServer: {
    allowedHosts: process.env.WAYKE_HOST
      ? process.env.WAYKE_HOST.replace(/\s/g, "").split(",")
      : undefined,
    historyApiFallback: true,
    port: 5000,
    client: {
      overlay: false,
    },
    static: {
      publicPath: path.resolve(__dirname, "build"),
      serveIndex: true,
    },
    hot: "only",
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
