
/*
 *
 *
  软件：
脚本功能：破解
*******************************
[rewrite_local]
# > 破解
^https:\/\/opzzy\.kefsww\.com\/api\/app(\/media\/play|\/comicsChapter\/isLook) url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/xxxxx.js

[mitm] 
hostname = zjgeo.eqobc.com
*
*
*/

var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const play = '/media/play';
const look = '/comicsChapter/isLook';

if (url.indexOf(play) != -1) {
    obj.data.playable = true;
    obj.mediaInfo.isBuy = true;
    body = JSON.stringify(obj);
}

if (url.indexOf(look) != -1) {
    obj.data.isBuy = true;
    obj.data.playable = true;
    body = JSON.stringify(obj);
}

$done({ 
    body 
});
