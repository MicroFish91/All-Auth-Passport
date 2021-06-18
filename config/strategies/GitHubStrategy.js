const passport = require('passport');
const GitHubStrategy = require('passport-github2');
const keys = require('../keys');
const { getUser, addUser } = require('../../db/jsonDB');

module.exports = function() {
  passport.use(
    new GitHubStrategy({
      callbackURL: '/auth/github/redirect',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret
    }, async (accessToken, refreshToken, profile, done) => {
      console.log('Running GitHub strategy (cb)...');
      try {
        const existingUser = await getUser('github', profile.id);
        if(existingUser !== null){
          done(null, existingUser);
        } else {
          // Add user
          const newUser = await addUser('github', profile.id, profile.displayName);
          done(null, newUser);
        }
      }
      catch(err){
        done(err, false);
      }
    })
  );
}