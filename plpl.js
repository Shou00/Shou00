/*

# > 

^https:\/\/biliapi\.lubroil\.cn\/api\/app\/media\/m3u8\/.+\/.+\/.+\/.+\/.+\/.+\.m3u8? url 307 https://raw.githubusercontent.com/Shou00/Shou00/main/plpl.js

QX MITM = biliapi.lubroil.cn



*/

$done( { url : $request.url.replace(/_\d+\.m3u8/g,".m3u8")});