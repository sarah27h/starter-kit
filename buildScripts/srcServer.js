// configure web server to serve files in src directory
// serving root and sending `index.html`
// open app at http://localhost: and port 3000

import express from 'express';
import path from 'path';
import open from 'open'; // used to open our site in the browser

// step up our express server to serve our webpack bundle >> step 1
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;

// create instance of express
const app = express();

// reference webpack compiler >> step 2
const compiler = webpack(config);

// put compiler in use >> step 3
app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

// route express should handle
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// listen to port
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

// to serve our app
// tell node to run this file
// node <path>
// node buildScripts/srcServer.js
