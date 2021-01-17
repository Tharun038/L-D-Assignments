//Fizz Buzz assignment 
function fizzBuzz(start,end) {

    if (end>start){
     
     for (var i=start; i <= end; i++) {
         if (i % 3 === 0 && i % 5 === 0) {
         console.log("FizzBuzz")
     } else if (i % 3 === 0) {
         console.log("Fizz")
     } else if (i % 5 === 0) {
         console.log("Buzz")
     } else {
         console.log(i)
     }
         
     }
 }
 else{
     console.log("Start value "+start+" is greater than End value "+end)
 }
 
 }

 fizzBuzz(1, 15);