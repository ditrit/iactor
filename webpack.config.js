const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './launcher-terraform.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    performance: {
        maxEntrypointSize: 400000,
        hints: 'warning',
    },
    devtool: 'source-map',
    resolve: {
        fallback: {
            "fs": false
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [new ESLintPlugin()]
}