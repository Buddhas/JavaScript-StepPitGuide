var http = require('http');
var url = require('url');
var createServer = http.createServer(onRequest);





function onRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    console.log('我是');
    //var str = JSON.stringify(url.parse(request.url, true).query);
    response.write('我是....');
    response.end(); 
}
function test(){
    console.log('111111111222222222');
}
createServer.listen(7070);
console.log('Server running  at http://127.0.0.1:8080/');