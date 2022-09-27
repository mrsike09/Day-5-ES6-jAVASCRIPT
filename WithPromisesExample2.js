let success = true;

function getUsers(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(success){
                resolve([
                    {username:'Rama',email:'ram@gmail.com'},
                    {username:'Krishna',email:'kris@gmail.com'},
                ]);
            }else{
                reject('Faile to fetch user data');
            }
        },1000);
    });
}

getUsers().then((users) =>{
    console.log(users);
}).catch((error) =>{
    console.log(error)
}).finally(() =>{
    console.log("hi from finally...")
});