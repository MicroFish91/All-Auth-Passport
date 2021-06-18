const router = require('express').Router();
const passport = require('passport');

/*  GITHUB STRATEGY - STEP 2:

*/
router.get('/github', passport.authenticate('github', {
  scope: [ 'user:email' ]
}));



/* GITHUB STRATEGY - STEPS 3 - 6:

*/
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  res.redirect('/protected');
});

module.exports = router;