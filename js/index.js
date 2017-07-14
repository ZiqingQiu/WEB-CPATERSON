


//btn1
function btn1MouseOverHandler()
{
    document.getElementById('btn1Img').style.display = "block";
    document.getElementById('btn1Text').style.display = "block";
}

function btn1MouseOutHandler()
{
    document.getElementById('btn1Img').style.display = "none";
    document.getElementById('btn1Text').style.display = "none";
}

//btn2
function btn2MouseOverHandler() {
    document.getElementById('btn2Img').style.display = "block";
    document.getElementById('btn2Text').style.display = "block";
}

function btn2MouseOutHandler() {
    document.getElementById('btn2Img').style.display = "none";
    document.getElementById('btn2Text').style.display = "none";
}

//btn3
function btn3MouseOverHandler() {
    document.getElementById('btn3Img').style.display = "block";
    document.getElementById('btn3Text').style.display = "block";
}

function btn3MouseOutHandler() {
    document.getElementById('btn3Img').style.display = "none";
    document.getElementById('btn3Text').style.display = "none";
}

//btn4
function btn4MouseOverHandler() {
    document.getElementById('btn4Img').style.display = "block";
    document.getElementById('btn4Text').style.display = "block";
}

function btn4MouseOutHandler() {
    document.getElementById('btn4Img').style.display = "none";
    document.getElementById('btn4Text').style.display = "none";
}

//btn5
function btn5MouseOverHandler() {
    document.getElementById('btn5Img').style.display = "block";
    document.getElementById('btn5Text').style.display = "block";
}

function btn5MouseOutHandler() {
    document.getElementById('btn5Img').style.display = "none";
    document.getElementById('btn5Text').style.display = "none";
}

function introHandler() {
    console.log("video finished");
}

function createEventListeners()
{
    //video play ends
    document.getElementById('videointro').addEventListener('ended', introHandler, false);

    //btn1 hovers and leaves
    document.getElementById('btn1ArrowArea').addEventListener('mouseover', btn1MouseOverHandler, false);
    document.getElementById('btn1ArrowArea').addEventListener('mouseout', btn1MouseOutHandler, false);
 
    //btn2 hovers and leaves
    document.getElementById('btn2ArrowArea').addEventListener('mouseover', btn2MouseOverHandler, false);
    document.getElementById('btn2ArrowArea').addEventListener('mouseout', btn2MouseOutHandler, false);

    //btn3 hovers and leaves
    document.getElementById('btn3ArrowArea').addEventListener('mouseover', btn3MouseOverHandler, false);
    document.getElementById('btn3ArrowArea').addEventListener('mouseout', btn3MouseOutHandler, false);

    //btn4 hovers and leaves
    document.getElementById('btn4ArrowArea').addEventListener('mouseover', btn4MouseOverHandler, false);
    document.getElementById('btn4ArrowArea').addEventListener('mouseout', btn4MouseOutHandler, false);

    //btn5 hovers and leaves
    document.getElementById('btn5ArrowArea').addEventListener('mouseover', btn5MouseOverHandler, false);
    document.getElementById('btn5ArrowArea').addEventListener('mouseout', btn5MouseOutHandler, false);
}

function getChromeVersion () 
{     
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

function setUpPage()
{
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

    if (isChrome)
    {
        var version = getChromeVersion();
		if (version >= 50)
		{
		    var blink = document.getElementById('videoblink');
        	blink.style.top = "-1px";
		}
    }
    
    if (isOpera)
    {
   		var blink = document.getElementById('videoblink');
        blink.style.top = "-1px";
    }
    

    //create event listeners
    createEventListeners();
}


if (window.addEventListener)
{
    window.addEventListener("load", setUpPage, false);
}
if (window.attachEvent)
{
    window.attachEvent("onload", setUpPage);
}