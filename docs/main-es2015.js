(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-logo-home-page></app-logo-home-page>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n<div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/about-us-main/about-us-main.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/about-us-main/about-us-main.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-common-banner></app-common-banner>\r\n    <div class = \"slogan1\">\r\n        <app-common-text-slogan></app-common-text-slogan>\r\n    </div>\r\n    <div>\r\n        <app-augrid-images></app-augrid-images>\r\n    </div>\r\n    <div class=\"divider\">\r\n\r\n    </div>\r\n    <div>\r\n        <app-common-text-slogan></app-common-text-slogan>\r\n    </div>\r\n    <div >\r\n        <app-auculture-grid-images></app-auculture-grid-images>\r\n    </div>\r\n    <div class=\"divider\">\r\n\r\n    </div>\r\n    <div>\r\n        <app-common-text-slogan></app-common-text-slogan>\r\n    </div>\r\n    <div class=\"divider\">\r\n\r\n    </div>\r\n    <div>\r\n        <app-auparties-grid-images></app-auparties-grid-images>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= parent>\n    <div class=\"div6 text1\">\n        <div>INDOOR BASKETBALL/VOLLEYBALL</div>\n        <div>POKER TOURNAMENTS</div>\n        <div>TEAM BUILDING ACTIVITIES</div>\n        <div>HALF DAY/CASUAL FRIDAYS</div>\n    </div>\n    <div class=\"div1 empty1\"></div>\n    <div class=\"div2 img1\"></div>\n    <div class=\"div3 img1\"></div>\n    <div class=\"div4 empty1\"></div>\n    <div class=\"div5 img1\"></div>\n\n    <div class=\"div7\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/augrid-images/augrid-images.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/augrid-images/augrid-images.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vipImages\">\r\n    <app-auimage class=\"gridEle\" *ngFor=\"let item of items\"\r\n        [imageName] = item.imageName\r\n        [name] = item.name\r\n        [title] = item.title\r\n        [description] = item.description\r\n    >\r\n    </app-auimage>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auimage/auimage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/auimage/auimage.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <div class=\"card\" (click)=\"open()\">\r\n        <div class=\"image\" [ngStyle]=\"{'width': '300px', 'height' : '450px',  'background-image': 'url(\\'assets/Medias/Images/VIPs/' + imageName + '.jpg\\')'}\" >\r\n        <!-- <img src='assets/Medias/Images/VIPs/{{imageName}}.jpg'/>-->   \r\n            <div class=\"empty\">\r\n\r\n            </div>\r\n            <div class=\"text\">\r\n                <div class=\"name\">\r\n                    <p>{{name}}</p>\r\n                </div>\r\n                <div class=\"title\">\r\n                    <p>{{title}}</p>\r\n                </div>\r\n            </div>   \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <div class=\"div2 title\">\n        <p>SPRING PARTY</p>\n    </div>\n    <div class=\"div1 img1\"></div>\n    <div class=\"div3 img1\"></div>\n    <div class=\"div4 img1\"></div>\n    <div class=\"div5 img1\"></div>\n    <div class=\"div6 img1\"></div>\n    <div class=\"div7 img1\"></div>\n    <div class=\"div8 img1\"></div>\n    <div class=\"div11 title\">\n        <p>SUMMER BBQ</p>\n    </div>\n    <div class=\"div9 img1\"></div>\n    <div class=\"div10 img1\"></div>\n\n    <div class=\"div12 img1\"></div>\n    <div class=\"div13 img1\"></div>\n    <div class=\"div18 title\">\n        <p>HALLOWEEN PARTY</p>\n    </div>\n    <div class=\"div14 img1\"></div>\n    <div class=\"div15 img1\"></div>\n    <div class=\"div16 img1\"></div>\n    <div class=\"div17 img1\"></div>\n    <div class=\"div24 title\">\n        <p>CHRISTMAS PARTY</p>\n    </div>\n    <div class=\"div19 img1\"></div>\n    <div class=\"div22 img1\"></div>\n    <div class=\"div20 img1\"></div>\n    <div class=\"div21 img1\"></div>\n    <div class=\"div22 img1\"></div>\n    <div class=\"div23 img1\"></div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/vip-profile/vip-profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/vip-profile/vip-profile.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split1\">\r\n    <div>\r\n        <div class=\"about\">\r\n            <p>ABOUT</p>\r\n        </div>\r\n        <div class=\"name\">\r\n            {{name}}\r\n        </div>\r\n        <div class=\"title\">\r\n            {{title}}\r\n        </div>\r\n        <div class=\"description\">\r\n            {{description}}\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"image\" [ngStyle]=\"{'width': '400px', 'height' : '600px',  'background-image': 'url(\\'assets/Medias/Images/VIPs/' + imageName + '.jpg\\')'}\" >\r\n        </div>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Common/common-banner/common-banner.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Common/common-banner/common-banner.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CommonPictureBanner\" \r\n    [ngStyle]=\"{'background': 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%),' + 'url(' + imagePath +')'}\">\r\n    <p>{{title}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Common/common-text-slogan/common-text-slogan.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Common/common-text-slogan/common-text-slogan.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=CommonEffeciencyBanner>\r\n        <div class=\"Effeciency\">\r\n            <p>{{title}}</p>\r\n        </div>\r\n        <div class=\"LineDivider\"></div>\r\n        <div class=\"Text1\">\r\n           <p>{{content}}</p>\r\n        </div>\r\n    </div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Common/vip-shared-service/vip-shared-service.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Common/vip-shared-service/vip-shared-service.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>vip-shared-service works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Contact/contact-grid-images/contact-grid-images.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Contact/contact-grid-images/contact-grid-images.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n    <div class=\"div1\"></div>\r\n    <div class=\"div2\"></div>\r\n    <div class=\"div3\"></div>\r\n    <div class=\"div4\"></div>\r\n    <div class=\"div5\"></div>\r\n    <div class=\"div6\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Contact/contact-main/contact-main.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Contact/contact-main/contact-main.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-common-banner></app-common-banner>\r\n    <div class=\"title\">\r\n        <p>CONTACT US</p>\r\n    </div>\r\n    <div class= \"combo\">\r\n        <div class=\"location\">\r\n            <div class=\"text\">\r\n                <p>OFFICE LOCATIONS</p>\r\n            </div>\r\n            <div class=\"text\">\r\n                <p>CORPORATE HEADQUARTERS</p>\r\n            </div>\r\n            <div class=\"text\">\r\n                <p><a href=\"https://www.google.com/maps/place/15+Studebaker,+Irvine,+CA+92618/@33.6498025,-117.7174509,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce81649db0b23:0x9e07e46548ce963a!8m2!3d33.6498025!4d-117.7152622\">15 Studebaker Irvine, CA 92618</a></p>\r\n            </div>\r\n            <div class=\"text\">\r\n                <p>949.752.1612</p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"text\">\r\n                <p>PALM SPRINGS, CALIFORNIA</p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"text\">\r\n                <p>PASADENA, CALIFORNIA</p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"text\">\r\n                <p>PLEASANTON, CALIFORNIA</p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"text\">\r\n                <p>SAI GON, VIETNAM</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"contact\">\r\n            <form action=\"mailto:dngo@gouvisgroup.com\" method=\"POST\" enctype=\"text/plain\">\r\n                <div class=\"contact1\">\r\n                    <input class=\"input\" type=\"text\" name=\"name\" placeholder=\"name\">\r\n                    <input class=\"input\" type=\"text\" name=\"email\" placeholder=\"email\">\r\n                    <input class=\"input\" type=\"text\" name=\"phone\" placeholder=\"Phone Number\">\r\n                    <input class=\"input\" type=\"text\" name=\"Message\" placeholder=\"Type your message here...\">                   \r\n                    <input class=\"inputButton\" type=\"submit\" value=\"Submit\">\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"slogan\">\r\n        <app-common-text-slogan></app-common-text-slogan>\r\n    </div>\r\n    <div>\r\n        <app-contact-grid-images></app-contact-grid-images>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Contact/office-location/office-location.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Contact/office-location/office-location.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>office-location works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/banner/banner.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/banner/banner.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bannerImage\">\r\n    <div class=\"slider\">\r\n        <div class=\"slider1\">\r\n            <div class= \"image1\"></div>\r\n            <div class= \"image2\"></div>\r\n            <div class= \"image3\"></div>\r\n            <div class= \"image4\"></div>\r\n            <div class= \"image5\"></div>\r\n            <div class= \"image7\"></div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/cards/cards.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/cards/cards.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"houseFrame\">\r\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\r\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\r\n                <img src = \"assets/Medias/Images/ServicesIconsHomePage/apartment.png\"/>\r\n            </div>\r\n            <div>\r\n                <p>Structural Design</p>\r\n            </div>\r\n        </div>\r\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\r\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\r\n                <img src = \"assets/Medias/Images/ServicesIconsHomePage/mechanical_fan.png\"/>\r\n            </div>\r\n            <div>\r\n                <p>Mechanical Design</p>\r\n            </div>\r\n        </div>\r\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\r\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\r\n                <img src = \"assets/Medias/Images/ServicesIconsHomePage/light_bulb_icon_white.png\"/>\r\n            </div>\r\n            <div>\r\n                <p>Electrical Design</p>\r\n            </div>\r\n        </div>\r\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\r\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\r\n                <img src = \"assets/Medias/Images/ServicesIconsHomePage/plumbing_pipe_white.png\"/>\r\n            </div>\r\n            <div>\r\n                <p>Plumbing Design</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/first-class/first-class.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/first-class/first-class.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"RibbonTile1\">\r\n    <div class=\"firstClass\"  >\r\n        <!--[ngStyle]=\"firstClass\"-->\r\n        1<sup>st</sup> Class Service. World Class Clients.\r\n    </div>\r\n    <div class=\"lineBreak1\">\r\n    </div>\r\n    <div class=\"mottoHomePage\">\r\n        Gouvis Engineering Consulting Group delivers first class engineering services for many of the largest builders and architects throughout the country. With a tenured staff of over 100 employees company-wide, we have the resources and workforce to meet any schedule requirement.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/grid-images/grid-images.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/grid-images/grid-images.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <div>\r\n        \r\n    </div>\r\n    <div class=\"homePageBottomShow\" >\r\n        <div class=\"picture1\">\r\n            <div class=\"TextDecor1\">\r\n                <div class=\"TextDecor2\" ng>\r\n                    <div class=\"text1\">ABC House 3.0</div>\r\n                    <div class=\"textDivider1\"></div>\r\n                    <div class=\"text1\">NAHB Best in Green Interiors Project and ASCE Sustainable Engineering Project of the Year / PCBC Grand Award: Best Zero Net Energy Home Design</div>\r\n                </div>\r\n            </div>\r\n        </div >\r\n        <div class=\"picture2\" >        \r\n            <div class=\"TextDecor1\">\r\n                <div class=\"TextDecor2\">\r\n                    <div class=\"text1\">WALLIS RANCH</div>\r\n                    <div class=\"textDivider1\"></div>\r\n                    <div class=\"text1\">PCBC Grand Award: Residential Housing Community of the Year</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"picture3\">\r\n            <div > </div>\r\n        </div>\r\n        <div class=\"picture4\">\r\n            <div> </div>\r\n        </div>\r\n        <div class=\"picture5\">\r\n               \r\n                <div class=\"TextDecor1\">\r\n                        <div class=\"TextDecor2\">\r\n                            <div class=\"text1\">CARLISLE AT PARASOL PARK</div>\r\n                            <div class=\"textDivider1\"></div>\r\n                            <div class=\"text1\"> PCBC Grand Award: Best Single Family Detached Home</div>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n        <div class=\"picture6\">\r\n                <div class=\"TextDecor1\">\r\n                        <div class=\"TextDecor2\">\r\n                            <div class=\"text1\">ROYAL OAKS COURTYARD VILLAS</div>\r\n                            <div class=\"textDivider1\"></div>\r\n                            <div class=\"text1\">PCBC Merit Award: Single Family Detachede</div>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n        <div class=\"picture7\">\r\n                <div class=\"TextDecor1\">\r\n                        <div class=\"TextDecor2\">\r\n                            <div class=\"text1\">SKYE</div>\r\n                            <div class=\"textDivider1\"></div>\r\n                            <div class=\"text1\">NAHB Platinum and NAHB Gold / PCBC Award of Merit: Best Single Family Detached Home / PCBC Grand Award: Residential Housing Project of the Year</div>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n        <div class=\"picture8\">\r\n                <div class=\"TextDecor1\">\r\n                        <div class=\"TextDecor2\">\r\n                            <div class=\"text1\">REVELLE AT CLANCY LANE</div>\r\n                            <div class=\"textDivider1\"></div>\r\n                            <div class=\"text1\">PCBC Grand Award: Best Single Family Detached</div>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n        <div class=\"picture9\">\r\n            <div> </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Panel1\">\r\n    <div class= \"PanelText\">\r\n        <div class=\"PanelTextUnder\">\r\n\r\n            <div class=\"Panel1Text1\">\r\n                SMEP INTEGRATION\r\n            </div>\r\n\r\n            <div class=\"Panel1Divider\">\r\n            </div>\r\n\r\n            <div class=\"Panel1Text1\">\r\n                SIMPLIFIED\r\n            </div>\r\n            \r\n            <div class=\"Panel1Text2\">\r\n                Our technical expertise and design efficiency allow us to provide value engineered SMEP solutions for residential and commercial projects throughout the country.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Panel1Image\">\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/main/main.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/main/main.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n    <div class=\"bannerImagesHomePage\">\r\n      <app-banner></app-banner>\r\n    </div>\r\n    <div class=\"Panel1\">\r\n        <app-home-page-panel1></app-home-page-panel1>\r\n    </div>\r\n    \r\n\r\n    <app-first-class></app-first-class>\r\n\r\n    <app-services-words></app-services-words>\r\n\r\n    <app-cards></app-cards>\r\n    \r\n    <app-video-intro\r\n    [videoLink]=\"'https://www.youtube.com/embed/hbET2TKiaEI'\">\r\n    ></app-video-intro>\r\n    \r\n    <div>\r\n            <div class=\"Over55Years\">Over 55 years of design excellence</div>\r\n            <div class=\"Over55YearsLine\"></div>\r\n    </div>\r\n    <div>\r\n        <app-grid-images></app-grid-images>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/services-words/services-words.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/services-words/services-words.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"EngineeringServices\">ENGINEERING DESIGN SERVICES</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/video-intro/video-intro.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/video-intro/video-intro.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"videoBackGround\">\r\n    <div class=\"videoFrame\">\r\n        <div class=\"video1\">\r\n                <iframe id=\"videoYouTube\" (window:resize)=\"onResize($event)\" width={{width}} height={{height}} [src]=\"videoPath\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Media/magazine-element/magazine-element.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Media/magazine-element/magazine-element.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"{{link}}\"  target=\"_blank\">\r\n    <div class=\"Image\">\r\n        <img src={{imagePath}}/>\r\n        <p>{{title}}</p>\r\n    </div>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Media/magazine-grid/magazine-grid.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Media/magazine-grid/magazine-grid.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"magazineClass\">\r\n        <app-magazine-element *ngFor=\"let item of items\"\r\n            [imagePath]= \"item.imagePath\"\r\n            [title] = \"item.title\"\r\n            [link] = \"item.link\"\r\n            class=\"magazineElement\">\r\n\r\n        </app-magazine-element>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Media/media-main/media-main.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Media/media-main/media-main.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-common-banner></app-common-banner>\r\n    <div class=\"mediaSpace\"></div>\r\n    <div class=\"backgroundSlogan\">\r\n        <app-common-text-slogan></app-common-text-slogan>\r\n    </div>\r\n    <app-magazine-grid></app-magazine-grid>\r\n    <div class=\"backgroundSlogan\">\r\n        <app-common-text-slogan></app-common-text-slogan>\r\n    </div>\r\n    <div>\r\n        <app-video-intro\r\n            [videoLink]=\"'https://www.youtube.com/embed/DO0GXsxPp0I'\">\r\n        </app-video-intro>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-banner/service-banner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/service-banner/service-banner.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"PictureBanner\">\r\n    <p>SERVICE</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-efficiency/service-efficiency.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/service-efficiency/service-efficiency.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=EffeciencyBanner>\r\n    <div class=\"Effeciency\">\r\n        <p>WHERE EFFICIENCY MEETS INGENUITY</p>\r\n    </div>\r\n    <div class=\"LineDivider\"></div>\r\n    <div class=\"Text1\">\r\n        Our team of engineers are focused on efficiency and economy by utilizing flexibility, exploring design alternatives without compromising code requirements and maintaining our client's budget. \r\n    </div>\r\n    <div class=\"Text2\">\r\n            We are available to resolve issues immediately by accessing your plans on our online construction document system. Signed letters of compliance are available almost instantaneously, saving your field personnel valuable time and money.\r\n    </div>\r\n</div> \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-main/service-main.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/service-main/service-main.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-common-banner></app-common-banner>\r\n    <!--<app-service-banner></app-service-banner>-->\r\n    <app-service-efficiency></app-service-efficiency>\r\n    <app-smep-titles></app-smep-titles>\r\n    <app-sevice-services></app-sevice-services>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/sevice-services/sevice-services.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/sevice-services/sevice-services.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"CARDS\">\r\n    <div class=\"card1\">\r\n        <div class= card>\r\n            <div class=\"ImageIcon\">\r\n                <div class=\"image1\">\r\n                    <img src=\"assets/Medias/Images/ServicesIconsHomePage/apartment.png\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"Title\">\r\n                <p>STRUCTURAL</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"Text\">\r\n            <div class=\"Text1\">\r\n                <ul>\r\n                    <li>On grade or Elevated Post-Tension Slab</li>\r\n                    <li>On grade or Elevated Conventional Slab</li>\r\n                    <li>Piles & Caissons</li>\r\n                    <li>Matt Concrete</li>\r\n                    <li>Floor & Roof System</li>\r\n                    <li>Walk Through Observation</li>\r\n                    <li>Construction Administrative Service</li>\r\n                    <li>Field Inquiry and Response</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"Text2 Text21\">\r\n                <p>We offer expertise in the analysis and engineering of:</p>\r\n            </div>\r\n            <div class=\"Text3\">\r\n                <ul>\r\n                    <li>Concrete (Pre-Cast & Cast in Place)</li>\r\n                    <li>Light Gauge Steel</li>\r\n                    <li>Masonry</li>\r\n                    <li>Steel </li>\r\n                    <li>Wood</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card1\">\r\n        <div class=\"card\">\r\n            <div class=\"ImageIcon\">\r\n                <div class=\"image1\">\r\n                <img src=\"assets/Medias/Images/ServicesIconsHomePage/mechanical_fan.png\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"Title\">\r\n                <p>MECHANICAL</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"Text\">\r\n            <div class=\"Text1\">\r\n                <ul>\r\n                    <li>Ventilation Systems</li>\r\n                    <li>Heating and Cooling</li>\r\n                    <li>HVAC Controls & Distribution</li>\r\n                    <li>Thermal Envelope</li>\r\n                    <li>Chilled and Cooling Water System</li>\r\n                    <li>Humidification/Dehumidification</li>\r\n                    <li>Indoor Air Quality</li>\r\n                    <li>Energy Compliance Calculations per Local Juristiction (IECC/T-24)</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"Text2 Title24\">\r\n                Title 24\r\n            </div>\r\n            <div class=\"Title24Text\">\r\n                <p>Our certified analysts are well versed in Residential and Non-Residential code standards. Our team is trained in compliance approaches and produces all necessary energy analysis documentation required to meet the California Building Energy Efficiency Standards. We select cost-effective energy design measures based on the highest code impact at the lowest cost to the builder.</p>            \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card1\">\r\n        <div class=\"card\">\r\n            <div class=\"ImageIcon\">\r\n                <div class=\"image1\">\r\n                <img src=\"assets/Medias/Images/ServicesIconsHomePage/light_bulb_icon_white.png\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"Title\">\r\n                <p>ELECTRICAL</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"Text\">\r\n            <ul>\r\n                <li>Power Distribution</li>\r\n                <li>Interior and Exterior Lighting Design/Photometric Study</li>\r\n                <li>Emergency Power System</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card1\">\r\n        <div class=\"card\">\r\n            <div class=\"ImageIcon\">\r\n                <div class=\"image1\">\r\n                <img src=\"assets/Medias/Images/ServicesIconsHomePage/plumbing_pipe_white.png\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"Title\">\r\n                <p>PLUMBING</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"Text\">\r\n            <div class=\"Text1\">\r\n                <ul>\r\n                    <li>Hot/Cold Water Distribution System</li>\r\n                    <li>Sanitary Sewer Distribution System</li>\r\n                    <li>Storm Water Distribution System</li>\r\n                    <li>Gas/Fuel Distribution System</li>\r\n                    <li>Oil/Grease Separators</li>\r\n                    <li>Pressure Booster Pumps</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/smep-titles/smep-titles.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/smep-titles/smep-titles.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"Title1\">\r\n        SMEP INTEGRATION\r\n    </div>\r\n    <div class=\"lineDivider\"></div>\r\n    <div class=\"Text1\">\r\n        Gouvis Engineering is uniquely structured into product specific teams, ensuring your project is designed and coordinated with the highest level of knowledge and experience. The Gouvis team of SMEP experts understands that efficient system operation is vital to project success. Our comprehensive audits, evaluations, inspections, code calculations and recommendations are aimed at one goal: to achieve  optimal life cycle costing.         \r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"gridFooter\">\r\n        <div class=\"part first\">\r\n            <div class=\"title\">\r\n                GOUVIS ENGINEERING\r\n            </div>\r\n            <div class=\"content\">\r\n                <p>Corporate HQ</p>\r\n                <p>15 Studebaker</p>\r\n                <p>Irvine, California 92618</p>\r\n                <p>Tel 949.752.1612</p>\r\n                <p><a href=\"https://www.google.com/maps/place/Gouvis+Engineering/@33.6499164,-117.7178383,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcdef847dfee2f:0x7aeea22a0027e43c!8m2!3d33.6499164!4d-117.7156496\">Direction</a></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"part\">\r\n            <div class=\"title\">\r\n                ABOUT US\r\n            </div>\r\n            <div class=\"content\">\r\n                Gouvis Engineering has been a trusted partner in innovation, quality and service since 1960.\r\n                <div class=\"space1\"></div>\r\n                <p><a href=\"https://www.google.com\">Contact Us</a></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"part\">\r\n            <div class=\"title\">\r\n                OUR SERVICES\r\n            </div>\r\n            <div class=\"content thirdF\">\r\n                <div class = \"middleThirdF\">\r\n                    <ul>\r\n                        <li>+ Structural</li>\r\n                        <li>+ Mechanical</li>\r\n                        <li>+ Electrical</li>\r\n                        <li>+ Plumbing</li>\r\n                        <li>+ Title 24</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"part\">\r\n            <div class=\"title\">\r\n                #FOLLOWUS\r\n            </div>\r\n            <div class=\"content\">\r\n                Follow our social media pages, view our projects and stay up to date with our latest news!\r\n                <div class=\"socialMedia\">\r\n                    <div class=\"facebook\" onclick=\"location.href='https://www.facebook.com/GouvisEngineering/'\"></div>\r\n                    <div class=\"instagram\"  onclick=\"location.href='https://www.instagram.com/Gouvis.Engineering/'\"></div>\r\n                    <div class=\"twitter\" onclick=\"location.href='https://twitter.com/GouvisGroup'\"></div>\r\n                    <div class=\"linkedin\" onclick=\"location.href='https://www.linkedin.com/company/gouvis-engineering'\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Copyright\">Copyright 2019 Gouvis Engineering, All Rights Reserved</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/logo-home-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/logo-home-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"menuClick()\">&times;</a>\r\n    <a href=\"\">Home</a>\r\n    <a href=\"about-us\">About</a>\r\n    <a href=\"services\">Services</a>\r\n    <a href=\"media\">Media</a>\r\n    <a href=\"contact\">Contact</a>\r\n</div>\r\n\r\n<div class = \"MenuBar\">\r\n    <a href=\"\">\r\n    <div class=\"logo\" >\r\n            <img src='assets/Medias/Images/CompanyLogo.svg'/>\r\n            <img src='assets/Medias/Images/CompanyLogoSmall.svg'/>\r\n    </div>\r\n    </a>\r\n        \r\n    <div class=\"menu\">\r\n        <img src=\"assets/Medias/Images/list.svg\" (click)=\"menuClickOpen()\"/>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/quote-block/quote-block.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/quote-block/quote-block.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quoteBlock\">\r\n    <div class=\"ourProfession\"><p>Our Profession</p></div>\r\n    <div class=\"quoteSentence\"><P>\"Take the best that exists and make it better.\"</P><p><em>Henry Royce</em></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_HomePage_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HomePage/main/main.component */ "./src/app/components/HomePage/main/main.component.ts");
/* harmony import */ var _components_Services_service_main_service_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Services/service-main/service-main.component */ "./src/app/components/Services/service-main/service-main.component.ts");
/* harmony import */ var _components_Media_media_main_media_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Media/media-main/media-main.component */ "./src/app/components/Media/media-main/media-main.component.ts");
/* harmony import */ var _components_Contact_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Contact/contact-main/contact-main.component */ "./src/app/components/Contact/contact-main/contact-main.component.ts");
/* harmony import */ var _components_AboutUs_about_us_main_about_us_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AboutUs/about-us-main/about-us-main.component */ "./src/app/components/AboutUs/about-us-main/about-us-main.component.ts");
/* harmony import */ var _components_AboutUs_vip_profile_vip_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AboutUs/vip-profile/vip-profile.component */ "./src/app/components/AboutUs/vip-profile/vip-profile.component.ts");









const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_HomePage_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    },
    {
        path: 'services',
        component: _components_Services_service_main_service_main_component__WEBPACK_IMPORTED_MODULE_4__["ServiceMainComponent"]
    },
    {
        path: 'media',
        component: _components_Media_media_main_media_main_component__WEBPACK_IMPORTED_MODULE_5__["MediaMainComponent"]
    },
    {
        path: 'contact',
        component: _components_Contact_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_6__["ContactMainComponent"]
    },
    {
        path: 'about-us',
        component: _components_AboutUs_about_us_main_about_us_main_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsMainComponent"]
    },
    {
        path: 'person',
        component: _components_AboutUs_vip_profile_vip_profile_component__WEBPACK_IMPORTED_MODULE_8__["VipProfileComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm2015/observable/fromEvent.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'GouvisWebsite';
        this.firstClass = {
            width: "100vw"
        };
    }
    ngOnInit() {
        this.changeSize();
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.resizeObservable$ = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize');
        this.resizeSubscription = this.resizeObservable$.subscribe(size => this.changeSize());
    }
    ngOnDestroy() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }
    changeSize() {
        let windowWidth = window.innerWidth;
        if (windowWidth >= 900) {
            this.firstClass = {
                width: "100vw"
            };
        }
        else {
            this.firstClass = {
                width: "100vw"
            };
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_HomePage_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HomePage/banner/banner.component */ "./src/app/components/HomePage/banner/banner.component.ts");
/* harmony import */ var _components_quote_block_quote_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/quote-block/quote-block.component */ "./src/app/components/quote-block/quote-block.component.ts");
/* harmony import */ var _components_HomePage_grid_images_grid_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/HomePage/grid-images/grid-images.component */ "./src/app/components/HomePage/grid-images/grid-images.component.ts");
/* harmony import */ var _components_HomePage_home_page_panel1_home_page_panel1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/HomePage/home-page-panel1/home-page-panel1.component */ "./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_logo_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/logo-home-page.component */ "./src/app/components/header/logo-home-page.component.ts");
/* harmony import */ var _components_HomePage_first_class_first_class_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/HomePage/first-class/first-class.component */ "./src/app/components/HomePage/first-class/first-class.component.ts");
/* harmony import */ var _components_HomePage_services_words_services_words_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/HomePage/services-words/services-words.component */ "./src/app/components/HomePage/services-words/services-words.component.ts");
/* harmony import */ var _components_HomePage_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/HomePage/cards/cards.component */ "./src/app/components/HomePage/cards/cards.component.ts");
/* harmony import */ var _components_HomePage_video_intro_video_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/HomePage/video-intro/video-intro.component */ "./src/app/components/HomePage/video-intro/video-intro.component.ts");
/* harmony import */ var _components_HomePage_main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/HomePage/main/main.component */ "./src/app/components/HomePage/main/main.component.ts");
/* harmony import */ var _components_Services_service_main_service_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Services/service-main/service-main.component */ "./src/app/components/Services/service-main/service-main.component.ts");
/* harmony import */ var _components_Services_service_banner_service_banner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Services/service-banner/service-banner.component */ "./src/app/components/Services/service-banner/service-banner.component.ts");
/* harmony import */ var _components_Services_service_efficiency_service_efficiency_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Services/service-efficiency/service-efficiency.component */ "./src/app/components/Services/service-efficiency/service-efficiency.component.ts");
/* harmony import */ var _components_Services_smep_titles_smep_titles_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Services/smep-titles/smep-titles.component */ "./src/app/components/Services/smep-titles/smep-titles.component.ts");
/* harmony import */ var _components_Services_sevice_services_sevice_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Services/sevice-services/sevice-services.component */ "./src/app/components/Services/sevice-services/sevice-services.component.ts");
/* harmony import */ var _components_Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Common/common-banner/common-banner.component */ "./src/app/components/Common/common-banner/common-banner.component.ts");
/* harmony import */ var _components_Media_media_main_media_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/Media/media-main/media-main.component */ "./src/app/components/Media/media-main/media-main.component.ts");
/* harmony import */ var _components_Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Common/common-text-slogan/common-text-slogan.component */ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.ts");
/* harmony import */ var _components_Media_magazine_grid_magazine_grid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Media/magazine-grid/magazine-grid.component */ "./src/app/components/Media/magazine-grid/magazine-grid.component.ts");
/* harmony import */ var _components_Media_magazine_element_magazine_element_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/Media/magazine-element/magazine-element.component */ "./src/app/components/Media/magazine-element/magazine-element.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_Contact_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/Contact/contact-main/contact-main.component */ "./src/app/components/Contact/contact-main/contact-main.component.ts");
/* harmony import */ var _components_Contact_office_location_office_location_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/Contact/office-location/office-location.component */ "./src/app/components/Contact/office-location/office-location.component.ts");
/* harmony import */ var _components_Contact_contact_grid_images_contact_grid_images_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/Contact/contact-grid-images/contact-grid-images.component */ "./src/app/components/Contact/contact-grid-images/contact-grid-images.component.ts");
/* harmony import */ var _components_AboutUs_about_us_main_about_us_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/AboutUs/about-us-main/about-us-main.component */ "./src/app/components/AboutUs/about-us-main/about-us-main.component.ts");
/* harmony import */ var _components_AboutUs_augrid_images_augrid_images_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/AboutUs/augrid-images/augrid-images.component */ "./src/app/components/AboutUs/augrid-images/augrid-images.component.ts");
/* harmony import */ var _components_AboutUs_auimage_auimage_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/AboutUs/auimage/auimage.component */ "./src/app/components/AboutUs/auimage/auimage.component.ts");
/* harmony import */ var _components_Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/Common/vip-shared-service/vip-shared-service.component */ "./src/app/components/Common/vip-shared-service/vip-shared-service.component.ts");
/* harmony import */ var _components_AboutUs_vip_profile_vip_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/AboutUs/vip-profile/vip-profile.component */ "./src/app/components/AboutUs/vip-profile/vip-profile.component.ts");
/* harmony import */ var _components_AboutUs_auculture_grid_images_auculture_grid_images_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/AboutUs/auculture-grid-images/auculture-grid-images.component */ "./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.ts");
/* harmony import */ var _components_AboutUs_auparties_grid_images_auparties_grid_images_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/AboutUs/auparties-grid-images/auparties-grid-images.component */ "./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.ts");






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_HomePage_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
            _components_quote_block_quote_block_component__WEBPACK_IMPORTED_MODULE_7__["QuoteBlockComponent"],
            _components_HomePage_grid_images_grid_images_component__WEBPACK_IMPORTED_MODULE_8__["GridImagesComponent"],
            _components_HomePage_home_page_panel1_home_page_panel1_component__WEBPACK_IMPORTED_MODULE_9__["HomePagePanel1Component"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _components_header_logo_home_page_component__WEBPACK_IMPORTED_MODULE_11__["LogoHomePageComponent"],
            _components_HomePage_first_class_first_class_component__WEBPACK_IMPORTED_MODULE_12__["FirstClassComponent"],
            _components_HomePage_services_words_services_words_component__WEBPACK_IMPORTED_MODULE_13__["ServicesWordsComponent"],
            _components_HomePage_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"],
            _components_HomePage_video_intro_video_intro_component__WEBPACK_IMPORTED_MODULE_15__["VideoIntroComponent"],
            _components_HomePage_main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"],
            _components_Services_service_main_service_main_component__WEBPACK_IMPORTED_MODULE_17__["ServiceMainComponent"],
            _components_Services_service_banner_service_banner_component__WEBPACK_IMPORTED_MODULE_18__["ServiceBannerComponent"],
            _components_Services_service_efficiency_service_efficiency_component__WEBPACK_IMPORTED_MODULE_19__["ServiceEfficiencyComponent"],
            _components_Services_smep_titles_smep_titles_component__WEBPACK_IMPORTED_MODULE_20__["SmepTitlesComponent"],
            _components_Services_sevice_services_sevice_services_component__WEBPACK_IMPORTED_MODULE_21__["SeviceServicesComponent"],
            _components_Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_22__["CommonBannerComponent"],
            _components_Media_media_main_media_main_component__WEBPACK_IMPORTED_MODULE_23__["MediaMainComponent"],
            _components_Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_24__["CommonTextSloganComponent"],
            _components_Media_magazine_grid_magazine_grid_component__WEBPACK_IMPORTED_MODULE_25__["MagazineGridComponent"],
            _components_Media_magazine_element_magazine_element_component__WEBPACK_IMPORTED_MODULE_26__["MagazineElementComponent"],
            _components_Contact_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_28__["ContactMainComponent"],
            _components_Contact_office_location_office_location_component__WEBPACK_IMPORTED_MODULE_29__["OfficeLocationComponent"],
            _components_Contact_contact_grid_images_contact_grid_images_component__WEBPACK_IMPORTED_MODULE_30__["ContactGridImagesComponent"],
            _components_AboutUs_about_us_main_about_us_main_component__WEBPACK_IMPORTED_MODULE_31__["AboutUsMainComponent"],
            _components_AboutUs_augrid_images_augrid_images_component__WEBPACK_IMPORTED_MODULE_32__["AUGridImagesComponent"],
            _components_AboutUs_auimage_auimage_component__WEBPACK_IMPORTED_MODULE_33__["AUImageComponent"],
            _components_Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_34__["VipSharedServiceComponent"],
            _components_AboutUs_vip_profile_vip_profile_component__WEBPACK_IMPORTED_MODULE_35__["VipProfileComponent"],
            _components_AboutUs_auculture_grid_images_auculture_grid_images_component__WEBPACK_IMPORTED_MODULE_36__["AUCultureGridImagesComponent"],
            _components_AboutUs_auparties_grid_images_auparties_grid_images_component__WEBPACK_IMPORTED_MODULE_37__["AUPartiesGridImagesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        providers: [
            _components_Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_34__["VipSharedServiceComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/AboutUs/about-us-main/about-us-main.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/AboutUs/about-us-main/about-us-main.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slogan1{\r\n    margin-top: 10vh;\r\n}\r\n\r\n.divider{\r\n    height: 10vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2Fib3V0LXVzLW1haW4vYWJvdXQtdXMtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWJvdXRVcy9hYm91dC11cy1tYWluL2Fib3V0LXVzLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbG9nYW4xe1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxufVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/AboutUs/about-us-main/about-us-main.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/AboutUs/about-us-main/about-us-main.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AboutUsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsMainComponent", function() { return AboutUsMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/common-banner/common-banner.component */ "./src/app/components/Common/common-banner/common-banner.component.ts");
/* harmony import */ var _Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/common-text-slogan/common-text-slogan.component */ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.ts");




let AboutUsMainComponent = class AboutUsMainComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.arr = [
            {
                title: "MANAGEMENT TEAM",
                content: "Our legacy and beliefs are united by a common goal: to produce the highest quality of design services to our clients. We feel privileged to provide services that collectively create the communities we live in."
            },
            {
                title: "COMPANY CULTURE",
                content: "Our shared interests and team building activities help us develop relationships that strengthen our bonds and create a space where trust and teamwork are at the pulse of our office culture."
            },
            {
                title: "ANNUAL COMPANY EVENTS",
                content: "Our annual events are designed to create a space where family, friends and colleagues can come together in an inclusive environment. Our traditions and annual activities are an important component of our company's legacy."
            }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.commonBanner.title = "ABOUT US";
        this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/AboutUsBanner.jpg";
        let i = 0;
        this.slogans.forEach(element => {
            element.title = this.arr[i].title;
            element.content = this.arr[i].content;
            i = i + 1;
        });
        this.cdRef.detectChanges();
    }
};
AboutUsMainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__["CommonBannerComponent"], { static: false })
], AboutUsMainComponent.prototype, "commonBanner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_3__["CommonTextSloganComponent"])
], AboutUsMainComponent.prototype, "slogans", void 0);
AboutUsMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us-main',
        template: __webpack_require__(/*! raw-loader!./about-us-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/about-us-main/about-us-main.component.html"),
        styles: [__webpack_require__(/*! ./about-us-main.component.css */ "./src/app/components/AboutUs/about-us-main/about-us-main.component.css")]
    })
], AboutUsMainComponent);

class sloganClass {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}
sloganClass.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1100px){\r\n    .parent {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr;\r\n        grid-column-gap: 5px;\r\n        grid-row-gap: 5px;\r\n        margin: auto;\r\n        height: 500px;\r\n        width: 80%;\r\n    }\r\n\r\n    .div1{\r\n        grid-area: 1 / 1 / 3 / 2; \r\n    }\r\n\r\n    .div2{\r\n        grid-area: 3 / 1 / 5 / 2; \r\n    }\r\n\r\n    .div3{\r\n        grid-area: 1 / 2 / 4 / 3; \r\n    }\r\n\r\n    .div4{\r\n        grid-area: 4 / 2 / 5 / 3; \r\n    }\r\n\r\n    .div5{\r\n        grid-area: 1 / 3 / 3 / 4; \r\n    }\r\n\r\n    .div6{\r\n        grid-area: 3 / 3 / 5 / 4; \r\n    }\r\n\r\n    .div7{\r\n        grid-area: 1 / 4 / 5 / 5; \r\n    }\r\n\r\n    .div6 {\r\n        background-color: #b1c147;\r\n        color: white;\r\n        font-family: \"Avenir-bold-font\";\r\n        font-size: 1em;\r\n        display: flex;\r\n        padding-top: 5%;\r\n        padding-left: 5%;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .div6 > div{\r\n        padding: 5%;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1100px){\r\n    .tempty1{\r\n        display: none;\r\n    }\r\n\r\n    .text1{\r\n        width: 600px;\r\n        height: 200px;\r\n        padding-top: 0%;\r\n        padding-left: 0%;\r\n        margin: 0px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .text1 > div{\r\n        padding: 0%;\r\n        margin: auto;\r\n    }\r\n\r\n    .parent {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        margin: auto;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .img1{\r\n        height: 300px;\r\n        width: 600px;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .div6 {\r\n        background-color: #b1c147;\r\n        color: white;\r\n        font-family: \"Avenir-bold-font\";\r\n        font-size: 1em;\r\n        display: flex;\r\n        padding-top: 0%;\r\n        padding-left: 0%;\r\n        flex-direction: column;\r\n    }\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    .tempty1{\r\n        display: none;\r\n    }\r\n\r\n    .text1{\r\n        width: 100%;\r\n        height: 200px;\r\n        padding-top: 0%;\r\n        padding-left: 0%;\r\n        margin: 0px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .text1 > div{\r\n        padding: 0%;\r\n        margin: auto;\r\n    }\r\n\r\n    .parent {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        margin: auto;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .img1{\r\n        height: 300px;\r\n        width: 100%;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .div6 {\r\n        background-color: #b1c147;\r\n        color: white;\r\n        font-family: \"Avenir-bold-font\";\r\n        font-size: 1em;\r\n        display: flex;\r\n        padding-top: 0%;\r\n        padding-left: 0%;\r\n        flex-direction: column;\r\n    }\r\n  \r\n}\r\n\r\n.div1 {\r\n    background-color: rgb(197, 197, 197);\r\n}\r\n\r\n.div2 {\r\n    background-image: url('culture1.jpg');\r\n    background-size: cover;\r\n    }\r\n\r\n.div3 {\r\n    background-image: url('culture2.jpg');\r\n    background-size: cover;\r\n    }\r\n\r\n.div4 {\r\n    background-color: rgb(197, 197, 197);\r\n    }\r\n\r\n.div5 {\r\n    background-image: url('culture4.jpg');\r\n    background-size: cover;\r\n    }\r\n\r\n.div7 {\r\n    background-image: url('culture3.jpg');\r\n    background-size: cover;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2F1Y3VsdHVyZS1ncmlkLWltYWdlcy9hdWN1bHR1cmUtZ3JpZC1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztRQUN0QyxtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osK0JBQStCO1FBQy9CLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0IsY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtJQUMxQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLCtCQUErQjtRQUMvQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsc0JBQXNCO0lBQzFCOztBQUVKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0kscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0Qjs7QUFDSjtJQUNJLHFDQUFzRjtJQUN0RixzQkFBc0I7SUFDdEI7O0FBQ0o7SUFDSSxvQ0FBb0M7SUFDcEM7O0FBQ0o7SUFDSSxxQ0FBc0Y7SUFDdEYsc0JBQXNCO0lBQ3RCOztBQUdKO0lBQ0kscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWJvdXRVcy9hdWN1bHR1cmUtZ3JpZC1pbWFnZXMvYXVjdWx0dXJlLWdyaWQtaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCl7XHJcbiAgICAucGFyZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG4gICAgICAgIGdyaWQtcm93LWdhcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyOyBcclxuICAgIH1cclxuXHJcbiAgICAuZGl2MntcclxuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNSAvIDI7IFxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYze1xyXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyA0IC8gMzsgXHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjR7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiA0IC8gMiAvIDUgLyAzOyBcclxuICAgIH1cclxuXHJcbiAgICAuZGl2NXtcclxuICAgICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMyAvIDQ7IFxyXG4gICAgfVxyXG5cclxuICAgIC5kaXY2e1xyXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDMgLyA1IC8gNDsgXHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjd7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDUgLyA1OyBcclxuICAgIH1cclxuXHJcbiAgICAuZGl2NiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWJvbGQtZm9udFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2NiA+IGRpdntcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KXtcclxuICAgIC50ZW1wdHkxe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dDEgPiBkaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZzF7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2NiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWJvbGQtZm9udFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAudGVtcHR5MXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0MXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dDEgPiBkaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZzF7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXY2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjMTQ3O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItYm9sZC1mb250XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG4uZGl2MSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XHJcbn1cclxuLmRpdjIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL0N1bHR1cmUvY3VsdHVyZTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4uZGl2MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Fib3V0VXMvQ3VsdHVyZS9jdWx0dXJlMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbi5kaXY0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcclxuICAgIH1cclxuLmRpdjUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL0N1bHR1cmUvY3VsdHVyZTQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbi5kaXY3IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9DdWx0dXJlL2N1bHR1cmUzLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AUCultureGridImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUCultureGridImagesComponent", function() { return AUCultureGridImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AUCultureGridImagesComponent = class AUCultureGridImagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AUCultureGridImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auculture-grid-images',
        template: __webpack_require__(/*! raw-loader!./auculture-grid-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.html"),
        styles: [__webpack_require__(/*! ./auculture-grid-images.component.css */ "./src/app/components/AboutUs/auculture-grid-images/auculture-grid-images.component.css")]
    })
], AUCultureGridImagesComponent);



/***/ }),

/***/ "./src/app/components/AboutUs/augrid-images/augrid-images.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/AboutUs/augrid-images/augrid-images.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vipImages{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 10px;\r\n    width: 1230px;\r\n    margin: auto;\r\n}\r\n\r\n@media only screen and (min-width: 1285px){\r\n    .vipImages{\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n        width: 1230px;\r\n        margin: auto;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1285px){\r\n    .vipImages{\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n        width: 920px;\r\n        margin: auto;\r\n    }   \r\n}\r\n\r\n@media only screen and (max-width: 950px){\r\n    .vipImages{\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-gap: 10px;\r\n        width: 610px;\r\n        margin: auto;\r\n    }      \r\n}\r\n\r\n@media only screen and (max-width: 630px){\r\n    .vipImages{\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-gap: 10px;\r\n        width: 300px;\r\n        margin: auto;\r\n    }        \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2F1Z3JpZC1pbWFnZXMvYXVncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Fib3V0VXMvYXVncmlkLWltYWdlcy9hdWdyaWQtaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlwSW1hZ2Vze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMTIzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODVweCl7XHJcbiAgICAudmlwSW1hZ2Vze1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMzBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4NXB4KXtcclxuICAgIC52aXBJbWFnZXN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MjBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpe1xyXG4gICAgLnZpcEltYWdlc3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICB3aWR0aDogNjEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfSAgICAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzMHB4KXtcclxuICAgIC52aXBJbWFnZXN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfSAgICAgICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/AboutUs/augrid-images/augrid-images.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/AboutUs/augrid-images/augrid-images.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AUGridImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUGridImagesComponent", function() { return AUGridImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_Jsons_CompanyVIPS_vip_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/Jsons/CompanyVIPS/vip.json */ "./src/assets/Jsons/CompanyVIPS/vip.json");
var _assets_Jsons_CompanyVIPS_vip_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/Jsons/CompanyVIPS/vip.json */ "./src/assets/Jsons/CompanyVIPS/vip.json", 1);



let AUGridImagesComponent = class AUGridImagesComponent {
    constructor() {
        this.items = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
    }
    ngOnInit() {
        console.log(_assets_Jsons_CompanyVIPS_vip_json__WEBPACK_IMPORTED_MODULE_2__["data"]);
        _assets_Jsons_CompanyVIPS_vip_json__WEBPACK_IMPORTED_MODULE_2__["data"].forEach(element => {
            let vInfo = new vipInfo(element["name"], element["title"], element["imageName"], element["description"]);
            this.items.reset([...this.items.toArray(), vInfo]);
        });
    }
};
AUGridImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-augrid-images',
        template: __webpack_require__(/*! raw-loader!./augrid-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/augrid-images/augrid-images.component.html"),
        styles: [__webpack_require__(/*! ./augrid-images.component.css */ "./src/app/components/AboutUs/augrid-images/augrid-images.component.css")]
    })
], AUGridImagesComponent);

class vipInfo {
    constructor(name, title, imageName, description) {
        this.name = name;
        this.title = title;
        this.imageName = imageName;
        this.description = description;
    }
}
vipInfo.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/components/AboutUs/auimage/auimage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/AboutUs/auimage/auimage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-rows: 9fr 1fr;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.card{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.text{\r\n    text-align: center;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    padding: 5%;\r\n}\r\n\r\n.name{\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 1.3em;\r\n    color: white;   \r\n}\r\n\r\n.title{\r\n    font-family: 'Avenir-font';\r\n    font-size: 1em;\r\n    color: white;\r\n    font-size: 0.7em;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2F1aW1hZ2UvYXVpbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Fib3V0VXMvYXVpbWFnZS9hdWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5ZnIgMWZyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJke1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1mb250JztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/AboutUs/auimage/auimage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/AboutUs/auimage/auimage.component.ts ***!
  \*****************************************************************/
/*! exports provided: AUImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUImageComponent", function() { return AUImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/vip-shared-service/vip-shared-service.component */ "./src/app/components/Common/vip-shared-service/vip-shared-service.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AUImageComponent = class AUImageComponent {
    constructor(_vipService, router) {
        this._vipService = _vipService;
        this.router = router;
    }
    ngOnInit() {
    }
    open() {
        this._vipService.name = this.name;
        this._vipService.title = this.title;
        this._vipService.imageName = this.imageName;
        this._vipService.description = this.description;
        this.router.navigateByUrl('/person');
    }
};
AUImageComponent.ctorParameters = () => [
    { type: _Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_2__["VipSharedServiceComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AUImageComponent.prototype, "imageName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AUImageComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AUImageComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AUImageComponent.prototype, "description", void 0);
AUImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auimage',
        template: __webpack_require__(/*! raw-loader!./auimage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auimage/auimage.component.html"),
        styles: [__webpack_require__(/*! ./auimage.component.css */ "./src/app/components/AboutUs/auimage/auimage.component.css")]
    })
], AUImageComponent);



/***/ }),

/***/ "./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".LINK{\r\n    background: url('https://grid.layoutit.com?id=JTwgnFI');\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: 1.2fr 1.3fr 1.2fr 0.8fr 1fr 0.3fr 1.2fr 1fr;\r\n    grid-template-rows: 1.3fr 1.5fr 0.2fr 3.9fr 1.7fr 1.1fr 1fr 5.9fr 0.1fr 1fr 1fr 2.3fr 2.1fr 0.1fr 6.1fr 4.1fr 1.8fr 1fr 1fr 0.9fr 1.1fr 1fr 1.7fr 4.3fr 0.5fr 1fr 3fr 4.1fr;\r\n    grid-template-areas: \"div1 div2 div3 div3 div3 div4 div4 div4\" \"div1 div2 div3 div3 div3 div4 div4 div4\" \"div1 div2 div3 div3 div3 div4 div4 div4\" \"div1 div2 div3 div3 div3 div4 div4 div4\" \"div1 div6 div7 div7 div8 div8 div8 div8\" \"div5 div6 div7 div7 div8 div8 div8 div8\" \"div5 div6 div7 div7 div8 div8 div8 div8\" \"div5 div6 div7 div7 div8 div8 div8 div8\" \"div9 div9 div10 div10 div10 div11 div11 div11\" \"div9 div9 div10 div10 div10 div11 div11 div11\" \"div9 div9 div10 div10 div10 div11 div11 div11\" \"div9 div9 div10 div10 div10 div11 div11 div11\" \"div9 div9 div10 div10 div10 div13 div13 div13\" \"div9 div9 div12 div12 div12 div13 div13 div13\" \"div9 div9 div12 div12 div12 div13 div13 div13\" \"div14 div14 div15 div16 div16 div16 div17 div17\" \"div14 div14 div15 div16 div16 div16 div17 div17\" \"div14 div14 div15 div16 div16 div16 div17 div17\" \"div14 div14 div15 div18 div18 div18 div18 div18\" \"div14 div14 div15 div18 div18 div18 div18 div18\" \"div19 div19 div20 div20 div21 div21 div21 div21\" \"div19 div19 div20 div20 div21 div21 div21 div21\" \"div19 div19 div20 div20 div21 div21 div21 div21\" \"div19 div19 div20 div20 div21 div21 div21 div21\" \"div22 div22 div23 div23 div23 div24 div24 div24\" \"div22 div22 div23 div23 div23 div24 div24 div24\" \"div22 div22 div23 div23 div23 div24 div24 div24\" \"div22 div22 div23 div23 div23 div24 div24 div24\";\r\n\r\n    grid-gap: 5px;\r\n    height: 1900px;\r\n    width: 80%;\r\n    margin: auto;  \r\n}\r\n\r\n.grid-container > div{\r\n    box-shadow:0 0 5px rgba(158, 158, 158, 0.8);\r\n}\r\n\r\n.title{\r\n    font-family: 'avenir-bold-font';\r\n    background: #b1c147;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.title p{\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    margin-right: auto;\r\n    margin-left: 5%;\r\n}\r\n\r\n@media only screen and (max-width: 800px){\r\n    .grid-container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        margin: auto; \r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .title{\r\n        height: 70px;\r\n        width: 100%;\r\n    }\r\n\r\n    .img1{\r\n        width: 100%;\r\n        height: 300px;\r\n    } \r\n\r\n    .title{\r\n        font-family: 'avenir-bold-font';\r\n        background: #b1c147;\r\n        color: white;\r\n        display: flex;\r\n        align-items: center;\r\n    \r\n    }\r\n    \r\n    .title p{\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        margin: auto;\r\n    }\r\n    \r\n\r\n\r\n}\r\n\r\n.div1 {\r\n    grid-area: div1;\r\n    background-image: url('parties14.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div2 { grid-area: div2; }\r\n\r\n.div3 { grid-area: div3;\r\n    background-image: url('parties8.jpg');\r\n    background-size: cover;  \r\n    background-position: top left;\r\n}\r\n\r\n.div4 { grid-area: div4;\r\n    background-image: url('parties1.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div5 { grid-area: div5;\r\n    background-image: url('parties2.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div6 { grid-area: div6;\r\n    background-image: url('parties15.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div7 { grid-area: div7;\r\n    background-image: url('parties9.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div8 { grid-area: div8;\r\n    background-image: url('parties18.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div9 { grid-area: div9;\r\n    background-image: url('parties11.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div10 { grid-area: div10;\r\n    background-image: url('parties12.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div11 { grid-area: div11;\r\n\r\n}\r\n\r\n.div12 { grid-area: div12;\r\n    background-image: url('parties17.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div13 { grid-area: div13;\r\n    background-image: url('parties16.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div14 { grid-area: div14;\r\n    background-image: url('parties13.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div15 { grid-area: div15;\r\n    background-image: url('parties10.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div16 { grid-area: div16;\r\n    background-image: url('parties19.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div17 { grid-area: div17;\r\n    background-image: url('parties20.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div18 { grid-area: div18; }\r\n\r\n.div19 { grid-area: div19;\r\n    background-image: url('parties5.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div22 { grid-area: div22;\r\n\r\n}\r\n\r\n.div20 { grid-area: div20;\r\n    background-image: url('parties4.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div21 { grid-area: div21;\r\n    background-image: url('parties6.jpg');\r\n    background-size: cover;  \r\n    background-position: center ;\r\n}\r\n\r\n.div22 { grid-area: div22;\r\n    background-image: url('parties3.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div23 { grid-area: div23;\r\n    background-image: url('parties7.jpg');\r\n    background-size: cover;  \r\n    background-position: center;\r\n}\r\n\r\n.div24{ grid-area: div24;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2F1cGFydGllcy1ncmlkLWltYWdlcy9hdXBhcnRpZXMtZ3JpZC1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrRUFBa0U7SUFDbEUsMktBQTJLO0lBQzNLLDh6Q0FBOHpDOztJQUU5ekMsYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksK0JBQStCO1FBQy9CLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7Ozs7QUFJSjs7QUFLRTtJQUNFLGVBQWU7SUFDZixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxRQUFRLGVBQWUsRUFBRTs7QUFFekIsUUFBUSxlQUFlO0lBQ3JCLHFDQUFzRjtJQUN0RixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVFLFFBQVEsZUFBZTtJQUNyQixxQ0FBc0Y7SUFDdEYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxRQUFRLGVBQWU7SUFDckIscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUUsUUFBUSxlQUFlO0lBQ3JCLHNDQUF1RjtJQUN2RixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVFLFFBQVEsZUFBZTtJQUNyQixxQ0FBc0Y7SUFDdEYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxRQUFRLGVBQWU7SUFDckIsc0NBQXVGO0lBQ3ZGLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUUsUUFBUSxlQUFlO0lBQ3JCLHNDQUF1RjtJQUN2RixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVFLFNBQVMsZ0JBQWdCO0lBQ3ZCLHNDQUF1RjtJQUN2RixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVFLFNBQVMsZ0JBQWdCOztBQUUzQjs7QUFFRSxTQUFTLGdCQUFnQjtJQUN2QixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQjtJQUN2QixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQjtJQUN2QixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQjtJQUN2QixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQjtJQUN2QixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQjtJQUN2QixzQ0FBdUY7SUFDdkYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQixFQUFFOztBQUUzQixTQUFTLGdCQUFnQjtJQUN2QixxQ0FBc0Y7SUFDdEYsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFRSxTQUFTLGdCQUFnQjs7QUFFM0I7O0FBRUUsU0FBUyxnQkFBZ0I7SUFDdkIscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUUsU0FBUyxnQkFBZ0I7SUFDdkIscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUUsU0FBUyxnQkFBZ0I7SUFDdkIscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUUsU0FBUyxnQkFBZ0I7SUFDdkIscUNBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBR0UsUUFBUSxnQkFBZ0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Fib3V0VXMvYXVwYXJ0aWVzLWdyaWQtaW1hZ2VzL2F1cGFydGllcy1ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxJTkt7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ3JpZC5sYXlvdXRpdC5jb20/aWQ9SlR3Z25GSScpO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMS4zZnIgMS4yZnIgMC44ZnIgMWZyIDAuM2ZyIDEuMmZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS4zZnIgMS41ZnIgMC4yZnIgMy45ZnIgMS43ZnIgMS4xZnIgMWZyIDUuOWZyIDAuMWZyIDFmciAxZnIgMi4zZnIgMi4xZnIgMC4xZnIgNi4xZnIgNC4xZnIgMS44ZnIgMWZyIDFmciAwLjlmciAxLjFmciAxZnIgMS43ZnIgNC4zZnIgMC41ZnIgMWZyIDNmciA0LjFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZGl2MSBkaXYyIGRpdjMgZGl2MyBkaXYzIGRpdjQgZGl2NCBkaXY0XCIgXCJkaXYxIGRpdjIgZGl2MyBkaXYzIGRpdjMgZGl2NCBkaXY0IGRpdjRcIiBcImRpdjEgZGl2MiBkaXYzIGRpdjMgZGl2MyBkaXY0IGRpdjQgZGl2NFwiIFwiZGl2MSBkaXYyIGRpdjMgZGl2MyBkaXYzIGRpdjQgZGl2NCBkaXY0XCIgXCJkaXYxIGRpdjYgZGl2NyBkaXY3IGRpdjggZGl2OCBkaXY4IGRpdjhcIiBcImRpdjUgZGl2NiBkaXY3IGRpdjcgZGl2OCBkaXY4IGRpdjggZGl2OFwiIFwiZGl2NSBkaXY2IGRpdjcgZGl2NyBkaXY4IGRpdjggZGl2OCBkaXY4XCIgXCJkaXY1IGRpdjYgZGl2NyBkaXY3IGRpdjggZGl2OCBkaXY4IGRpdjhcIiBcImRpdjkgZGl2OSBkaXYxMCBkaXYxMCBkaXYxMCBkaXYxMSBkaXYxMSBkaXYxMVwiIFwiZGl2OSBkaXY5IGRpdjEwIGRpdjEwIGRpdjEwIGRpdjExIGRpdjExIGRpdjExXCIgXCJkaXY5IGRpdjkgZGl2MTAgZGl2MTAgZGl2MTAgZGl2MTEgZGl2MTEgZGl2MTFcIiBcImRpdjkgZGl2OSBkaXYxMCBkaXYxMCBkaXYxMCBkaXYxMSBkaXYxMSBkaXYxMVwiIFwiZGl2OSBkaXY5IGRpdjEwIGRpdjEwIGRpdjEwIGRpdjEzIGRpdjEzIGRpdjEzXCIgXCJkaXY5IGRpdjkgZGl2MTIgZGl2MTIgZGl2MTIgZGl2MTMgZGl2MTMgZGl2MTNcIiBcImRpdjkgZGl2OSBkaXYxMiBkaXYxMiBkaXYxMiBkaXYxMyBkaXYxMyBkaXYxM1wiIFwiZGl2MTQgZGl2MTQgZGl2MTUgZGl2MTYgZGl2MTYgZGl2MTYgZGl2MTcgZGl2MTdcIiBcImRpdjE0IGRpdjE0IGRpdjE1IGRpdjE2IGRpdjE2IGRpdjE2IGRpdjE3IGRpdjE3XCIgXCJkaXYxNCBkaXYxNCBkaXYxNSBkaXYxNiBkaXYxNiBkaXYxNiBkaXYxNyBkaXYxN1wiIFwiZGl2MTQgZGl2MTQgZGl2MTUgZGl2MTggZGl2MTggZGl2MTggZGl2MTggZGl2MThcIiBcImRpdjE0IGRpdjE0IGRpdjE1IGRpdjE4IGRpdjE4IGRpdjE4IGRpdjE4IGRpdjE4XCIgXCJkaXYxOSBkaXYxOSBkaXYyMCBkaXYyMCBkaXYyMSBkaXYyMSBkaXYyMSBkaXYyMVwiIFwiZGl2MTkgZGl2MTkgZGl2MjAgZGl2MjAgZGl2MjEgZGl2MjEgZGl2MjEgZGl2MjFcIiBcImRpdjE5IGRpdjE5IGRpdjIwIGRpdjIwIGRpdjIxIGRpdjIxIGRpdjIxIGRpdjIxXCIgXCJkaXYxOSBkaXYxOSBkaXYyMCBkaXYyMCBkaXYyMSBkaXYyMSBkaXYyMSBkaXYyMVwiIFwiZGl2MjIgZGl2MjIgZGl2MjMgZGl2MjMgZGl2MjMgZGl2MjQgZGl2MjQgZGl2MjRcIiBcImRpdjIyIGRpdjIyIGRpdjIzIGRpdjIzIGRpdjIzIGRpdjI0IGRpdjI0IGRpdjI0XCIgXCJkaXYyMiBkaXYyMiBkaXYyMyBkaXYyMyBkaXYyMyBkaXYyNCBkaXYyNCBkaXYyNFwiIFwiZGl2MjIgZGl2MjIgZGl2MjMgZGl2MjMgZGl2MjMgZGl2MjQgZGl2MjQgZGl2MjRcIjtcclxuXHJcbiAgICBncmlkLWdhcDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxOTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvOyAgXHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciA+IGRpdntcclxuICAgIGJveC1zaGFkb3c6MCAwIDVweCByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuOCk7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnYXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjFjMTQ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4udGl0bGUgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcxe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9IFxyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBmb250LWZhbWlseTogJ2F2ZW5pci1ib2xkLWZvbnQnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiMWMxNDc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGl0bGUgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcbiAgLmRpdjEge1xyXG4gICAgZ3JpZC1hcmVhOiBkaXYxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczE0LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjIgeyBncmlkLWFyZWE6IGRpdjI7IH1cclxuICBcclxuICAuZGl2MyB7IGdyaWQtYXJlYTogZGl2MztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXM4LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcbn1cclxuICBcclxuICAuZGl2NCB7IGdyaWQtYXJlYTogZGl2NDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXMxLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjUgeyBncmlkLWFyZWE6IGRpdjU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Fib3V0VXMvUGFydGllcy9wYXJ0aWVzMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4gIFxyXG4gIC5kaXY2IHsgZ3JpZC1hcmVhOiBkaXY2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczE1LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjcgeyBncmlkLWFyZWE6IGRpdjc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Fib3V0VXMvUGFydGllcy9wYXJ0aWVzOS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4gIFxyXG4gIC5kaXY4IHsgZ3JpZC1hcmVhOiBkaXY4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczE4LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjkgeyBncmlkLWFyZWE6IGRpdjk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Fib3V0VXMvUGFydGllcy9wYXJ0aWVzMTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuICBcclxuICAuZGl2MTAgeyBncmlkLWFyZWE6IGRpdjEwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczEyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjExIHsgZ3JpZC1hcmVhOiBkaXYxMTtcclxuXHJcbn1cclxuICBcclxuICAuZGl2MTIgeyBncmlkLWFyZWE6IGRpdjEyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczE3LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjEzIHsgZ3JpZC1hcmVhOiBkaXYxMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXMxNi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4gIFxyXG4gIC5kaXYxNCB7IGdyaWQtYXJlYTogZGl2MTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Fib3V0VXMvUGFydGllcy9wYXJ0aWVzMTMuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuICBcclxuICAuZGl2MTUgeyBncmlkLWFyZWE6IGRpdjE1O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczEwLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjE2IHsgZ3JpZC1hcmVhOiBkaXYxNjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXMxOS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4gIFxyXG4gIC5kaXYxNyB7IGdyaWQtYXJlYTogZGl2MTc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Fib3V0VXMvUGFydGllcy9wYXJ0aWVzMjAuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuICBcclxuICAuZGl2MTggeyBncmlkLWFyZWE6IGRpdjE4OyB9XHJcbiAgXHJcbiAgLmRpdjE5IHsgZ3JpZC1hcmVhOiBkaXYxOTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXM1LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjIyIHsgZ3JpZC1hcmVhOiBkaXYyMjtcclxuXHJcbn1cclxuICBcclxuICAuZGl2MjAgeyBncmlkLWFyZWE6IGRpdjIwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuICBcclxuICAuZGl2MjEgeyBncmlkLWFyZWE6IGRpdjIxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9BYm91dFVzL1BhcnRpZXMvcGFydGllczYuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgO1xyXG59XHJcbiAgXHJcbiAgLmRpdjIyIHsgZ3JpZC1hcmVhOiBkaXYyMjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXMzLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgLmRpdjIzIHsgZ3JpZC1hcmVhOiBkaXYyMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQWJvdXRVcy9QYXJ0aWVzL3BhcnRpZXM3LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuICAuZGl2MjR7IGdyaWQtYXJlYTogZGl2MjQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AUPartiesGridImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUPartiesGridImagesComponent", function() { return AUPartiesGridImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AUPartiesGridImagesComponent = class AUPartiesGridImagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AUPartiesGridImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auparties-grid-images',
        template: __webpack_require__(/*! raw-loader!./auparties-grid-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.html"),
        styles: [__webpack_require__(/*! ./auparties-grid-images.component.css */ "./src/app/components/AboutUs/auparties-grid-images/auparties-grid-images.component.css")]
    })
], AUPartiesGridImagesComponent);



/***/ }),

/***/ "./src/app/components/AboutUs/vip-profile/vip-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/AboutUs/vip-profile/vip-profile.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split1{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    width: 900px;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    grid-gap: 10vw;\r\n}\r\n\r\n.image{\r\n    background-size: cover;\r\n}\r\n\r\n.about{\r\n    font-family: \"Avenir-bold-font\";\r\n    font-size: 2em;\r\n    margin-bottom: 10%;\r\n    border-bottom: 2px solid #b1c147;\r\n    padding-bottom: 5%;\r\n}\r\n\r\n.name{\r\n    font-family: \"Avenir-bold-font\";\r\n    font-size: 1.5em;\r\n}\r\n\r\n.title{\r\n    font-family: \"Avenir-font\";\r\n    margin-bottom: 5%;   \r\n    font-size: 1.2em; \r\n}\r\n\r\n.description{\r\n    font-family: \"Avenir-font\";\r\n    margin-bottom: 5%;     \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL3ZpcC1wcm9maWxlL3ZpcC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWJvdXRVcy92aXAtcHJvZmlsZS92aXAtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGl0MXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZ3JpZC1nYXA6IDEwdnc7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5hYm91dHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1ib2xkLWZvbnRcIjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiMWMxNDc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWJvbGQtZm9udFwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWZvbnRcIjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlOyAgIFxyXG4gICAgZm9udC1zaXplOiAxLjJlbTsgXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1mb250XCI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTsgICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/AboutUs/vip-profile/vip-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/AboutUs/vip-profile/vip-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: VipProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipProfileComponent", function() { return VipProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/vip-shared-service/vip-shared-service.component */ "./src/app/components/Common/vip-shared-service/vip-shared-service.component.ts");



let VipProfileComponent = class VipProfileComponent {
    constructor(_vipSe) {
        this.name = _vipSe.name;
        this.title = _vipSe.title;
        this.description = _vipSe.description;
        this.imageName = _vipSe.imageName;
    }
    ngOnInit() {
    }
};
VipProfileComponent.ctorParameters = () => [
    { type: _Common_vip_shared_service_vip_shared_service_component__WEBPACK_IMPORTED_MODULE_2__["VipSharedServiceComponent"] }
];
VipProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vip-profile',
        template: __webpack_require__(/*! raw-loader!./vip-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/vip-profile/vip-profile.component.html"),
        styles: [__webpack_require__(/*! ./vip-profile.component.css */ "./src/app/components/AboutUs/vip-profile/vip-profile.component.css")]
    })
], VipProfileComponent);



/***/ }),

/***/ "./src/app/components/Common/common-banner/common-banner.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/Common/common-banner/common-banner.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    \r\n\r\n\r\n.CommonPictureBanner{\r\n    height: 70vh;\r\n    background-size: cover;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.CommonPictureBanner > p{\r\n    font-size: 5em;\r\n    text-align: center;\r\n    margin: auto;\r\n    color: white;\r\n    text-shadow: 0px 2px 3px #555;\r\n    font-family: 'Avenir-bold-font';\r\n}\r\n\r\n@media only screen and (max-width: 480px){\r\n    .PictureBanner > p{\r\n        font-size: 3em;\r\n    } \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db21tb24vY29tbW9uLWJhbm5lci9jb21tb24tYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0NvbW1vbi9jb21tb24tYmFubmVyL2NvbW1vbi1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgXHJcblxyXG5cclxuLkNvbW1vblBpY3R1cmVCYW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uQ29tbW9uUGljdHVyZUJhbm5lciA+IHB7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDNweCAjNTU1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgICAuUGljdHVyZUJhbm5lciA+IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/Common/common-banner/common-banner.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/Common/common-banner/common-banner.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommonBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBannerComponent", function() { return CommonBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonBannerComponent = class CommonBannerComponent {
    constructor() {
    }
    ngOnInit() {
    }
    changeTitleandUrl(title, path) {
        this.title = title;
        this.imagePath = path;
        //this.elementRef.nativeElement.style.setPromperty('--pictureBackgroundUrl', path);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommonBannerComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommonBannerComponent.prototype, "imagePath", void 0);
CommonBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-banner',
        template: __webpack_require__(/*! raw-loader!./common-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Common/common-banner/common-banner.component.html"),
        styles: [__webpack_require__(/*! ./common-banner.component.css */ "./src/app/components/Common/common-banner/common-banner.component.css")]
    })
], CommonBannerComponent);



/***/ }),

/***/ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/Common/common-text-slogan/common-text-slogan.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".EffeciencyBanner{\r\n    margin-top: 10vh;\r\n    background-color: whitesmoke;\r\n    padding: 2vw;\r\n}\r\n\r\n.Effeciency{\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 2em;\r\n    margin-bottom: 5vh;\r\n    color: transparent;\r\n    background: #666666;\r\n    font-family: 'Avenir-bold-font';\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\n\r\n.LineDivider{\r\n    margin: auto;\r\n    border-bottom: 2px #b1c147 solid;\r\n    width: 20%;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n.Text1{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    font-family: 'Avenir-font';\r\n    font-size: 1.2em;\r\n    width: 70vw;\r\n    margin-bottom: 5vh;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db21tb24vY29tbW9uLXRleHQtc2xvZ2FuL2NvbW1vbi10ZXh0LXNsb2dhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0NvbW1vbi9jb21tb24tdGV4dC1zbG9nYW4vY29tbW9uLXRleHQtc2xvZ2FuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRWZmZWNpZW5jeUJhbm5lcntcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogMnZ3O1xyXG59XHJcblxyXG4uRWZmZWNpZW5jeXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxufVxyXG5cclxuLkxpbmVEaXZpZGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNiMWMxNDcgc29saWQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG4uVGV4dDF7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/Common/common-text-slogan/common-text-slogan.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CommonTextSloganComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonTextSloganComponent", function() { return CommonTextSloganComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonTextSloganComponent = class CommonTextSloganComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommonTextSloganComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommonTextSloganComponent.prototype, "content", void 0);
CommonTextSloganComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-text-slogan',
        template: __webpack_require__(/*! raw-loader!./common-text-slogan.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Common/common-text-slogan/common-text-slogan.component.html"),
        styles: [__webpack_require__(/*! ./common-text-slogan.component.css */ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.css")]
    })
], CommonTextSloganComponent);



/***/ }),

/***/ "./src/app/components/Common/vip-shared-service/vip-shared-service.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/Common/vip-shared-service/vip-shared-service.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29tbW9uL3ZpcC1zaGFyZWQtc2VydmljZS92aXAtc2hhcmVkLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Common/vip-shared-service/vip-shared-service.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/Common/vip-shared-service/vip-shared-service.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VipSharedServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipSharedServiceComponent", function() { return VipSharedServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VipSharedServiceComponent = class VipSharedServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
VipSharedServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vip-shared-service',
        template: __webpack_require__(/*! raw-loader!./vip-shared-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Common/vip-shared-service/vip-shared-service.component.html"),
        styles: [__webpack_require__(/*! ./vip-shared-service.component.css */ "./src/app/components/Common/vip-shared-service/vip-shared-service.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], VipSharedServiceComponent);



/***/ }),

/***/ "./src/app/components/Contact/contact-grid-images/contact-grid-images.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/Contact/contact-grid-images/contact-grid-images.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 5px;\r\n\r\n    width: 80%;\r\n    height: 500px;\r\n    margin: auto;\r\n    margin-top: 10vh;\r\n}\r\n\r\n.parent > div{\r\n    background-size: cover;\r\n}\r\n\r\n.div1 { \r\n        background-image: url('IMG_1962.JPG.jpg');\r\n        grid-area: 1 / 1 / 5 / 4;\r\n    }\r\n\r\n.div2 {\r\n        background-image: url('IMG_5937.JPG.jpg');\r\n        grid-area: 1 / 4 / 3 / 7; }\r\n\r\n.div3 {\r\n        background-image: url('122.JPG.jpg');\r\n        grid-area: 3 / 4 / 5 / 6; }\r\n\r\n.div4 {\r\n        background-image: url('Golf_2.jpg');\r\n        grid-area: 3 / 6 / 5 / 8; }\r\n\r\n.div5 {\r\n        background-image: url('Basketball_Team_2007.JPG.jpg');\r\n        grid-area: 3 / 8 / 5 / 10; }\r\n\r\n.div6 {\r\n        background-image: url('IMG_0110.JPG.jpg');\r\n        grid-area: 1 / 7 / 3 / 10; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db250YWN0L2NvbnRhY3QtZ3JpZC1pbWFnZXMvY29udGFjdC1ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxtQ0FBbUM7SUFDbkMsYUFBYTs7SUFFYixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUk7UUFDSSx5Q0FBd0Y7UUFDeEYsd0JBQXdCO0lBQzVCOztBQUNBO1FBQ0kseUNBQXdGO1FBQ3hGLHdCQUF3QixFQUFFOztBQUM5QjtRQUNJLG9DQUFtRjtRQUNuRix3QkFBd0IsRUFBRTs7QUFDOUI7UUFDSSxtQ0FBa0Y7UUFDbEYsd0JBQXdCLEVBQUU7O0FBQzlCO1FBQ0kscURBQW9HO1FBQ3BHLHlCQUF5QixFQUFFOztBQUMvQjtRQUNJLHlDQUF3RjtRQUN4Rix5QkFBeUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29udGFjdC9jb250YWN0LWdyaWQtaW1hZ2VzL2NvbnRhY3QtZ3JpZC1pbWFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiA1cHg7XHJcblxyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcblxyXG4ucGFyZW50ID4gZGl2e1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuICAgIC5kaXYxIHsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQ29udGFjdEltYWdlcy9JTUdfMTk2Mi5KUEcuanBnXCIpO1xyXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gNDtcclxuICAgIH1cclxuICAgIC5kaXYyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0lNR181OTM3LkpQRy5qcGdcIik7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDMgLyA3OyB9XHJcbiAgICAuZGl2MyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQ29udGFjdEltYWdlcy8xMjIuSlBHLmpwZ1wiKTtcclxuICAgICAgICBncmlkLWFyZWE6IDMgLyA0IC8gNSAvIDY7IH1cclxuICAgIC5kaXY0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0dvbGZfMi5qcGdcIik7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gNiAvIDUgLyA4OyB9XHJcbiAgICAuZGl2NSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQ29udGFjdEltYWdlcy9CYXNrZXRiYWxsX1RlYW1fMjAwNy5KUEcuanBnXCIpO1xyXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDggLyA1IC8gMTA7IH1cclxuICAgIC5kaXY2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0lNR18wMTEwLkpQRy5qcGdcIik7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gNyAvIDMgLyAxMDsgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/Contact/contact-grid-images/contact-grid-images.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/Contact/contact-grid-images/contact-grid-images.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContactGridImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactGridImagesComponent", function() { return ContactGridImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactGridImagesComponent = class ContactGridImagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactGridImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-grid-images',
        template: __webpack_require__(/*! raw-loader!./contact-grid-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Contact/contact-grid-images/contact-grid-images.component.html"),
        styles: [__webpack_require__(/*! ./contact-grid-images.component.css */ "./src/app/components/Contact/contact-grid-images/contact-grid-images.component.css")]
    })
], ContactGridImagesComponent);



/***/ }),

/***/ "./src/app/components/Contact/contact-main/contact-main.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/Contact/contact-main/contact-main.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    margin: auto;\r\n    background-color: #b1c147;\r\n    padding: 10px;\r\n    margin-top: 5vh;\r\n}\r\n\r\n.title > p{\r\n    font-family: 'Avenir-Bold-font';\r\n    font-size: 3em;\r\n    margin-left: 20%;\r\n    color: white;\r\n}\r\n\r\n.combo{\r\n    display: grid;\r\n    grid-template-columns: 4fr 6fr;\r\n    margin-top: 5vh;\r\n}\r\n\r\n.combo > div{\r\n    width: 80%;\r\n}\r\n\r\n.combo > div:nth-child(1){\r\n    margin-left: 20%;\r\n}\r\n\r\n.contact1{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.input{\r\n    border: none;\r\n    border-bottom: 2px #b1c147 solid;\r\n    font-family: \"Avenir-font\";\r\n    font-size: 1.5em;\r\n    margin-top: 5vh;\r\n    color: gray;\r\n    width: 60%;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.inputButton{\r\n    border: none;\r\n    background-color: #b1c147;\r\n    color: white;\r\n    font-family: \"Avenir-bold-font\";\r\n    font-size: 1.5em;\r\n    margin-top: 5vh; \r\n    width: 150px; \r\n    height: 60px;\r\n}\r\n\r\n.inputButton:hover{\r\n    cursor: pointer;\r\n    background-color: rgb(77, 77, 77);\r\n    color: #b1c147;\r\n\r\n}\r\n\r\n.location{\r\n    font-family: \"Avenir-font\";\r\n}\r\n\r\n.text{\r\n    font-family: \"Avenir-font\";\r\n    font-size: 0.8em;\r\n}\r\n\r\n.text:nth-child(1){\r\n    margin-bottom: 2vh;\r\n    font-family: \"Avenir-bold-font\";\r\n    margin-top: 5vh;\r\n    font-size: 1em;\r\n}\r\n\r\n.text:nth-child(3) a{\r\n    text-decoration: none;\r\n    color: black;\r\n\r\n}\r\n\r\n.text:nth-child(3) a:hover{\r\n    color: rgb(0, 89, 255);\r\n    \r\n}\r\n\r\n.divider{\r\n    border-top: 1px black solid;\r\n    margin-top: 3vh;\r\n    margin-bottom: 3vh;\r\n    width: 60%;\r\n}\r\n\r\n.slogan{\r\n    background-color: whitesmoke;\r\n    padding-top: 5vh;\r\n    padding-bottom: 5vh;\r\n    margin-top: 10vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db250YWN0L2NvbnRhY3QtbWFpbi9jb250YWN0LW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1tYWluL2NvbnRhY3QtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuXHJcbi50aXRsZSA+IHB7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1Cb2xkLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29tYm97XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgNmZyO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uY29tYm8gPiBkaXZ7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uY29tYm8gPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmNvbnRhY3Qxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCAjYjFjMTQ3IHNvbGlkO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWZvbnRcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4uaW5wdXRCdXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjMTQ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWJvbGQtZm9udFwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDsgXHJcbiAgICB3aWR0aDogMTUwcHg7IFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uaW5wdXRCdXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XHJcbiAgICBjb2xvcjogI2IxYzE0NztcclxuXHJcbn1cclxuXHJcbi5sb2NhdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1mb250XCI7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWZvbnRcIjtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi50ZXh0Om50aC1jaGlsZCgxKXtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1ib2xkLWZvbnRcIjtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4udGV4dDpudGgtY2hpbGQoMykgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi50ZXh0Om50aC1jaGlsZCgzKSBhOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxuICAgIFxyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5zbG9nYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/Contact/contact-main/contact-main.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/Contact/contact-main/contact-main.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMainComponent", function() { return ContactMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/common-banner/common-banner.component */ "./src/app/components/Common/common-banner/common-banner.component.ts");
/* harmony import */ var _Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/common-text-slogan/common-text-slogan.component */ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.ts");




let ContactMainComponent = class ContactMainComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.commonBanner.title = "CONTACT";
        this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/ContactBanner.jpg";
        this.commonTextSloganS.title = "CAREERS";
        this.commonTextSloganS.content = "Throughout the years, we have worked hard to create a healthy work environment that encourages teamwork, open lines of communication and collaboration. Gouvis Engineering believes that by empowering our employees to succeed, they take personal ownership in their role and are inspired to work more efficiently and effectively.";
        this.cdRef.detectChanges();
    }
};
ContactMainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__["CommonBannerComponent"], { static: false })
], ContactMainComponent.prototype, "commonBanner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_3__["CommonTextSloganComponent"], { static: false })
], ContactMainComponent.prototype, "commonTextSloganS", void 0);
ContactMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-main',
        template: __webpack_require__(/*! raw-loader!./contact-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Contact/contact-main/contact-main.component.html"),
        styles: [__webpack_require__(/*! ./contact-main.component.css */ "./src/app/components/Contact/contact-main/contact-main.component.css")]
    })
], ContactMainComponent);



/***/ }),

/***/ "./src/app/components/Contact/office-location/office-location.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/Contact/office-location/office-location.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29udGFjdC9vZmZpY2UtbG9jYXRpb24vb2ZmaWNlLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/Contact/office-location/office-location.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Contact/office-location/office-location.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OfficeLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeLocationComponent", function() { return OfficeLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OfficeLocationComponent = class OfficeLocationComponent {
    constructor() { }
    ngOnInit() {
    }
};
OfficeLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-office-location',
        template: __webpack_require__(/*! raw-loader!./office-location.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Contact/office-location/office-location.component.html"),
        styles: [__webpack_require__(/*! ./office-location.component.css */ "./src/app/components/Contact/office-location/office-location.component.css")]
    })
], OfficeLocationComponent);



/***/ }),

/***/ "./src/app/components/HomePage/banner/banner.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/HomePage/banner/banner.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bannerImage{\r\n    height: 80vh;\r\n}\r\n\r\n.slider1{\r\n    width: 800%;\r\n    height:100vh;\r\n    position: relative;\r\n    overflow: hidden;\r\n    -webkit-animation: 20s slidy infinite;\r\n            animation: 20s slidy infinite; \r\n}\r\n\r\n.slider1 > div{\r\n    float: left;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n.image1{\r\n    background-image: url('Slideshow-1.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.image2{\r\n    background-image: url('Slideshow-2.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.image3{\r\n    background-image: url('Slideshow-2.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.image4{\r\n    background-image: url('Slide-show-3.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.image5{\r\n    background-image: url('Slide-show-5.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.image6{\r\n    background-image: url('Slide-show-9.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.image7{\r\n    background-image: url('Slideshow-1.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.slider{\r\n    overflow: hidden;\r\n}\r\n\r\n@-webkit-keyframes slidy {\r\n    0% {  left: 0vw; }\r\n    10% { left: 0vw; }\r\n    20% { left: -100vw; }\r\n    30% { left: -100vw; }\r\n    40% { left: -200vw; }\r\n    50% { left: -200vw; }\r\n    60% { left: -300vw; }\r\n    70% { left: -300vw; }\r\n    80% { left: -400vw; }\r\n    90% { left: -400vw; }\r\n    100%{ left: -500vw;}\r\n    }\r\n\r\n@keyframes slidy {\r\n    0% {  left: 0vw; }\r\n    10% { left: 0vw; }\r\n    20% { left: -100vw; }\r\n    30% { left: -100vw; }\r\n    40% { left: -200vw; }\r\n    50% { left: -200vw; }\r\n    60% { left: -300vw; }\r\n    70% { left: -300vw; }\r\n    80% { left: -400vw; }\r\n    90% { left: -400vw; }\r\n    100%{ left: -500vw;}\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBc0Y7SUFDdEYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0NBQXNGO0lBQ3RGLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdDQUFzRjtJQUN0RixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBdUY7SUFDdkYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXVGO0lBQ3ZGLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF1RjtJQUN2RixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3Q0FBc0Y7SUFDdEYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksTUFBTSxTQUFTLEVBQUU7SUFDakIsTUFBTSxTQUFTLEVBQUU7SUFDakIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLENBQUM7SUFDbkI7O0FBWko7SUFDSSxNQUFNLFNBQVMsRUFBRTtJQUNqQixNQUFNLFNBQVMsRUFBRTtJQUNqQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksQ0FBQztJQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lckltYWdle1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uc2xpZGVyMXtcclxuICAgIHdpZHRoOiA4MDAlO1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogMjBzIHNsaWR5IGluZmluaXRlOyBcclxufVxyXG5cclxuLnNsaWRlcjEgPiBkaXZ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5pbWFnZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Jhbm5lckltYWdlcy9TbGlkZXNob3ctMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5pbWFnZTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Jhbm5lckltYWdlcy9TbGlkZXNob3ctMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5pbWFnZTN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Jhbm5lckltYWdlcy9TbGlkZXNob3ctMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5pbWFnZTR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Jhbm5lckltYWdlcy9TbGlkZS1zaG93LTMuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaW1hZ2U1e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2xpZGUtc2hvdy01LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmltYWdlNntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQmFubmVySW1hZ2VzL1NsaWRlLXNob3ctOS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5pbWFnZTd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Jhbm5lckltYWdlcy9TbGlkZXNob3ctMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWR5IHtcclxuICAgIDAlIHsgIGxlZnQ6IDB2dzsgfVxyXG4gICAgMTAlIHsgbGVmdDogMHZ3OyB9XHJcbiAgICAyMCUgeyBsZWZ0OiAtMTAwdnc7IH1cclxuICAgIDMwJSB7IGxlZnQ6IC0xMDB2dzsgfVxyXG4gICAgNDAlIHsgbGVmdDogLTIwMHZ3OyB9XHJcbiAgICA1MCUgeyBsZWZ0OiAtMjAwdnc7IH1cclxuICAgIDYwJSB7IGxlZnQ6IC0zMDB2dzsgfVxyXG4gICAgNzAlIHsgbGVmdDogLTMwMHZ3OyB9XHJcbiAgICA4MCUgeyBsZWZ0OiAtNDAwdnc7IH1cclxuICAgIDkwJSB7IGxlZnQ6IC00MDB2dzsgfVxyXG4gICAgMTAwJXsgbGVmdDogLTUwMHZ3O31cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/HomePage/banner/banner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/HomePage/banner/banner.component.ts ***!
  \****************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/banner/banner.component.html"),
        styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/components/HomePage/banner/banner.component.css")]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/components/HomePage/cards/cards.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/HomePage/cards/cards.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.houseFrame > div{\r\n    margin: auto;\r\n    align-items: center;\r\n    display: grid;\r\n    grid-template-rows:  5fr 1fr;\r\n    grid-auto-columns: 1fr;\r\n    border: 3px solid #f7f7f7;\r\n    box-shadow: 0 0 3px gray;\r\n    /*border-top-left-radius: 2vw;*/\r\n    /*border-top-right-radius: 2vw;*/\r\n    transition: all 300ms;\r\n    background-color: #b1c147;\r\n}\r\n\r\n.houseFrame > div:hover{\r\n\r\n    transform: translateY(-2%);\r\n    \r\n}\r\n\r\n.houseFrame > div > div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.houseFrame > div > div> img{\r\n    \r\n    height: 70px;\r\n    max-width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.houseFrame > div > div:nth-child(1){\r\n\r\n}\r\n\r\n.houseFrame > div > div:nth-child(2){\r\n    /*border: 5px solid red;*/\r\n    background-color: #f7f7f7;\r\n    border-top:  3px solid #b1c147;\r\n}\r\n\r\n.houseFrame > div > div> p{\r\n    margin: auto;\r\n    padding: 10%;\r\n    text-align: center;\r\n    color: transparent;\r\n    background: #666666;\r\n    text-align: center;\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 1em;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\n\r\n.houseFrame{\r\n    \r\n    display: grid;\r\n    grid-gap: 2%;\r\n    margin: auto;\r\n    margin-top: 20vh;\r\n    align-items: start;\r\n    margin-bottom: 20vh;\r\n}\r\n\r\n@media only screen and (max-width: 700px){\r\n    .houseFrame{\r\n        max-width: 100vw;\r\n        grid-template-columns: 1fr 1fr;\r\n\r\n    }\r\n\r\n    .houseFrame > div{\r\n        max-height: 200px;\r\n        min-height: 200px;\r\n        max-width: 150px;\r\n        min-width: 150px\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 701px){\r\n    .houseFrame{\r\n        max-width: 100vw;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n\r\n    }\r\n\r\n    .houseFrame > div{\r\n        max-height: 200px;\r\n        min-height: 200px;\r\n        max-width: 150px;\r\n        min-width: 150px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 921px){\r\n    .houseFrame{\r\n        max-width: 100vw;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n\r\n    }\r\n\r\n    .houseFrame > div{\r\n        max-height: 200px;\r\n        min-height: 200px;\r\n        max-width: 200px;\r\n        min-width: 200px\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1224px){\r\n    .houseFrame{\r\n        max-width: 70vw;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n\r\n    }\r\n\r\n    .houseFrame > div{\r\n        max-height: 200px;\r\n        min-height: 200px;\r\n        max-width: 200px;\r\n        min-width: 200px\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQiw4QkFBOEI7O0lBRWxDOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEI7SUFDSjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHNDQUFzQzs7SUFFMUM7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBS0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixzQ0FBc0M7O0lBRTFDOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysc0NBQXNDOztJQUUxQzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaG91c2VGcmFtZSA+IGRpdntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgNWZyIDFmcjtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCBncmF5O1xyXG4gICAgLypib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAydnc7Ki9cclxuICAgIC8qYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJ2dzsqL1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcclxufVxyXG5cclxuLmhvdXNlRnJhbWUgPiBkaXY6aG92ZXJ7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XHJcbiAgICBcclxufVxyXG5cclxuLmhvdXNlRnJhbWUgPiBkaXYgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3VzZUZyYW1lID4gZGl2ID4gZGl2PiBpbWd7XHJcbiAgICBcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmhvdXNlRnJhbWUgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG5cclxufVxyXG5cclxuLmhvdXNlRnJhbWUgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgLypib3JkZXI6IDVweCBzb2xpZCByZWQ7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBib3JkZXItdG9wOiAgM3B4IHNvbGlkICNiMWMxNDc7XHJcbn1cclxuXHJcbi5ob3VzZUZyYW1lID4gZGl2ID4gZGl2PiBwe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbn1cclxuXHJcbi5ob3VzZUZyYW1le1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDIlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC5ob3VzZUZyYW1le1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaG91c2VGcmFtZSA+IGRpdntcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHhcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpe1xyXG4gICAgLmhvdXNlRnJhbWV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmhvdXNlRnJhbWUgPiBkaXZ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MjFweCl7XHJcbiAgICAuaG91c2VGcmFtZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaG91c2VGcmFtZSA+IGRpdntcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjI0cHgpe1xyXG4gICAgLmhvdXNlRnJhbWV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaG91c2VGcmFtZSA+IGRpdntcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/HomePage/cards/cards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/HomePage/cards/cards.component.ts ***!
  \**************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



let CardsComponent = class CardsComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
    }
};
CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: __webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/cards/cards.component.html"),
        styles: [__webpack_require__(/*! ./cards.component.css */ "./src/app/components/HomePage/cards/cards.component.css")]
    })
], CardsComponent);



/***/ }),

/***/ "./src/app/components/HomePage/first-class/first-class.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/HomePage/first-class/first-class.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".RibbonTile1{\r\n    background-color: #f7f7f7;\r\n    padding-top: 10vh;\r\n    padding-bottom: 20vh;\r\n\r\n}\r\n\r\n\r\n.lineBreak1{\r\n    margin: auto;\r\n    border-bottom: #b1c147 .5vh solid;\r\n    width: 20%;\r\n    margin-top: 5vh;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n\r\n.mottoHomePage{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 70%;\r\n    color: transparent;\r\n    background: #666666;\r\n    margin: auto;\r\n    margin-top: 9.5vh;\r\n    text-align: center;\r\n    font-family: 'helvetica-light';\r\n    font-size: 1em;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\n\r\n\r\n@media only screen and (max-width: 800px){\r\n\r\n\r\n    .firstClass{\r\n        margin: auto;\r\n        text-align: center;\r\n        width: 70%;\r\n        color: transparent;\r\n        background: #666666;\r\n        margin: auto;\r\n        margin-top: 12vh;\r\n        text-align: center;\r\n        font-family: 'Avenir-bold-font';\r\n        font-size: 3em;\r\n        -webkit-background-clip: text;\r\n                background-clip: text;\r\n        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n    }\r\n\r\n}\r\n\r\n\r\n@media only screen and (min-width: 801px){\r\n\r\n\r\n    .firstClass{\r\n        margin: auto;\r\n        text-align: center;\r\n        width: 70%;\r\n        color: transparent;\r\n        background: #666666;\r\n        margin: auto;\r\n        margin-top: 12vh;\r\n        text-align: center;\r\n        font-family: 'Avenir-bold-font';\r\n        font-size: 4em;\r\n        -webkit-background-clip: text;\r\n                background-clip: text;\r\n        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n        font-weight: bolder;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9maXJzdC1jbGFzcy9maXJzdC1jbGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOzs7QUFHQTs7O0lBR0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixjQUFjO1FBQ2QsNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsOENBQThDO0lBQ2xEOztBQUVKOzs7QUFFQTs7O0lBR0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixjQUFjO1FBQ2QsNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsOENBQThDO1FBQzlDLG1CQUFtQjtJQUN2Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvZmlyc3QtY2xhc3MvZmlyc3QtY2xhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5SaWJib25UaWxlMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHZoO1xyXG5cclxufVxyXG5cclxuXHJcbi5saW5lQnJlYWsxe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2IxYzE0NyAuNXZoIHNvbGlkO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuLm1vdHRvSG9tZVBhZ2V7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDkuNXZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EtbGlnaHQnO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG5cclxuICAgIC5maXJzdENsYXNze1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJ2aDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcclxuICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpe1xyXG5cclxuXHJcbiAgICAuZmlyc3RDbGFzc3tcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEydmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/HomePage/first-class/first-class.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/HomePage/first-class/first-class.component.ts ***!
  \**************************************************************************/
/*! exports provided: FirstClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstClassComponent", function() { return FirstClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirstClassComponent = class FirstClassComponent {
    constructor() { }
    ngOnInit() {
    }
};
FirstClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-class',
        template: __webpack_require__(/*! raw-loader!./first-class.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/first-class/first-class.component.html"),
        styles: [__webpack_require__(/*! ./first-class.component.css */ "./src/app/components/HomePage/first-class/first-class.component.css")]
    })
], FirstClassComponent);



/***/ }),

/***/ "./src/app/components/HomePage/grid-images/grid-images.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/HomePage/grid-images/grid-images.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media only screen and (min-width: 601px){\r\n    .homePageBottomShow{\r\n        display: grid;\r\n        grid-gap: 1vh;\r\n        height: 120vh;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n        grid-template-areas: \"picture1 picture1 picture2 picture2 picture3\" \"picture4 picture5 picture5 picture6 picture6\" \"picture7 picture7 picture8 picture8 picture9\";\r\n\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    .homePageBottomShow{\r\n        display: inline-block;\r\n    }\r\n\r\n    .homePageBottomShow > div{\r\n        margin-top: 3vh;\r\n        height: 50vh;\r\n    }\r\n\r\n    .homePageBottomShow > div:nth-child(3){\r\n        display: none;\r\n    }\r\n\r\n    .homePageBottomShow > div:nth-child(4){\r\n        display: none;\r\n    }\r\n\r\n    .homePageBottomShow > div:nth-child(9){\r\n        display: none;\r\n    }\r\n}\r\n\r\n.homePageBottomShow > div .text1, .textDivider1 {\r\n    transition-timing-function: linear;\r\n    transition: .5s;\r\n    color: rgba(255, 255, 255, 0);\r\n    font-family: 'Avenir-font';\r\n}\r\n\r\n.homePageBottomShow > div .textDivider1 {\r\n    transition-timing-function: linear;\r\n    transition: .5s;\r\n    border-bottom-color: rgba(255, 255, 255, 0);\r\n    width: 0%;\r\n}\r\n\r\n.homePageBottomShow > div:hover .text1 {\r\n    color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.homePageBottomShow > div:hover .textDivider1 {\r\n    border-bottom-color: rgba(255, 255, 255, 1);\r\n    width: 100%;\r\n}\r\n\r\n.homePageBottomShow > div{\r\n    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.TextDecor1 {\r\n    margin: auto;\r\n    height: 100%;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition-timing-function: linear;\r\n    transition: .5s;\r\n}\r\n\r\n.TextDecor1:hover{\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.TextDecor2{\r\n    font-family: Futura-Font;\r\n    font-size: 1em;\r\n    color: white;\r\n}\r\n\r\n.TextDecor2>.text1{\r\n    padding: 2vh;\r\n}\r\n\r\n.textDivider1{\r\n    border-bottom: #ffffff 2px solid;\r\n}\r\n\r\n.picture1 { grid-area: picture1; \r\n    background-image: url('ABC_House_3.0.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.picture2 { grid-area: picture2; \r\n    background-image: url('Wallis_Ranch_Residential.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.picture3 { grid-area: picture3; \r\n    background-color: #c2c2c2;;\r\n}\r\n\r\n.picture4 { grid-area: picture4;\r\n    background-color: #c2c2c2;;\r\n}\r\n\r\n.picture5 { grid-area: picture5;\r\n    background-image: url('Carlisle_at_Parasol_Park.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.picture6 { grid-area: picture6;\r\n    background-image: url('Royal_Oaks_Courtyard_Villas_2.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.picture7 { grid-area: picture7;\r\n    background-image: url('Skye-Palm_Springs_2.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.picture8 { grid-area: picture8;\r\n    background-image: url('Revelle_at_Clancy_Lane.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.picture9 { grid-area: picture9;\r\n    background-color: #c2c2c2;;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9ncmlkLWltYWdlcy9ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ2IsMENBQTBDO1FBQzFDLCtCQUErQjtRQUMvQixpS0FBaUs7O0lBRXJLO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxTQUFTO0FBQ2I7O0FBR0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBR0E7SUFDSSwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBLFlBQVksbUJBQW1CO0lBQzNCLDBDQUFvRztJQUNwRyxzQkFBc0I7QUFDMUI7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IscURBQStHO0lBQy9HLHNCQUFzQjtBQUMxQjs7QUFFQSxZQUFZLG1CQUFtQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IseUJBQXlCO0FBQzdCOztBQUVBLFlBQVksbUJBQW1CO0lBQzNCLHFEQUErRztJQUMvRyxzQkFBc0I7QUFDMUI7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IsMERBQW9IO0lBQ3BILHNCQUFzQjtBQUMxQjs7QUFFQSxZQUFZLG1CQUFtQjtJQUMzQixnREFBMEc7SUFDMUcsc0JBQXNCO0FBQzFCOztBQUVBLFlBQVksbUJBQW1CO0lBQzNCLG1EQUE2RztJQUM3RyxzQkFBc0I7QUFDMUI7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9ncmlkLWltYWdlcy9ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xyXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvd3tcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxdmg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBpY3R1cmUxIHBpY3R1cmUxIHBpY3R1cmUyIHBpY3R1cmUyIHBpY3R1cmUzXCIgXCJwaWN0dXJlNCBwaWN0dXJlNSBwaWN0dXJlNSBwaWN0dXJlNiBwaWN0dXJlNlwiIFwicGljdHVyZTcgcGljdHVyZTcgcGljdHVyZTggcGljdHVyZTggcGljdHVyZTlcIjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvd3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lUGFnZUJvdHRvbVNob3cgPiBkaXY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZVBhZ2VCb3R0b21TaG93ID4gZGl2Om50aC1jaGlsZCg5KXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG9tZVBhZ2VCb3R0b21TaG93ID4gZGl2IC50ZXh0MSwgLnRleHREaXZpZGVyMSB7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1mb250JztcclxufVxyXG5cclxuLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdiAudGV4dERpdmlkZXIxIHtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgd2lkdGg6IDAlO1xyXG59XHJcblxyXG5cclxuLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdjpob3ZlciAudGV4dDEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcblxyXG4uaG9tZVBhZ2VCb3R0b21TaG93ID4gZGl2OmhvdmVyIC50ZXh0RGl2aWRlcjEge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZVBhZ2VCb3R0b21TaG93ID4gZGl2e1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uVGV4dERlY29yMSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLlRleHREZWNvcjE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5UZXh0RGVjb3Iye1xyXG4gICAgZm9udC1mYW1pbHk6IEZ1dHVyYS1Gb250O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5UZXh0RGVjb3IyPi50ZXh0MXtcclxuICAgIHBhZGRpbmc6IDJ2aDtcclxufVxyXG5cclxuXHJcbi50ZXh0RGl2aWRlcjF7XHJcbiAgICBib3JkZXItYm90dG9tOiAjZmZmZmZmIDJweCBzb2xpZDtcclxufVxyXG5cclxuLnBpY3R1cmUxIHsgZ3JpZC1hcmVhOiBwaWN0dXJlMTsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9BQkNfSG91c2VfMy4wLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnBpY3R1cmUyIHsgZ3JpZC1hcmVhOiBwaWN0dXJlMjsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9XYWxsaXNfUmFuY2hfUmVzaWRlbnRpYWwuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGljdHVyZTMgeyBncmlkLWFyZWE6IHBpY3R1cmUzOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7O1xyXG59XHJcblxyXG4ucGljdHVyZTQgeyBncmlkLWFyZWE6IHBpY3R1cmU0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjs7XHJcbn1cclxuXHJcbi5waWN0dXJlNSB7IGdyaWQtYXJlYTogcGljdHVyZTU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9DYXJsaXNsZV9hdF9QYXJhc29sX1BhcmsuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGljdHVyZTYgeyBncmlkLWFyZWE6IHBpY3R1cmU2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9JbWFnZXNHcmlkQm90dG9tSG9tZVBhZ2UvUm95YWxfT2Frc19Db3VydHlhcmRfVmlsbGFzXzIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGljdHVyZTcgeyBncmlkLWFyZWE6IHBpY3R1cmU3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9JbWFnZXNHcmlkQm90dG9tSG9tZVBhZ2UvU2t5ZS1QYWxtX1NwcmluZ3NfMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5waWN0dXJlOCB7IGdyaWQtYXJlYTogcGljdHVyZTg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9SZXZlbGxlX2F0X0NsYW5jeV9MYW5lLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnBpY3R1cmU5IHsgZ3JpZC1hcmVhOiBwaWN0dXJlOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/HomePage/grid-images/grid-images.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/HomePage/grid-images/grid-images.component.ts ***!
  \**************************************************************************/
/*! exports provided: GridImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridImagesComponent", function() { return GridImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



let GridImagesComponent = class GridImagesComponent {
    constructor() {
        this.offset = 1000; //this equals to height of viewport
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
    }
    onResize(event) {
        this.offset = window.innerHeight;
        this.offsetString = "data-aos=\"zoom-in\" data-aos-delay=\"" + this.offset + "\"";
        aos__WEBPACK_IMPORTED_MODULE_2__["refresh"]();
    }
};
GridImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid-images',
        template: __webpack_require__(/*! raw-loader!./grid-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/grid-images/grid-images.component.html"),
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [__webpack_require__(/*! ./grid-images.component.css */ "./src/app/components/HomePage/grid-images/grid-images.component.css")]
    })
], GridImagesComponent);



/***/ }),

/***/ "./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.Panel1Text1{\r\n        \r\n    margin : auto;\r\n    text-align: left;\r\n    font-size: 2em;\r\n    color: #ffffff;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);\r\n    font-family: 'Futura-Font';\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n\r\n}\r\n\r\n.Panel1Text2{\r\n    margin : auto;\r\n    text-align: left;\r\n    font-size: 1.5em;\r\n    color: #ffffff;\r\n    font-family: 'Sans-condensed-font';\r\n    padding-bottom: 5%;\r\n    margin-top: 5%;\r\n}\r\n\r\n.PanelTextUnder{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n\r\n.Panel1Divider{\r\n    border-bottom: 2px dotted white;\r\n}\r\n\r\n@media only screen and (min-width: 801px){\r\n\r\n    .PanelText{\r\n        background-color: #b1c147;\r\n        display: flex;\r\n    }\r\n\r\n    .Panel1{\r\n        margin-top: 5vh;\r\n        margin-bottom: 5vh;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 1vh;\r\n        grid-auto-rows: 1fr;\r\n        min-height: 50vh;\r\n    }\r\n\r\n    .Panel1Image{\r\n        background-image: url('HomePagePicture1.jpg');\r\n        background-size: cover;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px){\r\n\r\n    .PanelText{\r\n        background: linear-gradient(rgba(177, 193, 71, 0.8),rgba(177, 193, 71, 0.8)), url('HomePagePicture1.jpg');\r\n        background-size: cover;\r\n        display: flex;\r\n    }\r\n\r\n    .Panel1{\r\n        margin-top: 5vh;\r\n        margin-bottom: 5vh;\r\n        min-height: 50vh;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9ob21lLXBhZ2UtcGFuZWwxL2hvbWUtcGFnZS1wYW5lbDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLDJFQUEyRTtJQUMzRSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFHQTs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksNkNBQThFO1FBQzlFLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBOztJQUVJO1FBQ0kseUdBQTBJO1FBQzFJLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvaG9tZS1wYWdlLXBhbmVsMS9ob21lLXBhZ2UtcGFuZWwxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLlBhbmVsMVRleHQxe1xyXG4gICAgICAgIFxyXG4gICAgbWFyZ2luIDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMSksIDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGdXR1cmEtRm9udCc7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcblxyXG59XHJcblxyXG4uUGFuZWwxVGV4dDJ7XHJcbiAgICBtYXJnaW4gOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fucy1jb25kZW5zZWQtZm9udCc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLlBhbmVsVGV4dFVuZGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLlBhbmVsMURpdmlkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCl7XHJcblxyXG4gICAgLlBhbmVsVGV4dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjMTQ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLlBhbmVsMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMXZoO1xyXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIH1cclxuXHJcbiAgICAuUGFuZWwxSW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Ib21lUGFnZVBpY3R1cmUxLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgIC5QYW5lbFRleHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTc3LCAxOTMsIDcxLCAwLjgpLHJnYmEoMTc3LCAxOTMsIDcxLCAwLjgpKSwgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Ib21lUGFnZVBpY3R1cmUxLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAuUGFuZWwxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.ts ***!
  \************************************************************************************/
/*! exports provided: HomePagePanel1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePanel1Component", function() { return HomePagePanel1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePagePanel1Component = class HomePagePanel1Component {
    constructor() { }
    ngOnInit() {
    }
};
HomePagePanel1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page-panel1',
        template: __webpack_require__(/*! raw-loader!./home-page-panel1.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.html"),
        styles: [__webpack_require__(/*! ./home-page-panel1.component.css */ "./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.css")]
    })
], HomePagePanel1Component);



/***/ }),

/***/ "./src/app/components/HomePage/main/main.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/HomePage/main/main.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    background: lightgray;\r\n    padding: 1em;\r\n    display: grid;\r\n    grid-template-columns: 70% 30%;\r\n    /*\r\n    grid-column-gap: 1em;\r\n    grid-row-gap: 1em;\r\n    */\r\n    grid-gap: 1em;\r\n}\r\n\r\n.bannerImagesHomePage{\r\n    height: 100vh;\r\n    width: 100%;\r\n    /*\r\n    border-bottom: 1vh;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: #b1c147;\r\n    */\r\n}\r\n\r\n.Over55Years{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 70%;\r\n    color: transparent;\r\n    background: #666666;\r\n    margin: auto;\r\n    margin-top: 12vh;\r\n    text-align: center;\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 5vh;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\n\r\n.Over55YearsLine{\r\n    border-bottom: #b1c147 solid .7vh;\r\n    width: 20vw;\r\n    margin: auto;\r\n    margin-top: 10vh;\r\n    margin-bottom: 10vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qjs7O0tBR0M7SUFDRCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWDs7OztLQUlDO0FBQ0w7O0FBS0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7O0FBSUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICAgIC8qXHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMWVtO1xyXG4gICAgKi9cclxuICAgIGdyaWQtZ2FwOiAxZW07XHJcbn1cclxuXHJcbi5iYW5uZXJJbWFnZXNIb21lUGFnZXtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qXHJcbiAgICBib3JkZXItYm90dG9tOiAxdmg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiMWMxNDc7XHJcbiAgICAqL1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uT3ZlcjU1WWVhcnN7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEydmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiA1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG59XHJcblxyXG5cclxuXHJcbi5PdmVyNTVZZWFyc0xpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiAjYjFjMTQ3IHNvbGlkIC43dmg7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/HomePage/main/main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/HomePage/main/main.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/HomePage/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/HomePage/services-words/services-words.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/HomePage/services-words/services-words.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".EngineeringServices{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 70%;\r\n    color: transparent;\r\n    background: #666666;\r\n    margin: auto;\r\n    margin-top: 12vh;\r\n    text-align: center;\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 2em;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9zZXJ2aWNlcy13b3Jkcy9zZXJ2aWNlcy13b3Jkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9zZXJ2aWNlcy13b3Jkcy9zZXJ2aWNlcy13b3Jkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkVuZ2luZWVyaW5nU2VydmljZXN7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEydmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/HomePage/services-words/services-words.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/HomePage/services-words/services-words.component.ts ***!
  \********************************************************************************/
/*! exports provided: ServicesWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWordsComponent", function() { return ServicesWordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesWordsComponent = class ServicesWordsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services-words',
        template: __webpack_require__(/*! raw-loader!./services-words.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/services-words/services-words.component.html"),
        styles: [__webpack_require__(/*! ./services-words.component.css */ "./src/app/components/HomePage/services-words/services-words.component.css")]
    })
], ServicesWordsComponent);



/***/ }),

/***/ "./src/app/components/HomePage/video-intro/video-intro.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/HomePage/video-intro/video-intro.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoBackGround{\r\n\r\n    margin: auto;\r\n    margin-top: 10vh;\r\n\r\n}\r\n\r\n.video1{\r\n\r\n}\r\n\r\n.videoFrame{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS92aWRlby1pbnRyby92aWRlby1pbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUVBOztBQUVBOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS92aWRlby1pbnRyby92aWRlby1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvQmFja0dyb3VuZHtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG5cclxufVxyXG5cclxuLnZpZGVvMXtcclxuXHJcbn1cclxuXHJcbi52aWRlb0ZyYW1le1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/HomePage/video-intro/video-intro.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/HomePage/video-intro/video-intro.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIntroComponent", function() { return VideoIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let VideoIntroComponent = class VideoIntroComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.videoLink = "https://www.youtube.com/embed/hbET2TKiaEI?vq=hd1080";
    }
    ngOnInit() {
        this.videoPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink + "?vq=hd1080");
        this.onResize(null);
    }
    onResize(event) {
        this.width = window.innerWidth * 90 / 100;
        this.height = this.width * 9 / 16;
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.videoPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink + "?vq=hd1080");
    }
};
VideoIntroComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VideoIntroComponent.prototype, "videoLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VideoIntroComponent.prototype, "videoPath", void 0);
VideoIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-intro',
        template: __webpack_require__(/*! raw-loader!./video-intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/video-intro/video-intro.component.html"),
        styles: [__webpack_require__(/*! ./video-intro.component.css */ "./src/app/components/HomePage/video-intro/video-intro.component.css")]
    })
], VideoIntroComponent);



/***/ }),

/***/ "./src/app/components/Media/magazine-element/magazine-element.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/Media/magazine-element/magazine-element.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Image{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.Image img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Image p{\r\n    padding: 10px;\r\n    color: #b1c147;\r\n    font-family: 'Avenir-font';\r\n}\r\n\r\na:link{\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tYWdhemluZS1lbGVtZW50L21hZ2F6aW5lLWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTWVkaWEvbWFnYXppbmUtZWxlbWVudC9tYWdhemluZS1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5JbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLkltYWdlIHB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNiMWMxNDc7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1mb250JztcclxufVxyXG5cclxuYTpsaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/Media/magazine-element/magazine-element.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Media/magazine-element/magazine-element.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MagazineElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineElementComponent", function() { return MagazineElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MagazineElementComponent = class MagazineElementComponent {
    constructor() { }
    ngOnInit() {
        //this.imagePath = "https://penpubinc.com/magazine/online/2017/BD/Jan/files/assets/cover/1.jpg";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MagazineElementComponent.prototype, "imagePath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MagazineElementComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MagazineElementComponent.prototype, "title", void 0);
MagazineElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-magazine-element',
        template: __webpack_require__(/*! raw-loader!./magazine-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Media/magazine-element/magazine-element.component.html"),
        styles: [__webpack_require__(/*! ./magazine-element.component.css */ "./src/app/components/Media/magazine-element/magazine-element.component.css")]
    })
], MagazineElementComponent);



/***/ }),

/***/ "./src/app/components/Media/magazine-grid/magazine-grid.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/Media/magazine-grid/magazine-grid.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".magazineClass{\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    width: 80%;\r\n    margin-top: 10vh;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.magazineElement{\r\n    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 200px;\r\n    width: 150px;\r\n}\r\n\r\n@media screen and (max-width: 1170px){\r\n    .magazineClass{\r\n        margin: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 30px;\r\n        width: 80%;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px){\r\n    .magazineClass{\r\n        margin: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        grid-gap: 30px;\r\n        width: 80%;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    .magazineClass{\r\n        margin: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-gap: 30px;\r\n        width: 80%;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 560px){\r\n    .magazineClass{\r\n        margin: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-gap: 30px;\r\n        width: 80%;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 376px){\r\n    .magazineClass{\r\n        margin: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 80%;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tYWdhemluZS1ncmlkL21hZ2F6aW5lLWdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBFQUEwRTtJQUMxRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDBDQUEwQztRQUMxQyxjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsY0FBYztRQUNkLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLGNBQWM7UUFDZCxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL01lZGlhL21hZ2F6aW5lLWdyaWQvbWFnYXppbmUtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hZ2F6aW5lQ2xhc3N7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4ubWFnYXppbmVFbGVtZW50e1xyXG4gICAgYm94LXNoYWRvdzowIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCl7XHJcbiAgICAubWFnYXppbmVDbGFzc3tcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAubWFnYXppbmVDbGFzc3tcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgLm1hZ2F6aW5lQ2xhc3N7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpe1xyXG4gICAgLm1hZ2F6aW5lQ2xhc3N7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCl7XHJcbiAgICAubWFnYXppbmVDbGFzc3tcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/Media/magazine-grid/magazine-grid.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/Media/magazine-grid/magazine-grid.component.ts ***!
  \***************************************************************************/
/*! exports provided: MagazineGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineGridComponent", function() { return MagazineGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_Jsons_Magazines_BuilderAndDeveloper_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/Jsons/Magazines/BuilderAndDeveloper.json */ "./src/assets/Jsons/Magazines/BuilderAndDeveloper.json");
var _assets_Jsons_Magazines_BuilderAndDeveloper_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/Jsons/Magazines/BuilderAndDeveloper.json */ "./src/assets/Jsons/Magazines/BuilderAndDeveloper.json", 1);



let MagazineGridComponent = class MagazineGridComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    ngOnInit() {
        this.magazineDict = new Map();
        _assets_Jsons_Magazines_BuilderAndDeveloper_json__WEBPACK_IMPORTED_MODULE_2__["data"].forEach(element => {
            if (element["key"] != "ilink" && element["key"] != "comment") {
                this.magazineDict.set(element["key"], element["value"]);
            }
            else if (element["key"] == "ilink") {
                this.thumbNailPath = element["value"];
            }
        });
        this.items = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        let i = 0;
        this.magazineDict.forEach((value, key) => {
            //console.log(this.magazines);
            let magInfo = new magazineInfo(value, key, value + this.thumbNailPath);
            this.items.reset([...this.items.toArray(), magInfo]);
            i++;
        });
        //this.cdRef.detectChanges();
    }
    //@ViewChildren(MagazineElementComponent) magazines : QueryList<MagazineElementComponent>;
    //@ViewChild(MagazineElementComponent, {static:false}) m1 : MagazineElementComponent;
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    }
};
MagazineGridComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
MagazineGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-magazine-grid',
        template: __webpack_require__(/*! raw-loader!./magazine-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Media/magazine-grid/magazine-grid.component.html"),
        styles: [__webpack_require__(/*! ./magazine-grid.component.css */ "./src/app/components/Media/magazine-grid/magazine-grid.component.css")]
    })
], MagazineGridComponent);

class magazineInfo {
    constructor(link, title, imagePath) {
        this.link = link;
        this.title = title;
        this.imagePath = imagePath;
    }
}
magazineInfo.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/components/Media/media-main/media-main.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/Media/media-main/media-main.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mediaSpace{\r\n    margin-top: 10vh;\r\n}\r\n\r\n.backgroundSlogan{\r\n    background: whitesmoke;\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tZWRpYS1tYWluL21lZGlhLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tZWRpYS1tYWluL21lZGlhLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpYVNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxufVxyXG5cclxuLmJhY2tncm91bmRTbG9nYW57XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/Media/media-main/media-main.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Media/media-main/media-main.component.ts ***!
  \*********************************************************************/
/*! exports provided: MediaMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMainComponent", function() { return MediaMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/common-banner/common-banner.component */ "./src/app/components/Common/common-banner/common-banner.component.ts");
/* harmony import */ var _Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/common-text-slogan/common-text-slogan.component */ "./src/app/components/Common/common-text-slogan/common-text-slogan.component.ts");




let MediaMainComponent = class MediaMainComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.arr = [
            {
                title: "RECOGNITION OF EXCELLENCE",
                content: "Gouvis Engineering Consulting Group has had the privilege to design projects that have received notoriety and have been featured in many publications such as Builder and Developer Magazine and The Green Home Magazine. We are honored to have built long lasting relationships with talented builders and architects whose work has impacted our communities and have won a multitude of awards in celebration of their design excellence."
            },
            {
                title: "HARLAND CASE STUDY",
                content: "The Harland of West Hollywood is a 37 unit town home development which provided its own design challenges to our team. Floor to ceiling glass walls open onto private outdoor terraces. Custom staircases composed of glass, exposed wood and steel create a timeless modern aesthetic. Our CEO Saeed Bekam met with the Simpson Strong Tie team to discuss his approach to this design and how the implementation of Simpson products helped us adhere to our client's design requests and reduce construction costs."
            }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.commonBanner.title = "MEDIA";
        this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/MediaBanner.jpg";
        let i = 0;
        this.commonTextSloganS.forEach(element => {
            element.title = this.arr[i].title;
            element.content = this.arr[i].content;
            i = i + 1;
        });
        this.cdRef.detectChanges();
    }
};
MediaMainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__["CommonBannerComponent"], { static: false })
], MediaMainComponent.prototype, "commonBanner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_Common_common_text_slogan_common_text_slogan_component__WEBPACK_IMPORTED_MODULE_3__["CommonTextSloganComponent"])
], MediaMainComponent.prototype, "commonTextSloganS", void 0);
MediaMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-media-main',
        template: __webpack_require__(/*! raw-loader!./media-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Media/media-main/media-main.component.html"),
        styles: [__webpack_require__(/*! ./media-main.component.css */ "./src/app/components/Media/media-main/media-main.component.css")]
    })
], MediaMainComponent);

class sloganClass {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}
sloganClass.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/components/Services/service-banner/service-banner.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Services/service-banner/service-banner.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PictureBanner{\r\n    --backgroundImageUrl: url('ServiceBanner.jpg');\r\n    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%),\r\n    var(--backgroundImageUrl);\r\n    height: 70vh;\r\n    background-size: cover;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.PictureBanner > p{\r\n    font-size: 5em;\r\n    text-align: center;\r\n    margin: auto;\r\n    color: white;\r\n    text-shadow: 0px 2px 3px #555;\r\n    font-family: 'Avenir-bold-font';\r\n}\r\n\r\n@media only screen and (max-width: 480px){\r\n    .PictureBanner > p{\r\n        font-size: 3em;\r\n    } \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWJhbm5lci9zZXJ2aWNlLWJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQTRGO0lBQzVGOzZCQUN5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWJhbm5lci9zZXJ2aWNlLWJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlBpY3R1cmVCYW5uZXJ7XHJcbiAgICAtLWJhY2tncm91bmRJbWFnZVVybDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2VydmljZUJhbm5lci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDIxMiwyNTUsMCkgMTAwJSksXHJcbiAgICB2YXIoLS1iYWNrZ3JvdW5kSW1hZ2VVcmwpO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uUGljdHVyZUJhbm5lciA+IHB7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDNweCAjNTU1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgICAuUGljdHVyZUJhbm5lciA+IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/Services/service-banner/service-banner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/Services/service-banner/service-banner.component.ts ***!
  \********************************************************************************/
/*! exports provided: ServiceBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBannerComponent", function() { return ServiceBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceBannerComponent = class ServiceBannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-banner',
        template: __webpack_require__(/*! raw-loader!./service-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-banner/service-banner.component.html"),
        styles: [__webpack_require__(/*! ./service-banner.component.css */ "./src/app/components/Services/service-banner/service-banner.component.css")]
    })
], ServiceBannerComponent);



/***/ }),

/***/ "./src/app/components/Services/service-efficiency/service-efficiency.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/Services/service-efficiency/service-efficiency.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".EffeciencyBanner{\r\n    margin-top: 10vh;\r\n    background-color: whitesmoke;\r\n    padding: 2vw;\r\n}\r\n\r\n.Effeciency{\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 2em;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n.LineDivider{\r\n    margin: auto;\r\n    border-bottom: 2px #b1c147 solid;\r\n    width: 20%;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n.Text1{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    font-family: 'Avenir-font';\r\n    font-size: 1.2em;\r\n    width: 70vw;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n.Text2{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    font-family: 'Avenir-font';\r\n    font-size: 1.2em;\r\n    width: 70vw;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWVmZmljaWVuY3kvc2VydmljZS1lZmZpY2llbmN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWVmZmljaWVuY3kvc2VydmljZS1lZmZpY2llbmN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRWZmZWNpZW5jeUJhbm5lcntcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogMnZ3O1xyXG59XHJcblxyXG4uRWZmZWNpZW5jeXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuLkxpbmVEaXZpZGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNiMWMxNDcgc29saWQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG4uVGV4dDF7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG4uVGV4dDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/Services/service-efficiency/service-efficiency.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/Services/service-efficiency/service-efficiency.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ServiceEfficiencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEfficiencyComponent", function() { return ServiceEfficiencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceEfficiencyComponent = class ServiceEfficiencyComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceEfficiencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-efficiency',
        template: __webpack_require__(/*! raw-loader!./service-efficiency.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-efficiency/service-efficiency.component.html"),
        styles: [__webpack_require__(/*! ./service-efficiency.component.css */ "./src/app/components/Services/service-efficiency/service-efficiency.component.css")]
    })
], ServiceEfficiencyComponent);



/***/ }),

/***/ "./src/app/components/Services/service-main/service-main.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/Services/service-main/service-main.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2VydmljZXMvc2VydmljZS1tYWluL3NlcnZpY2UtbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/Services/service-main/service-main.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/Services/service-main/service-main.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMainComponent", function() { return ServiceMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/common-banner/common-banner.component */ "./src/app/components/Common/common-banner/common-banner.component.ts");



let ServiceMainComponent = class ServiceMainComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log(this.commonBanner);
        this.commonBanner.title = "SERVICE";
        this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/ServiceBanner.jpg";
        this.cdRef.detectChanges();
    }
};
ServiceMainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_Common_common_banner_common_banner_component__WEBPACK_IMPORTED_MODULE_2__["CommonBannerComponent"], { static: false })
], ServiceMainComponent.prototype, "commonBanner", void 0);
ServiceMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-main',
        template: __webpack_require__(/*! raw-loader!./service-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-main/service-main.component.html"),
        styles: [__webpack_require__(/*! ./service-main.component.css */ "./src/app/components/Services/service-main/service-main.component.css")]
    })
], ServiceMainComponent);



/***/ }),

/***/ "./src/app/components/Services/sevice-services/sevice-services.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/Services/sevice-services/sevice-services.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".CARDS{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-column-gap: 2vw;\r\n    margin: auto;\r\n    margin-top: 10vh;\r\n    margin-bottom: 10vh;\r\n    width: 70%;\r\n}\r\n\r\n.card1{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.card{\r\n    padding: 2vw;\r\n}\r\n\r\n.Text{\r\n    margin-top: 2vh;\r\n    border-right: 1px rgb(179, 179, 179) solid;\r\n    font-family: \"Avenir-font\";\r\n    padding-right: 2vw;\r\n    height: 600px;\r\n}\r\n\r\n.ImageIcon{\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: #b1c147;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n}\r\n\r\n.image1{\r\n    margin: auto;\r\n    width: 50px;\r\n    height:50px;\r\n}\r\n\r\n.ImageIcon > div> img{\r\n    width: 50px;\r\n    height:50px;\r\n    margin: auto;\r\n}\r\n\r\n.Title{\r\n    font-family: 'Avenir-bold-font';\r\n    color: white;\r\n    background-color: #b1c147;\r\n    margin: auto;\r\n    margin-top: 2vh;\r\n    text-align: center;\r\n    width: 80%;\r\n    padding: .5vh 1vw .5vh 1vw;\r\n    font-size: .75em;\r\n}\r\n\r\nul{\r\n    list-style-type: disc;\r\n}\r\n\r\n.Text21{\r\n    font-family: 'Avenir-bold-font';\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n}\r\n\r\n.Title24{\r\n    font-family: 'Avenir-bold-font';\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n    text-align: center;\r\n}\r\n\r\n.Title24Text{\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 1200px){\r\n    .CARDS{\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 2vw;\r\n        grid-row-gap: 2vh;\r\n        margin: auto;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n        width: 90%;\r\n    } \r\n\r\n    .Title{\r\n        display: none;\r\n        border: none;\r\n        height: auto;\r\n\r\n    }\r\n\r\n    .Text{\r\n        border: none;\r\n        height: auto;\r\n    }\r\n\r\n    .card1{\r\n        align-items: center;\r\n        background: whitesmoke;\r\n        padding: 10px;\r\n    }\r\n\r\n\r\n    \r\n    ul {\r\n        list-style-position: inside;\r\n     }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 840px){\r\n    .CARDS{\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-column-gap: 2vw;\r\n        grid-row-gap: 10vh;\r\n        margin: auto;\r\n        margin-top: 10vh;\r\n        margin-bottom: 10vh;\r\n        width: 90%;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXZpY2Utc2VydmljZXMvc2V2aWNlLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjs7OztJQUlBO1FBQ0ksMkJBQTJCO0tBQzlCOztBQUVMOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsVUFBVTtJQUNkOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2VydmljZXMvc2V2aWNlLXNlcnZpY2VzL3NldmljZS1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNBUkRTe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5jYXJkMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxufVxyXG5cclxuLlRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCByZ2IoMTc5LCAxNzksIDE3OSkgc29saWQ7XHJcbiAgICBmb250LWZhbWlseTogXCJBdmVuaXItZm9udFwiO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLkltYWdlSWNvbntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjMTQ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5pbWFnZTF7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG59XHJcblxyXG4uSW1hZ2VJY29uID4gZGl2PiBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uVGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAuNXZoIDF2dyAuNXZoIDF2dztcclxuICAgIGZvbnQtc2l6ZTogLjc1ZW07XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG4uVGV4dDIxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4uVGl0bGUyNHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XHJcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlRpdGxlMjRUZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAuQ0FSRFN7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAydmg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfSBcclxuXHJcbiAgICAuVGl0bGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuVGV4dHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkMXtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xyXG4gICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgLkNBUkRTe1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxMHZoO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/Services/sevice-services/sevice-services.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/Services/sevice-services/sevice-services.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SeviceServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeviceServicesComponent", function() { return SeviceServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SeviceServicesComponent = class SeviceServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SeviceServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sevice-services',
        template: __webpack_require__(/*! raw-loader!./sevice-services.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Services/sevice-services/sevice-services.component.html"),
        styles: [__webpack_require__(/*! ./sevice-services.component.css */ "./src/app/components/Services/sevice-services/sevice-services.component.css")]
    })
], SeviceServicesComponent);



/***/ }),

/***/ "./src/app/components/Services/smep-titles/smep-titles.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/Services/smep-titles/smep-titles.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Title1{\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: \"Avenir-bold-font\";\r\n    font-size: 2em;\r\n\r\n    margin-top: 5vh;\r\n    margin-bottom: 3vh;\r\n}\r\n\r\n.lineDivider{\r\n    margin: auto;\r\n    border-bottom: 2px #b1c147 solid;\r\n    margin-bottom: 3vh;\r\n    width: 20%;\r\n}\r\n\r\n.Text1{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50vw;\r\n    font-family: \"helvetica-light\";\r\n    font-size: 1.2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zbWVwLXRpdGxlcy9zbWVwLXRpdGxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYzs7SUFFZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2VydmljZXMvc21lcC10aXRsZXMvc21lcC10aXRsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaXRsZTF7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJBdmVuaXItYm9sZC1mb250XCI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbn1cclxuXHJcbi5saW5lRGl2aWRlcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCAjYjFjMTQ3IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLlRleHQxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYS1saWdodFwiO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/Services/smep-titles/smep-titles.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/Services/smep-titles/smep-titles.component.ts ***!
  \**************************************************************************/
/*! exports provided: SmepTitlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmepTitlesComponent", function() { return SmepTitlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SmepTitlesComponent = class SmepTitlesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SmepTitlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smep-titles',
        template: __webpack_require__(/*! raw-loader!./smep-titles.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Services/smep-titles/smep-titles.component.html"),
        styles: [__webpack_require__(/*! ./smep-titles.component.css */ "./src/app/components/Services/smep-titles/smep-titles.component.css")]
    })
], SmepTitlesComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background-color: whitesmoke;\r\n    margin-top: 5vh;\r\n    padding: 1vh;\r\n    padding-top: 3vh;\r\n    box-shadow: 0px -5px 6px -2px rgb(204, 204, 204);\r\n    background-repeat: repeat;\r\n    display: block;\r\n}\r\n\r\n@media only screen and (max-width: 951px){\r\n    .gridFooter{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 952px){\r\n    .gridFooter{\r\n        margin: auto;\r\n        width: 80vw;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n.part{\r\n    text-align: center;\r\n    border-left: #b1c147 2px solid;\r\n}\r\n\r\n.thirdF{\r\n    text-align: left;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.middleThirdF{\r\n    margin: auto;\r\n}\r\n\r\n.first{\r\n    border-left: 0px;\r\n}\r\n\r\n.title{\r\n    margin: auto;\r\n    width: 70%;\r\n    color: transparent;\r\n    background: #b1c147;\r\n    font-family: 'Avenir-bold-font';\r\n    font-size: 1.2em;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);    \r\n    margin-bottom: 5%;\r\n    font-weight: bolder;\r\n}\r\n\r\n.Copyright{\r\n    margin: auto;\r\n    text-align: center;\r\n    padding: 4vh;\r\n    color: transparent;\r\n    background: #666666;\r\n    margin: auto;\r\n    font-family: 'Avenir-font';\r\n    font-size: 100%;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);   \r\n}\r\n\r\n.content{\r\n    margin: auto;\r\n    width: 100%;\r\n    color: transparent;\r\n    background: #666666;\r\n    margin: auto;\r\n    font-family: 'Avenir-font';\r\n    font-size: 80%;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);    \r\n}\r\n\r\na {\r\n    margin: auto;\r\n    width: 100%;\r\n    color: transparent;\r\n    background: #b1c147;\r\n    margin: auto;\r\n    font-family: 'Avenir-font';\r\n    font-size: 1.2em;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);    \r\n}\r\n\r\n.socialMedia{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-column-gap: .5vw;\r\n    height: 25px;\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-top: \r\n}\r\n\r\n.facebook{\r\n    background-image: url('facebook.svg');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.twitter{\r\n    background-image: url('twitter.svg');\r\n    background-size: 100% 100%;    \r\n}\r\n\r\n.instagram{\r\n    background-image: url('instagram.svg');\r\n    background-size: 100% 100%;    \r\n}\r\n\r\n.linkedin{\r\n    background-image: url('linkedin.svg');\r\n    background-size: 100% 100%;    \r\n}\r\n\r\n.socialMedia > div{\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.space1{\r\n    padding: 2vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNDQUFzQztJQUMxQztBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLHFDQUErRTtJQUMvRSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQ0FBOEU7SUFDOUUsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksc0NBQWdGO0lBQ2hGLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFDQUErRTtJQUMvRSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgcGFkZGluZzogMXZoO1xyXG4gICAgcGFkZGluZy10b3A6IDN2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtNXB4IDZweCAtMnB4IHJnYigyMDQsIDIwNCwgMjA0KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTFweCl7XHJcbiAgICAuZ3JpZEZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1MnB4KXtcclxuICAgIC5ncmlkRm9vdGVye1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFydHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAjYjFjMTQ3IDJweCBzb2xpZDtcclxufVxyXG5cclxuLnRoaXJkRntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1pZGRsZVRoaXJkRntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZpcnN0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6ICNiMWMxNDc7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7ICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uQ29weXJpZ2h0e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHZoO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgICBcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1mb250JztcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgICAgXHJcbn1cclxuXHJcbmEge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjFjMTQ3O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItZm9udCc7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgICAgXHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogLjV2dztcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IFxyXG59XHJcblxyXG4uZmFjZWJvb2t7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Zvb3Rlckljb25zL2ZhY2Vib29rLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi50d2l0dGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Gb290ZXJJY29ucy90d2l0dGVyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7ICAgIFxyXG59XHJcbi5pbnN0YWdyYW17XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Zvb3Rlckljb25zL2luc3RhZ3JhbS5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyAgICBcclxufVxyXG5cclxuLmxpbmtlZGlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Gb290ZXJJY29ucy9saW5rZWRpbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyAgICBcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhID4gZGl2e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLnNwYWNlMXtcclxuICAgIHBhZGRpbmc6IDJ2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/logo-home-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/header/logo-home-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  max-width: 100%;\r\n  max-height: auto;\r\n}\r\n\r\n.MenuBar{\r\n  top: 10vh;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100px;\r\n  border-bottom: #b1c147 2px solid;\r\n}\r\n\r\n.logo{\r\n  z-index: 1;\r\n  cursor:pointer;\r\n  margin-left: 5vw;\r\n  width: 300px;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #b1c147;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    border-left: #afb9b2 0vw solid;\r\n  }\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #333333;\r\n    display: block;\r\n    transition: 0.3s;\r\n    padding-top: 10vh;\r\n  }\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    font-size: 36px;\r\n    padding-top: 10vh;\r\n  }\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n\r\n@media only screen and (max-width: 480px){\r\n    .logo >img:nth-child(1) {\r\n      display: none;\r\n    }\r\n\r\n    .logo >img:nth-child(2){\r\n      height: 50px;\r\n    }\r\n\r\n    .menu{\r\n      margin-left: auto;\r\n      max-width: auto;\r\n    }\r\n\r\n  }\r\n\r\n.menu{\r\n    margin-right: 10vw;\r\n    z-index: 1;\r\n    cursor:pointer;\r\n    margin-left: auto;\r\n    width: 30px;\r\n  }\r\n\r\n@media only screen and (min-width: 481px){\r\n      .logo>img:nth-child(2){\r\n        display: none;\r\n      }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbG9nby1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFHQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztJQUM1QixZQUFZLGVBQWUsQ0FBQztFQUM5Qjs7QUFFQTtJQUNFO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7O0VBRUY7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUdBO01BQ0k7UUFDRSxhQUFhO01BQ2Y7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28taG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5NZW51QmFye1xyXG4gIHRvcDogMTB2aDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1ib3R0b206ICNiMWMxNDcgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjMTQ3O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6ICNhZmI5YjIgMHZ3IHNvbGlkO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAgIC5sb2dvID5pbWc6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyA+aW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51e1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5tZW51e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KXtcclxuICAgICAgLmxvZ28+aW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/logo-home-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/header/logo-home-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoHomePageComponent", function() { return LogoHomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoHomePageComponent = class LogoHomePageComponent {
    constructor() { }
    ngOnInit() {
    }
    menuClick() {
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenav").style.borderLeft = "#afb9b2 0vw solid";
    }
    menuClickOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.borderLeft = "#afb9b2 0.5vw solid";
    }
};
LogoHomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo-home-page',
        template: __webpack_require__(/*! raw-loader!./logo-home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/logo-home-page.component.html"),
        styles: [__webpack_require__(/*! ./logo-home-page.component.css */ "./src/app/components/header/logo-home-page.component.css")]
    })
], LogoHomePageComponent);



/***/ }),

/***/ "./src/app/components/quote-block/quote-block.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/quote-block/quote-block.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quoteBlock{\r\n    padding: 5vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /*border: .3vh solid red;*/\r\n    /*border-right: 5px solid #b1c147;*/\r\n\r\n}\r\n\r\n/*\r\n.quoteSentence{\r\n    border: .5vw double #b1c147;\r\n    border-top-right-radius: 5vw;\r\n    border-bottom-left-radius: 5vw;\r\n    padding: 2vw;\r\n    font-family: 'OldeEnglish-Font';\r\n    font-size: 5vh;\r\n    color: #868686;\r\n    text-align: center;\r\n    background-size: cover;\r\n    background-color: rgb(225, 247, 192);\r\n    text-shadow: 1px 1px 2px black;\r\n}\r\n*/\r\n\r\n.author {\r\n    margin: auto;\r\n    text-align: right;\r\n    padding-right: 2vw;\r\n}\r\n\r\n.quoteSentence\r\n{\r\n    border: .5vw #b1c147;\r\n    padding: 10%;\r\n    font-family: 'Catherine-font';\r\n    font-size: 3vh;\r\n    color: #381f1f;\r\n    text-align: center;\r\n    background-size: cover;\r\n    background-color: rgb(225, 247, 192);\r\n    text-shadow: 2px 2px 2px rgba(206,89,55,0);\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n.quoteSentence > p:nth-child(2){\r\n    text-align: right;\r\n    font-size: 2.5vh;\r\n}\r\n\r\n.quoteSentence:hover {\r\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n  }\r\n\r\n.ourProfession {\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 100%;\r\n    color: transparent;\r\n    background: #666666;\r\n    margin: auto;\r\n    margin-bottom: 12vh;\r\n    text-align: center;\r\n    font-family: 'Catherine-font';\r\n    font-size: 2vw;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdW90ZS1ibG9jay9xdW90ZS1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixtQ0FBbUM7O0FBRXZDOztBQUVBOzs7Ozs7Ozs7Ozs7OztDQWNDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsa0VBQWtFO0lBQ2xFLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzRUFBc0U7RUFDeEU7O0FBRUY7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4Q0FBOEM7RUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1b3RlLWJsb2NrL3F1b3RlLWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGVCbG9ja3tcclxuICAgIHBhZGRpbmc6IDV2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qYm9yZGVyOiAuM3ZoIHNvbGlkIHJlZDsqL1xyXG4gICAgLypib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYjFjMTQ3OyovXHJcblxyXG59XHJcblxyXG4vKlxyXG4ucXVvdGVTZW50ZW5jZXtcclxuICAgIGJvcmRlcjogLjV2dyBkb3VibGUgI2IxYzE0NztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1dnc7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1dnc7XHJcbiAgICBwYWRkaW5nOiAydnc7XHJcbiAgICBmb250LWZhbWlseTogJ09sZGVFbmdsaXNoLUZvbnQnO1xyXG4gICAgZm9udC1zaXplOiA1dmg7XHJcbiAgICBjb2xvcjogIzg2ODY4NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyNDcsIDE5Mik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuKi9cclxuXHJcbi5hdXRob3Ige1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XHJcbn1cclxuXHJcbi5xdW90ZVNlbnRlbmNlXHJcbntcclxuICAgIGJvcmRlcjogLjV2dyAjYjFjMTQ3O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRoZXJpbmUtZm9udCc7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxuICAgIGNvbG9yOiAjMzgxZjFmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDI0NywgMTkyKTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDIwNiw4OSw1NSwwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG59XHJcblxyXG4ucXVvdGVTZW50ZW5jZSA+IHA6bnRoLWNoaWxkKDIpe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIuNXZoO1xyXG59XHJcblxyXG4ucXVvdGVTZW50ZW5jZTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gIH1cclxuXHJcbi5vdXJQcm9mZXNzaW9uIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEydmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0NhdGhlcmluZS1mb250JztcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICB9XHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/quote-block/quote-block.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/quote-block/quote-block.component.ts ***!
  \*****************************************************************/
/*! exports provided: QuoteBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteBlockComponent", function() { return QuoteBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuoteBlockComponent = class QuoteBlockComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuoteBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-block',
        template: __webpack_require__(/*! raw-loader!./quote-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/quote-block/quote-block.component.html"),
        styles: [__webpack_require__(/*! ./quote-block.component.css */ "./src/app/components/quote-block/quote-block.component.css")]
    })
], QuoteBlockComponent);



/***/ }),

/***/ "./src/assets/Jsons/CompanyVIPS/vip.json":
/*!***********************************************!*\
  !*** ./src/assets/Jsons/CompanyVIPS/vip.json ***!
  \***********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"name\":\"SAEED BEKAM,  P.E.\",\"title\":\"President/CEO\",\"imageName\":\"Saeed_Bekam\",\"description\":\"Saeed Bekam received his Bachelors and Masters degrees in Civil Engineering from California State University, Long Beach and is a registered Professional Engineer in Civil and/or Structural Engineering in over 20 states. In practice with Gouvis Engineering since 1980, Saeed has been a pioneer in bringing innovative ideas not only to Gouvis Engineering but to the field of structural engineering as a whole. Since 1995, Saeed has been responsible for the technical, administrative and legal aspects of the firm. Mr. Bekam has over 2,000 single family and multi-family residential projects in addition to numerous commercial buildings to his credit throughout California, Arizona, Nevada, Texas and other states. Saeed has also provided structural engineering design for international projects and been a key element in a countless number of legal cases as an expert Structural Engineer analyst and field investigator. He is a member of SEAOSC, ACI and the BIA.\"},{\"name\":\"HUAN NGUYEN, P.E.\",\"title\":\"Senior Vice President\",\"imageName\":\"Huan_Nguyen\",\"description\":\"Huan Nguyen obtained his Civil Engineering degree from the University of California, Irvine and has been practicing Structural Engineering design for Gouvis Engineering since 1995. Over the past 21 years, Huan has been integral in the implementation & supervision of our Structural Engineers in Ho Chi Minh City, Vietnam office while also supervising a staff of 10 in the Newport Beach, California office. As a result, Gouvis Engineering Consulting Group, has been able to establish an international clientele as well as meet a great number of challenging deadlines locally.\"},{\"name\":\"AL ALAMAD\",\"title\":\"Chief Operating Officer\",\"imageName\":\"Al_Alamad\",\"description\":\"Al Alamad obtained his Bachelor of Science in Civil Engineering and Construction Engineering Management from California State University, Long Beach. Prior to joining Gouvis, Al’s extensive experience was within private and government sectors of the building industry, where he led numerous complex projects including the engineering and construction of Southern California’s Toll Roads and Water Delivery Systems. In addition to his engineering experience, Al has held progressive roles in management, administration and ownership of successful businesses in diverse settings. Through his interests and continued education in Business Administration and Management, Al’s vast knowledge, experience and multitude of versatile skills help create and maintain a high level of efficiency and productivity at Gouvis. In collaboration with the CEO, Al’s responsibilities as COO provide support to Gouvis’ day-to-day operations through the implementation of policies and procedures to secure the functionality of the business and drive extensive and sustainable growth companywide.\"},{\"name\":\"MIKE HOUSHMAND, P.E.\",\"title\":\"Senior Vice President\",\"imageName\":\"Mike_Houshmand\",\"description\":\"Mike Houshmand, P.E., Senior Vice President, earned his Bachelor and Masters degrees from University of California, Los Angeles in 1982 and immediately began practicing Structural Engineering design with Gouvis Engineering. He is a licensed Civil Engineer and specializes in project management, field investigations, quality control, project coordination and value engineering. Mike is primarily involved in everyday design production. He attends pre-design and pre-construction meetings on nearly every project and supervises a team of structural engineers. He has performed structural analysis and detailing for thousands of challenging designs, utilizing various innovative techniques and building materials.\"},{\"name\":\"DK EOSAKUL, S.E.\",\"title\":\"Vice President\",\"imageName\":\"DK_Eosakul\",\"description\":\"Dissakorn received his Bachelors and Masters degrees in Structural Engineering from California State Polytechnic University, Pomona. Since joining Gouvis Engineering in 2001, DK has contributed to the design of a variety of projects ranging from concrete, steel and masonry to wood and light gauge steel. DK’s 15 years of experience and knowledge of structural engineering has contributed to reduced construction cost through alternative and innovative design. DK is a valued asset to Gouvis Engineering and the projects he designs.\"},{\"name\":\"JASON LIN, S.E.\",\"title\":\"Vice President\",\"imageName\":\"Jason_Lin\",\"description\":\"Jason Lin graduated from UC Berkeley in 2007 with a BS Degree in Civil Engineering. Jason became a licensed engineer in 2010 and SE in 2013. He has ten years of extensive experience in concrete, wood, masonry and steel design. His expertise includes meshing different materials together and achieving an innovative and efficient product. Jason’s portfolio includes the design of many residential and commercial projects. For the past few years, his focus has been on multi-family, mixed use, zero-lot lines and podium projects. His current responsibilities include managing client relations, supervising a team of engineers, overseeing project timelines and ensuring product quality.\"},{\"name\":\"TREALA BERTOLDO\",\"title\":\"Chief Financial Officer\",\"imageName\":\"Treala_Bertoldo\",\"description\":\"Insert Bio\"},{\"name\":\"BASIL AMMARI, P.E.\",\"title\":\"Director of Field Operations\",\"imageName\":\"Basil_Ammari\",\"description\":\"Basil Ammari studied Structural Engineering at California State University, Long Beach, where he obtained his Master’s Degree in Civil Engineering. Basil joined Gouvis Engineering Consulting Group, Inc. in 1989 and worked as a Structural Design Engineer for almost a decade. In 1997, he took his skills to Northern California, where he managed the firm’s third office location as a Vice President of the company. Basil continues to bring his expertise of structural design engineering as the Director of Field Operations and manages a team of field engineers in the Southern and Northern California regions. His experience and education has allowed him to develop a structural observation program in which his team can provide our clients with the best service for their projects and can ensure that all projects are built according to the structural plans.\"},{\"name\":\"SHAWN NOORI, S.E.\",\"title\":\"Chief Engineer\",\"imageName\":\"Shawn_Noori\",\"description\":\"Shawn Noori, S.E., earned his Bachelor and Master Degrees in Civil Engineering from Tehran University in 1980. He joined Gouvis Engineering in 2000 and began working with the Structural Engineering design team primarily involved in everyday design production. He is a licensed Structural Engineer and specializes in wood, light gauge, masonry, steel and concrete design projects. He has performed structural analysis and detailing for hundreds of challenging designs, utilizing various innovative techniques and building materials. He is continually working towards finding new ways for Gouvis to be a leader and pioneer in all aspects of our designs. He also ensures that all projects are meeting and exceeding the building standards.\"},{\"name\":\"INDRA DEGAINE\",\"title\":\"Accounts Receivable Manager\",\"imageName\":\"Indra_Degaine\",\"description\":\"Over the past 27 years, Indra has been an integral member of Gouvis Engineering's financial department. Since joining Gouvis in 1992, Indra has been dedicated to the firm's success and is responsible for accounts receivable, contracts, insurance, change orders and general day to day tasks to keep the accounting deparment functioning at optimal capacity. Indra has built close professional relationships with our team members and clients and is known for her timely and responsive communication and processing of financial requests.\"},{\"name\":\"CATHERINE OVALLE\",\"title\":\"Business Development Manager\",\"imageName\":\"Catherine_Ovalle\",\"description\":\"Catherine is experienced in a diversified range of sales and marketing roles. As the leader of the Business Development team, Catherine contributes her expertise in sales, marketing, recruitment and graphic design. She is integral in the development and maintenance of company culture, client relations and future business opportunities Utilizing her dedicated work ehic, exceptional relationship building abilities and team oriented mentality, Catherine successfully navigates through an array of sales and marketing tasks. She is responsible for coordinating proposals, generating leads, maintaining social media presence, staffing available employment opportunities, creating marketing collateral as well as organizing company and client events. Her efforts have allowed Gouvis to execute targeted goals for the Business Development team to the highest degree and to ensure all team objectives are met daily.\"},{\"name\":\"ROBERT GOMEZ\",\"title\":\"Mechanical and Plumbing Department Manager\",\"imageName\":\"Robert_Gomez\",\"description\":\"Robert Gomez received his Degree in Mechanical Engineering from University of California, Riverside and serves as Gouvis’s lead project manager for all plumbing system designs. As the chief Plumbing Project Manager on staff, Robert attends all pre-design and pre-construction meetings and works thoroughly to ensure designs are compliant with building standards and codes. He also manages and maintains client relations while mentoring and supervising the Plumbing Division at the company. Robert has contributed to the sophisticated plumbing system designs of a substantial number of single-family and multi-family residences, mixed-use developments and recreational centers. His strong work ethic, technical and leadership skills are of great value to Gouvis Engineering.\"}]}");

/***/ }),

/***/ "./src/assets/Jsons/Magazines/BuilderAndDeveloper.json":
/*!*************************************************************!*\
  !*** ./src/assets/Jsons/Magazines/BuilderAndDeveloper.json ***!
  \*************************************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"key\":\"ilink\",\"value\":\"files/assets/cover/1.jpg\"},{\"key\":\"January 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Jan/\"},{\"key\":\"Febuary 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Feb/\"},{\"key\":\"April 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Apr/\"},{\"key\":\"June 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Jun/\"},{\"key\":\"July 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Jul/\"},{\"key\":\"August 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Aug/\"},{\"key\":\"September 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Sep/\"},{\"key\":\"October 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Oct/\"},{\"key\":\"November 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Nov/\"},{\"key\":\"December 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/BD/Dec/\"},{\"key\":\"January 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Jan/\"},{\"key\":\"Febuary 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Feb/\"},{\"key\":\"March 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Mar/\"},{\"key\":\"April 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Apr/\"},{\"key\":\"May 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/May/\"},{\"key\":\"June 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Jun/\"},{\"key\":\"July 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Jul/\"},{\"key\":\"August 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Aug/\"},{\"key\":\"September 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Sep/\"},{\"key\":\"October 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Oct/\"},{\"key\":\"November 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Nov/\"},{\"key\":\"December 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/BD/Dec/\"},{\"key\":\"January 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Jan/\"},{\"key\":\"Febuary 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Feb/\"},{\"key\":\"March 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Mar/\"},{\"key\":\"April 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Apr/\"},{\"key\":\"May 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/May/\"},{\"key\":\"June 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Jun/\"},{\"key\":\"July 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Jul/\"},{\"key\":\"August 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/BD/Aug/\"},{\"key\":\"comment\",\"value\":\"GREEN HOME BUILDER\"},{\"key\":\"Jan/Feb 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/GHB/JanFeb/\"},{\"key\":\"Mar/Apr 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/GHB/MarApr/\"},{\"key\":\"May/Jun 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/GHB/MayJun/\"},{\"key\":\"Jul/Aug 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/GHB/JulAug/\"},{\"key\":\"Sep/Oct 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/GHB/SepOct/\"},{\"key\":\"Nov/Dec 2017\",\"value\":\"https://penpubinc.com/magazine/online/2017/GHB/NovDec/\"},{\"key\":\"Jan/Feb 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/GHB/JanFeb/\"},{\"key\":\"Mar/Apr 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/GHB/MarApr/\"},{\"key\":\"May/Jun 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/GHB/MayJun/\"},{\"key\":\"Jul/Aug 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/GHB/JulAug/\"},{\"key\":\"Sep/Oct 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/GHB/SepOct/\"},{\"key\":\"Nov/Dec 2018\",\"value\":\"https://penpubinc.com/magazine/online/2018/GHB/NovDec/\"},{\"key\":\"Jan/Feb 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/GHB/JanFeb/\"},{\"key\":\"Mar/Apr 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/GHB/MarApr/\"},{\"key\":\"May/Jun 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/GHB/MayJun/\"},{\"key\":\"Jul/Aug 2019\",\"value\":\"https://penpubinc.com/magazine/online/2019/GHB/JulAug/\"}]}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dngo\Desktop\GW3\GouvisSite1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map