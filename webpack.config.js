const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')

const resolve = (dist) => path.resolve(__dirname, dist)


module.exports = env => {

    let plugins = [
        
        new cleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ]
    if (process.env.NODE_ENV === 'production') {
        plugins.push(
            new extractTextWebpackPlugin('stylee.css'),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }),
        )
    }

    return {
        entry: {
            app: resolve('./src/main.js')
        },
        output: {
            filename: '[name].min.js',
            path: resolve('dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                loaders: {
                                    css: process.env.NODE_ENV === 'production' ? extractTextWebpackPlugin.extract({
                                        use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                                        fallback: 'vue-style-loader'
                                    }) : 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',

                                    stylus: process.env.NODE_ENV === 'production' ? extractTextWebpackPlugin.extract({
                                        use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!stylus-loader',
                                        fallback: 'vue-style-loader'
                                    }) : 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!stylus-loader'
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.styl$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'px2rem-loader',
                            options: {
                                remUni: 75,
                                remPrecision: 8
                            }
                        },
                        'stylus-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'px2rem-loader',
                            options: {
                                remUni: 75,
                                remPrecision: 8
                            }
                        },
                    ]
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        limit: 1024
                    }
                }
            ]
        },
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            overlay: {
                errors: true
            },
            hot: true
        },
        resolve: {
            // extensions: ['.js', '.vue'],
            alias: {
                'css$': resolve('src/css/')
            }
        },
        plugins,
        devtool: '#cheap-module-source-map'
        
    }
}