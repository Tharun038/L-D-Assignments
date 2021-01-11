var family={
    Father:{
        firstname:"R",
        lastname:"TU"
    },
    Mother:{
        firstname:"Q",
        lastname:"RTUS"
    },
    children:["child1", "child2"],

}
family["children"][2]="Child4";
console.log(family);
delete family.Mother.firstname;
console.log(family);


var sports={
    outdoorGame:"Cricket",
    indoorGame: "Carroms",
    playingOutDoorGame:function(){
        console.log("I'm playing the" + sports.outDoorGame);
    },
    playingIndoorGame:function(hours){
        console.log("I'm playing " + sports.indoorGame + " for " +  hours + " hrs");
    }
    }
    console.log(sports.playingIndoorGame(2));


    
     



   


    

    

