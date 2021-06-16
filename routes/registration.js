const bcrypt = require('bcryptjs');
const router = require('express').Router();
const { addUser } = require('../db/jsonDB');

router.get('/registration', (req, res) => {
  res.render('registration');
});

// Emulates posting to an outside db
router.post('/registration', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const passwordEncrypted = bcrypt.hashSync(password, 8);
    await addUser('none', null, username, email, passwordEncrypted);
    res.redirect('/auth/login');
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;