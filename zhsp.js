

 
/*
 *
 *
  软件：汁乎视频VIP。金币视频🚫不可
链接：http://otvjxcs.com/?pc=X33CGXL9
*******************************
[rewrite_local]
# > 汁乎视频
^https:\/\/kjsdhfkjb\.qkjuyet\.com\/api\/app\/user\/qrcode url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/zhsp.js

[mitm] 
hostname = kjsdhfkjb.qkjuyet.com
*
*
*/

let obj = JSON.parse($response.body);
obj = {
  "code": 200,
  "data": "cgirrCgR/FvK1v2U5WUzyrzp1Ba4ZHRy9utB9p4/FHk4SQBMzbbSSQ34uIi9aPBwUcMXhbe/FvJdOfCYDaqnMBQGCrVlkb7lWJ16rwhggNOzYgYfxwbSvdXv3RSqYLB0NeVZQw3dRM3IzD1J",
  "hash": true,
  "msg": "success",
  "time": "2022-03-30T07:45:55.815Z",
  "tip": "成功"
}
$done({body: JSON.stringify(obj)});