const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    devServer: { historyApiFallback: true },
    devtool: "source-map",
    entry: {
        main: "main.ts",
        renderer: "renderer.ts",
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
            { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" },
        ],
    },
    output: {
        path: __dirname,
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
    ],
    resolve: {
        modules: [__dirname + "/src", __dirname + "/node_modules"],
        extensions: [".ts", ".tsx", ".js"],
    },
}