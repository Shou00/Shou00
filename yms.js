/*


[rewrite_local]
#破解
^https:\/\/opzzy\.kefsww\.com\/api\/app\/(media\/play|comicsChapter\/isLook) url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/yms.js

[mitm]
hostname= opzzy.kefsww.com

*/
const p1 = '/api/app/media/play';
const p2 = '/api/app/comicsChapter/isLook';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){

    obj.data.playable = true;
    obj.data.isBuy = true;
    body = JSON.stringify(obj);
} 

if ($request.url.indexOf(path1) != -1){

    obj.data.isBuy = true;
    obj.data.playable = true;
    body = JSON.stringify(obj);
} 

$done({body: JSON.stringify(obj)});
