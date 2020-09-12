const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

let token = null;

const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;

const data = {
    "grant_type": "client_credentials",
    "scope": "public"    
};
const config = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept': 'application/json'
    },
    baseURL: "https://api.twitter.com/"
}
const authOptions = {
    method: "post",
    ...config,
    auth: {
      username: API_KEY,
      password: API_SECRET_KEY
    },
    data: qs.stringify(data)
};

exports.getTwitterToken = (request, response) => {
    if(token) {
        response.send("We already have a token");
    } else {
        axios.request("/oauth2/token", authOptions).then((res) => {
            token = res.data;
            config.headers.authorization = `Bearer ${token.access_token}`;

            response.send(config.headers);
        });
    }
}

exports.searchTweets = (request, response) => {
    if(!token) {
        response.send("There is no API token");
        return;
    }

    const data = request.params;
    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&count=${data.count}`, config)
    .then((res) => {
        response.send(res);
    });
}



