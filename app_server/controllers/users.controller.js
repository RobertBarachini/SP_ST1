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

module.exports.editProfilePost = function (req, res) {
    var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
    //username = med 4 in 32 znakov, zgoraj nasteti znaki
    var regEm = new RegExp("^(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.!#$%&'*+-=?^_`{|}~]+(?![\.])@(?![-])[a-zA-Z0-9-]+(?![-])\.(?![\.])(?!.*[\.]{2})[a-zA-Z0-9\.]+(?![\.])$");
    //email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
    var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
    //geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka
    var regFN = new RegExp("^(?=.{1,50}$)(?![\ ])[a-žA-Ž-(\ )]+(?![\ ])$");
    //full name = crke, presledki, -
    //tudi šumniki, presledek ni na zacetku in koncu
    var regWS = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
    //website
    var name = req.body.name;
    var username = req.body.username;
    var website = req.body.website;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    console.log(name)
    console.log(username)
    console.log(website)
    console.log(email)
    console.log(password)
    console.log(password2)
    
    var check1=false;
    var check2=false;
    var check3=false;
    var check4=false;
    var check5=false;
    var check6=false;
    var check7=false;
    
     //username
    check1=(regUsr.test(username));
    //email
    check2=(regEm.test(email));
    //password
    if(/(?=.*[\s])/.test(password)){ //prvo preveri ce je kaksen prazen znak
        console.log("prazno");
    } else{
        check3=(regPass.test(password));
    }
    //password match
    check4=(password == password2);
    //full name
    check5=regFN.test(name);
    //website
    check6=regWS.test(website);
    //bio
    
    //TODO poglej ce username email obstajata
    console.log(check1+" "+check2+" "+check3+" "+check4+" "+check5+" "+check6);
    
    if(check1 && check2 && check3 && check4 && check5 && check6){
        console.log("TRU")
        res.redirect(".");
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