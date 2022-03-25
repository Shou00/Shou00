/*


[rewrite_local]

#JAv1
^https:\/\/yugedu\.com\/api\/v1\/movies\/.*\/play url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/JAv1.js





[mitm]
hostname = yugedu.com


*/


var hausd0rff = $request['headers'];
hausd0rff['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ0MjQ4MywidXNlcm5hbWUiOiJ5cWMwMDcifQ.EOCu_lF9TFxeZQ_2SfcwdyiU7cyBESkXiHfWBiP3k9M';
hausd0rff['signature'] = '45aebf2239f533611b172a8ecff036a3';
$done({
    headers: hausd0rff
});
