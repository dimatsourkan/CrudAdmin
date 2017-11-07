var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

// const ENV  = process.env.NODE_ENV = process.env.ENV = 'development';
const port = process.env.VIRTUAL_PORT || 8081;
const host = process.env.VIRTUAL_HOST || `localhost:${port}`;

module.exports = (env) => {
    return webpackMerge(commonConfig(env), {
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: helpers.root('dist'),
            publicPath: `http://${host}/`,
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
            new ExtractTextPlugin('[name].css'),
            new ExtractTextPlugin('[name].less')
        ],

        devServer: {
            historyApiFallback: true,
            stats: 'minimal',
            compress: true,
            disableHostCheck: true
        },

        watchOptions: {
            poll: 1000,
            aggregateTimeout: 1000
        }
    });
};
