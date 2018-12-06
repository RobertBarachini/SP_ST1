var regTag = new RegExp("^(#[a-zA-Z0-9]+(\ )?)+$");
var regOp= new RegExp("(?=.{1,500}$)");
var regWbL= new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");

function preveri(){
    var button=document.getElementById("gumb");
    var opis=document.getElementById("opis");
    var tagi=document.getElementById("tagi");
    var webS=document.getElementById("wbL");
    
    console.log(regOp.test(opis.value))
    console.log(regTag.test(tagi.value))
    console.log(regWbL.test(webS.value))
    
    
    //button.href="indexPrijavljen.html";
}
