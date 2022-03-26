
/*
 *
 *
        
脚本功能：破解VIP

*******************************
[rewrite_local]
# > ypjj解锁订阅
^http:\/\/kongkongfufei\.pdf00\.com\/api\/client\/info.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/ypjj.js
[mitm] 
hostname = kongkongfufei.pdf00.com
*
*
*/

var obj = JSON.parse($response.body);
    obj = {
  "code": 200,
  "data": {
    "id": 25939524,
    "guest_mn": "",
    "qq_union_id": "",
    "wechat_union_id": "ounHBuIXP-T1xsdc5Xmxk6sHgFQY",
    "apple_id": "",
    "email": "",
    "client_password": "",
    "nickname": "六个核桃",
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM47FmpeKAquvjKianHdMuzz3csyatqIKGcYJDJJ70Wlzb1jZaHLTP53ib3XkEicTSyFY0ZnsbqbwibobA/132",
    "source": "WX",
    "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDgyNzYxOTYsImV4cCI6MTY3OTgxMjE5NiwiYXVkIjoyNTkzOTUyNCwic3ViIjoiNzA3M0MyODQtRUYxMS00NUY4LTk5MjctODhDQTFDNjI0QzBDIn0.LtHk4VEx_rHBcPn5FTI2peyLSlgVxBO-pQWBKKwrwD0",
    "vip": {
      "status": 1,
      "admin_id": 0,
      "plan_id": 1362,
      "viptype": 1,
      "func_quota": -1,
      "func_times": 0,
      "actived_at": "2022-03-26 14:10:59",
      "expired_at": "2099-03-29 22:10:55",
      "forever": 0,
      "latest_ip": "112.64.119.172",
      "isExpired": 0,
      "vipname": "月度订阅",
      "now_date": "2022-03-26 14:29:56"
    },
    "historyVip": null
  },
  "msg": ""
}

$done({body:JSON.stringify(obj)});