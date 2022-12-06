const path = require("path");
const glob = require("glob");
const inputDir = path.resolve(__dirname, "src/js/**/*.js");
const outputDir = path.resolve(__dirname, "./assets");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: glob.sync("./src/js/**/*.js").reduce((acc, item) => {
        const path = item.split("/");
        path.pop();
        const name = path.join('/');
        acc[name] = item;
        return acc;
      }, {}),
      output: {
        filename: "[name]/bundle.js",
        path: outputDir
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
};