
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
U2FsdGVkX1+Q2noTxXT3QMtj30G6lepeZ1mvUdgsecke2T/gigQjSEJTipPGF4eMukjjFcboS27yjqWQxG30BVONfWmOEuQzZzV4bBe97xGAY/dFmvTejyg6ebsw0Cn9kLyLtt+a5ZKqXKGciox+CalzhpYG7Qfcab4OZcRB9nUxkd5bMeZCyWoOKYqvzai4NyGq4VcqXJrUc/GQEfO8XBlW9bpPFnb3Q0EtRnnieOqSuAqSqj4pLxhns8zDT4BEuiD3s3kc3hax6evU7LrdBTNx+kOed7ZazIppChd7fx+g48IPa1aVEa0qOgE9kNinisBM/bSbYl958iws0y4OL16QUrir3C9t3D52LLK/POFv3n6j2v8RfA3LwavGbB40s/F0A4XNqQorAhAo4VBDYtZrsQjx/0AgXsnPSOVje7UEeE6ZwiO8YEE1B/48qug/1mSM6SwOXgEOT35+lI6HJzwKDnzB4KrOIOE7OyzaosM=
 $done({
 body: JSON.stringify(obj)
}
);