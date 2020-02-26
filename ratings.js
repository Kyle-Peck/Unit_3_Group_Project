

function button(select){
    var value = select.options[select.selectedIndex].text;
    if(value == "sport"){
        document.getElementsByTagName("link")[0].setAttribute("href","sport.css")
    }else if(value == "classy"){
        document.getElementsByTagName("link")[0].setAttribute("href","ratings.css")
    }else if(value == "smart"){
        document.getElementsByTagName("link")[0].setAttribute("href","smart.css")
    }else if(value == "casual"){
        document.getElementsByTagName("link")[0].setAttribute("href","casual.css")
    }else{
        alert("something broke");
    }
}

// function button(){
//     document.getElementsByTagName("link")[0].setAttribute("href","ratings.css")
// }
// function button(){
//     document.getElementsByTagName("link")[0].setAttribute("href","ratings2.css")
// }
// function button(){
//     document.getElementsByTagName("link")[0].setAttribute("href","ratings3.css")
// }