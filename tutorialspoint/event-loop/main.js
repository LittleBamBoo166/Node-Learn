// import event module
var events = require('events');

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create an event handler 
const connectHandler = () => {
    console.log('connection successfull');

    // fire (kích hoạt) the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// bind the data_received event with the anonymous function
eventEmitter.on('data_received', () => {
    console.log('data received successfully');
});

// fire the connection event
eventEmitter.emit('connection');
console.log('program ended');