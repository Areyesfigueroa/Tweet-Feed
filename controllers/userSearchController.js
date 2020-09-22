const axios = require('../axios').getInstance();
const tweetParser = require('../parsers/tweetParser');
const profileParser = require('../parsers/profileParser');
const utils = require('../utils');

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

exports.searchUserProfilesRaw = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/users/lookup.json?screen_name=${data.screenNames}`)
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
        const parsedData = parseUserData(res.data);
        response.json(parsedData);
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

    axios.get(`/1.1/users/lookup.json?screen_name=${data.screenNames}`)
    .then(res => {
        response.json(profileParser.formatProfiles(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

//TODO: Cache
let randomTweetsCache = new Map();
exports.searchRandomTweetByUser = (request, response) => {
    const data = request.params;
    const maxCount = 10;

    if(randomTweetsCache.has(data.screenName)) {
        const randomIdx = utils.getRandomInt(maxCount - 1);
        const tweet = tweetParser.formatTweetData(randomTweetsCache.get(data.screenName)[randomIdx]);
        console.log("Cached");
        response.json(tweet);
    } else {
        axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&count=${maxCount.toString()}&tweet_mode=extended`)
        .then(res => {
            randomTweetsCache.set(data.screenName, res.data);
            console.log("No Cache");

            const randomIdx = utils.getRandomInt(maxCount - 1);
            const tweet = tweetParser.formatTweetData(res.data[randomIdx]);
            response.json(tweet);
        }).catch((error) => response.json({error, message: "Data fetch failed"}));
    }
}