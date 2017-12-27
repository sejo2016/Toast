var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// var CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: {
        // "vendor": ['react', 'react-dom', 'classnames'],
        'index': './lib/index.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: "/[name].js",
        chunkFilename: "/[name].min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'style!css')},
            {test: /\.(png|jpg|gif)$/, loader: "url?limit=8192&name=./[name].[ext]"},
            {test: /\.json$/, loader: "json"},
            {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    },
    url: {
        dataUrlLimit: 2048
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json']
    },
    devtool: false,
    postcss: function () {
        return [autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin('/[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'm/vendor.bundle.[chunkhash:8].js'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,        //去掉注释
            compress: {
                warnings: false    //忽略警告
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
        //     template: 'example/index.html',
        //     chunks: ['index'],
        //     inject: true,
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ["vendor", "init"],
        //     minChunks: Infinity
        // })
    ],
};