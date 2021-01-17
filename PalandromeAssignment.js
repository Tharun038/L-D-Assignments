//Assignment on palandrome
function palandrome(word){
    let splitWord=word.split("");
    splitWord=splitWord.reverse()
    splitWord=splitWord.join("")
    
 if(word.toLowerCase().replace(/\s/g, "")==splitWord.toLowerCase().replace(/\s/g, "")){
        return true;
    }
}

console.log(palandrome("aba"));
console.log(palandrome("Abba"))
console.log(palandrome("A  bba"))