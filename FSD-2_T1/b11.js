//HTTP Module

var http=require("http");
//create a server object

http.createServer(function(req,res)
{
    //step1:set status +headers
    res.writeHead(200,{'content-Type':'text/html'})
    //step2: Writte response body
    res.write('<h1> Hello World!</h1>')
    //step3: End Response
    res.end();
    }

    ).listen(3120,()=>{
        console.log("server is running at http://localhost:3120")
    });