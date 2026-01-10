//Q.1
// const array_1 = [7, 9, 0, -2, 4, 7, 8]
// const n = prompt("Enter n numbers for print elements of array : ")
// const array_2 = [null]

// for (let i = 0; i < n; i++) {
//     array_2[i] = array_1[i]
// }

// console.log(array_2);


//Q.2
// const array_1 = [7, 9, 0, -2, 4, 7, 8]
// const n = prompt("Enter n numbers for print elements of array : ")
// const array_2 = [null]

// for (let i = 0; i < n; i++) {
//     array_2[i] = array_1[(array_1.length) - (n - i)]
// }

// console.log(array_2);


//Q.3
const string = null

if (string === '' || string === null) {
    console.log('string is empty');
}
else {
    console.log('string is not empty');
}


//Q.4
let text = 'uPpercase'

if(text[0] === text[0].toLowerCase()) {
    console.log('index is in lowercase');
}
else if(text[0] === text[0].toUpperCase()) {
    console.log('index is in uppercase');
}


//Q.5
const text2 = "              I am a string"
console.log(`original string = ${text2}`);
const t = text2.trim() 
console.log(`string with no no whitespaces = ${t}`);


//Q.6
const searchElem = [1, 44, 7, 13, 46, 3, 64, 366, 10]
const targetElem = prompt('Enter target element here for search in array : ')
let result = null;

searchElem.forEach((Element)=>{
    if(Element == targetElem){
        return result = 1 ;
    }
})
if(result == 1){
    console.log(`${targetElem} is present in this array`);
}
else{
    console.log(`${targetElem} is not present in this array`);
}

console.log("array = ", searchElem);
