var story=
"Think of cheeseburgers like a Tinder match. They might not all be your soulmate but you’ve gotta find out to be sure. It can get a little messy and that’s just part of the fun Some are cheesy, others can be a little dry, and the rare few are a disaster. There are so many cheeseburgers out there it can be hard to commit to just one favourite. That being said, when you know, you just know Everyone has their perfect match Sometimes it’s just around the corner, other times you have to travel the world in search of it. Wherever your perfect cheeseburger is, it’s out there.";

//converting all chessburgers to hamburgers
var hamburger=story.replace(/cheeseburgers/g, "Hamburgers");
console.log(hamburger);

//Captlize all bun words

var capitalWord=story.replace(/fun/g, "FUN");
console.log(capitalWord);


//number of characters of a string
console.log(story.length);

//number of words in the string

var arr=story.split(" ").length;
console.log(arr);


