function theme(){
    document.getElementsByTagName("link")[0].setAttribute("href", "story.css");

}
//changes the instructions to spanish
function theme1(){
    document.getElementsByTagName("link")[0].setAttribute("href", "story1.css");
}
//Changes the intructions to french
function theme2(){
    document.getElementsByTagName("link")[0].setAttribute("href", "story2.css");

}
//changes the instructions to irish
function theme3(){
    document.getElementsByTagName("link")[0].setAttribute("href", "story3.css");

}

//for nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}