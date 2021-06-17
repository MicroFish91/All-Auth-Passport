const router = require('express').Router();
const passport = require('passport');

// 1. ALL AUTH - Flows Start Here
router.get('/login', (req, res) => {
    res.render('login', { message: null });
});

// ALL-AUTH - FINISH
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

/*  LOCAL STRATEGY - STEP 2:
First we enter login information which brings us to our
login post route where we have passport authenticate middleware
which routes us to our Local Strategy in the config folder               
*/
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
    //     res.render('login', { message: 'Login Failed' });
    // });

// router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFailed' }), (req, res) => {
//     res.redirect('/protected');
// });