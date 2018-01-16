const path = require('path')
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './docs'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ['vue-style-loader', 'css-loader', {
                            loader: 'sass-loader', options: {
              /*spaghetti*/   outputStyle: 'compressed'
                            }
                        }],
                    }
                }
            }],
        }, {
            test: /\.(svg)$/,
            use: ['svg-inline-loader']
        }, {
            test: /\.(txt)$/,
            use: ['raw-loader']
        }, {
            test: /\.(html)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }],
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
          }),
        new webpack.ProgressPlugin(),
        new UglifyJsPlugin()]
}