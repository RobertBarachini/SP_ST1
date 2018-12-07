var regTag = new RegExp("^(#[a-zA-Z0-9]+(\ )?)+$");
var regOp= new RegExp("(?=.{1,500}$)");

function preveri(){
    var button=document.getElementById("gumb");
    var opis=document.getElementById("opis");
    var tagi=document.getElementById("tagi");
    
    console.log(regOp.test(opis.value))
    console.log(regTag.test(tagi.value))
    
    
    //button.href="indexPrijavljen.html";
}

