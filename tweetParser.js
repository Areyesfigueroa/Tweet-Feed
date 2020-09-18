require("./utils");

const fakeData = {
    "full_text": "LET'S ... GET ... PROUD! It's #HispanicHeritageMonth, and I am thrilled to be celebrating the 20th anniversary of Let’s Get Loud! Join me and my friends @ProjectPulso now to watch an exclusive BTS video of my #SuperBowlLIV Halftime Show on their Instagram: https://t.co/a1fXdzqA2y  Picture: https://t.co/ANVlqKB36u Video: https://t.co/g8vdpYebzL",
    "entities": {
        "hashtags": [
            {
                "text": "HispanicHeritageMonth",
                "indices": [
                    30,
                    52
                ]
            },
            {
                "text": "SuperBowlLIV",
                "indices": [
                    209,
                    222
                ]
            }
        ],
        'user_mentions': [
            {
                "screen_name": "ProjectPulso",
                "name": "Pulso",
                "id": 955627086466732000,
                "id_str": "955627086466732038",
                "indices": [
                    153,
                    166
                ]
            },
            {
                "screen_name": "ProjectPulso",
                "name": "Pulso",
                "id": 955627086466732000,
                "id_str": "955627086466732038",
                "indices": [
                    153,
                    166
                ]
            }
        ],
        "urls": [
            {
                "url": "https://t.co/a1fXdzqA2y",
                "expanded_url": "https://www.instagram.com/p/CFK3lu3lXkS/",
                "display_url": "instagram.com/p/CFK3lu3lXkS/",
                "indices": [
                    257,
                    280
                ]
            }
        ],
        'media': [
            {
                "id": 1305972721566847000,
                "id_str": "1305972721566846977",
                "indices": [
                    80,
                    103
                ],
                "media_url": "http://pbs.twimg.com/media/Eh-_RVtXkAESnJ3.jpg",
                "media_url_https": "https://pbs.twimg.com/media/Eh-_RVtXkAESnJ3.jpg",
                "url": "https://t.co/1bFWLEzWiG",
                "display_url": "pic.twitter.com/1bFWLEzWiG",
                "expanded_url": "https://twitter.com/JLo/status/1305972727027773442/photo/1",
                "type": "photo",
                "sizes": {
                    "medium": {
                        "w": 1200,
                        "h": 1006,
                        "resize": "fit"
                    },
                    "thumb": {
                        "w": 150,
                        "h": 150,
                        "resize": "crop"
                    },
                    "small": {
                        "w": 680,
                        "h": 570,
                        "resize": "fit"
                    },
                    "large": {
                        "w": 2048,
                        "h": 1717,
                        "resize": "fit"
                    }
                }
            }
        ]
    },
    "extended_entities": {
        "media": [
            {
                "id": 1307021689813958700,
                "id_str": "1307021689813958656",
                "indices": [
                    72,
                    95
                ],
                "media_url": "http://pbs.twimg.com/media/EiN5TU8XgAAcvSU.jpg",
                "media_url_https": "https://pbs.twimg.com/media/EiN5TU8XgAAcvSU.jpg",
                "url": "https://t.co/ANVlqKB36u",
                "display_url": "pic.twitter.com/ANVlqKB36u",
                "expanded_url": "https://twitter.com/realDonaldTrump/status/1307021711930544135/photo/1",
                "type": "photo",
                "sizes": {
                    "thumb": {
                        "w": 150,
                        "h": 150,
                        "resize": "crop"
                    },
                    "medium": {
                        "w": 1200,
                        "h": 675,
                        "resize": "fit"
                    },
                    "small": {
                        "w": 680,
                        "h": 383,
                        "resize": "fit"
                    },
                    "large": {
                        "w": 2048,
                        "h": 1152,
                        "resize": "fit"
                    }
                },
                "source_status_id": 1307021711930544000,
                "source_status_id_str": "1307021711930544135",
                "source_user_id": 25073877,
                "source_user_id_str": "25073877"
            },
            {

                "id": 1285438469242794000,
                "id_str": "1285438469242793984",
                "indices": [
                    121,
                    144
                ],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1285438469242793984/pu/img/Bwh697lRUfxDu51j.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1285438469242793984/pu/img/Bwh697lRUfxDu51j.jpg",
                "url": "https://t.co/g8vdpYebzL",
                "display_url": "pic.twitter.com/g8vdpYebzL",
                "expanded_url": "https://twitter.com/YoSoyBorincano/status/1285439550937092097/video/1",
                "type": "video",
                "sizes": {
                    "thumb": {
                        "w": 150,
                        "h": 150,
                        "resize": "crop"
                    },
                    "medium": {
                        "w": 1200,
                        "h": 675,
                        "resize": "fit"
                    },
                    "small": {
                        "w": 680,
                        "h": 383,
                        "resize": "fit"
                    },
                    "large": {
                        "w": 1280,
                        "h": 720,
                        "resize": "fit"
                    }
                },
                "source_status_id": 1285439550937092000,
                "source_status_id_str": "1285439550937092097",
                "source_user_id": 1253414660335825000,
                "source_user_id_str": "1253414660335824906",
                "video_info": {
                    "aspect_ratio": [
                        16,
                        9
                    ],
                    "duration_millis": 107848,
                    "variants": [
                        {
                            "bitrate": 832000,
                            "content_type": "video/mp4",
                            "url": "https://video.twimg.com/ext_tw_video/1285438469242793984/pu/vid/640x360/lRcvnZRC3kwizKOE.mp4?tag=10"
                        },
                        {
                            "content_type": "application/x-mpegURL",
                            "url": "https://video.twimg.com/ext_tw_video/1285438469242793984/pu/pl/7lLEEIP63ua5FCG_.m3u8?tag=10"
                        },
                        {
                            "bitrate": 256000,
                            "content_type": "video/mp4",
                            "url": "https://video.twimg.com/ext_tw_video/1285438469242793984/pu/vid/480x270/VYNmt2PR7_LMIyw3.mp4?tag=10"
                        },
                        {
                            "bitrate": 2176000,
                            "content_type": "video/mp4",
                            "url": "https://video.twimg.com/ext_tw_video/1285438469242793984/pu/vid/1280x720/1sRbzzVJL2ZxLjk2.mp4?tag=10"
                        }
                    ]
                },
                "additional_media_info": {
                    "monetizable": false,
                    "source_user": {
                        "id": 1253414660335825000,
                        "id_str": "1253414660335824906",
                        "name": "Xander",
                        "screen_name": "YoSoyBorincano",
                        "location": "",
                        "description": "“We were f*ckin’ hurricanes” Ramona Vega 🇵🇷",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 309,
                        "friends_count": 261,
                        "listed_count": 0,
                        "created_at": "Thu Apr 23 20:05:34 +0000 2020",
                        "favourites_count": 25707,
                        "utc_offset": null,
                        "time_zone": null,
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 5645,
                        "lang": null,
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "F5F8FA",
                        "profile_background_image_url": null,
                        "profile_background_image_url_https": null,
                        "profile_background_tile": false,
                        "profile_image_url": "http://pbs.twimg.com/profile_images/1253709828171730945/urJwJT1G_normal.jpg",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1253709828171730945/urJwJT1G_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1253414660335824906/1587742518",
                        "profile_link_color": "1DA1F2",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": null,
                        "follow_request_sent": null,
                        "notifications": null,
                        "translator_type": "none"
                    }
                }
            }
        ]
    },
}

const parseAtSymbols = (text, screenName) => {

    //We've already parsed it. 
    if (text.includes(`>@${screenName}<`)) return text;

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

    const html = `<img src=${url} alt=${'twitter post'} />`;

    return text.replaceAll(displayedURL, html);
}
const appendVideo = (text, url) => {
    const html = `
    <video controls width="468">
        <source src=${url} type="video/mp4">
    </video>`;

    return text.concat(html);
}

exports.toHTML = (data) => {
    let newContent = data.full_text;

    //@ Symbols
    fakeData.entities.user_mentions.forEach((el) => {
        newContent = parseAtSymbols(newContent, el.screen_name);
    });

    //Hashtags
    fakeData.entities.hashtags.forEach((el) => {
        newContent = parseHashtags(newContent, el.text);
    });

    //URLs
    fakeData.entities.urls.forEach((el) => {
        newContent = parseURLs(newContent, el.url);
    });

    //Media
    fakeData.extended_entities.media.forEach((el) => {
        if (el.type === 'photo') {
            newContent = parseImgs(newContent, el.url, el.media_url_https);
        } else if (el.type === "video") {
            newContent = parseURLs(newContent, el.url);
            newContent = appendVideo(newContent, el.video_info.variants[3].url);
        }
    });

    const html = `<p>${newContent}</p>`;
    return html;
}