
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

obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x73\x74\x61\x74\x75\x73']=1;obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x61\x67\x72\x65\x65\x6d\x65\x6e\x74\x5f\x73\x74\x61\x74\x75\x73']=2;obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x61\x67\x72\x65\x65\x6d\x65\x6e\x74\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d']="\x31";obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x65\x78\x70\x69\x72\x65\x5f\x64\x61\x74\x65']="\x32\x30\x33\x30\x2d\x30\x34\x2d\x30\x34";obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x65\x78\x70\x69\x72\x65\x5f\x74\x69\x6d\x65']="\x32\x30\x33\x30\x2d\x30\x34\x2d\x30\x34\x30\x30\x3a\x30\x30\x3a\x30\x30";obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65']=3;obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x70\x72\x6f\x64\x75\x63\x74\x5f\x74\x79\x70\x65']=2;obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x74\x79\x70\x65']=3;obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x61\x64\x5f\x76\x69\x70\x5f\x74\x79\x70\x65']=4;obj['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x64\x69\x73\x63\x6f\x75\x6e\x74\x5f\x73\x74\x61\x74\x75\x73']=64

 $done({
 body: JSON.stringify(obj)
}
);