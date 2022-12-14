const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    // https://webpack.js.org/guides/tree-shaking/
    usedExports: true,

    minimizer: [
      // https://webpack.js.org/plugins/html-minimizer-webpack-plugin/
      new HtmlMinimizerPlugin(),

      // https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
      new CssMinimizerPlugin(),

      // https://webpack.js.org/plugins/terser-webpack-plugin/
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
});