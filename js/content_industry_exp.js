
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

function resizeAllPageBottom(height) {
    eleallPage.style.height = height + "px";
    elefooter.style.top = (height - 25) + "px";
}

function forceDisplayArrowText(index) {
    imgArrows[index].style.visibility = "visible";
    tableLists[index].style.color = "#BF342D";
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
    setElementsOnclick(0, "Colleen Paterson Research Associates Inc. brings a wealth of industry experience to the table. We have worked extensively in a broad range of categories:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "advertising");
    //list2
    buildUlList(content_ul, "business to business");
    //list3
    buildUlList(content_ul, "financial services");
    //list4
    buildUlList(content_ul, "government");
    //list5
    buildUlList(content_ul, "not-for-profit");
    //list6
    buildUlList(content_ul, "packaged goods");
    //list7
    buildUlList(content_ul, "pharmaceutical");
    //list8
    buildUlList(content_ul, "technology");
    //list9
    buildUlList(content_ul, "telecommunications");
    //list10
    buildUlList(content_ul, "tourism, travel, transportation");
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
    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(1, "Project Types");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlListwithHTML(content_ul, "<b>A Toolbox of Techniques to read minds and hearts</b>");
    //list2
    buildUlList(content_ul, "We have a complete toolbox filled with a wide variety of techniques that allow us to creatively read the minds and hearts of a client’s market.  Our selection process of techniques is customer tailored to fit each individual project.");

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
    resizeAllPageBottom(1020);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    forceDisplayArrowText(1);
    setElementsOnclick(2, "Packaged Goods:<br/><span class='contentMark'>(Sample of Product Projects)</span>");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Baby Food");
    //list2
    buildUlList(content_ul, "Bagels");
    //list3
    buildUlList(content_ul, "Baking products");
    //list4
    buildUlList(content_ul, "Body Wash products");
    //list5
    buildUlList(content_ul, "Canned Fruit");
    //list6
    buildUlList(content_ul, "Chewing Gum");
    //list7
    buildUlList(content_ul, "Coffee Alternatives");
    //list8
    buildUlList(content_ul, "Conditioners");
    //list9
    buildUlList(content_ul, "Confectionary");
    //list10
    buildUlList(content_ul, "Cosmetics");
    //list11
    buildUlList(content_ul, "Cough and Cold Remedies");
    //list12
    buildUlList(content_ul, "Dish Detergents");
    //list13
    buildUlList(content_ul, "Facial Cleansers");
    //list14
    buildUlList(content_ul, "Feminine Hygiene");
    //list15
    buildUlList(content_ul, "Frozen Entrees");
    //list16
    buildUlList(content_ul, "Fruit Juice");
    //list17
    buildUlList(content_ul, "Hairspray");
    //list18
    buildUlList(content_ul, "Indigestion Products");
    //list19
    buildUlList(content_ul, "Instant Coffee");
    //list20
    buildUlList(content_ul, "Meal Replacements");
    //list21
    buildUlList(content_ul, "Milk");
    //list22
    buildUlList(content_ul, "Mouthwash");
    //list23
    buildUlList(content_ul, "Orange Juice");
    //list24
    buildUlList(content_ul, "Packaged Soup");
    //list25
    buildUlList(content_ul, "Pasta");
    //list26
    buildUlList(content_ul, "Pasta Sauce");
    //list27
    buildUlList(content_ul, "Peanut butter");
    //list28
    buildUlList(content_ul, "Pineapple");
    //list29
    buildUlList(content_ul, "Pizza");
    //list30
    buildUlList(content_ul, "Seafood");
    //list31
    buildUlList(content_ul, "Shampoos");
    //list32
    buildUlList(content_ul, "Shower Cleaners");
    //list33
    buildUlList(content_ul, "Smoking Cessation Products");
    //list34
    buildUlList(content_ul, "Soft Drinks");
    //list35
    buildUlList(content_ul, "Supermarkets");
    //list36
    buildUlList(content_ul, "Sweeteners");
    //list37
    buildUlList(content_ul, "Toothpaste");
    //list38
    buildUlList(content_ul, "Tuna");
    //list39
    buildUlList(content_ul, "Washing Machine Cleaning Products");
    //list40
    buildUlList(content_ul, "Water Softeners");
    //list41
    buildUlList(content_ul, "Yogurt");


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

    //resize allpage
    resizeAllPageBottom(560);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    forceDisplayArrowText(1);
    setElementsOnclick(3, "Service Sector:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Airlines");
    //list2
    buildUlList(content_ul, "Automobile");
    //list3
    buildUlList(content_ul, "Book Publishing");
    //list4
    buildUlList(content_ul, "Department Stores");
    //list5
    buildUlList(content_ul, "Distribution Sector");
    //list6
    buildUlList(content_ul, "Employment Agencies");
    //list7
    buildUlList(content_ul, "Fashion");
    //list8
    buildUlList(content_ul, "Financial institutions (Banks and Trust Companies)");
    //list9
    buildUlList(content_ul, "Food Hospitality");
    //list10
    buildUlList(content_ul, "Hydro");
    //list11
    buildUlList(content_ul, "Insurance Companies");
    //list12
    buildUlList(content_ul, "Magazine Publications");
    //list13
    buildUlList(content_ul, "Natural Gas");
    //list14
    buildUlList(content_ul, "Postal services");
    //list15
    buildUlList(content_ul, "Quick Service Restaurants");
   

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

    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    forceDisplayArrowText(1);
    setElementsOnclick(4, "Technology Sector:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Customer Billing");
    //list2
    buildUlList(content_ul, "Internet");
    //list3
    buildUlList(content_ul, "Land Lines");
    //list4
    buildUlList(content_ul, "Mobility");
    //list5
    buildUlList(content_ul, "Satellite Television");
    //list6
    buildUlList(content_ul, "Two Way Radios/Pagers");
    //list7
    buildUlList(content_ul, "Usability Studies (Internet/Website)");
    //list8
    buildUlList(content_ul, "Website Testing/Evaluation");

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

    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    forceDisplayArrowText(1);
    setElementsOnclick(5, "Government Sector:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Health Services");
    //list2
    buildUlList(content_ul, "Employee Evaluations/Compensation");
    //list3
    buildUlList(content_ul, "Municipal Services");
    //list4
    buildUlList(content_ul, "Trade, Development and Tourism");

    //append all
    eleText.appendChild(content_ul);
}

//tb6Mouseover
function tableList6onMouseoverHandler() {
    displayimgArrow(6, false);
}
//tb6Mouseleave
function tableList6onMouseleaveHandler() {
    eraseimgArrow(6);
}
//tb6click
function tableList6onClickHandler() {

    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    forceDisplayArrowText(1);
    setElementsOnclick(6, "Miscellaneous:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Airline");
    //list2
    buildUlList(content_ul, "Advertising ");
    //list3
    buildUlList(content_ul, "Alternative Remedies/Medicine");
    //list4
    buildUlList(content_ul, "Anti-Depressants");
    //list5
    buildUlList(content_ul, "Artwork");
    //list6
    buildUlList(content_ul, "Automobile Roadside Assistance");
    //list7
    buildUlList(content_ul, "Automobile Tires");
    //list8
    buildUlList(content_ul, "Gift Shelves");
    //list9
    buildUlList(content_ul, "Greeting Cards");
    //list10
    buildUlList(content_ul, "Psoriatic Arthritis, ADHD, Rheumatoid Arthritis, Cancer, and Diabetes");
    //list11
    buildUlList(content_ul, "Novels");
    //list12
    buildUlList(content_ul, "Giftware");
    //list13
    buildUlList(content_ul, "Supermarkets");
    //list14
    buildUlList(content_ul, "Trade Control");


    //append all
    eleText.appendChild(content_ul);
}

//tb7Mouseover
function tableList7onMouseoverHandler() {
    displayimgArrow(7, false);
}
//tb7Mouseleave
function tableList7onMouseleaveHandler() {
    eraseimgArrow(7);
}
//tb7click
function tableList7onClickHandler() {

    //resize allpage
    resizeAllPageBottom(534);

    //erase all active contents
    eraseActiveContents();

    //set basic elements
    setElementsOnclick(7, "Segments that we have worked with include:");

    //set content
    var content_ul = document.createElement("ul");
    //list1
    buildUlList(content_ul, "Adults");
    //list2
    buildUlList(content_ul, "Business Segment");
    //list3
    buildUlList(content_ul, "Seniors");
    //list4
    buildUlList(content_ul, "Teens");
    //list5
    buildUlList(content_ul, "Tweens");
    //list6
    buildUlList(content_ul, "White, Grey and Blue Collar");
    
    //append all
    eleText.appendChild(content_ul);
}

function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

function setUpPage() {
    document.querySelector("#menuBtn4 a").style.color = "#FFFFFF";
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

    tableLists[3].addEventListener("mouseover", tableList3onMouseoverHandler, false);
    tableLists[3].addEventListener("mouseleave", tableList3onMouseleaveHandler, false);
    tableLists[3].addEventListener("click", tableList3onClickHandler, false);

    tableLists[4].addEventListener("mouseover", tableList4onMouseoverHandler, false);
    tableLists[4].addEventListener("mouseleave", tableList4onMouseleaveHandler, false);
    tableLists[4].addEventListener("click", tableList4onClickHandler, false);

    tableLists[5].addEventListener("mouseover", tableList5onMouseoverHandler, false);
    tableLists[5].addEventListener("mouseleave", tableList5onMouseleaveHandler, false);
    tableLists[5].addEventListener("click", tableList5onClickHandler, false);

    tableLists[6].addEventListener("mouseover", tableList6onMouseoverHandler, false);
    tableLists[6].addEventListener("mouseleave", tableList6onMouseleaveHandler, false);
    tableLists[6].addEventListener("click", tableList6onClickHandler, false);


    tableLists[7].addEventListener("mouseover", tableList7onMouseoverHandler, false);
    tableLists[7].addEventListener("mouseleave", tableList7onMouseleaveHandler, false);
    tableLists[7].addEventListener("click", tableList7onClickHandler, false);
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