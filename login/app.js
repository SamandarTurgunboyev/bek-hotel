function och(){
    document.querySelector("#menyu").style.display="block";
    document.querySelector(".menu").setAttribute("onclick","yop(this)");

}
function yop(){
    document.querySelector("#menyu").style.display="none";
    document.querySelector(".menu").setAttribute("onclick","och(this)");
}
let ota=document.querySelector(".href");
let gmail=ota.children[1];
let pas=ota.children[5];
let user=ota.children[9];
let age=ota.children[13];
let wrong=document.querySelectorAll(".wrong")
function sign(){
    if(gmail.value.includes("@gmail.com")){
        gmail.style.border="1px solid lime";
        document.getElementById("wemail").style.display="none";
        document.getElementById("remail").style.display="block";
    }
    else{
        gmail.style.border="1px solid red";
        document.getElementById("wemail").style.display="block";
        document.getElementById("remail").style.display="none";
    }
    if(pas.value.length>=8){
        pas.style.border="1px solid lime";
        document.getElementById("wpas").style.display="none";
        document.getElementById("rpas").style.display="block";
    }
    else{
        pas.style.border="1px solid red";
        document.getElementById("wpas").style.display="block";
        document.getElementById("rpas").style.display="none";
    }
    if(user.value.includes("_")){
        user.style.border="1px solid lime";
        document.getElementById("wuser").style.display="none";
        document.getElementById("ruser").style.display="block";
    }
    else{
        user.style.border="1px solid red";
        document.getElementById("wuser").style.display="block";
        document.getElementById("ruser").style.display="none";
    }
    if(age.value>=18){
        age.style.border="1px solid lime";
        document.getElementById("wage").style.display="none";
        document.getElementById("rage").style.display="block";
    }
    else{
        age.style.border="1px solid red";
        document.getElementById("wage").style.display="block";
        document.getElementById("rage").style.display="none";
    }
    if(age.style.borderColor="lime" && user.style.borderColor=="lime" && pas.style.borderColor=="lime" && gmail.style.borderColor=="lime" && age.stye.borderColor=="lime"){
        ota.getAttribute("href","\index.html")
    }
}
function ins(){
    document.querySelector(".signup").style.display="none"
    document.querySelector(".signin").style.display="block"
    document.querySelector(".sin").style.backgroundColor="rgb(75, 75, 75)"
    document.querySelector(".up").style.backgroundColor="rgb(38, 38, 38)"
}
function up(){
    document.querySelector(".signup").style.display="block"
    document.querySelector(".signin").style.display="none"
    document.querySelector(".sin").style.backgroundColor="rgb(38, 38, 38)"
    document.querySelector(".up").style.backgroundColor="rgb(75, 75, 75)"
}