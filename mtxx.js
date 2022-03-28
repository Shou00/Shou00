
/*
 *
 *
  软件：美图秀秀
脚本功能：破解VIP（不显示VIP，功能正常用）
*******************************
[rewrite_local]
# > 美图秀秀VIP解锁
^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/vip\/vip_show\.json url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/mtxx.js

[mitm] 
hostname = api.xiuxiu.meitu.com
*
*
*/
var obj = JSON.parse($response.body); 
obj = {"degrade":0,"ret":0,"error_code":0,"error":"Ok","msg":"成功","data":{"id":6914175644562639967,"id_str":"6914175644562639967","gid":2704119864,"uid":1887706613,"avatar_url":"http://maavatar1.meitudata.com/62419fd5a54031284.jpg","screen_name":"M1887706613","platform":2,"is_valid_user":1,"vip_type":3,"sub_type":8,"sub_name":"n年","renew":1,"valid_time":1964090831,"in_valid_time":1964090831,"create_time":1648467932,"sub_biz_type":0,"is_expire":1964090831,"expire_days":-3650,"s":1}}

$done({body:JSON.stringify(obj)});







