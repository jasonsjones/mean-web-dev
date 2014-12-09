
var app = require('../../server.js'),
    request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Article = mongoose.model('Article');

var user, article;

describe('Article Controller Unit Tests:', function () {

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

            article.save(function (err) {
                done();
            });
        });
    });

    describe('Testing the GET methods', function () {

        it('should be able to get the list of articles', function (done) {
            request(app).get('/api/articles/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    res.body.should.be.an.Array.and.have.lengthOf(1);
                    res.body[0].should.have.property('title', article.title);
                    res.body[0].should.have.property('content', article.content);

                    done();
                });
        });

        it('should be able to get the specific article', function (done) {
            request(app).get('/api/articles/' + article.id)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    res.body.should.have.property('title', article.title);
                    res.body.should.have.property('content', article.content);

                    done();
                });
        });
    });


    afterEach(function (done) {
        Article.remove().exec();
        User.remove().exec();
        done();
    });



});