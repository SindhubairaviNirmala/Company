var bar1=document.getElementsByClassName("menu-icon")
var navbar=document.getElementById("navbar")
var bar2=document.getElementById("menu")

function menu(){
    if(navbar.style.display=="block"){
       navbar.style.display="none"
    }
    else{
        navbar.style.display="block"
    }    
}

var first=document.getElementById("first")
var hide=document.getElementById("hide")

function show(){
        hide.style.display="block"
        first.style.display="none"
} 

var second=document.getElementById("second")
var hide1=document.getElementById("hide1")

function showshow(){
    hide1.style.display="block"
    second.style.display="none"
 }