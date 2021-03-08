const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prod_Path = '../dist';
const src_Path = 'src';

const {
  selectedPreprocessor
} = require('./loader');

module.exports = {
  mode: 'production',
  entry: {
    main: '/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: selectedPreprocessor.fileRegexp,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              }
            },
          },
          {
            loader: selectedPreprocessor.loaderName
          }
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
          options: {
            name: '[name].[ext]',
            outputPath: '/assets/img/theme',
          },
        }],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
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
        template: './' + src_Path + '/views/group.html',
        filename: 'group.html'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: false,
        chunks: ['index'],
        template: './' + src_Path + '/views/info.html',
        filename: 'info.html'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: false,
        chunks: ['index'],
        template: './' + src_Path + '/views/schedule.html',
        filename: 'schedule.html'
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
        {
          path: path.join(__dirname, '../src/partials/footer.html'),
          template_filename: '*',
          location: 'footer'
        },
      ]),
      // new MiniCssExtractPlugin({
      //   filename: 'style.css',
      // }),
  ]
};