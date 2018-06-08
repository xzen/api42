// Dependencies
const validator = require('node-validator');

// Schemas
const checkOauthTwitter = validator.isObject()
  .withRequired('consumerKey', validator.isString())
  .withRequired('consumerSecret', validator.isString())
  .withRequired('accessTokenKey', validator.isString())
  .withRequired('accessTokenSecret', validator.isString());

const checkOauthManual = validator.isObject()
  .withRequired('mail', validator.isString())
  .withRequired('password', validator.isString());

const checkOauth = validator.isObject()
  .withRequired('manual', checkOauthManual)
  .withRequired('twitter', checkOauthTwitter);

const checkProfile = validator.isObject()
  .withOptional('lang', validator.isString())
  .withOptional('firstName', validator.isString())
  .withOptional('lastName', validator.isString())
  .withOptional('country', validator.isString())
  .withOptional('city', validator.isString())
  .withOptional('gender', validator.isString())
  .withOptional('birthDate', validator.isString())
  .withOptional('phone', validator.isString())
  .withOptional('mobile', validator.isString())
  .withOptional('medias', validator.isString());

const checkAvatarUrl = validator.isObject()
  .withOptional('avatarUrl', validator.isString());

const checkTwitterProfile = validator.isObject()
  .withOptional('firstName', validator.isString())
  .withOptional('lastName', validator.isString())
  .withRequired('screenName', validator.isString())
  .withOptional('medias', checkAvatarUrl);

module.exports = validator.isObject()
  .withRequired('accountId', validator.isString())
  .withOptional('group', validator.isString())
  .withRequired('oauth', checkOauth)
  .withOptional('profile', checkProfile)
  .withRequired('twitterProfile', checkTwitterProfile);
