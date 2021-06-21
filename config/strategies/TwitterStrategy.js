const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('../keys');
const { getUser, addUser } = require('../../db/jsonDB');

module.exports = function() {
  passport.use(
    new TwitterStrategy({
      callbackURL: '/auth/twitter/redirect',
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret
    }, async (accessToken, refreshToken, profile, done) => {
      console.log('Running Twitter strategy (cb)...');
      try {
        const existingUser = await getUser('twitter', profile.id);
        if(existingUser !== null){
          done(null, existingUser);
        } else {
          // Add user
          const newUser = await addUser('twitter', profile.id, profile.displayName);
          done(null, newUser);
        }
      }
      catch(err){
        done(err, false);
      }
    })
  );
}