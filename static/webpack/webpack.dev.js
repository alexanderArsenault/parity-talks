const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const {
  prod_Path,
  src_Path
} = require('./path');
const {
  selectedPreprocessor
} = require('./loader');

module.exports = {
  entry: {
    main: './' + src_Path + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  module: {
    rules: [{
        test: selectedPreprocessor.fileRegexp,
        use: [{
            loader: MiniCssExtractPlugin.loader
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
      }
    ]
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: src_Path + '/assets/css', to: '../../craft/web/' },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/program.html',
      filename: 'program.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/logbook.html',
      filename: 'logbook.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/stream.html',
      filename: 'stream.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/artist.html',
      filename: 'artist.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/impressum.html',
      filename: 'impressum.html'
    }),

  ]
};