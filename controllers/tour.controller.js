const {
    getToursService,
    createTourService,
    getTourByIdService
} = require("../service/tour.service");


// {get} show all tours 
module.exports.getTours = async (req, res, next) => {
    try {

        const queries = {};
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fields = fields;
        }
        if (req.query.sort) {
            const sort = req.query.sort.split(",").join(" ");
            queries.sort = sort;
        }

        const tours = await getToursService(queries);
        res.status(200).json({ status: "success", data: tours });
    } catch (error) {
        next(error);
        // res.status(400).json({status:"fail",message:error.message})
    }
}
// {get} show a tour by id
module.exports.getTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await getTourByIdService(id);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        next(error);
    }
}

// {post} add tours 
module.exports.createTour = async (req, res, next) => {
    try {
        const data = await createTourService(req.body);
        res.status(200).json({
            status: "success",
            message: "tour added success"
        });
    } catch (error) {
        next(error);
    }
}

