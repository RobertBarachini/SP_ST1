var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
//username = med 4 in 32 znakov, zgoraj nasteti znaki
var regEm = new RegExp("^(?![.])(?!.*[.]{2})[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+(?<![.])@(?![-])[a-zA-Z0-9-]+(?<![-])\.(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$");
//email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
//geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka
var regFN = new RegExp("^(?=.{1,50}$)(?![\ ])[a-žA-Ž-(\ )]+(?<![\ ])$");
//full name = crke, presledki, -
//tudi šumniki, presledek ni na zacetku in koncu
var regWS = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
//website


function preveri() {
    var button=document.getElementById("gumb");
    var fullName=document.getElementById("fullName");
    var username=document.getElementById("usr");
    var webS=document.getElementById("webS");
    var bio=document.getElementById("bio");
    var email=document.getElementById("em");
    var password=document.getElementById("psw");
    var confPassword=document.getElementById("cps");
    
    var check1=false;
    var check2=false;
    var check3=false;
    var check4=false;
    var check5=false;
    var check6=false;
    var check7=false;
    
    //username
    check1=(regUsr.test(username.value));
    //email
    check2=(regEm.test(email.value));
    //password
    if(/(?=.*[\s])/.test(password.value)){ //prvo preveri ce je kaksen prazen znak
        console.log("prazno");
    } else{
        check3=(regPass.test(password.value));
    }
    //password match
    check4=(password.value == confPassword.value);
    //full name
    check5=regFN.test(fullName.value);
    //website
    check6=regWS.test(webS.value);
    //bio
    
    //TODO poglej ce username email obstajata
    console.log(check1+" "+check2+" "+check3+" "+check4+" "+check5+" "+check6);
    
    if(check1 && check2 && check3 && check4 && check5 && check6){
        console.log("TRU")
        //button.href="/userID";
    }
    
    //button.href="userID.html";
    
}


