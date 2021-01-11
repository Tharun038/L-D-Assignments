//getters-To call the function as a property

var person={
    firstName:"Jason",
    lastName:"Mayer",
  get myName(){
     return this.firstName+ " " + this.lastName;
  },
  set myName(value){
    var name=value.split(" ")
    this.firstName=name[0]
    this.lastName=name[1]
  }
}
console.log(person.myName)
person.myName="Bobby jonas"
console.log(person.myName)
console.log(person)



//setter-To change the values in the stter method


