const passport = require('passport');
const { getUserByPk } = require('../../db/jsonDB');

module.exports = function() {
  passport.serializeUser((user, done) => {
    console.log('serializingUser');
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log('deserializingUser');
    try {
      const user = await getUserByPk(id);
      done(null, user);
    }
    catch (err) {
      done(err, false, { message: 'User could not be retrieved.'});
    }
  });
}