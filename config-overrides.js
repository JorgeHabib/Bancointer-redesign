const { addWebpackPlugin, override } = require('customize-cra');
const ReactFastRefresh = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = override(
  isDevelopment && addWebpackPlugin(new ReactFastRefresh()),
)
