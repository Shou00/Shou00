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

let obj=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);obj['\x76\x69\x70']['\x65\x78\x70\x69\x72\x65']="\x39\x39\x39\x39\x2d\x30\x35\x2d\x30\x31\x54\x31\x30\x3a\x31\x34\x3a\x30\x33\x2e\x30\x32\x38\x30\x30\x30";$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](obj)}
