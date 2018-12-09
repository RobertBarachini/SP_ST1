var request = require('request');
var apiParametri = {
  streznik: 'http://localhost:' + process.env.PORT
};
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://{ime-aplikacije}.herokuapp.com/'; //TODO: nastavit na nase ime aplikacije za Heroku
}

var prikaziZacetnePoste = function(req, res, vsebina) {
    console.log(vsebina)
    console.log(vsebina.length);
    
        if(req.session.user) {
        res.render("index", {
            uporabnik: req.session.user,
            posts: vsebina})
        console.log("MA KAAAJ")
    }
    else{
        res.render("index", {
            uporabnik: null,
            posts: vsebina
        });
        console.log("......................")
    } 
};

var poglejCeSeLahkoLogina = function(req, res, vsebina) {
    console.log(vsebina)
    res.redirect("/login")
};

module.exports.indexPage = function (req, res) {
    var pot = '/api/posts'
    var parametriZahteve = {
        url: apiParametri.streznik + pot,
        method: 'GET',
        json: {}
    };
     request(parametriZahteve,function(napaka, odgovor,  vsebina) {
      prikaziZacetnePoste(req, res, vsebina);    
    }
  );
};
      
module.exports.indexPagePost = function (req, res) {
    var searchIn=req.body.searchIn;
    console.log(searchIn)
    
    var regIn = new RegExp("^\S+$");
    
    if(!regIn.test(searchIn)){
        if(req.session.user) {
            res.render("index", {uporabnik: req.session.user})
            console.log("MA KAAAJ")
        }
        else{
            res.render("index", {uporabnik: null});
            console.log("......................")
        } 
    }
    
    
}

module.exports.loginPage = function (req,res) {
        res.render("login")
    };

module.exports.loginPagePost = function (req,res) {
    var username = req.body.email;
    var password = req.body.password;
    
    var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
    //username = med 4 in 32 znakov, zgoraj nasteti znaki
    var regEm = new RegExp("^(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.!#$%&'*+-=?^_`{|}~]+(?![\.])@(?![-])[a-zA-Z0-9-]+(?![-])\.(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.]+(?![\.])$");
    //email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
    var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
    //geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka


    var check1=false;
    var check2=false;
    
    console.log(username);
    console.log(password);
    
    if(regUsr.test(username)){
        //username
        check1=true;
    } else if(regEm.test(username)) {
        //mail
        check1=true;
    }
    
    if(/(?=.*[\s])/.test(password.value)){ //prvo preveri ce je kaksen prazen znak
        console.log("prazno");
    } else{
        check2=(regPass.test(password));
    }
    
    
    if(check1 && check2){
        var pot = '/api/userIdentities'
        var parametriZahteve = {
            url: apiParametri.streznik + pot,
            method: 'GET',
            json: {}
         };
        request(parametriZahteve,function(napaka, odgovor,  vsebina) {
        poglejCeSeLahkoLogina(req, res, vsebina);    
            }
        );
        //console.log("kul");
        ////var name dubi iz baze
        //var name = {
        //    name: "Janko Knez",
        //}
        //req.session.user = name
        //res.redirect('/');
    } else {
        console.log("not kul");
        //button.href="#";
        res.redirect('login')
    }

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
    
     //validacija
    var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
    //username = med 4 in 32 znakov, zgoraj nasteti znaki
    var regEm = new RegExp("^(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.!#$%&'*+-=?^_`{|}~]+(?![\.])@(?![-])[a-zA-Z0-9-]+(?![-])\.(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.]+(?![\.])$");
    //email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
    var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
    //geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka
    
    var check1=false;
    var check2=false;
    var check3=false;
    var check4=false;
    
    check1=(regUsr.test(username));
    check2=(regEm.test(email));
    if(/(?=.*[\s])/.test(password)){ //prvo preveri ce je kaksen prazen znak
        console.log("prazno");
    } else{
        check3=(regPass.test(password));
    }
    check4=(password == password2);
    
    console.log(check1+" "+check2+" "+check3+" "+check4);
    
    if(check1 && check2 && check3 && check4){
        console.log("TRU");
        //TODO dodaj v bazo
        res.redirect('login')
    } else {
    }

};
module.exports.db = function (req,res) {
    res.render('temp');
};

