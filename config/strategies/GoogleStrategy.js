const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../keys');
const { getUser, addUser } = require('../../db/jsonDB');

module.exports = function() {
  passport.use(
    /* GOOGLE STRATEGY STEPS 2.5 & 4.5:
    Routed from our passport.authenticate('google'); includes information to supply to
    google for permissions.
    
    2.5 - Upon completion will redirect to callback URI.  
    
    4.5 - Our passport middleware initialized through app in the express pipeline handles 
    certain things like exchanging data and the query string code that eventually is supplied 
    after step 3.
    */
    new GoogleStrategy({
      // options for the google strat
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    }, async (accessToken, refreshToken, profile, done) => {
      /* GOOGLE STRATEGY STEP 7-8:
        Check for existing user, if doesn't exist, create.
        Use done() to send user data and move on to next step.

        profile - will show all our user's profile information.
      */
        try {
          console.log('Running Google strategy (cb)...');
          const existingUser = await getUser('google', profile.id);
          if(existingUser !== null){
            done(null, existingUser);
          } else {
            // Add user
            const newUser = await addUser('google', profile.id, profile.displayName);
            done(null, newUser);
          }
        }
        catch(err){
          done(err, false);
        }
      
    })
  );
}