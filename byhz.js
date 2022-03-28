
/*
 *
 *
  软件：鲍鱼
脚本功能：破解VIP
*******************************
[rewrite_local]
# > 鲍鱼
^https:\/\/.*.icloud.com.cn/.*/.*/.* url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/byhz.js

[mitm] 
hostname = *.icloud.com.cn
*
*
*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'bearer 700bcb4cc5e54121688ba51325af105d';


$done({headers : modifiedHeaders});