/*
 *
 *
  软件：雏姬视频
脚本功能：破解VIP 永久会员
*******************************
[rewrite_local]
# > 雏姬视频
^https:\/\/pg1-api\.cj163\.xyz\/app\/api\/user\/info url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/cjsp.js

[mitm] 
hostname = pg1-api.cj163.xyz
*
*
*/

let obj = JSON.parse($response.body);
obj = {
  "code": 200,
  "message": "操作成功",
  "data": "lsS9W5j7/JsyGH/jXnWYfGW8C5Fda6RUY/PpQSjtUfgESQVTyLNCxA3hg2IbzT5ojj5U+vObydWZh+mNqPWENhv+wC5g2POISwAy3UA2b1yLLt6UAYZeVozYEe7yMMPHxskoYOvoMfaXVft3I6o65QCb+wRsmSZ15+4vn4zIsKaBFJeUmnf+8t0N/eRNgChX8k4VBY9uCWLZx+Ls3MkMp6VHkRa5o549gP9Lole/nNuKk/GrfD52Vb8N8hIjWcvKGd7EgXOQJOzTCSQrfM2YmLdtfnCs+PJedOx5KJk2JfokQGtjeSG3x599AWYtiEMW2WXReFcj1zwKAupebpIfKaNSY98HLSFyZ9G2dGABMI91Fr0GGQSDnNrKpk6sOPBVXRUjuxUcI3IWLLmnSIr1K1RRBTnqrnO3G5xwoh0/T3iSIxynKTtbsafB1VzwLQo9MNIEfNFbobe4zJOnA/nvMIUk/rVUq0fg3iKHFW87p7Y6im7x3e3PXTOwnSCdqjUnLu/n4bNTNQh7VshK709BMYz+/kNYA59ZbjmnoDyWLrn9glXfukA2z4ducDyyoxILVPM8jNejjFNa+bIR5LHirDp/QdUnDRv2tSmJvFEu8pWBtbps+l4NVLYJycO071CuPinojx+Irz1J3+bolDnAUuKFtW1K5IzE0J3tNtKch1hsFpbE4LDIxwyM1RtLChoCxDLqEUR9Ebi/MBlmHbeK88D0W1cjlNmLMcd97FRdJAxPNwcQh3+AREUQltACJYrC",
  "handshake": "v20221010"
}
  
$done({body: JSON.stringify(obj)});