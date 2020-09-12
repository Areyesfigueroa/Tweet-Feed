const express = require("express");
const app = express();
const path = require("path");
const twitterapi = require('./twitterapi');

//Serving React Build via Express.js
app.use('/', express.static(path.join(__dirname + "/client/build")));

//Twitter.
app.get("/api", twitterapi.getTwitterToken);
app.get("/api/search/:query/:type/:count", twitterapi.searchTweets);

const port = 5003;
app.listen(port, () => console.log(`Server started on port ${port}`));