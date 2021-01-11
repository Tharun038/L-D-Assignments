//changing the text of heading 1
document.getElementById("h1").innerHTML="Welcome to my site!"

//changing the text of paragraph
document.getElementById("p1").innerHTML="My name is Tharun"

//remove the second h1 element
var heading2=document.getElementsByTagName("h1")[1]
document.getElementById("main").removeChild(heading2);

//change font color of p2
document.getElementById("p2").style.color="blue"

//change the text of p2
document.getElementById("p2").innerHTML="I love java script"
