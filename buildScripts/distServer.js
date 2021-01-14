// configure web server to serve files in src directory
// serving root and sending `index.html`
// open app at http://localhost: and port 3000

import express from "express";
import path from "path";
import open from "open"; // used to open our site in the browser
import compression from "compression";

/* eslint-disable no-console */

const port = 3000;
const app = express(); // create instance of express

// enable Gzip compression
app.use(compression());

// enable express to serve static files
app.use(express.static("dist"));

// put compiler in use >> step 3
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

// route express should handle
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// a simple endpoint return user data
app.get("/users", function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    { id: 2, firstName: "Tammy", lastName: "Norton", email: "tno@yahoo.com" },
    {
      id: 3,
      firstName: "Tina",
      lastName: "Lee",
      email: "lee.tina@hotmail.com",
    },
  ]);
});

// listen to port
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});

// to serve our app
// tell node to run this file
// node <path>
// node buildScripts/srcServer.js
