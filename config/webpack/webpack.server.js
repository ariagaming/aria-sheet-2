
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');


const config = {
    entry: __dirname + '/../../app/server/server.js',
    output: {
        path: __dirname + '/../../build/server',
        filename: '[name].js'
    },
    module: {},
    plugins: [
        new WebpackCleanupPlugin()
    ]
}



module.exports = config;