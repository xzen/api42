const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'accountId': String,
  'group': String,
  'oauth': {
    'manual': {
      'mail': String,
      'password': String
    },
    'twitter': {
      'consumerKey': String,
      'consumerSecret': String,
      'accessTokenKey': String,
      'accessTokenSecret': String
    }
  },
  'profile': {
    'lang': String,
    'firstName': String,
    'lastName': String,
    'country': String,
    'city': String,
    'gender': String,
    'birthDate': Date,
    'phone': String,
    'mobile': String,
    'medias': {
      'avatarUrl': String
    }
  },
  'twitterProfile': {
    'idStr': String,
    'name': String,
    'screenName': String,
    'description': String,
    'location': String,
    'timeZone': String,
    'lang': String,
    'medias': {
      'avatarUrl': String
    }
  },
  'system': {
    'createdAt': {
      'type': Date,
      'default': Date.now
    },
    'updatedAt': {
      'type': Date,
      'default': Date.now
    },
    'lastConnectionAt': {
      'type': Date,
      'default': Date.now
    },
    'ipsUsed': Array,
    'ipsLastUsed': String
  }
}, {
  'collection': 'users',
  'versionKey': false
});