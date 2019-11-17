'use strict'

/**
 * Dependencies
 */

const express = require('express');
const CarsController = require('../controllers/CarsController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET/POST /cars
 */

router.route("/all")
    .all(restricted_access)
    .get(CarsController.all)


router.route("/")
    .all(restricted_access)
    .get(CarsController.index)
    .all(require_body(["car_type"]))
    .post(CarsController.create)


/**
 * Routes
 *   POST 
 */




/**
 * Routes
 *   PUT 
 */


/*
/**
 * Export router
 */

module.exports = router