const merge = require('webpack-merge')

const cesiumConfig = require('./webpack.cesium.config');
const originalConfig = require('./webpack.original.config');

module.exports = (env) => merge(originalConfig(env), cesiumConfig);