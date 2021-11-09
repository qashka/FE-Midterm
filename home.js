let hello;
let slide1;

function hello() {
    var buttonNumber = document.getElementsByTagName("a").length;
    console.log(buttonNumber);
}

function slide1() {
    var slideNumber = document.getElementById("slide-1").length;
    console.log(slideNumber);
}