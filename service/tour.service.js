const Tour = require("../models/tour.model");
// {get} show All tour by id
module.exports.getToursService = async (queries) => {
    const result = await Tour.find({})
        .select(queries.fields)
        .sort(queries.sort);
    return result;
}
// {get} show a tour by id
module.exports.getTourByIdService = async (id) => {
    console.log(id);
    const result = await Tour.findById(id);
    return result;
}
// {post} add tours 
module.exports.createTourService = async (data) => {
    const tour = new Tour(data);
    const result = await tour.save();
    return result;
}