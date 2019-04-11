var merge = require('webpack-merge');
const webpack = require('webpack');

// Plugins
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var baseConfig = require('./webpack.base.config');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        },
        minimizer: [new TerserPlugin()],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: './statistics.html' }),
        new webpack.optimize.AggressiveMergingPlugin(),
        // new BundleAnalyzerPlugin()
      ],
    },
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
}