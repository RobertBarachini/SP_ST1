module.exports.userPage = function (req, res) {
        if(req.session.user) {
        res.render("userID", {uporabnik: req.session.user})
    }
    else{
        res.render("userID", {uporabnik: null});
    } 
};

module.exports.editProfile = function (req, res) {
        if(req.session.user) {
        res.render("editProfile", {uporabnik: req.session.user})
    }
    else{
        res.render("editProfile", {uporabnik: null});
    } 
};

module.exports.logout = function(req,res) {
  if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
  } else {
      req.session.user = null;
      res.redirect('/login');
  }
};