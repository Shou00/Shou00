
/*
 *
 *
  软件：美图秀秀
脚本功能：破解VIP（不显示VIP，功能正常用）
*******************************
[rewrite_local]
# > 美图秀秀VIP解锁
^https:\/\/api\.xiuxiu\.meitu\.com\/.*\/vip\/vip_show\.json.*$ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/mtxx.js

[mitm] 
hostname = *.xiuxiu.*.*
*
*
*/

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x C = c.D($G.g);C = {"k":0,"H":0,"B":0,"m":"e","A":"成功","j":{"r":a,"I":"a","p":6,"O":7,"f":"q://y.z.h/9.w","J":"d","E":5,"v":1,"Q":7,"N":b,"M":"B年","F":1,"P":4,"t":4,"i":5,"L":0,"u":4,"o":-b,"I":1}}  $l({g: c.K(C)});',62,53,'||1648467932|1887706613|1964090831|2|2704119864|3|3650|62419fd5a54031284|6914175644562639967|8|JSON|M1887706613|Ok|avatar_url|body|com|create_time|data|degrade|done|error|error_code|expire_days|gid|http|id|id_str|in_valid_time|is_expire|is_valid_user|jpg|let|maavatar1|meitudata|msg|n|obj|parse|platform|renew|response|ret|s|screen_name|stringify|sub_biz_type|sub_name|sub_type|uid|valid_time|vip_type'.split('|'),0,{}))