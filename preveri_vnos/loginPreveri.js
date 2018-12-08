var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
//username = med 4 in 32 znakov, zgoraj nasteti znaki
var regEm = new RegExp("^(?![.])(?!.*[.]{2})[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+(?<![.])@(?![-])[a-zA-Z0-9-]+(?<![-])\.(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$");
//email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
//geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka

function preveri() {
    var button=document.getElementById("gumb");
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    
    var check1=false;
    var check2=false;
    
    console.log(username.value);
    console.log(password.value);
    
    if(regUsr.test(username.value)){
        //username
        check1=true;
    } else if(regEm.test(username.value)) {
        //mail
        check1=true;
    }
    
    if(/(?=.*[\s])/.test(password.value)){ //prvo preveri ce je kaksen prazen znak
        console.log("prazno");
    } else{
        check2=(regPass.test(password.value));
    }
    
    console.log(check1+" "+check2);
    console.log("////////////////");
    
    if(check1 && check2){
        //TODO poglej ce obstaja
        console.log("kul");
        //button.href="login.html";
    } else {
        console.log("not kul");
        //button.href="#";
    }
}