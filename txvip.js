
/*
 *
 *
  软件：腾讯视频
脚本功能：  VIP
*******************************
[rewrite_local]
# > VIP解锁
^https:\/\/vip\.video\.qq\.com\/rpc\/trpc\.query_vipinfo\.vipinfo\.QueryVipInfo\/GetVipUserInfoH5.*$ url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/txvip.js

[mitm] 
hostname = vip.video.qq.com
*
*
*/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Accept'] = '*/*';
modifiedHeaders['Content-Type'] = 'text/plain;charset=utf-8';
modifiedHeaders['User-Agent'] = 'live4iphoneRel/25777 CFNetwork/1209 Darwin/20.2.0';
modifiedHeaders['Connection'] = 'keep-alive';
modifiedHeaders['Cookie'] = 'main_login=qq; vqq_vuserid=1735177332; vqq_vusession=ILe51y8dQ-6w3F8dAYEW8g.N; video_omgid=7e4b75c9259a864077098ba139bc23e4a1be0010116a06; plat_bucketid=506; guid=c25724b32e8a11ec89cd6c92bf48bcb2; app_ver=8.7.50.25777; video_platform=5; video_appid=1000005; vdevice_qimei36=976fdf790d6c70309701ec0700001e415a10; vqq_appid=101795054; vqq_openid=924A50FF4FD62C2DF880060B3AC66EDB; vqq_access_token=62D477EFBC0E90E4525591FBF6D7CACC; teenGuardSessionCode=E40F9925CD0C6C90DCFED5A8B8AA44B17790EED881BC9225797C13D2E5C55C032CF59527572312AB83078F81CC0B9625C05DD9600FA5E7924EC5C816; recommend_setting_code=31;';
modifiedHeaders['Accept-Language'] = 'zh-cn';
modifiedHeaders['Referer'] = 'https://m.film.qq.com/sports/unipay/index.html?useJSCorePreload=1&hidetitlebar=1&ptag=usercenter&aid=V0$$8:4';
modifiedHeaders['Content-Length'] = '54';
modifiedHeaders['Accept-Encoding'] = 'gzip, deflate, br';
$done({'headers': modifiedHeaders});