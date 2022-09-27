const http = require('http');
const url  = require('url');

http.createServer((request,response) =>{
    response.writeHead(200,{'Content-Type':'text/html'});
    //response.write("<h1>Hello from Server...created using http module...</h1>");
    //response.write("<h1>Welcome......</h1>");
    //response.write("<h1>Byee......</h1>");
    //response.write(request.url);
    var qs = url.parse(request.url,true).query;
    var res = qs.name + "  "+qs.email;
    response.end(res);
}).listen(4410);
console.log(`The HTTP Server is running on port 4410`);