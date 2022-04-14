// setting timeout of 2 seconds calling asynchronious function

console.log('starting')

setTimeout(()=>{
    console.log('2 secomnds')
},2000)

setTimeout(()=>{

    console.log('0 second')
},0)

console.log('stopping')

