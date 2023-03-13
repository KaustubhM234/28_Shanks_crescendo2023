const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db')

const port = 8000

const app = express()
connectDB()

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json())
app.use('/api',require("./Routes/userRoutes"));
app.use('/api',require("./Routes/contactRoutes"));
app.use('/api',require("./Routes/courseRoutes"));

app.listen(port,()=>console.log(`Server is listening to port: ${port}`))