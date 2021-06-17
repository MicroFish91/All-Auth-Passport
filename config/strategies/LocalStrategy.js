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
            done(null, { id: user.id });
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
      done(err, false);
    }
  }));
}