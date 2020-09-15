const axios = require('../axios').getInstance();
const date = require('date-and-time');

const formatSearchData = (data) => {
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
            location: el.user.location ? el.user.location: '' 
        }
    });
}

exports.searchByContent = (request, response) => {
    const data = request.params;
    axios.get(`/1.1/search/tweets.json?q=${data.query}&result_type=${data.type}&count=${data.count}`)
    .then(res => {
        const data = formatSearchData(res.data.statuses);

        response.json(data);
        response.send("Working!");
    }).catch(() => {
        response.json({errorMsg: "Content not found"});
        response.send("Search By Content Failed");
    });
}

exports.searchByUser = (request, response) => {
    const data = request.params;
    axios.get(`/1.1/statuses/user_timeline.json?screen_name=${data.screenName}&count=${data.count}`)
    .then(res => {
        const data = formatSearchData(res.data);
        
        response.json(data);
        response.send("Working!");
    }).catch(() => {
        response.json({errorMsg: "User not found."});
        response.send("Search By User Name Failed");
    });
}

exports.searchAllTweets = (request, response) => {
    const data = request.params;
    axios.get(`/1.1/search/tweets.json?q=${data.query}`)
    .then(res => {
        const data = formatSearchData(res.data.statuses);
        
        response.json(data);
        response.send("Working!");
    }).catch(() => response.send("Search All Tweets Failed"));
}

