
/*
 *
 *
  软件：鲍鱼
脚本功能：破解VIP
*******************************
[rewrite_local]
# > 鲍鱼
^http[s]?:\/\/[0-9.]+.[0-9.]+/api(/live/room/detail?|/video/report_item?|/video/detail|/video/related?).*$ url script-requesr-header https://raw.githubusercontent.com/Shou00/Shou00/main/byhz.js

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


