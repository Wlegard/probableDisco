const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
// import routes
const avatarRoute = require("./routes/avatar");
const commentsRoute = require("./routes/comments");
const libraryRoute = require("./routes/library");
const queueRoute = require("./routes/queue");
const settingsRoute = require("./routes/settings");
const songsRoute = require("./routes/songs");

// create express app
const app = express();
// SWITCH TO ENV VARIABLE??
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

require('../auth.js');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('something went wrong...');
});

app.get('/protected', isLoggedIn, (req, res) => {
  res.send('Hello');
});
// select port number
const portNum = 3000;

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//app.use(cors());


// serve up static files (react app)
const distPath = path.resolve(__dirname, "../dist");
app.use(express.static(distPath));

// link routers to express server
app.use("/avatar", avatarRoute);
app.use("/comments", commentsRoute);
app.use("/library", libraryRoute);
app.use("/queue", queueRoute);
app.use("/settings", settingsRoute);
app.use("/songs", songsRoute);

// start up the express server using the port number
app.listen(portNum, () => {
  console.log(`Listening on port: ${portNum}`);
});
