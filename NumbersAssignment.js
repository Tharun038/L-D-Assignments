function randomNum(max, min){
    var num=Math.floor(Math.random()*(max-min))+min;
    console.log(num);
}
console.log(randomNum(20, 10));