const router = require('express').Router();
const authReq = require('../middleware/auth');

router.get('/', authReq, (req, res) => {
  // res.send('Congratulations, you are viewing a protected endpoint!');
  res.json(req.user);
});

module.exports = router;