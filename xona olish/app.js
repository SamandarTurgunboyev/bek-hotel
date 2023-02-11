function och(){
    document.querySelector("#menyu").style.display="block";
    document.querySelector(".menu").setAttribute("onclick","yop(this)");

}
function yop(){
    document.querySelector("#menyu").style.display="none";
    document.querySelector(".menu").setAttribute("onclick","och(this)");
}
function narx(){
    let sel=document.querySelector(".select").value;
    if(sel=="oy1"){
        document.querySelector(".summa").innerHTML="150$"
    }
    if(sel=="oy2"){
        document.querySelector(".summa").innerHTML="300$"
    }
    if(sel=="oy3"){
        document.querySelector(".summa").innerHTML="450$"
    }
    if(sel=="oy4"){
        document.querySelector(".summa").innerHTML="600$"
    }
    if(sel=="oy5"){
        document.querySelector(".summa").innerHTML="750$"
    }
    if(sel=="oy6"){
        document.querySelector(".summa").innerHTML="900$"
    }
    if(sel=="oy7"){
        document.querySelector(".summa").innerHTML="1050$"
    }
    if(sel=="oy8"){
        document.querySelector(".summa").innerHTML="1200$"
    }
    if(sel=="oy9"){
        document.querySelector(".summa").innerHTML="1350$"
    }
    if(sel=="oy10"){
        document.querySelector(".summa").innerHTML="1500$"
    }
    if(sel=="oy11"){
        document.querySelector(".summa").innerHTML="1650$"
    }
    if(sel=="oy12"){
        document.querySelector(".summa").innerHTML="1800$"
    }
}
function olish(){
    document.querySelector(".select").setAttribute("class","display")
    document.querySelector(".summa").setAttribute("class","display")
    document.querySelector(".olish").setAttribute("class","display")
    document.querySelector("#olindi").removeAttribute("class","display")
}