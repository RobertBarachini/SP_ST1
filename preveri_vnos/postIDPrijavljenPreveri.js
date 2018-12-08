var regOp= new RegExp("(?=.{1,500}$)");

function preveri(){
    var button=document.getElementById("gumb");
    var opis=document.getElementById("exampleFormControlTextarea1");
    
    console.log(regOp.test(opis.value))
    
    
    //button.href="postIDPrijavljen.html";
}

