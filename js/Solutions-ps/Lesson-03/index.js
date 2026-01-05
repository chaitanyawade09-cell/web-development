// Q.1
let age = 19
if (age < 112) {
    if (age > 18) {
        console.log('Access granted : you are an Adult');
    }
    else {
        console.log('Access denied : you are a minor');
    }
}
else {
    console.log('Invalid Input!');
}


// Q.2
let score = 75

if (score > 89 && score < 100) {
    console.log('Grade-A');
}
else if (score > 79 && score < 90) {
    console.log('Grade-B');
}
else if (score > 69 && score < 80) {
    console.log('Grade-C');
}
else if (score > 0 && score < 70) {
    console.log('Grade-F');
}
else{
    console.log('Invalid Input!');
}


// Q.3
let isAdmin = true, isSuperUser = true

if (isSuperUser == true && isAdmin == false || isSuperUser == false && isAdmin == true) {
    console.log('Limited view Access only');
}
else if (isSuperUser == true && isAdmin == true) {
    console.log('Full DashBoard access if granted');    
}
else{
    console.log('Access denied');
}