const config = env => require(`./webpack/${env}.config`);

module.exports = config;
