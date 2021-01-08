var answer = prompt("You owe me $0. Please enter the amount you are paying");
function change(amountPayed, origCost) {
    var difference = origCost - amountPayed;
  switch(true){
      case difference>0:
        console.log("You gave too little. You still owe $" + difference);
        break;
    case difference==0:
        console.log("You gave the exact amount");
        break;
    case difference<0:
        console.log("You gave too much. Your change due is $" + difference);
        break;
    default:
        console.log("pay check");
    }
return difference;
}
change(100,500);