const router = require('express').Router();
const passport = require('passport');

/*  GOOGLE STRATEGY - STEP 2:
After we click on the Google+ button, we get sent
to this route which triggers our passport.auth middleware,
which routes us through to our Google Strategy that we set up
in our config folder
*/
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));



/* GOOGLE STRATEGY - STEPS 3 - 6:
3. Already takes place on Google's end where they check the user's login
credentials and our OAuth credentials.

4. Upon success, we are redirected to this callback route and are sent a query string
"code" parameter in the return URI.

When the passport authenticate is encountered the second time, triggers another call out
to Google using the Strategy credentials => see Step 4.5  

5.  Google processes the query string "code" that was initially given back to us upon success, 
and google swaps this out for User Profile information to send back.  

6.  This information is sent back to us and the URI is again directed back to this route.
Since the passport.authenticate middleware is encountered again, it triggers passport to use the
google strategy again that we set up.  Since the user profile information has now been set,
we are able to move onto the Google strategy callback function found in the config folder under
step 7.
*/
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/protected');
});

module.exports = router;