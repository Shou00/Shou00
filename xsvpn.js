
/*
 *
 *
  软件：夏时加速器（2.4.7版本)
脚本功能：破解vip
*******************************
[rewrite_local]
# > 夏时vpn
^https:\/\/.*\.com\/addressx2\/ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/xsvpn.js

[mitm] 
hostname = hotspot-unlimited.com
*
*
*/
let obj = HTML.parse($response.body);
 obj.auto.vip = 0;
 $done({
 body: HTML.stringify(obj)
}
);
