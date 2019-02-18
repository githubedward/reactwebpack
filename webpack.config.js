const HtmlWebPackPlugin = require('html-webpack-plugin');
// this plugin generates an html file with <script> injected
// writes to 'dist/index.html', and minifies the file

// instantiate plugin
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});
// value of template is where webpack is looking for the html file
// filename is the minified html that will be generated to dist folder

module.exports = {
  module: {
    // for js files, use babel-loader to transpile all of them
    rules: [
      {
        // test prop identifies while files to be transformed
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        // use prop indicates which loader should be use to do the transforming
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};
