const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: {
        main: './src/index.tsx',
        sw: './src/service-worker.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /service-worker.ts$/,
                use: 'ts-loader',
                type: 'asset/resource',
                generator: {
                    filename: 'sw.js',
                },
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /worker\.ts$/],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            excludeChunks: ['sw'],
        }),
        new EslintWebpackPlugin({
            files: '{**/*,*}.{tsx,ts,js}',
        }),
        new StylelintWebpackPlugin({
            files: '{**/*,*}.css',
        }),
        new webpack.DefinePlugin({
            'process.env.TOKEN': JSON.stringify(process.env.TOKEN),
        }),
    ],
    devServer: {
        client: {
            overlay: false,
        },
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
}
