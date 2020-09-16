const express = require('express');
const router = express.Router();

const searchController = require("../controllers/searchController");

router.get('/all/:query', searchController.searchAllTweets);
router.get('/content/:query/:type/:count', searchController.searchByContent);
router.get('/user/:screenName/:count', searchController.searchByUser);
router.get('/nextContent/:urlParams', searchController.searchByContentNextResults);
router.get('/nextUser/:urlParams', searchController.searchByUserNextResults);

module.exports = router;




