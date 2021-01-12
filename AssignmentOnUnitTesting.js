function rps(player1, player2){
    if(player1=="r"){
        if(player2=="r"){
            return "Tie";
        }else if(player2=='p'){
            return "Paper beats rock. Player 2 wins"
        }else if(player2=='s'){
            return "Rock beats secissor player 1 wins"
        } else {
           return "Player 2 made an invalid selection"
        }
  }else if(player1=='s'){
       if(player2=='r'){
           return "Rock beak secissor. player1 wins"
       }else if(player2=='p'){
           return "Paper beats secissor. Player2 wins"
       } else if(player2=='s'){
           return "Tied";
       }else{
           return"player 2 made invalid selction"
       }
    }else if(player1=='p'){
        if(player2=='r'){
            return "paper beats rock. Player 1 wins"
        }else if(player2=='s'){
        return "Secissors beat paper. player 2 wins"
    } else if(player2=='p'){
        return "Tied";
    } else{
        return"Player 2 made an invalid selection";
    }
}else{
    return "player1 made an invalid slection"
}
   
    }
    

      

      function test(name, expected, actual){
        if(expected==actual){
            console.log(name + "\n Test passed"+ expected + "is equal to" +actual +".");
        }else{
            console.log(name+"\n Test failed"+expected+"is not equal to the"+ actual)
        }
    }
    test("p1:rock, p2:rock", "Tie", rps('r','r'))
    test("p1:rock, p2:Paper", "Paper beats rock. Player 2 wins", rps('r', 'p'))
    test("p1:rock, p2:seccisor", "Rock beats secissor player 1 wins", rps('r', 's'))
    test("p1:rock, p2:bla", "Player 2 made an invalid selection", rps('r','0'))

    test("p1:paper, p2:rock", "paper beats rock. Player 1 wins", rps('r','p'))
    test("p1:paper, p2:secissor", "Secissors beat paper. player 2 wins", rps('p', 's'))
    test("p1:paper, p2:paper", "Tied", rps('p', 'p'))
    test("p1:paper, p2:bla", "Player 2 made an invalid selection", rps('p','0'))
    test("p1:0, p2:bla", "player1 made an invalid slection", rps('0', 'p'))