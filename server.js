const express = require("express");
const axios = require('axios');
const path = require("path");

const app = express();

//Serving react via express and node.js, You have to serve the build. 
app.use('/', express.static(path.join(__dirname + "/client/build")));

app.get("/swapi", (req, res) => {
    axios.get("http://swapi.dev/api/people/").then(response => {
        res.send(response.data.results);
    })
});

const port = 5003;
app.listen(port, () => console.log(`Server started on port ${port}`));