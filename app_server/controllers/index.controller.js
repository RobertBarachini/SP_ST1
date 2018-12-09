
module.exports.indexPage = function (req, res) {
    
    if(req.session.user) {
        res.render("index", {uporabnik: req.session.user})
        console.log("MA KAAAJ")
    }
    else{
        res.render("index", {uporabnik: null});
        console.log("......................")
    } 
};
      

module.exports.loginPage = function (req,res) {
        res.render("login")
    };

module.exports.loginPagePost = function (req,res) {
    var UserIdentity = {
    email: "test@test.si",
    password: "test"
    }
    var name = {
        name: "Janko Knez",
        
    }

    var email = req.body.email;
    var password = req.body.password;
    if(email === UserIdentity.email && password === UserIdentity.password) {
        req.session.user = name
        res.redirect('/');
    } else res.redirect('login')

    
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
