const Config = require("webpack-config").Config;

const prod = new Config().extend("./webpack/base.config").merge({});

module.exports = prod;
