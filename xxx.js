
/*
 *
 *
  软件：
脚本功能：破解
*******************************
[rewrite_local]
# > 破解
^https:\/\/.+(/api/app/media/play|/api/app/comicsChapter/isLook) url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/xxx.js

[mitm] 
hostname = zjgeo.eqobc.com
*
*
*/

var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const play = '/api/app/media/play';
const look = '/api/app/comicsChapter/isLook';

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