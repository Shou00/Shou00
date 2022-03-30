
/*
 *
 *
  软件：友色视频
链接：https://znrnmrjh.cn/index/Jump/index?agent_code=2957&invite_code=0
*******************************
[rewrite_local]
# > 友色视频
^http:\/\/api\.xianghezhaofang\.com\/index\/User\/ucenter url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/yssp.js

[mitm] 
hostname = api.xianghezhaofang.com
*
*
*/
var obj = JSON.parse($response.body);
 obj.data.isVip = 1;
 obj.data.time = "2099-09-09";
 obj.data.day = "999"
 $done({
 body: JSON.stringify(obj)
}
);
