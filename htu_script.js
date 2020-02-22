"use strict"

//This script is going to change color based on langauge 

//Changes the instructions to english
function english(){
        document.getElementById('theme_css').href = '../htu1.css';

}
//changes the instructions to spanish
function spanish(){
        document.getElementById('theme_css').setAttribute("href", " ../htu2.css");
}
//Changes the intructions to french
function french(){
        document.getElementById('theme_css').href = '../htu3.css';

}
//changes the instructions to irish
function irish(){
        document.getElementById('theme_css').href = '../htu4.css';

}