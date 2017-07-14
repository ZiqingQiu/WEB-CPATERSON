
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

function displayimgArrow(index, setAnchor)
{
    imgArrows[index].style.visibility = "visible";
    if (true === setAnchor)
    {
        currentList = index;
    }
}

function eraseimgArrow(index)
{
    if (currentList != index) imgArrows[index].style.visibility = "hidden";
}

function setElementsOnclick (listindex, titlestring)
{
    //set first arrow as visiable
    displayimgArrow(listindex, true);

    //set left list color
    tableLists[listindex].style.color = "#BF342D";

    //set title
    eleTitle.innerHTML = titlestring;
}

function buildUlList(ulele, string) {
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(string));
    ulele.appendChild(list);
}

function buildUlListwithHTML(ulele, string) {
    var list = document.createElement("li");
    list.innerHTML = string;
    ulele.appendChild(list);
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
function tableList0onClickHandler()
{
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(0, "Who We Are");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Colleen Paterson Research Associates Inc. is a Canadian-based market research firm specializing in qualitative research and also offering a full range of quantitative research services.");
    //list2
    buildUlList(content_ul, "We are dedicated to providing excellence in market research and probing for insights that go beyond the obvious.");
    //list3
    buildUlList(content_ul, "We are committed to delivering actionable results in a comprehensive, no-nonsense way.");
    //append all
    eleText.appendChild(content_ul);
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
    setElementsOnclick(1, "Our Mission");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlListwithHTML(content_ul, "Our mission is to delve into the <span class='contentMark'>minds and hearts</span> of our client’s target market to glean insights that will allow our clients to distinguish themselves from the competitive set.");
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
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(2, "Our Expertise");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "We bring over 20 years of solid, professional experience to every project.  Our breadth of work includes hundreds of investigative and discussion groups conducted annually. We have undertaken research in a vast array of product and service categories.");
    //append all
    eleText.appendChild(content_ul);
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
    setElementsOnclick(3, "Teamwork");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Teamwork is critical to every project.  We work tirelessly with our clients to ensure that we all agree on the study objectives.");
    //list2
    buildUlList(content_ul, "Once a study begins, we focus on the objectives, listening intently for new, unanticipated insights that will add value to any given project.");
    //append all
    eleText.appendChild(content_ul);
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
    setElementsOnclick(4, "Our Approach");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlListwithHTML(content_ul, "Our approach is best described as <span class='contentMark'>thorough, creative, </span>and <span class='contentMark'>focused</span>.");
    //list2
    buildUlList(content_ul, "We explore all hypotheses discussed prior to the initiation of the study and we are responsive to any new hypotheses that may surface. Our task is to go beyond the obvious - to delve deeper, seek out unexpected insights and ensure that our clients truly understand the minds and hearts of their customers.  Clients appreciate how strategic planning and marketing plans can unfold seamlessly once solid information is in hand and powerful consumer insights are discovered.");
    //append all
    eleText.appendChild(content_ul);
}


//tb5Mouseover
function tableList5onMouseoverHandler() {
    displayimgArrow(5, false);
}
//tb5Mouseleave
function tableList5onMouseleaveHandler() {
    eraseimgArrow(5);
}
//tb5click
function tableList5onClickHandler() {
    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(5, "Founder");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Colleen Paterson, the founder of Colleen Paterson Research Associates Inc., is a classically trained moderator and creative strategic thinker.  She combines her strong analytical and intuitive skills with an ability to think on her feet.");
    //list2
    buildUlList(content_ul, "Experience on client, supplier and advertising agency sides of the business ensure an understanding of what needs to be done to ensure that synergy exists on every project.");
    //list3
    buildUlList(content_ul, "Her approach is hands-on and her personality, dynamic.  Study participants respond well to Colleen’s engaging style. By making them feel comfortable and relaxed, participants are more apt to reveal inner thoughts and feelings.");
    //list4
    buildUlList(content_ul, "Colleen has a B.A., B.Ed., M.B.A. and is certified CMRP (Canadian Market Research Professional). She is a member of MRIA (Market Research Intelligence Association) and QRCA (Qualitative Reseach Consultants Association).");
    //append all
    eleText.appendChild(content_ul);
}

function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

function setUpPage()
{
    document.querySelector("#menuBtn2 a").style.color = "#FFFFFF";
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

    tableLists[5].addEventListener("mouseover", tableList5onMouseoverHandler, false);
    tableLists[5].addEventListener("mouseleave", tableList5onMouseleaveHandler, false);
    tableLists[5].addEventListener("click", tableList5onClickHandler, false);

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