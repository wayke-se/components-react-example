require("dotenv").config();
const merge = require("webpack-merge");
const base = require("./webpack.typescript.js");
const server = require("./webpack.server");

module.exports = merge(base, server);
