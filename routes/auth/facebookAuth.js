const router = require('express').Router();
const passport = require('passport');

/*  FACEBOOK STRATEGY - STEP 2:

*/
router.get('/facebook', passport.authenticate('facebook', {
  scope: [ 'email' ]
}));



/* FACEBOOK STRATEGY - STEPS 3 - 6:

*/
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
  res.redirect('/protected');
});

module.exports = router;