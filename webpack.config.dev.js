var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    main: ['webpack-hot-middleware/client',
    './client/Index']
  },
    output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'client'),
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
