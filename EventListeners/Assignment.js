function btnpressed(){
    document.getElementById("p1").innerHTML="Button1 was pressed"
    alert("button 1 was clicked")
}

function changeTxt(){
   var chars= document.getElementById("i1").value
document.getElementById("p2").innerHTML="characters typed :"+ chars.length
       
}

document.getElementById("b2").addEventListener("click", btn2Clicked)
function btn2Clicked(){
    var main=document.getElementById("main")
    var child=document.getElementById("p3")
    main.removeChild(child)
}
document.getElementById("i2").addEventListener("change", textchange)

function textchange(){
    var size=document.getElementById("i2").value.length
    document.getElementById("p4").style.fontSize=size+"em"
}

