'use strict'

/**
 * Dependencies
 */

const express = require('express');
const CommentsController = require('../controllers/CommentsController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET/POST
 */


router.route("/all")
    .get(CommentsController.allPostsComments)

router.route("/")
    .all(restricted_access)
    .post(CommentsController.createComment)
    .all(require_body(["comment_text"]))

router.route("/:id")
    .all(restricted_access)
    .delete(CommentsController.deleteComment)


 /**
 * Routes
 *   DEL  
 */
/*
/**
 * Export router
 */

module.exports = router