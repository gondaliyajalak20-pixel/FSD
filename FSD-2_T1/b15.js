var http =require("http")
http.createServer(function(req,res){
    if (req.url==='/'){

    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>Hello</h1><img src="images.jpg">');
    }
    else
    {
        console.log("not running")
    }
   
    
}).listen(8002,()=>{
        console.log("server is running at http://localhost:8002")// 3000 to 9999
    });