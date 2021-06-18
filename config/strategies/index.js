const GitHubStrategy = require('./GitHubStrategy');
const GoogleStrategy = require('./GoogleStrategy');
const LocalStrategy = require('./LocalStrategy');
const passportSerializer = require('./passportSerializer');

module.exports = function() {
  GitHubStrategy();
  GoogleStrategy();
  LocalStrategy();
  passportSerializer();
}