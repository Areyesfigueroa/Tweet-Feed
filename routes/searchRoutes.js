const express = require('express');
const router = express.Router();

const searchController = require("../controllers/searchController");

router.get('/all/:query', searchController.searchAllTweets);
router.get('/content/:query/:type/:count', searchController.searchByContent);
router.get('/user/:screenName/:count', searchController.searchByUser);
router.get('/nextContent/:nextResultsURL', searchController.searchByContentNextResults);
router.get('/nextUser/:nextResultsURL', searchController.searchByUserNextResults);
router.get('/content/raw/:query/:type/:count', searchController.searchByContentRaw);
router.get('/user/raw/:screenName/:count', searchController.searchByUserRaw);

module.exports = router;




