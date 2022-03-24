/*
 *
 *
脚本功能：解锁订阅

*******************************
[rewrite_local]
# > Prisma解锁订阅
^https:\/\/api\.neuralprisma\.com\/receipt\/ios\/status\/prisma\/.+ url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/Prisma.js
[mitm] 
hostname = api.neuralprisma.com
*
*
*/
var obj = JSON.parse($response.body);
    obj = {
  "status": "ok",
  "is_valid": true,
  "expiration_date": "2066-03-25T23:38:12Z",
  "expiration_date_unix": 9648251492,
  "is_trial": false,
  "processing_count": 0,
  "is_introductory_used": true,
  "product_id": "",
  "promotional_offer_id": "",
  "is_grace_period": false,
  "auto_renew_enabled": true,
  "is_in_billing_retry_period": false,
  "subscription_type": "annual",
  "platform": "ios",
  "is_bonus": false,
  "bonus_days_added": 0,
  "device_user_info": {
    "auth_type": "",
    "subscription_valid": true
  }
}
$done({body:JSON.stringify(obj)});