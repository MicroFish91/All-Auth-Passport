const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login', { message: null });
});

router.get('/logout', (req, res) => {
    res.send('logging out');
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', 
        function(err, user, info) {
            if (err) { return next(err) }
            if (!user) {
                return res.render('login', { message: info.message })
            }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/protected');
            });
        }
    )(req, res, next);
});

module.exports = router;



// Simpler alternative, but lacks ability to easily handle passing of err / info message

// router.get('/loginFailed', (req, res) => {
    //     res.render('login', { message: null });
    // });

// router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFailed' }), (req, res) => {
//     res.redirect('/protected');
// });