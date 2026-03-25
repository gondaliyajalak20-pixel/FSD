const EventEmitter=require("events");
var ee=new EventEmitter();

var fun1=(msg)=>{console.log("Message From fun1:"+msg);};
var fun2=(msg)=>{console.log("Message From fun2:"+msg);}; //registaring Events fun1 and fun2
ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);
ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);
// ee.removeListener('myEvent2',fun2);
// ee.removeAllListeners("myEvent1");
//Trigger Event
ee.emit("myEvent2","LJ University")
ee.emit('myEvent1',"LJU")