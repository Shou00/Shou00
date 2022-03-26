          


/*
 *
 *
脚本功能：一木记账解锁VIP
下载地址：苹果商店下载
脚本作者：六个核桃🔥
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > ymjz
^https:\/\/yimuapp\.com(:8082)?\/bookkeeping\/user\/getUser\/ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/ymjz.js
[mitm] 
hostname = yimuapp.com:8082
*
*
*/

var kX1=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);kX1['\x64\x61\x74\x61']['\x72\x65\x73\x75\x6c\x74']['\x76\x69\x70\x54\x79\x70\x65']=3;kX1['\x64\x61\x74\x61']['\x72\x65\x73\x75\x6c\x74']['\x76\x69\x70\x54\x69\x6d\x65']=2531893025;$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](kX1)});