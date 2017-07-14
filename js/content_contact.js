
function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

function setUpPage() {
    document.querySelector("#menuBtn6 a").style.color = "#FFFFFF";

    //change CSS based on browser
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isChrome) {
        var version = getChromeVersion();
        if (version >= 50) {
            var blink = document.getElementById('videoblink');
            blink.style.top = "-1px";
        }
    }

    if (isOpera) {
        var blink = document.getElementById('videoblink');
        blink.style.top = "-1px";
    }

    //###to be deleted debug only
    //console.log("setUpPage finished");
}


if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}