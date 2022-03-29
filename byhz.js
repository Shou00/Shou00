
/*
 *
 *
  软件：鲍鱼
脚本功能：破解VIP
*******************************
[rewrite_local]
# > 鲍鱼
^https:\/\/[0-9.]+.[0-9.]+/api(/live/plat/list?|/live/room/detail?|/video/report_item?|/live/room/list/hot?|/video/comment/.*?|/video/detail/.*?|/video/related?|/video/comment_report_item?|/video/module_video?|/live/plat/detail?).*$ url script-response-header https://raw.githubusercontent.com/Shou00/Shou00/main/byhz.js

[mitm] 
hostname = *.*.*
*
*
*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'bearer 700bcb4cc5e54121688ba51325af105d';


$done({headers : modifiedHeaders});


