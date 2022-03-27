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

const path = "/commerce/v1/subscription/user_info";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path) != -1){
obj.flag = true,
obj.end_time = 4569874528
}

$done({body: JSON.stringify(obj)});

);
  
