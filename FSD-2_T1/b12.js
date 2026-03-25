//HTTP Module

var http=require("http");
//create a server object

http.createServer(function(req,res)
{
    //step1:set status +headers
    res.writeHead(200,{'content-Type':'text/plain'})
    //step2: Writte response body
    res.write('<h1> Hello World!</h1>')
    //step3: End Response
    res.end();
    }

    ).listen(3000,()=>{
        console.log("server is running at http://localhost:3000")// 3000 to 9999
    });