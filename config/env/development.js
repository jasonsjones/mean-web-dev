module.exports = {
    // development configuration options
    db: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PWD + 
            '@ds033390.mongolab.com:33390/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/oauth/facebook/callback'
    },
    twitter: {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: 'http://127.0.0.1:3000/oauth/twitter/callback'
    }
};