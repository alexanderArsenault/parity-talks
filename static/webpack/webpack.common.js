const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			hash: false,
			chunks: ['index'],
			template: './src/index.html',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: false,
			chunks: ['index'],
			template: './src/views/season.html',
			filename: 'season.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: false,
			chunks: ['index'],
			template: './src/views/group.html',
			filename: 'group.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: false,
			chunks: ['index'],
			template: './src/views/info.html',
			filename: 'info.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: false,
			chunks: ['index'],
			template: './src/views/schedule.html',
			filename: 'schedule.html'
		}),
		new HtmlWebpackPartialsPlugin([
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
	],
};