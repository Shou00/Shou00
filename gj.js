/*
 *
 *
脚本功能：破解VIP
网站地址：https://apps.apple.com/us/app/%E7%8B%97%E6%80%A5%E5%8A%A0%E9%80%9F-%E5%AE%98%E6%96%B9%E6%AD%A3%E7%89%88/id1559485550?l=zh
脚本作者：Hausd0rff
更新时间：2022-05-01
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 狗急VPN

^https:\/\/ac\.gojapp\.com\/api\/accounts\/me.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/gj.js

[mitm] 

hostname = ac.gojapp.com
*
*
*/

let obj = JSON.parse($response.body);
obj = {"bind_at":null,"channel":"appstore","code":"4J33M","create_at":"2022-05-01T09:59:03.020000","device":{"addr":"112.64.68.140","bind_times":0,"brand":"apple","legality":true,"model":"iPhone12,1","os":"ios","register_times":1,"rooted":false,"sdk":143,"udid":"5351F58C-A2C5-48E5-8BEF-FD31CE4958C1"},"email":null,"has_password":false,"id":"626de967e9120e423207398b","mobile":null,"referral":{"accounts":0,"binds":0,"devices":0,"vips":1},"referrer":null,"sid":"813ab43d-854e-4c3b-b301-fdc43b25d3de","update_at":"2022-05-01T09:59:03.028000","vip":{"expire":"8888-08-08T10:14:03.028000","level":3}}

  
$done({body: JSON.stringify(obj)});
