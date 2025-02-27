const express = require("express");
const path = require("path");
const application = express();
const portNum = 3000;

application.listen(portNum, () => {
  console.log('Listening on port: ' + portNum)
})