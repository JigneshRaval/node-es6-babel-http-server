var path = require('path');
var webpack = require('webpack');

module.exports = {
	  entry: './src/main.js',
	  output: { path: __dirname +"/build/", filename: 'bundle.js' },
	  module: {
		    loaders: [
			{
				test: /.jsx?$/, // /\.js$/
				loader: 'babel', // 'babel-loader' is also a valid name to reference
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	  },
};