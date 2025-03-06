const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '153799277918-2o182nq935aqb9qec22g262ka2epsr28.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(err, profile);
  }
));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// module.exports = auth;

