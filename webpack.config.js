const webpack = require('webpack');
const uglifyjsWebpack = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new uglifyjsWebpack({
      sourceMap: true
    })
  ]
};