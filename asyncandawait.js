function getEmployee(empId,callback){
    console.log('Get Employee from the database');
    setTimeout(() => {
        callback([
             {empname:'Rama',empemail:'ram@gmail.com'},
             {empname:'Krishna',empemail:'kris@gmail.com'},
             {empname:'Sita',empemail:'sita@gmail.com'},
         ]);
     }, 1000);
}

function getServices(employee,callback){
    console.log(`Get services of ${employee.empname} from the API...`);
    setTimeout(() => {
        callback(['Email','VPN','CDN']);
     }, 2 *1000);
}



function getServiceCost(services,callback){
    console.log(`Calculate Service costs of ${services}`);
    setTimeout(() => {
        callback(services.length *100);
     }, 3 *1000);
}

getEmployee(100,(employee)=>{
    getServices(employee,(services)=>{
        getServiceCost(services,(cost)=>{
            console.log(`The Service cost is ${cost}`);
        });
    });
});