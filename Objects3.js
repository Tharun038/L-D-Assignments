 //constructors

 function Person(first, last){
    this.name1=first,
    this.name2=last
 this.name=function(){
     console.log(this.name1+ " " +this.name2)
 }
}
var me=new Person("QA", "RY")
console.log(me)
console.log(me.name1)

// adding a property
Person.prototype.favColor="blue"
console.log(me)

//adding a function
Person.prototype.printColor=function(){
    console.log("print the color")
}


console.log(me)