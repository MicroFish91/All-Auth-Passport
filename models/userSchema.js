const { v4: uuidv4 } = require('uuid');

module.exports.createUserSchema = function (authType, authID, name, email, password){
  return {
    id: uuidv4(),
    name: (name) ? name: null,
    password: (password) ? password : null,
    email: (email) ? email: null,
    googleID: (authType === "google") ? authID : null,
    facebookID: (authType === "facebook") ? authID : null,
    twitterID: (authType === "twitter") ? authID : null,
    githubID: (authType === "github") ? authID : null,
    linkedinID: (authType === "linkedin") ? authID : null
  };
}

module.exports.findUserSchema = function (authType, authID){
  const user = {
    email: (authType === 'none') ? authID : null,
    googleID: (authType === "google") ? authID : null,
    facebookID: (authType === "facebook") ? authID : null,
    twitterID: (authType === "twitter") ? authID : null,
    githubID: (authType === "github") ? authID : null,
    linkedinID: (authType === "linkedin") ? authID : null
  };

  (authType !== 'none') && delete user['email'];
  (authType !== 'google') && delete user['googleID'];
  (authType !== 'facebook') && delete user['facebookID'];
  (authType !== 'twitter') && delete user['twitterID'];
  (authType !== 'github') && delete user['githubID'];
  (authType !== 'linkedin') && delete user['linkedinID'];

  return user;
}