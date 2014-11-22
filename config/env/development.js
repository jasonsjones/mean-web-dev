module.exports = {
    // development configuration options
    db: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PWD + 
            '@ds033390.mongolab.com:33390/mean-book',
    sessionSecret: 'developmentSessionSecret'
};