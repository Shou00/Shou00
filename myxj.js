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
let obj = JSON.parse($response.body);
 obj.response.status = 1;
 obj.response.agreement_status = 2;
 obj.response.agreement_platform = 1;
 obj.response.expire_date = 2030-04-04;
 obj.response.expire_time = 2030-04-0400:00:00;
 obj.response.period_type = 3;
 obj.response.product_type = 2;
 obj.response.type = 3;
 obj.response.ad_vip_type = 4;
 obj.response.discount_status = 64
 $done({
 body: JSON.stringify(obj)
}
);
