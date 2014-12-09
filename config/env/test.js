module.exports = {
    // test configuration options
    db: 'mongodb://' + process.env.TEST_DB_USER + ':' + process.env.TEST_DB_PWD +
            '@ds063140.mongolab.com:63140/mean-book-test',
    sessionSecret: 'testSessionSecret',
    viewEngine: 'ejs',
    facebook: {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/oauth/facebook/callback'
    },
    twitter: {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: 'http://127.0.0.1:3000/oauth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/oauth/google/callback'
    },
};