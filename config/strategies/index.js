const FacebookStrategy = require('./FacebookStrategy');
const GitHubStrategy = require('./GitHubStrategy');
const GoogleStrategy = require('./GoogleStrategy');
const LinkedInStrategy = require('./LinkedInStrategy');
const LocalStrategy = require('./LocalStrategy');
const TwitterStrategy = require('./TwitterStrategy');
const passportSerializer = require('./passportSerializer');

module.exports = function() {
  FacebookStrategy();
  GitHubStrategy();
  GoogleStrategy();
  LinkedInStrategy();
  LocalStrategy();
  TwitterStrategy();
  passportSerializer();
}