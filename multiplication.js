let n = 6;

function multiplication(){
    
    for(let i =1;i<=10;i++){
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

multiplication();

//function expression or anonymous function
n = 9;
let mul = function(){
    for(let i =1;i<=10;i++){
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
console.log("output from function expression...")
mul();

//arrow functions
n = 12;

let mult = () => {
    for(let i =1;i<=10;i++){
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
console.log("output from arrow functions...")
mult();

//another arrow function

let display = () => console.log("display method using arrow function");

console.log("output from another arrow functions...")
display();

//return a value using arrow function

let addition = () => {
    return 5+6;
}

console.log("output from arrow functions using return statment...")
console.log(addition());

console.log("output from arrow functions with parameters and return statment...")
let addition1 = (x,y) => {
    return x+y;
}

console.log(`Addition = ${addition1(6,7)}`);