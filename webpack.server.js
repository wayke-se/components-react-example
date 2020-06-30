require("dotenv").config();
const path = require("path");

module.exports = {
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "build"),
    port: 5000,
    historyApiFallback: true,
    writeToDisk: true,
    allowedHosts: process.env.WAYKE_HOST
      ? process.env.WAYKE_HOST.replace(/\s/g, "").split(",")
      : undefined,
  },
};
