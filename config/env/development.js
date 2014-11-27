module.exports = {
    // development configuration options
    db: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PWD + 
            '@ds033390.mongolab.com:33390/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '827269583980893',
        clientSecret: '52fd07316069f2e7208f92d38d543750',
        callbackURL: 'http://127.0.0.1:3000/oauth/facebook/callback'
    }
};