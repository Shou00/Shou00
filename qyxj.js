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
var body = $response.body;
 
 var obj = JSON.parse(body);
 const 1 = "/faceu/mobi/commerce/v1/subscription/user_info";
 if (url.indexOf(1) != -1) {
  obj.flag = true;
  obj.end_time = 3742796226; 
  
}
 $done({
 body
}
);
