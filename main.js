var CryptoJS = require("crypto-js");

var citysonicJS = require('fs').readFileSync(__dirname + '/citysonic/citysonic.js', 'utf8');
eval(citysonicJS);

// searchResults("always sunny");
// extractEpisodes("https://citysonic.tv/tv/watch-its-always-sunny-in-philadelphia-movies-free-online-39280");
const streamUrl = extractStreamUrl("https://citysonic.tv/tv/watch-its-always-sunny-in-philadelphia-movies-free-online-39280/45412");

console.log(streamUrl);