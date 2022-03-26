 
/*
 *
 *
 软件：马卡龙玩图      
脚本功能：破解VIP

*******************************
[rewrite_local]
# > mklwt
^https:\/\/app\.api\.versa-ai\.com\/user\/base\/getSelfUserBaseInfo.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/mklwt.js
[mitm] 
hostname = *.*.*.*
*
*
*/

/*

var obj = JSON.parse($response.body);
// 

obj = {
      
              "responseCode": "0000",
              "responseMsg": "成功",
              "result": {
              "uid": "659818331601985536",
              "avatar": "https://static01.versa-ai.com/upload/avatar/c46d1c1d5c21/52b71229-b356-4564-9e32-2e2ec064719b.jpg",
              "nickname": ".",
              "sex": 1,
              "status": 1,
              "isVip": 1,
              "userType": 3,
              "registerTime": 1648288949085,
              "lastLoginTime": 1648288949085,
              "isPasswordSet": false,
              "qqAccount": "UID_ED2C6B3610185F015D336DDDCE4B3B42",
              "appSource": "appstore",
              "countryCode": "CN"
  },
  "success": true
}

$done({
    body: JSON.stringify(obj)
});
// 
