const axios = require('../axios').getInstance();
const tweetParser = require('../tweetParser');

//Helper Functions
const parseContentData = (data) => {
    const tweets = tweetParser.formatTweetsData(data.statuses);
    const nextResultsURL = data.search_metadata.next_results.substring(1); //remove ?

    return {tweets, nextResultsURL};
}

exports.searchByContentRaw = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&tweet_mode=extended&count=${data.count}`)
    .then(res => {
        response.json(res.data);
    }).catch((error) => response.json({error, message: "Data fetch failed"}));

}

exports.searchByContent = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&count=${data.count}&tweet_mode=extended`)
    .then(res => {
        response.json(parseContentData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));

}

exports.searchByContentNextResults = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?${data.nextResultsURL}&tweet_mode=extended`)
    .then(res => {
        response.json(parseContentData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}