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

module.exports.addPicture = function(req,res) {
    if(req.session.user) {
      res.render("dodajSliko", {uporabnik: req.session.user})
    }
    else{
      res.render("dodajSliko", {uporabnik: null});
    } 
};

module.exports.addEmbed = function(req,res) {
    if(req.session.user) {
      res.render("dodajEmbed", {uporabnik: req.session.user})
    }
    else{
      res.render("dodajEmbed", {uporabnik: null});
    } 
};

module.exports.addText = function(req,res) {
    if(req.session.user) {
      res.render("dodajText", {uporabnik: req.session.user})
    }
    else{
      res.render("dodajText", {uporabnik: null});
    } 
};

module.exports.addPicturePost = function(req,res) {
  
  res.redirect('/')
};

module.exports.addEmbedPost = function(req,res) {
  res.redirect('/')
};

module.exports.addTextPost = function(req,res) {
  var textarea = req.body.textarea
  var tags = req.body.tags;
  console.log(textarea);
  console.log(tags);
  res.redirect('/')
};