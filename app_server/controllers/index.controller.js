module.exports.indexPage = function (req, res) {
        
        res.render("index");
    };

module.exports.loginPage = function (req,res) {
        res.render("login")
    };

module.exports.loginPagePost = function (req,res) {
    
    res.redirect('/')
};

module.exports.registerPage = function (req,res) {
        res.render("register")
    };

module.exports.registerPagePost = function (req,res) {
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(password2)

};
