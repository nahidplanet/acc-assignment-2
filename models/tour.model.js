const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name field is require"],
        minLength: [3, "the name is must be 3 character or more"],
        maxLength: [100, "name is too large"],
        trim: true
    },
    description: {
        type: String,
        require: [true, "description field is require"]
    },
    image: {
        type: String,
        require: [true, "image field is require"]
    },
    price: {
        type: Number,
        require: [true, "price field is require"],
        min: [0, "price can't be negative "]
    },
    status: {
        type: String,
        require: [true, "status field is require"],
        enum: {
            values: ["available", "unavailable"],
            message: "status must be included"
        }
    },
    view: Number

}, {
    timestamps: true
});






const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;