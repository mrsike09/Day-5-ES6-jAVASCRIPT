function getUsers(returnUsers){

    let users = [];
    //delay for 1 second
    setTimeout(() => {
       returnUsers([
            {username:'Rama',email:'ram@gmail.com'},
            {username:'Krishna',email:'kris@gmail.com'},
        ]);
    }, 1000);
    
    return users;
}

function findUser(username,returnUsers){
   /*  const users = getUsers();
    const suser = users.find((user) => user.username === username);
    return suser; */
    getUsers((users) =>{
        const suser = users.find((user) => user.username === username);
        returnUsers(suser);
    })
}

findUser('Krishna',console.log);