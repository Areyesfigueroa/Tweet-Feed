import profileImg from './assets/images/profile.png';
//FAKE DATA
const dummyData = {
    // id: data.id,
    name: "Aliel Reyes", //name = data.user.name
    url: "@alielreyes", //screenName = data.user.screen_name
    image: profileImg, //profileImg = data.user.profile_image_url_https
    // content = data.text
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    hearts: 10000, //hearts = data.favorite_count
    retweets: 11000, //retweets = data.retweets
    date: "09/16/1994", //date = data.created_at , will need to convert the date from Mon Sep 14 17:51:55 +0000 2020
    time: "3:15PM", //time = data.created_at
    location: "Bronx, NY" //location = data.place
}
const fetchData = async (count) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let arr = [];
            for (let i = 0; i < count; i++) {
                arr.push({id: i, ...dummyData});
            }
            resolve(arr);
        }, 1000);
    });
}

//Fetching from Express Internal API.
const fetchContentTweets = (query, type="popular", count=5) => {
    return fetch(`/api/search/content/tweets/${query}/${type}/${count}`)
    .then(res => res.json(res))
    .catch(error => console.log("API Error"));
}
const fetchUserTweets = (screenName, count=5) => {
    return fetch(`/api/search/user/tweets/${screenName}/${count}`)
    .then(res => res.json(res))
    .catch(error => console.log("API Error"));
}

const fetchContentNextResults = (nextResultsURL) => {
    return fetch(`/api/search/content/nextTweets/${nextResultsURL}`)
    .then(res => res.json(res))
    .catch(error => console.log("API Error"));
}
const fetchUserNextResults = (nextResultsURL) => {
    return fetch(`/api/search/user/nextTweets/${nextResultsURL}`)
    .then(res => res.json(res))
    .catch(error => console.log("API Error"));
}

const fetchUserProfiles = (userScreenNames) => {
    return fetch(`/api/search/user/profiles/${userScreenNames.join(',')}`)
    .then(res => res.json(res))
    .catch(error => console.log("API Error"));
}

const fetchRandomTweetByUser = (screenName) => {
    return fetch(`/api/search/user/randomTweet/${screenName}`)
    .then(res => res.json(res))
    .catch(error => console.log("API Error"));
}



export { 
    fetchData, 
    fetchContentTweets, 
    fetchUserTweets, 
    fetchContentNextResults, 
    fetchUserNextResults, 
    fetchUserProfiles, 
    fetchRandomTweetByUser
};