//za pug

var regIn = new RegExp("^\S+$");

function preveri() {
    var button=document.getElementById("gumb");
    var searchTab=document.getElementById("searchIn");
    
    console.log(regIn.test(searchTab.value));
    //button.type="submit";
}