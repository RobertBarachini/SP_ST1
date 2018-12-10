var request = require('request');
var apiParametri = {
  streznik: 'http://localhost:' + process.env.PORT
};
var vsiUporabniki = {
  streznik: 'http://localhost:' + process.env.PORT + "app_api/db_exports/Users.bson"
};
if (process.env.NODE_ENV === 'production') {
  apiParametri.streznik = 'https://spherokuapp123.herokuapp.com/'; //TODO: nastavit na nase ime aplikacije za Heroku
}

var prikaziPost = function(req, res, vsebina) {
    var pot = '/api/users'
    var parametriZahteve = {
        url: apiParametri.streznik + pot,
        method: 'GET',
        json: {}
    };
    
    request(parametriZahteve,function(napaka, odgovor,  vs){
        if(req.session.user) {
        res.render("postIDPrijavljen", {
            uporabnik: req.session.user,
            post: vsebina,
            vsiU: vs
        })
    }else{
        res.render("postIDPrijavljen", {
            uporabnik: null,
            post: vsebina, 
            vsiU: vs
            
        })
    } 
    });
}


module.exports.postPage = function (req, res) {
    var pot = '/api/posts' +req.url
    var parametriZahteve = {
        url: apiParametri.streznik + pot,
        method: 'GET',
        json: {}
    };
    
     request(parametriZahteve,function(napaka, odgovor,  vsebina) {
      prikaziPost(req, res, vsebina);    
    }
  );
  
  
  
};
/*
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
*/
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

module.exports.deletePost = function (req, res) {
    var postID = req.params.postID;
    var pot = '/api/posts/' +postID
    var parametriZahteve = {
        url: apiParametri.streznik + pot,
        method: 'DELETE',
        json: {}
    };
    
     request(parametriZahteve,function(napaka, odgovor) {
      if(req.session.user) {
        res.redirect("/")
        }
    else{
        res.redirect("/")
        }
    });
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
    var tags = req.body.tags;
    
    var regTag = new RegExp("^(#[a-zA-Z0-9]+(\ )?)+$");
  var regOp= new RegExp("(?=.{1,500}$)");
  
  var check1=regOp.test(description);
  var check2=regTag.test(tags);
    
    if(check1 && check2){
        console.log("TRU")
        console.log(description);
        console.log(tags);
        res.redirect('/')
    }
    
    
};