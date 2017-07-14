
var imgArrows;
var tableLists;
var eleTitle;
var eleText;
var currentList;

var eleallPage;
var elefooter;

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

function buildUlList(ulele, string)
{
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(string));
    ulele.appendChild(list);
}

function buildParagraphwithHTML(pele, string) {
    var p = document.createElement("p");
    p.innerHTML = string;
    pele.appendChild(p);
}


function resizeAllPageBottom(height)
{
    eleallPage.style.height = height + "px";
    elefooter.style.top = (height - 25) + "px";
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
    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(0, "Colleen Paterson Research Associates Inc. offers a wide variety of qualitative research services including:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "focus groups");
    //list2
    buildUlList(content_ul, "creativity brainstorming sessions");
    //list3
    buildUlList(content_ul, "discussion panels");
    //list4
    buildUlList(content_ul, "executive interviews");
    //list5
    buildUlList(content_ul, "in-depth personal interviews (one-on-ones)");
    //list6
    buildUlList(content_ul, "innovation workshops");
    //list7
    buildUlList(content_ul, "mini-groups, triads, dyads");

    //append all
    eleText.appendChild(content_ul);

    //paragraph
    buildParagraphwithHTML(eleText, "<span class='contentWithTitleStyle'>All services are offered Online as well as In-Person</span>");
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
    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(1, "Our experience also extends to studies, analyses and planning:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "concept testing");
    //list2
    buildUlList(content_ul, "marketing planning");
    //list3
    buildUlList(content_ul, "segmentation studies");
    //list4
    buildUlList(content_ul, "strategic planning");
    //list5
    buildUlList(content_ul, "SWOT analysis");
    //list6
    buildUlList(content_ul, "taste testing studies");
    //list7
    buildUlList(content_ul, "trade-off analysis");
    //list8
    buildUlList(content_ul, "usage and attitude (U&A) studies");

    //append all
    eleText.appendChild(content_ul);
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

    //resize allpage
    resizeAllPageBottom(630);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(2, "We also have extensive research expertise in the following areas:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "advertising evaluation");
    //list2
    buildUlList(content_ul, "brand image and brand equity evaluation");
    //list3
    buildUlList(content_ul, "concept exploration");
    //list4
    buildUlList(content_ul, "consumer panels");
    //list5
    buildUlList(content_ul, "corporate image evaluation");
    //list6
    buildUlList(content_ul, "customer and distribution satisfaction studies");
    //list7
    buildUlList(content_ul, "employee studies");
    //list8
    buildUlList(content_ul, "ethnographic studies");
    //list9
    buildUlList(content_ul, "in-store interviews");
    //list10
    buildUlList(content_ul, "name investigation");
    //list11
    buildUlList(content_ul, "needs analysis");
    //list12
    buildUlList(content_ul, "new product research");
    //list13
    buildUlList(content_ul, "packaging research");
    //list14
    buildUlList(content_ul, "product placement");
    //list15
    buildUlList(content_ul, "segmentation analysis");
    //list16
    buildUlList(content_ul, "usability studies");
    //list17
    buildUlList(content_ul, "website evaluation");

    //append all
    eleText.appendChild(content_ul);
}



function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

function setUpPage() {
    document.querySelector("#menuBtn3 a").style.color = "#FFFFFF";
    imgArrows = document.getElementsByTagName("img");
    tableLists = document.getElementsByClassName("leftText");
    eleTitle = document.getElementById("dynamicContentTitle");
    eleText = document.getElementById("dynamicContent");
    currentList = 0;
    eleallPage = document.getElementById("allPage");
    elefooter = document.getElementById("pageFooter");

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