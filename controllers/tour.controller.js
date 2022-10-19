const {
    getToursService,
    createTourService,
    getTourByIdService,
    trendingViewService,
    updateTourByIdService,
    cheapestTourService
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
        } if (req.query.page) {
            const { page = 1, limit = 5 } = req.query
            const skip = ((page - 1) * Number(limit));
            queries.skip = skip;
            queries.limit = Number(limit);

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
    // {get} top 3 trending view;


}


// ====================================
module.exports.trendingView = async (req, res, next) => {
    try {
        const result = await trendingViewService();
        res.status(200).json({status:"success",data:result})
    } catch (error) {
        next(error)
    }
}
// =======================

// update a Tour By Id 
// ====================================
module.exports.updateTourById = async (req, res, next) => {

    try {
        const {id} = req.params;
        const data = req.body;
        const result = await updateTourByIdService(id,data);
        res.status(200).json({status:"success",data:result})
    } catch (error) {
        next(error)
    }
}
// =======================
// 3 cheapest Tour
// ====================================
module.exports.cheapestTour = async (req, res, next) => {

    try {
        const {id} = req.params;
        const data = req.body;
        const result = await cheapestTourService(id,data);
        res.status(200).json({status:"success",data:result})
    } catch (error) {
        next(error)
    }
}
// =======================