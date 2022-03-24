           

/*
 *
 *
脚本功能：奶油会员

*******************************
[rewrite_local]
# > nybz解锁订阅
^https:\/\/nz-api\.duitang\.com\/account\/me\/.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/nybz.js
[mitm] 
hostname = nz-api.duitang.com
*
*
*/
var obj = JSON.parse($response.body);
    obj = {
  "status": 1,
  "message": "success",
  "data": {
    "id": 2106439,
    "nickname": "",
    "avatar": "",
    "createAt": "2022-03-24 17:42:52",
    "updateAt": "2029-03-24 17:42:52",
    "status": 1,
    "version": 1,
    "bindPhone": false,
    "bindWechat": false,
    "bindApple": false,
    "bindQQ": true,
    "statics": {
      "payTotal": 1,
      "blogCollectTotal": 0,
      "blogDownloadTotal": 3
    },
    "vip": true,
    "telephone": "3"
  }
}
$done({body:JSON.stringify(obj)});


