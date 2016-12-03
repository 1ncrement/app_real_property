/**
 * Created by Increment on 27.11.2016.
 */

const
	path = require('path'),
	webpack = require('webpack'),

	config = {
		devtool: 'eval-source-map',
		entry: [
			'webpack-hot-middleware/client',
			'whatwg-fetch',
			'babel-polyfill',
			path.join(__dirname, '/src/js/index.js')
		],
		output: {
			path: path.join(__dirname, 'bundle/js'),
			filename: 'bundle.min.js',
			publicPath: '/bundle/js/'
		},
		plugins: [
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
			})
		],
		module: {
			loaders: [
				{
					test: /\.js$/,
					include: [
						path.resolve(__dirname, 'src/js')
					],
					loaders: ['babel-loader']
				},
				{
					test: /\.scss$/,
					include: [
						path.resolve(__dirname, 'src/scss')
					],
					loader: 'style-loader!css-loader!sass-loader'
				}
			]
		}
	};

module.exports = config;