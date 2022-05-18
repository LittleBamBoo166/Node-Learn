var event = require('events');
var eventEmitter = new event.EventEmitter();

// listener #1
const listener1 = () => {
    console.log('listener1 executed');
}

// listener #2
const listener2 = () => {
    console.log('listener2 executed');
}

// bind the connection event with the listener1
eventEmitter.addListener('connection', listener1);
// bind the connection event with the listener2
eventEmitter.on('connection', listener2);

var eventListeners = event.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// fire the connection event
eventEmitter.emit('connection');

// remove the binding of listener1 func
eventEmitter.removeListener('connection', listener1);
console.log("Listner1 will not listen now");

// fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log('program ended');