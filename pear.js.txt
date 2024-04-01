/*


#圈Xpear解锁会员
^https:\/\/mcdonalds\.pearkin\.com\/(api\/movie\/WatchMovie|api\/Account\/CheckVip|api\/account\/IndexDetail) url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/pear.js

MITM = *.pearkin.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/movie/WatchMovie';

const checkvip = '/api/Account/CheckVip';

const vipinfo = '/api/account/IndexDetail';

const jf = '/api/account/UserScore';

if (url.indexOf(vip) != -1) {
	obj["canWath"] = "true";
	obj["hadWach"] = "true";
	obj["surplusCount"] = "1";
	body = JSON.stringify(obj);
 }

if (url.indexOf(checkvip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vipinfo) != -1) {
	obj["nickName"] = "破解";
   obj["vipLevel"] = "3";
   obj["vipEndTime"] = "2099-09-09";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(jf) != -1) {
	obj["value"] = "1";
	body = JSON.stringify(obj);
 }

$done({body});
