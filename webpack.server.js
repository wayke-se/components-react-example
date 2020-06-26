require("dotenv").config();
const path = require("path");

module.exports = {
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "build"),
    port: 5000,
    historyApiFallback: true,
    writeToDisk: true,
    public: process.env.WAYKE_HOST,
  },
};
