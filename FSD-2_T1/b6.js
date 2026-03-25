const EventEmitter=require('events');
var ee= new EventEmitter();
var listener1=function listener1(){console.log("Listener1 Executed");};
var listener2=function listener2(){console.log("Listener2 Executed");};
ee.on("conn",listener1);
ee.on("conn",listener2);
let count=ee.listenerCount("conn");
console.log("count1:"+count);
ee.emit("conn");

ee.removeListener("conn",listener1)
count=ee.listenerCount("conn")
console.log("Counting Again"+count)
ee.emit("conn")

//remove All Listener
ee.removeAllListeners("conn",listener1)
count=ee.listenerCount("conn")
console.log("Again Count After all listener")
ee.emit("conn")

