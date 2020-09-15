const express = require('express');
const router = express.Router();

const searchController = require("../controllers/searchController");

router.get('/:query', searchController.searchAllTweets);
router.get('/content/:query/:type/:count', searchController.searchByContent);
router.get('/name/:screenName/:count', searchController.searchByUser);

module.exports = router;




