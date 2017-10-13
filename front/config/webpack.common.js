let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let helpers = require('./helpers');
let AotPlugin =  require('@ngtools/webpack').AotPlugin;
let autoprefixer       = require('autoprefixer');


module.exports = (env = {}) => {
    console.log('env.aot', env.aot);
    console.log("API_DOMAIN", process.env.API_DOMAIN);
    console.log("VIRTUAL_HOST", process.env.VIRTUAL_HOST);
    console.log("SOCKET_DOMAIN", process.env.SOCKET_DOMAIN);
    console.log("ENV", process.env.ENV);
    return {
        entry: {
            polyfills: './src/polyfills.ts',
            vendor: './src/vendor.ts',
            app: './src/main.ts',
        },

        resolve: {
            extensions: ['.js', '.ts'],
            alias: {
                Img: helpers.root('src', 'Theme', 'img')
            }
        },

        module: {
            rules: [
                !env.aot ? {
                    test: /\.ts$/,
                    use:  [
                        'awesome-typescript-loader',
                        'angular2-template-loader',
                        'angular-router-loader'
                    ]
                }
                : {
                    test: /\.ts$/,
                    loader: '@ngtools/webpack',
                    exclude: helpers.root('node_modules')
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: 'file-loader?name=assets/[name].[hash].[ext]'
                },
                {
                    test: /\.css$/,
                    exclude: helpers.root('src', 'App'),
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader?sourceMap"
                    })
                },
                {
                    test: /\.less$/,
                    exclude: helpers.root('src', 'App'),
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader?sourceMap!less-loader"
                    })
                },
                {
                    test: /\.css$/,
                    include: helpers.root('src', 'App'),
                    use: 'raw-loader'
                },
                {
                    test: /\.less$/,
                    include: helpers.root('src', 'App'),
                    use: ['raw-loader', 'less-loader']
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                }

            ]
        },
        plugins: [

            new webpack.optimize.CommonsChunkPlugin({
                names: ['app', 'vendor', 'polyfills']
            }),

            ...(env.aot? [new AotPlugin({
                tsConfigPath: helpers.root('tsconfig.aot.json'),
                entryModule: helpers.root('src/App/app.module#AppModule'),
                skipCodeGeneration: true,
                typeChecking: false
            })]: []),

            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                JQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),

            new webpack.DefinePlugin({
                "require.specified": "require.resolve"
            }),

            new CopyWebpackPlugin([
                {
                    from: helpers.root('src', 'Lang'), // replace with your folder
                    to: 'Lang'
                }
            ]),

            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),

            new webpack.EnvironmentPlugin(["API_DOMAIN", "VIRTUAL_HOST", "ENV", "SOCKET_DOMAIN"]),

            new webpack.optimize.ModuleConcatenationPlugin(),

        ]
    };
};
