const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: './src/index.jsx',
    output: {
        filename: '[name].js',
        path: `${__dirname}/public`,
        publicPath: 'http://localhost:8080/',
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    devServer: {
        stats: {
            chunkModules: false,
            colors: true,
            path: path.resolve(__dirname, 'public'),
        },
        contentBase: `${__dirname}/public`,
        historyApiFallback: true,
        publicPath: 'http://localhost:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/': {
                target: 'http://localhost:3000',
            },
        },
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/,
                loaders: [ 'babel-loader' ],
                include: path.resolve('src')
            },
            {
                test: /\.scss$/,
                loaders: ["c", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            filename: 'index.html',
            appMountId: 'app',
            inject: true,
        }),
    ]
};
