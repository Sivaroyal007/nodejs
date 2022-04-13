// var http=require('http');

// http.createServer(function (request, response) {
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
const validator=require('validator')
const getNotes = require('./note.js')
const msg = getNotes()
console.log(msg)
 console.log(validator.isEmail('siva@423.com'))
console.log(validator.isURL('https://www.npmjs.com/package/validator'))