const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use: [{
            loader: 'file-loader',

          }],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      // new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
  };


  return config;
};
