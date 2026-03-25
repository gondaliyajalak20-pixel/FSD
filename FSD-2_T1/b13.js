var http =require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'}

    )
    const data=
    {
        subject:"FSD-2",
        Topic:"Node.js"
    };
    res.end(JSON.stringify(data));
}).listen(8000,()=>{
        console.log("server is running at http://localhost:8000")// 3000 to 9999
    });