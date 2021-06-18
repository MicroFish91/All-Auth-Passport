const router = require('express').Router();
const login = require('./login');
const registration = require('./registration');
const githubAuth = require('./githubAuth');
const googleAuth = require('./googleAuth');

router.use('/', login);
router.use('/', githubAuth);
router.use('/', googleAuth);
router.use('/', registration);

module.exports = router;