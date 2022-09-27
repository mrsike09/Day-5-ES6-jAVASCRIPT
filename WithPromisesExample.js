function getUsers(){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve([
                 {username:'Rama',email:'ram@gmail.com'},
                 {username:'Krishna',email:'kris@gmail.com'},
             ]);
         }, 1000);
    });

}

function onFullFilled(users){
    console.log(users);
}

//const promise = getUsers()
//promise.then(onFullFilled);
/* promise.then((users) =>{
    console.log(users);
}) */

getUsers().then((users) =>{
    console.log(users);
})