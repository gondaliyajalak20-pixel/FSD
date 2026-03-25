var http =require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'}

    )
    res.write(req.url+"<br>")
    res.end("url Fetched");
}).listen(8001,()=>{
        console.log("server is running at http://localhost:8001")// 3000 to 9999
    });