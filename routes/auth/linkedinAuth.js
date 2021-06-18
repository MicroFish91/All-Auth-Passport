const router = require('express').Router();
const passport = require('passport');

/*  LINKEDIN STRATEGY - STEP 2:

*/
router.get('/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile']
}));



/* LINKEDIN STRATEGY - STEPS 3 - 6:

*/
router.get('/linkedin/redirect', passport.authenticate('linkedin'), (req, res) => {
  res.redirect('/protected');
});

module.exports = router;