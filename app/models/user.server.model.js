var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,

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
        trim: true
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

mongoose.model('User', UserSchema);