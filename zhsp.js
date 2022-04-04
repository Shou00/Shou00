 
 
/*
 *
 *
  软件：汁乎视频
脚本功能：VIP视频 🚫金币不可
*******************************
[rewrite_local]
# > 汁乎视频
^https:\/\/kjsdhfkjb\.qkjuyet\.com\/api(/app/user/info|/app/login/guest|/app/card/list|/app/ping/config|/app/circle/page|/app/user/qrcode|/app/dating/girls|/app/circle/page) url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/zhsp.js



[mitm] 
hostname = kjsdhfkjb.qkjuyet.com
*
*
*/

var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NTE2Njc3NzMsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6NjkyMTA0MH0.2dY-f5EUYYj7ZNWZ4vsuFIU3qG2YewpmQX4tE7f8XGo';


$done({
    headers : modifiedHeaders
})
