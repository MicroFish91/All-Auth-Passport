const passport = require('passport');
const { Strategy:LinkedInStrategy } = require('passport-linkedin-oauth2');
const keys = require('../keys');
const { getUser, addUser } = require('../../db/jsonDB');

module.exports = function() {
  passport.use(
    new LinkedInStrategy({
      callbackURL: '/auth/linkedin/redirect',
      clientID: keys.linkedin.clientID,
      clientSecret: keys.linkedin.clientSecret
    }, async (accessToken, refreshToken, profile, done) => {
      console.log('Running LinkedIn strategy (cb)...');
      try {
        const existingUser = await getUser('linkedin', profile.id);
        if(existingUser !== null){
          done(null, existingUser);
        } else {
          // Add user
          const newUser = await addUser('linkedin', profile.id, profile.displayName);
          done(null, newUser);
        }
      }
      catch(err){
        done(err, false);
      }
    })
  );
}