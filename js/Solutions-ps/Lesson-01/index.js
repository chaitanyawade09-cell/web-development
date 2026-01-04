// Q.1
let productCost = 5.49, taxRate = 0.10;
let totalCost = productCost * 100 * (taxRate + 1);
console.log(`Product cost + Tax rate = Total cost : $${productCost} + ${taxRate * 100}% = $${Math.round(totalCost) / 100}`);


// Q.2
// const id = 1001;
// id = 2001;
// Error : index.js:9 Uncaught TypeError: Assignment to constant variable.
// this error is occured because const (constant) variable is non reassinable (unchangeble) on other side let variable is locally reassinabel and var is globally reassinable


// Q.3  
let cTemp = 30;
let fTemp = (cTemp * 9 / 5) + 32;
console.log(`Temperature in Celcius : ${cTemp}deg = Temperature in Farenheit : ${fTemp}deg`);
