const path = require('path');

module.exports = {
  entry: './entry/index.js',
  module: {
  	rules: [
  		{
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      use: [
	          {loader: 'babel-loader'}
	      ]
      },
  		{
  			test: /\.css$/, 
  			use: [
  			{loader: 'style-loader'},
  			{
  				loader: 'css-loader',
  				options: {
  					modules: true
  				}
  			}
  			]
  		},
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
      }
  	]
  },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
    },
      output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
};