function getUsers(){
    return [
        {username:'Rama',email:'ram@gmail.com'},
        {username:'Krishna',email:'kris@gmail.com'},
    ];
}

function findUser(username){
    const users = getUsers();
    const suser = users.find((user) => user.username === username);
    return suser;
}

console.log(findUser('Krishna'));