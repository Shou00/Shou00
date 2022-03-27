/*
 * 
 *

     软件：轻颜相机
      脚本：破解内购订阅

[rewrite_local]

# > qyxj

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url  script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/qyxj.js

[mitm]
hostname = user-kaji-api.b612kaji.com

*
* 
*/
let obj = JSON.parse($response.body);
obj.data = {"flag":true,"start_time":0,"end_time":3999317826,"is_first_subscribe":true,"is_cancel_subscribe":false,"uid":"0","subscribe_uid":"did3052685194692735","subscribe_type":"un-auto","authkey":"2e2dcf2c47edb70f1b32bbcb707bdf37","product_id":"","subscribe_cycle":0,"cycle_unit":""}}
$done({body: JSON.stringify(obj)});
