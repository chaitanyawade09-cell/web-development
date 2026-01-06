// Q.1
let expenses = [1200, 100, 2200, 500, 1000]
let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses = totalExpenses + expenses[i]
}
console.log('Total Expenses : ' + totalExpenses);


// Q.2
let shoppingList = ['Milk', 'Bread', 'Eggs', 'Sugar', 'Tooth Paste']
shoppingList.forEach(function (item) {
    console.log(`Don't forget to buy ${item}`);
})

// Q.3
const inventory = [
    { name: 'Laptop', price: 59999 },
    { name: 'Earphones', price: 300 },
    { name: 'Mobile', price: 14999 },
    { name: 'Memmory card', price: 499 },
    { name: 'Book', price: 149 }
]

const premiumItems = inventory.filter(function (item) {
    return item.price >= 1000
})

console.log('Premium Items : ', premiumItems);