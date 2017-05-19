const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: "[name].css"
});


const excludes = [/elm-stuff/, /node_modules/];


const config = {
    watch: true,
    module: {
        rules: [{
            test: /\.less$/,
            exclude: excludes,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        },
        {
            test: /\.jsx?/,
            exclude: excludes,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        extractLess
    ]
}



module.exports = config;