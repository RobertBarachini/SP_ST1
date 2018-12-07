module.exports.indexPage = function (req, res) {
        if(req.session.prijavljenUporabnik) {
            res.render("index", {uporabnik: req.session.prijavljenUporabnik})
        }
        res.render("index", {uporabnik: null});
    };

module.exports.loginPage = function (req,res) {
        res.render("login")
    };

module.exports.loginPagePost = function (req,res) {
        res.render("login")
    };

module.exports.registerPage = function (req,res) {
        res.render("register")
    };
module.exports.postID = function (req,res) {
        res.render("postID")
}
