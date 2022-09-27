function getEmployee(empId){
    return new Promise((resolve,reject) =>{
        console.log('Get Employee from the database');
        setTimeout(() => {
            resolve([
                {empname:'Rama',empemail:'ram@gmail.com'},
                {empname:'Krishna',empemail:'kris@gmail.com'},
                {empname:'Sita',empemail:'sita@gmail.com'},
             ]);
         }, 1000);
    });
}

function getServices(employee){
    return new Promise((resolve,reject) =>{
        console.log(`Get services of ${employee.empname} from the API...`);
        setTimeout(() => {
            resolve(['Email','VPN','CDN']);
         }, 2 *1000);
    });
}

function getServiceCost(services){
    return new Promise((resolve,reject) =>{
        console.log(`Calculate Service costs of ${services}`);
        setTimeout(() => {
            resolve(services.length *100);
         }, 3 *1000);
    });
}

/* getEmployee(200)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log) */

async function showOutput(){
    let employee = await getEmployee(500);
    let services = await getServices(employee);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}

showOutput();