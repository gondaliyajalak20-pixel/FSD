var http=require('http')
var fs=require("fs")
var server=http.createServer(function(req,res)
{
    if(req.url=="/")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1 style=color:blue;font-size:32px> Welcome to Login Page </h1>");
        res.end()
    }

    //lOGIN PAGE
    else if (req.url=="/login")
    {
        fs.readFile("login.html",function(err,data)
    {
        if(err)
        {
            res.writeHead(500);
            return res.end("Error load in a file")
        }
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        res.end()
    });
    }
    
    // GALLERY page
    else if(req.url=='/gallery')
    {
        fs.readFile("a1.png", function(err,data) 
            {
          if(err)
        {
            res.writeHead(500);
            return res.end("Error Loading Image");
        }
        res.writeHead(200,{'content-type':'image/png'});
        res.end(data);  
    });
    }
    //PAGE NOT FOUND
    else
        {
           res.writeHead(404,{'content-type':'text/plain'});
           res.end("Page NOT FOund")
    }
});
server.listen(9052)
console.log("Thanks")