const express = require('express');
const {
    getTours,
    createTour,
    getTourById
} = require('../../controllers/tour.controller');
const tourRoute = express.Router();



tourRoute.route("/")
    .get(getTours)
    .post(createTour)


tourRoute.route("/:id")
    .get(getTourById)

module.exports = tourRoute;