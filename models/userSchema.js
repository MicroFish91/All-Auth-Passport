module.exports.createUserSchema = function (authType, authID, name, email, password){
  return {
    name,
    password: (password) ? password : null,
    email,
    googleID: (authType === "google") ? authID : null,
    facebookID: (authType === "facebook") ? authID : null,
    twitterID: (authType === "twitter") ? authID : null,
    githubID: (authType === "github") ? authID : null
  };
}

module.exports.findUserSchema = function (authType, authID){
  const user = {
    email: (authType === 'none') ? authID : null,
    googleID: (authType === "google") ? authID : null,
    facebookID: (authType === "facebook") ? authID : null,
    twitterID: (authType === "twitter") ? authID : null,
    githubID: (authType === "github") ? authID : null
  };

  (authType !== 'none') && delete user['email'];
  (authType !== 'google') && delete user['googleID'];
  (authType !== 'facebook') && delete user['facebookID'];
  (authType !== 'twitter') && delete user['twitterID'];
  (authType !== 'github') && delete user['githubID'];

  return user;
}