const express = require('express')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// //middleware
app.use(express.json());

//import route
const blog = require("./routes/blog");


//mount
app.use("/api/v1",blog);

const connetWithDb = require("./config/database");
connetWithDb();

app.listen(PORT,()=>{
    console.log(`Running successfully at PORT no. ${PORT}`);
})

app.get('/',(req,res)=>
{
    res.send("<h1>This is HOMEPAGE</h1>");
})




