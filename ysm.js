*******************************
[rewrite_local]
# > 欲涩漫

^https:\/\/.+\.\w+\.com\/api\/app\/comicsChapter\/isLook url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/ysm.js

^https:\/\/.+\.\w+\.com\/.+\/.+\/.+\/.+\/.+\/.+\/.+\/.+\/.+\/.+\.m3u8? url 307 _0001.m3u8 307 .m3u8

[mitm] 
hostname = zjgeo.eqobc.com, xnour.xonap.com, opzzy.kefsww.com, tqrbq.mpckv.com

var objc = JSON.parse($response.body);
objc.data = "GMGY2tGfWB+MLcO3iH8PQBmqwxkqkmZHohVf5G5zdzOP2H0ouoOSF+rQMaTDOFEjc3XgJLvrzWsQaAeQE/JsDysF/TTSfIgo/RnBBg==";
$done({
    body : JSON.stringify(objc)
});

