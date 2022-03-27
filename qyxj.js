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

var ojb = JSON.parse(body);
    ojb.data.flag = true;
    ojb.data.end_time = 3478755224;
    
body = JSON.stringify(ojb);
$done(body); 