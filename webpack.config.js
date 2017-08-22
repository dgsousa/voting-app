const ExtractTextPlugin = require("extract-text-webpack-plugin");




module.exports = {
	context: __dirname + "/app",
	entry: "./index.jsx",
	output: {
		path: __dirname + "/public",
		filename: "app.bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: "/node_modules/",
				loader: "babel-loader" 
			},
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader", 
					use: "css-loader!sass-loader"
				})
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	},

	plugins: [ new ExtractTextPlugin("[name].css")]
}