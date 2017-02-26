'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}) => {

	// Variables set by npm scripts in package.json
	const isProduction = env.production === true;
	const platform = env.platform;

	return {
		context: path.resolve(__dirname, 'src'),

		entry: [
			// activate HMR for React
			'react-hot-loader/patch',

			// bundle the client for webpack-dev-server and connect to the provided endpoint
			'webpack-dev-server/client?http://localhost:8080',

			// bundle the client for hot reloading only- means to only hot reload for successful updates
			'webpack/hot/only-dev-server',

			// entry point of the app
			path.resolve(__dirname, 'src/scripts/main.js'),
		],

		output: {
			// the output bundle
			filename: '[name].bundle.js',

			path: path.resolve(__dirname, 'dist'),

			// necessary for HMR to know where to load the hot update chunks
			publicPath: ''
		},

		module: {
			rules: [
				{
					test: /\.(js|.jsx)$/,
					include: [path.resolve(__dirname, 'src')],
					use: [{ loader: 'babel-loader', options: { presets: ['es2015'] } }]
				},
				{
					test: /\.(scss)$/,
					include: [path.resolve(__dirname, 'src')],
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.(png|gif|jpg)$/,
					use: [{ loader: 'url-loader', options: { limit: '25000' } }]
				},
				{
					test: /\.(woff|woff2|ttf|eot|svg)$/,
					loader: 'file-loader'
				}
			]
		},

		plugins: [
			// enable HMR globally
			new webpack.HotModuleReplacementPlugin(),

			// prints more readable module names in the browser console on HMR updates
			new webpack.NamedModulesPlugin(),

			new webpack.optimize.UglifyJsPlugin({
				compress: {
					unused: true,
					dead_code: true,
				},
				output: {
					comments: false,
				}
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'commons',
				filename: 'commons.js',
				minChunk: 2,
			}),
			new HtmlWebpackPlugin({
				template: './index.html'
			}),
			new webpack.DefinePlugin({
				PRODUCTION: JSON.stringify(isProduction),
				PLATFORM: JSON.stringify(platform),
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
		],

		devServer: (() => {
			if (isProduction) {
				return {};
			}
			else {
				return {
					// enable HMR on the server
					hot: true,

					// match the output path
					contentBase: __dirname + '/dist',

					// match the output `publicPath`
					publicPath: ''
				}
			}
		})(),

		devtool: (() => {
			if (isProduction) {
				return "source-map";
			} else {
				return "cheap-eval-source-map";
			}
		})(),

	};
}
