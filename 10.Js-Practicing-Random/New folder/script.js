// Array is a collection of similar data types in single variable

// const Array = ["a", "b", "c", "d", "e"];
// console.log("Hello World!");

// const employee = {
//     name: "john",
//     address: "Pokhara",
//     contact: 9818,
//     showDetails() {
//         return 'Hi i am ' + this.name + ' from ' + this.address + ' dadh ' + this.contact;
//     }
// }
// console.log(employee.showDetails());
// Dessructuring is the way of unpacking the array elements

// const array = ["a", "b", "c", "d"];
// const [first, second, third, fourth] = array;

// console.log(first);
// console.log(second);

// Spread operator ...
// const variable = [1, 2, 3, 4, 5];
// function add(a, b, c, d, e) {
//     return a + b + c + d + e;
// }
// console.log(add(...variable));

const number = [1, 2, 3, 4, 5];
const newnumber = [6, 7, 8, 9, 10];
number.push(...newnumber);
console.log(number);
newnumber.pop();
console.log(newnumber);

console.log(newnumber.map(function (value, index) {
    return 'I am ' + index + 'number' + value * 10;

}));

