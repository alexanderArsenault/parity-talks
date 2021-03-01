const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const prod_Path = '../dist';
const src_Path = 'src';

const {
  selectedPreprocessor
} = require('./loader');

module.exports = {
  mode: 'development',
  entry: {
    main: './' + src_Path + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: prod_Path,
    port: 9000
  },
  module: {
    rules: [{
        test: selectedPreprocessor.fileRegexp,
        use: [{
            loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: ''
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: selectedPreprocessor.loaderName,
            options: {  
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      chunks: ['index'],
      template: './' + src_Path + '/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      chunks: ['index'],
      template: './' + src_Path + '/views/season.html',
      filename: 'season.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      chunks: ['index'],
      template: './' + src_Path + '/views/archive.html',
      filename: 'archive.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      chunks: ['index'],
      template: './' + src_Path + '/views/projects.html',
      filename: 'projects.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      chunks: ['index'],
      template: './' + src_Path + '/views/group.html',
      filename: 'group.html'
    }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, '../src/partials/navigation.html'),
        template_filename: '*',
        location: 'header'
      },
      {
        path: path.join(__dirname, '../src/partials/base.html'),
        template_filename: '*',
        location: 'head'
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
};