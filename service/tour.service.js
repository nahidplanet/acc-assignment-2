const Tour = require("../models/tour.model");
// {get} show All tour by id
module.exports.getToursService = async (queries) => {

    const result = await Tour.find({})
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sort);
    const totalTour = await Tour.countDocuments({});
    const totalPage = Math.ceil(totalTour / parseInt(queries.limit));
    return { totalTour, totalPage, result };
}
// {get} show a tour by id
module.exports.getTourByIdService = async (id) => {
    const result = await Tour.findById(id);
    return result;
}
// {post} add tours 
module.exports.createTourService = async (data) => {
    const tour = new Tour(data);
    const result = await tour.save();
    return result;
}
// {get} top 3 trending view 

module.exports.trendingViewService = async () => {
    const result = await Tour.find({}).sort("-view").limit(3);
    return result;
}
// {get} update tour by a id 

module.exports.updateTourByIdService = async (id, data) => {
    const result = await Tour.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return result;
}
// {get} 3 cheapest Tour Service 

module.exports.cheapestTourService = async (id, data) => {
    const result = await Tour.find({}).sort("price").limit(3);
    return result;
}
