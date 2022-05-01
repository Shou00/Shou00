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

^https:\/\/ac\.gojapp\.com\/api\/accounts\/me.*$ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/gjvpn.js

[mitm] 

hostname = ac.gojapp.com
*
*
*/

let obj = JSON.parse($response.body);
 obj.vip.expire = "9999-05-01T10:14:03.028000";

 $done({
 body: JSON.stringify(obj)
}
);
