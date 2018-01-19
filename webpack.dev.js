var path = require('path');
var autoprefixer = require('autoprefixer');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        'index': './demo/index.js'
    },
    output: {
        path: path.join(__dirname, 'devBuild'),
        publicPath: '/',
        filename: "[name]/[name].js"
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
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?sourceMap', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({browsers: 'ios >= 8'})
                        ],
                        sourceMap: true
                    }
                }, 'sass-loader?sourceMap']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?sourceMap', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({browsers: 'ios >= 8'})
                        ],
                        sourceMap: true
                    }
                }]
            },
            {test: /\.(png|jpg|gif)$/, use: ["url-loader?limit=8192&name=./img/[name].[ext]"]},
            {test: /\.svg/, use: ['svg-url-loader']}
        ]
    },
    resolve: {
        // modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.js', '.json', '.scss', 'css']
    },
    devtool: 'eval',
    plugins: [
        // new ExtractTextPlugin('[name]/[name].[hash:5].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'demo/index.html',
            chunks: ['index']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
                // 'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new webpack.LoaderOptionsPlugin({
        // 	debug: false,
        // 	options: {
        // 		postcss: [
        // 			autoprefixer()
        // 		],
        // 	},
        // }),
        new OpenBrowserPlugin({url: 'http://localhost:1234'})
    ]
};