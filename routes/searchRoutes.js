const express = require('express');
const router = express.Router();

const searchController = require("../controllers/searchController");

router.get('/:query', searchController.searchAllTweets);
router.get('/:query/:type/:count', searchController.searchFilteredTweets);

module.exports = router;




