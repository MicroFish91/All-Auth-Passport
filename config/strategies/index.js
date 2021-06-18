const GitHubStrategy = require('./GitHubStrategy');
const GoogleStrategy = require('./GoogleStrategy');
const LinkedInStrategy = require('./LinkedInStrategy');
const LocalStrategy = require('./LocalStrategy');
const passportSerializer = require('./passportSerializer');

module.exports = function() {
  GitHubStrategy();
  GoogleStrategy();
  LinkedInStrategy();
  LocalStrategy();
  passportSerializer();
}