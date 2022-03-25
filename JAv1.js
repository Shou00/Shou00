/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#JAv
^https:\/\/yugedu\.com\/api\/v1\/movies\/(.+)\/play url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/JAv1.js

^https:\/\/yugedu\.com\/api\/v1\/movies\/.+ url response-body "success":\d+ response-body "success":1



[mitm]
hostname = yugedu.com

JAV涓嬭浇鍦板潃锛氾紙娉ㄥ唽濉啓閭€璇风爜锛歴8rvea锛�
https://jcapnred.com/?source=s8rvea

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.aSlLcMcGxEtNrsxife9exe0BGs6C4bQHdiBUaYamEAM';

$done({headers : modifiedHeaders});
