/*
 * 
 *

     软件：B612咔叽
      脚本：破解内购订阅

[rewrite_local]

# > B612

^https:\/\/user-kaji-api\.b612kaji\.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/B612.js

[mitm]
hostname = user-kaji-api.b612kaji.com

*
*
*/

var lFrJhON1 = JSON['parse']($response['body']);
lFrJhON1['data']['products'] = [
    {
        "productId": "com.campmobile.snowcamera.vip.onemonth",
        "startDate": 1648312891000,
        "expireDate": 3999917687000,
        "managed": false,
        "status": "ACTIVE"
      }
    ]
  }
}
$done({
    body: JSON['stringify'](lFrJhON1)
});