const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                type: "javascript/auto",
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceType: "unambiguous",
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public/ctpl-logo.png",
                    to: "ctpl-logo.png"
                }
            ]
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true
    }
};