
const PACKAGE = require('./../../package.json');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: "./../css/[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});


const excludes = [/elm-stuff/, /node_modules/, /build/];


const config = {
    entry: __dirname + '/../../app/client/index.js',
    output: {
        path: __dirname + `/../../releases/${PACKAGE.version}/client/js/`,
        filename: '[name].[hash].js'
    },
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
            test: /\.js(x)?/,
            exclude: excludes,
            loader: 'babel-loader'
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./../font/[hash].[ext]" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=./../font/[hash].[ext]" }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/../../app/public/index.html',
            filename: __dirname + `/../../releases/${PACKAGE.version}/client/index.html`,
            inject: true
        }),
        new WebpackCleanupPlugin(),
        new UglifyJSPlugin({
            sourceMap: false,
            mangle: false
        }),
        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: true,
                InjectAsComment: true
            },
            componentsOptions: {
                InjectAsComment: {
                    tag: 'Build version: [version] - {date}'
                }
            }
        }),
        new CopyWebPackPlugin([
            { from: __dirname + '/../../app/public', to: __dirname + `/../../releases/${PACKAGE.version}/client`, }
        ],
            {
                ignore: __dirname + '/../../app/public/index.html'
            }),
        extractLess
    ]
}



module.exports = config;