                      

/*
 *
 *
脚本功能：解锁VIP

*******************************
[rewrite_local]
# > ytxj解锁VIP
^https:\/\/m2u-api\.getkwai\.com\/api-server\/api\/v2\/vip\/vipUserInfo.+ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/ytxj.js
[mitm] 
hostname = m2u-api.getkwai.com
*
*
*/
var obj = JSON.parse($response.body);
    obj = {
      "status": 0,
      "extraInfo": {},
      "data": {
      "vipUserProductInfo": {
      "expireTime": 1679632891,
      "subscribeType": 1,
      "trailStatus": 0,
      "isInExpireRenewDuration": 0,
      "reBuyPromotionText": "",
      "promotionTextType": 1,
      "promotionText": "新会员专享一甜VIP首充特惠",
      "myProducts": [],
      "vip": true
    },
    "uidProductInfo": [],
    "vipUserRedeemLogInfoList": [],
    "didSubscribeType": 0,
    "uidSubscribeType": 0,
    "didProductInfo": []
  },
  "message": "SUCCESS",
  "serverTm": 1648096720601
}
$done({body:JSON.stringify(obj)});
