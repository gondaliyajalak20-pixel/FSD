var EventEmitter=require("events");
var fs=require("fs")
var ee=new EventEmitter();
ee.on("write",function(){fs.writeFile("b.txt","Hello",function(err)
    {
    if(err) throw err; 
console.log("Data Written");
 ee.emit("append")
});
});
ee.emit("write");