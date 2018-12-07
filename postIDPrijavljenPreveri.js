var regOp= new RegExp("(?=.{1,500}$)");

function preveri(){
    var button=document.getElementById("gumb");
    var opis=document.getElementById("opis");
    
    console.log(regOp.test(opis.value))
    
    
    //button.href="postIDPrijavljen.html";
}

