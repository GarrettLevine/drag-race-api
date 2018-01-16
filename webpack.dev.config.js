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
        bundle: [`${__dirname}/src/index.jsx`, `${__dirname}/src/styles/main.scss`],
        vendor: VENDOR_LIBS,
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/',
    },
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
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/index.template.html`,
            filename: 'index.html',
            appMountId: 'app',
            inject: true,
            files: {
                css: [`${__dirname}/public/main.css`],
            },
        }),
        new WriteFilePlugin({ log: true }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ],
          }),
    ]
};
