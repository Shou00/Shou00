
/*
 *
 *
  软件：
脚本功能：破解
*******************************
[rewrite_local]
# > 破解
^https:\/\/opzzy\.kefsww\.com/(api/app/media/play|api/app/comicsChapter/isLook) url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/aaa.js

[mitm] 
hostname = zjgeo.eqobc.com
*
*
*/

const path1 = "/api/app/media/play";
const path2 = "/api/app/comicsChapter/isLook";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.playable = true,
obj.mediaInfo.isBuy = true
}
if ($request.url.indexOf(path2) != -1){
obj.data.playable = true,
obj.data.isBuy = true
}
$done({body: JSON.stringify(obj)});
    