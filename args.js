// // // var http=require('http');

// // // http.createServer(function (request, response) {
// // //    response.writeHead(200, {'Content-Type': 'text/plain'});
// // //    response.end('Hello World\n');
// // // }).listen(8081);

// // // // Console will print the message
// // // console.log('Server running at http://127.0.0.1:8081/');

// // import { green } from 'chalk'
// // // const validator=require('validator')
// // import getNotes from './note.js'
// // const msg = getNotes()
// // const greenMsg=green('success')
// // console.log(msg)
// // //  console.log(validator.isEmail('siva@423.com'))
// // // console.log(validator.isURL('https://www.npmjs.com/package/validator'))
// // console.log(greenMsg);

// const chalk = require('chalk')
// // const msg = chalk.green('success')
// // console.log(msg)
// console.log(chalk.blue('Hello world!'));
const chalk = require('chalk')
const yargs = require('yargs')
// console.log(process.argv)
yargs.version('1.1.0')
//create add command
yargs.command({
   command:'add',
   describe:'Add anew note',
   builder:{
       title:{
           describe:'Note title',
           demandOption:true,
           type:'string'
       }
   },
   handler:function(argv){
      console.log('Adding a new note!!',argv)
   }
})
// 2nd command
yargs.command({
   command:'remove',
   describe:'removw anew note',
   handler:function(){
      console.log('removing a new note!!')
   }
})
//3d command
yargs.command({
   command:'list',
   describe:'list your notes',
   handler:function(){
      console.log('listing all notes!!')
   }
})

yargs.command({
   command:'read',
   describe:'read your notes',
   handler:function(){
      console.log('reading a notes!!')
   }
})
yargs.parse