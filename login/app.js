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
let pas=ota.children[3];
let user=ota.children[5];
let age=ota.children[7];
function sign(){
    if(gmail.value.includes("@gmail.com")){
        gmail.style.border="1px solid lime";
    }
    else{
        gmail.style.border="1px solid red";
    }
    if(pas.value.length>=8){
        pas.style.border="1px solid lime";
    }
    else{
        pas.style.border="1px solid red";
    }
    if(user.value.includes("_")){
        user.style.border="1px solid lime";
    }
    else{
        user.style.border="1px solid red";
    }
    if(age.value>=18){
        age.style.border="1px solid lime"
    }
    else{
        age.style.border="1px solid red"
    }
    if(age.style.borderColor="lime" && user.style.borderColor=="lime" && pas.style.borderColor=="lime" && gmail.style.borderColor=="lime"){
        ota.setAttribute("href","\hotel\index.html")
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