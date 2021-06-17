const GoogleStrategy = require('./GoogleStrategy');
const LocalStrategy = require('./LocalStrategy');
const passportSerializer = require('./passportSerializer');

module.exports = function() {
  GoogleStrategy();
  LocalStrategy();
  passportSerializer();
}