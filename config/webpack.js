"use strict";

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const build = require("./build");

module.exports = merge => {
  const wpc = Object.assign(merge || {}, {
    output: Object.assign({}, build.js.output, {
      libraryTarget: "umd"
    }),
    plugins: [new MiniCssExtractPlugin({ filename: "app.css" })],

    resolve: {
      extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".css"],
      modules: ["node_modules", `${build.projDir}/src`]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: "babel-loader"
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: "[local]___[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  require("postcss-import")({
                    path: ["node_modules", build.src]
                  }),
                  require("postcss-cssnext")()
                ]
              }
            }
          ]
        }
      ]
    }
  });

  if (!build.production) {
    wpc.devtool = "#source-map";
  }

  return wpc;
};
