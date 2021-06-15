const express = require('express');
const home = require('./routes/');
const login = require('./routes/login');
const googleAuth = require('./routes/googleAuth');
const registration = require('./routes/registration');

const app = express();

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/auth', login);
app.use('/auth', googleAuth);
app.use('/auth', registration);
app.use('/', home);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
