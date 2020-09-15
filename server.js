const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");


//Middleware
app.use(cors()); //what does this do?
app.use(bodyParser.json()); //what does this do?

//Serving React Build via Express.js
app.use('/', express.static(path.join(__dirname + "/client/build")));

//Twitter.
const searchRoute = require('./routes/searchRoutes');
app.use("/api/search", searchRoute);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));