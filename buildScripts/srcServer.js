// configure web server to serve files in src directory
// serving root and sending `index.html`
// open app at http://localhost: and port 3000

const express = require('express');
const path = require('path');
const open = require('open'); // used to open our site in the browser

const port = 8080;

// create instance of express
const app = express();

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
