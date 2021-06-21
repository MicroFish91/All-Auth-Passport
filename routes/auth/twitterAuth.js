const router = require('express').Router();
const passport = require('passport');

/*  TWITTER STRATEGY - STEP 2:

*/
router.get('/twitter', passport.authenticate('twitter'));


/* TWITTER STRATEGY - STEPS 3 - 6:

*/
router.get('/twitter/redirect', passport.authenticate('twitter'), (req, res) => {
  res.redirect('/protected');
});

module.exports = router;