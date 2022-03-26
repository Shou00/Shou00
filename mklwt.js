 
/*
 *
 *
 软件：马卡龙玩图      
脚本功能：破解VIP

*******************************
[rewrite_local]
# > mklwt
https:\/\/app\.api\.versa-ai\.com\/user\/base\/getSelfUserBaseInfo.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/mklwt.js
[mitm] 
hostname = app.api.versa-ai.com

*/

var obj = JSON.parse($response.body);

if (obj.data && obj.data.result) {
    obj.data.result.isVip = 1;
    obj.data.result.userType = 3;
}

$done({
            body: JSON.stringify(obj)
