
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('greet',(data)=>{
    console.log(data);
})


eventEmitter.emit( 'greet' , "Hello World");