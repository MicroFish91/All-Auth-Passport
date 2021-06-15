const passport = require('passport').Passport();
const { Strategy:LocalStrategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const { getUser } = require('../../db/jsonDB');

// passport.use('local', new LocalStrategy( {
//   usernameField : 'username',
//   passwordField : 'password'
// }, async (username, password, done) => {
//   console.log("local strategy called");
//   try {
//     const user = db.getIndex("/arraytest/myarray", 65464646155);
    
//   }
//   catch(err){
//     console.log(err);
//   }
// }));

// module.exports = passport;

const user = getUser('none', 'test@gmail.com');
console.log(user);