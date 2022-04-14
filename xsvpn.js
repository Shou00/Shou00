
/*
 *
 *
  软件：夏时加速器（2.4.7版本)
脚本功能：破解vip
*******************************
[rewrite_local]
# > 夏时vpn
^https:\/\/.*\.com\/addressx2\/ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/xsvpn.js

[mitm] 
hostname = hotspot-unlimited.com
*
*
*/

let obj = HTML.parse($response.body);
obj = {
"hand":[
{"ipAddress":"154.17.4.108","nation":"usa","local":"LA154.17.4.108","vip":"0"},
{"ipAddress":"91.220.202.21","nation":"usa","local":"LA91.220.202.21","vip":"0"},
],
"auto":[
{"ipAddress":"154.17.0.219","nation":"usa","local":"LA154.17.0.219","vip":"0"},
{"ipAddress":"64.64.242.99","nation":"usa","local":"LA64.64.242.99","vip":"0"},
{"ipAddress":"199.180.113.30","nation":"usa","local":"LA199.180.113.30","vip":"0"},
{"ipAddress":"74.211.107.173","nation":"usa","local":"LA74.211.107.173","vip":"0"},
{"ipAddress":"185.201.227.117","nation":"usa","local":"LA185.201.227.117","vip":"0"},
{"ipAddress":"67.230.169.95","nation":"usa","local":"LA67.230.169.95","vip":"0"},
{"ipAddress":"212.50.244.19","nation":"jp","local":"Tokyo212.50.244.19","vip":"0"},
{"ipAddress":"23.225.64.201","nation":"hk","local":"HK23.225.64.201","vip":"0"},
{"ipAddress":"45.144.242.60","nation":"usa","local":"03-24-LA45.144.242.60","vip":"0"},
{"ipAddress":"91.220.203.253","nation":"usa","local":"03-28-LA91.220.203.253","vip":"0"},
{"ipAddress":"185.126.227.165","nation":"usa","local":"03-28-LA185.126.227.165","vip":"0"},
{"ipAddress":"45.144.243.151","nation":"usa","local":"03-30-LA45.144.243.151","vip":"0"},
{"ipAddress":"91.220.202.174","nation":"usa","local":"04-09-LA91.220.202.174","vip":"0"},
{"ipAddress":"91.220.202.175","nation":"usa","local":"04-09-LA91.220.202.175","vip":"0"},
{"ipAddress":"91.220.202.176","nation":"usa","local":"04-09-LA91.220.202.176","vip":"0"},
{"ipAddress":"91.220.202.178","nation":"usa","local":"04-09-LA91.220.202.178","vip":"0"},
{"ipAddress":"45.144.242.38","nation":"usa","local":"04-12-LA45.144.242.38","vip":"0"},
{"ipAddress":"45.144.242.37","nation":"usa","local":"04-12-LA45.144.242.37","vip":"0"},
{"ipAddress":"45.144.242.36","nation":"usa","local":"04-12-LA45.144.242.36","vip":"0"},
{"ipAddress":"91.220.202.184","nation":"usa","local":"04-12-LA91.220.202.184","vip":"0"},
{"ipAddress":"104.207.156.112","nation":"usa","local":"04-13-SV104.207.156.112","vip":"0"},
{"ipAddress":"149.28.10.52","nation":"usa","local":"04-13-SV149.28.10.52","vip":"0"},
{"ipAddress":"144.202.93.112","nation":"usa","local":"04-13-SV144.202.93.112","vip":"0"},
{"ipAddress":"45.77.215.143","nation":"usa","local":"04-13-SV45.77.215.143","vip":"0"},
{"ipAddress":"104.207.157.21","nation":"usa","local":"04-13-SV104.207.157.21","vip":"0"},
{"ipAddress":"66.42.70.246","nation":"usa","local":"04-13-SV66.42.70.246","vip":"0"},
{"ipAddress":"66.42.77.207","nation":"usa","local":"04-13-SV66.42.77.207","vip":"0"},
{"ipAddress":"149.28.13.47","nation":"usa","local":"04-13-SV149.28.13.47","vip":"0"},
{"ipAddress":"104.238.156.226","nation":"usa","local":"04-13-SV104.238.156.226","vip":"0"},
{"ipAddress":"108.61.195.7","nation":"usa","local":"04-13-SV108.61.195.7","vip":"0"},
{"ipAddress":"149.28.109.100","nation":"usa","local":"04-14-MIA149.28.109.100","vip":"0"},
{"ipAddress":"45.77.192.17","nation":"usa","local":"04-14-MIA45.77.192.17","vip":"0"},
{"ipAddress":"207.246.115.174","nation":"usa","local":"04-14-MIA207.246.115.174","vip":"0"},
{"ipAddress":"104.207.144.12","nation":"usa","local":"04-14-MIA104.207.144.12","vip":"0"},
{"ipAddress":"207.246.73.243","nation":"usa","local":"04-14-MIA207.246.73.243","vip":"0"},
{"ipAddress":"207.246.67.183","nation":"usa","local":"04-14-MIA207.246.67.183","vip":"0"},
{"ipAddress":"149.28.97.249","nation":"usa","local":"04-14-MIA149.28.97.249","vip":"0"},
{"ipAddress":"144.202.34.167","nation":"usa","local":"04-14-MIA144.202.34.167","vip":"0"},
{"ipAddress":"104.156.246.223","nation":"usa","local":"04-14-MIA104.156.246.223","vip":"0"},
{"ipAddress":"45.77.75.151","nation":"usa","local":"04-14-MIA45.77.75.151","vip":"0"},
{"ipAddress":"185.126.227.184","nation":"usa","local":"04-14-LA185.126.227.184","vip":"0"},
{"ipAddress":"45.144.243.134","nation":"usa","local":"04-14-LA45.144.243.134","vip":"0"},
{"ipAddress":"45.144.242.70","nation":"usa","local":"04-14-LA45.144.242.70","vip":"0"},
],
"user":[
{"ipAddress":"","nation":"usa","local":"04-14-MIA","vip":"0"},
{"ipAddress":"","nation":"x2","local":"04-13-SV","vip":"0"},
],
}
  
$done({body: HTML.stringify(obj)});