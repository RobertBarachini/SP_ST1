var request = require('request');
var apiParametri = {
  streznik: 'http://localhost:' + process.env.PORT
};
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://{ime-aplikacije}.herokuapp.com/'; //TODO: nastavit na nase ime aplikacije za Heroku
}

var prikaziZacetnePoste = function(req, res, vsebina) {
        if(req.session.user) {
            res.render("index", {
            uporabnik: req.session.user,
            posts: vsebina})
    }
    else{
        res.render("index", {
            uporabnik: null,
            posts: vsebina
        });
    } 
};

var poglejCeSeLahkoLogina = function(req, res, vsebina) {
    var aJe = false;
    for (var i = 0; i<vsebina.length; i++){
         var id = vsebina[i]._id;
         var email = vsebina[i].email;
         var password = vsebina[i].password;
         if(email === req.body.email && password === req.body.password){
            var pot = '/api/users'
            console.log(pot)
            var parametriZahteve = {
                url: apiParametri.streznik + pot,
                method: 'GET',
                json: {}
            };
            request(parametriZahteve,function(napaka, odgovor,  vs) {
                for(var j = 0; j<vs.length; j++) {
                    console.log(vs[j])
                    if(vs[j].identity === id) {
                         req.session.user = vs[j]
                         console.log(req.session.user.profilePicture)
                    }
                }
                res.redirect("/");
                }
             );
             aJe = true;
             break;
         }
    }
    if(!aJe) {
        res.redirect("/login")
    }
       
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
      
var prikaziZacetnePosteFiltered = function(req, res, vsebina, searchIn) {
    var posts = undefined;
    if(vsebina.length > 0){
        posts = new Array();
        for(var i=0 ; i<vsebina.length; i++){
            if(vsebina[i].title.toLowerCase().includes(searchIn.toLowerCase())){
                posts.push(vsebina[i]);
            }
        }
        if(req.session.user) {
            res.render("index", {
            uporabnik: req.session.user,
            posts: posts})
        }
        else{
            res.render("index", {
                uporabnik: null,
                posts: posts
            });
        } 
    }
    else {
        if(req.session.user) {
            res.render("index", {
            uporabnik: req.session.user,
            posts: posts})
        }
        else{
            res.render("index", {
                uporabnik: null,
                posts: posts
            });
        } 
    }
};

module.exports.indexPagePost = function (req, res) {
    var searchIn=req.body.searchIn;
    console.log("searchIn = "+searchIn);
    var regIn = new RegExp("^\S+$");
    
    var pot = '/api/posts'
    var parametriZahteve = {
        url: apiParametri.streznik + pot,
        method: 'GET',
        json: {}
    };
     request(parametriZahteve,function(napaka, odgovor,  vsebina) {
      prikaziZacetnePosteFiltered(req, res, vsebina, searchIn);    
    });
    
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
    //var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
    var regPass = new RegExp(".");
    //geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka


    var check1=false;
    var check2=false;
    
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
    var profilna = req.body.profilna;
    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(password2)
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(profilna)
    
     //validacija
    var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
    //username = med 4 in 32 znakov, zgoraj nasteti znaki
    var regEm = new RegExp("^(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.!#$%&'*+-=?^_`{|}~]+(?![\.])@(?![-])[a-zA-Z0-9-]+(?![-])\.(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.]+(?![\.])$");
    //email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
    //var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
    var regPass = new RegExp(".");
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
        var mongoose = require('mongoose');
        var ObjectId = new mongoose.Types.ObjectId()
        console.log(ObjectId)
        var pot = '/api/users/'
        var posredovaniPodatki = {
            identity: ObjectId,
            username: username,
            name: name,
            surname: name,
            profilePicture: profilna,
            posts:[],
            postReactions:[],
            points:0,
            dateJoined: null,
            dateLastActive: null
        };
        
        var parametriZahteve = {
          url: apiParametri.streznik + pot,
          method: 'POST',
          json: posredovaniPodatki
        };
        request(
        parametriZahteve,
        function(napaka, odgovor, vsebina) {
          if (odgovor.statusCode === 201) {
              var pot2 = '/api/userIdentities/'
             var posredovaniPodatki2 = {
                 email: email,
                 password: password,
                 userType: "user"
             };
              var parametriZahteve2 = {
               url: apiParametri.streznik + pot2,
               method: 'POST',
               json: posredovaniPodatki2
             };
             request(
             parametriZahteve2,
             function(napakaa, odgovorr, vs) {
               if (odgovorr.statusCode === 201) {
                 res.redirect('/login');
               }
        }
        );
          }
        }
        );
        
        
        
    } else {
        res.redirect("");
    }

};
module.exports.db = function (req,res) {
    res.render('temp');
};

