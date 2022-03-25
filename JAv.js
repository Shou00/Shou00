                     

/*
 *
 *
脚本功能：JAv破解VIP

*******************************
[rewrite_local]
# > JAv解锁订阅
^https:\/\/yiliang8888\.com\/api\/v1\/sessions.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/JAv.js
[mitm] 
hostname = yiliang8888.com
*
*
*/
var obj = JSON.parse($response.body);
    obj = {
 
 "success": 1,
  "action": null,
  "message": null,
  "data": {
    "user": {
      "id": 1791059,
      "username": "六个核桃丫",
      "email": "liangzai1043940928@gmail.com",
      "is_vip": true,
      "vip_expired_at": 2099-09-09T22:16:31.000+08:00,
      "want_watch_count": 1,
      "watched_count": 0,
      "promote_users_count": 0,
      "share_url": "https://jav7.app/?source=ayx7vw",
      "promotion_code": "ayx7vw",
      "promotion_days": 999,
      "checkin_days": 0,
      "last_checkin_at": null
    },
    "banner_type": "payment",
    "following_tags": [
      {
        "id": 2442303,
        "name": "字幕",
        "value": "@:t:c::::",
        "priority": 0
      }
    ],
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTc5MTA1OSwidXNlcm5hbWUiOiJsaWFuZ3phaTEwNDM5NDA5MjgifQ.Gp1Cnq0U5g2GX8qxRW0Tbbn0BS743rSsuwB_jOgDd0k"
  }
}
$done({body:JSON.stringify(obj)});