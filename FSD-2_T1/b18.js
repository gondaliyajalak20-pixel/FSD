var h=require("http");
var server=h.createServer(function(req,res){
    if(req.url=="/")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Welcome to Home Page</h1><ul><li><a href='/about'>About us</a></li><li><a href='/contact'> Contact us </a> </li></ul>");
        res.end();
    }
    else if(req.url=="/about")
    {
res.writeHead(200,{"content-type":"text/html"});
res.write("<h1 style=color:blue> Welcome to LJ university</h1>");
res.end();
    }
     else if(req.url=="/contact")
    {
res.writeHead(200,{"content-type":"text/html"});
res.write("<h1 style=color:red><I> Email :abc@ljinstitutues.edu.in</h1></I>");
res.end();
    }
    else
    {
        res.writeHead(404,{"content-type":"text/plain"})
        res.write("Page Not Found")
        res.end("\n Please Check the URL")
    }

});


server.listen(9999);
// Graceful shutdown with a timeout for active connections
server.close(() => {
  console.log('Server on port 3000 closed successfully');
  process.exit(0);
});

// Force close connections after a timeout
setTimeout(() => {
  console.log('Closing connections forcefully...');
  if (server.closeAllConnections) {
    server.closeAllConnections();
  }
}, 5000); // e.g., 5 seconds grace period


console.log("Thanks")