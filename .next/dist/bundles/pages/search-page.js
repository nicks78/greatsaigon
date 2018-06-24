module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_IMG; });
/* unused harmony export GRAB_LOGO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GOOGLE_API; });
var API_ENDPOINT = 'https://backend.greatsaigon.com/api/v1/en/';
var DEFAULT_IMG = 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg';
var GRAB_LOGO = 'https://www.underconsideration.com/brandnew/archives/grab_logo.png';
var GOOGLE_API = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCohqkwd-MPh_pYfULL3GOnr_IupFfi5gs&v=3.exp&libraries=geometry,drawing,places';

/***/ }),

/***/ "./components/cards/card-venue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_constant__ = __webpack_require__("./api/constant.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/cards/card-venue.js";





var shortDesc = function shortDesc(desc, maxLength) {
  var trimmedString = desc.substr(0, maxLength);
  return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
};

var CardVenue = function CardVenue(_ref) {
  var venue = _ref.venue;

  var image = venue.img ? venue.img.path : __WEBPACK_IMPORTED_MODULE_3__api_constant__["b" /* DEFAULT_IMG */];
  var slug = venue.slug;
  var name = venue.name;
  var id = venue.id;
  var address = venue.address;
  var ward = venue.ward;
  var district = venue.district;
  var description = void 0;
  venue.description !== "" ? description = shortDesc(venue.description, 100) : description = "Among Saigon’s myriad relaxation and entertainment destination, this is a great place to chill out, enjoy the unique city scenery and give yourself a special treat";

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-4041905730" + " " + "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-4041905730" + " " + "uk-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
        {
          as: "/profile-venue/" + slug + "/" + id,
          href: "/profile-venue/?=slug" + slug + "/?id=" + id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          style: { backgroundImage: "url(" + image + ")" },
          className: "jsx-4041905730" + " " + "imgCard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-4041905730" + " " + "gs-card-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          {
            as: "/profile-venue/" + slug + "/" + id,
            href: "/profile-venue/?=slug" + slug + "/?id=" + id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "h2",
            { style: { textAlign: "left" }, className: "jsx-4041905730" + " " + "card-title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            name
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          style: { width: "30px" },
          src: "https://greatsaigon.com/content/images/greatsaigon-marker-map.png",
          className: "jsx-4041905730",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "span",
          {
            className: "jsx-4041905730" + " " + "uk-text-muted",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          address,
          " ",
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", { "data-uk-icon": "location", className: "jsx-4041905730",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }),
          " District ",
          district
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
          className: "jsx-4041905730" + " " + "uk-divider-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-4041905730" + " " + "desc",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          description,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            {
              as: "/profile-venue/" + slug + "/" + id,
              href: "/profile-venue/?=slug" + slug + "/?id=" + id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "span",
              {
                className: "jsx-4041905730" + " " + "btn_read_more",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              "...Read More"
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4041905730",
      css: ".card-container{padding-left:10px;padding-bottom:7px;padding-top:10px;}.uk-card{display:grid;grid-template-columns:1fr 1fr;box-shadow:0px 0px 44.16px 1.84px rgba(0,0,0,0.14);background-color:#fff;border:1px solid #ddd;-webkit-transition:all 0.5s ease-in-out 0.1s;transition:all 0.5s ease-in-out 0.1s;}.uk-card:hover{border:2px solid #f50633;}.card-title{padding-top:32px;color:#101820;font:22px/28px \"Calibre-Large\";-webkit-letter-spacing:0.086em;-moz-letter-spacing:0.086em;-ms-letter-spacing:0.086em;letter-spacing:0.086em;text-transform:uppercase;line-height:28px;}.card-title:hover{color:#f50633;cursor:pointer;}.gs-card-content{padding-left:32px;padding-right:32px;padding-bottom:20px;}.desc{font-family:Roboto,\"Helvetica Neue\",sans-serif;}.btn_read_more{font-weight:100;vertical-align:initial;line-height:0;font-size:0.875rem;padding:0px;color:#f50633;}.btn_read_more:hover{color:rgb(255,130,114);cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}.venue-sub-information{display:grid;grid-template-columns:1fr 1fr;}.venue-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.venue-icon{margin-right:10px;width:25px;}.venue-title{width:150px;color:#000;font-weight:bold;}.venue-data{color:#000;}.imgCard{width:100%;height:300px;border:1px solid #ddd;background-repeat:no-repeat;background-size:cover;background-position:center;-webkit-transition:all 0.5s ease-in-out 0.1s;transition:all 0.5s ease-in-out 0.1s;}.imgCard:hover{cursor:pointer;height:350px;}.card-title{text-align:center;}h4{margin-left:10px;}.grabButton{position:absolute;visibility:hidden;top:60%;right:5px;background-color:#00b140;border-color:#00b140;border-radius:6px;width:130px;height:35px;cursor:pointer;background-repeat:no-repeat;background-size:cover;background-position:center;box-shadow:5px 1px 18px #888888;}.grabButton:focus{box-shadow:5px 10px 18px #888888;background-color:#00b140;outline:none;}@media screen and (max-width:996px){.uk-card{display:grid;grid-template-columns:1fr;}.grabButton{visibility:visible;}.card-container{padding:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZHMvY2FyZC12ZW51ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRVMsQUFHK0IsQUFLTCxBQVFZLEFBSVIsQUFRSCxBQUlJLEFBSytCLEFBR2pDLEFBUVMsQUFLWixBQUlBLEFBSUssQUFJTixBQUtELEFBR0EsQUFTSSxBQUlHLEFBR0QsQUFHQyxBQWdCZSxBQU1sQixBQUlNLEFBR1AsV0FsRGhCLEFBR2UsQ0FSRixBQXdEWCxDQWpIOEIsQUE2Q0EsQUE2REYsQ0F0RmIsQ0FzREYsQ0ExQ1UsQ0FwQlQsQUFxRWhCLENBdEZxQixBQTZCQSxBQTZCUixBQXlCYixBQU1vQixDQTBCbEIsSUF0RWUsQUFrQkUsQ0FRSyxDQTFEeEIsR0FtRUEsQ0F0REEsQUFpQ0EsRUF6Q2lDLEVBdUZOLEdBZmpCLENBekZTLEFBNkJHLENBZ0JNLENBUlosQUEwRWQsQ0FoREYsR0ExRHdELEFBNkN4RCxDQXdDWSxFQW5Ca0IsQ0F0QzlCLE1BS3FCLENBckNyQixBQTBGMkIsR0E3RDNCLENBMkVlLElBdkZVLFNBd0Z6QixDQW5FYyxFQWNLLEFBbUJLLEtBb0JELEtBcERQLFVBbENRLEVBbUVLLEVBaEM3QixBQUtBLEVBK0NvQixnQkF0RkksRUF1RlYsS0FwQnlCLE9BcUJ6QixPQXpDZCxDQTlDdUMsSUF3RnRCLGVBQ2EsY0E5RUgsY0ErRUgsV0E5RUwsU0F1RG5CLEVBd0I2QixNQTlFN0IsT0FaQSxjQTJGa0MsZ0NBQ2xDIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FyZHMvY2FyZC12ZW51ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xhcy9TaXRlcy9ncmVhdHNhaWdvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IERFRkFVTFRfSU1HLCBHUkFCX0xPR08gfSBmcm9tIFwiLi4vLi4vYXBpL2NvbnN0YW50XCI7XG5cbmNvbnN0IHNob3J0RGVzYyA9IChkZXNjLCBtYXhMZW5ndGgpID0+IHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSBkZXNjLnN1YnN0cigwLCBtYXhMZW5ndGgpO1xuICByZXR1cm4gKHRyaW1tZWRTdHJpbmcgPSB0cmltbWVkU3RyaW5nLnN1YnN0cihcbiAgICAwLFxuICAgIE1hdGgubWluKHRyaW1tZWRTdHJpbmcubGVuZ3RoLCB0cmltbWVkU3RyaW5nLmxhc3RJbmRleE9mKFwiIFwiKSlcbiAgKSk7XG59O1xuXG5jb25zdCBDYXJkVmVudWUgPSAoeyB2ZW51ZSB9KSA9PiB7XG4gIHZhciBpbWFnZSA9IHZlbnVlLmltZyA/IHZlbnVlLmltZy5wYXRoIDogREVGQVVMVF9JTUc7XG4gIHZhciBzbHVnID0gdmVudWUuc2x1ZztcbiAgdmFyIG5hbWUgPSB2ZW51ZS5uYW1lO1xuICB2YXIgaWQgPSB2ZW51ZS5pZDtcbiAgdmFyIGFkZHJlc3MgPSB2ZW51ZS5hZGRyZXNzO1xuICB2YXIgd2FyZCA9IHZlbnVlLndhcmQ7XG4gIHZhciBkaXN0cmljdCA9IHZlbnVlLmRpc3RyaWN0O1xuICBsZXQgZGVzY3JpcHRpb247XG4gIHZlbnVlLmRlc2NyaXB0aW9uICE9PSBcIlwiXG4gICAgPyAoZGVzY3JpcHRpb24gPSBzaG9ydERlc2ModmVudWUuZGVzY3JpcHRpb24sIDEwMCkpXG4gICAgOiAoZGVzY3JpcHRpb24gPVxuICAgICAgICBcIkFtb25nIFNhaWdvbuKAmXMgbXlyaWFkIHJlbGF4YXRpb24gYW5kIGVudGVydGFpbm1lbnQgZGVzdGluYXRpb24sIHRoaXMgaXMgYSBncmVhdCBwbGFjZSB0byBjaGlsbCBvdXQsIGVuam95IHRoZSB1bmlxdWUgY2l0eSBzY2VuZXJ5IGFuZCBnaXZlIHlvdXJzZWxmIGEgc3BlY2lhbCB0cmVhdFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNhcmRcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBhcz17YC9wcm9maWxlLXZlbnVlLyR7c2x1Z30vJHtpZH1gfVxuICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS12ZW51ZS8/PXNsdWcke3NsdWd9Lz9pZD0ke2lkfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDYXJkXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdzLWNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBhcz17YC9wcm9maWxlLXZlbnVlLyR7c2x1Z30vJHtpZH1gfVxuICAgICAgICAgICAgaHJlZj17YC9wcm9maWxlLXZlbnVlLz89c2x1ZyR7c2x1Z30vP2lkPSR7aWR9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBweFwiIH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dyZWF0c2FpZ29uLmNvbS9jb250ZW50L2ltYWdlcy9ncmVhdHNhaWdvbi1tYXJrZXItbWFwLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1ay10ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICB7YWRkcmVzc30gPHNwYW4gZGF0YS11ay1pY29uPVwibG9jYXRpb25cIiAvPiBEaXN0cmljdCB7ZGlzdHJpY3R9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ1ay1kaXZpZGVyLWljb25cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXM9e2AvcHJvZmlsZS12ZW51ZS8ke3NsdWd9LyR7aWR9YH1cbiAgICAgICAgICAgICAgaHJlZj17YC9wcm9maWxlLXZlbnVlLz89c2x1ZyR7c2x1Z30vP2lkPSR7aWR9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuX3JlYWRfbW9yZVwiPi4uLlJlYWQgTW9yZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke0dSQUJfTE9HT30pYH19Y2xhc3NOYW1lPSdncmFiQnV0dG9uJz48L2J1dHRvbj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJzaG93LW1vcmUtYnRuXCI+U2hvdyBtb3JlPC9idXR0b24+ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51ay1jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQ0LjE2cHggMS44NHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0IDAuMXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51ay1jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNTA2MzM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogIzEwMTgyMDtcbiAgICAgICAgICAgIGZvbnQ6IDIycHgvMjhweCBcIkNhbGlicmUtTGFyZ2VcIjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4NmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC10aXRsZTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2Y1MDYzMztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdzLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXNjIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bl9yZWFkX21vcmUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmNTA2MzM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG5fcmVhZF9tb3JlOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxMzAsIDExNCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlbnVlLXN1Yi1pbmZvcm1hdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmVudWUtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52ZW51ZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmVudWUtdGl0bGUge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlbnVlLWRhdGEge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdDYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0IDAuMXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdDYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ncmFiQnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHRvcDogNjAlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIxNDA7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGIxNDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxcHggMThweCAjODg4ODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ3JhYkJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg4ODg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMTQwO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcbiAgICAgICAgICAgIC51ay1jYXJkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JhYkJ1dHRvbiB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRWZW51ZTtcbiJdfQ== */\n/*@ sourceURL=components/cards/card-venue.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (CardVenue);

/***/ }),

/***/ "./components/filters/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/filters/filter.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          style: { height: "auto", paddingLeft: "32px" },
          className: "jsx-4262777612" + " " + "uk-flex uk-flex-column uk-visible@m",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h2",
          { style: { marginBottom: "-60px" }, className: "jsx-4262777612",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          "Filters"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
          className: "jsx-4262777612",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }),
        __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].FilterList.map(function (fil, index) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { key: index, id: "", className: "jsx-4262777612" + " " + "uk-margin-bottom",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
              style: { width: "50px", cursor: "pointer" },
              src: fil.logo,
              alt: "",
              className: "jsx-4262777612",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "h3",
              {
                className: "jsx-4262777612",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              },
              fil.filterTitle
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: "jsx-4262777612",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                { onClick: _this2.props.onClick, className: "jsx-4262777612",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  }
                },
                fil.list.slice(0, 3).map(function (listings, index) {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "label",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr"
                      },
                      htmlFor: fil.filterTitle,
                      key: index,
                      className: "jsx-4262777612" + " " + "uk-flex uk-flex-column uk-margin-top",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "h5",
                      {
                        className: "jsx-4262777612",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        }
                      },
                      listings.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
                      type: "checkbox",
                      name: fil.filterTitle,
                      value: listings.value,
                      className: "jsx-4262777612",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                      }
                    })
                  );
                })
              )
            )
          );
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "4262777612",
          css: "h3{display:inline-block;position:relative;top:10px;left:15px;}input[type='checkbox']{position:relative;width:40px;height:20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#c6c6c6;outline:none;border-radius:20px;box-shadow:inset 0 0 5px rgba(0,0,0,.2);-webkit-transition:.5s;transition:.5s;}input:checked[type='checkbox']{background:lightgreen;}input[type='checkbox']:before{position:absolute;content:'';width:20px;height:20px;border-radius:20px;border:1px solid #c6c6c6;top:-1px;left:0;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 2px 5px rgba(0,0,0,.2);background:#FFF;-webkit-transition:.5s;transition:.5s;}input:checked[type='checkbox']:before{left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURXLEFBR3dDLEFBT0YsQUFhcEIsQUFFcUIsQUFjUixVQUNaLFFBNUJhLEFBY0EsR0F0QkssQ0FtQmxCLE9BVmMsQUFjRCxVQXRCSixDQXVCSyxDQWRJLE9BUlIsSUF1QlcsTUF0QnZCLGFBdUI4Qix5QkFDakIsTUFoQlUsR0FpQlosT0FDYyxTQWpCUixhQUNNLG1CQUNxQixrQ0FnQkQsTUFmeEIsOEJBZ0JDLFFBZmxCLFFBZ0JpQixzQ0FDakIiLCJmaWxlIjoiY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xhcy9TaXRlcy9ncmVhdHNhaWdvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGF0aWNEYXRhIGZyb20gXCIuLi8uLi9zdGF0aWMtZGF0YS9zdGF0aWMtZGF0YVwiO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcImF1dG9cIiwgcGFkZGluZ0xlZnQ6IFwiMzJweFwiIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInVrLWZsZXggdWstZmxleC1jb2x1bW4gdWstdmlzaWJsZUBtXCJcbiAgICAgID5cbiAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCItNjBweFwiIH19PkZpbHRlcnM8L2gyPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAge1N0YXRpY0RhdGEuRmlsdGVyTGlzdC5tYXAoKGZpbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBpZD1cIlwiIGNsYXNzTmFtZT1cInVrLW1hcmdpbi1ib3R0b21cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgIHNyYz17ZmlsLmxvZ299XG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGgzPntmaWwuZmlsdGVyVGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICAgICAgICB7ZmlsLmxpc3Quc2xpY2UoMCwgMykubWFwKChsaXN0aW5ncywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2ZpbC5maWx0ZXJUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1mbGV4IHVrLWZsZXgtY29sdW1uIHVrLW1hcmdpbi10b3BcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57bGlzdGluZ3MubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2ZpbC5maWx0ZXJUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpc3RpbmdzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2M2YzZjNjtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmVlblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2IDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZFt0eXBlPSdjaGVja2JveCddOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIl19 */\n/*@ sourceURL=components/filters/filter.js */"
        })
      );
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ "./components/footer/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_media__ = __webpack_require__("./components/footer/social-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/footer/footer.js";





var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-3125243339",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "footer",
      {
        className: "jsx-3125243339" + " " + "uk-container-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-3125243339" + " " + "uk-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-3125243339" + " " + "footerContainer",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-3125243339",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
              src: "https://greatsaigon.com/content/images/greatsaigon-logo.png",
              alt: "logo",
              width: "170px",
              className: "jsx-3125243339",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "p",
              {
                className: "jsx-3125243339",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              "GreatSaigon provides sleek and clean listings that help you navigate in Saigon(HCMC), find the restaurant right to your taste, or occupy your time here with the most current event.",
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
                className: "jsx-3125243339",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              }),
              "Based in the top robust and colorful city of Vietnam, we are a young, passionate team of expats and locals who are thriving for what\u2019s up in town as well as keen on only genuine and selective content."
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-3125243339",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "h3",
              { style: { color: "#a6a6a6" }, className: "jsx-3125243339",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              "Company"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "ul",
              {
                className: "jsx-3125243339",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "li",
                {
                  className: "jsx-3125243339" + " " + "footerMenu",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: "/about-us", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "a",
                    {
                      className: "jsx-3125243339" + " " + "footerPages",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      }
                    },
                    "About us"
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "li",
                {
                  className: "jsx-3125243339" + " " + "footerMenu",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: "/privacy", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "a",
                    {
                      className: "jsx-3125243339" + " " + "footerPages",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      }
                    },
                    "Privacy"
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "li",
                {
                  className: "jsx-3125243339" + " " + "footerMenu",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: "/contact-us", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "a",
                    {
                      className: "jsx-3125243339" + " " + "footerPages uk-hidden",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    },
                    "Contact us"
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-3125243339",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "h3",
              { style: { color: "#a6a6a6" }, className: "jsx-3125243339",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              "Join Us"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: "/sign-up", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                {
                  className: "jsx-3125243339" + " " + "joinNow uk-hidden",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                "Join Now",
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                  className: "jsx-3125243339" + " " + "fas fa-sign-in-alt",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
              className: "jsx-3125243339",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__social_media__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { style: { border: "1px solid #555" }, className: "jsx-3125243339",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-3125243339" + " " + "uk-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "p",
          { style: { textAlign: "center", paddingBottom: "10px" }, className: "jsx-3125243339",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          "Copyright \xA9 2017, GreatSaigon App, All Rights Reserved."
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "3125243339",
      css: ".uk-container-expand{color:#a6a6a6;background:#252525;padding-top:50px;}.footerPages{color:#a6a6a6;border-bottom:1px solid #555;}.footerPages:hover{color:#ff0000;}.footerContainer{text-align:center;display:grid;grid-template-columns:2fr 1fr 1fr;grid-gap:1em;grid-auto-rows:minmax(100px,auto);}.footerMenu{position:relative;right:14px;list-style-type:none;}.joinNow{position:relative;top:3px;color:#fff;background-color:#ff0000;font-wieght:bold;padding:10px 35px;border:4px solid #ddd;border-radius:25px;-webkit-transition:all 0.5s ease-in-out 0.1s;transition:all 0.5s ease-in-out 0.1s;}.joinNow:hover{color:#ddd;-webkit-text-decoration:none;text-decoration:none;color:#ff0000;background-color:#fff;font-wieght:bold;padding:10px 45px;border:4px solid #ff0000;border-radius:50px;}i{padding-left:8px;}@media screen and (max-width:996px){.footerContainer{grid-template-columns:1fr;}.uk-container-expand{margin-top:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRXlCLEFBR3lCLEFBTUEsQUFLQSxBQUlJLEFBUUEsQUFNQSxBQVlQLEFBV00sQUFLVyxBQUlWLFdBbkJHLEdBekNGLEFBTVUsQUFLL0IsRUFrREUsQ0FURixDQXJDZSxBQVFGLEFBTUgsUUFDRyxBQTJCWCxHQWpDcUIsRUFSYSxFQWZqQixJQThCUSxNQXhCM0IsT0FMQSxBQXVCQSxXQWlCZ0IsQ0FWRyxHQWZKLFVBMEJTLEdBekJhLENBZWpCLGtCQUNJLEFBVUwsZUF6Qm5CLEVBMEJvQixLQVZDLGFBV00sTUFWWSxtQkFXbEIsbUJBQ3JCLDRDQVhBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xhcy9TaXRlcy9ncmVhdHNhaWdvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tIFwiLi9zb2NpYWwtbWVkaWFcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lci1leHBhbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3JlYXRzYWlnb24uY29tL2NvbnRlbnQvaW1hZ2VzL2dyZWF0c2FpZ29uLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE3MHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgR3JlYXRTYWlnb24gcHJvdmlkZXMgc2xlZWsgYW5kIGNsZWFuIGxpc3RpbmdzIHRoYXQgaGVscCB5b3VcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZSBpbiBTYWlnb24oSENNQyksIGZpbmQgdGhlIHJlc3RhdXJhbnQgcmlnaHQgdG8geW91clxuICAgICAgICAgICAgICAgIHRhc3RlLCBvciBvY2N1cHkgeW91ciB0aW1lIGhlcmUgd2l0aCB0aGUgbW9zdCBjdXJyZW50IGV2ZW50LjxiciAvPlxuICAgICAgICAgICAgICAgIEJhc2VkIGluIHRoZSB0b3Agcm9idXN0IGFuZCBjb2xvcmZ1bCBjaXR5IG9mIFZpZXRuYW0sIHdlIGFyZSBhXG4gICAgICAgICAgICAgICAgeW91bmcsIHBhc3Npb25hdGUgdGVhbSBvZiBleHBhdHMgYW5kIGxvY2FscyB3aG8gYXJlIHRocml2aW5nIGZvclxuICAgICAgICAgICAgICAgIHdoYXTigJlzIHVwIGluIHRvd24gYXMgd2VsbCBhcyBrZWVuIG9uIG9ubHkgZ2VudWluZSBhbmQgc2VsZWN0aXZlXG4gICAgICAgICAgICAgICAgY29udGVudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6IFwiI2E2YTZhNlwiIH19PkNvbXBhbnk8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvb3Rlck1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQtdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyUGFnZXNcIj5BYm91dCB1czwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJNZW51XCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyUGFnZXNcIj5Qcml2YWN5PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvb3Rlck1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290ZXJQYWdlcyB1ay1oaWRkZW5cIj5Db250YWN0IHVzPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCIjYTZhNmE2XCIgfX0+Sm9pbiBVczwvaDM+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImpvaW5Ob3cgdWstaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICBKb2luIE5vdzxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgIzU1NVwiIH19IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyXCI+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDE3LCBHcmVhdFNhaWdvbiBBcHAsIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnVrLWNvbnRhaW5lci1leHBhbmQge1xuICAgICAgICAgIGNvbG9yOiAjYTZhNmE2O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyUGFnZXMge1xuICAgICAgICAgIGNvbG9yOiAjYTZhNmE2O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlclBhZ2VzOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJDb250YWluZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XG4gICAgICAgICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJNZW51IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvaW5Ob3cge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgIGZvbnQtd2llZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMC4xcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2luTm93OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RkZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdpZWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQ1cHg7XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2ZmMDAwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAgICAgICAgIC5mb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVrLWNvbnRhaW5lci1leHBhbmQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=components/footer/footer.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/footer/social-media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/footer/social-media.js";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SocialMedia = function SocialMedia() {
  var _React$createElement, _React$createElement2;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "ul",
    {
      style: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "5px"
      },
      className: "jsx-1915318888" + " " + "uk-container uk-container-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "li",
      {
        className: "jsx-1915318888",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        {
          target: "_blank",
          href: "https://www.facebook.com/greatsaigon/",
          className: "jsx-1915318888" + " " + "socialIcons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-1915318888" + " " + "fab fa-facebook-f fa-lg fa-fw fa-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "li",
      {
        className: "jsx-1915318888",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        (_React$createElement = {
          target: "_blank",
          href: "https://www.instagram.com/greatsaigon/?hl=fr"
        }, _defineProperty(_React$createElement, "target", "_blank"), _defineProperty(_React$createElement, "className", "jsx-1915318888" + " " + "socialIcons"), _defineProperty(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 24
        }), _React$createElement),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-1915318888" + " " + "fab fa-instagram fa-lg fa-fw fa-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "li",
      {
        className: "jsx-1915318888",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        (_React$createElement2 = {
          target: "_blank",
          href: "https://www.youtube.com/channel/UCXYdZcHyI-SAsZeT3eUVqxA/videos"
        }, _defineProperty(_React$createElement2, "target", "_blank"), _defineProperty(_React$createElement2, "className", "jsx-1915318888" + " " + "socialIcons"), _defineProperty(_React$createElement2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 34
        }), _React$createElement2),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-1915318888" + " " + "fab fa-youtube fa-lg fa-fw fa-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1915318888",
      css: "a.socialIcons{-webkit-text-decoration:none;text-decoration:none;color:#a6a6a6;}a.socialIcons>i{width:1.3em;line-height:1.3em;}a.socialIcons:hover{-webkit-text-decoration:none;text-decoration:none;color:#fff;}.fa-border{border-color:#a6a6a6;border-radius:1.2em;}.fa-border:hover{border-color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyL3NvY2lhbC1tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3lCLEFBR2dDLEFBS1QsQUFLUyxBQUtBLEFBS0gsWUFkQSxNQWVwQixHQUxzQixTQVR0QixXQVVBLFNBaEJnQixBQVVILFdBQ2IsR0FWQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvb3Rlci9zb2NpYWwtbWVkaWEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sYXMvU2l0ZXMvZ3JlYXRzYWlnb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNvY2lhbE1lZGlhID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx1bFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogXCJub25lXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiXG4gICAgPlxuICAgICAgPGxpPlxuICAgICAgICA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncmVhdHNhaWdvbi9cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbEljb25zXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mIGZhLWxnIGZhLWZ3IGZhLWJvcmRlclwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ncmVhdHNhaWdvbi8/aGw9ZnJcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsSWNvbnNcIlxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbSBmYS1sZyBmYS1mdyBmYS1ib3JkZXJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNYWWRaY0h5SS1TQXNaZVQzZVVWcXhBL3ZpZGVvc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWxJY29uc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEteW91dHViZSBmYS1sZyBmYS1mdyBmYS1ib3JkZXJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYS5zb2NpYWxJY29ucyB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjYTZhNmE2O1xuICAgICAgICB9XG5cbiAgICAgICAgYS5zb2NpYWxJY29ucyA+IGkge1xuICAgICAgICAgIHdpZHRoOiAxLjNlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgIH1cblxuICAgICAgICBhLnNvY2lhbEljb25zOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtYm9yZGVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNhNmE2YTY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtYm9yZGVyOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTWVkaWE7XG4iXX0= */\n/*@ sourceURL=components/footer/social-media.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SocialMedia);

/***/ }),

/***/ "./components/forms/input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/forms/input.js";

//greatsaigon/components/FormComponents/input.js

var Input = function Input(props) {
    var type = props.type,
        placeholder = props.placeholder,
        name = props.name,
        value = props.value,
        classes = props.classes,
        onChangeFunc = props.onChangeFunc,
        options = props.options;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { autoComplete: "off", className: classes, type: type, placeholder: placeholder, value: value, name: name,
        onChange: function onChange(event) {
            onChangeFunc(event, options);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    });
};
/* unused harmony default export */ var _unused_webpack_default_export = (Input);

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_header__ = __webpack_require__("./containers/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer__ = __webpack_require__("./components/footer/footer.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/layout.js";






if (typeof window !== "undefined") {
  var UIkit = __webpack_require__("uikit");
  var Icons = __webpack_require__("uikit/dist/js/uikit-icons");
  UIkit.use(Icons);
}

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "title",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        "Greatsaigon | Food, Events, Shopping and more in saigon (Ho Chi Minh City) Vietnam"
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { charSet: "UTF-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "description",
        content: "Food, Events, Shopping and more in saigon (Ho Chi Minh City) Vietnam",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "keywords", content: "Saigon, restaurants, events, bars", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "author", content: "John Doe", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.9/css/all.css",
        integrity: "sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "icon",
        href: "https://greatsaigon.com/content/images/greatsaigon-marker.png",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_header__["a" /* default */], { menu: props.menu, __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      { style: { margin: props.margin }, className: "jsx-3772654809",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      props.children,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3772654809",
        css: "body{margin:0px;}p{font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDMkIsQUFHd0IsQUFHSSxXQUZqQixJQUdBIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29udGFpbmVycy9oZWFkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBjb25zdCBVSWtpdCA9IHJlcXVpcmUoXCJ1aWtpdFwiKTtcbiAgY29uc3QgSWNvbnMgPSByZXF1aXJlKFwidWlraXQvZGlzdC9qcy91aWtpdC1pY29uc1wiKTtcbiAgVUlraXQudXNlKEljb25zKTtcbn1cblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIEdyZWF0c2FpZ29uIHwgRm9vZCwgRXZlbnRzLCBTaG9wcGluZyBhbmQgbW9yZSBpbiBzYWlnb24gKEhvIENoaSBNaW5oXG4gICAgICAgICAgQ2l0eSkgVmlldG5hbVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiRm9vZCwgRXZlbnRzLCBTaG9wcGluZyBhbmQgbW9yZSBpbiBzYWlnb24gKEhvIENoaSBNaW5oIENpdHkpIFZpZXRuYW1cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiU2FpZ29uLCByZXN0YXVyYW50cywgZXZlbnRzLCBiYXJzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJKb2huIERvZVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Vpa2l0LzMuMC4wLWJldGEuNDAvY3NzL3Vpa2l0Lm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC45L2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtNVNPaUlzQXppSmw2QVdlMEhXUktUWGxmY1NIS21ZVjRSQkYxOFBQSjE3M0t6bjdqek15RnVUdGs4SkE3UVFHMVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dyZWF0c2FpZ29uLmNvbS9jb250ZW50L2ltYWdlcy9ncmVhdHNhaWdvbi1tYXJrZXIucG5nXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgbWVudT17cHJvcHMubWVudX0gLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBwcm9wcy5tYXJnaW4gfX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy91aWtpdC8zLjAuMC1iZXRhLjQwL2pzL3Vpa2l0LWljb25zLm1pbi5qc1wiIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/layout.js */"
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js", __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__footer_footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__("./components/layout.js");
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/loader.js';



var Loader = function Loader() {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__layout__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'uk-text-center', style: { margin: '10%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://zippy.gfycat.com/SkinnySeveralAsianlion.gif', alt: 'loading...', width: '50', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "./components/map/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/map/index.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global google*/





var marker = function marker(item, props) {
  var coordinate = item.coordinates.split(",");
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["Marker"],
    {
      onMouseOver: function onMouseOver() {
        props.onMarkerIn(item);
      },
      position: {
        lat: parseFloat(coordinate[0]),
        lng: parseFloat(coordinate[1])
      }
      // icon="https://greatsaigon.com/Content/images/gs_icon.png"
      , label: item.name.slice(0, 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    props.isMarkerShown === item.id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["InfoWindow"],
      { onCloseClick: props.onMarkerOut, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        { style: { minWidth: "100px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          item.name
        )
      )
    )
  );
};

// AIzaSyCohqkwd-MPh_pYfULL3GOnr_IupFfi5gs
var MyMapComponent = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])({
  googleMapURL: __WEBPACK_IMPORTED_MODULE_2__api_constant__["c" /* GOOGLE_API */],
  loadingElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { height: "100%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }),
  containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { height: "100%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }),
  mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { height: "100%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })
}), __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["withScriptjs"], __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["withGoogleMap"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["GoogleMap"],
    { defaultZoom: 13, defaultCenter: props.initCoordonate, __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    },
    !props.isSingle ? props.result.map(function (item, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        },
        " ",
        marker(item, props),
        " "
      );
    }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      },
      marker(props.result, props),
      " "
    )
  );
});

var MyFancyComponent = function (_React$PureComponent) {
  _inherits(MyFancyComponent, _React$PureComponent);

  function MyFancyComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyFancyComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyFancyComponent.__proto__ || Object.getPrototypeOf(MyFancyComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMarkerShown: false
    }, _this.handleMarkerIn = function (venue) {
      _this.setState({ isMarkerShown: venue.id });
    }, _this.handleMarkerOut = function (venue) {
      _this.setState({ isMarkerShown: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyFancyComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.delayedShowMarker()
    }
  }, {
    key: "render",
    value: function render() {
      // Set default zoom coordonate
      if (this.props.isSingle) {
        var coordinate = {
          lat: parseFloat(this.props.result.coordinates.split(",")[0]),
          lng: parseFloat(this.props.result.coordinates.split(",")[1])
        };
      } else {
        var coordinate = { lat: 10.775255, lng: 106.69576 };
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MyMapComponent, {
        result: this.props.result,
        isSingle: this.props.isSingle,
        isMarkerShown: this.state.isMarkerShown,
        onMarkerIn: this.handleMarkerIn,
        onMarkerOut: this.handleMarkerOut,
        initCoordonate: coordinate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      });
    }
  }]);

  return MyFancyComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (MyFancyComponent);

/***/ }),

/***/ "./components/navigations/dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/dropdown.js";





var Dropdown = function Dropdown(props) {
  var menu = props.menu;

  // if(menu === undefined ){
  //     return <p>Loading...</p>
  // }

  var goToLink = function goToLink(href, as) {
    __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.replace(href, as);
  };

  var loopMenu = function loopMenu(menu, x, y) {
    return menu.slice(x, y).map(function (x, index) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { key: index, style: { marginBottom: "20px", color: "#000" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          {
            as: "/search-page/" + x.slug + "/1/1",
            href: "/search-page/?directories=" + x.slug + "/?where=1/?what=1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            { className: "directories", __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            x.name,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "uk-float-right", "data-uk-icon": "check", __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            })
          )
        ),
        x.subdirectory.map(function (z, index) {
          var as = "/search-page/" + x.slug + "/1/" + z.slug;
          var href = "/search-page/?directories=" + x.slug + "/?where=1/?what=" + z.slug;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            {
              key: index,
              onClick: function onClick() {
                return goToLink(href, as);
              },
              className: "uk-button-text",
              style: { color: "black", margin: "0px 0px 0px 20px" },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            z.name,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            })
          );
        })
      );
    });
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      style: {
        backgroundColor: "#FFF",
        height: "auto",
        width: "80%",
        padding: "2em",
        margin: "0 auto",
        boxShadow: "5px 5px 18px 0px #888888",
        marginBottom: "10px"
      },
      className: "jsx-449868446" + " " + "uk-animation-slide-top-small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      { "data-uk-grid": true, className: "jsx-449868446" + " " + "uk-child-width-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        loopMenu(menu, 0, 3)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        },
        loopMenu(menu, 3, 7)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        loopMenu(menu, 7, 8)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        loopMenu(menu, 8)
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "449868446",
      css: ".directories{border-bottom:1px solid red;}p:hover{cursor:pointer;}.directories{-webkit-transition:0.2s linear;transition:0.2s linear;}.directories:hover{color:red;}.uk-button-text::before{border-bottom:1px solid red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbnMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkV5QixBQUd1QyxBQUdiLEFBR1EsQUFHYixBQUdrQixVQUY5QixLQU5BLGFBSEEsQUFZQSwwQkFOQSIsImZpbGUiOiJjb21wb25lbnRzL25hdmlnYXRpb25zL2Ryb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgRHJvcGRvd24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gcHJvcHM7XG5cbiAgLy8gaWYobWVudSA9PT0gdW5kZWZpbmVkICl7XG4gIC8vICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgLy8gfVxuICBjb25zdCBnb1RvTGluayA9IChocmVmLCBhcykgPT4ge1xuICAgIFJvdXRlci5yZXBsYWNlKGhyZWYsIGFzKTtcbiAgfTtcblxuICBjb25zdCBsb29wTWVudSA9IChtZW51LCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIG1lbnUuc2xpY2UoeCwgeSkubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiLCBjb2xvcjogXCIjMDAwXCIgfX0+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGFzPXtgL3NlYXJjaC1wYWdlLyR7eC5zbHVnfS8xLzFgfVxuICAgICAgICAgICAgaHJlZj17YC9zZWFyY2gtcGFnZS8/ZGlyZWN0b3JpZXM9JHtcbiAgICAgICAgICAgICAgeC5zbHVnXG4gICAgICAgICAgICB9Lz93aGVyZT0xLz93aGF0PTFgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpcmVjdG9yaWVzXCI+XG4gICAgICAgICAgICAgIHt4Lm5hbWV9XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVrLWZsb2F0LXJpZ2h0XCIgZGF0YS11ay1pY29uPVwiY2hlY2tcIiAvPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHt4LnN1YmRpcmVjdG9yeS5tYXAoKHosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgYXMgPSBgL3NlYXJjaC1wYWdlLyR7eC5zbHVnfS8xLyR7ei5zbHVnfWA7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGAvc2VhcmNoLXBhZ2UvP2RpcmVjdG9yaWVzPSR7XG4gICAgICAgICAgICAgIHguc2x1Z1xuICAgICAgICAgICAgfS8/d2hlcmU9MS8/d2hhdD0ke3ouc2x1Z31gO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBnb1RvTGluayhocmVmLCBhcyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24tdGV4dFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luOiBcIjBweCAwcHggMHB4IDIwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3oubmFtZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwidWstYW5pbWF0aW9uLXNsaWRlLXRvcC1zbWFsbFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRlwiLFxuICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgcGFkZGluZzogXCIyZW1cIixcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICBib3hTaGFkb3c6IFwiNXB4IDVweCAxOHB4IDBweCAjODg4ODg4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jaGlsZC13aWR0aC0xLTRcIiBkYXRhLXVrLWdyaWQ+XG4gICAgICAgIDxkaXY+e2xvb3BNZW51KG1lbnUsIDAsIDMpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMzBweFwiIH19Pntsb29wTWVudShtZW51LCAzLCA3KX08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIzMHB4XCIgfX0+e2xvb3BNZW51KG1lbnUsIDcsIDgpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMzBweFwiIH19Pntsb29wTWVudShtZW51LCA4KX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmRpcmVjdG9yaWVzIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9XG4gICAgICAgIHA6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGlyZWN0b3JpZXMge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIC5kaXJlY3Rvcmllczpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAudWstYnV0dG9uLXRleHQ6OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0= */\n/*@ sourceURL=components/navigations/dropdown.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "./components/navigations/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__locales_en_json__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/menu.js";







var Menu = function Menu(props) {
  var showDropdown = props.showDropdown;


  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "nav",
    { "data-uk-navbar": true, className: "jsx-310692265" + " " + "uk-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-310692265" + " " + "uk-navbar-left uk-hidden@m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "ul",
        {
          className: "jsx-310692265" + " " + "uk-navbar-nav",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-310692265",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { "data-uk-toggle": "target: #offcanvas-nav", className: "jsx-310692265",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
              className: "jsx-310692265" + " " + "fas fa-align-justify",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            })
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      { style: { width: "40%", margin: "0 auto" }, className: "jsx-310692265" + " " + "uk-hidden@m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        { href: "/", className: "jsx-310692265" + " " + "uk-navbar-item uk-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          style: { marginLeft: "-50px" },
          src: "https://greatsaigon.com/content/images/greatsaigon-logo.png",
          alt: "logo",
          width: "170px",
          className: "jsx-310692265",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-310692265" + " " + "uk-navbar-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        { href: "/", className: "jsx-310692265" + " " + "uk-navbar-item uk-logo uk-visible@m",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "https://greatsaigon.com/content/images/greatsaigon-logo.png",
          alt: "logo",
          width: "170px",
          className: "jsx-310692265",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "ul",
        {
          style: { color: "#000" },
          className: "jsx-310692265" + " " + "uk-navbar-nav  uk-visible@m  boundery-align",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-310692265" + " " + "uk-visible@m",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
            { as: "/", href: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { style: { color: "#000" }, className: "jsx-310692265" + " " + "gs_link_menu",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.home.toLowerCase()
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-310692265" + " " + "uk-visible@m ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              style: { color: "#000" },

              onClick: showDropdown,
              className: "jsx-310692265" + " " + "gs_link_menu",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.explore
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-310692265" + " " + "uk-visible@m",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
            {
              as: "/directory/restaurant-bar",
              href: "/directory?name=food-and-drink",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { style: { color: "#000" }, className: "jsx-310692265" + " " + "gs_link_menu",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.restaurants_bars
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-310692265" + " " + " uk-hidden",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          "uk-visible@m",
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
            { as: "/events", href: "/events", __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { style: { color: "#000" }, className: "jsx-310692265" + " " + "gs_link_menu",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.events
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-310692265" + " " + "uk-hidden",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          "uk-visible@m",
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
            { as: "/articles", href: "/articles", __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { style: { color: "#000" }, className: "jsx-310692265" + " " + "gs_link_menu",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.articles
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-310692265" + " " + "uk-navbar-right uk-visible@m uk-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "ul",
        {
          className: "jsx-310692265" + " " + "uk-navbar-nav",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
          { as: "/sign-up", href: "/sign-up", __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-310692265" + " " + "Btn SignUp",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              {
                className: "jsx-310692265",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "span",
                {
                  className: "jsx-310692265",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                  className: "jsx-310692265" + " " + "fas fa-user",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                }),
                "\xA0",
                __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.sign_up
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
          { as: "/sign-in", href: "/sign-in", __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-310692265" + " " + "Btn SignIn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              {
                className: "jsx-310692265",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "span",
                {
                  className: "jsx-310692265",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                  className: "jsx-310692265" + " " + "fas fa-power-off",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                }),
                "\xA0",
                __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default.a.sign_in
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "310692265",
      css: ".Btn span{color:white;padding:10px;border-radius:24px;}.Btn:hover{opacity:0.7;}.SignUp span{background-color:red;}.SignIn span{background-color:#f6a406;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbnMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR3lCLEFBR3VCLEFBS0EsQUFHUyxBQUdJLFlBVlosQUFLZixTQUdBLElBUHFCLEFBVXJCLG1CQVRBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbnMvbWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xhcy9TaXRlcy9ncmVhdHNhaWdvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBsb2NhbGVzIGZyb20gXCIuLi8uLi9sb2NhbGVzL2VuLmpzb25cIjtcblxuY29uc3QgTWVudSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBzaG93RHJvcGRvd24gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWxlZnQgdWstaGlkZGVuQG1cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBkYXRhLXVrLXRvZ2dsZT1cInRhcmdldDogI29mZmNhbnZhcy1uYXZcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFsaWduLWp1c3RpZnlcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstaGlkZGVuQG1cIiBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1uYXZiYXItaXRlbSB1ay1sb2dvXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi01MHB4XCIgfX1cbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3JlYXRzYWlnb24uY29tL2NvbnRlbnQvaW1hZ2VzL2dyZWF0c2FpZ29uLWxvZ28ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgd2lkdGg9XCIxNzBweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbmF2YmFyLWl0ZW0gdWstbG9nbyB1ay12aXNpYmxlQG1cIiBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3JlYXRzYWlnb24uY29tL2NvbnRlbnQvaW1hZ2VzL2dyZWF0c2FpZ29uLWxvZ28ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgd2lkdGg9XCIxNzBweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgIHVrLXZpc2libGVAbSAgYm91bmRlcnktYWxpZ25cIlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVrLXZpc2libGVAbVwiPlxuICAgICAgICAgICAgPExpbmsgYXM9XCIvXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19IGNsYXNzTmFtZT1cImdzX2xpbmtfbWVudVwiPlxuICAgICAgICAgICAgICAgIHtsb2NhbGVzLmhvbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWstdmlzaWJsZUBtIFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdzX2xpbmtfbWVudVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dEcm9wZG93bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2FsZXMuZXhwbG9yZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1ay12aXNpYmxlQG1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFzPVwiL2RpcmVjdG9yeS9yZXN0YXVyYW50LWJhclwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvZGlyZWN0b3J5P25hbWU9Zm9vZC1hbmQtZHJpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCIjMDAwXCIgfX0gY2xhc3NOYW1lPVwiZ3NfbGlua19tZW51XCI+XG4gICAgICAgICAgICAgICAge2xvY2FsZXMucmVzdGF1cmFudHNfYmFyc31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIiB1ay1oaWRkZW5cIj5cbiAgICAgICAgICAgIHVrLXZpc2libGVAbVxuICAgICAgICAgICAgPExpbmsgYXM9XCIvZXZlbnRzXCIgaHJlZj1cIi9ldmVudHNcIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19IGNsYXNzTmFtZT1cImdzX2xpbmtfbWVudVwiPlxuICAgICAgICAgICAgICAgIHtsb2NhbGVzLmV2ZW50c31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVrLWhpZGRlblwiPlxuICAgICAgICAgICAgdWstdmlzaWJsZUBtXG4gICAgICAgICAgICA8TGluayBhcz1cIi9hcnRpY2xlc1wiIGhyZWY9XCIvYXJ0aWNsZXNcIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19IGNsYXNzTmFtZT1cImdzX2xpbmtfbWVudVwiPlxuICAgICAgICAgICAgICAgIHtsb2NhbGVzLmFydGljbGVzfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgdWstdmlzaWJsZUBtIHVrLWhpZGRlblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxMaW5rIGFzPVwiL3NpZ24tdXBcIiBocmVmPVwiL3NpZ24tdXBcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJCdG4gU2lnblVwXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiAvPiZuYnNwO3tsb2NhbGVzLnNpZ25fdXB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBhcz1cIi9zaWduLWluXCIgaHJlZj1cIi9zaWduLWluXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiQnRuIFNpZ25JblwiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wb3dlci1vZmZcIiAvPiZuYnNwO3tsb2NhbGVzLnNpZ25faW59XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkJ0biBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5CdG46aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAuU2lnblVwIHNwYW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuU2lnbkluIHNwYW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmE0MDY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXX0= */\n/*@ sourceURL=components/navigations/menu.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./components/navigations/offcanvas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/offcanvas.js";



var Offcanvas = function Offcanvas(props) {
  var menu = props.menu;

  // if(menu === undefined || menu.length === 0){
  //     return <p>Loading...pop</p>
  // }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { id: "offcanvas-nav", "data-uk-offcanvas": "mode: push", __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      {
        className: "uk-offcanvas-bar",
        style: { backgroundColor: "white", paddingTop: "0px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: { margin: "20px 0px 20px 0px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "https://greatsaigon.com/content/images/greatsaigon-logo.png",
          alt: "logo",
          width: "170px",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          style: { color: "red" },
          className: "uk-offcanvas-close",
          type: "button",
          "data-uk-close": true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        {
          className: "uk-nav uk-nav-default",
          "data-uk-accordion": "multiple: true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { style: { color: "#000", borderBottom: "1px solid red" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              "Home"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          { style: { marginTop: "0px" }, className: "uk-hidden", __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: "/events", __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { style: { color: "#000", borderBottom: "1px solid red" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              "Events"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          { style: { marginTop: "0px" }, className: "uk-hidden", __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: "/articles", __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { style: { color: "#000", borderBottom: "1px solid red" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              "Articles"
            )
          )
        ),
        menu.map(function (x, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              key: index,
              className: "uk-parent",
              onClick: function onClick() {
                document.getElementById("offcanvas-nav").classList.remove("uk-open");
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { key: index, as: x.slug, href: x.slug, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                { style: { color: "#000", borderBottom: "1px solid red" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  }
                },
                x.name,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "data-uk-icon": "check", className: "uk-float-right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "ul",
              { className: "uk-nav-sub", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              },
              x.subdirectory.map(function (z, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { key: index, as: z.slug, href: z.slug, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    { className: "link", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "a",
                      {
                        className: "link",
                        style: { color: "#808080" },
                        href: "#",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 78
                        }
                      },
                      z.name
                    )
                  )
                );
              })
            )
          );
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Offcanvas);

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_store__ = __webpack_require__("./redux/store.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/page.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Page = function Page(_Page) {

  return function (_React$Component) {
    _inherits(PageWrapper, _React$Component);

    function PageWrapper() {
      _classCallCheck(this, PageWrapper);

      return _possibleConstructorReturn(this, (PageWrapper.__proto__ || Object.getPrototypeOf(PageWrapper)).apply(this, arguments));
    }

    _createClass(PageWrapper, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
          { store: __WEBPACK_IMPORTED_MODULE_2__redux_store__["a" /* default */], __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Page, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }))
        );
      }
    }]);

    return PageWrapper;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./components/search-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__locales_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_render_html__ = __webpack_require__("react-render-html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_render_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_render_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_page__ = __webpack_require__("./pages/search-page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tag_holder__ = __webpack_require__("./components/search-bar/tag-holder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_input__ = __webpack_require__("./components/forms/input.js");
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/search-bar/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










// Component



var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

    _this.getWhatList = function (category) {

      var dir = _this.state.directories;
      var array = [];

      for (var i = 0; i < dir.length; i++) {
        if (category === dir[i].slug) {
          return array = dir[i].subdirectory;
        }
      }
      return array;
    };

    _this.handleSelect = function (e) {
      var _this$setState;

      var name = e.target.name;
      var value = e.target.value;
      var dir = name === 'directory' ? true : false;

      // Call function to update dropdown-select-what
      if (dir) {
        var what = _this.getWhatList(value);
        _this.setState({
          what: '1',
          where: ''
        });
      }

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, 'drop_what', dir ? what : _this.state.drop_what), _this$setState));
    };

    _this.goToLink = function (href, as) {
      __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.replace(href, as, { shallow: true });
    };

    _this.state = {
      what: '1',
      where: '',
      directory: '1',
      drop_where: __WEBPACK_IMPORTED_MODULE_5__static_data_static_data__["a" /* default */].District,
      drop_what: [],
      drop_directory: [],
      result: [],
      directories: []
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        where: this.props.where || '',
        what: this.props.what || '1',
        directory: this.props.directory || '1'
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // NOT YET WORKING / TO BE FIXED 
      fetch(__WEBPACK_IMPORTED_MODULE_4__api_constant__["a" /* API_ENDPOINT */] + 'directories', {
        mode: 'cors'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var drop_directory = data.filter(function (res) {
          return res.slug;
        });
        _this2.setState({
          directories: data,
          drop_directory: drop_directory
        }, function () {
          _this2.setState({ drop_what: _this2.getWhatList(_this2.state.directory) });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement,
          _this3 = this;

      var _state = this.state,
          where = _state.where,
          what = _state.what,
          directory = _state.directory,
          drop_where = _state.drop_where,
          drop_what = _state.drop_what,
          drop_directory = _state.drop_directory,
          result = _state.result;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3934959866' + ' ' + 'wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'directory', onChange: this.handleSelect, value: directory, className: 'jsx-3934959866' + ' ' + 'uk-select select-directory',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, style: { width: "100%" }, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            },
            'Bar/Restaurant/Nightlife ?'
          ),
          drop_directory.map(function (x, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { key: index, value: x.slug, style: { textTransform: 'capitalize' }, className: 'jsx-3934959866',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              x.name
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'where', onChange: this.handleSelect, value: where, className: 'jsx-3934959866' + ' ' + 'uk-select',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            },
            'Where ?'
          ),
          drop_where.map(function (x, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { key: index, value: x.slug, style: { textTransform: 'capitalize' }, className: 'jsx-3934959866',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                }
              },
              x.name
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'what', onChange: this.handleSelect, value: what, className: 'jsx-3934959866' + ' ' + 'uk-select',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            'What ?'
          ),
          drop_what.map(function (x, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { key: index, value: x.slug, style: { textTransform: 'capitalize' }, className: 'jsx-3934959866',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              },
              x.name
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3934959866' + ' ' + 'search',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3934959866' + ' ' + 'uk-inline',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', (_React$createElement = { className: 'uk-form-icon', style: { color: 'white' } }, _defineProperty(_React$createElement, 'className', 'jsx-3934959866' + ' ' + 'uk-form-icon uk-form-icon-flip fas fa-search fa-lg'), _defineProperty(_React$createElement, '__source', {
              fileName: _jsxFileName,
              lineNumber: 146
            }), _React$createElement)),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onClick: function onClick() {
                _this3.goToLink('/search-page/?directory=' + (directory || 'food-and-drink') + '/?where=' + (where || '1') + '/?what=' + (what || 'restaurant'), '/search-page/' + (directory || 'food-and-drink') + '/' + (where || '1') + '/' + (what || 'restaurant'));
              }, type: 'submit', value: __WEBPACK_IMPORTED_MODULE_6__locales_en_json___default.a.search, className: 'jsx-3934959866' + ' ' + 'submit uk-input',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3934959866',
          css: 'body{margin:0px;}.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;left:25%;box-shadow:8px 8px 20px 8px rgba(0,0,0,0.2);border-radius:25px;background-color:none;width:50%;}.uk-input{height:50px;}.uk-select{height:50px !important;}.fas{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.search input{color:white;background-color:#f50633;border-color:red;}.search input:hover,.search input:focus{background-color:#f6a406;border-color:#f6a406;cursor:pointer;}@media(max-width:960px){.wrapper{width:100%;left:0%;margin-top:5px;display:grid;grid-template-columns:1fr;}.submit{border-bottom-right-radius:0px;border-top-right-radius:0px;}.select-directory{border-bottom-left-radius:0px;border-top-left-radius:0px;}.uk-grid-margin{margin-top:0px;}.search .uk-inline{width:100%;}}@media(min-width:960px){.wrapper .uk-inline:nth-child(2),.wrapper .uk-inline:nth-child(3){padding-left:1px;}.select-directory{border-bottom-left-radius:24px;border-top-left-radius:24px;}.submit{border-bottom-right-radius:24px;border-top-right-radius:24px;}.search{padding-left:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SnFDLEFBR2tDLEFBR0UsQUFTRCxBQUdXLEFBR0gsQUFHUixBQUthLEFBT1osQUFPb0IsQUFJRCxBQUlmLEFBR0osQUFPUSxBQUdZLEFBSUMsQUFJZixXQXBFckIsQUFpQ1ksQUFrQlYsQ0F2Q0YsQUFTMkIsR0EyQnpCLEVBVUEsQUFXQSxFQW5DaUIsSUFuQm5CLEVBV3VCLEtBa0JRLENBSkMsQUFxQkEsQ0FJQyxFQTlCaEIsR0FiRSxTQUtGLENBU2EsT0FiOUIsR0FzQkUsRUFKQSxBQXFCQSxFQWxDRixBQXNDRSxZQTdCQSxDQWxDa0Isa0JBQ1QsU0FDbUMsQ0FhOUMsMkNBWnFCLG1CQUNHLHNCQUNaLFVBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gtYmFyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL3BhZ2UnXG5pbXBvcnQge0FQSV9FTkRQT0lOVH0gZnJvbSAnLi4vLi4vYXBpL2NvbnN0YW50J1xuaW1wb3J0IFN0YXRpY0RhdGEgZnJvbSAnLi4vLi4vc3RhdGljLWRhdGEvc3RhdGljLWRhdGEnXG5pbXBvcnQgbG9jYWxlcyBmcm9tICcuLi8uLi9sb2NhbGVzL2VuLmpzb24nXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi4vLi4vcGFnZXMvc2VhcmNoLXBhZ2UnXG4vLyBDb21wb25lbnRcbmltcG9ydCBUYWdIb2xkZXIgZnJvbSAnLi90YWctaG9sZGVyJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2Zvcm1zL2lucHV0J1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdoYXQ6ICcxJyxcbiAgICAgIHdoZXJlOiAnJyxcbiAgICAgIGRpcmVjdG9yeTogJzEnLFxuICAgICAgZHJvcF93aGVyZTogU3RhdGljRGF0YS5EaXN0cmljdCxcbiAgICAgIGRyb3Bfd2hhdDogW10sXG4gICAgICBkcm9wX2RpcmVjdG9yeTogW10sXG4gICAgICByZXN1bHQ6IFtdLFxuICAgICAgZGlyZWN0b3JpZXM6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aGVyZTogdGhpcy5wcm9wcy53aGVyZSB8fCAnJyxcbiAgICAgIHdoYXQ6IHRoaXMucHJvcHMud2hhdCB8fCAnMScsXG4gICAgICBkaXJlY3Rvcnk6IHRoaXMucHJvcHMuZGlyZWN0b3J5IHx8ICcxJ1xuICAgIH0pXG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgLy8gTk9UIFlFVCBXT1JLSU5HIC8gVE8gQkUgRklYRUQgXG4gICAgZmV0Y2goYCR7QVBJX0VORFBPSU5UfWRpcmVjdG9yaWVzYCwge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfSlcbiAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICB2YXIgZHJvcF9kaXJlY3RvcnkgPSBkYXRhLmZpbHRlciggKHJlcykgPT4geyByZXR1cm4gcmVzLnNsdWcgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgZGlyZWN0b3JpZXM6IGRhdGEsXG4gICAgICAgIGRyb3BfZGlyZWN0b3J5OiBkcm9wX2RpcmVjdG9yeSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bfd2hhdDogdGhpcy5nZXRXaGF0TGlzdCh0aGlzLnN0YXRlLmRpcmVjdG9yeSkgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICB9XG4gICAgXG4gICAgZ2V0V2hhdExpc3QgPSAoY2F0ZWdvcnkpID0+IHtcblxuICAgICAgdmFyIGRpciA9IHRoaXMuc3RhdGUuZGlyZWN0b3JpZXM7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBkaXIubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihjYXRlZ29yeSA9PT0gZGlyW2ldLnNsdWcpe1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5ID0gZGlyW2ldLnN1YmRpcmVjdG9yeSAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cblxuICAgIGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciBkaXIgPSBuYW1lID09PSAnZGlyZWN0b3J5JyA/IHRydWUgOiBmYWxzZVxuXG4gICAgICAgIC8vIENhbGwgZnVuY3Rpb24gdG8gdXBkYXRlIGRyb3Bkb3duLXNlbGVjdC13aGF0XG4gICAgICAgIGlmKCBkaXIgKXtcbiAgICAgICAgICB2YXIgd2hhdCA9IHRoaXMuZ2V0V2hhdExpc3QodmFsdWUpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoYXQ6ICcxJyxcbiAgICAgICAgICAgICAgd2hlcmU6ICcnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlLCBkcm9wX3doYXQ6IGRpciA/IHdoYXQgOiB0aGlzLnN0YXRlLmRyb3Bfd2hhdCB9KVxuICAgIH0gIFxuXG4gICAgZ29Ub0xpbmsgPSAoaHJlZiwgYXMpID0+IHtcbiAgICAgIFJvdXRlci5yZXBsYWNlKGhyZWYsIGFzLCB7c2hhbGxvdzogdHJ1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCB7IHdoZXJlLCB3aGF0LCBkaXJlY3RvcnksIGRyb3Bfd2hlcmUsIGRyb3Bfd2hhdCwgZHJvcF9kaXJlY3RvcnksIHJlc3VsdCB9ID0gdGhpcy5zdGF0ZTtcblxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICB7LyogQ0FURUdPUlkgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZGlyZWN0b3J5XCIgY2xhc3NOYW1lPVwidWstc2VsZWN0IHNlbGVjdC1kaXJlY3RvcnlcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlU2VsZWN0IH0gdmFsdWU9eyBkaXJlY3RvcnkgfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIGRpc2FibGVkIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIn19PkJhci9SZXN0YXVyYW50L05pZ2h0bGlmZSA/PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wX2RpcmVjdG9yeS5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt4LnNsdWd9IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57eC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7LyogV0hFUkUgKi99XG5cblxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ3aGVyZVwiIGNsYXNzTmFtZT1cInVrLXNlbGVjdFwiIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVTZWxlY3QgfSB2YWx1ZT17d2hlcmV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5XaGVyZSA/PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF93aGVyZS5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3guc2x1Z30gc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19Pnt4Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgey8qIFdIQVQgKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIndoYXRcIiBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlU2VsZWN0IH0gdmFsdWU9e3doYXR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgZGlzYWJsZWQ+V2hhdCA/PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF93aGF0Lm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17eC5zbHVnfSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3gubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBTRUFSQ0ggKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1ay1mb3JtLWljb25cIiAgY2xhc3NOYW1lPVwidWstZm9ybS1pY29uIHVrLWZvcm0taWNvbi1mbGlwIGZhcyBmYS1zZWFyY2ggZmEtbGdcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DbGljaz17ICgpID0+IHsgdGhpcy5nb1RvTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL3NlYXJjaC1wYWdlLz9kaXJlY3Rvcnk9JHtkaXJlY3RvcnkgfHwgJ2Zvb2QtYW5kLWRyaW5rJyB9Lz93aGVyZT0ke3doZXJlIHx8ICcxJ30vP3doYXQ9JHt3aGF0IHx8ICdyZXN0YXVyYW50J31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvc2VhcmNoLXBhZ2UvJHtkaXJlY3RvcnkgfHwgJ2Zvb2QtYW5kLWRyaW5rJyB9LyR7d2hlcmUgfHwgJzEnfS8ke3doYXQgfHwgJ3Jlc3RhdXJhbnQnfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfSB9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17IGxvY2FsZXMuc2VhcmNoIH0gY2xhc3NOYW1lPVwic3VibWl0IHVrLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHsgXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudWstaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC51ay1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mYXMge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNjMzO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaCBpbnB1dDpob3ZlciwgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTQwNjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNmE0MDY7XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LWRpcmVjdG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudWstZ3JpZC1tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoIC51ay1pbmxpbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtZGlyZWN0b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuXG5cbiJdfQ== */\n/*@ sourceURL=components/search-bar/index.js */'
        })
      );
    }
  }]);

  return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./components/search-bar/tag-holder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__locales_en_json__);
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/search-bar/tag-holder.js';


//greatsaigon/components/search-bar/tag-holder.js


var TagHolder = function TagHolder(props) {
  var where_tag = props.where_tag,
      what_tag = props.what_tag,
      removeTag = props.removeTag,
      directory_tag = props.directory_tag;


  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: { borderRadius: '24px', minHeight: '50px', width: '100%', marginBottom: '2px', backgroundColor: 'transparent' }, className: 'jsx-472051995',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      { style: { marginTop: '0px' }, className: 'jsx-472051995' + ' ' + 'tag',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      directory_tag !== '1' && directory_tag !== '' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        { style: { textTransform: 'capitalize' }, className: 'jsx-472051995',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        directory_tag,
        '\xA0\xA0*'
      ) : null,
      where_tag.map(function (x, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { onClick: function onClick() {
              removeTag(x, 'where_tag');
            }, key: index, className: 'jsx-472051995',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          x,
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'i',
            {
              className: 'jsx-472051995',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            '\u2613'
          )
        );
      }),
      what_tag.map(function (x, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { onClick: function onClick() {
              removeTag(x, 'what_tag');
            }, key: index, className: 'jsx-472051995',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          x,
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'i',
            {
              className: 'jsx-472051995',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            '\u2613'
          )
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '472051995',
      css: '.tag{text-align:justify;padding:5px 0px 0px 5px;margin-bottom:0px;}.tag span{margin:3px;padding:5px 10px 5px 10px;background-color:#f6a406;border-radius:5px;display:inline-block;text-align:center;color:#333;outline:none;font-size:12px;line-height:1.5;}.tag span i{padding:0px 2px 0px 2px;color:white;margin:2px;}.tag span i:hover{cursor:pointer;color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJhci90YWctaG9sZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCbUMsQUFJb0MsQUFLUixBQVlhLEFBS1QsV0FoQlcsSUFpQmhCLElBdEJjLEtBaUJaLENBTWQsV0FMYSxDQVpjLE1BTFAsSUFrQnBCLGNBakJBLENBS29CLGtCQUNHLHFCQUNILGtCQUNQLFdBQ0UsYUFDRSxlQUNDLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC1iYXIvdGFnLWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xhcy9TaXRlcy9ncmVhdHNhaWdvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vZ3JlYXRzYWlnb24vY29tcG9uZW50cy9zZWFyY2gtYmFyL3RhZy1ob2xkZXIuanNcbmltcG9ydCBsb2NhbGVzIGZyb20gJy4uLy4uL2xvY2FsZXMvZW4uanNvbidcblxuXG5jb25zdCBUYWdIb2xkZXIgPSAocHJvcHMpICA9PiB7XG5cbiAgICBjb25zdCB7IHdoZXJlX3RhZywgd2hhdF90YWcsIHJlbW92ZVRhZywgZGlyZWN0b3J5X3RhZyB9ID0gcHJvcHNcblxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzI0cHgnLCBtaW5IZWlnaHQ6ICc1MHB4Jywgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMnB4JywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhZ1wiIHN0eWxlPXt7IG1hcmdpblRvcDogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgeyBkaXJlY3RvcnlfdGFnICE9PSAnMScgJiYgZGlyZWN0b3J5X3RhZyAhPT0gJycgPyA8c3BhbiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e2RpcmVjdG9yeV90YWd9Jm5ic3A7Jm5ic3A7Kjwvc3Bhbj4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB3aGVyZV90YWcubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gb25DbGljaz17ICgpID0+IHsgcmVtb3ZlVGFnKHgsICd3aGVyZV90YWcnKSB9IH0ga2V5PXtpbmRleH0+e3h9Jm5ic3A7PGk+JiM5NzQ3OzwvaT48L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgd2hhdF90YWcubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gb25DbGljaz17ICgpID0+IHsgcmVtb3ZlVGFnKHgsICd3aGF0X3RhZycpIH0gfSBrZXk9e2luZGV4fT57eH0mbmJzcDs8aT4mIzk3NDc7PC9pPjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cbiAgICAgICAgICAgICAgLnRhZyB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50YWcgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTQwNjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50YWcgc3BhbiBpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMnB4IDBweCAycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50YWcgc3BhbiBpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgfVxuICAgIFxuXG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0hvbGRlcjsiXX0= */\n/*@ sourceURL=components/search-bar/tag-holder.js */'
    })
  );
};

/* unused harmony default export */ var _unused_webpack_default_export = (TagHolder);

/***/ }),

/***/ "./containers/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navigations_menu__ = __webpack_require__("./components/navigations/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigations_offcanvas__ = __webpack_require__("./components/navigations/offcanvas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigations_dropdown__ = __webpack_require__("./components/navigations/dropdown.js");
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/containers/header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      showDropdown: false,
      menu: []
    }, _this.toggleDrawer = function (side, open) {
      return function () {

        _this.setState(_defineProperty({}, side, open));
      };
    }, _this.showDropdown = function () {
      _this.setState({ showDropdown: !_this.state.showDropdown });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ menu: this.props.menu.menu });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ menu: nextProps.menu.menu });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.props.menu.isFetching) {
        return null;
      }
      if (this.state.menu === undefined) {
        return null;
      }

      var menu = this.state.menu;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_navigations_menu__["a" /* default */], { menu: menu, showDropdown: this.showDropdown, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }),
        this.state.showDropdown ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_navigations_dropdown__["a" /* default */], { menu: menu, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }) : '',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_navigations_offcanvas__["a" /* default */], { menu: menu, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        })
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menuReducer
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./locales/en.json":
/***/ (function(module, exports) {

module.exports = {"index_h1":"Events","login":"Login","sign_up":"Sign Up","sign_in":"Sign In","restaurants_bars":"Restaurants/Bars","home":"Home","events":"Events","articles":"Articles","explore":"Explore","username":"Username","password":"Password","h1_page_login":"Connexion","email":"Email","forget_password":"Forget password ?","search":"Search","title_restaurant":"Restaurants","title_beauty":"Beauty & Spa","title_event":"What's going on in Saigon ?","search_tag":"Search tag"}

/***/ }),

/***/ "./pages/search-page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_data_actions__ = __webpack_require__("./redux/data/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_device_detect__ = __webpack_require__("react-device-detect");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_device_detect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_device_detect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_bar__ = __webpack_require__("./components/search-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_map__ = __webpack_require__("./components/map/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cards_card_venue__ = __webpack_require__("./components/cards/card-venue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_filters_filter__ = __webpack_require__("./components/filters/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_loader__ = __webpack_require__("./components/loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/pages/search-page.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var SearchPage = function (_React$Component) {
  _inherits(SearchPage, _React$Component);

  function SearchPage() {
    _classCallCheck(this, SearchPage);

    var _this = _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call(this));

    _this.handleFilterButtons = function (event) {
      var filterIcons = event.target.getAttribute("name");
      var valueInput = event.target.value;
      var apiFilters = "https://backend.greatsaigon.com/api/v1/en/directories/" + _this.state.directory + "/venues";
      __WEBPACK_IMPORTED_MODULE_12_axios___default.a.get(apiFilters).then(function (response) {
        var result = void 0;

        response.data.forEach(function (req) {
          if (filterIcons === "Hair") {
            if (req.options.beauty.hair.treatment !== "0") {
              req.options.beauty.hair.treatment.forEach(function (res) {
                if (res === valueInput) {
                  result = req;
                  _this.state.stockResult.unshift(result);
                }
              });
            }
          } else if (filterIcons === "Nails") {
            if (req.options.beauty.nails.treatment !== "0") {
              req.options.beauty.nails.treatment.forEach(function (res) {
                if (res === valueInput) {
                  result = req;
                  _this.state.stockResult.unshift(result);
                }
              });
            }
          } else if (filterIcons === "Spa & Massage") {
            if (req.options.beauty.spa.treatment !== "0") {
              req.options.beauty.spa.treatment.forEach(function (res) {
                if (res === valueInput) {
                  result = req;
                  _this.state.stockResult.unshift(result);
                }
              });
            }
          }
        });

        _this.setState({
          result: __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.uniq(_this.state.stockResult)
        });
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.state = {
      what: "1",
      where: "",
      directory: "1",
      next: 10,
      prev: 0,
      page: 1,
      isToggle: false,
      stockResult: [],
      result: []
    };
    return _this;
  }

  _createClass(SearchPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.url) this.setState({
        where: this.props.url.query.where,
        what: this.props.url.query.what,
        directory: this.props.url.query.directory
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var api = "venues/search?items=1000&page=1&what=" + this.state.what + "&directory=" + this.state.directory + "&where=" + this.state.where;
      this.props.getList(api);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url) this.setState({
        result: nextProps.result.list
      });
      console.log(this.state.result);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.stockResult);
      if (this.props.result.isFecthing) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_loader__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        });
      }

      var _state = this.state,
          where = _state.where,
          what = _state.what,
          directory = _state.directory,
          result = _state.result,
          drop_what = _state.drop_what;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-1966805774" + " " + "wrapper-search-bar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_search_bar__["a" /* default */], { what: what, where: where, directory: directory, __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-1966805774" + " " + "content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { "data-uk-grid": true, className: "jsx-1966805774",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            },
            this.state.directory === "beauty" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: "jsx-1966805774" + " " + "uk-width-auto@m",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_filters_filter__["a" /* default */], { onClick: this.handleFilterButtons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                style: {
                  height: "100vh",
                  overflow: "auto"
                },
                className: "jsx-1966805774" + " " + "gs-scroll-section uk-width-expand@m",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                }
              },
              !result.status ? result.map(function (x, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { key: index, style: { marginBottom: "10px" }, className: "jsx-1966805774",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 143
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_cards_card_venue__["a" /* default */], { venue: x, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 144
                    }
                  })
                );
              }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                {
                  className: "jsx-1966805774",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  }
                },
                result.msg
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                style: { zIndex: "980" },
                id: "map",

                "data-uk-scrollspy": "cls: uk-animation-slide-right; repeat: false",
                className: "jsx-1966805774" + " " + "uk-width-1-3@m",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 153
                }
              },
              !result.status ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_map__["a" /* default */], { result: result, isSingle: false, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 159
                }
              }) : null
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1966805774",
          css: ".content{background-color:#f1f1f2;border-bottom:1px solid #d0d2d3;margin:1em auto;max-width:100% !important;}.filters_icon{display:grid;grid-template-columns:repeat(2,1fr);}.fas{cursor:pointer;}#map{height:100vh;}@media (max-width:960px){.content{margin:0 auto;width:100%;}#map{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1LVyxBQUd3QyxBQU1aLEFBSUUsQUFHRixBQUlHLEFBSVUsQUFHZCxhQWpCeUIsQUFPdkMsQ0FJZSxDQVBmLFNBV0UsQ0FyQmdDLEFBa0JoQyx3QkFYRixRQU5rQixnQkFDVSwwQkFDNUIiLCJmaWxlIjoicGFnZXMvc2VhcmNoLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sYXMvU2l0ZXMvZ3JlYXRzYWlnb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gXCIuLi9yZWR1eC9kYXRhL2FjdGlvbnNcIjtcbmltcG9ydCB7XG4gIEJyb3dzZXJWaWV3LFxuICBNb2JpbGVWaWV3LFxuICBpc0Jyb3dzZXIsXG4gIGlzTW9iaWxlXG59IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaC1iYXJcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFwXCI7XG5pbXBvcnQgQ2FyZFZlbnVlIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL2NhcmQtdmVudWVcIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmNsYXNzIFNlYXJjaFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdoYXQ6IFwiMVwiLFxuICAgICAgd2hlcmU6IFwiXCIsXG4gICAgICBkaXJlY3Rvcnk6IFwiMVwiLFxuICAgICAgbmV4dDogMTAsXG4gICAgICBwcmV2OiAwLFxuICAgICAgcGFnZTogMSxcbiAgICAgIGlzVG9nZ2xlOiBmYWxzZSxcbiAgICAgIHN0b2NrUmVzdWx0OiBbXSxcbiAgICAgIHJlc3VsdDogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnVybClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aGVyZTogdGhpcy5wcm9wcy51cmwucXVlcnkud2hlcmUsXG4gICAgICAgIHdoYXQ6IHRoaXMucHJvcHMudXJsLnF1ZXJ5LndoYXQsXG4gICAgICAgIGRpcmVjdG9yeTogdGhpcy5wcm9wcy51cmwucXVlcnkuZGlyZWN0b3J5XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBhcGkgPSBgdmVudWVzL3NlYXJjaD9pdGVtcz0xMDAwJnBhZ2U9MSZ3aGF0PSR7XG4gICAgICB0aGlzLnN0YXRlLndoYXRcbiAgICB9JmRpcmVjdG9yeT0ke3RoaXMuc3RhdGUuZGlyZWN0b3J5fSZ3aGVyZT0ke3RoaXMuc3RhdGUud2hlcmV9YDtcbiAgICB0aGlzLnByb3BzLmdldExpc3QoYXBpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy51cmwpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVzdWx0OiBuZXh0UHJvcHMucmVzdWx0Lmxpc3RcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVzdWx0KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckJ1dHRvbnMgPSBldmVudCA9PiB7XG4gICAgdmFyIGZpbHRlckljb25zID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgdmFyIHZhbHVlSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdmFyIGFwaUZpbHRlcnMgPSBgaHR0cHM6Ly9iYWNrZW5kLmdyZWF0c2FpZ29uLmNvbS9hcGkvdjEvZW4vZGlyZWN0b3JpZXMvJHtcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0b3J5XG4gICAgfS92ZW51ZXNgO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGFwaUZpbHRlcnMpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKHJlcSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlckljb25zID09PSBcIkhhaXJcIikge1xuICAgICAgICAgICAgaWYgKHJlcS5vcHRpb25zLmJlYXV0eS5oYWlyLnRyZWF0bWVudCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgcmVxLm9wdGlvbnMuYmVhdXR5LmhhaXIudHJlYXRtZW50LmZvckVhY2gocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzID09PSB2YWx1ZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXE7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b2NrUmVzdWx0LnVuc2hpZnQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVySWNvbnMgPT09IFwiTmFpbHNcIikge1xuICAgICAgICAgICAgaWYgKHJlcS5vcHRpb25zLmJlYXV0eS5uYWlscy50cmVhdG1lbnQgIT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgIHJlcS5vcHRpb25zLmJlYXV0eS5uYWlscy50cmVhdG1lbnQuZm9yRWFjaChyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IHZhbHVlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlcTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tSZXN1bHQudW5zaGlmdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJJY29ucyA9PT0gXCJTcGEgJiBNYXNzYWdlXCIpIHtcbiAgICAgICAgICAgIGlmIChyZXEub3B0aW9ucy5iZWF1dHkuc3BhLnRyZWF0bWVudCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgcmVxLm9wdGlvbnMuYmVhdXR5LnNwYS50cmVhdG1lbnQuZm9yRWFjaChyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IHZhbHVlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlcTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tSZXN1bHQudW5zaGlmdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByZXN1bHQ6IF8udW5pcSh0aGlzLnN0YXRlLnN0b2NrUmVzdWx0KVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3RvY2tSZXN1bHQpO1xuICAgIGlmICh0aGlzLnByb3BzLnJlc3VsdC5pc0ZlY3RoaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHdoZXJlLCB3aGF0LCBkaXJlY3RvcnksIHJlc3VsdCwgZHJvcF93aGF0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1zZWFyY2gtYmFyXCI+XG4gICAgICAgICAgPFNlYXJjaEJhciB3aGF0PXt3aGF0fSB3aGVyZT17d2hlcmV9IGRpcmVjdG9yeT17ZGlyZWN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtdWstZ3JpZD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpcmVjdG9yeSA9PT0gXCJiZWF1dHlcIiAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtYXV0b0BtXCI+XG4gICAgICAgICAgICAgICAgPEZpbHRlciBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpbHRlckJ1dHRvbnN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3Mtc2Nyb2xsLXNlY3Rpb24gdWstd2lkdGgtZXhwYW5kQG1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IXJlc3VsdC5zdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFZlbnVlIHZlbnVlPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8cD57cmVzdWx0Lm1zZ308L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiOTgwXCIgfX1cbiAgICAgICAgICAgICAgaWQ9XCJtYXBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay13aWR0aC0xLTNAbVwiXG4gICAgICAgICAgICAgIGRhdGEtdWstc2Nyb2xsc3B5PVwiY2xzOiB1ay1hbmltYXRpb24tc2xpZGUtcmlnaHQ7IHJlcGVhdDogZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IXJlc3VsdC5zdGF0dXMgPyA8TWFwIHJlc3VsdD17cmVzdWx0fSBpc1NpbmdsZT17ZmFsc2V9IC8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQyZDM7XG4gICAgICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlcnNfaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmFzIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21hcCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNtYXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ3Mtc2Nyb2xsLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBHZXQgYWxsIGRhdGEgZm9yIGNoaWxkIGNvbXBvbmVudHNcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZXN1bHQ6IHN0YXRlLmRhdGFSZWR1Y2VyXG4gIH07XG59O1xuXG4vLyBHZXQgYWxsIGRhdGEgZm9yIGNoaWxkIGNvbXBvbmVudHNcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0OiBhcGkgPT4gZGlzcGF0Y2goZ2V0TGlzdChhcGkpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZShcbiAgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICkoU2VhcmNoUGFnZSlcbik7XG4iXX0= */\n/*@ sourceURL=pages/search-page.js */"
        })
      );
    }
  }]);

  return SearchPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

// Get all data for child components


var mapStateToProps = function mapStateToProps(state) {
  return {
    result: state.dataReducer
  };
};

// Get all data for child components
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getList: function getList(api) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__redux_data_actions__["e" /* getList */])(api));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_10__components_page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(SearchPage)));

/***/ }),

/***/ "./redux/auth/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_LOAD; });
/* unused harmony export getAuth */
/* unused harmony export setLoad */
// src/containers/login/actions.jsx

var LOGIN_LOAD = 'LOGIN_LOAD';

function getAuth(creds) {}

function setLoad() {
    return {
        type: LOGIN_LOAD,
        isFetching: true
    };
}

/***/ }),

/***/ "./redux/auth/authReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./redux/auth/actions.js");
//  src/auth/authReducer



var initialState = [];

var authReducer = function authReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* LOGIN_LOAD */]:
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (authReducer);

/***/ }),

/***/ "./redux/data/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADING; });
/* harmony export (immutable) */ __webpack_exports__["e"] = getList;
/* unused harmony export getSingleObject */
/* unused harmony export setLoading */
/* unused harmony export setList */
/* unused harmony export setSingleObject */
/* unused harmony export resetData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
// redux/menu/actions



var FETCH_LIST = 'FETCH_LIST';
var FETCH_OBJECT = 'FETCH_OBJECT';
var RESET_DATA = 'RESET_DATA';
var LOADING = 'LOADING';

function getList(api) {

    return function (dispatch) {

        // loading 
        dispatch(setLoading());

        // Set auth token 
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + __WEBPACK_IMPORTED_MODULE_0__api_constant__["a" /* API_ENDPOINT */] + api, {}).then(function (response) {
            return response.data;
        }).then(function (list) {
            dispatch(setList(list));
        });
    };
}

function getSingleObject(api) {

    return function (dispatch) {

        // loading 
        dispatch(setLoading());

        // Set auth token 
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('' + __WEBPACK_IMPORTED_MODULE_0__api_constant__["a" /* API_ENDPOINT */] + api, {}).then(function (response) {
            return response.data;
        }).then(function (res) {
            dispatch(setSingleObject(res));
        });
    };
}

function setLoading() {
    return {
        type: LOADING,
        isFetching: true
    };
}

function setList(list) {
    return {
        type: FETCH_LIST,
        list: list
    };
}

function setSingleObject(payload) {
    return {
        type: FETCH_OBJECT,
        payload: payload
    };
}

function resetData() {
    return {
        type: RESET_DATA,
        list: []
    };
}

/***/ }),

/***/ "./redux/data/dataReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./redux/data/actions.js");






var initialState = [];

var dataReducer = function dataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* LOADING */]:
            return {
                isFetching: true,
                list: []
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* FETCH_LIST */]:
            return {
                isFetching: false,
                list: action.list
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* FETCH_OBJECT */]:
            return {
                isFetching: false,
                payload: action.payload
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* RESET_DATA */]:
            return initialState;
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (dataReducer);

/***/ }),

/***/ "./redux/menu/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_FETCH; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getMenu;
/* unused harmony export setMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
// redux/menu/actions



var MENU_FETCH = 'MENU_FETCH';

function getMenu() {

    return function (dispatch) {

        // Set auth token 
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_0__api_constant__["a" /* API_ENDPOINT */] + 'directories', {}).then(function (response) {
            return response.data;
        }).then(function (menu) {
            dispatch(setMenu(menu));
        });
    };
}

function setMenu(menu) {
    return {
        type: MENU_FETCH,
        menu: menu
    };
}

/***/ }),

/***/ "./redux/menu/menuReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./redux/menu/actions.js");



var initialState = [];

var menuReducer = function menuReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* MENU_FETCH */]:
            return {
                menu: action.menu
            };
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (menuReducer);

/***/ }),

/***/ "./redux/reducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authReducer__ = __webpack_require__("./redux/auth/authReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menuReducer__ = __webpack_require__("./redux/menu/menuReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_dataReducer__ = __webpack_require__("./redux/data/dataReducer.js");





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    authReducer: __WEBPACK_IMPORTED_MODULE_1__auth_authReducer__["a" /* default */],
    menuReducer: __WEBPACK_IMPORTED_MODULE_2__menu_menuReducer__["a" /* default */],
    dataReducer: __WEBPACK_IMPORTED_MODULE_3__data_dataReducer__["a" /* default */]
}));

/***/ }),

/***/ "./redux/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./redux/reducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_actions__ = __webpack_require__("./redux/menu/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_actions__ = __webpack_require__("./redux/data/actions.js");
// redux store 






// import {persistStore, autoRehydrate} from 'redux-persist'

var logger = function logger(store) {
    return function (next) {
        return function (action) {
            if (typeof action !== "function") {
                console.log('dispatching:', action);
            }
            return next(action);
        };
    };
};

var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(logger, __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)));

store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__menu_actions__["b" /* getMenu */])());

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "./static-data/static-data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var StaticData = {
  Restaurants: {
    id: 0,
    headings: "Restaurants",
    cardItems: [{
      id: 1,
      title: "Vietnamese",
      slug: "vietnamese",
      img: "https://greatsaigon.com/content/images/photo-1503764654157-72d979d9af2f.jpg"
    }, {
      id: 2,
      title: "Italian",
      slug: "italien",
      img: "https://greatsaigon.com/content/images/italian.jpg"
    }, {
      id: 3,
      title: "Japanese",
      slug: "japanese",
      img: "https://greatsaigon.com/content/images/photo-1515692688679-6e42f517b64d.jpg"
    }, {
      id: 4,
      title: "French",
      slug: "french",
      img: "https://greatsaigon.com/content/images/french.jpg"
    }, {
      id: 5,
      title: "Korean",
      slug: "korean",
      img: "https://greatsaigon.com/content/images/korea.jpg"
    }, {
      id: 6,
      title: "Chinese",
      slug: "chinese",
      img: "https://greatsaigon.com/content/images/chinese.jpg"
    }]
  },
  GoingOut: {
    id: 2,
    headings: "Going out ?",
    cardItems: [{
      id: 7,
      title: "Rooftop Bars",
      slug: "roofop-bar",
      img: "http://www.citypassguide.com/media/slideshow/chill-sky-bar-cover.jpg"
    }, {
      id: 8,
      title: "Live Music",
      slug: "live-music",
      img: "https://greatsaigon.com/content/images/photo-1470229722913-7c0e2dbbafd3.jpg"
    }, {
      id: 9,
      title: "Clubs",
      slug: "clubs",
      img: "https://greatsaigon.com/content/images/photo-1502872364588-894d7d6ddfab.jpg"
    }, {
      id: 10,
      title: "Sport Bars",
      slug: "sport-bars",
      img: "https://greatsaigon.com/content/images/sports-bar.jpg"
    }, {
      id: 11,
      title: "Casino",
      slug: "casino",
      img: "https://greatsaigon.com/content/images/casino.jpg"
    }, {
      id: 12,
      title: "Karaoke",
      slug: "karaoke",
      img: "https://greatsaigon.com/content/images/karaokee.jpg"
    }]
  },

  Beauty: {
    id: 1,
    headings: "Beauty & Spa",
    cardItems: [{
      id: 4,
      title: "Massage",
      slug: "spa-and-massage",
      img: "https://greatsaigon.com/content/images/massage.jpg"
    }, {
      id: 5,
      title: "Manicure & Pedicure",
      slug: "nails-salon",
      img: "https://greatsaigon.com/content/images/manicure.jpg"
    }, {
      id: 6,
      title: "Hair Salon",
      slug: "hair-and-makeup",
      img: "https://greatsaigon.com/content/images/photo-1470259078422-826894b933aa.jpg"
    }, {
      id: 7,
      title: "Waxing",
      slug: "hair-removal",
      img: "https://greatsaigon.com/content/images/waxing.jpg"
    }, {
      id: 8,
      title: "Tattoo & Peircing",
      slug: "tattoo-piercings",
      img: "https://greatsaigon.com/content/images/tatoo.jpg"
    }, {
      id: 9,
      title: "Skin Care",
      slug: "skin-care",
      img: "https://greatsaigon.com/content/images/skin-care.jpg"
    }]
  },
  District: [{ slug: "1", name: "District 1" }, { slug: "2", name: "District 2" }, { slug: "3", name: "District 3" }, { slug: "4", name: "District 4" }, { slug: "5", name: "District 5" }, { slug: "6", name: "District 6" }, { slug: "7", name: "District 7" }, { slug: "8", name: "District 8" }, { slug: "9", name: "District 9" }, { slug: "10", name: "District 10" }, { slug: "11", name: "District 11" }, { slug: "12", name: "District 12" }, { slug: "1", name: "Gò Vấp" }, { slug: "1", name: "Hóc Môn" }, { slug: "1", name: "Nhà Bè" }, { slug: "1", name: "Phú Nhuận" }, { slug: "1", name: "Tân Bình" }, { slug: "1", name: "Tân Phú" }, { slug: "1", name: "Thủ Đức" }, { slug: "1", name: "Bình Chánh" }, { slug: "1", name: "Bình Tân" }, { slug: "1", name: "Bình Thạnh" }, { slug: "1", name: "Cần Giờ" }, { slug: "1", name: "Củ Chi" }],
  FilterList: [{
    filterTitle: "Nails",
    logo: "https://image.flaticon.com/icons/svg/775/775394.svg",
    list: [{
      name: "Manicure",
      value: "manicure"
    }, {
      name: "Pedicure",
      value: "pedicure"
    }, {
      name: "Gel Color",
      value: "gel_color"
    }, {
      name: "Nail Art",
      value: "nail_art"
    }]
  }, {
    filterTitle: "Hair",
    logo: "https://image.flaticon.com/icons/svg/896/896995.svg",
    list: [{
      name: "Blow Dry",
      value: "blow_dry"
    }, {
      name: "Straightening",
      value: "straightening"
    }, {
      name: "Perms",
      value: "perms"
    }, {
      name: "Colouring Highlights",
      value: "colouring_highlights"
    }]
  }, {
    filterTitle: "Spa & Massage",
    logo: "https://image.flaticon.com/icons/svg/887/887350.svg",
    list: [{
      name: "Facial",
      value: "facial"
    }, {
      name: "Tissue Massage",
      value: "deep_tissue_massage"
    }, {
      name: "Foot Massage",
      value: "massage"
    }, {
      name: "Colouring Highlights",
      value: "colouring_highlights"
    }]
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (StaticData);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/search-page.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-device-detect":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-google-maps":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-render-html":
/***/ (function(module, exports) {

module.exports = require("react-render-html");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "uikit":
/***/ (function(module, exports) {

module.exports = require("uikit");

/***/ }),

/***/ "uikit/dist/js/uikit-icons":
/***/ (function(module, exports) {

module.exports = require("uikit/dist/js/uikit-icons");

/***/ })

/******/ });
//# sourceMappingURL=search-page.js.map