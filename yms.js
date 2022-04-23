/*


[rewrite_local]
#破解
^https:\/\/opzzy\.kefsww\.com\/api\/app(media/play|comicsChapter/isLook) url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/yms.js

[mitm]
hostname= opzzy.kefsww.com

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/media/play';
const p2 = '/comicsChapter/isLook';

if (url.indexOf(p1) != -1) {
    obj.data.playable = true;
    obj.data.isBuy = true;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.data.playable = true;
    obj.data.isBuy = true;
    body = JSON.stringify(obj);
} 

$done({body});
