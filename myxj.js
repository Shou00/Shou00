
/*
 *
 *
  软件：美颜相机
脚本功能：破解订阅
*******************************
[rewrite_local]
# > 美颜相机
^https:\/\/api\.meiyan\.com\/vip\/user_info\.json.*$ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/myxj.js

[mitm] 
hostname = api.meiyan.com
*
*
*/

let obj = JSON.parse($response.body);
 ;var encode_version = 'jsjiami.com.v5', cmoxv = '__0xdc798',  __0xdc798=['V8KswoTDkSg=','54qG5p2d5Y+K772LbRvkvq7lr4nmnoHlv6nnqKXvvaTov47oroPmlY7mjYnmiK7kubDnma/ltZHkvoE=','w6d2MwPDvw==','w6LDpCnDsCrDlsKkHg==','JCEcckMU','AcOAw7s8w7jCllfDrw==','w7NWUwrDn8O9K8Kxw6k+XibChMO7wq/DkHrCjQ==','GTbCuMO7GMKawqnClw==','w6TCihY1w63CoFzDnsKfw5Q=','w6TDrMKZYMKDwpVcDcO8wpBu','AX4Hw5NGwp0cGBjCssK+wpc=','w4PCu8OcwpXCvcOww5hv','BXjChzbDkAnCsiI=','bB8MWQLDq8KqSw==','JF7DnyURZ1zDosKiF8Oxw5PCkgUw','w5TDjgVYw5jDhsKIwqAV','w7PDvsK/Q8Ki','w6xcKCjDr0BUw4cWwoUdw4jCgxE='];(function(_0x5e8461,_0x2a71de){var _0x404c7c=function(_0x3f50ad){while(--_0x3f50ad){_0x5e8461['push'](_0x5e8461['shift']());}};_0x404c7c(++_0x2a71de);}(__0xdc798,0x16b));var _0x2bd2=function(_0xfb44f2,_0x4dba3a){_0xfb44f2=_0xfb44f2-0x0;var _0x2386ac=__0xdc798[_0xfb44f2];if(_0x2bd2['initialized']===undefined){(function(){var _0x56a342=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xeb5ac4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x56a342['atob']||(_0x56a342['atob']=function(_0x2411e9){var _0x5b41c0=String(_0x2411e9)['replace'](/=+$/,'');for(var _0x112c0d=0x0,_0x5b063c,_0x8ebae1,_0x51026b=0x0,_0x5675fe='';_0x8ebae1=_0x5b41c0['charAt'](_0x51026b++);~_0x8ebae1&&(_0x5b063c=_0x112c0d%0x4?_0x5b063c*0x40+_0x8ebae1:_0x8ebae1,_0x112c0d++%0x4)?_0x5675fe+=String['fromCharCode'](0xff&_0x5b063c>>(-0x2*_0x112c0d&0x6)):0x0){_0x8ebae1=_0xeb5ac4['indexOf'](_0x8ebae1);}return _0x5675fe;});}());var _0x5c1bc0=function(_0x51a9da,_0x3874ff){var _0x2b0ef6=[],_0x1d9985=0x0,_0x514790,_0x40ac6d='',_0x3bc32c='';_0x51a9da=atob(_0x51a9da);for(var _0x553619=0x0,_0x4e6cf3=_0x51a9da['length'];_0x553619<_0x4e6cf3;_0x553619++){_0x3bc32c+='%'+('00'+_0x51a9da['charCodeAt'](_0x553619)['toString'](0x10))['slice'](-0x2);}_0x51a9da=decodeURIComponent(_0x3bc32c);for(var _0x8eb5e7=0x0;_0x8eb5e7<0x100;_0x8eb5e7++){_0x2b0ef6[_0x8eb5e7]=_0x8eb5e7;}for(_0x8eb5e7=0x0;_0x8eb5e7<0x100;_0x8eb5e7++){_0x1d9985=(_0x1d9985+_0x2b0ef6[_0x8eb5e7]+_0x3874ff['charCodeAt'](_0x8eb5e7%_0x3874ff['length']))%0x100;_0x514790=_0x2b0ef6[_0x8eb5e7];_0x2b0ef6[_0x8eb5e7]=_0x2b0ef6[_0x1d9985];_0x2b0ef6[_0x1d9985]=_0x514790;}_0x8eb5e7=0x0;_0x1d9985=0x0;for(var _0x309808=0x0;_0x309808<_0x51a9da['length'];_0x309808++){_0x8eb5e7=(_0x8eb5e7+0x1)%0x100;_0x1d9985=(_0x1d9985+_0x2b0ef6[_0x8eb5e7])%0x100;_0x514790=_0x2b0ef6[_0x8eb5e7];_0x2b0ef6[_0x8eb5e7]=_0x2b0ef6[_0x1d9985];_0x2b0ef6[_0x1d9985]=_0x514790;_0x40ac6d+=String['fromCharCode'](_0x51a9da['charCodeAt'](_0x309808)^_0x2b0ef6[(_0x2b0ef6[_0x8eb5e7]+_0x2b0ef6[_0x1d9985])%0x100]);}return _0x40ac6d;};_0x2bd2['rc4']=_0x5c1bc0;_0x2bd2['data']={};_0x2bd2['initialized']=!![];}var _0x242a02=_0x2bd2['data'][_0xfb44f2];if(_0x242a02===undefined){if(_0x2bd2['once']===undefined){_0x2bd2['once']=!![];}_0x2386ac=_0x2bd2['rc4'](_0x2386ac,_0x4dba3a);_0x2bd2['data'][_0xfb44f2]=_0x2386ac;}else{_0x2386ac=_0x242a02;}return _0x2386ac;};obj[_0x2bd2('0x0','sJ*$')][_0x2bd2('0x1','m4zJ')]=0x1;obj['response']['agreement_status']=0x2;obj[_0x2bd2('0x2','[wKX')][_0x2bd2('0x3','@Dsp')]='1';obj[_0x2bd2('0x4','1Mxq')]['expire_date']=_0x2bd2('0x5','yr6E');obj['response']['expire_time']='2030-04-0400:00:00';obj[_0x2bd2('0x2','[wKX')][_0x2bd2('0x6','jsh0')]=0x3;obj['response'][_0x2bd2('0x7','w!VZ')]=0x2;obj[_0x2bd2('0x8','pIoc')]['type']=0x3;obj[_0x2bd2('0x9','321T')]['ad_vip_type']=0x4;obj[_0x2bd2('0xa','%SNL')][_0x2bd2('0xb','oEkm')]=0x40;(function(_0x496b4e,_0x4bb9b0,_0x988d42){var _0x46d46d={'gwTJN':_0x2bd2('0xc','(a$R'),'PYkse':function _0x379643(_0x5c43ce,_0x58c586){return _0x5c43ce+_0x58c586;},'aYqBq':'删除版本号，js会定期弹窗'};_0x988d42='al';try{_0x988d42+='ert';_0x4bb9b0=encode_version;if(!(typeof _0x4bb9b0!==_0x46d46d[_0x2bd2('0xd','jsh0')]&&_0x4bb9b0===_0x2bd2('0xe','A*9y'))){_0x496b4e[_0x988d42](_0x46d46d[_0x2bd2('0xf','cQPV')]('删除',_0x2bd2('0x10','H@Rk')));}}catch(_0x5bb4ad){_0x496b4e[_0x988d42](_0x46d46d[_0x2bd2('0x11','A*9y')]);}}(window));;encode_version = 'jsjiami.com.v5';
 $done({
 body: JSON.stringify(obj)
}
);

