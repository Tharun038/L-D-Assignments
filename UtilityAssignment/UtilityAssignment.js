//declaring the date function
let date=new Date()

//colors
const color=["blue", "red", "yellow", "orange", "Sky blue", "green"];

//lorem string
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."


//Base random generator
function randomNumberGenerator(min, max){
    let rand=Math.floor(Math.random()*(max-min+1)+min);
    return rand;
}
//adding eventlistener to click on button
document.getElementById("randomNum").addEventListener("click", randomNumber)
//generating random number 1 to 100
function randomNumber(){
    document.getElementById("p0").innerHTML=Math.floor((101*Math.random()));
}
//adding event listener to generate random number between start and end
document.getElementById("b1").addEventListener("click", randomNumBetweenStartAndEnd)
//Returns a random number between "Start" and "End"
 function randomNumBetweenStartAndEnd(){
     let startval=document.getElementById("startval").value;
     let endval=document.getElementById("endval").value;
     const newrand=randomNumberGenerator(startval, endval)
     document.getElementById("p1").innerHTML=newrand;
 }

 //adding event listener to the lorem String
 document.getElementById("b2").addEventListener("click", loremString)
 //function to generation loremString
 function loremString(){
     document.getElementById("p2").innerHTML=lorem;
 }

 //adding event listener to generate number of sentences
 document.getElementById("b3").addEventListener("click", loremSentence);
 //function to generate lorem senetnces
 function loremSentence(){
     let numberOfSentence=document.getElementById("loremsent").value;
     let newLoremSentence=lorem.split(".");
     let newlorem="";
     for(let i=0; i<numberOfSentence; i++){
         newlorem=newlorem+newLoremSentence[i]+ ".";
     }
     document.getElementById("p3").innerHTML=newlorem;
    }
//adding event listener to generate number of characters
document.getElementById("b4").addEventListener("click", loremChar);
//function to generate lorem characters
function loremChar(){
    let numberOfCharacter=document.getElementById("loremchar").value;
    let newLoremCharcter=lorem.split("");
    let newlorem="";
    for(let i=0; i<numberOfCharacter; i++){
        newlorem=newlorem+newLoremCharcter[i];
    }
    document.getElementById("p4").innerHTML=newlorem;
}
//adding event listener to get the current date
document.getElementById("b5").addEventListener("click", currentDate);
//adding function to the current date format
function currentDate(){
    let currentDateFormat=date.getDate() + "-" + date.getMonth()+1 + "-" + date.getFullYear()
    document.getElementById("p5").innerHTML=currentDateFormat;
}

//adding event listener to get the current time
document.getElementById("b6").addEventListener("click", currentTime);
//Function to get the current time format
function currentTime(){
    let currentTimeFormat=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    document.getElementById("p6").innerHTML=currentTimeFormat;
}
//adding event listener to convert inch to feet
document.getElementById("b7").addEventListener("click", inchToFeet)
//function to convert inch to feet
function inchToFeet(){
    let inch=document.getElementById("toFeet").value;
    let cnvertToFeet=inch*0.0833333;
    document.getElementById("p7").innerHTML=cnvertToFeet;
}
//adding event listener to convert feet to inch
document.getElementById("b8").addEventListener("click", feetToInch)
//function to convert feet to inch
function feetToInch(){
    let feet=document.getElementById("toInch").value;
    let convertToInch=feet*12;
    document.getElementById("p8").innerHTML=convertToInch;
}
//adding event listener to compare the length of words
document.getElementById("b9").addEventListener("click", compareWords);
//function to compare words
function compareWords(){
    let firstWord=document.getElementById("firstWord").value.length;
    let secondWord=document.getElementById("secondWord").value.length;
    if(firstWord==secondWord){
     document.getElementById("p9").innerHTML="Length of first word and second word are equal";
   } else{
    document.getElementById("p9").innerHTML="Length of first word and second word are not equal";     
   }
}

//adding event listener to generate random password
document.getElementById("b10").addEventListener("click", randomPassword);
//function to know random password
function randomPassword(){
    let chars=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', '1', '2', '3', '4', '5', '6', '7', '8', '@'];
   let newPass="";
   for(let i=0; i<=12; i++){
       let num=randomNumberGenerator(0, 12);
       newPass=newPass+chars[num];
   }
   document.getElementById("p10").innerHTML=newPass;
}

//adding eventlistener to know the number is odd or even
document.getElementById("b11").addEventListener("click", evenOrOdd);
//function to know number is odd or even
function evenOrOdd(){
    let numVal=document.getElementById("evenOrOdd").value;
    if(numVal%2==0){
        document.getElementById("p11").innerHTML="Number is even";
    }else if(numVal%2!=0){
        document.getElementById("p11").innerHTML="Number is odd";
    }
}
    
    
//add eventlistener to generate the ranom color
     document.getElementById("b12").addEventListener("click", randomColor);
  //Function to generate the random color
  function randomColor(){
      let newColor=color[randomNumberGenerator(0, (color.length-1))];
     document.getElementById("p12").innerHTML=newColor;
  }
//an object which contains first and last names
  let namesOfFirstAndLast=
          [
              {
              firstName:"QA0",
              secondName:"QA1"
              },
              {
                firstName:"QA1.0",
                secondName:"QA89"
              },
              {
                firstName:"jobb",
                secondName:"Mon"
              },
              {
                firstName:"Torendo",
                secondName:"US"
              },
              {
                firstName:"lek",
                secondName:"pek"
              },
              {
                firstName:"Ku",
                secondName:"Yt"
              },
           ]


//add an event listener to generate a random name
document.getElementById("b13").addEventListener("click", randomName)
//Function to generate random name
function randomName(){
 let firstName= namesOfFirstAndLast[randomNumberGenerator(0, namesOfFirstAndLast.length-1)].firstName;
 let secondName=namesOfFirstAndLast[randomNumberGenerator(0, namesOfFirstAndLast.length-1)].secondName;
 let newName= firstName +  ":" + secondName;
 document.getElementById("p13").innerHTML=newName;
}






