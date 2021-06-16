const passport = require('passport');
const { Strategy:LocalStrategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const { getUser } = require('../../db/jsonDB');

module.exports = function() {
  passport.use('local', new LocalStrategy( {
    usernameField : 'email',
    passwordField : 'password'
  }, async (username, password, done) => {
    try {
      console.log('Running local strategy...');
      const user = await getUser('none', username);
      if(user !== null){
        // Check password
        await bcrypt.compare(password, user.password, (err, response) => {
          if(response){
            // PW: Match
            done(null, { email: user.email });
          } else {
            // PW: No Match
            done(null, false, { message: 'Incorrect password.' });
          }
        });
      } else {
        done(null, false, { message: 'User does not exist - please register new user.'})
      }
    }
    catch(err){
      done(err, false, { message: 'Server error, please try again later.'});
    }
  }));

  passport.serializeUser((user, done) => {
    console.log('serializingUser');
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    console.log('deserializingUser');
    try {
      const user = await getUser('none', email);
      done(null, user);
    }
    catch (err) {
      done(err, false, { message: 'User could not be retrieved.'});
    }
  });
}