/*


[rewrite_local]

#JAv
^https:\/\/yugedu\.com\/api\/v1\/movies\/(.+)\/play url script-request-header https://raw.githubusercontent.com/Shou00/Shou00/main/JAv.js





[mitm]
hostname = yugedu.com


*/


var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.aSlLcMcGxEtNrsxife9exe0BGs6C4bQHdiBUaYamEAM';

$done({headers : modifiedHeaders});