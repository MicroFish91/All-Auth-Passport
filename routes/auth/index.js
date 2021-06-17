const router = require('express').Router();
const login = require('./login');
const registration = require('./registration');
const googleAuth = require('./googleAuth');

router.use('/', login);
router.use('/', googleAuth);
router.use('/', registration);

module.exports = router;