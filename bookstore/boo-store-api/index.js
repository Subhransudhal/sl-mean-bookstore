
   
// Configure server

// Step 1: Import Express package
const express = require("express");

// Step 2: Create Server
const server = express(); 
//step 3: cofigure port
server.listen(3100);

//step 4: handel request from default path
server. get("/",(req,res)=>{
    res.send("hello from express js");
});
console.log("server is listening on localhost: 3100");
