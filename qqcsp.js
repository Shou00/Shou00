/******************************

脚本功能：破解视频 点播无解

*******************************
[rewrite_local]
# > 青青草
^https?:\/\/jk\.py49ri\.com\/api\/v2\/video\/play\/ url script-response-body https://raw.githubusercontent.com/Shou00/Shou00/main/qqcsp.js

[mitm] 
hostname = jk.py49ri.com

*******************************/


let obj = JSON.parse($response.body);
obj = {"d":"OCZVDwF7iM0DWJzQ0nQ5zkL5WVgUBCi/EDzVGdqg4XKh7hpDqL0pLSPOzxMBQ3R6kMIcbvxl30QEidBjQbHKqwLRRxomh190fF3dnJONmp1S/057n/uOdAYGQXReIsEc21ZefEi7rlif0wCJyeZWvU/KESoR/dkvuzdp0BpfMXexUoQZAsCcwul2nz9q8gATdm3dcO1ZxxOua1ryaf5L9CSB077FPfwFUD5WKzBmQU3ts/TnNvXntZ4zqDwoWG4IzHhgCrfQ7G19+Q2pktid3bXYP47EgcuLH47LrODKY7EilE2qfkWSvQDMJHeRIx2tbYma5YRpEgkC47M3GZXdEwj52jFtqHj7jkZ4wIQHP9SpYuFR3/kNQRQn2VqFqCOdVL6SYijhoyHR8dUGZfRUfkX2fUZSEVXhr06AR7Tj/70Z1vCFrLhFQLMKpkyyXTr512UK1UvrIznMejIA7DZz/RRfHs1g84JNKBFn6ZFJka58tJDEL7e0wXoDqjA1RgCM3P8+Pm1PfLbnBoVgXl4thzDUdFE/Wht4S12zqSoSyEwKOexpXdPSxmWMD+3FrgCy+JKc3jrxWrWK/ypPqwj/JkotXMI7ERQuUIj0sn6Rel+fyaV9IO/Ku6vOnr4r7kvF"}
  
$done({body: JSON.stringify(obj)});