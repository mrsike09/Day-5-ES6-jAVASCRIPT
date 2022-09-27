const arrayValue = ["Hello","How","are","U"];

console.log(arrayValue);

//spread operator
console.log(...arrayValue);

const arr = ["welcome"];

console.log(arr);

const arr1 = [...arrayValue,...arr];

console.log(arr1);
console.log(...arr1);