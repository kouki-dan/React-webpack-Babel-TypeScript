const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "ts-loader"
        }
      ]
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist")
  }
};
