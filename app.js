const cookieSession = require('cookie-session');
const debug = require('debug')('app:startup');  // set env 'export DEBUG='app:startup'
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const auth = require('./routes/auth');
const home = require('./routes/');
const protected = require('./routes/protected');
const keys = require('./config/keys');

const app = express();

app.use(express.static('public'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny')); 
    debug('Morgan enabled...');
}

// Cookie-session
app.use(cookieSession({
    name: 'session',
    keys: [keys.cookieSession.cookieSecret], 
    maxAge: 2 * 24  * 60 * 60 * 1000
}))  

// Passport Init
app.use(passport.initialize());
app.use(passport.session());
require('./config/strategies/LocalStrategy')();
require('./config/strategies/GoogleStrategy')();
require('./config/strategies/passportSerializer')();

// View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/auth', auth);
app.use('/protected', protected);
app.use('/', home);

const port = keys.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});