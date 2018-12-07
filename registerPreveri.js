var regUsr = new RegExp("^(?=.{4,20}$)[a-zA-Z0-9-]+$");
//username = med 4 in 32 znakov, zgoraj nasteti znaki
var regEm = new RegExp("^(?![.])(?!.*[.]{2})[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+(?<![.])@(?![-])[a-zA-Z0-9-]+(?<![-])\.(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$");
//email = (. ni na zaceetku in koncu, in se ne sme podvajat znotraj gor nastetih znakov v []) @ (- ni na zactku in koncu) . (. ni na zactku, koncu in se ne podvaja)
var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?![\s])");
//geslo = min 8 znakov, min 1 mala crkam, min 1 velika crka, min 1 stevilka

function preveri() {
    var button=document.getElementById("gumb");
    var username=document.getElementById("usr");
    var email=document.getElementById("em");
    var password=document.getElementById("psw");
    var confPassword=document.getElementById("cps");
    
    var check1=false;
    var check2=false;
    var check3=false;
    var check4=false;
    
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confPassword.value);
    
    check1=(regUsr.test(username.value));
    check2=(regEm.test(email.value));
    if(/(?=.*[\s])/.test(password.value)){ //prvo preveri ce je kaksen prazen znak
        console.log("prazno");
    } else{
        check3=(regPass.test(password.value));
    }
    check4=(password.value == confPassword.value);
    
    console.log(check1+" "+check2+" "+check3+" "+check4);
    console.log("////////////////");
    
    if(check1 && check2 && check3 && check4){
        //TODO dodaj v bazo
        button.href="login.html";
    } else {
        button.href="#";
    }
}