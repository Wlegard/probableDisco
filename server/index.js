const express = require("express");
const path = require("path");

// import routes
const avatarRoute = require("./routes/avatar.js");
const commentsRoute = require("./routes/comments.js");
const libraryRoute = require("./routes/library.js");
const queueRoute = require("./routes/queue.js");
const settingsRoute = require("./routes/settings.js");

// create express app
const application = express();
// select port number
const portNum = 3000;

// middleware
application.use(express.json());
application.use(express.urlencoded({extended: true}));

// serve up static files (react app)
const distPath = path.resolve(__dirname, '../dist');
application.use(express.static(distPath));

// start up the express server using the port number
application.listen(portNum, () => {
  console.log('Listening on port: ' + portNum)
})