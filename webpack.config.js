const webpack = require('webpack');
const uglifyjsWebpack = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    entry: 'app/js/*.js',
    filename: 'bundle.js'
  },
  plugins: [
    new uglifyjsWebpack({
      sourceMap: true
    })
  ]
};