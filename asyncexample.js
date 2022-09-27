async function sayHello(){
    return 'Hello';
}

//sayHello().then(console.log);

async function sayHelloP(){
    return Promise.resolve('Hello');
}

let sayHelloArrow = async () => "hello";

let sayHelloFnEx = async function() {return "hello"};

class Hi{
    async sayHelloClass(){
        return 'Hello';
    } 
}

async function display(){
    let result =  await sayHello();
    console.log(result);
}

display();