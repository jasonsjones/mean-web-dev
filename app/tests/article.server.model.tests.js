var app = require('../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Article = mongoose.model('Article');

var user, article;

describe('Article Model Unit Tests:', function () {

    beforeEach(function (done) {
        user = new User({
            firstName: 'Full',
            lastName: 'Name',
            displayName: 'Full Name',
            email: 'test@test.com',
            username: 'username',
            password: 'password'
        });

        user.save(function () {
            article = new Article({
                title: 'Article Title',
                content: 'Article Content',
                user: user
            });

            done();
        });
    });

    describe('Testing the save method', function () {

        it('should be able to save without problems', function () {
            article.save(function (err) {
                should.not.exist(err);
            });
        });

        it('should not be able to save article without title', function () {
            article.title= '';

            article.save(function (err) {
                should.exist(err);
            });
        });
    });

    afterEach(function (done) {
        Article.remove(function () {
            User.remove(function () {
                done();
            });
        });
    });

});