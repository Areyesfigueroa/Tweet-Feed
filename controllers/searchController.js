const axios = require('../axios').getInstance();
const date = require('date-and-time');

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
            content: el.text,
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
    const nextResultsURL = data.search_metadata.next_results;

    return {tweets, nextResultsURL};
}

const parseUserData = (data) => {
    const continueFromID = data[data.length - 1].id;
    const nextResultsURL = `?max_id=${continueFromID}&screen_name=${data[0].user.screen_name}&count=${data.length - 1}`;

    data.pop();
    const tweets = formatTweetsData(data);
    return {tweets, nextResultsURL};
}

//Search by User and Content Data.
exports.searchByContent = (request, response) => {
    const data = request.params;

    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&count=${data.count}`)
    .then(res => {
        response.json(parseContentData(res.data));
    }).catch(() => {
        response.json({errorMsg: "Content not found"});
    });
}
exports.searchByUser = (request, response) => {
    const data = request.params;
    const newCount = (+data.count + 1).toString();

    axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&count=${newCount}`)
    .then(res => {
        response.json(parseUserData(res.data));
    }).catch(() => {
        response.json({errorMsg: "User not found."});
    });
}

//Search Next Results.
exports.searchByContentNextResults = (request, response) => {
    const data = request.params;
    axios.get(`/1.1/search/tweets.json${data.urlParams}`)
    .then(res => {
        response.json(parseContentData(res.data));
    }).catch(() => response.send("Search By Content Next Results Failed"));
}
exports.searchByUserNextResults = (request, response) => {
    const data = request.params;
    axios.get(`/1.1/statuses/user_timeline.json${data.urlParams}`)
    .then(res => {
        response.json(parseUserData(res.data));
    }).catch(() => response.send("Search By User Next Results Failed"));
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
    }).catch(() => response.send("Search All Tweets Failed"));
}

