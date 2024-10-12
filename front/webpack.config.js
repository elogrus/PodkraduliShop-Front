// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: './src/index.tsx',
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    devServer: {
        open: true,
        host: 'localhost.hehe',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new BundleAnalyzerPlugin()

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
                        },
                    },
                },],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
                        },
                    },
                }, 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './src/'),
        ]
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
    }
    return config;
};
