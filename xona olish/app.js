function och(){
    document.querySelector("#menyu").style.display="block";
    document.querySelector(".menu").setAttribute("onclick","yop(this)");

}
function yop(){
    document.querySelector("#menyu").style.display="none";
    document.querySelector(".menu").setAttribute("onclick","och(this)");
}