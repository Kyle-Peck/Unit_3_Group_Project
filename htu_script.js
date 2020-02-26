"use strict"

//This script is going to change color based on langauge 

//Changes the instructions to english
function english(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu.css");
      var  stepsHTML = "<h1>English</h1>";
      stepsHTML += "<p>1. First, put the watch through your wrist.</p>" ;
      stepsHTML += "<p>2. Adjust the strap to you best fit on your wrist.</p>" ;
      stepsHTML += "<p>3.When you turn the labeled <strong>Change</strong> button;  turn the <strong>Select</strong> button until find your desired outfit</p>" ;
      stepsHTML += "<p>4. Press <strong>Change</strong> again when you’re satisfied your choice.</p>" ;

      document.getElementById("step").innerHTML = stepsHTML; 
}
//changes the instructions to spanish
function spanish(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu1.css");

        var  stepsHTML = "<h1>Español</h1>";
        stepsHTML += "<p>1. Primero, pon el reloj en tu muñeca.</p>" ;
        stepsHTML += "<p>2. Ajuste la correa para que se ajuste mejor a su muñeca.</p>" ;
        stepsHTML += "<p>3.Cuando gire el botón etiquetado <strong>Cambiar<strong>; gire el botón <trong>Seleccionar</strong>hasta encontrar su atuendo deseado</p>" ;
        stepsHTML += "<p> 4. Presione <strong>Cambiar</strong>nuevamente cuando esté satisfecho con su elección.</p>" ;

        document.getElementById("step").innerHTML = stepsHTML; 
}
//Changes the intructions to french
function french(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu2.css");
        var  stepsHTML = "<h1>Français</h1>";
        stepsHTML += "<p>1.Commencez par mettre la montre dans votre poignet.</p>" ;
        stepsHTML += "<p>2.Athraigh an strap chugat is fearr a oireann duit ar do chaol na láimhe.</p>" ;
        stepsHTML += "<p>3.Lorsque vous tournez le bouton étiqueté <strong>Modifier</strong>; tourner le bouton <strong>Sélectionner</strong> jusqu'à trouver la tenue souhaité</p>" ;
        stepsHTML += "<p>4.Appuyez à nouveau sur <strong>Modifier</strong> lorsque vous êtes satisfait de votre choix.</p>" ;

        document.getElementById("step").innerHTML = stepsHTML; 
}
//changes the instructions to irish
function irish(){
        document.getElementsByTagName("link")[0].setAttribute("href", "htu3.css");

        var  stepsHTML = "<h1>Gaeilge</h1>";
        stepsHTML += "<p>1. Ar dtús, cuir an faire trí do chaol na láimhe.</p>" ;
        stepsHTML += "<p>2. Athraigh an strap chugat is fearr a oireann duit ar do chaol na láimhe.</p>" ;
        stepsHTML += "<p>3.Nuair a chasann tú an cnaipe <strong>athrú</strong> lipéadaithe; cas an cnaipe <strong>roghnaigh</strong> go dtí go bhfaighidh tú an culaith atá uait</p>" ;
        stepsHTML += "<p>4. Brúigh <strong>athrú</strong> arís nuair atá tú sásta le do rogha</p>" ;

        document.getElementById("step").innerHTML = stepsHTML; 
}

//for nav
function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }