import axios from 'axios';
import { createServer } from 'http';
import { promises as fs } from 'fs';
import fetchAPI from 'node-fetch';

createServer((req,res) =>{
    if(req.url === '/list'){
        fetchAPI('https://jsonplaceholder.typicode.com/todos')
        .then((listvalues)=>{
            console.log("data retrieved...");
            let dataList = '';
            listvalues.data.forEach(value => {
                res.write(`${value['title']}`);
                dataList += `${value['title']}\n`;
            });
            return fs.writeFile("datafile.csv",dataList);
        });
    }

}).listen(4567);
console.log(`The HTTP Server is running on port 4567`)