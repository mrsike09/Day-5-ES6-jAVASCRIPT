const axios = require('axios')
var http = require('http')
const fs = require('fs').promises;

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) =>{
                console.log("response is retrieved");
                let titleList = '';
                response.data.forEach(value => {
                    res.write(`${value['title']}`);
                    titleList += `${value['title']}\n`;
                });
                return fs.writeFile('title.csv',titleList);
            }); 
    }
});

server.listen(4500);
console.log(`The HTTP Server is running on port 4500`)