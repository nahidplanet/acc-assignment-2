const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 8000;


// database connection 

mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => console.log("database connected"))
    .catch((err) => {
        console.log(err.message);
    });


app.listen(port, () => {
    console.log(`server is running on ${port}`);
})