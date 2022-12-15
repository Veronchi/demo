const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: false,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo",
      filename: "index.html",
      template: "./src/templates/index.html",
      inject: "body",
      minify: false,
      favicon: "./src/assets/icons/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[hash][ext][query]",
        },
      },
    ],
  },
};
