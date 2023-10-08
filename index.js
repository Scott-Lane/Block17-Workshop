
const coffeeMenu = require("./coffee_data.js")

//prints the entire menu
console.log(coffeeMenu);

const coffeeNames = coffeeMenu.map(coffee => coffee.name);
// an array that only prints the coffee names
console.log(coffeeNames);

// an array that prints the drinks that are 5 and under, using a less than 6 we can achieve a 5 and under result
const coffeePrice = coffeeMenu.filter(coffee => coffee.price < 6);

console.log(coffeePrice);

// an array that prints the drinks that have even numbered prices
const coffeeEven = coffeeMenu.filter(coffee => coffee.price % 2 === 0);

console.log(coffeeEven);

// an array that prints the total price of all coffee drinks on the menu
// 0 is the initial value for total
// the total parameter will continue to accumulate the sum of the coffee prices till it has gone through them all
const coffeeTotal = coffeeMenu.reduce((total, coffee) => total + coffee.price, 0);

console.log(coffeeTotal);

// this array will pull out all of the seasonal coffee drinks by checking the seasonal value as true
const coffeeSeasonal = coffeeMenu.filter(coffee => coffee.seasonal === true);

console.log(coffeeSeasonal);

// the following array will print the names of the seasonal coffee followed by a string "with imported beans."
// the forEach loop is used since it will perform a specific action after the initial filter loop has pulled out the two seasonal drinks

const coffeeSeasonal1 = coffeeMenu.filter(coffee => coffee.seasonal === true); 

coffeeSeasonal1.forEach(coffee => {
    console.log(`${coffee.name} with imported beans.`);
});


