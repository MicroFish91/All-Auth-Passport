const authReq = (req, res, next) => {
  // passport adds isAuthenticated
  if(req.isAuthenticated()) {
    next();
  } else (
    res.redirect('/auth/login')
  )
}

module.exports = authReq;