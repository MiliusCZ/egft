const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stylesheetsLoader =
  'style-loader!css-loader?modules&localIdentName=[path]-[local]-[hash:base64:3]';
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
  },
  devtool: 'source-map',
  debug: true,
  plugins: [htmlWebpackPlugin, definePlugin],
  resolve: {
    root: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: stylesheetsLoader },
      { test: /\.scss$/, loader: `${stylesheetsLoader}'!sass` },
      { test: /\.sass$/, loader: `${stylesheetsLoader}'!sass?indentedSyntax=sass` },
      { test: /\.less$/, loader: `${stylesheetsLoader}'!less` },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.(jpg|png)$/,
<<<<<<< HEAD
        loader: 'url-loader?limit=25000&name=images/[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url-loader',
=======
        loader: 'url?limit=25000&name=images/[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url',
>>>>>>> c80a58bab2fbcfea52b68bad1a382b9cea8e30ec
        query: {
          name: 'font/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf$|\.eot$/,
<<<<<<< HEAD
        loader: 'file-loader',
=======
        loader: 'file',
>>>>>>> c80a58bab2fbcfea52b68bad1a382b9cea8e30ec
        query: {
          name: 'font/[hash].[ext]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
