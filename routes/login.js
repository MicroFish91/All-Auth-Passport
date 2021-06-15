const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

router.get('/logout', (req, res) => {
    res.send('logging out');
});

module.exports = router;