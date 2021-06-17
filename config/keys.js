require('dotenv').config();

module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  cookieSession: {
    cookieSecret: process.env.COOKIE_SECRET
  },
  PORT: process.env.PORT
};