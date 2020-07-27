
var textTitle = "TeknoWorld";
var textMessage = "Pensamos en vos!";

$(function() {

    setTimeout(ocultarSvg, 3600);

    setTimeout(typeTitle, 3800); 

    $("#snackbar").on("click",() => {
        var x = document.getElementById("snackbar");
        x.className = x.className.replace("show", ""); 
    });

});

var str = textTitle;
var str2 = textMessage;

var i = 0;
var j = 0;
var text;
var text2;

function typeTitle() {
    text = str.slice(0, ++i);
    
    document.getElementById('titulo').innerHTML = text;
    if (text === str) {
        setTimeout(typeMessage, 500);
        return;
    } 

    if (text.length < str.length/2){
        setTimeout(typeTitle, 150);
    } else {
        setTimeout(typeTitle, 100);        
    }
};

function typeMessage() {
    text2 = str2.slice(0, ++j);
    
    document.getElementById('mensaje').innerHTML = text2;
    if (text2 === str2) {
        setTimeout(mostrarToast, 2500);
        return;
    } 

    setTimeout(typeMessage, 100);
};

function ocultarSvg() {
    $("#svgPicture").hide();
}

function mostrarToast() { 

    var x = document.getElementById("snackbar");

    x.className = "show";
}