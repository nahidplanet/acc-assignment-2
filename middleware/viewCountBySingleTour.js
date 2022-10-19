const Tour = require("../models/tour.model");
const { getTourByIdService } = require("../service/tour.service");

module.exports.viewCountBySingleTour = async (req, res, next) => {
    const { id } = req.params;
    const result = await getTourByIdService(id);
    let count = result.view;
    count = count + 1;
    await Tour.updateOne({ _id: id }, { $set: { view: count } })
    next();
}
