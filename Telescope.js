 
/*
 *
 *
  
*******************************
[rewrite_local]
# > Telescope
^https:\/\/alihk\.quickg\.cc\/api\/v5\/trial url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/Telescope.js

[mitm] 
hostname = alihk.quickg.cc
*
*
*/

let obj = JSON.parse($response.body);
obj = {
  "code": 200,
  "message": "请求成功",
  "status": "1",
  "data": {
    "token": "f9379e0287bbaabb59835316c7db6d0439c361c0",
    "expiredIn": 3800000000,
    "user": {
      "cardActive": false,
      "paidUser": false,
      "totalTransfer": 20401094656,
      "subUrl": "",
      "email": "",
      "channel": "GW",
      "expiredDate": "2999-12-12",
      "timeRemaining": 999999999,
      "flowTotal": "19.0GB",
      "flowUsed": "0.0KB",
      "flowRemaining": "999999.0GB",
      "id": 77797,
      "username": "User_13176059608535761226",
      "status": 1,
      "vip": 1,
      "isTrial": true,
      "inviteCode": "X12FE5SG",
      "inviteUrl": "https://telescope.name/app.html?invite_code=X12FE5SG&channel=GW",
      "inviteBy": ""
    }
  }
}
  
$done({body: JSON.stringify(obj)});