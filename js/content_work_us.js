
var imgArrows;
var tableLists;
var eleTitle;
var eleText;
var currentList;

function eraseActiveContents() {
    var i;
    //erase arrows
    for (i = 0; i < imgArrows.length; i++) {
        imgArrows[i].style.visibility = "hidden";
    }

    //erase table list colors
    for (i = 0; i < tableLists.length; i++) {
        tableLists[i].style.color = "#7A7A7A";
    }

    //erase title
    while (eleTitle.firstChild) {
        eleTitle.removeChild(eleTitle.firstChild);
    }

    //erase text
    while (eleText.firstChild) {
        eleText.removeChild(eleText.firstChild);
    }
}

function displayimgArrow(index, setAnchor) {
    imgArrows[index].style.visibility = "visible";
    if (true === setAnchor) {
        currentList = index;
    }
}

function eraseimgArrow(index) {
    if (currentList != index) imgArrows[index].style.visibility = "hidden";
}

function setElementsOnclick(listindex, titlestring) {
    //set first arrow as visiable
    displayimgArrow(listindex, true);

    //set left list color
    tableLists[listindex].style.color = "#BF342D";

    //set title
    eleTitle.innerHTML = titlestring;
}

function buildParagraph(pele, string) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(string));
    pele.appendChild(p);
}

function buildParagraphwithHTML(pele, string) {
    var p = document.createElement("p");
    p.innerHTML = string;
    pele.appendChild(p);
}


//tb0Mouseover
function tableList0onMouseoverHandler() {
    displayimgArrow(0, false);
}
//tb0Mouseleave
function tableList0onMouseleaveHandler() {
    eraseimgArrow(0);
}
//tb0click
function tableList0onClickHandler() {
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(0, "Preparation:");

    //set content
    buildParagraph(eleText, "In preparing for a project, we leave no stone unturned.  We meet with clients to study the problem at hand and to ensure that we understand our clients’ businesses. During a client briefing session, discussions often unveil deeper, or different, issues than originally anticipated. By understanding our clients’ businesses before a study is initiated, a more sound research plan can be developed.");
}

//tb1Mouseover
function tableList1onMouseoverHandler() {
    displayimgArrow(1, false);
}
//tb1Mouseleave
function tableList1onMouseleaveHandler() {
    eraseimgArrow(1);
}
//tb1click
function tableList1onClickHandler() {
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(1, "Curiosity:");

    //set content
    buildParagraph(eleText, "We are curious by nature – always searching for new and meaningful consumer insights.  Our experience allows us to know when to satisfy that curiosity by probing more intensely and when to ‘let it go’.");
}

//tb2Mouseover
function tableList2onMouseoverHandler() {
    displayimgArrow(2, false);
}
//tb2Mouseleave
function tableList2onMouseleaveHandler() {
    eraseimgArrow(2);
}
//tb2click
function tableList2onClickHandler() {
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(2, "Value:");

    //set content
    buildParagraph(eleText, "Time is valuable. Too many research dollars can be spent in a less than productive way, so we ensure that we focus on the essentials such as ensuring that top-notch respondents are recruited.");
}

//tb3Mouseover
function tableList3onMouseoverHandler() {
    displayimgArrow(3, false);
}
//tb3Mouseleave
function tableList3onMouseleaveHandler() {
    eraseimgArrow(3);
}
//tb3click
function tableList3onClickHandler() {
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(3, "Synthesis:");

    //set content
    buildParagraph(eleText, "Our investigation and reporting style ‘cuts to the chase’. We are fully cognizant of optimizing time; of not forcing clients to wade through unnecessary information. We will also raise proverbial red flags for clients and caution them not to make a decision based on one comment made by only one respondent in a focus group. A single comment should never become the cornerstone of a client’s strategic plan.");
}

//tb4Mouseover
function tableList4onMouseoverHandler() {
    displayimgArrow(4, false);
}
//tb4Mouseleave
function tableList4onMouseleaveHandler() {
    eraseimgArrow(4);
}
//tb4click
function tableList4onClickHandler() {
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(4, "Summary and Recommendations:");

    //set content
    buildParagraphwithHTML(eleText, "Our reportage clearly communicates to clients the outcome of the research and its impact upon their business. Unambiguous recommendations are clearly laid out in an easy-to-read format. We assist clients by answering the question: “What does it all mean in the bigger scheme of things?” Our findings are described by our clients as <span class='contentMark'>findings with substance;</span>  findings that provide evidence to the CEO that a commitment of resources to a brand or service would be prudent; findings that enable clients to immediately comprehend the impact on their businesses’ bottom-line.");
}


function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

function setUpPage() {
    document.querySelector("#menuBtn5 a").style.color = "#FFFFFF";
    imgArrows = document.getElementsByTagName("img");
    tableLists = document.getElementsByClassName("leftText");
    eleTitle = document.getElementById("dynamicContentTitle");
    eleText = document.getElementById("dynamicContent");
    currentList = 0;


    //onclick tablelist0
    tableList0onClickHandler();

    //create listeners
    tableLists[0].addEventListener("mouseover", tableList0onMouseoverHandler, false);
    tableLists[0].addEventListener("mouseleave", tableList0onMouseleaveHandler, false);
    tableLists[0].addEventListener("click", tableList0onClickHandler, false);

    tableLists[1].addEventListener("mouseover", tableList1onMouseoverHandler, false);
    tableLists[1].addEventListener("mouseleave", tableList1onMouseleaveHandler, false);
    tableLists[1].addEventListener("click", tableList1onClickHandler, false);

    tableLists[2].addEventListener("mouseover", tableList2onMouseoverHandler, false);
    tableLists[2].addEventListener("mouseleave", tableList2onMouseleaveHandler, false);
    tableLists[2].addEventListener("click", tableList2onClickHandler, false);

    tableLists[3].addEventListener("mouseover", tableList3onMouseoverHandler, false);
    tableLists[3].addEventListener("mouseleave", tableList3onMouseleaveHandler, false);
    tableLists[3].addEventListener("click", tableList3onClickHandler, false);

    tableLists[4].addEventListener("mouseover", tableList4onMouseoverHandler, false);
    tableLists[4].addEventListener("mouseleave", tableList4onMouseleaveHandler, false);
    tableLists[4].addEventListener("click", tableList4onClickHandler, false);

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