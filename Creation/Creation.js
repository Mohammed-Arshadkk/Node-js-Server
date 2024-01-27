// // Basic server creation
// var http = require('http');

// http.createServer(server).listen(7000); 
// function server(req, res) {
//     res.write('Hello');
//     res.end();
// }

// ----------------------------------------------------------------------------------------------------------
// var http = require('http');

// http.createServer(function (req, res) {
//     res.write('Arshad');
//     res.end();
// }).listen(7000); 


// -------------------------------------------------[Routing]---------------------------------------------------------------

// var http = require('http')
// var fs = require('fs')

// http.createServer(function(req,res){

//     fs.readFile('sample.html', function(err,data){
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
 
// }).listen(7000)

// -------------------------------------------------------------------------------------------------

// [ Four Method in http]

// * Get  [ to get the element from the server]
// * Post [ data send to the server]
// * Put [ update on the server]
// * Patch [ Modify the server]
// * Delete [ delete the data]
