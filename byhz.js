
/*
 *
 *
  软件：鲍鱼
脚本功能：破解VIP
*******************************
[rewrite_local]
# > 鲍鱼
^https:\/\/[0-9.]*.\w{4}/api(/live/room/detail?|/video/report_item?|/video/detail//d+?|/video/related?|/live/plat/list?).*$ url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/byhz.js

[mitm] 
hostname = *.*.*
*
*
*/

var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'bearer 700bcb4cc5e54121688ba51325af105d';


$done({
    headers : modifiedHeaders
})


