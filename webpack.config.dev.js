// webpack will bundle all our assests into a single file that target an environment
// our app target environment is web
// note: for output => webpack won't actually generate any physical files for our development build.
// it will create a bundle and memory and serve it to browser.
// but we need to define a path and a name so it can simulate physical file's existence.

import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  debug: true, // enable some debugging info when run our build
  devtool: "inline-source-map",
  noInfo: false, // display a list of all files that bundled
  entry: [path.resolve(__dirname, "src/index")],
  target: "web", // target envi
  output: {
    path: path.resolve(__dirname, "src"), // folder where our app will run
    publicPath: "/",
    filename: "bundle.js", // bundle name
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
  ], // [hot reloading, catching errors, linting styles, ....]
  module: {
    // specifiy file types webpack will handle webpack called loaders
    // teach webpack how to handle different file types like js, css, sass, less, images, ....
    // add loaders to handle more than js
    // means we can import those files at the top of my js files
    // and then webpack will intelligently bundle the files together
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loaders: ["style", "css"] },
    ],
  },
};
