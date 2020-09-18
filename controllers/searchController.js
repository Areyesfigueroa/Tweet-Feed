const axios = require('../axios').getInstance();
const date = require('date-and-time');
const tweetParser = require('../tweetParser');

//Helper Functions
const formatTweetsData = (data) => {
    return data.map((el) => {

        const dateObj = new Date(el.created_at);

        const formattedDate = date.format(dateObj, "M/D/YYYY");
        const formattedTime = date.format(dateObj, 'hh:mm A');

        return {
            id: el.id,
            name: el.user.name, 
            screenName: `@${el.user.screen_name}`, 
            profileImg: el.user.profile_image_url_https, 
            content: tweetParser.toHTML(el),
            hearts: el.favorite_count,
            retweets: el.retweet_count, 
            date: formattedDate, 
            time: formattedTime, 
            location: el.user.location ? el.user.location: 'N/A' 
        }
    });
}

const parseContentData = (data) => {
    const tweets = formatTweetsData(data.statuses);
    const nextResultsURL = data.search_metadata.next_results.substring(1); //remove ?

    return {tweets, nextResultsURL};
}

const parseUserData = (data) => {
    const continueFromID = data[data.length - 1].id;
    const nextResultsURL = `max_id=${continueFromID}&screen_name=${data[0].user.screen_name}&count=${data.length}`;

    data.pop();
    const tweets = formatTweetsData(data);
    return {tweets, nextResultsURL};
}

//Get Unfiltered/UnParsed data. TESTING purporses.
exports.searchByContentRaw = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&tweet_mode=extended&count=${data.count}`)
    .then(res => {
        response.json(res.data);
    }).catch((error) => response.json({error, message: "Data fetch failed"}));

}
exports.searchByUserRaw = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&tweet_mode=extended&count=${data.count}`)
    .then(res => {
        response.json(res.data);
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

//Get filtered data
exports.searchByContent = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&count=${data.count}&tweet_mode=extended`)
    .then(res => {
        response.json(parseContentData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));

}
exports.searchByUser = (request, response) => {
    const data = request.params;
    const newCount = (+data.count + 1).toString();

    axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&count=${newCount}&tweet_mode=extended`)
    .then(res => {
        response.json(parseUserData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

//Search Next Results.
exports.searchByContentNextResults = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?${data.nextResultsURL}&tweet_mode=extended`)
    .then(res => {
        response.json(parseContentData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}
exports.searchByUserNextResults = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/statuses/user_timeline.json?${data.nextResultsURL}&tweet_mode=extended`)
    .then(res => {
        response.json(parseUserData(res.data));
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}

//For testing only. 
exports.searchAllTweets = (request, response) => {
    const data = request.params;
    
    // axios.get(`/1.1/search/tweets.json?q=${data.query}`)
    // axios.get(`/1.1/statuses/user_timeline.json?max_id=1303398037243531300&screen_name=chrisevans&count=3`)
    axios.get(`/1.1/search/tweets.json?max_id=1305645589862911999&q=nasa&count=2&include_entities=1&result_type=popular`)
    .then(res => {
        // const data = formatTweetsData(res.data.statuses);
        
        response.json(res.data);
        response.send("Working!");
    }).catch((error) => response.json({error, message: "Data fetch failed"}));
}