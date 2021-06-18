const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('../keys');
const { getUser, addUser } = require('../../db/jsonDB');

module.exports = function() {
  passport.use(
    new FacebookStrategy({
      callbackURL: '/auth/facebook/redirect',
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret
    }, async (accessToken, refreshToken, profile, done) => {
      console.log('Running GitHub strategy (cb)...');
      try {
        const existingUser = await getUser('facebook', profile.id);
        if(existingUser !== null){
          done(null, existingUser);
        } else {
          // Add user
          const newUser = await addUser('facebook', profile.id, profile.displayName);
          done(null, newUser);
        }
      }
      catch(err){
        done(err, false);
      }
    })
  );
}