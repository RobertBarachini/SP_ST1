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
    var comment = req.body.textarea;
    console.log(comment);
    res.redirect("")
    
};

module.exports.editPostPost = function(req,res) {
    var description = req.body.textarea;
    console.log(description);
    res.redirect('/')
    //to ne dela
    
};