const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const excludes = [/elm-stuff/, /node_modules/, /build/];

const config = {
    watch: true,
    entry: __dirname + '/../../app/client/index.js',
    output: {
        path: __dirname + '/../../build/client/js/',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.elm$/,
            exclude: excludes,
            use: {
                loader: 'elm-webpack-loader',
                options: {}
            }
        }, {
            test: /\.less$/,
            exclude: [/elm-stuff/, /build/],
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader",
                options: {
                    paths: [],
                    plugins: [require('less-plugin-glob')]
                }
            }]
        }, {
            test: /\.(js|jsx)$/,
            exclude: excludes,
            loader: 'babel-loader'
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./../font/[hash].[ext]" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=./../font/[hash].[ext]" }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/../../app/public/index.html',
            filename: __dirname + '/../../build/client/index.html',
            inject: true
        }),
        new BrowserSyncPlugin({
            server: {
                baseDir: ['build/client']
            }
        }),
        new WebpackCleanupPlugin(),
        new CopyWebPackPlugin([
            { from: __dirname + '/../../app/public', to: __dirname + '/../../build/client' }
        ],
            {
                ignore: __dirname + '/../../app/public/index.html'
            })
    ]
}



module.exports = config;