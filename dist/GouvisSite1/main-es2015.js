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

module.exports = "<div>\n    <app-logo-home-page></app-logo-home-page>\n</div>\n\n<router-outlet></router-outlet>\n<div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/about-us-main/about-us-main.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/about-us-main/about-us-main.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-common-banner></app-common-banner>\n    <div class = \"slogan1\">\n        <app-common-text-slogan></app-common-text-slogan>\n    </div>\n    <div>\n        <app-augrid-images></app-augrid-images>\n    </div>\n    <div class=\"divider\">\n\n    </div>\n    <div>\n        <app-common-text-slogan></app-common-text-slogan>\n    </div>\n    <div >\n\n    </div>\n    <div>\n        <app-common-text-slogan></app-common-text-slogan>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/augrid-images/augrid-images.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/augrid-images/augrid-images.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vipImages\">\n    <app-auimage class=\"gridEle\" *ngFor=\"let item of items\"\n        [imageName] = item.imageName\n        [name] = item.name\n        [title] = item.title\n        [description] = item.description\n    >\n    </app-auimage>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/auimage/auimage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/auimage/auimage.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <div class=\"card\" (click)=\"open()\">\n        <div class=\"image\" [ngStyle]=\"{'width': '300px', 'height' : '450px',  'background-image': 'url(\\'assets/Medias/Images/VIPs/' + imageName + '.jpg\\')'}\" >\n        <!-- <img src='assets/Medias/Images/VIPs/{{imageName}}.jpg'/>-->   \n            <div class=\"empty\">\n\n            </div>\n            <div class=\"text\">\n                <div class=\"name\">\n                    <p>{{name}}</p>\n                </div>\n                <div class=\"title\">\n                    <p>{{title}}</p>\n                </div>\n            </div>   \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/AboutUs/vip-profile/vip-profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/AboutUs/vip-profile/vip-profile.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split1\">\n    <div>\n        <div class=\"about\">\n            <p>ABOUT</p>\n        </div>\n        <div class=\"name\">\n            {{name}}\n        </div>\n        <div class=\"title\">\n            {{title}}\n        </div>\n        <div class=\"description\">\n            {{description}}\n        </div>\n    </div>\n    <div>\n        <div class=\"image\" [ngStyle]=\"{'width': '400px', 'height' : '600px',  'background-image': 'url(\\'assets/Medias/Images/VIPs/' + imageName + '.jpg\\')'}\" >\n        </div>\n    </div> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Common/common-banner/common-banner.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Common/common-banner/common-banner.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CommonPictureBanner\" \n    [ngStyle]=\"{'background': 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%),' + 'url(' + imagePath +')'}\">\n    <p>{{title}}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Common/common-text-slogan/common-text-slogan.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Common/common-text-slogan/common-text-slogan.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=CommonEffeciencyBanner>\n        <div class=\"Effeciency\">\n            <p>{{title}}</p>\n        </div>\n        <div class=\"LineDivider\"></div>\n        <div class=\"Text1\">\n           <p>{{content}}</p>\n        </div>\n    </div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Common/vip-shared-service/vip-shared-service.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Common/vip-shared-service/vip-shared-service.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>vip-shared-service works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Contact/contact-grid-images/contact-grid-images.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Contact/contact-grid-images/contact-grid-images.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n    <div class=\"div1\"></div>\n    <div class=\"div2\"></div>\n    <div class=\"div3\"></div>\n    <div class=\"div4\"></div>\n    <div class=\"div5\"></div>\n    <div class=\"div6\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Contact/contact-main/contact-main.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Contact/contact-main/contact-main.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-common-banner></app-common-banner>\n    <div class=\"title\">\n        <p>CONTACT US</p>\n    </div>\n    <div class= \"combo\">\n        <div class=\"location\">\n            <div class=\"text\">\n                <p>OFFICE LOCATIONS</p>\n            </div>\n            <div class=\"text\">\n                <p>CORPORATE HEADQUARTERS</p>\n            </div>\n            <div class=\"text\">\n                <p><a href=\"https://www.google.com/maps/place/15+Studebaker,+Irvine,+CA+92618/@33.6498025,-117.7174509,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce81649db0b23:0x9e07e46548ce963a!8m2!3d33.6498025!4d-117.7152622\">15 Studebaker Irvine, CA 92618</a></p>\n            </div>\n            <div class=\"text\">\n                <p>949.752.1612</p>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"text\">\n                <p>PALM SPRINGS, CALIFORNIA</p>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"text\">\n                <p>PASADENA, CALIFORNIA</p>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"text\">\n                <p>PLEASANTON, CALIFORNIA</p>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"text\">\n                <p>SAI GON, VIETNAM</p>\n            </div>\n        </div>\n        <div class=\"contact\">\n            <form action=\"mailto:dngo@gouvisgroup.com\" method=\"POST\" enctype=\"text/plain\">\n                <div class=\"contact1\">\n                    <input class=\"input\" type=\"text\" name=\"name\" placeholder=\"name\">\n                    <input class=\"input\" type=\"text\" name=\"email\" placeholder=\"email\">\n                    <input class=\"input\" type=\"text\" name=\"phone\" placeholder=\"Phone Number\">\n                    <input class=\"input\" type=\"text\" name=\"Message\" placeholder=\"Type your message here...\">                   \n                    <input class=\"inputButton\" type=\"submit\" value=\"Submit\">\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"slogan\">\n        <app-common-text-slogan></app-common-text-slogan>\n    </div>\n    <div>\n        <app-contact-grid-images></app-contact-grid-images>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Contact/office-location/office-location.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Contact/office-location/office-location.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>office-location works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/banner/banner.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/banner/banner.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bannerImage\">\n    <div class=\"slider\">\n        <div class=\"slider1\">\n            <div class= \"image1\"></div>\n            <div class= \"image2\"></div>\n            <div class= \"image3\"></div>\n            <div class= \"image4\"></div>\n            <div class= \"image5\"></div>\n            <div class= \"image7\"></div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/cards/cards.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/cards/cards.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"houseFrame\">\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\n                <img src = \"/assets/Medias/Images/ServicesIconsHomePage/apartment.png\"/>\n            </div>\n            <div>\n                <p>Structural Design</p>\n            </div>\n        </div>\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\n                <img src = \"/assets/Medias/Images/ServicesIconsHomePage/mechanical_fan.png\"/>\n            </div>\n            <div>\n                <p>Mechanical Design</p>\n            </div>\n        </div>\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\n                <img src = \"/assets/Medias/Images/ServicesIconsHomePage/light_bulb_icon_white.png\"/>\n            </div>\n            <div>\n                <p>Electrical Design</p>\n            </div>\n        </div>\n        <div  data-aos=\"flip-left\" data-aos-delay=\"100\">\n            <div data-aos=\"flip-right\" data-aos-delay=\"400\">\n                <img src = \"/assets/Medias/Images/ServicesIconsHomePage/plumbing_pipe_white.png\"/>\n            </div>\n            <div>\n                <p>Plumbing Design</p>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/first-class/first-class.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/first-class/first-class.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"RibbonTile1\">\n    <div class=\"firstClass\"  >\n        <!--[ngStyle]=\"firstClass\"-->\n        1<sup>st</sup> Class Service. World Class Clients.\n    </div>\n    <div class=\"lineBreak1\">\n    </div>\n    <div class=\"mottoHomePage\">\n        Gouvis Engineering Consulting Group delivers first class engineering services for many of the largest builders and architects throughout the country. With a tenured staff of over 100 employees company-wide, we have the resources and workforce to meet any schedule requirement.\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/grid-images/grid-images.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/grid-images/grid-images.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <div>\n        \n    </div>\n    <div class=\"homePageBottomShow\" >\n        <div class=\"picture1\">\n            <div class=\"TextDecor1\">\n                <div class=\"TextDecor2\" ng>\n                    <div class=\"text1\">ABC House 3.0</div>\n                    <div class=\"textDivider1\"></div>\n                    <div class=\"text1\">NAHB Best in Green Interiors Project and ASCE Sustainable Engineering Project of the Year / PCBC Grand Award: Best Zero Net Energy Home Design</div>\n                </div>\n            </div>\n        </div >\n        <div class=\"picture2\" >        \n            <div class=\"TextDecor1\">\n                <div class=\"TextDecor2\">\n                    <div class=\"text1\">WALLIS RANCH</div>\n                    <div class=\"textDivider1\"></div>\n                    <div class=\"text1\">PCBC Grand Award: Residential Housing Community of the Year</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"picture3\">\n            <div > </div>\n        </div>\n        <div class=\"picture4\">\n            <div> </div>\n        </div>\n        <div class=\"picture5\">\n               \n                <div class=\"TextDecor1\">\n                        <div class=\"TextDecor2\">\n                            <div class=\"text1\">CARLISLE AT PARASOL PARK</div>\n                            <div class=\"textDivider1\"></div>\n                            <div class=\"text1\"> PCBC Grand Award: Best Single Family Detached Home</div>\n                        </div>\n                    </div>\n        </div>\n        <div class=\"picture6\">\n                <div class=\"TextDecor1\">\n                        <div class=\"TextDecor2\">\n                            <div class=\"text1\">ROYAL OAKS COURTYARD VILLAS</div>\n                            <div class=\"textDivider1\"></div>\n                            <div class=\"text1\">PCBC Merit Award: Single Family Detachede</div>\n                        </div>\n                    </div>\n        </div>\n        <div class=\"picture7\">\n                <div class=\"TextDecor1\">\n                        <div class=\"TextDecor2\">\n                            <div class=\"text1\">SKYE</div>\n                            <div class=\"textDivider1\"></div>\n                            <div class=\"text1\">NAHB Platinum and NAHB Gold / PCBC Award of Merit: Best Single Family Detached Home / PCBC Grand Award: Residential Housing Project of the Year</div>\n                        </div>\n                    </div>\n        </div>\n        <div class=\"picture8\">\n                <div class=\"TextDecor1\">\n                        <div class=\"TextDecor2\">\n                            <div class=\"text1\">REVELLE AT CLANCY LANE</div>\n                            <div class=\"textDivider1\"></div>\n                            <div class=\"text1\">PCBC Grand Award: Best Single Family Detached</div>\n                        </div>\n                    </div>\n        </div>\n        <div class=\"picture9\">\n            <div> </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/home-page-panel1/home-page-panel1.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Panel1\">\n    <div class= \"PanelText\">\n        <div class=\"PanelTextUnder\">\n\n            <div class=\"Panel1Text1\">\n                SMEP INTEGRATION\n            </div>\n\n            <div class=\"Panel1Divider\">\n            </div>\n\n            <div class=\"Panel1Text1\">\n                SIMPLIFIED\n            </div>\n            \n            <div class=\"Panel1Text2\">\n                Our technical expertise and design efficiency allow us to provide value engineered SMEP solutions for residential and commercial projects throughout the country.\n            </div>\n        </div>\n    </div>\n    <div class=\"Panel1Image\">\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/main/main.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/main/main.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n    <div class=\"bannerImagesHomePage\">\n      <app-banner></app-banner>\n    </div>\n    <div class=\"Panel1\">\n        <app-home-page-panel1></app-home-page-panel1>\n    </div>\n    \n\n    <app-first-class></app-first-class>\n\n    <app-services-words></app-services-words>\n\n    <app-cards></app-cards>\n    \n    <app-video-intro\n    [videoLink]=\"'https://www.youtube.com/embed/hbET2TKiaEI'\">\n    ></app-video-intro>\n    \n    <div>\n            <div class=\"Over55Years\">Over 55 years of design excellence</div>\n            <div class=\"Over55YearsLine\"></div>\n    </div>\n    <div>\n        <app-grid-images></app-grid-images>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/services-words/services-words.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/services-words/services-words.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"EngineeringServices\">ENGINEERING DESIGN SERVICES</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/HomePage/video-intro/video-intro.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/HomePage/video-intro/video-intro.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"videoBackGround\">\n    <div class=\"videoFrame\">\n        <div class=\"video1\">\n                <iframe id=\"videoYouTube\" (window:resize)=\"onResize($event)\" width={{width}} height={{height}} [src]=\"videoPath\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Media/magazine-element/magazine-element.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Media/magazine-element/magazine-element.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"{{link}}\"  target=\"_blank\">\n    <div class=\"Image\">\n        <img src={{imagePath}}/>\n        <p>{{title}}</p>\n    </div>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Media/magazine-grid/magazine-grid.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Media/magazine-grid/magazine-grid.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"magazineClass\">\n        <app-magazine-element *ngFor=\"let item of items\"\n            [imagePath]= \"item.imagePath\"\n            [title] = \"item.title\"\n            [link] = \"item.link\"\n            class=\"magazineElement\">\n\n        </app-magazine-element>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Media/media-main/media-main.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Media/media-main/media-main.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-common-banner></app-common-banner>\n    <div class=\"mediaSpace\"></div>\n    <div class=\"backgroundSlogan\">\n        <app-common-text-slogan></app-common-text-slogan>\n    </div>\n    <app-magazine-grid></app-magazine-grid>\n    <div class=\"backgroundSlogan\">\n        <app-common-text-slogan></app-common-text-slogan>\n    </div>\n    <div>\n        <app-video-intro\n            [videoLink]=\"'https://www.youtube.com/embed/DO0GXsxPp0I'\">\n        </app-video-intro>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-banner/service-banner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/service-banner/service-banner.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"PictureBanner\">\n    <p>SERVICE</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-efficiency/service-efficiency.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/service-efficiency/service-efficiency.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=EffeciencyBanner>\n    <div class=\"Effeciency\">\n        <p>WHERE EFFICIENCY MEETS INGENUITY</p>\n    </div>\n    <div class=\"LineDivider\"></div>\n    <div class=\"Text1\">\n        Our team of engineers are focused on efficiency and economy by utilizing flexibility, exploring design alternatives without compromising code requirements and maintaining our client's budget. \n    </div>\n    <div class=\"Text2\">\n            We are available to resolve issues immediately by accessing your plans on our online construction document system. Signed letters of compliance are available almost instantaneously, saving your field personnel valuable time and money.\n    </div>\n</div> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/service-main/service-main.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/service-main/service-main.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-common-banner></app-common-banner>\n    <!--<app-service-banner></app-service-banner>-->\n    <app-service-efficiency></app-service-efficiency>\n    <app-smep-titles></app-smep-titles>\n    <app-sevice-services></app-sevice-services>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/sevice-services/sevice-services.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/sevice-services/sevice-services.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"CARDS\">\n    <div class=\"card1\">\n        <div class= card>\n            <div class=\"ImageIcon\">\n                <div class=\"image1\">\n                    <img src=\"/assets/Medias/Images/ServicesIconsHomePage/apartment.png\"/>\n                </div>\n            </div>\n            <div class=\"Title\">\n                <p>STRUCTURAL</p>\n            </div>\n\n        </div>\n\n        <div class=\"Text\">\n            <div class=\"Text1\">\n                <ul>\n                    <li>On grade or Elevated Post-Tension Slab</li>\n                    <li>On grade or Elevated Conventional Slab</li>\n                    <li>Piles & Caissons</li>\n                    <li>Matt Concrete</li>\n                    <li>Floor & Roof System</li>\n                    <li>Walk Through Observation</li>\n                    <li>Construction Administrative Service</li>\n                    <li>Field Inquiry and Response</li>\n                </ul>\n            </div>\n            <div class=\"Text2 Text21\">\n                <p>We offer expertise in the analysis and engineering of:</p>\n            </div>\n            <div class=\"Text3\">\n                <ul>\n                    <li>Concrete (Pre-Cast & Cast in Place)</li>\n                    <li>Light Gauge Steel</li>\n                    <li>Masonry</li>\n                    <li>Steel </li>\n                    <li>Wood</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card1\">\n        <div class=\"card\">\n            <div class=\"ImageIcon\">\n                <div class=\"image1\">\n                <img src=\"/assets/Medias/Images/ServicesIconsHomePage/mechanical_fan.png\"/>\n                </div>\n            </div>\n            <div class=\"Title\">\n                <p>MECHANICAL</p>\n            </div>\n\n        </div>\n\n        <div class=\"Text\">\n            <div class=\"Text1\">\n                <ul>\n                    <li>Ventilation Systems</li>\n                    <li>Heating and Cooling</li>\n                    <li>HVAC Controls & Distribution</li>\n                    <li>Thermal Envelope</li>\n                    <li>Chilled and Cooling Water System</li>\n                    <li>Humidification/Dehumidification</li>\n                    <li>Indoor Air Quality</li>\n                    <li>Energy Compliance Calculations per Local Juristiction (IECC/T-24)</li>\n                </ul>\n            </div>\n            <div class=\"Text2 Title24\">\n                Title 24\n            </div>\n            <div class=\"Title24Text\">\n                <p>Our certified analysts are well versed in Residential and Non-Residential code standards. Our team is trained in compliance approaches and produces all necessary energy analysis documentation required to meet the California Building Energy Efficiency Standards. We select cost-effective energy design measures based on the highest code impact at the lowest cost to the builder.</p>            \n            </div>\n        </div>\n    </div>\n\n    <div class=\"card1\">\n        <div class=\"card\">\n            <div class=\"ImageIcon\">\n                <div class=\"image1\">\n                <img src=\"/assets/Medias/Images/ServicesIconsHomePage/light_bulb_icon_white.png\"/>\n                </div>\n            </div>\n            <div class=\"Title\">\n                <p>ELECTRICAL</p>\n            </div>\n\n        </div>\n\n        <div class=\"Text\">\n            <ul>\n                <li>Power Distribution</li>\n                <li>Interior and Exterior Lighting Design/Photometric Study</li>\n                <li>Emergency Power System</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"card1\">\n        <div class=\"card\">\n            <div class=\"ImageIcon\">\n                <div class=\"image1\">\n                <img src=\"/assets/Medias/Images/ServicesIconsHomePage/plumbing_pipe_white.png\"/>\n                </div>\n            </div>\n            <div class=\"Title\">\n                <p>PLUMBING</p>\n            </div>\n\n        </div>\n\n        <div class=\"Text\">\n            <div class=\"Text1\">\n                <ul>\n                    <li>Hot/Cold Water Distribution System</li>\n                    <li>Sanitary Sewer Distribution System</li>\n                    <li>Storm Water Distribution System</li>\n                    <li>Gas/Fuel Distribution System</li>\n                    <li>Oil/Grease Separators</li>\n                    <li>Pressure Booster Pumps</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Services/smep-titles/smep-titles.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Services/smep-titles/smep-titles.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"Title1\">\n        SMEP INTEGRATION\n    </div>\n    <div class=\"lineDivider\"></div>\n    <div class=\"Text1\">\n        Gouvis Engineering is uniquely structured into product specific teams, ensuring your project is designed and coordinated with the highest level of knowledge and experience. The Gouvis team of SMEP experts understands that efficient system operation is vital to project success. Our comprehensive audits, evaluations, inspections, code calculations and recommendations are aimed at one goal: to achieve  optimal life cycle costing.         \n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"gridFooter\">\n        <div class=\"part first\">\n            <div class=\"title\">\n                GOUVIS ENGINEERING\n            </div>\n            <div class=\"content\">\n                <p>Corporate HQ</p>\n                <p>15 Studebaker</p>\n                <p>Irvine, California 92618</p>\n                <p>Tel 949.752.1612</p>\n                <p><a href=\"https://www.google.com/maps/place/Gouvis+Engineering/@33.6499164,-117.7178383,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcdef847dfee2f:0x7aeea22a0027e43c!8m2!3d33.6499164!4d-117.7156496\">Direction</a></p>\n            </div>\n        </div>\n        <div class=\"part\">\n            <div class=\"title\">\n                ABOUT US\n            </div>\n            <div class=\"content\">\n                Gouvis Engineering has been a trusted partner in innovation, quality and service since 1960.\n                <div class=\"space1\"></div>\n                <p><a href=\"https://www.google.com\">Contact Us</a></p>\n            </div>\n        </div>\n        <div class=\"part\">\n            <div class=\"title\">\n                OUR SERVICES\n            </div>\n            <div class=\"content thirdF\">\n                <div class = \"middleThirdF\">\n                    <ul>\n                        <li>+ Structural</li>\n                        <li>+ Mechanical</li>\n                        <li>+ Electrical</li>\n                        <li>+ Plumbing</li>\n                        <li>+ Title 24</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"part\">\n            <div class=\"title\">\n                #FOLLOWUS\n            </div>\n            <div class=\"content\">\n                Follow our social media pages, view our projects and stay up to date with our latest news!\n                <div class=\"socialMedia\">\n                    <div class=\"facebook\" onclick=\"location.href='https://www.facebook.com/GouvisEngineering/'\"></div>\n                    <div class=\"instagram\"  onclick=\"location.href='https://www.instagram.com/Gouvis.Engineering/'\"></div>\n                    <div class=\"twitter\" onclick=\"location.href='https://twitter.com/GouvisGroup'\"></div>\n                    <div class=\"linkedin\" onclick=\"location.href='https://www.linkedin.com/company/gouvis-engineering'\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"Copyright\">Copyright 2019 Gouvis Engineering, All Rights Reserved</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/logo-home-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/logo-home-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"menuClick()\">&times;</a>\n    <a href=\"#\">About</a>\n    <a href=\"/service\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n</div>\n\n<div class = \"MenuBar\">\n    <a href=\"\">\n    <div class=\"logo\" >\n            <img src='assets/Medias/Images/CompanyLogo.svg'/>\n            <img src='assets/Medias/Images/CompanyLogoSmall.svg'/>\n    </div>\n    </a>\n        \n    <div class=\"menu\">\n        <img src=\"assets/Medias/Images/list.svg\" (click)=\"menuClickOpen()\"/>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/quote-block/quote-block.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/quote-block/quote-block.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quoteBlock\">\n    <div class=\"ourProfession\"><p>Our Profession</p></div>\n    <div class=\"quoteSentence\"><P>\"Take the best that exists and make it better.\"</P><p><em>Henry Royce</em></div>\n</div>\n\n"

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

module.exports = "\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
            _components_AboutUs_vip_profile_vip_profile_component__WEBPACK_IMPORTED_MODULE_35__["VipProfileComponent"]
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

module.exports = ".slogan1{\n    margin-top: 10vh;\n}\n\n.divider{\n    height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2Fib3V0LXVzLW1haW4vYWJvdXQtdXMtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWJvdXRVcy9hYm91dC11cy1tYWluL2Fib3V0LXVzLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbG9nYW4xe1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG59XG5cbi5kaXZpZGVye1xuICAgIGhlaWdodDogMTB2aDtcbn0iXX0= */"

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
        this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/AboutUsBanner.jpg";
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

/***/ "./src/app/components/AboutUs/augrid-images/augrid-images.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/AboutUs/augrid-images/augrid-images.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vipImages{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 10px;\n    width: 1230px;\n    margin: auto;\n}\n\n@media only screen and (min-width: 1285px){\n    .vipImages{\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-gap: 10px;\n        width: 1230px;\n        margin: auto;\n    }\n}\n\n@media only screen and (max-width: 1285px){\n    .vipImages{\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-gap: 10px;\n        width: 920px;\n        margin: auto;\n    }   \n}\n\n@media only screen and (max-width: 950px){\n    .vipImages{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-gap: 10px;\n        width: 610px;\n        margin: auto;\n    }      \n}\n\n@media only screen and (max-width: 630px){\n    .vipImages{\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-gap: 10px;\n        width: 300px;\n        margin: auto;\n    }        \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2F1Z3JpZC1pbWFnZXMvYXVncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Fib3V0VXMvYXVncmlkLWltYWdlcy9hdWdyaWQtaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlwSW1hZ2Vze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEyMzBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4NXB4KXtcbiAgICAudmlwSW1hZ2Vze1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMjMwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4NXB4KXtcbiAgICAudmlwSW1hZ2Vze1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDkyMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfSAgIFxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KXtcbiAgICAudmlwSW1hZ2Vze1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICB3aWR0aDogNjEwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9ICAgICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMwcHgpe1xuICAgIC52aXBJbWFnZXN7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfSAgICAgICAgXG59Il19 */"

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

module.exports = ".image{\n    margin: auto;\n    display: grid;\n    grid-template-rows: 9fr 1fr;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.card{\n\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.text{\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 5%;\n}\n\n.name{\n    font-family: 'Avenir-bold-font';\n    font-size: 1.3em;\n    color: white;   \n}\n\n.title{\n    font-family: 'Avenir-font';\n    font-size: 1em;\n    color: white;\n    font-size: 0.7em;\n\n}\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL2F1aW1hZ2UvYXVpbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Fib3V0VXMvYXVpbWFnZS9hdWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5ZnIgMWZyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmR7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4ubmFtZXtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgY29sb3I6IHdoaXRlOyAgIFxufVxuXG4udGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItZm9udCc7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG5cbn1cblxuXG5cblxuXG5cbiJdfQ== */"

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

/***/ "./src/app/components/AboutUs/vip-profile/vip-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/AboutUs/vip-profile/vip-profile.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split1{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 900px;\n    margin: auto;\n    margin-top: 20px;\n    grid-gap: 10vw;\n}\n\n.image{\n    background-size: cover;\n}\n\n.about{\n    font-family: \"Avenir-bold-font\";\n    font-size: 2em;\n    margin-bottom: 10%;\n    border-bottom: 2px solid #b1c147;\n    padding-bottom: 5%;\n}\n\n.name{\n    font-family: \"Avenir-bold-font\";\n    font-size: 1.5em;\n}\n\n.title{\n    font-family: \"Avenir-font\";\n    margin-bottom: 5%;   \n    font-size: 1.2em; \n}\n\n.description{\n    font-family: \"Avenir-font\";\n    margin-bottom: 5%;     \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9BYm91dFVzL3ZpcC1wcm9maWxlL3ZpcC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWJvdXRVcy92aXAtcHJvZmlsZS92aXAtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGl0MXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB3aWR0aDogOTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZ3JpZC1nYXA6IDEwdnc7XG59XG5cbi5pbWFnZXtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWJvdXR7XG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWJvbGQtZm9udFwiO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2IxYzE0NztcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi5uYW1le1xuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1ib2xkLWZvbnRcIjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWZvbnRcIjtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTsgICBcbiAgICBmb250LXNpemU6IDEuMmVtOyBcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1mb250XCI7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7ICAgICBcbn0iXX0= */"

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

module.exports = "\n    \n\n\n.CommonPictureBanner{\n    height: 70vh;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n\n}\n\n.CommonPictureBanner > p{\n    font-size: 5em;\n    text-align: center;\n    margin: auto;\n    color: white;\n    text-shadow: 0px 2px 3px #555;\n    font-family: 'Avenir-bold-font';\n}\n\n@media only screen and (max-width: 480px){\n    .PictureBanner > p{\n        font-size: 3em;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db21tb24vY29tbW9uLWJhbm5lci9jb21tb24tYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0NvbW1vbi9jb21tb24tYmFubmVyL2NvbW1vbi1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIFxuXG5cbi5Db21tb25QaWN0dXJlQmFubmVye1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uQ29tbW9uUGljdHVyZUJhbm5lciA+IHB7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggM3B4ICM1NTU7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250Jztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG4gICAgLlBpY3R1cmVCYW5uZXIgPiBwe1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9IFxufSJdfQ== */"

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

module.exports = ".EffeciencyBanner{\n    margin-top: 10vh;\n    background-color: whitesmoke;\n    padding: 2vw;\n}\n\n.Effeciency{\n    margin: auto;\n    text-align: center;\n    font-family: 'Avenir-bold-font';\n    font-size: 2em;\n    margin-bottom: 5vh;\n    color: transparent;\n    background: #666666;\n    font-family: 'Avenir-bold-font';\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n}\n\n.LineDivider{\n    margin: auto;\n    border-bottom: 2px #b1c147 solid;\n    width: 20%;\n    margin-bottom: 5vh;\n}\n\n.Text1{\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-family: 'Avenir-font';\n    font-size: 1.2em;\n    width: 70vw;\n    margin-bottom: 5vh;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db21tb24vY29tbW9uLXRleHQtc2xvZ2FuL2NvbW1vbi10ZXh0LXNsb2dhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0NvbW1vbi9jb21tb24tdGV4dC1zbG9nYW4vY29tbW9uLXRleHQtc2xvZ2FuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRWZmZWNpZW5jeUJhbm5lcntcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgcGFkZGluZzogMnZ3O1xufVxuXG4uRWZmZWNpZW5jeXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG59XG5cbi5MaW5lRGl2aWRlcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNiMWMxNDcgc29saWQ7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG5cbi5UZXh0MXtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIFxufVxuIl19 */"

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

module.exports = ".parent {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-gap: 5px;\n\n    width: 80%;\n    height: 500px;\n    margin: auto;\n    margin-top: 10vh;\n}\n\n.parent > div{\n    background-size: cover;\n}\n\n.div1 { \n        background-image: url('IMG_1962.JPG.jpg');\n        grid-area: 1 / 1 / 5 / 4;\n    }\n\n.div2 {\n        background-image: url('IMG_5937.JPG.jpg');\n        grid-area: 1 / 4 / 3 / 7; }\n\n.div3 {\n        background-image: url('122.JPG.jpg');\n        grid-area: 3 / 4 / 5 / 6; }\n\n.div4 {\n        background-image: url('Golf_2.jpg');\n        grid-area: 3 / 6 / 5 / 8; }\n\n.div5 {\n        background-image: url('Basketball_Team_2007.JPG.jpg');\n        grid-area: 3 / 8 / 5 / 10; }\n\n.div6 {\n        background-image: url('IMG_0110.JPG.jpg');\n        grid-area: 1 / 7 / 3 / 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db250YWN0L2NvbnRhY3QtZ3JpZC1pbWFnZXMvY29udGFjdC1ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxtQ0FBbUM7SUFDbkMsYUFBYTs7SUFFYixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUk7UUFDSSx5Q0FBd0Y7UUFDeEYsd0JBQXdCO0lBQzVCOztBQUNBO1FBQ0kseUNBQXdGO1FBQ3hGLHdCQUF3QixFQUFFOztBQUM5QjtRQUNJLG9DQUFtRjtRQUNuRix3QkFBd0IsRUFBRTs7QUFDOUI7UUFDSSxtQ0FBa0Y7UUFDbEYsd0JBQXdCLEVBQUU7O0FBQzlCO1FBQ0kscURBQW9HO1FBQ3BHLHlCQUF5QixFQUFFOztBQUMvQjtRQUNJLHlDQUF3RjtRQUN4Rix5QkFBeUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29udGFjdC9jb250YWN0LWdyaWQtaW1hZ2VzL2NvbnRhY3QtZ3JpZC1pbWFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWdhcDogNXB4O1xuXG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xufVxuXG4ucGFyZW50ID4gZGl2e1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiAgICAuZGl2MSB7IFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0lNR18xOTYyLkpQRy5qcGdcIik7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gNDtcbiAgICB9XG4gICAgLmRpdjIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0lNR181OTM3LkpQRy5qcGdcIik7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDQgLyAzIC8gNzsgfVxuICAgIC5kaXYzIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQ29udGFjdEltYWdlcy8xMjIuSlBHLmpwZ1wiKTtcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gNCAvIDUgLyA2OyB9XG4gICAgLmRpdjQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0dvbGZfMi5qcGdcIik7XG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDYgLyA1IC8gODsgfVxuICAgIC5kaXY1IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQ29udGFjdEltYWdlcy9CYXNrZXRiYWxsX1RlYW1fMjAwNy5KUEcuanBnXCIpO1xuICAgICAgICBncmlkLWFyZWE6IDMgLyA4IC8gNSAvIDEwOyB9XG4gICAgLmRpdjYge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Db250YWN0SW1hZ2VzL0lNR18wMTEwLkpQRy5qcGdcIik7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDcgLyAzIC8gMTA7IH1cbiJdfQ== */"

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

module.exports = ".title{\n    margin: auto;\n    background-color: #b1c147;\n    padding: 10px;\n    margin-top: 5vh;\n}\n\n.title > p{\n    font-family: 'Avenir-Bold-font';\n    font-size: 3em;\n    margin-left: 20%;\n    color: white;\n}\n\n.combo{\n    display: grid;\n    grid-template-columns: 4fr 6fr;\n    margin-top: 5vh;\n}\n\n.combo > div{\n    width: 80%;\n}\n\n.combo > div:nth-child(1){\n    margin-left: 20%;\n}\n\n.contact1{\n    display: flex;\n    flex-direction: column;\n}\n\n.input{\n    border: none;\n    border-bottom: 2px #b1c147 solid;\n    font-family: \"Avenir-font\";\n    font-size: 1.5em;\n    margin-top: 5vh;\n    color: gray;\n    width: 60%;\n    padding-bottom: 1vh;\n}\n\n.inputButton{\n    border: none;\n    background-color: #b1c147;\n    color: white;\n    font-family: \"Avenir-bold-font\";\n    font-size: 1.5em;\n    margin-top: 5vh; \n    width: 150px; \n    height: 60px;\n}\n\n.inputButton:hover{\n    cursor: pointer;\n    background-color: rgb(77, 77, 77);\n    color: #b1c147;\n\n}\n\n.location{\n    font-family: \"Avenir-font\";\n}\n\n.text{\n    font-family: \"Avenir-font\";\n    font-size: 0.8em;\n}\n\n.text:nth-child(1){\n    margin-bottom: 2vh;\n    font-family: \"Avenir-bold-font\";\n    margin-top: 5vh;\n    font-size: 1em;\n}\n\n.text:nth-child(3) a{\n    text-decoration: none;\n    color: black;\n\n}\n\n.text:nth-child(3) a:hover{\n    color: rgb(0, 89, 255);\n    \n}\n\n.divider{\n    border-top: 1px black solid;\n    margin-top: 3vh;\n    margin-bottom: 3vh;\n    width: 60%;\n}\n\n.slogan{\n    background-color: whitesmoke;\n    padding-top: 5vh;\n    padding-bottom: 5vh;\n    margin-top: 10vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db250YWN0L2NvbnRhY3QtbWFpbi9jb250YWN0LW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1tYWluL2NvbnRhY3QtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjMTQ3O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG4udGl0bGUgPiBwe1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLUJvbGQtZm9udCc7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb21ib3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDZmcjtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi5jb21ibyA+IGRpdntcbiAgICB3aWR0aDogODAlO1xufVxuXG4uY29tYm8gPiBkaXY6bnRoLWNoaWxkKDEpe1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5jb250YWN0MXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNiMWMxNDcgc29saWQ7XG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWZvbnRcIjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XG59XG5cbi5pbnB1dEJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWJvbGQtZm9udFwiO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLXRvcDogNXZoOyBcbiAgICB3aWR0aDogMTUwcHg7IFxuICAgIGhlaWdodDogNjBweDtcbn1cblxuLmlucHV0QnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XG4gICAgY29sb3I6ICNiMWMxNDc7XG5cbn1cblxuLmxvY2F0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1mb250XCI7XG59XG5cbi50ZXh0e1xuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1mb250XCI7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLnRleHQ6bnRoLWNoaWxkKDEpe1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBmb250LWZhbWlseTogXCJBdmVuaXItYm9sZC1mb250XCI7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udGV4dDpudGgtY2hpbGQoMykgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbi50ZXh0Om50aC1jaGlsZCgzKSBhOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMCwgODksIDI1NSk7XG4gICAgXG59XG5cbi5kaXZpZGVye1xuICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5zbG9nYW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbn1cbiJdfQ== */"

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
        this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/ContactBanner.jpg";
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

module.exports = ".bannerImage{\n    height: 80vh;\n}\n\n.slider1{\n    width: 800%;\n    height:100vh;\n    position: relative;\n    overflow: hidden;\n    -webkit-animation: 20s slidy infinite;\n            animation: 20s slidy infinite; \n}\n\n.slider1 > div{\n    float: left;\n    height: 100vh;\n    width: 100vw;\n}\n\n.image1{\n    background-image: url('Slideshow-1.jpg');\n    background-size: cover;\n}\n\n.image2{\n    background-image: url('Slideshow-2.jpg');\n    background-size: cover;\n}\n\n.image3{\n    background-image: url('Slideshow-2.jpg');\n    background-size: cover;\n}\n\n.image4{\n    background-image: url('Slide-show-3.jpg');\n    background-size: cover;\n}\n\n.image5{\n    background-image: url('Slide-show-5.jpg');\n    background-size: cover;\n}\n\n.image6{\n    background-image: url('Slide-show-9.jpg');\n    background-size: cover;\n}\n\n.image7{\n    background-image: url('Slideshow-1.jpg');\n    background-size: cover;\n}\n\n.slider{\n    overflow: hidden;\n}\n\n@-webkit-keyframes slidy {\n    0% {  left: 0vw; }\n    10% { left: 0vw; }\n    20% { left: -100vw; }\n    30% { left: -100vw; }\n    40% { left: -200vw; }\n    50% { left: -200vw; }\n    60% { left: -300vw; }\n    70% { left: -300vw; }\n    80% { left: -400vw; }\n    90% { left: -400vw; }\n    100%{ left: -500vw;}\n    }\n\n@keyframes slidy {\n    0% {  left: 0vw; }\n    10% { left: 0vw; }\n    20% { left: -100vw; }\n    30% { left: -100vw; }\n    40% { left: -200vw; }\n    50% { left: -200vw; }\n    60% { left: -300vw; }\n    70% { left: -300vw; }\n    80% { left: -400vw; }\n    90% { left: -400vw; }\n    100%{ left: -500vw;}\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBc0Y7SUFDdEYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0NBQXNGO0lBQ3RGLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdDQUFzRjtJQUN0RixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBdUY7SUFDdkYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXVGO0lBQ3ZGLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF1RjtJQUN2RixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3Q0FBc0Y7SUFDdEYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksTUFBTSxTQUFTLEVBQUU7SUFDakIsTUFBTSxTQUFTLEVBQUU7SUFDakIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLEVBQUU7SUFDcEIsTUFBTSxZQUFZLENBQUM7SUFDbkI7O0FBWko7SUFDSSxNQUFNLFNBQVMsRUFBRTtJQUNqQixNQUFNLFNBQVMsRUFBRTtJQUNqQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksRUFBRTtJQUNwQixNQUFNLFlBQVksQ0FBQztJQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lckltYWdle1xuICAgIGhlaWdodDogODB2aDtcbn1cblxuLnNsaWRlcjF7XG4gICAgd2lkdGg6IDgwMCU7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFuaW1hdGlvbjogMjBzIHNsaWR5IGluZmluaXRlOyBcbn1cblxuLnNsaWRlcjEgPiBkaXZ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5pbWFnZTF7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2xpZGVzaG93LTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmltYWdlMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Jhbm5lckltYWdlcy9TbGlkZXNob3ctMi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW1hZ2Uze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQmFubmVySW1hZ2VzL1NsaWRlc2hvdy0yLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbWFnZTR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2xpZGUtc2hvdy0zLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbWFnZTV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2xpZGUtc2hvdy01LmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbWFnZTZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2xpZGUtc2hvdy05LmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbWFnZTd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9CYW5uZXJJbWFnZXMvU2xpZGVzaG93LTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNsaWRlcntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWR5IHtcbiAgICAwJSB7ICBsZWZ0OiAwdnc7IH1cbiAgICAxMCUgeyBsZWZ0OiAwdnc7IH1cbiAgICAyMCUgeyBsZWZ0OiAtMTAwdnc7IH1cbiAgICAzMCUgeyBsZWZ0OiAtMTAwdnc7IH1cbiAgICA0MCUgeyBsZWZ0OiAtMjAwdnc7IH1cbiAgICA1MCUgeyBsZWZ0OiAtMjAwdnc7IH1cbiAgICA2MCUgeyBsZWZ0OiAtMzAwdnc7IH1cbiAgICA3MCUgeyBsZWZ0OiAtMzAwdnc7IH1cbiAgICA4MCUgeyBsZWZ0OiAtNDAwdnc7IH1cbiAgICA5MCUgeyBsZWZ0OiAtNDAwdnc7IH1cbiAgICAxMDAleyBsZWZ0OiAtNTAwdnc7fVxuICAgIH0iXX0= */"

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

module.exports = "\n.houseFrame > div{\n    margin: auto;\n    align-items: center;\n    display: grid;\n    grid-template-rows:  5fr 1fr;\n    grid-auto-columns: 1fr;\n    border: 3px solid #f7f7f7;\n    box-shadow: 0 0 3px gray;\n    /*border-top-left-radius: 2vw;*/\n    /*border-top-right-radius: 2vw;*/\n    transition: all 300ms;\n    background-color: #b1c147;\n}\n\n.houseFrame > div:hover{\n\n    transform: translateY(-2%);\n    \n}\n\n.houseFrame > div > div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.houseFrame > div > div> img{\n    \n    height: 70px;\n    max-width: auto;\n    margin-left: auto;\n    margin-right: auto;\n\n}\n\n.houseFrame > div > div:nth-child(1){\n\n}\n\n.houseFrame > div > div:nth-child(2){\n    /*border: 5px solid red;*/\n    background-color: #f7f7f7;\n    border-top:  3px solid #b1c147;\n}\n\n.houseFrame > div > div> p{\n    margin: auto;\n    padding: 10%;\n    text-align: center;\n    color: transparent;\n    background: #666666;\n    text-align: center;\n    font-family: 'Avenir-bold-font';\n    font-size: 1em;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n}\n\n.houseFrame{\n    \n    display: grid;\n    grid-gap: 2%;\n    margin: auto;\n    margin-top: 20vh;\n    align-items: start;\n    margin-bottom: 20vh;\n}\n\n@media only screen and (max-width: 700px){\n    .houseFrame{\n        max-width: 100vw;\n        grid-template-columns: 1fr 1fr;\n\n    }\n\n    .houseFrame > div{\n        max-height: 200px;\n        min-height: 200px;\n        max-width: 150px;\n        min-width: 150px\n    }\n\n}\n\n@media only screen and (min-width: 701px){\n    .houseFrame{\n        max-width: 100vw;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n\n    }\n\n    .houseFrame > div{\n        max-height: 200px;\n        min-height: 200px;\n        max-width: 150px;\n        min-width: 150px;\n    }\n\n}\n\n@media only screen and (min-width: 921px){\n    .houseFrame{\n        max-width: 100vw;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n\n    }\n\n    .houseFrame > div{\n        max-height: 200px;\n        min-height: 200px;\n        max-width: 200px;\n        min-width: 200px\n    }\n}\n\n@media only screen and (min-width: 1224px){\n    .houseFrame{\n        max-width: 70vw;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n\n    }\n\n    .houseFrame > div{\n        max-height: 200px;\n        min-height: 200px;\n        max-width: 200px;\n        min-width: 200px\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQiw4QkFBOEI7O0lBRWxDOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEI7SUFDSjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHNDQUFzQzs7SUFFMUM7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBS0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixzQ0FBc0M7O0lBRTFDOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysc0NBQXNDOztJQUUxQzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhvdXNlRnJhbWUgPiBkaXZ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA1ZnIgMWZyO1xuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IGdyYXk7XG4gICAgLypib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAydnc7Ki9cbiAgICAvKmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAydnc7Ki9cbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0Nztcbn1cblxuLmhvdXNlRnJhbWUgPiBkaXY6aG92ZXJ7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcbiAgICBcbn1cblxuLmhvdXNlRnJhbWUgPiBkaXYgPiBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3VzZUZyYW1lID4gZGl2ID4gZGl2PiBpbWd7XG4gICAgXG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1heC13aWR0aDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbn1cblxuLmhvdXNlRnJhbWUgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDEpe1xuXG59XG5cbi5ob3VzZUZyYW1lID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKXtcbiAgICAvKmJvcmRlcjogNXB4IHNvbGlkIHJlZDsqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgYm9yZGVyLXRvcDogIDNweCBzb2xpZCAjYjFjMTQ3O1xufVxuXG4uaG91c2VGcmFtZSA+IGRpdiA+IGRpdj4gcHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbn1cblxuLmhvdXNlRnJhbWV7XG4gICAgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMiU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG4gICAgLmhvdXNlRnJhbWV7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgIH1cblxuICAgIC5ob3VzZUZyYW1lID4gZGl2e1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHhcbiAgICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCl7XG4gICAgLmhvdXNlRnJhbWV7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXG4gICAgfVxuXG4gICAgLmhvdXNlRnJhbWUgPiBkaXZ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB9XG5cbn1cblxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MjFweCl7XG4gICAgLmhvdXNlRnJhbWV7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXG4gICAgfVxuXG4gICAgLmhvdXNlRnJhbWUgPiBkaXZ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjI0cHgpe1xuICAgIC5ob3VzZUZyYW1le1xuICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXG4gICAgfVxuXG4gICAgLmhvdXNlRnJhbWUgPiBkaXZ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgIH1cbn1cbiJdfQ== */"

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

module.exports = ".RibbonTile1{\n    background-color: #f7f7f7;\n    padding-top: 10vh;\n    padding-bottom: 20vh;\n\n}\n\n\n.lineBreak1{\n    margin: auto;\n    border-bottom: #b1c147 .5vh solid;\n    width: 20%;\n    margin-top: 5vh;\n    margin-bottom: 5vh;\n}\n\n\n.mottoHomePage{\n    margin: auto;\n    text-align: center;\n    width: 70%;\n    color: transparent;\n    background: #666666;\n    margin: auto;\n    margin-top: 9.5vh;\n    text-align: center;\n    font-family: 'helvetica-light';\n    font-size: 1em;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n}\n\n\n@media only screen and (max-width: 800px){\n\n\n    .firstClass{\n        margin: auto;\n        text-align: center;\n        width: 70%;\n        color: transparent;\n        background: #666666;\n        margin: auto;\n        margin-top: 12vh;\n        text-align: center;\n        font-family: 'Avenir-bold-font';\n        font-size: 3em;\n        -webkit-background-clip: text;\n                background-clip: text;\n        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n    }\n\n}\n\n\n@media only screen and (min-width: 801px){\n\n\n    .firstClass{\n        margin: auto;\n        text-align: center;\n        width: 70%;\n        color: transparent;\n        background: #666666;\n        margin: auto;\n        margin-top: 12vh;\n        text-align: center;\n        font-family: 'Avenir-bold-font';\n        font-size: 4em;\n        -webkit-background-clip: text;\n                background-clip: text;\n        text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n        font-weight: bolder;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9maXJzdC1jbGFzcy9maXJzdC1jbGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOzs7QUFHQTs7O0lBR0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixjQUFjO1FBQ2QsNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsOENBQThDO0lBQ2xEOztBQUVKOzs7QUFFQTs7O0lBR0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixjQUFjO1FBQ2QsNkJBQXFCO2dCQUFyQixxQkFBcUI7UUFDckIsOENBQThDO1FBQzlDLG1CQUFtQjtJQUN2Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvZmlyc3QtY2xhc3MvZmlyc3QtY2xhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5SaWJib25UaWxlMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHZoO1xuXG59XG5cblxuLmxpbmVCcmVhazF7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206ICNiMWMxNDcgLjV2aCBzb2xpZDtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG5cbi5tb3R0b0hvbWVQYWdle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogOS41dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhLWxpZ2h0JztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcblxuXG4gICAgLmZpcnN0Q2xhc3N7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTJ2aDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KXtcblxuXG4gICAgLmZpcnN0Q2xhc3N7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTJ2aDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICBcbn0iXX0= */"

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

module.exports = "\n@media only screen and (min-width: 601px){\n    .homePageBottomShow{\n        display: grid;\n        grid-gap: 1vh;\n        height: 120vh;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        grid-template-areas: \"picture1 picture1 picture2 picture2 picture3\" \"picture4 picture5 picture5 picture6 picture6\" \"picture7 picture7 picture8 picture8 picture9\";\n\n    }\n}\n\n@media only screen and (max-width: 600px){\n    .homePageBottomShow{\n        display: inline-block;\n    }\n\n    .homePageBottomShow > div{\n        margin-top: 3vh;\n        height: 50vh;\n    }\n\n    .homePageBottomShow > div:nth-child(3){\n        display: none;\n    }\n\n    .homePageBottomShow > div:nth-child(4){\n        display: none;\n    }\n\n    .homePageBottomShow > div:nth-child(9){\n        display: none;\n    }\n}\n\n.homePageBottomShow > div .text1, .textDivider1 {\n    transition-timing-function: linear;\n    transition: .5s;\n    color: rgba(255, 255, 255, 0);\n    font-family: 'Avenir-font';\n}\n\n.homePageBottomShow > div .textDivider1 {\n    transition-timing-function: linear;\n    transition: .5s;\n    border-bottom-color: rgba(255, 255, 255, 0);\n    width: 0%;\n}\n\n.homePageBottomShow > div:hover .text1 {\n    color: rgba(255, 255, 255, 1);\n}\n\n.homePageBottomShow > div:hover .textDivider1 {\n    border-bottom-color: rgba(255, 255, 255, 1);\n    width: 100%;\n}\n\n.homePageBottomShow > div{\n    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);\n}\n\n.TextDecor1 {\n    margin: auto;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition-timing-function: linear;\n    transition: .5s;\n}\n\n.TextDecor1:hover{\n    background-color: rgba(0, 0, 0, 0.2);\n}\n\n.TextDecor2{\n    font-family: Futura-Font;\n    font-size: 1em;\n    color: white;\n}\n\n.TextDecor2>.text1{\n    padding: 2vh;\n}\n\n.textDivider1{\n    border-bottom: #ffffff 2px solid;\n}\n\n.picture1 { grid-area: picture1; \n    background-image: url('ABC_House_3.0.jpg');\n    background-size: cover;\n}\n\n.picture2 { grid-area: picture2; \n    background-image: url('Wallis_Ranch_Residential.jpg');\n    background-size: cover;\n}\n\n.picture3 { grid-area: picture3; \n    background-color: #c2c2c2;;\n}\n\n.picture4 { grid-area: picture4;\n    background-color: #c2c2c2;;\n}\n\n.picture5 { grid-area: picture5;\n    background-image: url('Carlisle_at_Parasol_Park.jpg');\n    background-size: cover;\n}\n\n.picture6 { grid-area: picture6;\n    background-image: url('Royal_Oaks_Courtyard_Villas_2.jpg');\n    background-size: cover;\n}\n\n.picture7 { grid-area: picture7;\n    background-image: url('Skye-Palm_Springs_2.jpg');\n    background-size: cover;\n}\n\n.picture8 { grid-area: picture8;\n    background-image: url('Revelle_at_Clancy_Lane.jpg');\n    background-size: cover;\n}\n\n.picture9 { grid-area: picture9;\n    background-color: #c2c2c2;;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9ncmlkLWltYWdlcy9ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ2IsMENBQTBDO1FBQzFDLCtCQUErQjtRQUMvQixpS0FBaUs7O0lBRXJLO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxTQUFTO0FBQ2I7O0FBR0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBR0E7SUFDSSwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBLFlBQVksbUJBQW1CO0lBQzNCLDBDQUFvRztJQUNwRyxzQkFBc0I7QUFDMUI7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IscURBQStHO0lBQy9HLHNCQUFzQjtBQUMxQjs7QUFFQSxZQUFZLG1CQUFtQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IseUJBQXlCO0FBQzdCOztBQUVBLFlBQVksbUJBQW1CO0lBQzNCLHFEQUErRztJQUMvRyxzQkFBc0I7QUFDMUI7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IsMERBQW9IO0lBQ3BILHNCQUFzQjtBQUMxQjs7QUFFQSxZQUFZLG1CQUFtQjtJQUMzQixnREFBMEc7SUFDMUcsc0JBQXNCO0FBQzFCOztBQUVBLFlBQVksbUJBQW1CO0lBQzNCLG1EQUE2RztJQUM3RyxzQkFBc0I7QUFDMUI7O0FBRUEsWUFBWSxtQkFBbUI7SUFDM0IseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9ncmlkLWltYWdlcy9ncmlkLWltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXtcbiAgICAuaG9tZVBhZ2VCb3R0b21TaG93e1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWdhcDogMXZoO1xuICAgICAgICBoZWlnaHQ6IDEyMHZoO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicGljdHVyZTEgcGljdHVyZTEgcGljdHVyZTIgcGljdHVyZTIgcGljdHVyZTNcIiBcInBpY3R1cmU0IHBpY3R1cmU1IHBpY3R1cmU1IHBpY3R1cmU2IHBpY3R1cmU2XCIgXCJwaWN0dXJlNyBwaWN0dXJlNyBwaWN0dXJlOCBwaWN0dXJlOCBwaWN0dXJlOVwiO1xuXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAuaG9tZVBhZ2VCb3R0b21TaG93e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdntcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgfVxuXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdjpudGgtY2hpbGQoMyl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdjpudGgtY2hpbGQoNCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdjpudGgtY2hpbGQoOSl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uaG9tZVBhZ2VCb3R0b21TaG93ID4gZGl2IC50ZXh0MSwgLnRleHREaXZpZGVyMSB7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItZm9udCc7XG59XG5cbi5ob21lUGFnZUJvdHRvbVNob3cgPiBkaXYgLnRleHREaXZpZGVyMSB7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB3aWR0aDogMCU7XG59XG5cblxuLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdjpob3ZlciAudGV4dDEge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG5cbi5ob21lUGFnZUJvdHRvbVNob3cgPiBkaXY6aG92ZXIgLnRleHREaXZpZGVyMSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhvbWVQYWdlQm90dG9tU2hvdyA+IGRpdntcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5UZXh0RGVjb3IxIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5UZXh0RGVjb3IxOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLlRleHREZWNvcjJ7XG4gICAgZm9udC1mYW1pbHk6IEZ1dHVyYS1Gb250O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlRleHREZWNvcjI+LnRleHQxe1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuXG4udGV4dERpdmlkZXIxe1xuICAgIGJvcmRlci1ib3R0b206ICNmZmZmZmYgMnB4IHNvbGlkO1xufVxuXG4ucGljdHVyZTEgeyBncmlkLWFyZWE6IHBpY3R1cmUxOyBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9BQkNfSG91c2VfMy4wLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5waWN0dXJlMiB7IGdyaWQtYXJlYTogcGljdHVyZTI7IFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvSW1hZ2VzR3JpZEJvdHRvbUhvbWVQYWdlL1dhbGxpc19SYW5jaF9SZXNpZGVudGlhbC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGljdHVyZTMgeyBncmlkLWFyZWE6IHBpY3R1cmUzOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyOztcbn1cblxuLnBpY3R1cmU0IHsgZ3JpZC1hcmVhOiBwaWN0dXJlNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyOztcbn1cblxuLnBpY3R1cmU1IHsgZ3JpZC1hcmVhOiBwaWN0dXJlNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9DYXJsaXNsZV9hdF9QYXJhc29sX1BhcmsuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBpY3R1cmU2IHsgZ3JpZC1hcmVhOiBwaWN0dXJlNjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9Sb3lhbF9PYWtzX0NvdXJ0eWFyZF9WaWxsYXNfMi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGljdHVyZTcgeyBncmlkLWFyZWE6IHBpY3R1cmU3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvSW1hZ2VzR3JpZEJvdHRvbUhvbWVQYWdlL1NreWUtUGFsbV9TcHJpbmdzXzIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBpY3R1cmU4IHsgZ3JpZC1hcmVhOiBwaWN0dXJlODtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0ltYWdlc0dyaWRCb3R0b21Ib21lUGFnZS9SZXZlbGxlX2F0X0NsYW5jeV9MYW5lLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5waWN0dXJlOSB7IGdyaWQtYXJlYTogcGljdHVyZTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjs7XG59XG5cblxuIl19 */"

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

module.exports = "\n.Panel1Text1{\n        \n    margin : auto;\n    text-align: left;\n    font-size: 2em;\n    color: #ffffff;\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);\n    font-family: 'Futura-Font';\n    padding-top: 3%;\n    padding-bottom: 3%;\n\n}\n\n.Panel1Text2{\n    margin : auto;\n    text-align: left;\n    font-size: 1.5em;\n    color: #ffffff;\n    font-family: 'Sans-condensed-font';\n    padding-bottom: 5%;\n    margin-top: 5%;\n}\n\n.PanelTextUnder{\n    margin: auto;\n    width: 80%;\n}\n\n.Panel1Divider{\n    border-bottom: 2px dotted white;\n}\n\n@media only screen and (min-width: 801px){\n\n    .PanelText{\n        background-color: #b1c147;\n        display: flex;\n    }\n\n    .Panel1{\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-column-gap: 1vh;\n        grid-auto-rows: 1fr;\n        min-height: 50vh;\n    }\n\n    .Panel1Image{\n        background-image: url('HomePagePicture1.jpg');\n        background-size: cover;\n    }\n}\n\n@media only screen and (max-width: 800px){\n\n    .PanelText{\n        background: linear-gradient(rgba(177, 193, 71, 0.8),rgba(177, 193, 71, 0.8)), url('HomePagePicture1.jpg');\n        background-size: cover;\n        display: flex;\n    }\n\n    .Panel1{\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n        min-height: 50vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9ob21lLXBhZ2UtcGFuZWwxL2hvbWUtcGFnZS1wYW5lbDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLDJFQUEyRTtJQUMzRSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFHQTs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksNkNBQThFO1FBQzlFLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBOztJQUVJO1FBQ0kseUdBQTBJO1FBQzFJLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSG9tZVBhZ2UvaG9tZS1wYWdlLXBhbmVsMS9ob21lLXBhZ2UtcGFuZWwxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5QYW5lbDFUZXh0MXtcbiAgICAgICAgXG4gICAgbWFyZ2luIDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpLCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC41KTtcbiAgICBmb250LWZhbWlseTogJ0Z1dHVyYS1Gb250JztcbiAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xuXG59XG5cbi5QYW5lbDFUZXh0MntcbiAgICBtYXJnaW4gOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ1NhbnMtY29uZGVuc2VkLWZvbnQnO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLlBhbmVsVGV4dFVuZGVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODAlO1xufVxuXG4uUGFuZWwxRGl2aWRlcntcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIHdoaXRlO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpe1xuXG4gICAgLlBhbmVsVGV4dHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuUGFuZWwxe1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDF2aDtcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcbiAgICAgICAgbWluLWhlaWdodDogNTB2aDtcbiAgICB9XG5cbiAgICAuUGFuZWwxSW1hZ2V7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvSG9tZVBhZ2VQaWN0dXJlMS5qcGcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuXG4gICAgLlBhbmVsVGV4dHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTc3LCAxOTMsIDcxLCAwLjgpLHJnYmEoMTc3LCAxOTMsIDcxLCAwLjgpKSwgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvTWVkaWFzL0ltYWdlcy9Ib21lUGFnZVBpY3R1cmUxLmpwZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5QYW5lbDF7XG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgICAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIH1cbn0iXX0= */"

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

module.exports = ".wrapper{\n    background: lightgray;\n    padding: 1em;\n    display: grid;\n    grid-template-columns: 70% 30%;\n    /*\n    grid-column-gap: 1em;\n    grid-row-gap: 1em;\n    */\n    grid-gap: 1em;\n}\n\n.bannerImagesHomePage{\n    height: 100vh;\n    width: 100%;\n    /*\n    border-bottom: 1vh;\n    border-bottom-style: solid;\n    border-bottom-color: #b1c147;\n    */\n}\n\n.Over55Years{\n    margin: auto;\n    text-align: center;\n    width: 70%;\n    color: transparent;\n    background: #666666;\n    margin: auto;\n    margin-top: 12vh;\n    text-align: center;\n    font-family: 'Avenir-bold-font';\n    font-size: 5vh;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n}\n\n.Over55YearsLine{\n    border-bottom: #b1c147 solid .7vh;\n    width: 20vw;\n    margin: auto;\n    margin-top: 10vh;\n    margin-bottom: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qjs7O0tBR0M7SUFDRCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWDs7OztLQUlDO0FBQ0w7O0FBS0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7O0FBSUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XG4gICAgLypcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcbiAgICBncmlkLXJvdy1nYXA6IDFlbTtcbiAgICAqL1xuICAgIGdyaWQtZ2FwOiAxZW07XG59XG5cbi5iYW5uZXJJbWFnZXNIb21lUGFnZXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qXG4gICAgYm9yZGVyLWJvdHRvbTogMXZoO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiMWMxNDc7XG4gICAgKi9cbn1cblxuXG5cblxuLk92ZXI1NVllYXJze1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTJ2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcbiAgICBmb250LXNpemU6IDV2aDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbn1cblxuXG5cbi5PdmVyNTVZZWFyc0xpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogI2IxYzE0NyBzb2xpZCAuN3ZoO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG59Il19 */"

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

module.exports = ".EngineeringServices{\n    margin: auto;\n    text-align: center;\n    width: 70%;\n    color: transparent;\n    background: #666666;\n    margin: auto;\n    margin-top: 12vh;\n    text-align: center;\n    font-family: 'Avenir-bold-font';\n    font-size: 2em;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9zZXJ2aWNlcy13b3Jkcy9zZXJ2aWNlcy13b3Jkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9zZXJ2aWNlcy13b3Jkcy9zZXJ2aWNlcy13b3Jkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkVuZ2luZWVyaW5nU2VydmljZXN7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMnZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1ib2xkLWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xufSJdfQ== */"

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

module.exports = ".videoBackGround{\n\n    margin: auto;\n    margin-top: 10vh;\n\n}\n\n.video1{\n\n}\n\n.videoFrame{\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS92aWRlby1pbnRyby92aWRlby1pbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUVBOztBQUVBOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS92aWRlby1pbnRyby92aWRlby1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvQmFja0dyb3VuZHtcblxuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuXG59XG5cbi52aWRlbzF7XG5cbn1cblxuLnZpZGVvRnJhbWV7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuIl19 */"

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
    }
    ngOnInit() {
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

module.exports = ".Image{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.Image img{\n    width: 100%;\n    height: 100%;\n}\n\n.Image p{\n    padding: 10px;\n    color: #b1c147;\n    font-family: 'Avenir-font';\n}\n\na:link{\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tYWdhemluZS1lbGVtZW50L21hZ2F6aW5lLWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTWVkaWEvbWFnYXppbmUtZWxlbWVudC9tYWdhemluZS1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSW1hZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5JbWFnZSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uSW1hZ2UgcHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjYjFjMTQ3O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xufVxuXG5hOmxpbmt7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"

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

module.exports = ".magazineClass{\n    margin: auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 30px;\n    width: 80%;\n    margin-top: 10vh;\n    margin-bottom: 10vh;\n}\n\n.magazineElement{\n    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n    display: flex;\n    align-items: center;\n    height: 200px;\n    width: 150px;\n}\n\n@media screen and (max-width: 1170px){\n    .magazineClass{\n        margin: auto;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n        grid-gap: 30px;\n        width: 80%;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n    }\n}\n\n@media screen and (max-width: 1000px){\n    .magazineClass{\n        margin: auto;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-gap: 30px;\n        width: 80%;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n    }\n}\n\n@media screen and (max-width: 800px){\n    .magazineClass{\n        margin: auto;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-gap: 30px;\n        width: 80%;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n    }\n}\n\n@media screen and (max-width: 560px){\n    .magazineClass{\n        margin: auto;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-gap: 30px;\n        width: 80%;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n    }\n}\n\n@media screen and (max-width: 376px){\n    .magazineClass{\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 80%;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tYWdhemluZS1ncmlkL21hZ2F6aW5lLWdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBFQUEwRTtJQUMxRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDBDQUEwQztRQUMxQyxjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsY0FBYztRQUNkLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLGNBQWM7UUFDZCxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL01lZGlhL21hZ2F6aW5lLWdyaWQvbWFnYXppbmUtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hZ2F6aW5lQ2xhc3N7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuLm1hZ2F6aW5lRWxlbWVudHtcbiAgICBib3gtc2hhZG93OjAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCl7XG4gICAgLm1hZ2F6aW5lQ2xhc3N7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLWdhcDogMzBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgLm1hZ2F6aW5lQ2xhc3N7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuICAgIC5tYWdhemluZUNsYXNze1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpe1xuICAgIC5tYWdhemluZUNsYXNze1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCl7XG4gICAgLm1hZ2F6aW5lQ2xhc3N7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICB9XG59Il19 */"

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

module.exports = ".mediaSpace{\n    margin-top: 10vh;\n}\n\n.backgroundSlogan{\n    background: whitesmoke;\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tZWRpYS1tYWluL21lZGlhLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9NZWRpYS9tZWRpYS1tYWluL21lZGlhLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpYVNwYWNle1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG59XG5cbi5iYWNrZ3JvdW5kU2xvZ2Fue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgcGFkZGluZy10b3A6IDJ2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xufSJdfQ== */"

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
        this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/MediaBanner.jpg";
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

module.exports = ".PictureBanner{\n    --backgroundImageUrl: url('ServiceBanner.jpg');\n    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%),\n    var(--backgroundImageUrl);\n    height: 70vh;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n}\n\n.PictureBanner > p{\n    font-size: 5em;\n    text-align: center;\n    margin: auto;\n    color: white;\n    text-shadow: 0px 2px 3px #555;\n    font-family: 'Avenir-bold-font';\n}\n\n@media only screen and (max-width: 480px){\n    .PictureBanner > p{\n        font-size: 3em;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWJhbm5lci9zZXJ2aWNlLWJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQTRGO0lBQzVGOzZCQUN5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWJhbm5lci9zZXJ2aWNlLWJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlBpY3R1cmVCYW5uZXJ7XG4gICAgLS1iYWNrZ3JvdW5kSW1hZ2VVcmw6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL01lZGlhcy9JbWFnZXMvQmFubmVySW1hZ2VzL1NlcnZpY2VCYW5uZXIuanBnJyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDAsMjEyLDI1NSwwKSAxMDAlKSxcbiAgICB2YXIoLS1iYWNrZ3JvdW5kSW1hZ2VVcmwpO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlBpY3R1cmVCYW5uZXIgPiBwe1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDNweCAjNTU1O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xuICAgIC5QaWN0dXJlQmFubmVyID4gcHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfSBcbn0iXX0= */"

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

module.exports = ".EffeciencyBanner{\n    margin-top: 10vh;\n    background-color: whitesmoke;\n    padding: 2vw;\n}\n\n.Effeciency{\n    margin: auto;\n    text-align: center;\n    font-family: 'Avenir-bold-font';\n    font-size: 2em;\n    margin-bottom: 5vh;\n}\n\n.LineDivider{\n    margin: auto;\n    border-bottom: 2px #b1c147 solid;\n    width: 20%;\n    margin-bottom: 5vh;\n}\n\n.Text1{\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-family: 'Avenir-font';\n    font-size: 1.2em;\n    width: 70vw;\n    margin-bottom: 5vh;\n}\n\n.Text2{\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-family: 'Avenir-font';\n    font-size: 1.2em;\n    width: 70vw;\n    margin-bottom: 5vh;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWVmZmljaWVuY3kvc2VydmljZS1lZmZpY2llbmN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlLWVmZmljaWVuY3kvc2VydmljZS1lZmZpY2llbmN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRWZmZWNpZW5jeUJhbm5lcntcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgcGFkZGluZzogMnZ3O1xufVxuXG4uRWZmZWNpZW5jeXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xufVxuXG4uTGluZURpdmlkZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDJweCAjYjFjMTQ3IHNvbGlkO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xufVxuXG4uVGV4dDF7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1mb250JztcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cblxuLlRleHQye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItZm9udCc7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB3aWR0aDogNzB2dztcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG5cbiJdfQ== */"

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
        this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/ServiceBanner.jpg";
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

module.exports = ".CARDS{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-column-gap: 2vw;\n    margin: auto;\n    margin-top: 10vh;\n    margin-bottom: 10vh;\n    width: 70%;\n}\n\n.card1{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.card{\n    padding: 2vw;\n}\n\n.Text{\n    margin-top: 2vh;\n    border-right: 1px rgb(179, 179, 179) solid;\n    font-family: \"Avenir-font\";\n    padding-right: 2vw;\n    height: 600px;\n}\n\n.ImageIcon{\n    margin: auto;\n    width: 100px;\n    height: 100px;\n    background-color: #b1c147;\n    display: flex;\n    align-items: center;\n    border-radius: 50%;\n}\n\n.image1{\n    margin: auto;\n    width: 50px;\n    height:50px;\n}\n\n.ImageIcon > div> img{\n    width: 50px;\n    height:50px;\n    margin: auto;\n}\n\n.Title{\n    font-family: 'Avenir-bold-font';\n    color: white;\n    background-color: #b1c147;\n    margin: auto;\n    margin-top: 2vh;\n    text-align: center;\n    width: 80%;\n    padding: .5vh 1vw .5vh 1vw;\n    font-size: .75em;\n}\n\nul{\n    list-style-type: disc;\n}\n\n.Text21{\n    font-family: 'Avenir-bold-font';\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n\n.Title24{\n    font-family: 'Avenir-bold-font';\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n    text-align: center;\n}\n\n.Title24Text{\n    text-align: center;\n}\n\n@media only screen and (max-width: 1200px){\n    .CARDS{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-column-gap: 2vw;\n        grid-row-gap: 2vh;\n        margin: auto;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n        width: 90%;\n    } \n\n    .Title{\n        display: none;\n        border: none;\n        height: auto;\n\n    }\n\n    .Text{\n        border: none;\n        height: auto;\n    }\n\n    .card1{\n        align-items: center;\n        background: whitesmoke;\n        padding: 10px;\n    }\n\n\n    \n    ul {\n        list-style-position: inside;\n     }\n\n}\n\n@media only screen and (max-width: 840px){\n    .CARDS{\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-column-gap: 2vw;\n        grid-row-gap: 10vh;\n        margin: auto;\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n        width: 90%;\n    }\n\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXZpY2Utc2VydmljZXMvc2V2aWNlLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjs7OztJQUlBO1FBQ0ksMkJBQTJCO0tBQzlCOztBQUVMOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsVUFBVTtJQUNkOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2VydmljZXMvc2V2aWNlLXNlcnZpY2VzL3NldmljZS1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNBUkRTe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uY2FyZDF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG4uY2FyZHtcbiAgICBwYWRkaW5nOiAydnc7XG59XG5cbi5UZXh0e1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCByZ2IoMTc5LCAxNzksIDE3OSkgc29saWQ7XG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLWZvbnRcIjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG4gICAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLkltYWdlSWNvbntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzE0NztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1hZ2Uxe1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6NTBweDtcbn1cblxuLkltYWdlSWNvbiA+IGRpdj4gaW1ne1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLlRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWMxNDc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAuNXZoIDF2dyAuNXZoIDF2dztcbiAgICBmb250LXNpemU6IC43NWVtO1xufVxuXG51bHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi5UZXh0MjF7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG59XG5cbi5UaXRsZTI0e1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWJvbGQtZm9udCc7XG4gICAgcGFkZGluZy10b3A6IDJ2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlRpdGxlMjRUZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xuICAgIC5DQVJEU3tcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDJ2dztcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAydmg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9IFxuXG4gICAgLlRpdGxle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgIH1cblxuICAgIC5UZXh0e1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuY2FyZDF7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG5cbiAgICBcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICAgfVxuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpe1xuICAgIC5DQVJEU3tcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMnZ3O1xuICAgICAgICBncmlkLXJvdy1nYXA6IDEwdmg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cblxufVxuXG4iXX0= */"

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

module.exports = ".Title1{\n    margin: auto;\n    text-align: center;\n    font-family: \"Avenir-bold-font\";\n    font-size: 2em;\n\n    margin-top: 5vh;\n    margin-bottom: 3vh;\n}\n\n.lineDivider{\n    margin: auto;\n    border-bottom: 2px #b1c147 solid;\n    margin-bottom: 3vh;\n    width: 20%;\n}\n\n.Text1{\n    margin-left: auto;\n    margin-right: auto;\n    width: 50vw;\n    font-family: \"helvetica-light\";\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9zbWVwLXRpdGxlcy9zbWVwLXRpdGxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsY0FBYzs7SUFFZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2VydmljZXMvc21lcC10aXRsZXMvc21lcC10aXRsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaXRsZTF7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJBdmVuaXItYm9sZC1mb250XCI7XG4gICAgZm9udC1zaXplOiAyZW07XG5cbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xufVxuXG4ubGluZURpdmlkZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDJweCAjYjFjMTQ3IHNvbGlkO1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4uVGV4dDF7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYS1saWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"

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

module.exports = ".footer{\n    background-color: whitesmoke;\n    margin-top: 5vh;\n    padding: 1vh;\n    padding-top: 3vh;\n    box-shadow: 0px -5px 6px -2px rgb(204, 204, 204);\n    background-repeat: repeat;\n    display: block;\n}\n\n@media only screen and (max-width: 951px){\n    .gridFooter{\n        display: none;\n    }\n}\n\n@media only screen and (min-width: 952px){\n    .gridFooter{\n        margin: auto;\n        width: 80vw;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n    }\n}\n\n.part{\n    text-align: center;\n    border-left: #b1c147 2px solid;\n}\n\n.thirdF{\n    text-align: left;\n    display: flex;\n    align-items: center;\n}\n\n.middleThirdF{\n    margin: auto;\n}\n\n.first{\n    border-left: 0px;\n}\n\n.title{\n    margin: auto;\n    width: 70%;\n    color: transparent;\n    background: #b1c147;\n    font-family: 'Avenir-bold-font';\n    font-size: 1.2em;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);    \n    margin-bottom: 5%;\n    font-weight: bolder;\n}\n\n.Copyright{\n    margin: auto;\n    text-align: center;\n    padding: 4vh;\n    color: transparent;\n    background: #666666;\n    margin: auto;\n    font-family: 'Avenir-font';\n    font-size: 100%;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);   \n}\n\n.content{\n    margin: auto;\n    width: 100%;\n    color: transparent;\n    background: #666666;\n    margin: auto;\n    font-family: 'Avenir-font';\n    font-size: 80%;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);    \n}\n\na {\n    margin: auto;\n    width: 100%;\n    color: transparent;\n    background: #b1c147;\n    margin: auto;\n    font-family: 'Avenir-font';\n    font-size: 1.2em;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);    \n}\n\n.socialMedia{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-column-gap: .5vw;\n    height: 25px;\n    width: 50%;\n    margin-left: auto;\n    margin-top: \n}\n\n.facebook{\n    background-image: url('facebook.svg');\n    background-size: 100% 100%;\n}\n\n.twitter{\n    background-image: url('twitter.svg');\n    background-size: 100% 100%;    \n}\n\n.instagram{\n    background-image: url('instagram.svg');\n    background-size: 100% 100%;    \n}\n\n.linkedin{\n    background-image: url('linkedin.svg');\n    background-size: 100% 100%;    \n}\n\n.socialMedia > div{\n    cursor: pointer;\n\n}\n\n.space1{\n    padding: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNDQUFzQztJQUMxQztBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLHFDQUErRTtJQUMvRSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQ0FBOEU7SUFDOUUsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksc0NBQWdGO0lBQ2hGLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFDQUErRTtJQUMvRSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIHBhZGRpbmctdG9wOiAzdmg7XG4gICAgYm94LXNoYWRvdzogMHB4IC01cHggNnB4IC0ycHggcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUxcHgpe1xuICAgIC5ncmlkRm9vdGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTJweCl7XG4gICAgLmdyaWRGb290ZXJ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIH1cbn1cblxuLnBhcnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1sZWZ0OiAjYjFjMTQ3IDJweCBzb2xpZDtcbn1cblxuLnRoaXJkRntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1pZGRsZVRoaXJkRntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5maXJzdHtcbiAgICBib3JkZXItbGVmdDogMHB4O1xufVxuXG4udGl0bGV7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6ICNiMWMxNDc7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItYm9sZC1mb250JztcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpOyAgICBcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uQ29weXJpZ2h0e1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHZoO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1mb250JztcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7ICAgXG59XG5cbi5jb250ZW50e1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItZm9udCc7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7ICAgIFxufVxuXG5hIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6ICNiMWMxNDc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7ICAgIFxufVxuXG4uc29jaWFsTWVkaWF7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IC41dnc7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogXG59XG5cbi5mYWNlYm9va3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Zvb3Rlckljb25zL2ZhY2Vib29rLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4udHdpdHRlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Zvb3Rlckljb25zL3R3aXR0ZXIuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7ICAgIFxufVxuLmluc3RhZ3JhbXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Zvb3Rlckljb25zL2luc3RhZ3JhbS5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgICAgXG59XG5cbi5saW5rZWRpbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9NZWRpYXMvSW1hZ2VzL0Zvb3Rlckljb25zL2xpbmtlZGluLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyAgICBcbn1cblxuLnNvY2lhbE1lZGlhID4gZGl2e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4uc3BhY2Uxe1xuICAgIHBhZGRpbmc6IDJ2aDtcbn0iXX0= */"

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

module.exports = "img{\n  max-width: 100%;\n  max-height: auto;\n}\n\n.MenuBar{\n  top: 10vh;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  border-bottom: #b1c147 2px solid;\n}\n\n.logo{\n  z-index: 1;\n  cursor:pointer;\n  margin-left: 5vw;\n  width: 300px;\n}\n\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    background-color: #b1c147;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n    border-left: #afb9b2 0vw solid;\n  }\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #333333;\n    display: block;\n    transition: 0.3s;\n    padding-top: 10vh;\n  }\n\n.sidenav a:hover {\n    color: #f1f1f1;\n  }\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    font-size: 36px;\n    padding-top: 10vh;\n  }\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }\n\n@media only screen and (max-width: 480px){\n    .logo >img:nth-child(1) {\n      display: none;\n    }\n\n    .logo >img:nth-child(2){\n      height: 50px;\n    }\n\n    .menu{\n      margin-left: auto;\n      max-width: auto;\n    }\n\n  }\n\n.menu{\n    margin-right: 10vw;\n    z-index: 1;\n    cursor:pointer;\n    margin-left: auto;\n    width: 30px;\n  }\n\n@media only screen and (min-width: 481px){\n      .logo>img:nth-child(2){\n        display: none;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbG9nby1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFHQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztJQUM1QixZQUFZLGVBQWUsQ0FBQztFQUM5Qjs7QUFFQTtJQUNFO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7O0VBRUY7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUdBO01BQ0k7UUFDRSxhQUFhO01BQ2Y7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28taG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogYXV0bztcbn1cblxuLk1lbnVCYXJ7XG4gIHRvcDogMTB2aDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbTogI2IxYzE0NyAycHggc29saWQ7XG59XG5cbi5sb2dve1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG5cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWMxNDc7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgYm9yZGVyLWxlZnQ6ICNhZmI5YjIgMHZ3IHNvbGlkO1xuICB9XG4gIFxuICAuc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgfVxuICBcbiAgLnNpZGVuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIC5zaWRlbmF2IC5jbG9zZWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGFkZGluZy10b3A6IDEwdmg7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xuICAgIC5sb2dvID5pbWc6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmxvZ28gPmltZzpudGgtY2hpbGQoMil7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLm1lbnV7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1heC13aWR0aDogYXV0bztcbiAgICB9XG5cbiAgfVxuXG4gIC5tZW51e1xuICAgIG1hcmdpbi1yaWdodDogMTB2dztcbiAgICB6LWluZGV4OiAxO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG5cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KXtcbiAgICAgIC5sb2dvPmltZzpudGgtY2hpbGQoMil7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gIH0iXX0= */"

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

module.exports = ".quoteBlock{\n    padding: 5vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /*border: .3vh solid red;*/\n    /*border-right: 5px solid #b1c147;*/\n\n}\n\n/*\n.quoteSentence{\n    border: .5vw double #b1c147;\n    border-top-right-radius: 5vw;\n    border-bottom-left-radius: 5vw;\n    padding: 2vw;\n    font-family: 'OldeEnglish-Font';\n    font-size: 5vh;\n    color: #868686;\n    text-align: center;\n    background-size: cover;\n    background-color: rgb(225, 247, 192);\n    text-shadow: 1px 1px 2px black;\n}\n*/\n\n.author {\n    margin: auto;\n    text-align: right;\n    padding-right: 2vw;\n}\n\n.quoteSentence\n{\n    border: .5vw #b1c147;\n    padding: 10%;\n    font-family: 'Catherine-font';\n    font-size: 3vh;\n    color: #381f1f;\n    text-align: center;\n    background-size: cover;\n    background-color: rgb(225, 247, 192);\n    text-shadow: 2px 2px 2px rgba(206,89,55,0);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.quoteSentence > p:nth-child(2){\n    text-align: right;\n    font-size: 2.5vh;\n}\n\n.quoteSentence:hover {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n\n.ourProfession {\n    margin: auto;\n    text-align: center;\n    width: 100%;\n    color: transparent;\n    background: #666666;\n    margin: auto;\n    margin-bottom: 12vh;\n    text-align: center;\n    font-family: 'Catherine-font';\n    font-size: 2vw;\n    -webkit-background-clip: text;\n            background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdW90ZS1ibG9jay9xdW90ZS1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixtQ0FBbUM7O0FBRXZDOztBQUVBOzs7Ozs7Ozs7Ozs7OztDQWNDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsa0VBQWtFO0lBQ2xFLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzRUFBc0U7RUFDeEU7O0FBRUY7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4Q0FBOEM7RUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1b3RlLWJsb2NrL3F1b3RlLWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGVCbG9ja3tcbiAgICBwYWRkaW5nOiA1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLypib3JkZXI6IC4zdmggc29saWQgcmVkOyovXG4gICAgLypib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYjFjMTQ3OyovXG5cbn1cblxuLypcbi5xdW90ZVNlbnRlbmNle1xuICAgIGJvcmRlcjogLjV2dyBkb3VibGUgI2IxYzE0NztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXZ3O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDV2dztcbiAgICBwYWRkaW5nOiAydnc7XG4gICAgZm9udC1mYW1pbHk6ICdPbGRlRW5nbGlzaC1Gb250JztcbiAgICBmb250LXNpemU6IDV2aDtcbiAgICBjb2xvcjogIzg2ODY4NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyNDcsIDE5Mik7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xufVxuKi9cblxuLmF1dGhvciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcbn1cblxuLnF1b3RlU2VudGVuY2VcbntcbiAgICBib3JkZXI6IC41dncgI2IxYzE0NztcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgZm9udC1mYW1pbHk6ICdDYXRoZXJpbmUtZm9udCc7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgY29sb3I6ICMzODFmMWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjQ3LCAxOTIpO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDIwNiw4OSw1NSwwKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG59XG5cbi5xdW90ZVNlbnRlbmNlID4gcDpudGgtY2hpbGQoMil7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnF1b3RlU2VudGVuY2U6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG4gIH1cblxuLm91clByb2Zlc3Npb24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEydmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F0aGVyaW5lLWZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICB9XG5cbiAgIl19 */"

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

module.exports = __webpack_require__(/*! /home/daongo/Desktop/GouvisWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map