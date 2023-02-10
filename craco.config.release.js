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
            new NodePolyfillPlugin(),
            new Dotenv({
                path: './release.env'
            })
        ]
    },
}