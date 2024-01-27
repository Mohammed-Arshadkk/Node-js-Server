
var http = require('http');
var fs = require('fs');
var url = require('url')

http.createServer(function(req, res) {

var q = url.parse(req.url,true)
    

if (q.pathname === '/') {
fs.readFile('Creation.html', function(err, data) {
if (err) {
    res.writeHead(500);
    res.write('Internal Server Error');
    res.end();
} else {
    res.writeHead(200);
    res.write(data);
    res.end();
}
});

} else if (q.pathname === '/signup') {
fs.readFile('Signup.html', function(err, data) {
if (err) {
    res.writeHead(500);
    res.write('Internal Server Error');
    res.end();
} else {
    res.writeHead(200);
    res.write(data);
    res.end();
}
});

} else if(q.pathname === '/signupaction'){
    
    res.writeHead(200);
    res.write('<h1> Welcome </h1>')
    res.end()
}else {
    res.writeHead(404);
    res.write('Not Found');
    res.end();
}

}).listen(7000, ()=> console.log("Server Started"));