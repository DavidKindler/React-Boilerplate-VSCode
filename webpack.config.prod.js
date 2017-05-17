var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// process.traceDeprecation = true;
// https://github.com/webpack/loader-utils/issues/56

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/dist',
    filename: 'index_bundle.js'
  },
  plugins:[
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // Uncomment for sourcemaps.  This increase size of file greatly.
  // devtool: 'eval-source-map',
  module: {
        rules : [
          {
            loader: 'babel-loader',
            query:{ presets: ['react','es2015']},
            test: /\.jsx?$/,
            exclude: /(node_modules)/
          }
        ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.json']
  },
    // Uncomment if you do not want to include react and react-dom in bundle.js  
    // },                                                                        
         
};
