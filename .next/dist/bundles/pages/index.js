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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PUBLIC_URL; });
var API_ENDPOINT = 'https://backend.greatsaigon.com/api/v1/en/';
var DEFAULT_IMG = 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg';
var GRAB_LOGO = 'https://www.underconsideration.com/brandnew/archives/grab_logo.png';
var GOOGLE_API = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCohqkwd-MPh_pYfULL3GOnr_IupFfi5gs&v=3.exp&libraries=geometry,drawing,places';
var PUBLIC_URL = 'http://greatsaigon.apx-dev.com:3000';

/***/ }),

/***/ "./components/cards/card-category.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/cards/card-category.js";

//greatsaigon/components/cards/card-category




var CardCategory = function CardCategory(props) {
  var title = props.title,
      image = props.image,
      cateTitle = props.cateTitle,
      slug = props.slug;


  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
    {
      href: "/search-page/" + cateTitle + "/1/" + slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "uk-card uk-card-default uk-card-hover uk-card-body",
        style: { backgroundImage: "url(" + image + ")" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-4197331480" + " " + "uk-inlilne",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "", alt: "", className: "jsx-4197331480",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-4197331480" + " " + "uk-overlay uk-overlay-default uk-position-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            {
              className: "jsx-4197331480" + " " + "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            title
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "4197331480",
          css: ".uk-card{background-size:cover;background-position:center;height:300px;margin-bottom:10px;}.uk-card:hover{cursor:pointer;}.title{font-size:18px;font-weight:normal;color:#fff;text-align:center;}.uk-overlay{background:rgba(0,0,0,0.5);border-radius:20px;width:88%;padding:5px 2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZHMvY2FyZC1jYXRlZ29yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQjZCLEFBR3FDLEFBTVAsQUFHQSxBQU1lLGVBUmhDLEFBR3FCLE9BVFEsS0FlUixPQUxSLFdBQ08sQ0FLUixHQWZHLE9BZ0JFLE1BZkksQ0FVckIsUUFNQSxVQWZBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FyZHMvY2FyZC1jYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmljb2xhcy9TaXRlcy9ncmVhdHNhaWdvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vZ3JlYXRzYWlnb24vY29tcG9uZW50cy9jYXJkcy9jYXJkLWNhdGVnb3J5XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ2FyZENhdGVnb3J5ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgY2F0ZVRpdGxlLCBzbHVnIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBocmVmPXtgL3NlYXJjaC1wYWdlLyR7Y2F0ZVRpdGxlfS8xLyR7c2x1Z31gfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidWstY2FyZCB1ay1jYXJkLWRlZmF1bHQgdWstY2FyZC1ob3ZlciB1ay1jYXJkLWJvZHlcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWlubGlsbmVcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1vdmVybGF5IHVrLW92ZXJsYXktZGVmYXVsdCB1ay1wb3NpdGlvbi1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLnVrLWNhcmQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudWstY2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51ay1vdmVybGF5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMiU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDYXRlZ29yeTtcbiJdfQ== */\n/*@ sourceURL=components/cards/card-category.js */"
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (CardCategory);

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

/***/ "./components/navigations/dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/dropdown.js";






var Dropdown = function Dropdown(props) {
  var menu = props.menu;


  var handleSearch = function handleSearch(href, as) {
    window.location.href = "" + __WEBPACK_IMPORTED_MODULE_2__api_constant__["d" /* PUBLIC_URL */] + as;
  };

  var loopMenu = function loopMenu(menu, x, y) {
    return menu.slice(x, y).map(function (x, index) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { key: index, style: { marginBottom: "20px", color: "#000" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
          {
            as: "/search-page/" + x.slug + "/district-1/1",
            href: "/search-page?directory=" + x.slug + "&where=1&what=1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            { className: "directories", __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            x.name,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "uk-float-right", "data-uk-icon": "check", __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            })
          )
        ),
        x.subdirectory.map(function (z, index) {
          var as = "/search-page/" + x.slug + "/1/" + z.slug;
          var href = "/search-page?directory=" + x.slug + "&where=1&what=" + z.slug;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            {
              key: index,
              onClick: function onClick() {
                return handleSearch(href, as);
              },
              className: "uk-button-text",
              style: { color: "black", margin: "0px 0px 0px 20px" },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            z.name,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
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
        lineNumber: 50
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      { "data-uk-grid": true, className: "jsx-449868446" + " " + "uk-child-width-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        },
        loopMenu(menu, 0, 3)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        },
        loopMenu(menu, 3, 7)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        loopMenu(menu, 7, 8)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        },
        loopMenu(menu, 8)
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "449868446",
      css: ".directories{border-bottom:1px solid red;}p:hover{cursor:pointer;}.directories{-webkit-transition:0.2s linear;transition:0.2s linear;}.directories:hover{color:red;}.uk-button-text::before{border-bottom:1px solid red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbnMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUV5QixBQUd1QyxBQUdiLEFBR1EsQUFHYixBQUdrQixVQUY5QixLQU5BLGFBSEEsQUFZQSwwQkFOQSIsImZpbGUiOiJjb21wb25lbnRzL25hdmlnYXRpb25zL2Ryb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQVUJMSUNfVVJMfSBmcm9tICcuLi8uLi9hcGkvY29uc3RhbnQnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBEcm9wZG93biA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoIGhyZWYsIGFzICkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7UFVCTElDX1VSTH0ke2FzfWBcbiAgfVxuXG4gIGNvbnN0IGxvb3BNZW51ID0gKG1lbnUsIHgsIHkpID0+IHtcbiAgICByZXR1cm4gbWVudS5zbGljZSh4LCB5KS5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsIGNvbG9yOiBcIiMwMDBcIiB9fT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgYXM9e2Avc2VhcmNoLXBhZ2UvJHt4LnNsdWd9L2Rpc3RyaWN0LTEvMWB9XG4gICAgICAgICAgICBocmVmPXtgL3NlYXJjaC1wYWdlP2RpcmVjdG9yeT0keyB4LnNsdWcgfSZ3aGVyZT0xJndoYXQ9MWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlyZWN0b3JpZXNcIj5cbiAgICAgICAgICAgICAge3gubmFtZX1cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWstZmxvYXQtcmlnaHRcIiBkYXRhLXVrLWljb249XCJjaGVja1wiIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAge3guc3ViZGlyZWN0b3J5Lm1hcCgoeiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBhcyA9IGAvc2VhcmNoLXBhZ2UvJHt4LnNsdWd9LzEvJHt6LnNsdWd9YDtcbiAgICAgICAgICAgIHZhciBocmVmID0gYC9zZWFyY2gtcGFnZT9kaXJlY3Rvcnk9JHsgeC5zbHVnIH0md2hlcmU9MSZ3aGF0PSR7ei5zbHVnfWA7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVNlYXJjaChocmVmLCBhcyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24tdGV4dFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luOiBcIjBweCAwcHggMHB4IDIwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3oubmFtZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwidWstYW5pbWF0aW9uLXNsaWRlLXRvcC1zbWFsbFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRlwiLFxuICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgcGFkZGluZzogXCIyZW1cIixcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICBib3hTaGFkb3c6IFwiNXB4IDVweCAxOHB4IDBweCAjODg4ODg4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jaGlsZC13aWR0aC0xLTRcIiBkYXRhLXVrLWdyaWQ+XG4gICAgICAgIDxkaXY+e2xvb3BNZW51KG1lbnUsIDAsIDMpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMzBweFwiIH19Pntsb29wTWVudShtZW51LCAzLCA3KX08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIzMHB4XCIgfX0+e2xvb3BNZW51KG1lbnUsIDcsIDgpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMzBweFwiIH19Pntsb29wTWVudShtZW51LCA4KX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmRpcmVjdG9yaWVzIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9XG4gICAgICAgIHA6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGlyZWN0b3JpZXMge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIC5kaXJlY3Rvcmllczpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAudWstYnV0dG9uLXRleHQ6OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0= */\n/*@ sourceURL=components/navigations/dropdown.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__locales_en_json__);
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/search-bar/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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

    _this.state = {
      what: '1',
      where: '',
      directory: '1',
      drop_where: __WEBPACK_IMPORTED_MODULE_3__static_data_static_data__["a" /* default */].District,
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        where: nextProps.where || '',
        what: nextProps.what || '1',
        directory: nextProps.directory || '1'
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // NOT YET WORKING / TO BE FIXED 
      fetch(__WEBPACK_IMPORTED_MODULE_2__api_constant__["a" /* API_ENDPOINT */] + 'directories', {
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
            lineNumber: 99
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'directory', onChange: this.handleSelect, value: directory, className: 'jsx-3934959866' + ' ' + 'uk-select select-directory',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, style: { width: "100%" }, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
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
                  lineNumber: 107
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
              lineNumber: 117
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
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
                  lineNumber: 121
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
              lineNumber: 128
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
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
                  lineNumber: 132
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
              lineNumber: 139
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3934959866' + ' ' + 'uk-inline',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', (_React$createElement = { className: 'uk-form-icon', style: { color: 'white' } }, _defineProperty(_React$createElement, 'className', 'jsx-3934959866' + ' ' + 'uk-form-icon uk-form-icon-flip fas fa-search fa-lg'), _defineProperty(_React$createElement, '__source', {
              fileName: _jsxFileName,
              lineNumber: 142
            }), _React$createElement)),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onClick: function onClick() {
                _this3.props.handleSearch(directory, where, what);
              }, type: 'submit', value: __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default.a.search, className: 'jsx-3934959866' + ' ' + 'submit uk-input',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3934959866',
          css: 'body{margin:0px;}.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;left:25%;box-shadow:8px 8px 20px 8px rgba(0,0,0,0.2);border-radius:25px;background-color:none;width:50%;}.uk-input{height:50px;}.uk-select{height:50px !important;}.fas{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.search input{color:white;background-color:#f50633;border-color:red;}.search input:hover,.search input:focus{background-color:#f6a406;border-color:#f6a406;cursor:pointer;}@media(max-width:960px){.wrapper{width:100%;left:0%;margin-top:5px;display:grid;grid-template-columns:1fr;}.submit{border-bottom-right-radius:0px;border-top-right-radius:0px;}.select-directory{border-bottom-left-radius:0px;border-top-left-radius:0px;}.uk-grid-margin{margin-top:0px;}.search .uk-inline{width:100%;}}@media(min-width:960px){.wrapper .uk-inline:nth-child(2),.wrapper .uk-inline:nth-child(3){padding-left:1px;}.select-directory{border-bottom-left-radius:24px;border-top-left-radius:24px;}.submit{border-bottom-right-radius:24px;border-top-right-radius:24px;}.search{padding-left:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSnFDLEFBR2tDLEFBR0UsQUFTRCxBQUdXLEFBR0gsQUFHUixBQUthLEFBT1osQUFPb0IsQUFJRCxBQUlmLEFBR0osQUFPUSxBQUdZLEFBSUMsQUFJZixXQXBFckIsQUFpQ1ksQUFrQlYsQ0F2Q0YsQUFTMkIsR0EyQnpCLEVBVUEsQUFXQSxFQW5DaUIsSUFuQm5CLEVBV3VCLEtBa0JRLENBSkMsQUFxQkEsQ0FJQyxFQTlCaEIsR0FiRSxTQUtGLENBU2EsT0FiOUIsR0FzQkUsRUFKQSxBQXFCQSxFQWxDRixBQXNDRSxZQTdCQSxDQWxDa0Isa0JBQ1QsU0FDbUMsQ0FhOUMsMkNBWnFCLG1CQUNHLHNCQUNaLFVBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gtYmFyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBUElfRU5EUE9JTlR9IGZyb20gJy4uLy4uL2FwaS9jb25zdGFudCdcbmltcG9ydCBTdGF0aWNEYXRhIGZyb20gJy4uLy4uL3N0YXRpYy1kYXRhL3N0YXRpYy1kYXRhJ1xuaW1wb3J0IGxvY2FsZXMgZnJvbSAnLi4vLi4vbG9jYWxlcy9lbi5qc29uJ1xuXG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2hhdDogJzEnLFxuICAgICAgd2hlcmU6ICcnLFxuICAgICAgZGlyZWN0b3J5OiAnMScsXG4gICAgICBkcm9wX3doZXJlOiBTdGF0aWNEYXRhLkRpc3RyaWN0LFxuICAgICAgZHJvcF93aGF0OiBbXSxcbiAgICAgIGRyb3BfZGlyZWN0b3J5OiBbXSxcbiAgICAgIHJlc3VsdDogW10sXG4gICAgICBkaXJlY3RvcmllczogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdoZXJlOiB0aGlzLnByb3BzLndoZXJlIHx8ICcnLFxuICAgICAgd2hhdDogdGhpcy5wcm9wcy53aGF0IHx8ICcxJyxcbiAgICAgIGRpcmVjdG9yeTogdGhpcy5wcm9wcy5kaXJlY3RvcnkgfHwgJzEnXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdoZXJlOiBuZXh0UHJvcHMud2hlcmUgfHwgJycsXG4gICAgICB3aGF0OiBuZXh0UHJvcHMud2hhdCB8fCAnMScsXG4gICAgICBkaXJlY3Rvcnk6IG5leHRQcm9wcy5kaXJlY3RvcnkgfHwgJzEnXG4gICAgfSlcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAvLyBOT1QgWUVUIFdPUktJTkcgLyBUTyBCRSBGSVhFRCBcbiAgICBmZXRjaChgJHtBUElfRU5EUE9JTlR9ZGlyZWN0b3JpZXNgLCB7XG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9KVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHZhciBkcm9wX2RpcmVjdG9yeSA9IGRhdGEuZmlsdGVyKCAocmVzKSA9PiB7IHJldHVybiByZXMuc2x1ZyB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICBkaXJlY3RvcmllczogZGF0YSxcbiAgICAgICAgZHJvcF9kaXJlY3Rvcnk6IGRyb3BfZGlyZWN0b3J5LFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcF93aGF0OiB0aGlzLmdldFdoYXRMaXN0KHRoaXMuc3RhdGUuZGlyZWN0b3J5KSB9KVxuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cbiAgICBcbiAgICBnZXRXaGF0TGlzdCA9IChjYXRlZ29yeSkgPT4ge1xuXG4gICAgICB2YXIgZGlyID0gdGhpcy5zdGF0ZS5kaXJlY3RvcmllcztcbiAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGRpci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGNhdGVnb3J5ID09PSBkaXJbaV0uc2x1Zyl7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkgPSBkaXJbaV0uc3ViZGlyZWN0b3J5ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuXG4gICAgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgICAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdmFyIGRpciA9IG5hbWUgPT09ICdkaXJlY3RvcnknID8gdHJ1ZSA6IGZhbHNlXG5cbiAgICAgICAgLy8gQ2FsbCBmdW5jdGlvbiB0byB1cGRhdGUgZHJvcGRvd24tc2VsZWN0LXdoYXRcbiAgICAgICAgaWYoIGRpciApe1xuICAgICAgICAgIHZhciB3aGF0ID0gdGhpcy5nZXRXaGF0TGlzdCh2YWx1ZSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hhdDogJzEnLFxuICAgICAgICAgICAgICB3aGVyZTogJydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUsIGRyb3Bfd2hhdDogZGlyID8gd2hhdCA6IHRoaXMuc3RhdGUuZHJvcF93aGF0IH0pXG4gICAgfSAgICAgIFxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCB7IHdoZXJlLCB3aGF0LCBkaXJlY3RvcnksIGRyb3Bfd2hlcmUsIGRyb3Bfd2hhdCwgZHJvcF9kaXJlY3RvcnksIHJlc3VsdCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgey8qIENBVEVHT1JZICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRpcmVjdG9yeVwiIGNsYXNzTmFtZT1cInVrLXNlbGVjdCBzZWxlY3QtZGlyZWN0b3J5XCIgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdCB9IHZhbHVlPXsgZGlyZWN0b3J5IH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBkaXNhYmxlZCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCJ9fT5CYXIvUmVzdGF1cmFudC9OaWdodGxpZmUgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF9kaXJlY3RvcnkubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17eC5zbHVnfSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3gubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgey8qIFdIRVJFICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2hlcmVcIiBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlU2VsZWN0IH0gdmFsdWU9e3doZXJlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+V2hlcmUgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bfd2hlcmUubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt4LnNsdWd9IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57eC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBXSEFUICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ3aGF0XCIgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdCB9IHZhbHVlPXt3aGF0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIGRpc2FibGVkPldoYXQgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bfd2hhdC5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3guc2x1Z30gc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19Pnt4Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7LyogU0VBUkNIICovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWstZm9ybS1pY29uXCIgIGNsYXNzTmFtZT1cInVrLWZvcm0taWNvbiB1ay1mb3JtLWljb24tZmxpcCBmYXMgZmEtc2VhcmNoIGZhLWxnXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+PC9pPlxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaCggZGlyZWN0b3J5LCB3aGVyZSwgd2hhdCApIH0gfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9eyBsb2NhbGVzLnNlYXJjaCB9IGNsYXNzTmFtZT1cInN1Ym1pdCB1ay1pbnB1dFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHsgXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudWstaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC51ay1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mYXMge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNjMzO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaCBpbnB1dDpob3ZlciwgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTQwNjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNmE0MDY7XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LWRpcmVjdG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudWstZ3JpZC1tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoIC51ay1pbmxpbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtZGlyZWN0b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuXG5cbiJdfQ== */\n/*@ sourceURL=components/search-bar/index.js */'
        })
      );
    }
  }]);

  return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./containers/category.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__ = __webpack_require__("./components/cards/card-category.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/containers/category.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Category = function (_React$Component) {
  _inherits(Category, _React$Component);

  function Category(props) {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

    _this.handleButton1 = function () {
      _this.setState(function (prevState) {
        return {
          isToggle1: !prevState.isToggle1
        };
      });
    };

    _this.handleButton2 = function () {
      _this.setState(function (prevState) {
        return {
          isToggle2: !prevState.isToggle2
        };
      });
    };

    _this.handleButton3 = function () {
      _this.setState(function (prevState) {
        return {
          isToggle3: !prevState.isToggle3
        };
      });
    };

    _this.state = {
      isToggle1: false,
      isToggle2: false,
      isToggle3: false
    };
    return _this;
  }

  _createClass(Category, [{
    key: "render",


    // You should use state to show more category with slice()
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-3932202883" + " " + "gridCategory",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          className: "jsx-3932202883",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h1",
          {
            className: "jsx-3932202883",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].Beauty.headings
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
          className: "jsx-3932202883",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-3932202883" + " " + "uk-column-1-1 uk-column-1-3@l",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          // Here you can map your different card and use slice to
          this.state.isToggle3 === false ? __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].Beauty.cardItems.slice(0, 3).map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__["a" /* default */], {
              key: index,
              cateTitle: "beauty",
              title: item.title,
              slug: item.slug,
              image: item.img,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            });
          }) : __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].Beauty.cardItems.slice(0, 6).map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__["a" /* default */], {
              key: index,
              cateTitle: "beauty",
              title: item.title,
              slug: item.slug,
              image: item.img,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "button",
          { onClick: this.handleButton3, className: "jsx-3932202883" + " " + "moreButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          this.state.isToggle3 === false ? "+more" : "-less"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h1",
          {
            className: "jsx-3932202883",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].Restaurants.headings
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
          className: "jsx-3932202883",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-3932202883" + " " + "uk-column-1-1 uk-column-1-3@l",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          // Use card a component for styling
          // Use slice() to show more category
          this.state.isToggle1 === false ? __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].Restaurants.cardItems.slice(0, 3).map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__["a" /* default */], {
              key: index,
              cateTitle: "food-and-drink",
              title: item.title,
              slug: item.slug,
              image: item.img,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            });
          }) : __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].Restaurants.cardItems.slice(0, 6).map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__["a" /* default */], {
              key: index,
              cateTitle: "food-and-drink",
              title: item.title,
              slug: item.slug,
              image: item.img,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "button",
          { onClick: this.handleButton1, className: "jsx-3932202883" + " " + "moreButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            }
          },
          this.state.isToggle1 === false ? "+more" : "-less"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h1",
          {
            className: "jsx-3932202883",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          },
          __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].GoingOut.headings
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
          className: "jsx-3932202883",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-3932202883" + " " + "uk-column-1-1 uk-column-1-3@l",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            }
          },
          // Here you can map your different card and use slice to
          this.state.isToggle2 === false ? __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].GoingOut.cardItems.slice(0, 3).map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__["a" /* default */], {
              key: index,
              cateTitle: "nightlife",
              title: item.title,
              slug: item.slug,
              image: item.img,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            });
          }) : __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__["a" /* default */].GoingOut.cardItems.slice(0, 6).map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__["a" /* default */], {
              key: index,
              cateTitle: "nightlife",
              title: item.title,
              slug: item.slug,
              image: item.img,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "button",
          { onClick: this.handleButton2, className: "jsx-3932202883" + " " + "moreButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          },
          this.state.isToggle2 === false ? "+more" : "-less"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "3932202883",
          css: "hr{border:1px solid red;}.moreButton{background-color:red;color:#fff;border:none;border-radius:8px;margin-top:10px;width:100%;height:40px;font-size:18px;}.moreButton:hover{background-color:#fff;border:1px solid red;color:red;}.moreButton:focus{outline:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvY2F0ZWdvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNElXLEFBR29DLEFBSUEsQUFVQyxBQUtaLFVBQ1osV0FuQkEsQUFJYSxDQVVVLFVBVFQsV0FVRixDQVRRLFNBVXBCLFNBVGtCLGdCQUNMLFdBQ0MsWUFDRyxlQUNqQiIsImZpbGUiOiJjb250YWluZXJzL2NhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0YXRpY0RhdGEgZnJvbSBcIi4uL3N0YXRpYy1kYXRhL3N0YXRpYy1kYXRhXCI7XG5pbXBvcnQgQ2FyZENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL2NhcmQtY2F0ZWdvcnlcIjtcblxuY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNUb2dnbGUxOiBmYWxzZSxcbiAgICAgIGlzVG9nZ2xlMjogZmFsc2UsXG4gICAgICBpc1RvZ2dsZTM6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBoYW5kbGVCdXR0b24xID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc1RvZ2dsZTE6ICFwcmV2U3RhdGUuaXNUb2dnbGUxXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZUJ1dHRvbjIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzVG9nZ2xlMjogIXByZXZTdGF0ZS5pc1RvZ2dsZTJcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlQnV0dG9uMyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNUb2dnbGUzOiAhcHJldlN0YXRlLmlzVG9nZ2xlM1xuICAgIH0pKTtcbiAgfTtcblxuICAvLyBZb3Ugc2hvdWxkIHVzZSBzdGF0ZSB0byBzaG93IG1vcmUgY2F0ZWdvcnkgd2l0aCBzbGljZSgpXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkQ2F0ZWdvcnlcIj5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGgxPntTdGF0aWNEYXRhLkJlYXV0eS5oZWFkaW5nc308L2gxPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb2x1bW4tMS0xIHVrLWNvbHVtbi0xLTNAbFwiPlxuICAgICAgICAgIHsvLyBIZXJlIHlvdSBjYW4gbWFwIHlvdXIgZGlmZmVyZW50IGNhcmQgYW5kIHVzZSBzbGljZSB0b1xuICAgICAgICAgIHRoaXMuc3RhdGUuaXNUb2dnbGUzID09PSBmYWxzZVxuICAgICAgICAgICAgPyBTdGF0aWNEYXRhLkJlYXV0eS5jYXJkSXRlbXMuc2xpY2UoMCwgMykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNhdGVUaXRsZT1cImJlYXV0eVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzbHVnPXtpdGVtLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogU3RhdGljRGF0YS5CZWF1dHkuY2FyZEl0ZW1zLnNsaWNlKDAsIDYpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPENhcmRDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjYXRlVGl0bGU9XCJiZWF1dHlcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc2x1Zz17aXRlbS5zbHVnfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbjN9IGNsYXNzTmFtZT1cIm1vcmVCdXR0b25cIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1RvZ2dsZTMgPT09IGZhbHNlID8gXCIrbW9yZVwiIDogXCItbGVzc1wifVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8aDE+e1N0YXRpY0RhdGEuUmVzdGF1cmFudHMuaGVhZGluZ3N9PC9oMT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29sdW1uLTEtMSB1ay1jb2x1bW4tMS0zQGxcIj5cbiAgICAgICAgICB7Ly8gVXNlIGNhcmQgYSBjb21wb25lbnQgZm9yIHN0eWxpbmdcbiAgICAgICAgICAvLyBVc2Ugc2xpY2UoKSB0byBzaG93IG1vcmUgY2F0ZWdvcnlcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzVG9nZ2xlMSA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gU3RhdGljRGF0YS5SZXN0YXVyYW50cy5jYXJkSXRlbXNcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMylcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZVRpdGxlPVwiZm9vZC1hbmQtZHJpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e2l0ZW0uc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFN0YXRpY0RhdGEuUmVzdGF1cmFudHMuY2FyZEl0ZW1zXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDYpXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVUaXRsZT1cImZvb2QtYW5kLWRyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtpdGVtLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbjF9IGNsYXNzTmFtZT1cIm1vcmVCdXR0b25cIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1RvZ2dsZTEgPT09IGZhbHNlID8gXCIrbW9yZVwiIDogXCItbGVzc1wifVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8aDE+e1N0YXRpY0RhdGEuR29pbmdPdXQuaGVhZGluZ3N9PC9oMT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29sdW1uLTEtMSB1ay1jb2x1bW4tMS0zQGxcIj5cbiAgICAgICAgICB7Ly8gSGVyZSB5b3UgY2FuIG1hcCB5b3VyIGRpZmZlcmVudCBjYXJkIGFuZCB1c2Ugc2xpY2UgdG9cbiAgICAgICAgICB0aGlzLnN0YXRlLmlzVG9nZ2xlMiA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gU3RhdGljRGF0YS5Hb2luZ091dC5jYXJkSXRlbXMuc2xpY2UoMCwgMykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNhdGVUaXRsZT1cIm5pZ2h0bGlmZVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzbHVnPXtpdGVtLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogU3RhdGljRGF0YS5Hb2luZ091dC5jYXJkSXRlbXMuc2xpY2UoMCwgNikubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNhdGVUaXRsZT1cIm5pZ2h0bGlmZVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzbHVnPXtpdGVtLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b24yfSBjbGFzc05hbWU9XCJtb3JlQnV0dG9uXCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaXNUb2dnbGUyID09PSBmYWxzZSA/IFwiK21vcmVcIiA6IFwiLWxlc3NcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vcmVCdXR0b24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmVCdXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZUJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXX0= */\n/*@ sourceURL=containers/category.js */"
        })
      );
    }
  }]);

  return Category;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Category);

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_js__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__locales_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_bar__ = __webpack_require__("./components/search-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_category__ = __webpack_require__("./containers/category.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page__ = __webpack_require__("./components/page.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/pages/index.js";


//pages/index.js








var Index = function Index(props) {
  // Tmp data
  var carousels = ["http://hungthinhsale.com/wp-content/uploads/2016/08/Mia.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQyL5aaNmbu5EwHmt1u6gDpkkG7QOg3LwR4Kh7zSTtDflrmLN", "http://blisssaigon.com/wp-content/uploads/2018/05/Feature-event.jpg"];

  var handleSearch = function handleSearch(directory, where, what) {
    var as = "/search-page/" + (directory || 'food-and-drink') + "/" + (where || 'district-1') + "/" + (what || 'restaurant');
    var href = "/search-page?directory=" + (directory || 'food-and-drink') + "&where=" + (where || '') + "&what=" + (what || 'restaurant');
    __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(href, as, { shallow: true });
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-883210753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__components_layout_js__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-883210753" + " " + "header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("video", {
          style: { width: "100%", zIndex: "-1", marginBottom: "0px" },
          muted: true,
          loop: true,
          poster: "https://greatsaigon.com/Videos/Thumbnail_Skyline.jpg",
          src: "https://greatsaigon.com/content/videos/finalskyline-3.mp4",
          autoPlay: "autoplay",
          className: "jsx-883210753",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-883210753" + " " + "wrapper-search-bar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_search_bar__["a" /* default */], { what: "1", where: "", directory: "1", images: carousels, handleSearch: handleSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-883210753" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-883210753" + " " + "uk-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "h2",
            {
              className: "jsx-883210753" + " " + "hero_title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default.a.title_event
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              style: {
                boxShadow: "0 11px 22px rgba(0, 0, 0, 0.20), 0 7px 7px rgba(0, 0, 0, 0.24)"
              },

              "data-uk-slideshow": "autoplay: true",
              className: "jsx-883210753" + " " + "uk-position-relative uk-visible-toggle uk-light ",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: "jsx-883210753" + " " + "uk-slideshow-items",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              carousels.map(function (carousel, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { key: index, className: "jsx-883210753",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: carousel, alt: "", "data-uk-cover": true, className: "jsx-883210753",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  })
                );
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                href: "#",
                "data-uk-slidenav-previous": true,
                "data-uk-slideshow-item": "previous",
                className: "jsx-883210753" + " " + "uk-position-center-left uk-position-small",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                className: "jsx-883210753" + " " + "fas fa-caret-left fa-5x",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                href: "#",
                "data-uk-slidenav-next": true,
                "data-uk-slideshow-item": "next",
                className: "jsx-883210753" + " " + "uk-position-center-right uk-position-small",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                className: "jsx-883210753" + " " + "fas fa-caret-right fa-5x",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-883210753" + " " + "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_category__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "883210753",
      css: ".event{padding-top:40px;padding-bottom:40px;background-color:#f50633;margin-top:-50px;}.hero_title{color:#fff;font-weight:normal;text-align:center;}.uk-position-center-left{color:white;}.uk-position-center-right{color:white;}.slider-image{background-size:cover;background-position:center;}.wrapper-search-bar{text-align:center;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;bottom:350px;}.content{margin:1em auto;max-width:1080px !important;}.CarouselHome{padding:2em 0em 2em 0em;}@media (max-width:960px){.content{margin:0 auto;width:100%;}.header{height:auto;padding-bottom:1em;}.wrapper-search-bar{width:100%;padding-top:1em;bottom:0px;}.event{height:300px;margin:0px;}.CarouselHome{padding:0em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGeUIsQUFHNEIsQUFNTixBQUtDLEFBR0EsQUFHVSxBQUlKLEFBUUYsQUFJUSxBQUlSLEFBSUYsQUFJRCxBQUtFLEFBSUQsV0EvQ0ssQUF1Q0QsQ0FsQ3BCLEFBR0EsQUEyQnVCLEFBYXJCLENBSmEsQ0FiQSxFQVJlLENBN0JSLENBcUJULElBSmdCLEVBZ0I3QixBQWtCRSxDQWJBLEVBUWEsRUF4QkEsQ0FmSyxDQW1DbEIsTUF6Q3lCLENBOEN6QixNQWpCRixJQXRCQSxDQVVBLGFBaEJtQixpQkFDbkIsd0JBb0JtQiwrREFDQyxrQkFDTCxhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiLy9wYWdlcy9pbmRleC5qc1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQuanNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgbG9jYWxlcyBmcm9tIFwiLi4vbG9jYWxlcy9lbi5qc29uXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaC1iYXJcIjtcblxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb250YWluZXJzL2NhdGVnb3J5XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xuICAvLyBUbXAgZGF0YVxuICBjb25zdCBjYXJvdXNlbHMgPSBbXG4gICAgXCJodHRwOi8vaHVuZ3RoaW5oc2FsZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDgvTWlhLnBuZ1wiLFxuICAgIFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU3lReUw1YWFObWJ1NUV3SG10MXU2Z0Rwa2tHN1FPZzNMd1I0S2g3elNUdERmbHJtTE5cIixcbiAgICBcImh0dHA6Ly9ibGlzc3NhaWdvbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvRmVhdHVyZS1ldmVudC5qcGdcIlxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICggZGlyZWN0b3J5LCB3aGVyZSwgd2hhdCApID0+IHtcbiAgICB2YXIgYXMgPSBgL3NlYXJjaC1wYWdlLyR7ZGlyZWN0b3J5IHx8ICdmb29kLWFuZC1kcmluaycgfS8ke3doZXJlIHx8ICdkaXN0cmljdC0xJ30vJHt3aGF0IHx8ICdyZXN0YXVyYW50J31gXG4gICAgdmFyIGhyZWYgPSBgL3NlYXJjaC1wYWdlP2RpcmVjdG9yeT0ke2RpcmVjdG9yeSB8fCAnZm9vZC1hbmQtZHJpbmsnIH0md2hlcmU9JHt3aGVyZSB8fCAnJ30md2hhdD0ke3doYXQgfHwgJ3Jlc3RhdXJhbnQnfWBcbiAgICBSb3V0ZXIucHVzaChocmVmLCBhcywge3NoYWxsb3c6dHJ1ZX0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCB6SW5kZXg6IFwiLTFcIiwgbWFyZ2luQm90dG9tOiBcIjBweFwiIH19XG4gICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgcG9zdGVyPVwiaHR0cHM6Ly9ncmVhdHNhaWdvbi5jb20vVmlkZW9zL1RodW1ibmFpbF9Ta3lsaW5lLmpwZ1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2dyZWF0c2FpZ29uLmNvbS9jb250ZW50L3ZpZGVvcy9maW5hbHNreWxpbmUtMy5tcDRcIlxuICAgICAgICAgICAgYXV0b1BsYXk9XCJhdXRvcGxheVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1zZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIHdoYXQ9XCIxXCIgd2hlcmU9XCJcIiBkaXJlY3Rvcnk9XCIxXCIgaW1hZ2VzPXtjYXJvdXNlbHN9IGhhbmRsZVNlYXJjaD17IGhhbmRsZVNlYXJjaCB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlcm9fdGl0bGVcIj57bG9jYWxlcy50aXRsZV9ldmVudH08L2gyPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgXCIwIDExcHggMjJweCByZ2JhKDAsIDAsIDAsIDAuMjApLCAwIDdweCA3cHggcmdiYSgwLCAwLCAwLCAwLjI0KVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLXJlbGF0aXZlIHVrLXZpc2libGUtdG9nZ2xlIHVrLWxpZ2h0IFwiXG4gICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVzaG93PVwiYXV0b3BsYXk6IHRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNsaWRlc2hvdy1pdGVtc1wiPlxuICAgICAgICAgICAgICAgIHtjYXJvdXNlbHMubWFwKChjYXJvdXNlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nhcm91c2VsfSBhbHQ9XCJcIiBkYXRhLXVrLWNvdmVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1jZW50ZXItbGVmdCB1ay1wb3NpdGlvbi1zbWFsbFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtcHJldmlvdXNcbiAgICAgICAgICAgICAgICBkYXRhLXVrLXNsaWRlc2hvdy1pdGVtPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhcmV0LWxlZnQgZmEtNXhcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLWNlbnRlci1yaWdodCB1ay1wb3NpdGlvbi1zbWFsbFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtbmV4dFxuICAgICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVzaG93LWl0ZW09XCJuZXh0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1yaWdodCBmYS01eFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxDYXRlZ29yeSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmV2ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNjMzO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvX3RpdGxlIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudWstcG9zaXRpb24tY2VudGVyLWxlZnQge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudWstcG9zaXRpb24tY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlci1pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXItc2VhcmNoLWJhciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvdHRvbTogMzUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuQ2Fyb3VzZWxIb21lIHtcbiAgICAgICAgICBwYWRkaW5nOiAyZW0gMGVtIDJlbSAwZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlci1zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXZlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2Fyb3VzZWxIb21lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIEdldCBhbGwgZGF0YSBmb3IgY2hpbGQgY29tcG9uZW50c1xuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICAgIG1lbnU6IHN0YXRlLm1lbnVSZWR1Y2VyLFxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=pages/index.js */"
    })
  );
};

// Get all data for child components
// const mapStateToProps = (state) => {

//   return {
//       menu: state.menuReducer,
//   }
// }

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7__components_page__["a" /* default */])(Index));

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=index.js.map