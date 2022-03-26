
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

var lFrJhON1 = JSON['parse']($response['body']);
lFrJhON1['data']['vip'] = {
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
      "vipname": "六个核桃",
      "now_date": "2022-03-26 14:29:56"
    },
$done({
    body: JSON['stringify'](lFrJhON1)
});