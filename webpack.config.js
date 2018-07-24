const webpack = require("webpack")
const path = require("path")

module.exports = {
  mode: "production",
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "html-table-tool.min.js",
    library: "tableTool",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "__DEV__": true,
      "__VERSION__": "1.1.0"
    })
  ]
}
