const mongoose = require("mongoose");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");

const app = require("./app");

// port 
const port = process.env.PORT || 8000;


// database connection 

mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => console.log("database connected"))
    .catch((err) => {
        console.log(err.message);
    });

// global error handler 
app.use(errorHandler)


// server running 
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})