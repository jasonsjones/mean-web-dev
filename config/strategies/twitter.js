var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('../config');
var users = require('../../app/controllers/users.server.controller');


module.exports = function () {

    passport.use(new TwitterStrategy({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callbackURL: config.twitter.callbackURL,
        passReqToCallback: true
    },

    function (req, token, tokenSecret, profile, done) {
        console.log('twitter profile');
        console.log(profile);
        var providerData = profile._json;
        providerData.token = token;
        providerData.tokenSecret = tokenSecret;

        var providerUserProfile = {
            fullName: profile.displayName,
            username: profile.username,
            provider: 'twitter',
            providerId: profile.id,
            providerData: providerData
        };

        users.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};