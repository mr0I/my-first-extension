const path = require('path');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: glob.sync('./src/**/*.ts').reduce((obj, el) => {
        obj[path.parse(el).name] = './' + el;
        return obj;
    }, {}),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: '**',
                context: path.resolve(__dirname, "src"),
                to: path.resolve(__dirname, "dist"),
                globOptions: {
                    ignore: ["**/*.ts"]
                },
                force: true
            }]
        })
    ],
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all"
        }
    }
}