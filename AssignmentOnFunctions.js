var answer = prompt("You owe me $0. Please enter the amount you are paying");
function change(amountPayed, origCost) {
  var difference = origCost - amountPayed;
  console.log(difference);
  if (difference > 0) {
    console.log("You gave too little. You still owe $" + difference);
  } else if (difference < 0) {
    console.log("You gave too much. Your change due is $" + difference);
  } else {
    console.log("You gave the exact amount");
  }
  return difference;
}
change(300, 400);