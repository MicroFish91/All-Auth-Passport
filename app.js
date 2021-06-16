const cookieSession = require('cookie-session');
const debug = require('debug')('app:startup');  // set env 'export DEBUG='app:startup'
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const home = require('./routes/');
const login = require('./routes/login');
const googleAuth = require('./routes/googleAuth');
const protected = require('./routes/protected');
const registration = require('./routes/registration');
const env = require('./config/env');

const app = express();

app.use(express.static('public'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny')); 
    debug('Morgan enabled...');
}

// Cookie-session
app.use(cookieSession({
    name: 'session',
    keys: [env.PP_SECRET], 
    maxAge: 2 * 24  * 60 * 60 * 1000
}))  

// Passport Init
app.use(passport.initialize());
app.use(passport.session());
require('./config/strategies/LocalStrategy')();

// View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/auth', login);
app.use('/auth', googleAuth);
app.use('/auth', registration);
app.use('/protected', protected);
app.use('/', home);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
