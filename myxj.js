/*
 *
 *
  软件：美颜相机
脚本功能：破解订阅
*******************************
[rewrite_local]
# > 美颜相机
^https:\/\/api\.meiyan\.com\/vip\/user_info\.json.*$ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/myxj.js

[mitm] 
hostname = api.meiyan.com
*
*
*/
function key() {
 var obj = JSON.parse($response.body);
 
 if (arguments[0].includes("@")) { 
   let ark = arguments[0].split("@");

   for (i = 0; i < ark.length; i++) {
     obj[ark[i]] = arguments[1][i];

   }
 } else {
   
   obj[arguments[0]] = arguments[1];
 }
 $done({body:JSON.stringify(obj)});
}

key("response>status@response>agreement_status@response>agreement_platform@response>expire_date@response>expire_time@response>period_type@response>product_type@response>type@response>ad_vip_type@response>discount_status", [1, 2, "1", "2030-04-04", "2030-04-0400:00:00", 3, 2, 3, 4, 64])