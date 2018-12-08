var regTag = new RegExp("^(#[a-zA-Z0-9]+(\ )?)+$");
var regOp= new RegExp("(?=.{1,500}$)");
var regWbL= new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");

function preveri(){
    var button=document.getElementById("gumb");
    var opis=document.getElementById("exampleFormControlTextarea1");
    var tagi=document.getElementById("tagi");
    var webS=document.getElementById("wbL");
    
    var check1=regOp.test(opis.value);
    var check2=regTag.test(tagi.value);
    var check3=regWbL.test(webS.value);
    
    /*
    console.log(regOp.test(opis.value))
    console.log(regTag.test(tagi.value))
    console.log(regWbL.test(webS.value))
    */
    if(check1 && check2 && check3){
        console.log("TRU")
        button.href="/login";
    }
    //
}
