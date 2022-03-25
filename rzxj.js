/*
 *
 *
脚本功能：日杂相机解锁VIP
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > rzxj
^https:\/\/rzres86api\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/rzxj.js
[mitm] 
hostname = rzres86api.imendon.com
*
*
*/

var n1=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);n1['\x64\x61\x74\x61']={"\x63\x6f\x64\x65":1,"\x6d\x73\x67":"\x6f\x6b","\x64\x61\x74\x61":{"\x69\x73\x56\x61\x6c\x69\x64":1}};$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](n1)});