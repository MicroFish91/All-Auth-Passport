const bcrypt = require('bcryptjs');
const router = require('express').Router();
const { addUser, getUser } = require('../../db/jsonDB');

// Registering for Local Strategy Login
router.get('/registration', (req, res) => {
  res.render('registration');
});

// Emulates posting to a db for Local Strategy Registration
router.post('/registration', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existingUser = await getUser('none', email);
    if(existingUser === null) {
      const passwordEncrypted = bcrypt.hashSync(password, 8);
      await addUser('none', null, username, email, passwordEncrypted);
      return res.redirect('/auth/login');
    }
    res.redirect('/auth/login');
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;