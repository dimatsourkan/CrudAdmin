let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let autoprefixer       = require('autoprefixer');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
module.exports = (env) => {
    return webpackMerge(commonConfig(env), {

        output: {
            path: helpers.root('dist'),
            publicPath: '/',
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].chunk.js'
        },

        plugins: [
            // new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: true
                },
                mangle: {
                    keep_fnames: true
                },
                uglifyOptions : {

                }
            }),

            new ExtractTextPlugin('[name].[hash].css'),

            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify(ENV),
                    'SOCKET_DOMAIN' : JSON.stringify(process.env.SOCKET_DOMAIN),
                    'API_DOMAIN' : JSON.stringify(process.env.API_DOMAIN),
                    'VIRTUAL_HOST' : JSON.stringify(process.env.VIRTUAL_HOST),
                },
            }),

            new CopyWebpackPlugin([
                {
                    from: helpers.root('src', 'Lang'), // replace with your folder
                    to: 'Lang'
                }
            ]),

            new webpack.LoaderOptionsPlugin({
                options: {
                    tslint: {
                        emitErrors: false,
                        failOnHint: false
                    },
                    postcss: [
                        autoprefixer({
                            browsers: [
                                'Firefox > 20',
                                'iOS > 6',
                                'not ie <= 8'
                            ]
                        })
                    ]
                }
            }),

            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: {removeAll: true } },
                canPrint: true
            })
        ]
    });
};
