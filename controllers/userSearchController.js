const axios = require('../axios').getInstance();
const tweetParser = require('../tweetParser');

const parseUserData = (data) => {
    const continueFromID = data[data.length - 1].id;
    const nextResultsURL = `max_id=${continueFromID}&screen_name=${data[0].user.screen_name}&count=${data.length}`;

    data.pop();
    const tweets = tweetParser.formatTweetsData(data);
    return {tweets, nextResultsURL};
}

//Get Unfiltered/UnParsed data. TESTING purporses.
exports.searchByUserRaw = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&tweet_mode=extended&count=${data.count}`)
    .then(res => {
        response.json(res.data);
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

//Get filtered data
exports.searchByUser = (request, response) => {
    const data = request.params;
    const newCount = (+data.count + 1).toString();

    axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&count=${newCount}&tweet_mode=extended`)
    .then(res => {
        response.json(parseUserData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

exports.searchByUserNextResults = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/statuses/user_timeline.json?${data.nextResultsURL}&tweet_mode=extended`)
    .then(res => {
        response.json(parseUserData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

exports.searchUserProfiles = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/users/lookup.json?screen_name=${data.screenNames.join(',')}`)
    .then(res => {
        response.json(res.data);
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}
