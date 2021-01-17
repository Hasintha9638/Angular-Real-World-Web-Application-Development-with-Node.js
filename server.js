const express =require("express");
const cors=require("cors");


const app=express();

var corsOptions={
    origin:["http://localhost:4200","http://localhost:8080"]
}

app.use(cors(corsOptions));
app.listen(8080,()=>{
    console.log("Server is started and listening.");
});

app.get("/", function(request,response){
    response.send("Hello Node.js! :)");
});

require("./articles.js")(app);