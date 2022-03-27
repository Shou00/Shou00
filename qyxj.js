/*
 * 
 *

     软件：轻颜相机
      脚本：破解内购订阅

[rewrite_local]

# > qyxj

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info.+ url  script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/qyxj.js

[mitm]
hostname = user-kaji-api.b612kaji.com

*
* 
*/


var obj = JSON.parse($response.body);
obj = {"ret":"0","errmsg":"success","systime":"1648317891182","response":"{\"flag\":false,\"start_time\":0,\"end_time\":0,\"is_first_subscribe\":true,\"is_cancel_subscribe\":false,\"uid\":\"0\",\"subscribe_uid\":\"did3052685194692735\",\"subscribe_type\":\"un-auto\",\"authkey\":\"2e2dcf2c47edb70f1b32bbcb707bdf37\",\"product_id\":\"\",\"subscribe_cycle\":0,\"cycle_unit\":\"\"}","sign":"CO1YsZAo+zxjjQEz4ma26HbM0rm6SKk7ZDyNvInW6LDuDqvz3ZRepZ70SZHCS+ssMfRoShEl/Ma6vz6tm4VApexOPR7y0euSEiKMFZouSecEL1MUZc1lBFW1gGVgzKutt2tjCyGCmSgb9nwEvy8QZlTCAUQcDE9yp0MA49/ZJPU=","data":{"flag":true,"start_time":0,"end_time":3478756164,"is_first_subscribe":true,"is_cancel_subscribe":false,"uid":"0","subscribe_uid":"did3052685194692735","subscribe_type":"un-auto","authkey":"2e2dcf2c47edb70f1b32bbcb707bdf37","product_id":"","subscribe_cycle":0,"cycle_unit":""}}
$done({body: JSON.stringify(obj)});