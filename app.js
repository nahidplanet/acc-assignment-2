
const express = require('express');
const cors = require('cors');
const tourRoute = require('./routes/v1/tour.route');

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes 
app.use("/api/v1/tours",tourRoute)

// route 

app.get("/",(req,res)=>{
    res.status(400).send("welcome to assignment - 2");
})
app.get("*",(req,res)=>{
    res.status(400).send("Route Not Found");
})

module.exports = app;







