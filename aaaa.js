/*

# > aaaa

^https:\/\/cdnvideos\.52zhange\.com\/.+/.+\.m3u8?720 url 307 aaaa.js

QX MITM = cdnvideos.52zhange.com



*/

var murl = $request.url.replace(/pre\w{4}_playlist/g,"playlist");

$done({ url : murl }); 









