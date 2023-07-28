const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@banking/uikit': resolvePath('./src/uikit'),
    },
    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ['console'],
      }),
      new Dotenv({
        path: "./development.env"
      })
    ],
    configure: (webpackConfig, { env }) => {
      if (env === 'sliced') {
        webpackConfig.entry = './src/src/index.tsx';
        return webpackConfig;
      }
      webpackConfig.entry = './src/index.tsx';
      return webpackConfig;
    }
  },
  style: {
    sass: {
      loaderOptions: {
        implementation: require('sass'),
        webpackImporter: false,
      },
    },
  },
}