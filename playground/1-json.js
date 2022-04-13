const fs=require('fs')
// const book ={
//     title:'Ego is rthe enemy',
//     author:'Siva Royal'
// }
// const bookJson= JSON.stringify(book)
// console.log(bookJson)
// const bookParse = JSON.parse(bookJson)
// console.log(bookParse.author)
// fs.writeFileSync('1-json.json',bookJson)
const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)