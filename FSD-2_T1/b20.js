var http=require("http");
var fs=require("fs");
var url=require("url")
//make 7.html
var addr="http://localhost:6051/7.html"
var q=url.parse(addr,true);
http.createServer(function(req,res)
{
    fs.readFile("."+q.pathname,function(err,data)
{
    if(err)
    {
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("File Not Found");
    }
    else
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.end(data);
    }
});
}).listen(6051)
console.log("Thanks")