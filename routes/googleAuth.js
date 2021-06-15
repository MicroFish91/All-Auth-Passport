const router = require('express').Router();

router.get('/google', (req, res) => {
  res.send('logging in with Google');
});

module.exports = router;