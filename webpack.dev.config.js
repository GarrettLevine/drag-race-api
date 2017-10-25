const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const VENDOR_LIBS = [
    'react',
    'react-dom',
  ];

module.exports = {
    devtool: 'eval',
    entry: {
        bundle: './src/index.jsx',
        vendor: VENDOR_LIBS,
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: './',
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.js', '.jsx'],
    },
    devServer: {
        stats: {
            chunkModules: false,
            colors: true,
            path: path.join(__dirname, 'public'),
        },
        contentBase: `${__dirname}/public`,
        historyApiFallback: true,
        publicPath: 'http://localhost:3000/',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/': {
                target: 'http://localhost:8080',
            },
        },
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/,
                loaders: [ 'babel-loader' ],
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
        new WriteFilePlugin({ log: true }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ],
          }),
    ]
};
