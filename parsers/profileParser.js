const formatProfiles = (data) => {
    return data.map((profile) => {
        return formatProfile(profile);
    });
};

const formatProfile = (profile) => {
    return {
        id: profile.id,
        name: profile.name,
        screenName: profile.screen_name,
        profileImg: profile.profile_image_url_https
    };
};

exports.formatProfiles = formatProfiles;
exports.formatProfile = formatProfile;