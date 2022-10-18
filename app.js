
const express = require('express');
const cors = require('cors');
const app = express();

// middleware 
app.use(express.json());
app.use(cors());

// routes 






app.get("/",(req,res)=>{
    res.status(400).send("welcome to assignment - 2");
})
app.get("*",(req,res)=>{
    res.status(400).send("Route Not Found");
})

module.exports = app;







