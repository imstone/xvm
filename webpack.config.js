/**
 * @file: 配置文件
 * @author: tanruixing@baidu.com
 * @date: 2016-09-29
 *
 * */

var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/xvm.js'
    },
    // 入口文件输出配置
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: ROOT_PATH,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8063,
        inline: true,
        progress: true
    },
    plugins: [

        new HtmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve('./index.tpl'),
            filename: 'index.html',
            chunks: ['index'],
            inject: 'body'
        })

    ]
};
