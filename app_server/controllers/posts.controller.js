var request = require('request');
var apiParametri = {
  streznik: 'http://localhost:' + process.env.PORT
};
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://{ime-aplikacije}.herokuapp.com/';
}

module.exports.postPage = function (req, res) {
    if(req.session.user) {
        res.render("postIDPrijavljen", {uporabnik: req.session.user})
        console.log("MA KAAAJ")
    }
    else{
        res.render("postIDPrijavljen", {uporabnik: null});
        console.log("......................")
    }
};
module.exports.editPost = function (req, res) {
    if(req.session.user) {
        res.render("editSliko", {uporabnik: req.session.user})
        console.log("MA KAAAJ")
    }
    else{
        res.render("editSliko", {uporabnik: null});
        console.log("......................")
    }
};
module.exports.addComment = function(req,res) {
    var regOp= new RegExp("(?=.{1,500}$)");
    var comment = req.body.textarea;
    console.log(comment);
    if(regOp.test(comment)){
        res.redirect("")
    }
    
    
};

module.exports.editPostPost = function(req,res) {
    var description = req.body.textarea;
    console.log(description);
    res.redirect('/')
    
};