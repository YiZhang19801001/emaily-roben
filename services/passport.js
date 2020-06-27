const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// password stragtegy options
// clientID, clientSecret,callbackURL is MUST have properties
const options = {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}

passport.use(new GoogleStrategy(options, (accessToken, refreshToken, profile, done) => {
    console.log("accessToken: ", accessToken);
    console.log("refreshToken: ", refreshToken);
    console.log("profile: ", profile);
    console.log("done: ", done);
}));
