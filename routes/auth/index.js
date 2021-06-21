const router = require('express').Router();
const login = require('./login');
const registration = require('./registration');
const facebookAuth = require('./facebookAuth');
const githubAuth = require('./githubAuth');
const googleAuth = require('./googleAuth');
const linkedinAuth = require('./linkedinAuth');
const twitterAuth = require('./twitterAuth');

router.use('/', login);
router.use('/', facebookAuth);
router.use('/', githubAuth);
router.use('/', googleAuth);
router.use('/', linkedinAuth);
router.use('/', twitterAuth);
router.use('/', registration);

module.exports = router;