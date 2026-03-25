//print Query tring of URL in file 

var ps=require("fs");
var u=require("url");
process.noDeprecation=true

var addr="http://localhost:8080/default.html?year=2025&month=feb "
var q=u.parse(addr,true);
var qdata=JSON.stringify(q.query)
ps.writeFile("FSD.txt",qdata,(err)=>{console.log("completed")})