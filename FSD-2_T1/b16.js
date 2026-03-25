var http =require("http")
var fs=require("fs")
http.createServer(function(req,res){
    if (req.url==='/'){

    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>Hello</h1><img src="a1.png"/>');
    }
    else if(req.url==='/a1.png')
    {
        const img=fs.readFileSync('a1.png');
        res.writeHead(200,{'content-type':'image/png'})
        res.end(img);
    }
    
}).listen(8111,()=>{
        console.log("server is running at http://localhost:8111")// 3000 to 9999
    });