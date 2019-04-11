const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      devServer: {
        port: 3000
      },
      entry: ['@babel/polyfill', APP_DIR],
      output: {
        path:  path.resolve(__dirname, '../docs')
      },
      module: {
        rules: [
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                  disable: true
                }
              }
            ]
          },
          {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, APP_DIR)
        },
        extensions: ['*', '.mjs', '.js', '.jsx'],
        enforceExtension: false
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
        new MiniCssExtractPlugin({
          filename: 'styles/[name].css'
        })
      ]
    }
  ]);
};
