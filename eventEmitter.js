const event = require("events")

const eventEmitter = new event.EventEmitter()

eventEmitter.on('greet',(data)=>{
    console.log(data);
})


eventEmitter.emit( 'greet' , "Hello World");