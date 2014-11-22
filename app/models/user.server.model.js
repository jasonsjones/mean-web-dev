var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true
    },

    website: {
        type: String,
        get: function (url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 &&
                    url.indexOf('https://') !== 0) {

                    url = 'http://' + url;

                }
                return url;
            }
        }
    },

    username: {
        type: String,
        trim: true,
        unique: true
    },
    password: String,

    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});

UserSchema.set('toJSON', { getters: true, virtuals: true });

// Custome static method
// usage: User.findOneByUsername('username', function(err, user) {...});
UserSchema.statics.findOneByUsername = function (username, callback) {
    this.findOne({ username: new RegExp(username, i) }, callback);
};

// Custom instance method
// usage: user.authenticate('password');
UserSchema.methods.authenticate = function (password) {
    return this.password === password;
};

mongoose.model('User', UserSchema);