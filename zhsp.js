

 
/*
 *
 *
  软件：汁乎视频VIP。金币视频🚫不可
链接：http://otvjxcs.com/?pc=X33CGXL9
*******************************
[rewrite_local]
# > 汁乎视频
^https:\/\/kjsdhfkjb\.qkjuyet\.com\/api\/app\/user\/qrcode url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/zhsp.js

[mitm] 
hostname = kjsdhfkjb.qkjuyet.com
*
*
*/

var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NTEyMTAyNjAsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6NjkyMTA0MH0.eB0CF6jjJTVUw3Fz3JI4wd3byiNktBMc2GA-diOg3IU';


$done({
    headers : modifiedHeaders
})