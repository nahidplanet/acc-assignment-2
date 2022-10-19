const express = require('express');
const { viewCountBySingleTour } = require('../../middleware/viewCountBySingleTour');
const {getTours,createTour,getTourById,trendingView,} = require('../../controllers/tour.controller');

const toursRoute = express.Router();

toursRoute.route("/")
    .get(getTours)
    .post(createTour)

toursRoute.route("/:id")
    .get(viewCountBySingleTour, getTourById);

    
module.exports = toursRoute;