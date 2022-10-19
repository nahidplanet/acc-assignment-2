
const express = require('express');
const cors = require('cors');
const tourRoute = require('./routes/v1/tour.route');
const toursRoute = require('./routes/v1/tours.route');

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes 
app.use("/api/v1/tour",tourRoute);
app.use("/api/v1/tours",toursRoute);


app.get("/",(req,res)=>{
    res.status(400).send("welcome to assignment - 2");
})
app.get("*",(req,res)=>{
    res.status(400).send("Route Not Found");
})

module.exports = app;







