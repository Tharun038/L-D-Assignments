//Declaring the fruit, quantity and priceperunit in object form
const fruits = [
    {
        "fruit" : "strawberry",
        "quantity" : 15,
        "priceperunit" : 10
    },
    {
        "fruit" : "pineapple",
        "quantity" : 10,
        "priceperunit" : 40
    },
    {
        "fruit" : "apple",
        "quantity" : 6,
        "priceperunit" : 20
    },
    {
        "fruit" : "mango",
        "quantity" : 12,
        "priceperunit" : 50
    },
    {
        "fruit" : "pear",
        "quantity" : 10,
        "priceperunit" : 80
    }
];
//
 const filteringFruits = fruits.filter(fruits => (fruits.quantity)*(fruits.priceperunit) >= 250);
console.log(filteringFruits);

