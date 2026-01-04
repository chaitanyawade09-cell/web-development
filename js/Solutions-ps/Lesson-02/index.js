// Q.1
let name = 'Laptop';
let price = 49999;
let sellerName = 'Ramu Kaka Enterprises';

let summary = `Selling price of a ${name} is Rs.${price} at ${sellerName}.`

console.log(summary);


// Q.2
let value = 'JS'
let message = `   Welcome  to  the  ${value}  course !`

let msgFilter = message.trim().toUpperCase()   //spaces are removed by using trim()
console.log(`original message : ${message} \nFiltered message : ${msgFilter}`);


// Q.3
let firstName = 'Harry'
let lastName = 'Potter'
console.log('Welcome ' + firstName + ' ' + lastName + ', in this course!');
