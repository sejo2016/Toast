var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// var CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: {
        // "vendor": ['react', 'react-dom', 'react-router', 'classnames'],
        'index': './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: "[name].js",
        chunkFilename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: [path.resolve(__dirname, 'node_modules')],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react', 'es2015'],
                        plugins: ['syntax-dynamic-import', 'transform-react-jsx']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('postcss-import')({root: loader.resourcePath}),
                            require('autoprefixer')(), //CSS浏览器兼容
                            require('cssnano')()  //压缩css
                        ]
                    }
                }, 'sass-loader'])
            },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract(['css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: (loader) => [
                        require('postcss-import')({root: loader.resourcePath}),
                        require('autoprefixer')(), //CSS浏览器兼容
                        require('cssnano')()  //压缩css
                    ]
                }
            }])
            },
            {test: /\.(png|jpg|gif)$/, use: ["url-loader?limit=8192&name=./img/[name].[ext]"]},
            {test: /\.svg/, use: ['svg-url-loader']}
        ]
    },
    resolve: {
        // modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.js', '.json', '.scss', '.css']
    },
    devtool: false,
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'm/vendor.bundle.[chunkhash:8].js'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,        //去掉注释
            compress: {
                warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        }),
        // new CompressionWebpackPlugin({ //gzip 压缩
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp(
        //         '\\.(js|css)$'    //压缩 js 与 css
        //     ),
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'app/index.html',
        //     chunks: ['Index', "init", "vendor"],
        //     inject: true,
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ["vendor", "init"],
        //     minChunks: Infinity
        // }),
        new webpack.LoaderOptionsPlugin({
            debug: false,
            options: {
                postcss: [
                    autoprefixer()
                ],
            },
        })
    ],
};