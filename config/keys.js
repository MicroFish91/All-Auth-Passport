require('dotenv').config();

module.exports = {
  // https://developers.facebook.com/apps/
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  },
  // https://console.developers.google.com
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  // https://github.com/settings/developers
  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
  },
  // https://www.linkedin.com/developers/apps
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET
  },
  // https://developer.twitter.com/en/portal/dashboard
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET
  },
  cookieSession: {
    cookieSecret: process.env.COOKIE_SECRET
  },
  PORT: process.env.PORT
};


// Steam, Bnet, Paypal, Venmo, Spotify, discord, slack, amazon, twitch, dropbox