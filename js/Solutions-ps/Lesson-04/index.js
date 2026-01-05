// Q.1
function calculateArea(height, width) {
    return height * width
}
console.log(`Area : ${calculateArea(6, 12)} \nArea : ${calculateArea(2, 20)}`);


// Q.2
function greet(name = 'Thomas') {
    console.log(`Hello ${name}`); 
}
greet()
greet('Navdeep')


// Q.3
function instructions(){
    console.log('Step 1 : Click the button');
    console.log('Step 2 : Enter your data');
    console.log('Step 3 : Submit form');
}
instructions()