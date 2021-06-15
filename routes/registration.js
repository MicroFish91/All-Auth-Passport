const router = require('express').Router();

router.get('/registration', (req, res) => {
  res.send('registration form');
});

module.exports = router;