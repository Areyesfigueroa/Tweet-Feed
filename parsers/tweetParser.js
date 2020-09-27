require("../utils");
const date = require('date-and-time');

const parseAtSymbols = (text, screenName) => {

    //We've already parsed it. 
    if (text.includes(`>@${screenName}<`)) return text; //needs to be case insesitive.

    const url = `https://twitter.com/${screenName}`;
    const html = `<a href=${url}>@${screenName}</a>`;

    return text.replaceAll(`@${screenName}`, html);
}
const parseHashtags = (text, tag) => {

    if (text.includes(`>#${tag}<`)) return text;

    const url = `https://twitter.com/hashtag/${tag}?src=hashtag_click`;
    const html = `<a href=${url}>#${tag}</a>`;

    return text.replaceAll(`#${tag}`, html);
}
const parseURLs = (text, url) => {
    if (text.includes(`>${url}<`)) return text;

    const html = `<a href=${url}>${url}</a>`;
    return text.replaceAll(url, html);
}
const parseImgs = (text, displayedURL, url) => {
    if (text.includes(`src=${url}`)) return text;

    const html = `
    <div style="width: 100%; height: auto; max-height: 500px; text-align: center;">
        <img style="max-width: 100%;max-height: 500px;" src=${url} alt=${'twitter post'} />
    </div>
    `;

    return text.replaceAll(displayedURL, html);
}
const appendVideo = (text, url) => {
    const html = `
    <div style="width: 100%; text-align: center;">
        <video controls style="width: 100%; max-height: 500px;">
            <source src=${url} type="video/mp4">
        </video>
    </div>
    `;

    return text.concat(html);
}

const toHTML = (data) => {
    let newContent = '';
    if(data.retweeted_status) {
        newContent = data.retweeted_status.full_text;
    } else {
        newContent = data.full_text;
    }
    
    //@ Symbols
    data.entities.user_mentions.forEach((el) => {
        newContent = parseAtSymbols(newContent, el.screen_name);
    });

    //Hashtags
    data.entities.hashtags.forEach((el) => {
        newContent = parseHashtags(newContent, el.text);
    });

    //URLs
    data.entities.urls.forEach((el) => {
        newContent = parseURLs(newContent, el.url);
    });

    //Media
    if(data.extended_entities) {
        data.extended_entities.media.forEach((el) => {
            if (el.type === 'photo') {
                newContent = parseImgs(newContent, el.url, el.media_url_https);
            } else if (el.type === "video") {
                newContent = parseURLs(newContent, el.url);
                newContent = appendVideo(newContent, el.video_info.variants[3].url);
            }
        });
    }

    const html = `<p>${newContent}</p>`;
    return html;
}

const formatTweetsData = (data) => {
    return data.map((el) => {
        return formatTweetData(el);
    });
}

const formatTweetData = (data) => {
    const dateObj = new Date(data.created_at);

    const formattedDate = date.format(dateObj, "M/D/YYYY");
    const formattedTime = date.format(dateObj, 'hh:mm A');

    return {
        id: data.id,
        name: data.user.name, 
        screenName: `@${data.user.screen_name}`, 
        profileImg: data.user.profile_image_url_https, 
        content: toHTML(data),
        hearts: data.favorite_count,
        retweets: data.retweet_count, 
        date: formattedDate, 
        time: formattedTime, 
        location: data.user.location ? data.user.location: 'N/A' 
    }
}

exports.formatTweetsData = formatTweetsData;
exports.formatTweetData = formatTweetData;