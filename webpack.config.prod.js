import path from "path";
import webpack from "webpack";

export default {
  debug: true, // enable some debugging info when run our build
  devtool: "source-map",
  noInfo: false, // display a list of all files that bundled
  entry: [path.resolve(__dirname, "src/index")],
  target: "web", // target envi
  output: {
    path: path.resolve(__dirname, "dist"), // folder where our app will run
    publicPath: "/",
    filename: "bundle.js", // bundle name
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin(),
  ],
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
