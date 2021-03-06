const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const outputDir = path.resolve(__dirname, 'dist/assets/js');

module.exports = {
	entry: path.resolve(__dirname, './src/js/index.js'),
	output: {
		path: outputDir,
		filename: 'app.bundle.js',
		sourceMapFilename: 'app.bundle.js.map'
	},
	// devtool: 'sourcemap',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/
			})
		]
	}
};
