const path = require("path");

module.exports = {
    entry: "./index.js",
    mode: "development",
    target: 'web',
    output: {
        path: path.resolve(__dirname, ".."),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2016", "stage-2"],
                    plugins: ["transform-decorators-legacy"]
                }
            }
        ]
    }
};
