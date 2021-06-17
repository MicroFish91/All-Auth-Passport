const passport = require('passport');
const { getUserByPk } = require('../../db/jsonDB');

module.exports = function() {
  // ALL-AUTH - STEP 9: CREATE COOKIE
  passport.serializeUser((user, done) => {
    console.log('serializingUser');
    done(null, user.id);
  });

  // ALL-AUTH - STEP 11: DECODE COOKIE
  passport.deserializeUser(async (id, done) => {
    console.log('deserializingUser');
    try {
      const user = await getUserByPk(id);
      done(null, user);
    }
    catch (err) {
      done(err, false);
    }
  });
}