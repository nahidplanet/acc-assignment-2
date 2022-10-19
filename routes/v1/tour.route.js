const express = require('express');
const { trendingView, updateTourById, cheapestTour } = require('../../controllers/tour.controller');
const tourRoute = express.Router();




tourRoute.route("/trending").get(trendingView);
tourRoute.route("/cheapest").get(cheapestTour);
tourRoute.route("/:id").patch(updateTourById);

module.exports =  tourRoute;