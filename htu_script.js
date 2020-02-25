"use strict"

//This script is going to change color based on langauge 

//Changes the instructions to english
function english(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu.css");

}
//changes the instructions to spanish
function spanish(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu1.css");
}
//Changes the intructions to french
function french(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu2.css");

}
//changes the instructions to irish
function irish(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu3.css");

}

//for nav
function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }