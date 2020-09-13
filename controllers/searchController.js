const axios = require('../axios').getInstance();

// exports.searchTweets = (request, response) => {
//     const data = request.params;
//     axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&count=${data.count}`, )
//     .then((res) => {
//         response.send(res);
//     });
// }

exports.searchAllTweets = (request, response) => {
    const data = request.params;
    axios.get(`/1.1/search/tweets.json?q=${data.query}`)
    .then(res => {
        const data = res.data.statuses;
        response.send("Working!");
    }).catch(error => response.send("Not working"));
}