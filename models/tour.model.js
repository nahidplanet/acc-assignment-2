const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a Tour name"],
        unique: true,
        trim: true,
        minLength: [3, "the name is must be 3 character or more"],
        maxLength: [100, "name is too large"]
    },
    description: {
        type: String,
        required: [true, "description field is required"]
    },
    image: {
        type: String,
        required: [true, "image field is required"]
    },
    price: {
        type: Number,
        required: [true, "price field is required"],
        min: [0, "price can't be negative "]
    },
    status: {
        type: String,
        required: [true, "status field is required"],
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