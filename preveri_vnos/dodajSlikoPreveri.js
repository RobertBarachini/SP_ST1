var regTag = new RegExp("^(#[a-zA-Z0-9]+(\ )?)+$");
var regOp= new RegExp("(?=.{1,500}$)");

function preveri(){
    var button=document.getElementById("gumb");
    var opis=document.getElementById("exampleFormControlTextarea1");
    var tagi=document.getElementById("tagi");
    
    
    var check1=regOp.test(opis.value);
    var check2=regTag.test(tagi.value);
    /*
    console.log(regOp.test(opis.value))
    console.log(regTag.test(tagi.value))
    */
    if(check1 && check2){
        console.log("TRU")
        button.href="/login";
    }
    //button.href="indexPrijavljen.html";
}

