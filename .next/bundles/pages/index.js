module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./api/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_IMG; });
/* unused harmony export GRAB_LOGO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GOOGLE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PUBLIC_URL; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var API_ENDPOINT = 'https://backend.greatsaigon.com/api/v1/en/';
var DEFAULT_IMG = 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg';
var GRAB_LOGO = 'https://www.underconsideration.com/brandnew/archives/grab_logo.png';
var GOOGLE_API = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCohqkwd-MPh_pYfULL3GOnr_IupFfi5gs&v=3.exp&libraries=geometry,drawing,places';
var PUBLIC_URL = 'http://greatsaigon.apx-dev.com:3000';
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_ENDPOINT, 'API_ENDPOINT', '/Users/nicolas/Sites/greatsaigon/api/constant.js');
  reactHotLoader.register(DEFAULT_IMG, 'DEFAULT_IMG', '/Users/nicolas/Sites/greatsaigon/api/constant.js');
  reactHotLoader.register(GRAB_LOGO, 'GRAB_LOGO', '/Users/nicolas/Sites/greatsaigon/api/constant.js');
  reactHotLoader.register(GOOGLE_API, 'GOOGLE_API', '/Users/nicolas/Sites/greatsaigon/api/constant.js');
  reactHotLoader.register(PUBLIC_URL, 'PUBLIC_URL', '/Users/nicolas/Sites/greatsaigon/api/constant.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/cards/card-category.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/cards/card-category.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = CardCategory;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardCategory, "CardCategory", "/Users/nicolas/Sites/greatsaigon/components/cards/card-category.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/cards/card-category.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/footer/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_media__ = __webpack_require__("./components/footer/social-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/footer/footer.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





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

var _default = Footer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "/Users/nicolas/Sites/greatsaigon/components/footer/footer.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/footer/footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/footer/social-media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/footer/social-media.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = SocialMedia;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SocialMedia, "SocialMedia", "/Users/nicolas/Sites/greatsaigon/components/footer/social-media.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/footer/social-media.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_header__ = __webpack_require__("./containers/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer__ = __webpack_require__("./components/footer/footer.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/layout.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






if (typeof window !== "undefined") {
  var UIkit = __webpack_require__("./node_modules/uikit/dist/js/uikit.js");
  var Icons = __webpack_require__("./node_modules/uikit/dist/js/uikit-icons.js");
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

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "/Users/nicolas/Sites/greatsaigon/components/layout.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navigations/dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/dropdown.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






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

var _default = Dropdown;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dropdown, "Dropdown", "/Users/nicolas/Sites/greatsaigon/components/navigations/dropdown.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/navigations/dropdown.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navigations/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__locales_en_json__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/menu.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







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

var _default = Menu;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "/Users/nicolas/Sites/greatsaigon/components/navigations/menu.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/navigations/menu.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navigations/offcanvas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/navigations/offcanvas.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




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

var _default = Offcanvas;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Offcanvas, "Offcanvas", "/Users/nicolas/Sites/greatsaigon/components/navigations/offcanvas.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/navigations/offcanvas.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_store__ = __webpack_require__("./redux/store.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/page.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
          __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
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
    }, {
      key: '__reactstandin__regenerateByEval',
      value: function __reactstandin__regenerateByEval(key, code) {
        this[key] = eval(code);
      }
    }]);

    return PageWrapper;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
};

var _default = Page;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Page, 'Page', '/Users/nicolas/Sites/greatsaigon/components/page.js');
  reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/components/page.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/search-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__locales_en_json__);
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/components/search-bar/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = SearchBar;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchBar, 'SearchBar', '/Users/nicolas/Sites/greatsaigon/components/search-bar/index.js');
  reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/components/search-bar/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/category.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_card_category__ = __webpack_require__("./components/cards/card-category.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/containers/category.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Category;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Category;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Category, "Category", "/Users/nicolas/Sites/greatsaigon/containers/category.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/containers/category.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navigations_menu__ = __webpack_require__("./components/navigations/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigations_offcanvas__ = __webpack_require__("./components/navigations/offcanvas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigations_dropdown__ = __webpack_require__("./components/navigations/dropdown.js");
var _jsxFileName = '/Users/nicolas/Sites/greatsaigon/containers/header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menuReducer
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', '/Users/nicolas/Sites/greatsaigon/containers/header.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/nicolas/Sites/greatsaigon/containers/header.js');
  reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/containers/header.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./locales/en.json":
/***/ (function(module, exports) {

module.exports = {"index_h1":"Events","login":"Login","sign_up":"Sign Up","sign_in":"Sign In","restaurants_bars":"Restaurants/Bars","home":"Home","events":"Events","articles":"Articles","explore":"Explore","username":"Username","password":"Password","h1_page_login":"Connexion","email":"Email","forget_password":"Forget password ?","search":"Search","title_restaurant":"Restaurants","title_beauty":"Beauty & Spa","title_event":"What's going on in Saigon ?","search_tag":"Search tag"}

/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var settle = __webpack_require__("./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__("./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__("./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__("./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__("./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__("./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__("./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__("./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__("./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__("./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__("./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__("./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__("./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__("./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypesExact = __webpack_require__("./node_modules/prop-types-exact/build/index.js");

var _propTypesExact2 = _interopRequireDefault(_propTypesExact);

var _router = __webpack_require__("./node_modules/next/dist/lib/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user
      };if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = (0, _propTypesExact2.default)({
  href: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  prefetch: _propTypes2.default.bool,
  replace: _propTypes2.default.bool,
  shallow: _propTypes2.default.bool,
  passHref: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired
});
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);

  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__("./node_modules/react-redux/node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__("./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__("./node_modules/react-redux/es/connect/verifySubselectors.js");
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ "./node_modules/react-redux/es/utils/PropTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hoistNonReactStatics = factory());
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));


/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compose; });
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__("./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit-icons.js":
/***/ (function(module, exports, __webpack_require__) {

/*! UIkit 3.0.0-beta.40 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('uikiticons', factory) :
	(global.UIkitIcons = factory());
}(this, (function () { 'use strict';

var album = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"5\" y=\"2\" width=\"10\" height=\"1\" /> <rect x=\"3\" y=\"4\" width=\"14\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\" /></svg>";
var ban = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\" /></svg>";
var behance = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\" /> <path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\" /> <rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\" /></svg>";
var bell = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\" /> <path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\" /></svg>";
var bold = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\" /></svg>";
var bolt = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\" /></svg>";
var bookmark = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\" /></svg>";
var calendar = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\" /> <rect width=\"1\" height=\"3\" x=\"6\" y=\"2\" /> <rect width=\"1\" height=\"3\" x=\"13\" y=\"2\" /></svg>";
var camera = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\" /> <path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\" /></svg>";
var cart = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\" /> <circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\" /></svg>";
var check = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\" /></svg>";
var clock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" /></svg>";
var close = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\" /></svg>";
var code = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\" /></svg>";
var cog = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\" /> <path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\" /></svg>";
var comment = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\" /></svg>";
var commenting = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\" /> <circle cx=\"10\" cy=\"8\" r=\"1\" /> <circle cx=\"6\" cy=\"8\" r=\"1\" /> <circle cx=\"14\" cy=\"8\" r=\"1\" /></svg>";
var comments = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\" /> <path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\" /></svg>";
var copy = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\" /></svg>";
var database = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\" /></svg>";
var desktop = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"8\" y=\"15\" width=\"1\" height=\"2\" /> <rect x=\"11\" y=\"15\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"16\" width=\"10\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\" /></svg>";
var download = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\" /> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\" /></svg>";
var dribbble = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>";
var expand = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\" /> <polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\" /></svg>";
var facebook = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\" /></svg>";
var file = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\" /></svg>";
var flickr = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\" /> <circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\" /></svg>";
var folder = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\" /></svg>";
var forward = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\" /></svg>";
var foursquare = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\" /></svg>";
var future = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" /></svg>";
var github = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\" /></svg>";
var gitter = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\" /> <rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\" /> <rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\" /> <rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\" /></svg>";
var google = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\" /></svg>";
var grid = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"2\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"2\" y=\"14\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"14\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"14\" width=\"3\" height=\"3\" /></svg>";
var happy = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"13\" cy=\"7\" r=\"1\" /> <circle cx=\"7\" cy=\"7\" r=\"1\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\" /></svg>";
var hashtag = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\" /></svg>";
var heart = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\" /></svg>";
var history = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" id=\"Shape\" /></svg>";
var home = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\" /> <polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\" /> <polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\" /></svg>";
var image = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"2.5\" width=\"19\" height=\"15\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\" /></svg>";
var info = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>";
var instagram = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\" /> <circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\" /> <path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\" /></svg>";
var italic = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\" /></svg>";
var joomla = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\" /> <path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\" /> <path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\" /> <path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\" /></svg>";
var laptop = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect y=\"16\" width=\"20\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\" /></svg>";
var lifesaver = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\" /></svg>";
var link = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\" /></svg>";
var linkedin = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\" /> <path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\" /></svg>";
var list = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"6\" y=\"4\" width=\"12\" height=\"1\" /> <rect x=\"6\" y=\"9\" width=\"12\" height=\"1\" /> <rect x=\"6\" y=\"14\" width=\"12\" height=\"1\" /> <rect x=\"2\" y=\"4\" width=\"2\" height=\"1\" /> <rect x=\"2\" y=\"9\" width=\"2\" height=\"1\" /> <rect x=\"2\" y=\"14\" width=\"2\" height=\"1\" /></svg>";
var location = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\" /></svg>";
var lock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\" /></svg>";
var mail = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\" /> <path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\" /></svg>";
var menu = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"4\" width=\"16\" height=\"1\" /> <rect x=\"2\" y=\"9\" width=\"16\" height=\"1\" /> <rect x=\"2\" y=\"14\" width=\"16\" height=\"1\" /></svg>";
var minus = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect height=\"1\" width=\"18\" y=\"9\" x=\"1\" /></svg>";
var more = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3\" cy=\"10\" r=\"2\" /> <circle cx=\"10\" cy=\"10\" r=\"2\" /> <circle cx=\"17\" cy=\"10\" r=\"2\" /></svg>";
var move = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6 \" /> <polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19 \" /> <polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16 \" /> <rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\" /> <rect x=\"1\" y=\"11\" width=\"1\" height=\"3\" /> <rect x=\"6\" y=\"18\" width=\"3\" height=\"1\" /></svg>";
var nut = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\" /></svg>";
var pagekit = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 \" /></svg>";
var pencil = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\" /> <path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\" /></svg>";
var phone = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\" /> <circle cx=\"10.5\" cy=\"16.5\" r=\"0.8\" /></svg>";
var pinterest = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\" /></svg>";
var play = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\" /></svg>";
var plus = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"9\" y=\"1\" width=\"1\" height=\"17\" /> <rect x=\"1\" y=\"9\" width=\"17\" height=\"1\" /></svg>";
var pull = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\" /></svg>";
var push = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\" /></svg>";
var question = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\" /></svg>";
var receiver = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\" /></svg>";
var refresh = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\" /></svg>";
var reply = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\" /></svg>";
var rss = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\" /></svg>";
var search = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\" /></svg>";
var server = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"7\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"16\" y=\"3\" width=\"1\" height=\"1\" /> <rect x=\"16\" y=\"10\" width=\"1\" height=\"1\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\" /> <rect x=\"3\" y=\"10\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"10\" width=\"1\" height=\"2\" /> <rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\" /> <rect x=\"3\" y=\"17\" width=\"6\" height=\"1\" /> <rect x=\"11\" y=\"17\" width=\"6\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\" /></svg>";
var settings = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\" /> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\" /> <rect x=\"1\" y=\"3\" width=\"3\" height=\"1\" /> <rect x=\"10\" y=\"3\" width=\"8\" height=\"1\" /> <rect x=\"1\" y=\"9\" width=\"8\" height=\"1\" /> <rect x=\"15\" y=\"9\" width=\"3\" height=\"1\" /> <rect x=\"1\" y=\"15\" width=\"3\" height=\"1\" /> <rect x=\"10\" y=\"15\" width=\"8\" height=\"1\" /></svg>";
var shrink = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\" /> <polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\" /></svg>";
var social = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\" /> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\" /></svg>";
var soundcloud = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\" /> <rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\" /> <rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\" /> <rect y=\"10\" width=\"1.5\" height=\"5\" /></svg>";
var star = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\" /></svg>";
var strikethrough = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\" /> <rect x=\"3\" y=\"10\" width=\"15\" height=\"1\" /></svg>";
var table = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"1\" y=\"3\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"7\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"11\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"15\" width=\"18\" height=\"1\" /></svg>";
var tablet = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\" /> <circle cx=\"10.5\" cy=\"16.3\" r=\"0.8\" /></svg>";
var tag = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\" /> <circle cx=\"14\" cy=\"6\" r=\"1\" /></svg>";
var thumbnails = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\" /></svg>";
var trash = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\" /> <rect x=\"8\" y=\"7\" width=\"1\" height=\"9\" /> <rect x=\"11\" y=\"7\" width=\"1\" height=\"9\" /> <rect x=\"2\" y=\"3\" width=\"16\" height=\"1\" /></svg>";
var tripadvisor = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\" /></svg>";
var tumblr = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\" /></svg>";
var tv = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"7\" y=\"16\" width=\"6\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"3.5\" width=\"19\" height=\"11\" /></svg>";
var twitter = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\" /></svg>";
var uikit = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\" /> <polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\" /></svg>";
var unlock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\" /> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\" /></svg>";
var upload = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8 \" /> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\" /></svg>";
var user = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\" /></svg>";
var users = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\" /></svg>";
var vimeo = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\" /></svg>";
var warning = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"14\" r=\"1\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\" /></svg>";
var whatsapp = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\" /></svg>";
var wordpress = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\" /></svg>";
var world = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\" /></svg>";
var xing = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\" /> <path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\" /></svg>";
var yelp = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\" /></svg>";
var youtube = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\" /></svg>";
var Icons = {
	album: album,
	ban: ban,
	behance: behance,
	bell: bell,
	bold: bold,
	bolt: bolt,
	bookmark: bookmark,
	calendar: calendar,
	camera: camera,
	cart: cart,
	check: check,
	clock: clock,
	close: close,
	code: code,
	cog: cog,
	comment: comment,
	commenting: commenting,
	comments: comments,
	copy: copy,
	database: database,
	desktop: desktop,
	download: download,
	dribbble: dribbble,
	expand: expand,
	facebook: facebook,
	file: file,
	flickr: flickr,
	folder: folder,
	forward: forward,
	foursquare: foursquare,
	future: future,
	github: github,
	gitter: gitter,
	google: google,
	grid: grid,
	happy: happy,
	hashtag: hashtag,
	heart: heart,
	history: history,
	home: home,
	image: image,
	info: info,
	instagram: instagram,
	italic: italic,
	joomla: joomla,
	laptop: laptop,
	lifesaver: lifesaver,
	link: link,
	linkedin: linkedin,
	list: list,
	location: location,
	lock: lock,
	mail: mail,
	menu: menu,
	minus: minus,
	more: more,
	move: move,
	nut: nut,
	pagekit: pagekit,
	pencil: pencil,
	phone: phone,
	pinterest: pinterest,
	play: play,
	plus: plus,
	pull: pull,
	push: push,
	question: question,
	receiver: receiver,
	refresh: refresh,
	reply: reply,
	rss: rss,
	search: search,
	server: server,
	settings: settings,
	shrink: shrink,
	social: social,
	soundcloud: soundcloud,
	star: star,
	strikethrough: strikethrough,
	table: table,
	tablet: tablet,
	tag: tag,
	thumbnails: thumbnails,
	trash: trash,
	tripadvisor: tripadvisor,
	tumblr: tumblr,
	tv: tv,
	twitter: twitter,
	uikit: uikit,
	unlock: unlock,
	upload: upload,
	user: user,
	users: users,
	vimeo: vimeo,
	warning: warning,
	whatsapp: whatsapp,
	wordpress: wordpress,
	world: world,
	xing: xing,
	yelp: yelp,
	youtube: youtube,
	"500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\" /> <path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\" /> <path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\" /> <path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\" /></svg>",
	"arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\" /> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\" /></svg>",
	"arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\" /> <line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\" /></svg>",
	"arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\" /> <line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\" /></svg>",
	"arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\" /> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\" /></svg>",
	"chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\" /></svg>",
	"chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\" /></svg>",
	"chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\" /></svg>",
	"chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\" /></svg>",
	"cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\" /> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\" /></svg>",
	"cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\" /> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\" /></svg>",
	"credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\" /> <rect x=\"1\" y=\"7\" width=\"18\" height=\"3\" /></svg>",
	"file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\" /></svg>",
	"git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\" /></svg>",
	"git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\" /> <ellipse fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" rx=\"1.79\" ry=\"1.79\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\" /></svg>",
	"github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\" /></svg>",
	"google-plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z\" /> <polygon points=\"20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 \" /></svg>",
	"minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\" /></svg>",
	"more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"3\" r=\"2\" /> <circle cx=\"10\" cy=\"10\" r=\"2\" /> <circle cx=\"10\" cy=\"17\" r=\"2\" /></svg>",
	"paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\" /> <path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\" /></svg>",
	"phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\" /> <circle cx=\"3.8\" cy=\"10.5\" r=\"0.8\" /></svg>",
	"play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>",
	"plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\" /> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\" /></svg>",
	"quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\" /> <path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\" /></svg>",
	"sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\" /> <polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\" /></svg>",
	"sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\" /> <polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\" /></svg>",
	"tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\" /> <circle cx=\"3.7\" cy=\"10.5\" r=\"0.8\" /></svg>",
	"triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 7 15 7 10 12\" /></svg>",
	"triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12 5 7 10 12 15\" /></svg>",
	"triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"8 5 13 10 8 15\" /></svg>",
	"triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 13 10 8 15 13\" /></svg>",
	"video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18,6 18,14 12,10 \" /> <rect x=\"2\" y=\"5\" width=\"12\" height=\"10\" /></svg>"
};

function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.icon.add(Icons);

}

if (typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

return plugin;

})));


/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/*! UIkit 3.0.0-beta.40 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('uikit', factory) :
	(global.UIkit = factory());
}(this, (function () { 'use strict';

function bind(fn, context) {
    return function (a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
    };
}

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

var hyphenateRe = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
    return str
        .replace(hyphenateRe, '$1-$2')
        .toLowerCase();
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
    return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

function ucfirst(str) {
    return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
}

var strPrototype = String.prototype;
var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

function startsWith(str, search) {
    return startsWithFn.call(str, search);
}

var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

function endsWith(str, search) {
    return endsWithFn.call(str, search);
}

var includesFn = function (search) { return ~this.indexOf(search); };
var includesStr = strPrototype.includes || includesFn;
var includesArray = Array.prototype.includes || includesFn;

function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
}

var isArray = Array.isArray;

function isFunction(obj) {
    return typeof obj === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
}

function isDocument(obj) {
    return isObject(obj) && obj.nodeType === 9;
}

function isJQuery(obj) {
    return isObject(obj) && !!obj.jquery;
}

function isNode(element) {
    return element instanceof Node || isObject(element) && element.nodeType === 1;
}

function isNodeCollection(element) {
    return element instanceof NodeList || element instanceof HTMLCollection;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
}

function isUndefined(value) {
    return value === void 0;
}

function toBoolean(value) {
    return isBoolean(value)
        ? value
        : value === 'true' || value === '1' || value === ''
            ? true
            : value === 'false' || value === '0'
                ? false
                : value;
}

function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
}

function toFloat(value) {
    return parseFloat(value) || 0;
}

function toNode(element) {
    return isNode(element) || isWindow(element) || isDocument(element)
        ? element
        : isNodeCollection(element) || isJQuery(element)
            ? element[0]
            : isArray(element)
                ? toNode(element[0])
                : null;
}

var arrayProto = Array.prototype;
function toNodes(element) {
    return isNode(element)
        ? [element]
        : isNodeCollection(element)
            ? arrayProto.slice.call(element)
            : isArray(element)
                ? element.map(toNode).filter(Boolean)
                : isJQuery(element)
                    ? element.toArray()
                    : [];
}

function toList(value) {
    return isArray(value)
        ? value
        : isString(value)
            ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                ? toNumber(value)
                : toBoolean(value.trim()); })
            : [value];
}

function toMs(time) {
    return !time
        ? 0
        : endsWith(time, 'ms')
            ? toFloat(time)
            : toFloat(time) * 1000;
}

function swap(value, a, b) {
    return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
        return match === a ? b : a;
    });
}

var assign = Object.assign || function (target) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    target = Object(target);
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (source !== null) {
            for (var key in source) {
                if (hasOwn(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
};

function each(obj, cb) {
    for (var key in obj) {
        if (cb.call(obj[key], obj[key], key) === false) {
            break;
        }
    }
}

function sortBy(collection, prop) {
    return collection.sort(function (a, b) { return a[prop] > b[prop]
            ? 1
            : b[prop] > a[prop]
                ? -1
                : 0; }
    );
}

function clamp(number, min, max) {
    if ( min === void 0 ) min = 0;
    if ( max === void 0 ) max = 1;

    return Math.min(Math.max(number, min), max);
}

function noop() {}

function intersectRect(r1, r2) {
    return r1.left <= r2.right &&
        r2.left <= r1.right &&
        r1.top <= r2.bottom &&
        r2.top <= r1.bottom;
}

function pointInRect(point, rect) {
    return intersectRect({top: point.y, bottom: point.y, left: point.x, right: point.x}, rect);
}

var Dimensions = {

    ratio: function ratio(dimensions, prop, value) {
        var obj;


        var aProp = prop === 'width' ? 'height' : 'width';

        return ( obj = {}, obj[aProp] = Math.round(value * dimensions[aProp] / dimensions[prop]), obj[prop] = value, obj);
    },

    contain: function contain(dimensions, maxDimensions) {
        var this$1 = this;

        dimensions = assign({}, dimensions);

        each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
            ? this$1.ratio(dimensions, prop, maxDimensions[prop])
            : dimensions; }
        );

        return dimensions;
    },

    cover: function cover(dimensions, maxDimensions) {
        var this$1 = this;

        dimensions = this.contain(dimensions, maxDimensions);

        each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
            ? this$1.ratio(dimensions, prop, maxDimensions[prop])
            : dimensions; }
        );

        return dimensions;
    }

};

function attr(element, name, value) {

    if (isObject(name)) {
        for (var key in name) {
            attr(element, key, name[key]);
        }
        return;
    }

    if (isUndefined(value)) {
        element = toNode(element);
        return element && element.getAttribute(name);
    } else {
        toNodes(element).forEach(function (element) {

            if (isFunction(value)) {
                value = value.call(element, attr(element, name));
            }

            if (value === null) {
                removeAttr(element, name);
            } else {
                element.setAttribute(name, value);
            }
        });
    }

}

function hasAttr(element, name) {
    return toNodes(element).some(function (element) { return element.hasAttribute(name); });
}

function removeAttr(element, name) {
    element = toNodes(element);
    name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.removeAttribute(name); }
        ); }
    );
}

function filterAttr(element, attribute, pattern, replacement) {
    attr(element, attribute, function (value) { return value ? value.replace(pattern, replacement) : value; });
}

function data(element, attribute) {
    for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
        if (hasAttr(element, attrs[i])) {
            return attr(element, attrs[i]);
        }
    }
}

/* global setImmediate */
var Promise = 'Promise' in window ? window.Promise : PromiseFn;

var Deferred = function Deferred() {
    var this$1 = this;

    this.promise = new Promise(function (resolve, reject) {
        this$1.reject = reject;
        this$1.resolve = resolve;
    });
};

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

var async = 'setImmediate' in window ? setImmediate : setTimeout;

function PromiseFn(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

PromiseFn.reject = function (r) {
    return new PromiseFn(function (resolve, reject) {
        reject(r);
    });
};

PromiseFn.resolve = function (x) {
    return new PromiseFn(function (resolve, reject) {
        resolve(x);
    });
};

PromiseFn.all = function all(iterable) {
    return new PromiseFn(function (resolve, reject) {
        var result = [];
        var count = 0;

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

PromiseFn.race = function race(iterable) {
    return new PromiseFn(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            PromiseFn.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = PromiseFn.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x.then;

            if (x !== null && isObject(x) && isFunction(then)) {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var this$1 = this;

    async(function () {
        if (this$1.state !== PENDING) {
            while (this$1.deferred.length) {
                var ref = this$1.deferred.shift();
                var onResolved = ref[0];
                var onRejected = ref[1];
                var resolve = ref[2];
                var reject = ref[3];

                try {
                    if (this$1.state === RESOLVED) {
                        if (isFunction(onResolved)) {
                            resolve(onResolved.call(undefined, this$1.value));
                        } else {
                            resolve(this$1.value);
                        }
                    } else if (this$1.state === REJECTED) {
                        if (isFunction(onRejected)) {
                            resolve(onRejected.call(undefined, this$1.value));
                        } else {
                            reject(this$1.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var this$1 = this;

    return new PromiseFn(function (resolve, reject) {
        this$1.deferred.push([onResolved, onRejected, resolve, reject]);
        this$1.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/* global DocumentTouch */
var win = window;
var doc = document;
var docEl = doc.documentElement;

var isRtl = attr(docEl, 'dir') === 'rtl';

var Observer = win.MutationObserver;

var hasTouchEvents = 'ontouchstart' in win;
var hasPointerEvents = win.PointerEvent;
var hasTouch = hasTouchEvents
    || win.DocumentTouch && doc instanceof DocumentTouch
    || navigator.maxTouchPoints; // IE >=11

var pointerDown = !hasTouch ? 'mousedown' : ("mousedown " + (hasTouchEvents ? 'touchstart' : 'pointerdown'));
var pointerMove = !hasTouch ? 'mousemove' : ("mousemove " + (hasTouchEvents ? 'touchmove' : 'pointermove'));
var pointerUp = !hasTouch ? 'mouseup' : ("mouseup " + (hasTouchEvents ? 'touchend' : 'pointerup'));
var pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
var pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';

function getImage(src) {

    return new Promise(function (resolve, reject) {
        var img = new Image();

        img.onerror = reject;
        img.onload = function () { return resolve(img); };

        img.src = src;
    });

}

var supports = {};

// IE 11
(function () {

    var list = doc.createElement('_').classList;
    if (list) {
        list.add('a', 'b');
        list.toggle('c', false);
        supports.Multiple = list.contains('b');
        supports.Force = !list.contains('c');
        supports.ClassList = true;
    }
    list = null;

})();

function query(selector, context) {
    return toNode(selector) || find(selector, isContextSelector(selector) ? context : doc);
}

function queryAll(selector, context) {
    var nodes = toNodes(selector);
    return nodes.length && nodes || findAll(selector, isContextSelector(selector) ? context : doc);
}

function find(selector, context) {
    return toNode(_query(selector, context, 'querySelector'));
}

function findAll(selector, context) {
    return toNodes(_query(selector, context, 'querySelectorAll'));
}

function _query(selector, context, queryFn) {
    if ( context === void 0 ) context = doc;


    if (!selector || !isString(selector)) {
        return null;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');

    var removes;

    if (isContextSelector(selector)) {

        removes = [];

        selector = selector.split(',').map(function (selector, i) {

            var ctx = context;

            selector = selector.trim();

            if (selector[0] === '!') {

                var selectors = selector.substr(1).trim().split(' ');
                ctx = closest(context.parentNode, selectors[0]);
                selector = selectors.slice(1).join(' ');

            }

            if (!ctx) {
                return null;
            }

            if (!ctx.id) {
                ctx.id = "uk-" + (Date.now()) + i;
                removes.push(function () { return removeAttr(ctx, 'id'); });
            }

            return ("#" + (escape(ctx.id)) + " " + selector);

        }).filter(Boolean).join(',');

        context = doc;

    }

    try {

        return context[queryFn](selector);

    } catch (e) {

        return null;

    } finally {

        removes && removes.forEach(function (remove) { return remove(); });

    }

}

var contextSelectorRe = /(^|,)\s*[!>+~]/;
var contextSanitizeRe = /([!>+~])(?=\s+[!>+~]|\s*$)/g;

function isContextSelector(selector) {
    return isString(selector) && selector.match(contextSelectorRe);
}

var elProto = Element.prototype;
var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;

function matches(element, selector) {
    return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
}

var closestFn = elProto.closest || function (selector) {
    var ancestor = this;

    do {

        if (matches(ancestor, selector)) {
            return ancestor;
        }

        ancestor = ancestor.parentNode;

    } while (ancestor && ancestor.nodeType === 1);
};

function closest(element, selector) {

    if (startsWith(selector, '>')) {
        selector = selector.slice(1);
    }

    return isNode(element)
        ? element.parentNode && closestFn.call(element, selector)
        : toNodes(element).map(function (element) { return element.parentNode && closestFn.call(element, selector); }).filter(Boolean);
}

function parents(element, selector) {
    var elements = [];
    var parent = toNode(element).parentNode;

    while (parent && parent.nodeType === 1) {

        if (matches(parent, selector)) {
            elements.push(parent);
        }

        parent = parent.parentNode;
    }

    return elements;
}

var escapeFn = win.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
function escape(css) {
    return isString(css) ? escapeFn.call(null, css) : '';
}

var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
function isVoidElement(element) {
    return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
}

function isVisible(element) {
    return toNodes(element).some(function (element) { return element.offsetHeight || element.getBoundingClientRect().height; });
}

var selInput = 'input,select,textarea,button';
function isInput(element) {
    return toNodes(element).some(function (element) { return matches(element, selInput); });
}

function filter(element, selector) {
    return toNodes(element).filter(function (element) { return matches(element, selector); });
}

function within(element, selector) {
    return !isString(selector)
        ? element === selector || toNode(selector).contains(toNode(element))
        : matches(element, selector) || closest(element, selector);
}

function on() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];


    var ref = getArgs(args);
    var target = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];

    target = toEventTarget(target);

    if (selector) {
        listener = delegate(target, selector, listener);
    }

    if (listener.length > 1) {
        listener = detail(listener);
    }

    type.split(' ').forEach(function (type) { return target && target.addEventListener(type, listener, useCapture); });
    return function () { return off(target, type, listener, useCapture); };
}

function off(target, type, listener, useCapture) {
    if ( useCapture === void 0 ) useCapture = false;

    target = toEventTarget(target);
    target && type.split(' ').forEach(function (type) { return target.removeEventListener(type, listener, useCapture); });
}

function once() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];


    var ref = getArgs(args);
    var element = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    var condition = ref[5];
    var off = on(element, type, selector, function (e) {
        var result = !condition || condition(e);
        if (result) {
            off();
            listener(e, result);
        }
    }, useCapture);

    return off;
}

function trigger(target, event, detail) {
    return toEventTargets(target).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
        , true);
}

function createEvent(e, bubbles, cancelable, detail) {
    if ( bubbles === void 0 ) bubbles = true;
    if ( cancelable === void 0 ) cancelable = false;

    if (isString(e)) {
        var event = document.createEvent('CustomEvent'); // IE 11
        event.initCustomEvent(e, bubbles, cancelable, detail);
        e = event;
    }

    return e;
}

function getArgs(args) {

    if (isString(args[0])) {
        args[0] = find(args[0]);
    }

    if (isFunction(args[2])) {
        args.splice(2, 0, false);
    }
    return args;
}

function delegate(element, selector, listener) {
    var this$1 = this;

    return function (e) {

        var target = e.target;
        var current = selector[0] === '>'
            ? findAll(selector, element).reverse().filter(function (element) { return within(target, element); })[0]
            : closest(target, selector);

        if (current) {
            e.delegate = element;
            e.current = current;

            listener.call(this$1, e);
        }
    };
}

function detail(listener) {
    return function (e) { return isArray(e.detail) ? listener.apply(listener, [e].concat(e.detail)) : listener(e); };
}

function isEventTarget(target) {
    return 'EventTarget' in window
        ? target instanceof EventTarget
        : target && 'addEventListener' in target;
}

function toEventTarget(target) {
    return isEventTarget(target) ? target : toNode(target);
}

function toEventTargets(target) {
    return isEventTarget(target)
        ? [target]
        : isArray(target)
            ? target.map(toEventTarget).filter(Boolean)
            : toNodes(target);
}

function preventClick() {

    var timer = setTimeout(once(document, 'click', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();

        clearTimeout(timer);

    }, true));

}

function ajax(url, options) {
    return new Promise(function (resolve, reject) {

        var env = assign({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ''
        }, options);

        env.beforeSend(env);

        var xhr = env.xhr;

        for (var prop in env) {
            if (prop in xhr) {
                try {

                    xhr[prop] = env[prop];

                } catch (e) {}
            }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (var header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
        }

        on(xhr, 'load', function () {

            if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(xhr);
            } else {
                reject(assign(Error(xhr.statusText), {
                    xhr: xhr,
                    status: xhr.status
                }));
            }

        });

        on(xhr, 'error', function () { return reject(assign(Error('Network Error'), {xhr: xhr})); });
        on(xhr, 'timeout', function () { return reject(assign(Error('Network Timeout'), {xhr: xhr})); });

        xhr.send(env.data);
    });
}

function isReady() {
    return doc.readyState === 'complete' || doc.readyState !== 'loading' && !docEl.doScroll;
}

function ready(fn) {

    if (isReady()) {
        fn();
        return;
    }

    var handle = function () {
        unbind1();
        unbind2();
        fn();
    };
    var unbind1 = on(doc, 'DOMContentLoaded', handle);
    var unbind2 = on(win, 'load', handle);
}

function index(element, ref) {
    return ref
        ? toNodes(element).indexOf(toNode(ref))
        : toNodes((element = toNode(element)) && element.parentNode.children).indexOf(element);
}

function getIndex(i, elements, current, finite) {
    if ( current === void 0 ) current = 0;
    if ( finite === void 0 ) finite = false;


    elements = toNodes(elements);

    var length = elements.length;

    i = isNumeric(i)
        ? toNumber(i)
        : i === 'next'
            ? current + 1
            : i === 'previous'
                ? current - 1
                : index(elements, i);

    if (finite) {
        return clamp(i, 0, length - 1);
    }

    i %= length;

    return i < 0 ? i + length : i;
}

function empty(element) {
    element = toNode(element);
    element.innerHTML = '';
    return element;
}

function html(parent, html) {
    parent = toNode(parent);
    return isUndefined(html)
        ? parent.innerHTML
        : append(parent.hasChildNodes() ? empty(parent) : parent, html);
}

function prepend(parent, element) {

    parent = toNode(parent);

    if (!parent.hasChildNodes()) {
        return append(parent, element);
    } else {
        return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); });
    }
}

function append(parent, element) {
    parent = toNode(parent);
    return insertNodes(element, function (element) { return parent.appendChild(element); });
}

function before(ref, element) {
    ref = toNode(ref);
    return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); });
}

function after(ref, element) {
    ref = toNode(ref);
    return insertNodes(element, function (element) { return ref.nextSibling
        ? before(ref.nextSibling, element)
        : append(ref.parentNode, element); }
    );
}

function insertNodes(element, fn) {
    element = isString(element) ? fragment(element) : element;
    return element
        ? 'length' in element
            ? toNodes(element).map(fn)
            : fn(element)
        : null;
}

function remove(element) {
    toNodes(element).map(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
}

function wrapAll(element, structure) {

    structure = toNode(before(element, structure));

    while (structure.firstChild) {
        structure = structure.firstChild;
    }

    append(structure, element);

    return structure;
}

function wrapInner(element, structure) {
    return toNodes(toNodes(element).map(function (element) { return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure); }
    ));
}

function unwrap(element) {
    toNodes(element)
        .map(function (element) { return element.parentNode; })
        .filter(function (value, index, self) { return self.indexOf(value) === index; })
        .forEach(function (parent) {
            before(parent, parent.childNodes);
            remove(parent);
        });
}

var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

function fragment(html) {

    var matches = singleTagRE.exec(html);
    if (matches) {
        return doc.createElement(matches[1]);
    }

    var container = doc.createElement('div');
    if (fragmentRE.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
    } else {
        container.textContent = html;
    }

    return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;

}

function addClass(element) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    apply(element, args, 'add');
}

function removeClass(element) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    apply(element, args, 'remove');
}

function removeClasses(element, cls) {
    filterAttr(element, 'class', new RegExp(("(^|\\s)" + cls + "(?!\\S)"), 'g'), '');
}

function replaceClass(element) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
}

function hasClass(element, cls) {
    return supports.ClassList && toNodes(element).some(function (element) { return element.classList.contains(cls); });
}

function toggleClass(element) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];


    if (!supports.ClassList || !args.length) {
        return;
    }

    args = getArgs$1(args);

    var force = !isString(args[args.length - 1]) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false

    args = args.filter(Boolean);

    toNodes(element).forEach(function (ref) {
        var classList = ref.classList;

        for (var i = 0; i < args.length; i++) {
            supports.Force
                ? classList.toggle.apply(classList, [args[i]].concat(force))
                : (classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]));
        }
    });

}

function apply(element, args, fn) {
    args = getArgs$1(args).filter(Boolean);

    supports.ClassList && args.length && toNodes(element).forEach(function (ref) {
        var classList = ref.classList;

        supports.Multiple
            ? classList[fn].apply(classList, args)
            : args.forEach(function (cls) { return classList[fn](cls); });
    });
}

function getArgs$1(args) {
    return args.reduce(function (args, arg) { return args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg); }
        , []);
}

var cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'widows': true,
    'z-index': true,
    'zoom': true
};

function css(element, property, value) {

    return toNodes(element).map(function (element) {

        if (isString(property)) {

            property = propName(property);

            if (isUndefined(value)) {
                return getStyle(element, property);
            } else if (!value && value !== 0) {
                element.style.removeProperty(property);
            } else {
                element.style[property] = isNumeric(value) && !cssNumber[property] ? (value + "px") : value;
            }

        } else if (isArray(property)) {

            var styles = getStyles(element);

            return property.reduce(function (props, property) {
                props[property] = styles[propName(property)];
                return props;
            }, {});

        } else if (isObject(property)) {
            each(property, function (value, property) { return css(element, property, value); });
        }

        return element;

    })[0];

}

function getStyles(element, pseudoElt) {
    element = toNode(element);
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
}

function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
}

var vars = {};

function getCssVar(name) {

    if (!(name in vars)) {

        /* usage in css: .var-name:before { content:"xyz" } */

        var element = append(docEl, doc.createElement('div'));

        addClass(element, ("var-" + name));

        try {

            vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
            vars[name] = JSON.parse(vars[name]);

        } catch (e) {}

        docEl.removeChild(element);

    }

    return vars[name];

}

var cssProps = {};

function propName(name) {

    var ret = cssProps[name];
    if (!ret) {
        ret = cssProps[name] = vendorPropName(name) || name;
    }
    return ret;
}

var cssPrefixes = ['webkit', 'moz', 'ms'];
var ref$1 = doc.createElement('_');
var style = ref$1.style;

function vendorPropName(name) {

    name = hyphenate(name);

    if (name in style) {
        return name;
    }

    var i = cssPrefixes.length, prefixedName;

    while (i--) {
        prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
        if (prefixedName in style) {
            return prefixedName;
        }
    }
}

function transition(element, props, duration, timing) {
    if ( duration === void 0 ) duration = 400;
    if ( timing === void 0 ) timing = 'linear';


    return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

            for (var name in props) {
                var value = css(element, name);
                if (value === '') {
                    css(element, name, value);
                }
            }

            var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);

            once(element, 'transitionend transitioncanceled', function (ref) {
                var type = ref.type;

                clearTimeout(timer);
                removeClass(element, 'uk-transition');
                css(element, {
                    'transition-property': '',
                    'transition-duration': '',
                    'transition-timing-function': ''
                });
                type === 'transitioncanceled' ? reject() : resolve();
            }, false, function (ref) {
                var target = ref.target;

                return element === target;
            });

            addClass(element, 'uk-transition');
            css(element, assign({
                'transition-property': Object.keys(props).map(propName).join(','),
                'transition-duration': (duration + "ms"),
                'transition-timing-function': timing
            }, props));

        }); }
    ));

}

var Transition = {

    start: transition,

    stop: function stop(element) {
        trigger(element, 'transitionend');
        return Promise.resolve();
    },

    cancel: function cancel(element) {
        trigger(element, 'transitioncanceled');
    },

    inProgress: function inProgress(element) {
        return hasClass(element, 'uk-transition');
    }

};

var animationPrefix = 'uk-animation-';
var clsCancelAnimation = 'uk-cancel-animation';

function animate(element, animation, duration, origin, out) {
    var arguments$1 = arguments;
    if ( duration === void 0 ) duration = 200;


    return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

            if (hasClass(element, clsCancelAnimation)) {
                requestAnimationFrame(function () { return Promise.resolve().then(function () { return animate.apply(void 0, arguments$1).then(resolve, reject); }
                    ); }
                );
                return;
            }

            var cls = animation + " " + animationPrefix + (out ? 'leave' : 'enter');

            if (startsWith(animation, animationPrefix)) {

                if (origin) {
                    cls += " uk-transform-origin-" + origin;
                }

                if (out) {
                    cls += " " + animationPrefix + "reverse";
                }

            }

            reset();

            once(element, 'animationend animationcancel', function (ref) {
                var type = ref.type;


                var hasReset = false;

                if (type === 'animationcancel') {
                    reject();
                    reset();
                } else {
                    resolve();
                    Promise.resolve().then(function () {
                        hasReset = true;
                        reset();
                    });
                }

                requestAnimationFrame(function () {
                    if (!hasReset) {
                        addClass(element, clsCancelAnimation);

                        requestAnimationFrame(function () { return removeClass(element, clsCancelAnimation); });
                    }
                });

            }, false, function (ref) {
                var target = ref.target;

                return element === target;
            });

            css(element, 'animationDuration', (duration + "ms"));
            addClass(element, cls);

            function reset() {
                css(element, 'animationDuration', '');
                removeClasses(element, (animationPrefix + "\\S*"));
            }

        }); }
    ));

}

var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
var Animation = {

    in: function in$1(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },

    out: function out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress: function inProgress$1(element) {
        return inProgress.test(attr(element, 'class'));
    },

    cancel: function cancel(element) {
        trigger(element, 'animationcancel');
    }

};

function $(selector, context) {
    return !isString(selector)
        ? toNode(selector)
        : isHtml(selector)
            ? toNode(fragment(selector))
            : find(selector, context);
}

function $$(selector, context) {
    return !isString(selector)
        ? toNodes(selector)
        : isHtml(selector)
            ? toNodes(fragment(selector))
            : findAll(selector, context);
}

function isHtml(str) {
    return str[0] === '<' || str.match(/^\s*</);
}

var dirs = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
};

function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);

    var flipped = {element: elAttach, target: targetAttach};

    if (!element || !target) {
        return flipped;
    }

    var dim = getDimensions(element);
    var targetDim = getDimensions(target);
    var position = targetDim;

    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);

    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];

    position.left += elOffset['x'];
    position.top += elOffset['y'];

    boundary = getDimensions(boundary || window$1(element));

    if (flip) {
        each(dirs, function (ref, prop) {
            var dir = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];


            if (!(flip === true || includes(flip, dir))) {
                return;
            }

            var elemOffset = elAttach[dir] === align
                ? -dim[prop]
                : elAttach[dir] === alignFlip
                    ? dim[prop]
                    : 0;

            var targetOffset = targetAttach[dir] === align
                ? targetDim[prop]
                : targetAttach[dir] === alignFlip
                    ? -targetDim[prop]
                    : 0;

            if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                var centerOffset = dim[prop] / 2;
                var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                elAttach[dir] === 'center' && (
                    apply(centerOffset, centerTargetOffset)
                    || apply(-centerOffset, -centerTargetOffset)
                ) || apply(elemOffset, targetOffset);

            }

            function apply(elemOffset, targetOffset) {

                var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;

                if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                    position[align] = newVal;

                    ['element', 'target'].forEach(function (el) {
                        flipped[el][dir] = !elemOffset
                            ? flipped[el][dir]
                            : flipped[el][dir] === dirs[prop][1]
                                ? dirs[prop][2]
                                : dirs[prop][1];
                    });

                    return true;
                }

            }

        });
    }

    offset(element, position);

    return flipped;
}

function offset(element, coordinates) {

    element = toNode(element);

    if (coordinates) {

        var currentOffset = offset(element);
        var pos = css(element, 'position');

        ['left', 'top'].forEach(function (prop) {
            if (prop in coordinates) {
                var value = css(element, prop);
                element.style[prop] = ((coordinates[prop] - currentOffset[prop])
                + toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)) + "px";
            }
        });

        return;
    }

    return getDimensions(element);
}

function getDimensions(element) {

    element = toNode(element);

    var ref = window$1(element);
    var top = ref.pageYOffset;
    var left = ref.pageXOffset;

    if (isWindow(element)) {

        var height = element.innerHeight;
        var width = element.innerWidth;

        return {
            top: top,
            left: left,
            height: height,
            width: width,
            bottom: top + height,
            right: left + width,
        };
    }

    var display = false;
    if (!isVisible(element)) {
        display = element.style.display;
        element.style.display = 'block';
    }

    var rect = element.getBoundingClientRect();

    if (display !== false) {
        element.style.display = display;
    }

    return {
        height: rect.height,
        width: rect.width,
        top: rect.top + top,
        left: rect.left + left,
        bottom: rect.bottom + top,
        right: rect.right + left,
    };
}

function position(element) {
    element = toNode(element);

    var parent = offsetParent(element);
    var parentOffset = parent === docEl$1(element) ? {top: 0, left: 0} : offset(parent);
    var ref = ['top', 'left'].reduce(function (props, prop) {
        var propName$$1 = ucfirst(prop);
        props[prop] -= parentOffset[prop]
            + (toFloat(css(element, ("margin" + propName$$1))) || 0)
            + (toFloat(css(parent, ("border" + propName$$1 + "Width"))) || 0);
        return props;
    }, offset(element));
    var top = ref.top;
    var left = ref.left;

    return {top: top, left: left};
}

function offsetParent(element) {

    var parent = toNode(element).offsetParent;

    while (parent && css(parent, 'position') === 'static') {
        parent = parent.offsetParent;
    }

    return parent || docEl$1(element);
}

var height = dimension('height');
var width = dimension('width');

function dimension(prop) {
    var propName$$1 = ucfirst(prop);
    return function (element, value) {

        element = toNode(element);

        if (isUndefined(value)) {

            if (isWindow(element)) {
                return element[("inner" + propName$$1)];
            }

            if (isDocument(element)) {
                var doc = element.documentElement;
                return Math.max(doc.offsetHeight, doc.scrollHeight);
            }

            value = css(element, prop);
            value = value === 'auto' ? element[("offset" + propName$$1)] : toFloat(value) || 0;

            return getContentSize(prop, element, value);

        } else {

            css(element, prop, !value && value !== 0
                ? ''
                : getContentSize(prop, element, value) + 'px'
            );

        }

    };
}

function getContentSize(prop, element, value) {
    return css(element, 'boxSizing') === 'border-box' ? dirs[prop].slice(1).map(ucfirst).reduce(function (value, prop) { return value
        - toFloat(css(element, ("padding" + prop)))
        - toFloat(css(element, ("border" + prop + "Width"))); }
        , value) : value;
}

function moveTo(position, attach, dim, factor) {
    each(dirs, function (ref, prop) {
        var dir = ref[0];
        var align = ref[1];
        var alignFlip = ref[2];

        if (attach[dir] === alignFlip) {
            position[align] += dim[prop] * factor;
        } else if (attach[dir] === 'center') {
            position[align] += dim[prop] * factor / 2;
        }
    });
}

function getPos(pos) {

    var x = /left|center|right/;
    var y = /top|center|bottom/;

    pos = (pos || '').split(' ');

    if (pos.length === 1) {
        pos = x.test(pos[0])
            ? pos.concat(['center'])
            : y.test(pos[0])
                ? ['center'].concat(pos)
                : ['center', 'center'];
    }

    return {
        x: x.test(pos[0]) ? pos[0] : 'center',
        y: y.test(pos[1]) ? pos[1] : 'center'
    };
}

function getOffsets(offsets, width, height) {

    var ref = (offsets || '').split(' ');
    var x = ref[0];
    var y = ref[1];

    return {
        x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
        y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
    };
}

function flipPosition(pos) {
    switch (pos) {
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        default:
            return pos;
    }
}

function isInView(element, top, left) {
    if ( top === void 0 ) top = 0;
    if ( left === void 0 ) left = 0;


    element = toNode(element);

    var win = window$1(element);
    return intersectRect(element.getBoundingClientRect(), {
        top: top,
        left: left,
        bottom: top + height(win),
        right: left + width(win)
    });
}

function scrolledOver(element) {

    element = toNode(element);

    var win = window$1(element);
    var doc = document$1(element);
    var elHeight = element.offsetHeight;
    var top = positionTop(element);
    var vp = height(win);
    var vh = vp + Math.min(0, top - vp);
    var diff = Math.max(0, vp - (height(doc) - (top + elHeight)));

    return clamp(((vh + win.pageYOffset - top) / ((vh + (elHeight - (diff < vp ? diff : 0))) / 100)) / 100);
}

function positionTop(element) {
    var top = 0;

    do {

        top += element.offsetTop;

    } while ((element = element.offsetParent));

    return top;
}

function window$1(element) {
    return isWindow(element) ? element : document$1(element).defaultView;
}

function document$1(element) {
    return toNode(element).ownerDocument;
}

function docEl$1(element) {
    return document$1(element).documentElement;
}

/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/

var fastdom = {

    reads: [],
    writes: [],

    read: function read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
    },

    write: function write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
    },

    clear: function clear(task) {
        return remove$1(this.reads, task) || remove$1(this.writes, task);
    },

    flush: function flush() {

        runTasks(this.reads);
        runTasks(this.writes.splice(0, this.writes.length));

        this.scheduled = false;

        if (this.reads.length || this.writes.length) {
            scheduleFlush();
        }

    }

};

function scheduleFlush() {
    if (!fastdom.scheduled) {
        fastdom.scheduled = true;
        requestAnimationFrame(fastdom.flush.bind(fastdom));
    }
}

function runTasks(tasks) {
    var task;
    while ((task = tasks.shift())) {
        task();
    }
}

function remove$1(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}

function MouseTracker() {}

MouseTracker.prototype = {

    positions: [],
    position: null,

    init: function init() {
        var this$1 = this;


        this.positions = [];
        this.position = null;

        var ticking = false;
        this.unbind = on(doc, 'mousemove', function (e) {

            if (ticking) {
                return;
            }

            setTimeout(function () {

                var time = Date.now();
                var ref = this$1.positions;
                var length = ref.length;

                if (length && (time - this$1.positions[length - 1].time > 100)) {
                    this$1.positions.splice(0, length);
                }

                this$1.positions.push({time: time, x: e.pageX, y: e.pageY});

                if (this$1.positions.length > 5) {
                    this$1.positions.shift();
                }

                ticking = false;
            }, 5);

            ticking = true;
        });

    },

    cancel: function cancel() {
        if (this.unbind) {
            this.unbind();
        }
    },

    movesTo: function movesTo(target) {

        if (this.positions.length < 2) {
            return false;
        }

        var p = offset(target);
        var position$$1 = this.positions[this.positions.length - 1];
        var ref = this.positions;
        var prevPos = ref[0];

        if (p.left <= position$$1.x && position$$1.x <= p.right && p.top <= position$$1.y && position$$1.y <= p.bottom) {
            return false;
        }

        var points = [
            [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
            [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
        ];

        if (p.right <= position$$1.x) {
            // empty
        } else if (p.left >= position$$1.x) {
            points[0].reverse();
            points[1].reverse();
        } else if (p.bottom <= position$$1.y) {
            points[0].reverse();
        } else if (p.top >= position$$1.y) {
            points[1].reverse();
        }

        return !!points.reduce(function (result, point) {
            return result + (slope(prevPos, point[0]) < slope(position$$1, point[0]) && slope(prevPos, point[1]) > slope(position$$1, point[1]));
        }, 0);
    }

};

function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}

var strats = {};

// concat strategy
strats.args =
strats.events =
strats.init =
strats.created =
strats.beforeConnect =
strats.connected =
strats.ready =
strats.beforeDisconnect =
strats.disconnected =
strats.destroy = function (parentVal, childVal) {

    parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

    return childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : isArray(childVal)
                ? childVal
                : [childVal]
        : parentVal;
};

// update strategy
strats.update = function (parentVal, childVal) {
    return strats.args(parentVal, isFunction(childVal) ? {read: childVal} : childVal);
};

// property strategy
strats.props = function (parentVal, childVal) {

    if (isArray(childVal)) {
        childVal = childVal.reduce(function (value, key) {
            value[key] = String;
            return value;
        }, {});
    }

    return strats.methods(parentVal, childVal);
};

// extend strategy
strats.computed =
strats.defaults =
strats.methods = function (parentVal, childVal) {
    return childVal
        ? parentVal
            ? assign({}, parentVal, childVal)
            : childVal
        : parentVal;
};

// default strategy
var defaultStrat = function (parentVal, childVal) {
    return isUndefined(childVal) ? parentVal : childVal;
};

function mergeOptions(parent, child) {

    var options = {};

    if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i]);
        }
    }

    for (var key in parent) {
        mergeKey(key);
    }

    for (var key$1 in child) {
        if (!hasOwn(parent, key$1)) {
            mergeKey(key$1);
        }
    }

    function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key]);
    }

    return options;
}

var id = 0;

var Player = function Player(el) {
    this.id = ++id;
    this.el = toNode(el);
};

Player.prototype.isVideo = function isVideo () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
};

Player.prototype.isHTML5 = function isHTML5 () {
    return this.el.tagName === 'VIDEO';
};

Player.prototype.isIFrame = function isIFrame () {
    return this.el.tagName === 'IFRAME';
};

Player.prototype.isYoutube = function isYoutube () {
    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
};

Player.prototype.isVimeo = function isVimeo () {
    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
};

Player.prototype.enableApi = function enableApi () {
        var this$1 = this;


    if (this.ready) {
        return this.ready;
    }

    var youtube = this.isYoutube();
    var vimeo = this.isVimeo();

    var poller;

    if (youtube || vimeo) {

        return this.ready = new Promise(function (resolve) {

            once(this$1.el, 'load', function () {
                if (youtube) {
                    var listener = function () { return post(this$1.el, {event: 'listening', id: this$1.id}); };
                    poller = setInterval(listener, 100);
                    listener();
                }
            });

            listen(function (data$$1) { return youtube && data$$1.id === this$1.id && data$$1.event === 'onReady' || vimeo && Number(data$$1.player_id) === this$1.id; })
                .then(function () {
                    resolve();
                    poller && clearInterval(poller);
                });

            attr(this$1.el, 'src', ("" + (this$1.el.src) + (includes(this$1.el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + id))));

        });

    }

    return Promise.resolve();

};

Player.prototype.play = function play () {
        var this$1 = this;


    if (!this.isVideo()) {
        return;
    }

    if (this.isIFrame()) {
        this.enableApi().then(function () { return post(this$1.el, {func: 'playVideo', method: 'play'}); });
    } else if (this.isHTML5()) {
        try {
            this.el.play();
        } catch (e) {}
    }
};

Player.prototype.pause = function pause () {
        var this$1 = this;


    if (!this.isVideo()) {
        return;
    }

    if (this.isIFrame()) {
        this.enableApi().then(function () { return post(this$1.el, {func: 'pauseVideo', method: 'pause'}); });
    } else if (this.isHTML5()) {
        this.el.pause();
    }
};

Player.prototype.mute = function mute () {
        var this$1 = this;


    if (!this.isVideo()) {
        return;
    }

    if (this.isIFrame()) {
        this.enableApi().then(function () { return post(this$1.el, {func: 'mute', method: 'setVolume', value: 0}); });
    } else if (this.isHTML5()) {
        this.el.muted = true;
        attr(this.el, 'muted', '');
    }

};

function post(el, cmd) {
    try {
        el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
    } catch (e) {}
}

function listen(cb) {

    return new Promise(function (resolve) {

        once(win, 'message', function (_, data$$1) { return resolve(data$$1); }, false, function (ref) {
            var data$$1 = ref.data;


            if (!data$$1 || !isString(data$$1)) {
                return;
            }

            try {
                data$$1 = JSON.parse(data$$1);
            } catch (e) {
                return;
            }

            return data$$1 && cb(data$$1);

        });

    });

}

/*
    Based on:
    Copyright (c) 2010-2016 Thomas Fuchs
    http://zeptojs.com/
*/
var touch = {};
var clickTimeout;
var swipeTimeout;
var tapTimeout;
var clicked;

function swipeDirection(ref) {
    var x1 = ref.x1;
    var x2 = ref.x2;
    var y1 = ref.y1;
    var y2 = ref.y2;

    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
}

function cancelAll() {
    clickTimeout && clearTimeout(clickTimeout);
    swipeTimeout && clearTimeout(swipeTimeout);
    tapTimeout && clearTimeout(tapTimeout);
    clickTimeout = swipeTimeout = tapTimeout = null;
    touch = {};
}

ready(function () {

    on(doc, 'click', function () { return clicked = true; }, true);

    on(doc, pointerDown, function (e) {

        var target = e.target;
        var ref = getPos$1(e);
        var x = ref.x;
        var y = ref.y;
        var now = Date.now();
        var type = getType(e.type);

        if (touch.type && touch.type !== type) {
            return;
        }

        touch.el = 'tagName' in target ? target : target.parentNode;

        clickTimeout && clearTimeout(clickTimeout);

        touch.x1 = x;
        touch.y1 = y;

        if (touch.last && now - touch.last <= 250) {
            touch = {};
        }

        touch.type = type;
        touch.last = now;

        clicked = e.button > 0;

    });

    on(doc, pointerMove, function (e) {

        if (e.defaultPrevented) {
            return;
        }

        var ref = getPos$1(e);
        var x = ref.x;
        var y = ref.y;

        touch.x2 = x;
        touch.y2 = y;

    });

    on(doc, pointerUp, function (ref) {
        var type = ref.type;
        var target = ref.target;


        if (touch.type !== getType(type)) {
            return;
        }

        // swipe
        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {

            swipeTimeout = setTimeout(function () {
                if (touch.el) {
                    trigger(touch.el, 'swipe');
                    trigger(touch.el, ("swipe" + (swipeDirection(touch))));
                }
                touch = {};
            });

        // normal tap
        } else if ('last' in touch) {

            tapTimeout = setTimeout(function () { return trigger(touch.el, 'tap'); });

            // trigger single click after 350ms of inactivity
            if (touch.el && type !== 'mouseup' && within(target, touch.el)) {
                clickTimeout = setTimeout(function () {
                    clickTimeout = null;
                    if (touch.el && !clicked) {
                        trigger(touch.el, 'click');
                    }
                    touch = {};
                }, 350);
            }

        } else {
            touch = {};
        }

    });

    on(doc, 'touchcancel', cancelAll);
    on(win, 'scroll', cancelAll);

});

var touching = false;
on(doc, 'touchstart', function () { return touching = true; }, true);
on(doc, 'click', function () {touching = false;});
on(doc, 'touchcancel', function () { return touching = false; }, true);

function isTouch(e) {
    return touching || e.pointerType === 'touch';
}

function getPos$1(e) {
    var touches = e.touches;
    var changedTouches = e.changedTouches;
    var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
    var x = ref.pageX;
    var y = ref.pageY;

    return {x: x, y: y};
}

function getType(type) {
    return type.slice(0, 5);
}



var util = Object.freeze({
	ajax: ajax,
	transition: transition,
	Transition: Transition,
	animate: animate,
	Animation: Animation,
	attr: attr,
	hasAttr: hasAttr,
	removeAttr: removeAttr,
	filterAttr: filterAttr,
	data: data,
	addClass: addClass,
	removeClass: removeClass,
	removeClasses: removeClasses,
	replaceClass: replaceClass,
	hasClass: hasClass,
	toggleClass: toggleClass,
	$: $,
	$$: $$,
	positionAt: positionAt,
	offset: offset,
	position: position,
	height: height,
	width: width,
	flipPosition: flipPosition,
	isInView: isInView,
	scrolledOver: scrolledOver,
	isReady: isReady,
	ready: ready,
	index: index,
	getIndex: getIndex,
	empty: empty,
	html: html,
	prepend: prepend,
	append: append,
	before: before,
	after: after,
	remove: remove,
	wrapAll: wrapAll,
	wrapInner: wrapInner,
	unwrap: unwrap,
	fragment: fragment,
	win: win,
	doc: doc,
	docEl: docEl,
	isRtl: isRtl,
	Observer: Observer,
	hasTouch: hasTouch,
	pointerDown: pointerDown,
	pointerMove: pointerMove,
	pointerUp: pointerUp,
	pointerEnter: pointerEnter,
	pointerLeave: pointerLeave,
	getImage: getImage,
	supports: supports,
	on: on,
	off: off,
	once: once,
	trigger: trigger,
	createEvent: createEvent,
	toEventTargets: toEventTargets,
	preventClick: preventClick,
	fastdom: fastdom,
	isVoidElement: isVoidElement,
	isVisible: isVisible,
	selInput: selInput,
	isInput: isInput,
	filter: filter,
	within: within,
	bind: bind,
	hasOwn: hasOwn,
	hyphenate: hyphenate,
	camelize: camelize,
	ucfirst: ucfirst,
	startsWith: startsWith,
	endsWith: endsWith,
	includes: includes,
	isArray: isArray,
	isFunction: isFunction,
	isObject: isObject,
	isPlainObject: isPlainObject,
	isWindow: isWindow,
	isDocument: isDocument,
	isJQuery: isJQuery,
	isNode: isNode,
	isNodeCollection: isNodeCollection,
	isBoolean: isBoolean,
	isString: isString,
	isNumber: isNumber,
	isNumeric: isNumeric,
	isUndefined: isUndefined,
	toBoolean: toBoolean,
	toNumber: toNumber,
	toFloat: toFloat,
	toNode: toNode,
	toNodes: toNodes,
	toList: toList,
	toMs: toMs,
	swap: swap,
	assign: assign,
	each: each,
	sortBy: sortBy,
	clamp: clamp,
	noop: noop,
	intersectRect: intersectRect,
	pointInRect: pointInRect,
	Dimensions: Dimensions,
	MouseTracker: MouseTracker,
	mergeOptions: mergeOptions,
	Player: Player,
	Promise: Promise,
	Deferred: Deferred,
	query: query,
	queryAll: queryAll,
	find: find,
	findAll: findAll,
	matches: matches,
	closest: closest,
	parents: parents,
	escape: escape,
	css: css,
	getStyles: getStyles,
	getStyle: getStyle,
	getCssVar: getCssVar,
	propName: propName,
	isTouch: isTouch,
	getPos: getPos$1
});

function componentAPI (UIkit) {

    var DATA = UIkit.data;

    UIkit.components = {};

    UIkit.component = function (id, options) {

        var name = camelize(id);

        if (isPlainObject(options)) {
            options.name = name;
            options = UIkit.extend(options);
        } else if (isUndefined(options)) {
            return UIkit.components[name];
        } else {
            options.options.name = name;
        }

        UIkit.components[name] = options;

        UIkit[name] = function (element, data) {
            var i = arguments.length, argsArray = Array(i);
            while ( i-- ) argsArray[i] = arguments[i];


            if (isPlainObject(element)) {
                return new UIkit.components[name]({data: element});
            }

            if (UIkit.components[name].options.functional) {
                return new UIkit.components[name]({data: [].concat( argsArray )});
            }

            return element && element.nodeType ? init(element) : $$(element).map(init)[0];

            function init(element) {

                var cmp = UIkit.getComponent(element, name);

                if (cmp && data) {
                    cmp.$reset(data);
                }

                return cmp || new UIkit.components[name]({el: element, data: data || {}});
            }

        };

        if (UIkit._initialized && !options.options.functional) {
            fastdom.read(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
        }

        return UIkit.components[name];
    };

    UIkit.getComponents = function (element) { return element && (element = isJQuery(element) ? element[0] : element) && element[DATA] || {}; };
    UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

    UIkit.connect = function (node) {

        if (node[DATA]) {
            for (var name in node[DATA]) {
                node[DATA][name]._callConnected();
            }
        }

        for (var i = 0; i < node.attributes.length; i++) {

            var name$1 = getComponentName(node.attributes[i].name);

            if (name$1 && name$1 in UIkit.components) {
                UIkit[name$1](node);
            }

        }

    };

    UIkit.disconnect = function (node) {
        for (var name in node[DATA]) {
            node[DATA][name]._callDisconnected();
        }
    };

}

function getComponentName(attribute) {
    return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-')
        ? camelize(attribute.replace('data-uk-', '').replace('uk-', ''))
        : false;
}

function boot (UIkit) {

    var connect = UIkit.connect;
    var disconnect = UIkit.disconnect;

    if (!Observer) {
        return;
    }

    if (doc.body) {

        init();

    } else {

        (new Observer(function () {

            if (doc.body) {
                this.disconnect();
                init();
            }

        })).observe(docEl, {childList: true, subtree: true});

    }

    function init() {

        apply(doc.body, connect);

        fastdom.flush();

        (new Observer(function (mutations) { return mutations.forEach(applyMutation); })).observe(docEl, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true
        });

        UIkit._initialized = true;
    }

    function applyMutation(mutation) {

        var target = mutation.target;
        var type = mutation.type;

        var update = type !== 'attributes'
            ? applyChildList(mutation)
            : applyAttribute(mutation);

        update && UIkit.update('update', target, true);

    }

    function applyAttribute(ref) {
        var target = ref.target;
        var attributeName = ref.attributeName;


        if (attributeName === 'href') {
            return true;
        }

        var name = getComponentName(attributeName);

        if (!name || !(name in UIkit.components)) {
            return;
        }

        if (hasAttr(target, attributeName)) {
            UIkit[name](target);
            return true;
        }

        var component = UIkit.getComponent(target, name);

        if (component) {
            component.$destroy();
            return true;
        }

    }

    function applyChildList(ref) {
        var addedNodes = ref.addedNodes;
        var removedNodes = ref.removedNodes;


        for (var i = 0; i < addedNodes.length; i++) {
            apply(addedNodes[i], connect);
        }

        for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
            apply(removedNodes[i$1], disconnect);
        }

        return true;
    }
    function apply(node, fn) {

        if (node.nodeType !== 1 || hasAttr(node, 'uk-no-boot')) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            var next = node.nextElementSibling;
            apply(node, fn);
            node = next;
        }
    }

}

function globalAPI (UIkit) {

    var DATA = UIkit.data;

    UIkit.use = function (plugin) {

        if (plugin.installed) {
            return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
    };

    UIkit.mixin = function (mixin, component) {
        component = (isString(component) ? UIkit.components[component] : component) || this;
        mixin = mergeOptions({}, mixin);
        mixin.mixins = component.options.mixins;
        delete component.options.mixins;
        component.options = mergeOptions(mixin, component.options);
    };

    UIkit.extend = function (options) {

        options = options || {};

        var Super = this;
        var Sub = function UIkitComponent (options) {
            this._init(options);
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = mergeOptions(Super.options, options);

        Sub['super'] = Super;
        Sub.extend = Super.extend;

        return Sub;
    };

    UIkit.update = function (e, element, parents) {
        if ( parents === void 0 ) parents = false;


        e = createEvent(e || 'update');

        if (!element) {

            update(UIkit.instances, e);
            return;

        }

        element = toNode(element);

        if (parents) {

            do {

                update(element[DATA], e);
                element = element.parentNode;

            } while (element);

        } else {

            apply(element, function (element) { return update(element[DATA], e); });

        }

    };

    var container;
    Object.defineProperty(UIkit, 'container', {

        get: function get() {
            return container || doc.body;
        },

        set: function set(element) {
            container = $(element);
        }

    });

    function apply(node, fn) {

        if (node.nodeType !== 1) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            apply(node, fn);
            node = node.nextElementSibling;
        }
    }

    function update(data, e) {

        if (!data) {
            return;
        }

        for (var name in data) {
            if (data[name]._isReady) {
                data[name]._callUpdate(e);
            }
        }

    }

}

function hooksAPI (UIkit) {

    UIkit.prototype._callHook = function (hook) {
        var this$1 = this;


        var handlers = this.$options[hook];

        if (handlers) {
            handlers.forEach(function (handler) { return handler.call(this$1); });
        }
    };

    UIkit.prototype._callConnected = function () {
        var this$1 = this;


        if (this._connected) {
            return;
        }

        if (!includes(UIkit.elements, this.$options.el)) {
            UIkit.elements.push(this.$options.el);
        }

        UIkit.instances[this._uid] = this;

        this._data = {};

        this._callHook('beforeConnect');
        this._connected = true;

        this._initEvents();
        this._initObserver();

        this._callHook('connected');

        if (!this._isReady) {
            ready(function () { return this$1._callReady(); });
        }

        this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {

        if (!this._connected) {
            return;
        }

        this._callHook('beforeDisconnect');

        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }

        var index = UIkit.elements.indexOf(this.$options.el);

        if (~index) {
            UIkit.elements.splice(index, 1);
        }

        delete UIkit.instances[this._uid];

        this._unbindEvents();
        this._callHook('disconnected');

        this._connected = false;

    };

    UIkit.prototype._callReady = function () {

        if (this._isReady) {
            return;
        }

        this._isReady = true;
        this._callHook('ready');
        this._resetComputeds();
        this._callUpdate();
    };

    UIkit.prototype._callUpdate = function (e) {
        var this$1 = this;


        e = createEvent(e || 'update');

        var type = e.type;

        if (includes(['update', 'load', 'resize'], type)) {
            this._resetComputeds();
        }

        var updates = this.$options.update;
        var ref = this._frames;
        var reads = ref.reads;
        var writes = ref.writes;

        if (!updates) {
            return;
        }

        updates.forEach(function (ref, i) {
            var read = ref.read;
            var write = ref.write;
            var events = ref.events;


            if (type !== 'update' && !includes(events, type)) {
                return;
            }

            if (read && !includes(fastdom.reads, reads[i])) {
                reads[i] = fastdom.read(function () {

                    var result = read.call(this$1, this$1._data, e);

                    if (result === false && write) {
                        fastdom.clear(writes[i]);
                        delete writes[i];
                    } else if (isPlainObject(result)) {
                        assign(this$1._data, result);
                    }
                    delete reads[i];
                });
            }

            if (write && !includes(fastdom.writes, writes[i])) {
                writes[i] = fastdom.write(function () {
                    write.call(this$1, this$1._data, e);
                    delete writes[i];
                });
            }

        });

    };

}

function stateAPI (UIkit) {

    var uid = 0;

    UIkit.prototype.props = {};

    UIkit.prototype._init = function (options) {

        options = options || {};
        options = this.$options = mergeOptions(this.constructor.options, options, this);

        this.$el = null;
        this.$name = UIkit.prefix + hyphenate(this.$options.name);
        this.$props = {};

        this._frames = {reads: {}, writes: {}};
        this._events = [];

        this._uid = uid++;
        this._initData();
        this._initMethods();
        this._initComputeds();
        this._callHook('created');

        if (options.el) {
            this.$mount(options.el);
        }
    };

    UIkit.prototype._initData = function () {
        var this$1 = this;


        var ref = this.$options;
        var defaults = ref.defaults;
        var data$$1 = ref.data; if ( data$$1 === void 0 ) data$$1 = {};
        var args = ref.args; if ( args === void 0 ) args = [];
        var props = ref.props; if ( props === void 0 ) props = {};
        var el = ref.el;

        if (args.length && isArray(data$$1)) {
            data$$1 = data$$1.slice(0, args.length).reduce(function (data$$1, value, index) {
                if (isPlainObject(value)) {
                    assign(data$$1, value);
                } else {
                    data$$1[args[index]] = value;
                }
                return data$$1;
            }, {});
        }

        for (var key in assign({}, defaults, props)) {
            this$1.$props[key] = this$1[key] = hasOwn(data$$1, key) && !isUndefined(data$$1[key])
                ? coerce(props[key], data$$1[key], el)
                : defaults
                    ? defaults[key] && isArray(defaults[key])
                        ? defaults[key].concat()
                        : defaults[key]
                    : null;
        }
    };

    UIkit.prototype._initMethods = function () {
        var this$1 = this;


        var ref = this.$options;
        var methods = ref.methods;

        if (methods) {
            for (var key in methods) {
                this$1[key] = bind(methods[key], this$1);
            }
        }
    };

    UIkit.prototype._initComputeds = function () {
        var this$1 = this;


        var ref = this.$options;
        var computed = ref.computed;

        this._resetComputeds();

        if (computed) {
            for (var key in computed) {
                registerComputed(this$1, key, computed[key]);
            }
        }
    };

    UIkit.prototype._resetComputeds = function () {
        this._computeds = {};
    };

    UIkit.prototype._initProps = function (props) {
        var this$1 = this;


        var key;

        this._resetComputeds();

        props = props || getProps(this.$options, this.$name);

        for (key in props) {
            if (!isUndefined(props[key])) {
                this$1.$props[key] = props[key];
            }
        }

        var exclude = [this.$options.computed, this.$options.methods];
        for (key in this$1.$props) {
            if (key in props && notIn(exclude, key)) {
                this$1[key] = this$1.$props[key];
            }
        }
    };

    UIkit.prototype._initEvents = function () {
        var this$1 = this;


        var ref = this.$options;
        var events = ref.events;

        if (events) {

            events.forEach(function (event) {

                if (!hasOwn(event, 'handler')) {
                    for (var key in event) {
                        registerEvent(this$1, event[key], key);
                    }
                } else {
                    registerEvent(this$1, event);
                }

            });
        }
    };

    UIkit.prototype._unbindEvents = function () {
        this._events.forEach(function (unbind) { return unbind(); });
        this._events = [];
    };

    UIkit.prototype._initObserver = function () {
        var this$1 = this;


        var ref = this.$options;
        var attrs = ref.attrs;
        var props = ref.props;
        var el = ref.el;
        if (this._observer || !props || !attrs || !Observer) {
            return;
        }

        attrs = isArray(attrs) ? attrs : Object.keys(props).map(function (key) { return hyphenate(key); });

        this._observer = new Observer(function () {

            var data$$1 = getProps(this$1.$options, this$1.$name);
            if (attrs.some(function (key) { return !isUndefined(data$$1[key]) && data$$1[key] !== this$1.$props[key]; })) {
                this$1.$reset(data$$1);
            }

        });

        this._observer.observe(el, {attributes: true, attributeFilter: attrs.concat([this.$name, ("data-" + (this.$name))])});
    };

    function getProps(opts, name) {

        var data$$1 = {};
        var args = opts.args; if ( args === void 0 ) args = [];
        var props = opts.props; if ( props === void 0 ) props = {};
        var el = opts.el;

        if (!props) {
            return data$$1;
        }

        for (var key in props) {
            var prop = hyphenate(key);
            if (hasAttr(el, prop)) {

                var value = coerce(props[key], attr(el, prop), el);

                if (prop === 'target' && (!value || startsWith(value, '_'))) {
                    continue;
                }

                data$$1[key] = value;
            }
        }

        var options = parseOptions(data(el, name), args);

        for (var key$1 in options) {
            var prop$1 = camelize(key$1);
            if (props[prop$1] !== undefined) {
                data$$1[prop$1] = coerce(props[prop$1], options[key$1], el);
            }
        }

        return data$$1;
    }

    function parseOptions(options, args) {
        var obj;

        if ( args === void 0 ) args = [];

        try {

            return !options
                ? {}
                : startsWith(options, '{')
                    ? JSON.parse(options)
                    : args.length && !includes(options, ':')
                        ? (( obj = {}, obj[args[0]] = options, obj))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.+)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && value) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    function registerComputed(component, key, cb) {
        Object.defineProperty(component, key, {

            enumerable: true,

            get: function get() {

                var _computeds = component._computeds;
                var $props = component.$props;
                var $el = component.$el;

                if (!hasOwn(_computeds, key)) {
                    _computeds[key] = cb.call(component, $props, $el);
                }

                return _computeds[key];
            },

            set: function set(value) {
                component._computeds[key] = value;
            }

        });
    }

    function registerEvent(component, event, key) {

        if (!isPlainObject(event)) {
            event = ({name: key, handler: event});
        }

        var name = event.name;
        var el = event.el;
        var handler = event.handler;
        var capture = event.capture;
        var delegate = event.delegate;
        var filter = event.filter;
        var self = event.self;
        el = isFunction(el)
            ? el.call(component)
            : el || component.$el;

        if (isArray(el)) {
            el.forEach(function (el) { return registerEvent(component, assign({}, event, {el: el}), key); });
            return;
        }

        if (!el || filter && !filter.call(component)) {
            return;
        }

        handler = detail(isString(handler) ? component[handler] : bind(handler, component));

        if (self) {
            handler = selfFilter(handler);
        }

        component._events.push(
            on(
                el,
                name,
                !delegate
                    ? null
                    : isString(delegate)
                        ? delegate
                        : delegate.call(component),
                handler,
                capture
            )
        );

    }

    function selfFilter(handler) {
        return function selfHandler(e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return handler.call(null, e);
            }
        };
    }

    function notIn(options, key) {
        return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e); };
    }

    function coerce(type, value, context) {

        if (type === Boolean) {
            return toBoolean(value);
        } else if (type === Number) {
            return toNumber(value);
        } else if (type === 'query') {
            return query(value, context);
        } else if (type === 'list') {
            return toList(value);
        } else if (type === 'media') {
            return toMedia(value);
        }

        return type ? type(value) : value;
    }

    function toMedia(value) {

        if (isString(value)) {
            if (value[0] === '@') {
                var name = "media-" + (value.substr(1));
                value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

}

function instanceAPI (UIkit) {

    var DATA = UIkit.data;

    UIkit.prototype.$mount = function (el) {

        var ref = this.$options;
        var name = ref.name;

        if (!el[DATA]) {
            el[DATA] = {};
        }

        if (el[DATA][name]) {
            return;
        }

        el[DATA][name] = this;

        this.$el = this.$options.el = this.$options.el || el;

        this._initProps();

        this._callHook('init');

        if (within(el, docEl)) {
            this._callConnected();
        }
    };

    UIkit.prototype.$emit = function (e) {
        this._callUpdate(e);
    };

    UIkit.prototype.$update = function (e, parents) {
        UIkit.update(e, this.$options.el, parents);
    };

    UIkit.prototype.$reset = function (data) {
        this._callDisconnected();
        this._initProps(data);
        this._callConnected();
    };

    UIkit.prototype.$destroy = function (removeEl) {
        if ( removeEl === void 0 ) removeEl = false;


        var ref = this.$options;
        var el = ref.el;
        var name = ref.name;

        if (el) {
            this._callDisconnected();
        }

        this._callHook('destroy');

        if (!el || !el[DATA]) {
            return;
        }

        delete el[DATA][name];

        if (!Object.keys(el[DATA]).length) {
            delete el[DATA];
        }

        if (removeEl) {
            remove(this.$el);
        }
    };

}

var UIkit$2 = function (options) {
    this._init(options);
};

UIkit$2.util = util;
UIkit$2.data = '__uikit__';
UIkit$2.prefix = 'uk-';
UIkit$2.options = {};
UIkit$2.instances = {};
UIkit$2.elements = [];

globalAPI(UIkit$2);
hooksAPI(UIkit$2);
stateAPI(UIkit$2);
instanceAPI(UIkit$2);
componentAPI(UIkit$2);

var Class = {

    init: function init() {
        addClass(this.$el, this.$name);
    }

};

var Container = {

    props: {
        container: Boolean
    },

    defaults: {
        container: true
    },

    computed: {

        container: function container(ref) {
            var container = ref.container;

            return container === true && UIkit$2.container || container && $(container);
        }

    }

};

var Togglable = {

    props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        origin: String,
        transition: String,
        queued: Boolean
    },

    defaults: {
        cls: false,
        animation: [false],
        duration: 200,
        origin: false,
        transition: 'linear',
        queued: false,

        initProps: {
            overflow: '',
            height: '',
            paddingTop: '',
            paddingBottom: '',
            marginTop: '',
            marginBottom: ''
        },

        hideProps: {
            overflow: 'hidden',
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
        }

    },

    computed: {

        hasAnimation: function hasAnimation(ref) {
            var animation = ref.animation;

            return !!animation[0];
        },

        hasTransition: function hasTransition(ref) {
            var animation = ref.animation;

            return this.hasAnimation && animation[0] === true;
        }

    },

    methods: {

        toggleElement: function toggleElement(targets, show, animate) {
            var this$1 = this;

            return new Promise(function (resolve) {

                targets = toNodes(targets);

                var all = function (targets) { return Promise.all(targets.map(function (el) { return this$1._toggleElement(el, show, animate); })); };
                var toggled = targets.filter(function (el) { return this$1.isToggled(el); });
                var untoggled = targets.filter(function (el) { return !includes(toggled, el); });

                var p;

                if (!this$1.queued || !isUndefined(animate) || !isUndefined(show) || !this$1.hasAnimation || targets.length < 2) {

                    p = all(untoggled.concat(toggled));

                } else {

                    var body = doc.body;
                    var scroll = body.scrollTop;
                    var el = toggled[0];
                    var inProgress = Animation.inProgress(el) && hasClass(el, 'uk-animation-leave')
                            || Transition.inProgress(el) && el.style.height === '0px';

                    p = all(toggled);

                    if (!inProgress) {
                        p = p.then(function () {
                            var p = all(untoggled);
                            body.scrollTop = scroll;
                            return p;
                        });
                    }

                }

                p.then(resolve, noop);

            });
        },

        toggleNow: function toggleNow(targets, show) {
            var this$1 = this;

            return new Promise(function (resolve) { return Promise.all(toNodes(targets).map(function (el) { return this$1._toggleElement(el, show, false); })).then(resolve, noop); });
        },

        isToggled: function isToggled(el) {
            var nodes = toNodes(el || this.$el);
            return this.cls
                ? hasClass(nodes, this.cls.split(' ')[0])
                : !hasAttr(nodes, 'hidden');
        },

        updateAria: function updateAria(el) {
            if (this.cls === false) {
                attr(el, 'aria-hidden', !this.isToggled(el));
            }
        },

        _toggleElement: function _toggleElement(el, show, animate) {
            var this$1 = this;


            show = isBoolean(show)
                ? show
                : Animation.inProgress(el)
                    ? hasClass(el, 'uk-animation-leave')
                    : Transition.inProgress(el)
                        ? el.style.height === '0px'
                        : !this.isToggled(el);

            if (!trigger(el, ("before" + (show ? 'show' : 'hide')), [this])) {
                return Promise.reject();
            }

            var promise = (animate === false || !this.hasAnimation
                ? this._toggleImmediate
                : this.hasTransition
                    ? this._toggleHeight
                    : this._toggleAnimation
            )(el, show);

            trigger(el, show ? 'show' : 'hide', [this]);

            return promise.then(function () {
                trigger(el, show ? 'shown' : 'hidden', [this$1]);
                UIkit$2.update(null, el);
            });
        },

        _toggle: function _toggle(el, toggled) {

            if (!el) {
                return;
            }

            if (this.cls) {
                toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
            } else {
                attr(el, 'hidden', !toggled ? '' : null);
            }

            $$('[autofocus]', el).some(function (el) { return isVisible(el) && (el.focus() || true); });

            this.updateAria(el);
            UIkit$2.update(null, el);
        },

        _toggleImmediate: function _toggleImmediate(el, show) {
            this._toggle(el, show);
            return Promise.resolve();
        },

        _toggleHeight: function _toggleHeight(el, show) {
            var this$1 = this;


            var inProgress = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

            Transition.cancel(el);

            if (!this.isToggled(el)) {
                this._toggle(el, true);
            }

            height(el, '');

            // Update child components first
            fastdom.flush();

            var endHeight = height(el) + (inProgress ? 0 : inner);
            height(el, currentHeight);

            return (show
                ? Transition.start(el, assign({}, this.initProps, {overflow: 'hidden', height: endHeight}), Math.round(this.duration * (1 - currentHeight / endHeight)), this.transition)
                : Transition.start(el, this.hideProps, Math.round(this.duration * (currentHeight / endHeight)), this.transition).then(function () { return this$1._toggle(el, false); })
            ).then(function () { return css(el, this$1.initProps); });

        },

        _toggleAnimation: function _toggleAnimation(el, show) {
            var this$1 = this;


            Animation.cancel(el);

            if (show) {
                this._toggle(el, true);
                return Animation.in(el, this.animation[0], this.duration, this.origin);
            }

            return Animation.out(el, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () { return this$1._toggle(el, false); });
        }

    }

};

var active;

var Modal = {

    mixins: [Class, Container, Togglable],

    props: {
        clsPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean
    },

    defaults: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false
    },

    computed: {

        panel: function panel(ref, $el) {
            var clsPanel = ref.clsPanel;

            return $(("." + clsPanel), $el);
        },

        transitionElement: function transitionElement() {
            return this.panel;
        },

        transitionDuration: function transitionDuration() {
            return toMs(css(this.transitionElement, 'transitionDuration'));
        }

    },

    events: [

        {

            name: 'click',

            delegate: function delegate() {
                return this.selClose;
            },

            handler: function handler(e) {
                e.preventDefault();
                this.hide();
            }

        },

        {

            name: 'toggle',

            self: true,

            handler: function handler(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.toggle();
            }

        },

        {
            name: 'beforeshow',

            self: true,

            handler: function handler(e) {

                var prev = active && active !== this && active;

                active = this;

                if (prev) {
                    if (this.stack) {
                        this.prev = prev;
                    } else {
                        prev.hide().then(this.show);
                        e.preventDefault();
                        return;
                    }
                }

                registerEvents();

            }

        },

        {
            name: 'beforehide',

            self: true,

            handler: function handler() {

                active = active && active !== this && active || this.prev;

                if (!active) {
                    deregisterEvents();
                }

            }

        },

        {

            name: 'show',

            self: true,

            handler: function handler() {

                if (!hasClass(docEl, this.clsPage)) {
                    this.scrollbarWidth = width(win) - docEl.offsetWidth;
                    css(doc.body, 'overflowY', this.scrollbarWidth && this.overlay ? 'scroll' : '');
                }

                addClass(docEl, this.clsPage);

            }

        },

        {

            name: 'hidden',

            self: true,

            handler: function handler() {
                var this$1 = this;


                var found;
                var ref = this;
                var prev = ref.prev;

                while (prev) {

                    if (prev.clsPage === this$1.clsPage) {
                        found = true;
                        break;
                    }

                    prev = prev.prev;

                }

                if (!found) {
                    removeClass(docEl, this.clsPage);

                }

                !this.prev && css(doc.body, 'overflowY', '');
            }

        }

    ],

    methods: {

        toggle: function toggle() {
            return this.isToggled() ? this.hide() : this.show();
        },

        show: function show() {

            if (this.isToggled()) {
                return;
            }

            if (this.container && this.$el.parentNode !== this.container) {
                append(this.container, this.$el);
                this._callConnected();
            }

            return this.toggleNow(this.$el, true);
        },

        hide: function hide() {
            if (this.isToggled()) {
                return this.toggleNow(this.$el, false);
            }
        },

        getActive: function getActive() {
            return active;
        },

        _toggleImmediate: function _toggleImmediate(el, show) {
            var this$1 = this;

            return new Promise(function (resolve) { return requestAnimationFrame(function () {
                    this$1._toggle(el, show);

                    if (this$1.transitionDuration) {
                        once(this$1.transitionElement, 'transitionend', resolve, false, function (e) { return e.target === this$1.transitionElement; });
                    } else {
                        resolve();
                    }
                }); }
            );
        }

    }

};

var events;

function registerEvents() {

    if (events) {
        return;
    }

    events = [
        on(docEl, 'click', function (ref) {
            var target = ref.target;
            var defaultPrevented = ref.defaultPrevented;

            if (active && active.bgClose && !defaultPrevented && !within(target, (active.panel || active.$el))) {
                active.hide();
            }
        }),
        on(doc, 'keydown', function (e) {
            if (e.keyCode === 27 && active && active.escClose) {
                e.preventDefault();
                active.hide();
            }
        })
    ];
}

function deregisterEvents() {
    events && events.forEach(function (unbind) { return unbind(); });
    events = null;
}

var Position = {

    props: {
        pos: String,
        offset: null,
        flip: Boolean,
        clsPos: String
    },

    defaults: {
        pos: ("bottom-" + (!isRtl ? 'left' : 'right')),
        flip: true,
        offset: false,
        clsPos: ''
    },

    computed: {

        pos: function pos(ref) {
            var pos = ref.pos;

            return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
        },

        dir: function dir() {
            return this.pos[0];
        },

        align: function align() {
            return this.pos[1];
        }

    },

    methods: {

        positionAt: function positionAt$1(element, target, boundary) {

            removeClasses(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?"));
            css(element, {top: '', left: ''});

            var node;
            var ref = this;
            var offset$$1 = ref.offset;

            offset$$1 = isNumeric(offset$$1)
                ? offset$$1
                : (node = $(offset$$1))
                    ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
                    : 0;

            var axis = this.getAxis();
            var ref$1 = positionAt(
                element,
                target,
                axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
                axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                axis === 'x' ? ("" + (this.dir === 'left' ? -offset$$1 : offset$$1)) : (" " + (this.dir === 'top' ? -offset$$1 : offset$$1)),
                null,
                this.flip,
                boundary
            ).target;
            var x = ref$1.x;
            var y = ref$1.y;

            this.dir = axis === 'x' ? x : y;
            this.align = axis === 'x' ? y : x;

            toggleClass(element, ((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

        },

        getAxis: function getAxis() {
            return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
        }

    }

};

function mixin (UIkit) {

    UIkit.mixin.class = Class;
    UIkit.mixin.container = Container;
    UIkit.mixin.modal = Modal;
    UIkit.mixin.position = Position;
    UIkit.mixin.togglable = Togglable;

}

function Accordion (UIkit) {

    UIkit.component('accordion', {

        mixins: [Class, Togglable],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String
        },

        defaults: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease'
        },

        computed: {

            items: function items(ref, $el) {
                var targets = ref.targets;

                return $$(targets, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.toggle(index($$(((this.targets) + " " + (this.$props.toggle)), this.$el), e.current));
                }

            }

        ],

        connected: function connected() {

            if (this.active === false) {
                return;
            }

            var active = this.items[Number(this.active)];
            if (active && !hasClass(active, this.clsOpen)) {
                this.toggle(active, false);
            }
        },

        update: function update() {
            var this$1 = this;


            this.items.forEach(function (el) { return this$1._toggleImmediate($(this$1.content, el), hasClass(el, this$1.clsOpen)); });

            var active = !this.collapsible && !hasClass(this.items, this.clsOpen) && this.items[0];
            if (active) {
                this.toggle(active, false);
            }
        },

        methods: {

            toggle: function toggle(item, animate) {
                var this$1 = this;


                var index = getIndex(item, this.items);
                var active = filter(this.items, ("." + (this.clsOpen)));

                item = this.items[index];

                item && [item]
                    .concat(!this.multiple && !includes(active, item) && active || [])
                    .forEach(function (el) {

                        var isItem = el === item;
                        var state = isItem && !hasClass(el, this$1.clsOpen);

                        if (!state && isItem && !this$1.collapsible && active.length < 2) {
                            return;
                        }

                        toggleClass(el, this$1.clsOpen, state);

                        var content = el._wrapper ? el._wrapper.firstElementChild : $(this$1.content, el);

                        if (!el._wrapper) {
                            el._wrapper = wrapAll(content, '<div>');
                            attr(el._wrapper, 'hidden', state ? '' : null);
                        }

                        this$1._toggleImmediate(content, true);
                        this$1.toggleElement(el._wrapper, state, animate).then(function () {
                            if (hasClass(el, this$1.clsOpen) === state) {

                                if (!state) {
                                    this$1._toggleImmediate(content, false);
                                }

                                el._wrapper = null;
                                unwrap(content);
                            }
                        });

                    });
            }

        }

    });

}

function Alert (UIkit) {

    UIkit.component('alert', {

        attrs: true,

        mixins: [Class, Togglable],

        args: 'animation',

        props: {
            close: String
        },

        defaults: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: assign({opacity: 0}, Togglable.defaults.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return this.selClose;
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function close() {
                var this$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
            }

        }

    });

}

function Core (UIkit) {

    ready(function () {

        var scroll = 0;
        var started = 0;

        on(win, 'load resize', UIkit.update);
        on(win, 'scroll', function (e) {
            e.dir = scroll <= win.pageYOffset ? 'down' : 'up';
            e.scrollY = scroll = win.pageYOffset;
            UIkit.update(e);
        });

        on(doc, 'animationstart', function (ref) {
            var target = ref.target;

            if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
                started++;
                doc.body.style.overflowX = 'hidden';
                setTimeout(function () {
                    if (!--started) {
                        doc.body.style.overflowX = '';
                    }
                }, toMs(css(target, 'animationDuration')) + 100);
            }
        }, true);

        if (!hasTouch) {
            return;
        }

        var cls = 'uk-hover';

        on(doc, 'tap', function (ref) {
                var target = ref.target;

                return $$(("." + cls)).forEach(function (el) { return !within(target, el) && removeClass(el, cls); }
            );
        }
        );

        Object.defineProperty(UIkit, 'hoverSelector', {

            set: function set(selector) {
                on(doc, 'tap', selector, function (ref) {
                    var current = ref.current;

                    return addClass(current, cls);
                });
            }

        });

        UIkit.hoverSelector = '.uk-animation-toggle, .uk-transition-toggle, [uk-hover]';

    });

}

function Cover (UIkit) {

    UIkit.component('cover', {

        mixins: [Class, UIkit.components.video.options],

        props: {
            width: Number,
            height: Number
        },

        defaults: {
            automute: true
        },

        update: {

            write: function write() {

                var el = this.$el;

                if (!isVisible(el)) {
                    return;
                }

                var ref = el.parentNode;
                var height = ref.offsetHeight;
                var width = ref.offsetWidth;

                css(
                    css(el, {width: '', height: ''}),
                    Dimensions.cover(
                        {
                            width: this.width || el.clientWidth,
                            height: this.height || el.clientHeight
                        },
                        {
                            width: width + (width % 2 ? 1 : 0),
                            height: height + (height % 2 ? 1 : 0)
                        }
                    )
                );

            },

            events: ['load', 'resize']

        },

        events: {

            loadedmetadata: function loadedmetadata() {
                this.$emit();
            }

        }

    });

}

function Drop (UIkit) {

    var active;

    UIkit.component('drop', {

        mixins: [Position, Togglable],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: 'query',
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        defaults: {
            mode: ['click', 'hover'],
            toggle: true,
            boundary: win,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            hoverIdle: 200,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        computed: {

            clsDrop: function clsDrop(ref) {
                var clsDrop = ref.clsDrop;

                return clsDrop || ("uk-" + (this.$options.name));
            },

            clsPos: function clsPos() {
                return this.clsDrop;
            }

        },

        init: function init() {
            this.tracker = new MouseTracker();
            addClass(this.$el, this.clsDrop);
        },

        connected: function connected() {

            var ref = this.$props;
            var toggle = ref.toggle;
            this.toggle = toggle && UIkit.toggle(isString(toggle) ? query(toggle, this.$el) : this.$el.previousElementSibling, {
                target: this.$el,
                mode: this.mode
            });

            this.updateAria(this.$el);

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function delegate() {
                    return 'a[href^="#"]';
                },

                handler: function handler(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    var id = e.target.hash;

                    if (!id) {
                        e.preventDefault();
                    }

                    if (!id || !within(id, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'beforescroll',

                handler: function handler() {
                    this.hide(false);
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function handler(e, toggle) {

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle, false);
                    }
                }

            },

            {

                name: pointerEnter,

                filter: function filter() {
                    return includes(this.mode, 'hover');
                },

                handler: function handler(e) {

                    if (isTouch(e)) {
                        return;
                    }

                    if (active
                        && active !== this
                        && active.toggle
                        && includes(active.toggle.mode, 'hover')
                        && !within(e.target, active.toggle.$el)
                        && !pointInRect({x: e.pageX, y: e.pageY}, offset(active.$el))
                    ) {
                        active.hide(false);
                    }

                    e.preventDefault();
                    this.show(this.toggle);
                }

            },

            {

                name: 'toggleshow',

                handler: function handler(e, toggle) {

                    if (toggle && !includes(toggle.target, this.$el)) {
                        return;
                    }

                    e.preventDefault();
                    this.show(toggle || this.toggle);
                }

            },

            {

                name: ("togglehide " + pointerLeave),

                handler: function handler(e, toggle) {

                    if (isTouch(e) || toggle && !includes(toggle.target, this.$el)) {
                        return;
                    }

                    e.preventDefault();

                    if (this.toggle && includes(this.toggle.mode, 'hover')) {
                        this.hide();
                    }
                }

            },

            {

                name: 'beforeshow',

                self: true,

                handler: function handler() {
                    this.clearTimers();
                    this.position();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function handler() {
                    this.tracker.init();
                    addClass(this.toggle.$el, this.cls);
                    attr(this.toggle.$el, 'aria-expanded', 'true');
                    registerEvent();
                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function handler() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function handler(ref) {
                    var target = ref.target;


                    if (this.$el !== target) {
                        active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                        return;
                    }

                    active = this.isActive() ? null : active;
                    removeClass(this.toggle.$el, this.cls);
                    attr(this.toggle.$el, 'aria-expanded', 'false');
                    this.toggle.$el.blur();
                    $$('a, button', this.toggle.$el).forEach(function (el) { return el.blur(); });
                    this.tracker.cancel();
                }

            }

        ],

        update: {

            write: function write() {

                if (this.isToggled() && !Animation.inProgress(this.$el)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function show(toggle, delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var show = function () { return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true); };
                var tryShow = function () {

                    this$1.toggle = toggle || this$1.toggle;

                    this$1.clearTimers();

                    if (this$1.isActive()) {
                        return;
                    } else if (delay && active && active !== this$1 && active.isDelaying) {
                        this$1.showTimer = setTimeout(this$1.show, 10);
                        return;
                    } else if (this$1.isParentOf(active)) {

                        if (active.hideTimer) {
                            active.hide(false);
                        } else {
                            return;
                        }

                    } else if (active && !this$1.isChildOf(active) && !this$1.isParentOf(active)) {

                        var prev;
                        while (active && active !== prev && !this$1.isChildOf(active)) {
                            prev = active;
                            active.hide(false);
                        }

                    }

                    if (delay && this$1.delayShow) {
                        this$1.showTimer = setTimeout(show, this$1.delayShow);
                    } else {
                        show();
                    }

                    active = this$1;
                };

                if (toggle && this.toggle && toggle.$el !== this.toggle.$el) {

                    once(this.$el, 'hide', tryShow);
                    this.hide(false);

                } else {
                    tryShow();
                }
            },

            hide: function hide(delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1.toggleNow(this$1.$el, false); };

                this.clearTimers();

                this.isDelaying = this.tracker.movesTo(this.$el);

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, this.hoverIdle);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function clearTimers() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function isActive() {
                return active === this;
            },

            isChildOf: function isChildOf(drop) {
                return drop && drop !== this && within(this.$el, drop.$el);
            },

            isParentOf: function isParentOf(drop) {
                return drop && drop !== this && within(drop.$el, this.$el);
            },

            position: function position() {

                removeClasses(this.$el, ((this.clsDrop) + "-(stack|boundary)"));
                css(this.$el, {top: '', left: '', display: 'block'});
                toggleClass(this.$el, ((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = offset(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    css(this.$el, prop, alignTo[prop]);
                } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    addClass(this.$el, ((this.clsDrop) + "-stack"));
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

                css(this.$el, 'display', '');

            }

        }

    });

    UIkit.drop.getActive = function () { return active; };

    var registered;

    function registerEvent() {

        if (registered) {
            return;
        }

        registered = true;
        on(docEl, 'click', function (ref) {
            var target = ref.target;
            var defaultPrevented = ref.defaultPrevented;

            var prev;

            if (defaultPrevented) {
                return;
            }

            while (active && active !== prev && !within(target, active.$el) && !(active.toggle && within(target, active.toggle.$el))) {
                prev = active;
                active.hide(false);
            }
        });
    }

}

function Dropdown (UIkit) {

    UIkit.component('dropdown', UIkit.components.drop.extend({name: 'dropdown'}));

}

function FormCustom (UIkit) {

    UIkit.component('form-custom', {

        mixins: [Class],

        args: 'target',

        props: {
            target: Boolean
        },

        defaults: {
            target: false
        },

        computed: {

            input: function input(_, $el) {
                return $(selInput, $el);
            },

            state: function state() {
                return this.input.nextElementSibling;
            },

            target: function target(ref, $el) {
                var target = ref.target;

                return target && (target === true
                    && this.input.parentNode === $el
                    && this.input.nextElementSibling
                    || query(target, $el));
            }

        },

        update: function update() {

            var ref = this;
            var target = ref.target;
            var input = ref.input;

            if (!target) {
                return;
            }

            var option;

            target[isInput(target) ? 'value' : 'textContent'] = input.files && input.files[0]
                ? input.files[0].name
                : matches(input, 'select') && (option = $$('option', input).filter(function (el) { return el.selected; })[0])
                    ? option.textContent
                    : input.value;

        },

        events: [

            {

                name: 'focusin focusout mouseenter mouseleave',

                delegate: selInput,

                handler: function handler(ref) {
                    var type = ref.type;
                    var current = ref.current;

                    if (current === this.input) {
                        toggleClass(
                            this.state,
                            ("uk-" + (includes(type, 'focus') ? 'focus' : 'hover')),
                            includes(['focusin', 'mouseenter'], type)
                        );
                    }
                }

            },

            {

                name: 'change',

                handler: function handler() {
                    this.$emit();
                }

            }

        ]

    });

}

function Gif (UIkit) {

    // Deprecated
    UIkit.component('gif', {

        update: {

            read: function read(data) {

                var inview = isInView(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write: function write() {
                this.$el.src = this.$el.src;
            },

            events: ['scroll', 'load', 'resize']
        }

    });

}

function Grid (UIkit) {

    UIkit.component('grid', UIkit.components.margin.extend({

        mixins: [Class],

        name: 'grid',

        defaults: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack'
        },

        update: {

            write: function write(ref) {
                var stacks = ref.stacks;


                toggleClass(this.$el, this.clsStack, stacks);

            },

            events: ['load', 'resize']

        }

    }));

}

function HeightMatch (UIkit) {

    UIkit.component('height-match', {

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        defaults: {
            target: '> *',
            row: true
        },

        computed: {

            elements: function elements(ref, $el) {
                var target = ref.target;

                return $$(target, $el);
            }

        },

        update: {

            read: function read() {
                var this$1 = this;


                var lastOffset = false;

                css(this.elements, 'minHeight', '');

                return {
                    rows: !this.row
                        ? [this.match(this.elements)]
                        : this.elements.reduce(function (rows, el) {

                            if (lastOffset !== el.offsetTop) {
                                rows.push([el]);
                            } else {
                                rows[rows.length - 1].push(el);
                            }

                            lastOffset = el.offsetTop;

                            return rows;

                        }, []).map(function (elements) { return this$1.match(elements); })
                };
            },

            write: function write(ref) {
                var rows = ref.rows;


                rows.forEach(function (ref) {
                    var height = ref.height;
                    var elements = ref.elements;

                    return css(elements, 'minHeight', height);
                });

            },

            events: ['load', 'resize']

        },

        methods: {

            match: function match(elements) {

                if (elements.length < 2) {
                    return {};
                }

                var heights = [];
                var max = 0;

                elements
                    .forEach(function (el) {

                        var style, hidden;

                        if (!isVisible(el)) {
                            style = attr(el, 'style');
                            hidden = attr(el, 'hidden');

                            attr(el, {
                                style: ((style || '') + ";display:block !important;"),
                                hidden: null
                            });
                        }

                        max = Math.max(max, el.offsetHeight);
                        heights.push(el.offsetHeight);

                        if (!isUndefined(style)) {
                            attr(el, {style: style, hidden: hidden});
                        }

                    });

                elements = elements.filter(function (el, i) { return heights[i] < max; });

                return {height: max, elements: elements};
            }
        }

    });

}

function HeightViewport (UIkit) {

    UIkit.component('height-viewport', {

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        defaults: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            write: function write() {

                css(this.$el, 'boxSizing', 'border-box');

                var viewport = height(win);
                var minHeight, offsetTop = 0;

                if (this.expand) {

                    css(this.$el, {height: '', minHeight: ''});

                    var diff = viewport - offsetHeight(docEl);

                    if (diff > 0) {
                        minHeight = offsetHeight(this.$el) + diff;
                    }

                } else {

                    var ref = offset(this.$el);
                    var top = ref.top;

                    if (top < viewport / 2 && this.offsetTop) {
                        offsetTop += top;
                    }

                    if (this.offsetBottom === true) {

                        offsetTop += offsetHeight(this.$el.nextElementSibling);

                    } else if (isNumeric(this.offsetBottom)) {

                        offsetTop += (viewport / 100) * this.offsetBottom;

                    } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {

                        offsetTop += toFloat(this.offsetBottom);

                    } else if (isString(this.offsetBottom)) {

                        offsetTop += offsetHeight(query(this.offsetBottom, this.$el));

                    }

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = offsetTop ? ("calc(100vh - " + offsetTop + "px)") : '100vh';

                }

                if (!minHeight) {
                    return;
                }

                css(this.$el, {height: '', minHeight: minHeight});

                var elHeight = this.$el.offsetHeight;
                if (this.minHeight && this.minHeight > elHeight) {
                    css(this.$el, 'minHeight', this.minHeight);
                }

                // IE 11 fix (min-height on a flex container won't apply to its flex items)
                if (viewport - offsetTop >= elHeight) {
                    css(this.$el, 'height', minHeight);
                }

            },

            events: ['load', 'resize']

        }

    });

    function offsetHeight(el) {
        return el && el.offsetHeight || 0;
    }

}

var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

var slidenavNext = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

var slidenavNextLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

var slidenavPrevious = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

var slidenavPreviousLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

function Icon (UIkit) {

    var parsed = {};
    var icons = {
        spinner: spinner,
        totop: totop,
        marker: marker,
        'close-icon': closeIcon,
        'close-large': closeLarge,
        'navbar-toggle-icon': navbarToggleIcon,
        'overlay-icon': overlayIcon,
        'pagination-next': paginationNext,
        'pagination-previous': paginationPrevious,
        'search-icon': searchIcon,
        'search-large': searchLarge,
        'search-navbar': searchNavbar,
        'slidenav-next': slidenavNext,
        'slidenav-next-large': slidenavNextLarge,
        'slidenav-previous': slidenavPrevious,
        'slidenav-previous-large': slidenavPreviousLarge
    };

    UIkit.component('icon', UIkit.components.svg.extend({

        attrs: ['icon', 'ratio'],

        mixins: [Class],

        name: 'icon',

        args: 'icon',

        props: ['icon'],

        defaults: {exclude: ['id', 'style', 'class', 'src', 'icon']},

        init: function init() {
            addClass(this.$el, 'uk-icon');

            if (isRtl) {
                this.icon = swap(swap(this.icon, 'left', 'right'), 'previous', 'next');
            }
        },

        methods: {

            getSvg: function getSvg() {

                var icon = getIcon(this.icon);

                if (!icon) {
                    return Promise.reject('Icon not found.');
                }

                return Promise.resolve(icon);
            }

        }

    }));

    [
        'marker',
        'navbar-toggle-icon',
        'overlay-icon',
        'pagination-previous',
        'pagination-next',
        'totop'
    ].forEach(function (name) { return registerComponent(name); });

    [
        'slidenav-previous',
        'slidenav-next'
    ].forEach(function (name) { return registerComponent(name, {

        init: function init() {
            addClass(this.$el, 'uk-slidenav');

            if (hasClass(this.$el, 'uk-slidenav-large')) {
                this.icon += '-large';
            }
        }

    }); });

    registerComponent('search-icon', {

        init: function init() {
            if (hasClass(this.$el, 'uk-search-icon') && parents(this.$el, '.uk-search-large').length) {
                this.icon = 'search-large';
            } else if (parents(this.$el, '.uk-search-navbar').length) {
                this.icon = 'search-navbar';
            }
        }

    });

    registerComponent('close', {

        init: function init() {
            this.icon = "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
        }

    });

    registerComponent('spinner', {

        connected: function connected() {
            var this$1 = this;

            this.svg.then(function (svg) { return this$1.ratio !== 1 && css($('circle', svg), 'stroke-width', 1 / this$1.ratio); }, noop);
        }

    });

    UIkit.icon.add = function (added) {
        Object.keys(added).forEach(function (name) {
            icons[name] = added[name];
            delete parsed[name];
        });

        if (UIkit._initialized) {
            each(UIkit.instances, function (component) {
                if (component.$options.name === 'icon') {
                    component.$reset();
                }
            });
        }
    };

    function registerComponent(name, mixin$$1) {

        UIkit.component(name, UIkit.components.icon.extend({

            name: name,

            mixins: mixin$$1 ? [mixin$$1] : [],

            defaults: {
                icon: name
            }

        }));
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = $(icons[icon].trim());
        }

        return parsed[icon];
    }

}

function Leader (UIkit) {

    UIkit.component('leader', {

        mixins: [Class],

        props: {
            fill: String,
            media: 'media'
        },

        defaults: {
            fill: '',
            media: false,
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function fill(ref) {
                var fill = ref.fill;

                return fill || getCssVar('leader-fill');
            }

        },

        connected: function connected() {
            var assign;
            (assign = wrapInner(this.$el, ("<span class=\"" + (this.clsWrapper) + "\">")), this.wrapper = assign[0]);
        },

        disconnected: function disconnected() {
            unwrap(this.wrapper.childNodes);
        },

        update: [

            {

                read: function read(ref) {
                    var changed = ref.changed;
                    var width = ref.width;


                    var prev = width;

                    width = Math.floor(this.$el.offsetWidth / 2);

                    return {
                        width: width,
                        changed: changed || prev !== width,
                        hide: this.media && !win.matchMedia(this.media).matches
                    };
                },

                write: function write(data) {

                    toggleClass(this.wrapper, this.clsHide, data.hide);

                    if (data.changed) {
                        data.changed = false;
                        attr(this.wrapper, this.attrFill, new Array(data.width).join(this.fill));
                    }

                },

                events: ['load', 'resize']

            }
        ]
    });

}

function Margin (UIkit) {

    UIkit.component('margin', {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        defaults: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read: function read(data) {

                var items = this.$el.children;

                if (!items.length || !isVisible(this.$el)) {
                    return data.rows = false;
                }

                data.stacks = true;

                var rows = [[]];

                for (var i = 0; i < items.length; i++) {

                    var el = items[i];
                    var dim = el.getBoundingClientRect();

                    if (!dim.height) {
                        continue;
                    }

                    for (var j = rows.length - 1; j >= 0; j--) {

                        var row = rows[j];

                        if (!row[0]) {
                            row.push(el);
                            break;
                        }

                        var leftDim = row[0].getBoundingClientRect();

                        if (dim.top >= Math.floor(leftDim.bottom)) {
                            rows.push([el]);
                            break;
                        }

                        if (Math.floor(dim.bottom) > leftDim.top) {

                            data.stacks = false;

                            if (dim.left < leftDim.left && !isRtl) {
                                row.unshift(el);
                                break;
                            }

                            row.push(el);
                            break;
                        }

                        if (j === 0) {
                            rows.unshift([el]);
                            break;
                        }

                    }

                }

                data.rows = rows;

            },

            write: function write(ref) {
                var this$1 = this;
                var rows = ref.rows;


                rows.forEach(function (row, i) { return row.forEach(function (el, j) {
                        toggleClass(el, this$1.margin, i !== 0);
                        toggleClass(el, this$1.firstColumn, j === 0);
                    }); }
                );

            },

            events: ['load', 'resize']

        }

    });

}

function Modal$1 (UIkit) {

    UIkit.component('modal', {

        mixins: [Modal],

        defaults: {
            clsPage: 'uk-modal-page',
            clsPanel: 'uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler: function handler() {

                    if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                        addClass(this.$el, 'uk-flex');
                    } else {
                        css(this.$el, 'display', 'block');
                    }

                    height(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function handler() {

                    css(this.$el, 'display', '');
                    removeClass(this.$el, 'uk-flex');

                }
            }

        ]

    });

    UIkit.component('overflow-auto', {

        mixins: [Class],

        computed: {

            modal: function modal(_, $el) {
                return closest($el, '.uk-modal');
            },

            panel: function panel(_, $el) {
                return closest($el, '.uk-modal-dialog');
            }

        },

        connected: function connected() {
            css(this.$el, 'minHeight', 150);
        },

        update: {

            write: function write() {

                if (!this.panel || !this.modal) {
                    return;
                }

                var current = css(this.$el, 'maxHeight');

                css(css(this.$el, 'maxHeight', 150), 'maxHeight', Math.max(150, 150 + height(this.modal) - this.panel.offsetHeight));
                if (current !== css(this.$el, 'maxHeight')) {
                    trigger(this.$el, 'resize');
                }
            },

            events: ['load', 'resize']

        }

    });

    UIkit.modal.dialog = function (content, options) {

        var dialog = UIkit.modal((" <div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div> "), options);

        dialog.show();

        on(dialog.$el, 'hidden', function (ref) {
            var target = ref.target;
            var currentTarget = ref.currentTarget;

            if (target === currentTarget) {
                dialog.$destroy(true);
            }
        });

        return dialog;
    };

    UIkit.modal.alert = function (message, options) {

        options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return new Promise(
            function (resolve) { return on(UIkit.modal.dialog((" <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button> </div> "), options).$el, 'hide', resolve); }
        );
    };

    UIkit.modal.confirm = function (message, options) {

        options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

        return new Promise(function (resolve, reject) {

            var confirm = UIkit.modal.dialog((" <form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + (options.labels.ok) + "</button> </div> </form> "), options);

            var resolved = false;

            on(confirm.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                resolve();
                resolved = true;
                confirm.hide();
            });
            on(confirm.$el, 'hide', function () {
                if (!resolved) {
                    reject();
                }
            });

        });
    };

    UIkit.modal.prompt = function (message, value, options) {

        options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

        return new Promise(function (resolve) {

            var prompt = UIkit.modal.dialog((" <form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\">" + (options.labels.ok) + "</button> </div> </form> "), options),
                input = $('input', prompt.$el);

            input.value = value;

            var resolved = false;

            on(prompt.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                resolve(input.value);
                resolved = true;
                prompt.hide();
            });
            on(prompt.$el, 'hide', function () {
                if (!resolved) {
                    resolve(null);
                }
            });

        });
    };

    UIkit.modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel'
    };

}

function Nav (UIkit) {

    UIkit.component('nav', UIkit.components.accordion.extend({

        name: 'nav',

        defaults: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    }));

}

function Navbar (UIkit) {

    UIkit.component('navbar', {

        mixins: [Class],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: 'query',
            duration: Number
        },

        defaults: {
            dropdown: '.uk-navbar-nav > li',
            align: !isRtl ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200,
        },

        computed: {

            boundary: function boundary(ref, $el) {
                var boundary = ref.boundary;
                var boundaryAlign = ref.boundaryAlign;

                return (boundary === true || boundaryAlign) ? $el : boundary;
            },

            pos: function pos(ref) {
                var align = ref.align;

                return ("bottom-" + align);
            }

        },

        beforeConnect: function beforeConnect() {

            var ref = this.$props;
            var dropbar = ref.dropbar;

            this.dropbar = dropbar && (isString(dropbar) && query(dropbar, this.$el) || $('<div></div>'));

            if (this.dropbar) {

                addClass(this.dropbar, 'uk-navbar-dropbar');

                if (this.dropbarMode === 'slide') {
                    addClass(this.dropbar, 'uk-navbar-dropbar-slide');
                }
            }

        },

        disconnected: function disconnected() {
            this.dropbar && remove(this.dropbar);
        },

        update: function update() {

            UIkit.drop(
                $$(((this.dropdown) + " ." + (this.clsDrop)), this.$el).filter(function (el) { return !UIkit.getComponent(el, 'drop') && !UIkit.getComponent(el, 'dropdown'); }),
                assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
            );

        },

        events: [

            {
                name: 'mouseover',

                delegate: function delegate() {
                    return this.dropdown;
                },

                handler: function handler(ref) {
                    var current = ref.current;

                    var active = this.getActive();
                    if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            },

            {
                name: 'mouseleave',

                el: function el() {
                    return this.dropbar;
                },

                handler: function handler() {
                    var active = this.getActive();

                    if (active && !matches(this.dropbar, ':hover')) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                capture: true,

                filter: function filter() {
                    return this.dropbar;
                },

                handler: function handler() {

                    if (!this.dropbar.parentNode) {
                        after(this.dropbarAnchor || this.$el, this.dropbar);
                    }

                }
            },

            {
                name: 'show',

                capture: true,

                filter: function filter() {
                    return this.dropbar;
                },

                handler: function handler(_, drop) {

                    var $el = drop.$el;

                    this.clsDrop && addClass($el, ((this.clsDrop) + "-dropbar"));

                    this.transitionTo($el.offsetHeight + toFloat(css($el, 'margin-top')) + toFloat(css($el, 'margin-bottom')), $el);
                }
            },

            {
                name: 'beforehide',

                filter: function filter() {
                    return this.dropbar;
                },

                handler: function handler(e, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                        e.preventDefault();
                    }
                }
            },

            {
                name: 'hide',

                filter: function filter() {
                    return this.dropbar;
                },

                handler: function handler(_, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (!active || active && active.$el === $el) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            getActive: function getActive() {
                var active = UIkit.drop.getActive();
                return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
            },

            transitionTo: function transitionTo(newHeight, el) {

                var ref = this;
                var dropbar = ref.dropbar;
                var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

                el = oldHeight < newHeight && el;

                css(el, {height: oldHeight, overflow: 'hidden'});
                height(dropbar, oldHeight);

                Transition.cancel([el, dropbar]);
                return Transition
                    .start([el, dropbar], {height: newHeight}, this.duration)
                    .catch(noop)
                    .finally(function () { return css(el, {height: '', overflow: ''}); });
            }

        }

    });

}

var scroll;

function Offcanvas (UIkit) {

    UIkit.component('offcanvas', {

        mixins: [Modal],

        args: 'mode',

        props: {
            content: String,
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        defaults: {
            content: '.uk-offcanvas-content',
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            clsPanel: 'uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContent: 'uk-offcanvas-content',
            clsContentAnimation: 'uk-offcanvas-content-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close'
        },

        computed: {

            content: function content(ref) {
                var content = ref.content;

                return $(content) || doc.body;
            },

            clsFlip: function clsFlip(ref) {
                var flip = ref.flip;
                var clsFlip = ref.clsFlip;

                return flip ? clsFlip : '';
            },

            clsOverlay: function clsOverlay(ref) {
                var overlay = ref.overlay;
                var clsOverlay = ref.clsOverlay;

                return overlay ? clsOverlay : '';
            },

            clsMode: function clsMode(ref) {
                var mode = ref.mode;
                var clsMode = ref.clsMode;

                return (clsMode + "-" + mode);
            },

            clsSidebarAnimation: function clsSidebarAnimation(ref) {
                var mode = ref.mode;
                var clsSidebarAnimation = ref.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },

            clsContentAnimation: function clsContentAnimation(ref) {
                var mode = ref.mode;
                var clsContentAnimation = ref.clsContentAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContentAnimation;
            },

            transitionElement: function transitionElement(ref) {
                var mode = ref.mode;

                return mode === 'reveal' ? this.panel.parentNode : this.panel;
            }

        },

        update: {

            write: function write() {

                if (this.getActive() === this) {

                    if (this.overlay || this.clsContentAnimation) {
                        width(this.content, width(win) - this.scrollbarWidth);
                    }

                    if (this.overlay) {
                        height(this.content, height(win));
                        if (scroll) {
                            this.content.scrollTop = scroll.y;
                        }
                    }

                }

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return 'a[href^="#"]';
                },

                handler: function handler(ref) {
                    var current = ref.current;

                    if (current.hash && $(current.hash, this.content)) {
                        scroll = null;
                        this.hide();
                    }
                }

            },

            {

                name: 'beforescroll',

                filter: function filter() {
                    return this.overlay;
                },

                handler: function handler(e, scroll, target) {
                    if (scroll && target && this.isToggled() && $(target, this.content)) {
                        once(this.$el, 'hidden', function () { return scroll.scrollTo(target); });
                        e.preventDefault();
                    }
                }

            },

            {
                name: 'show',

                self: true,

                handler: function handler() {

                    scroll = scroll || {x: win.pageXOffset, y: win.pageYOffset};

                    if (this.mode === 'reveal' && !hasClass(this.panel, this.clsMode)) {
                        wrapAll(this.panel, '<div>');
                        addClass(this.panel.parentNode, this.clsMode);
                    }

                    css(docEl, 'overflowY', (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? 'scroll' : '');
                    addClass(doc.body, this.clsContainer, this.clsFlip, this.clsOverlay);
                    height(doc.body); // force reflow
                    addClass(this.content, this.clsContentAnimation);
                    addClass(this.panel, ((this.clsSidebarAnimation) + " " + (this.mode !== 'reveal' ? this.clsMode : '')));
                    addClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', 'block');
                    height(this.$el); // force reflow

                }
            },

            {
                name: 'hide',

                self: true,

                handler: function handler() {
                    removeClass(this.content, this.clsContentAnimation);

                    var active = this.getActive();
                    if (this.mode === 'none' || active && active !== this && active !== this.prev) {
                        trigger(this.panel, 'transitionend');
                    }
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function handler() {

                    if (this.mode === 'reveal') {
                        unwrap(this.panel);
                    }

                    if (!this.overlay) {
                        scroll = {x: win.pageXOffset, y: win.pageYOffset};
                    } else if (!scroll) {
                        var ref = this.content;
                        var x = ref.scrollLeft;
                        var y = ref.scrollTop;
                        scroll = {x: x, y: y};
                    }

                    removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                    removeClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', '');
                    removeClass(doc.body, this.clsContainer, this.clsFlip, this.clsOverlay);
                    doc.body.scrollTop = scroll.y;

                    css(docEl, 'overflow-y', '');

                    width(this.content, '');
                    height(this.content, '');

                    win.scrollTo(scroll.x, scroll.y);

                    scroll = null;

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function handler(e) {

                    if (this.isToggled() && isTouch(e) && (e.type === 'swipeLeft' && !this.flip || e.type === 'swipeRight' && this.flip)) {
                        this.hide();
                    }

                }
            }

        ]

    });

}

function Responsive (UIkit) {

    UIkit.component('responsive', {

        props: ['width', 'height'],

        init: function init() {
            addClass(this.$el, 'uk-responsive-width');
        },

        update: {

            read: function read() {
                return isVisible(this.$el) && this.width && this.height
                    ? {width: width(this.$el.parentNode), height: this.height}
                    : false;
            },

            write: function write(dim) {
                height(this.$el, Dimensions.contain({height: this.height, width: this.width}, dim).height);
            },

            events: ['load', 'resize']

        }

    });

}

function Scroll (UIkit) {

    UIkit.component('scroll', {

        props: {
            duration: Number,
            offset: Number
        },

        defaults: {
            duration: 1000,
            offset: 0
        },

        methods: {

            scrollTo: function scrollTo(el) {
                var this$1 = this;


                el = el && $(el) || doc.body;

                var docHeight = height(doc);
                var winHeight = height(win);

                var target = offset(el).top - this.offset;
                if (target + winHeight > docHeight) {
                    target = docHeight - winHeight;
                }

                if (!trigger(this.$el, 'beforescroll', [this, el])) {
                    return;
                }

                var start = Date.now();
                var startY = win.pageYOffset;
                var step = function () {

                    var currentY = startY + (target - startY) * ease(clamp((Date.now() - start) / this$1.duration));

                    win.scrollTo(win.pageXOffset, currentY);

                    // scroll more if we have not reached our destination
                    if (currentY !== target) {
                        requestAnimationFrame(step);
                    } else {
                        trigger(this$1.$el, 'scrolled', [this$1, el]);
                    }

                };

                step();

            }

        },

        events: {

            click: function click(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(escape(this.$el.hash).substr(1));
            }

        }

    });

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

}

function Scrollspy (UIkit) {

    UIkit.component('scrollspy', {

        args: 'cls',

        props: {
            cls: 'list',
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        defaults: {
            cls: [],
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        },

        computed: {

            elements: function elements(ref, $el) {
                var target = ref.target;

                return target ? $$(target, $el) : [$el];
            }

        },

        update: [

            {

                write: function write() {
                    if (this.hidden) {
                        css(filter(this.elements, (":not(." + (this.inViewClass) + ")")), 'visibility', 'hidden');
                    }
                }

            },

            {

                read: function read(els) {
                    var this$1 = this;


                    // Let child components be applied at least once first
                    if (!UIkit._initialized) {

                        if (doc.readyState === 'complete') {
                            requestAnimationFrame(function () { return this$1.$emit(); });
                        }

                        return false;
                    }

                    this.elements.forEach(function (el, i) {

                        var elData = els[i];

                        if (!elData || elData.el !== el) {
                            var cls = data(el, 'uk-scrollspy-class');
                            elData = {el: el, toggles: cls && cls.split(',') || this$1.cls};
                        }

                        elData.show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
                        els[i] = elData;

                    });
                },

                write: function write(els) {
                    var this$1 = this;


                    var index = this.elements.length === 1 ? 1 : 0;

                    this.elements.forEach(function (el, i) {

                        var elData = els[i];
                        var cls = elData.toggles[i] || elData.toggles[0];

                        if (elData.show && !elData.inview && !elData.timer) {

                            var show = function () {
                                css(el, 'visibility', '');
                                addClass(el, this$1.inViewClass);
                                toggleClass(el, cls);

                                trigger(el, 'inview');

                                UIkit.update(null, el);

                                elData.inview = true;
                                delete elData.timer;
                            };

                            if (this$1.delay && index) {
                                elData.timer = setTimeout(show, this$1.delay * index);
                            } else {
                                show();
                            }

                            index++;

                        } else if (!elData.show && elData.inview && this$1.repeat) {

                            if (elData.timer) {
                                clearTimeout(elData.timer);
                                delete elData.timer;
                            }

                            css(el, 'visibility', this$1.hidden ? 'hidden' : '');
                            removeClass(el, this$1.inViewClass);
                            toggleClass(el, cls);

                            trigger(el, 'outview');

                            UIkit.update(null, el);

                            elData.inview = false;

                        }


                    });

                },

                events: ['scroll', 'load', 'resize']

            }

        ]

    });

}

function ScrollspyNav (UIkit) {

    UIkit.component('scrollspy-nav', {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        defaults: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: function links(_, $el) {
                return $$('a[href^="#"]', $el).filter(function (el) { return el.hash; });
            },

            elements: function elements() {
                return this.closest ? closest(this.links, this.closest) : this.links;
            },

            targets: function targets() {
                return $$(this.links.map(function (el) { return el.hash; }).join(','));
            }

        },

        update: [

            {

                read: function read() {
                    if (this.scroll) {
                        UIkit.scroll(this.links, {offset: this.offset || 0});
                    }
                }

            },

            {

                read: function read(data) {
                    var this$1 = this;


                    var scroll = win.pageYOffset + this.offset + 1;
                    var max = height(doc) - height(win) + this.offset;

                    data.active = false;

                    this.targets.every(function (el, i) {

                        var ref = offset(el);
                        var top = ref.top;
                        var last = i + 1 === this$1.targets.length;

                        if (!this$1.overflow && (i === 0 && top > scroll || last && top + el.offsetTop < scroll)) {
                            return false;
                        }

                        if (!last && offset(this$1.targets[i + 1]).top <= scroll) {
                            return true;
                        }

                        if (scroll >= max) {
                            for (var j = this$1.targets.length - 1; j > i; j--) {
                                if (isInView(this$1.targets[j])) {
                                    el = this$1.targets[j];
                                    break;
                                }
                            }
                        }

                        return !(data.active = $(filter(this$1.links, ("[href=\"#" + (el.id) + "\"]"))));

                    });

                },

                write: function write(ref) {
                    var active = ref.active;


                    this.links.forEach(function (el) { return el.blur(); });
                    removeClass(this.elements, this.cls);

                    if (active) {
                        trigger(this.$el, 'active', [active, addClass(this.closest ? closest(active, this.closest) : active, this.cls)]);
                    }

                },

                events: ['scroll', 'load', 'resize']

            }

        ]

    });

}

function Sticky (UIkit) {

    UIkit.component('sticky', {

        mixins: [Class],

        attrs: true,

        props: {
            top: null,
            bottom: Boolean,
            offset: Number,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: 'query',
            showOnUp: Boolean,
            media: 'media',
            target: Number
        },

        defaults: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            media: false,
            target: false
        },

        computed: {

            selTarget: function selTarget(ref, $el) {
                var selTarget = ref.selTarget;

                return selTarget && $(selTarget, $el) || $el;
            }

        },

        connected: function connected() {

            this.placeholder = $('<div class="uk-sticky-placeholder"></div>');
            this.widthElement = this.$props.widthElement || this.placeholder;

            if (!this.isActive) {
                this.hide();
            }
        },

        disconnected: function disconnected() {

            if (this.isActive) {
                this.isActive = false;
                this.hide();
                removeClass(this.selTarget, this.clsInactive);
            }

            remove(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        ready: function ready() {
            var this$1 = this;


            if (!(this.target && location.hash && win.pageYOffset > 0)) {
                return;
            }

            var target = $(location.hash);

            if (target) {
                fastdom.read(function () {

                    var ref = offset(target);
                    var top = ref.top;
                    var elTop = offset(this$1.$el).top;
                    var elHeight = this$1.$el.offsetHeight;

                    if (elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                        win.scrollTo(0, top - elHeight - this$1.target - this$1.offset);
                    }

                });
            }

        },

        events: [

            {
                name: 'active',

                self: true,

                handler: function handler() {
                    replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                }

            },

            {
                name: 'inactive',

                self: true,

                handler: function handler() {
                    replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                }

            }

        ],

        update: [

            {

                write: function write() {

                    var ref = this;
                    var placeholder = ref.placeholder;
                    var outerHeight = (this.isActive ? placeholder : this.$el).offsetHeight;

                    css(placeholder, assign(
                        {height: css(this.$el, 'position') !== 'absolute' ? outerHeight : ''},
                        css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    ));

                    if (!within(placeholder, docEl)) {
                        after(this.$el, placeholder);
                        attr(placeholder, 'hidden', '');
                    }

                    attr(this.widthElement, 'hidden', null);
                    this.width = this.widthElement.offsetWidth;
                    attr(this.widthElement, 'hidden', this.isActive ? null : '');

                    this.topOffset = offset(this.isActive ? placeholder : this.$el).top;
                    this.bottomOffset = this.topOffset + outerHeight;

                    var bottom = parseProp('bottom', this);

                    this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                    this.bottom = bottom && bottom - outerHeight;
                    this.inactive = this.media && !win.matchMedia(this.media).matches;

                    if (this.isActive) {
                        this.update();
                    }
                },

                events: ['load', 'resize']

            },

            {

                read: function read(_, ref) {
                    var scrollY = ref.scrollY; if ( scrollY === void 0 ) scrollY = win.pageYOffset;

                    return {
                        scroll: this.scroll = scrollY,
                        visible: isVisible(this.$el)
                    };
                },

                write: function write(ref, ref$1) {
                    var this$1 = this;
                    var visible = ref.visible;
                    var scroll = ref.scroll;
                    if ( ref$1 === void 0 ) ref$1 = {};
                    var dir = ref$1.dir;


                    if (scroll < 0 || !visible || this.disabled || this.showOnUp && !dir) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isActive) {
                            return;
                        }

                        this.isActive = false;

                        if (this.animation && scroll > this.topOffset) {
                            Animation.cancel(this.$el);
                            Animation.out(this.$el, this.animation).then(function () { return this$1.hide(); }, noop);
                        } else {
                            this.hide();
                        }

                    } else if (this.isActive) {

                        this.update();

                    } else if (this.animation) {

                        Animation.cancel(this.$el);
                        this.show();
                        Animation.in(this.$el, this.animation).catch(noop);

                    } else {
                        this.show();
                    }

                },

                events: ['scroll']

            } ],

        methods: {

            show: function show() {

                this.isActive = true;
                this.update();
                attr(this.placeholder, 'hidden', null);

            },

            hide: function hide() {

                if (!this.isActive || hasClass(this.selTarget, this.clsActive)) {
                    trigger(this.$el, 'inactive');
                }

                removeClass(this.$el, this.clsFixed, this.clsBelow);
                css(this.$el, {position: '', top: '', width: ''});
                attr(this.placeholder, 'hidden', '');

            },

            update: function update() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);

                if (this.bottom && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                css(this.$el, {
                    position: 'fixed',
                    top: (top + "px"),
                    width: this.width
                });

                if (hasClass(this.selTarget, this.clsActive)) {

                    if (!active) {
                        trigger(this.$el, 'inactive');
                    }

                } else if (active) {
                    trigger(this.$el, 'active');
                }

                toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                addClass(this.$el, this.clsFixed);

            }

        }

    });

    function parseProp(prop, ref) {
        var $props = ref.$props;
        var $el = ref.$el;
        var propOffset = ref[(prop + "Offset")];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (isNumeric(value)) {

            return propOffset + toFloat(value);

        } else if (isString(value) && value.match(/^-?\d+vh$/)) {

            return height(win) * toFloat(value) / 100;

        } else {

            var el = value === true ? $el.parentNode : query(value, $el);

            if (el) {
                return offset(el).top + el.offsetHeight;
            }

        }
    }

}

var svgs = {};

function Svg (UIkit) {

    UIkit.component('svg', {

        attrs: true,

        props: {
            id: String,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            'class': String
        },

        defaults: {
            ratio: 1,
            id: false,
            exclude: ['src'],
            'class': ''
        },

        init: function init() {
            this.class += ' uk-svg';
        },

        connected: function connected() {
            var this$1 = this;


            if (!this.icon && includes(this.src, '#')) {

                var parts = this.src.split('#');

                if (parts.length > 1) {
                    var assign;
                    (assign = parts, this.src = assign[0], this.icon = assign[1]);
                }
            }

            this.svg = this.getSvg().then(function (svg) {

                var el;

                if (isString(svg)) {

                    if (this$1.icon && includes(svg, '<symbol')) {
                        svg = parseSymbols(svg, this$1.icon) || svg;
                    }

                    el = $(svg.substr(svg.indexOf('<svg')));

                } else {
                    el = svg.cloneNode(true);
                }

                if (!el) {
                    return Promise.reject('SVG not found.');
                }

                var dimensions = attr(el, 'viewBox');

                if (dimensions) {
                    dimensions = dimensions.split(' ');
                    this$1.width = this$1.$props.width || dimensions[2];
                    this$1.height = this$1.$props.height || dimensions[3];
                }

                this$1.width *= this$1.ratio;
                this$1.height *= this$1.ratio;

                for (var prop in this$1.$options.props) {
                    if (this$1[prop] && !includes(this$1.exclude, prop)) {
                        attr(el, prop, this$1[prop]);
                    }
                }

                if (!this$1.id) {
                    removeAttr(el, 'id');
                }

                if (this$1.width && !this$1.height) {
                    removeAttr(el, 'height');
                }

                if (this$1.height && !this$1.width) {
                    removeAttr(el, 'width');
                }

                var root = this$1.$el;
                if (isVoidElement(root) || root.tagName === 'CANVAS') {

                    attr(root, {hidden: true, id: null});

                    var next = root.nextElementSibling;
                    if (next && el.isEqualNode(next)) {
                        el = next;
                    } else {
                        after(root, el);
                    }

                } else {

                    var last = root.lastElementChild;
                    if (last && el.isEqualNode(last)) {
                        el = last;
                    } else {
                        append(root, el);
                    }

                }

                this$1.svgEl = el;

                return el;

            }, noop);

        },

        disconnected: function disconnected() {
            var this$1 = this;


            if (isVoidElement(this.$el)) {
                attr(this.$el, {hidden: null, id: this.id || null});
            }

            if (this.svg) {
                this.svg.then(function (svg) { return (!this$1._connected || svg !== this$1.svgEl) && remove(svg); }, noop);
            }

            this.svg = this.svgEl = null;

        },

        methods: {

            getSvg: function getSvg() {
                var this$1 = this;


                if (!this.src) {
                    return Promise.reject();
                }

                if (svgs[this.src]) {
                    return svgs[this.src];
                }

                svgs[this.src] = new Promise(function (resolve, reject) {

                    if (startsWith(this$1.src, 'data:')) {
                        resolve(decodeURIComponent(this$1.src.split(',')[1]));
                    } else {

                        ajax(this$1.src).then(
                            function (xhr) { return resolve(xhr.response); },
                            function () { return reject('SVG not found.'); }
                        );

                    }

                });

                return svgs[this.src];

            }

        }

    });

    var symbolRe = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            var match;
            while ((match = symbolRe.exec(svg))) {
                symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + (match[1]) + "svg>";
            }

        }

        return symbols[svg][icon];
    }

}

function Switcher (UIkit) {

    UIkit.component('switcher', {

        mixins: [Togglable],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        defaults: {
            connect: '~.uk-switcher',
            toggle: '> *',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            clsContainer: 'uk-switcher',
            attrItem: 'uk-switcher-item',
            queued: true
        },

        computed: {

            connects: function connects(ref, $el) {
                var connect = ref.connect;

                return queryAll(connect, $el);
            },

            toggles: function toggles(ref, $el) {
                var toggle = ref.toggle;

                return $$(toggle, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            },

            {
                name: 'click',

                el: function el() {
                    return this.connects;
                },

                delegate: function delegate() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function filter() {
                    return this.swiping;
                },

                el: function el() {
                    return this.connects;
                },

                handler: function handler(e) {
                    if (!isTouch(e)) {
                        return;
                    }

                    e.preventDefault();
                    if (!win.getSelection().toString()) {
                        this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                    }
                }
            }

        ],

        update: function update() {
            var this$1 = this;


            this.connects.forEach(function (list) { return this$1.updateAria(list.children); });
            this.show(filter(this.toggles, ("." + (this.cls)))[0] || this.toggles[this.active] || this.toggles[0]);

        },

        methods: {

            show: function show(item) {
                var this$1 = this;


                var ref = this.toggles;
                var length = ref.length;
                var prev = !!this.connects.length && index(filter(this.connects[0].children, ("." + (this.cls)))[0]);
                var hasPrev = prev >= 0;
                var dir = item === 'previous' ? -1 : 1;

                var toggle, next = getIndex(item, this.toggles, prev);

                for (var i = 0; i < length; i++, next = (next + dir + length) % length) {
                    if (!matches(this$1.toggles[next], '.uk-disabled, [disabled]')) {
                        toggle = this$1.toggles[next];
                        break;
                    }
                }

                if (!toggle || prev >= 0 && hasClass(toggle, this.cls) || prev === next) {
                    return;
                }

                removeClass(this.toggles, this.cls);
                attr(this.toggles, 'aria-expanded', false);
                addClass(toggle, this.cls);
                attr(toggle, 'aria-expanded', true);

                this.connects.forEach(function (list) {
                    if (!hasPrev) {
                        this$1.toggleNow(list.children[next]);
                    } else {
                        this$1.toggleElement([list.children[prev], list.children[next]]);
                    }
                });

            }

        }

    });

}

function Tab (UIkit) {

    UIkit.component('tab', UIkit.components.switcher.extend({

        mixins: [Class],

        name: 'tab',

        props: {
            media: 'media'
        },

        defaults: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        init: function init() {

            var cls = hasClass(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : hasClass(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                UIkit.toggle(this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    }));

}

function Toggle (UIkit) {

    UIkit.component('toggle', {

        mixins: [UIkit.mixin.togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            media: 'media'
        },

        defaults: {
            href: false,
            target: false,
            mode: 'click',
            queued: true,
            media: false
        },

        computed: {

            target: function target(ref, $el) {
                var href = ref.href;
                var target = ref.target;

                target = queryAll(target || href, $el);
                return target.length && target || [$el];
            }

        },

        events: [

            {

                name: (pointerEnter + " " + pointerLeave),

                filter: function filter() {
                    return includes(this.mode, 'hover');
                },

                handler: function handler(e) {
                    if (!isTouch(e)) {
                        this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
                    }
                }

            },

            {

                name: 'click',

                filter: function filter() {
                    return includes(this.mode, 'click') || hasTouch;
                },

                handler: function handler(e) {

                    if (!isTouch(e) && !includes(this.mode, 'click')) {
                        return;
                    }

                    // TODO better isToggled handling
                    var link;
                    if (closest(e.target, 'a[href="#"], button')
                        || (link = closest(e.target, 'a[href]')) && (
                            this.cls
                            || !isVisible(this.target)
                            || link.hash && matches(this.target, link.hash)
                        )
                    ) {
                        once(doc, 'click', function (e) { return e.preventDefault(); });
                    }

                    this.toggle();
                }

            }
        ],

        update: {

            write: function write() {

                if (!includes(this.mode, 'media') || !this.media) {
                    return;
                }

                var toggled = this.isToggled(this.target);
                if (win.matchMedia(this.media).matches ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['load', 'resize']

        },

        methods: {

            toggle: function toggle(type) {
                if (trigger(this.target, type || 'toggle', [this])) {
                    this.toggleElement(this.target);
                }
            }

        }

    });

}

function Video (UIkit) {

    UIkit.component('video', {

        props: {
            automute: Boolean,
            autoplay: Boolean,
        },

        defaults: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView: function inView(ref) {
                var autoplay = ref.autoplay;

                return autoplay === 'inview';
            }

        },

        ready: function ready() {

            this.player = new Player(this.$el);

            if (this.automute) {
                this.player.mute();
            }

        },

        update: [

            {

                read: function read(_, ref) {
                    var type = ref.type;


                    return !this.player || (type === 'scroll' || type === 'resize') && !this.inView
                        ? false
                        : {
                            visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
                            inView: this.inView && isInView(this.$el)
                        };
                },

                write: function write(ref) {
                    var visible = ref.visible;
                    var inView = ref.inView;


                    if (!visible || this.inView && !inView) {
                        this.player.pause();
                    } else if (this.autoplay === true || this.inView && inView) {
                        this.player.play();
                    }

                },

                events: ['load', 'resize', 'scroll']

            }

        ],

    });

}

function core (UIkit) {

    // core components
    UIkit.use(Toggle);
    UIkit.use(Accordion);
    UIkit.use(Alert);
    UIkit.use(Video);
    UIkit.use(Cover);
    UIkit.use(Drop);
    UIkit.use(Dropdown);
    UIkit.use(FormCustom);
    UIkit.use(HeightMatch);
    UIkit.use(HeightViewport);
    UIkit.use(Margin);
    UIkit.use(Gif);
    UIkit.use(Grid);
    UIkit.use(Leader);
    UIkit.use(Modal$1);
    UIkit.use(Nav);
    UIkit.use(Navbar);
    UIkit.use(Offcanvas);
    UIkit.use(Responsive);
    UIkit.use(Scroll);
    UIkit.use(Scrollspy);
    UIkit.use(ScrollspyNav);
    UIkit.use(Sticky);
    UIkit.use(Svg);
    UIkit.use(Icon);
    UIkit.use(Switcher);
    UIkit.use(Tab);

    // core functionality
    UIkit.use(Core);

}

UIkit$2.version = '3.0.0-beta.40';

mixin(UIkit$2);
core(UIkit$2);

function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var ref = UIkit.util;
    var $ = ref.$;
    var doc = ref.doc;
    var empty = ref.empty;
    var html = ref.html;

    UIkit.component('countdown', {

        mixins: [UIkit.mixin.class],

        attrs: true,

        props: {
            date: String,
            clsWrapper: String
        },

        defaults: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date: function date(ref) {
                var date = ref.date;

                return Date.parse(date);
            },

            days: function days(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },

            hours: function hours(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },

            minutes: function minutes(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },

            seconds: function seconds(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },

            units: function units() {
                var this$1 = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit]; });
            }

        },

        connected: function connected() {
            this.start();
        },

        disconnected: function disconnected() {
            var this$1 = this;

            this.stop();
            this.units.forEach(function (unit) { return empty(this$1[unit]); });
        },

        events: [

            {

                name: 'visibilitychange',

                el: doc,

                handler: function handler() {
                    if (doc.hidden) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }

            }

        ],

        update: {

            write: function write() {
                var this$1 = this;


                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days
                        = timespan.hours
                        = timespan.minutes
                        = timespan.seconds
                        = 0;
                }

                this.units.forEach(function (unit) {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? ("0" + digits) : digits;

                    var el = this$1[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(function () { return '<span></span>'; }).join(''));
                        }

                        digits.forEach(function (digit, i) { return el.children[i].textContent = digit; });
                    }

                });

            }

        },

        methods: {

            start: function start() {
                var this$1 = this;


                this.stop();

                if (this.date && this.units.length) {
                    this.$emit();
                    this.timer = setInterval(function () { return this$1.$emit(); }, 1000);
                }

            },

            stop: function stop() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    });

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total: total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }

}

function plugin$1(UIkit) {

    if (plugin$1.installed) {
        return;
    }

    var ref = UIkit.util;
    var addClass = ref.addClass;
    var css = ref.css;
    var scrolledOver = ref.scrolledOver;
    var sortBy = ref.sortBy;
    var toFloat = ref.toFloat;

    UIkit.component('grid-parallax', UIkit.components.grid.extend({

        props: {
            target: String,
            translate: Number
        },

        defaults: {
            target: false,
            translate: 150
        },

        computed: {

            translate: function translate(ref) {
                var translate = ref.translate;

                return Math.abs(translate);
            }

        },

        init: function init() {
            addClass(this.$el, 'uk-grid');
        },

        disconnected: function disconnected() {
            this.reset();
            css(this.$el, 'marginBottom', '');
        },

        update: [

            {

                read: function read(ref) {
                    var rows = ref.rows;

                    return {
                        columns: rows && rows[0] && rows[0].length || 0,
                        rows: rows && rows.map(function (elements) { return sortBy(elements, 'offsetLeft'); })
                    };
                },

                write: function write(ref) {
                    var columns = ref.columns;

                    css(this.$el, 'marginBottom', columns > 1
                        ? this.translate + toFloat(css(css(this.$el, 'marginBottom', ''), 'marginBottom'))
                        : '');
                },

                events: ['load', 'resize']
            },

            {

                read: function read() {
                    return {scrolled: scrolledOver(this.$el) * this.translate};
                },

                write: function write(ref) {
                    var rows = ref.rows;
                    var columns = ref.columns;
                    var scrolled = ref.scrolled;


                    if (!rows || columns === 1 || !scrolled) {
                        return this.reset();
                    }

                    rows.forEach(function (row) { return row.forEach(function (el, i) { return css(el, 'transform', ("translateY(" + (i % 2 ? scrolled : scrolled / 8) + "px)")); }
                        ); }
                    );

                },

                events: ['scroll', 'load', 'resize']
            }
        ],

        methods: {

            reset: function reset() {
                css(this.$el.children, 'transform', '');
            }

        }

    }));

    UIkit.components.gridParallax.options.update.unshift({

        read: function read() {
            this.reset();
        },

        events: ['load', 'resize']

    });

}

function AnimationsPlugin (UIkit) {

    var ref = UIkit.util;
    var css = ref.css;

    var Animations = {

        slide: {

            show: function show(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent: function percent(current) {
                return Animations.translated(current);
            },

            translate: function translate$1(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        },

        translated: function translated(el) {
            return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
        }

    };

    return Animations;

}

function translate(value, unit) {
    if ( value === void 0 ) value = 0;
    if ( unit === void 0 ) unit = '%';

    return ("translateX(" + value + (value ? unit : '') + ")"); // currently not translate3d to support IE, translate3d within translate3d does not work while transitioning
}

function scale3d(value) {
    return ("scale3d(" + value + ", " + value + ", 1)");
}

function TransitionerPlugin (UIkit) {

    var ref = UIkit.util;
    var createEvent = ref.createEvent;
    var clamp = ref.clamp;
    var css = ref.css;
    var Deferred = ref.Deferred;
    var noop = ref.noop;
    var Promise = ref.Promise;
    var Transition = ref.Transition;
    var trigger = ref.trigger;

    function Transitioner(prev, next, dir, ref) {
        var animation = ref.animation;
        var easing = ref.easing;


        var percent = animation.percent;
        var translate = animation.translate;
        var show = animation.show; if ( show === void 0 ) show = noop;
        var props = show(dir);
        var deferred = new Deferred();

        return {

            dir: dir,

            show: function show(duration, percent, linear) {
                var this$1 = this;
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Promise.all([
                    Transition.start(next, props[1], duration, timing),
                    Transition.start(prev, props[0], duration, timing)
                ]).then(function () {
                    this$1.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },

            stop: function stop() {
                return Transition.stop([next, prev]);
            },

            cancel: function cancel() {
                Transition.cancel([next, prev]);
            },

            reset: function reset() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },

            forward: function forward(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);

            },

            translate: function translate$1(percent) {

                var props = translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent: percent, dir: dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir: dir});

            },

            percent: function percent$1() {
                return percent(prev || next, next, dir);
            },

            getDistance: function getDistance() {
                return prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    return Transitioner;

}

function AutoplayMixin (UIkit) {

    var ref = UIkit.util;
    var doc = ref.doc;
    var pointerDown = ref.pointerDown;

    return {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        defaults: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function connected() {
            this.startAutoplay();
        },

        disconnected: function disconnected() {
            this.stopAutoplay();
        },

        events: [

            {

                name: 'visibilitychange',

                el: doc,

                handler: function handler() {
                    if (doc.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            },

            {

                name: pointerDown,
                handler: 'stopAutoplay'

            },

            {

                name: 'mouseenter',

                filter: function filter() {
                    return this.autoplay;
                },

                handler: function handler() {
                    this.isHovering = true;
                }

            },

            {

                name: 'mouseleave',

                filter: function filter() {
                    return this.autoplay;
                },

                handler: function handler() {
                    this.isHovering = false;
                }

            }

        ],

        methods: {

            startAutoplay: function startAutoplay() {
                var this$1 = this;


                this.stopAutoplay();

                if (this.autoplay) {
                    this.interval = setInterval(
                        function () { return !(this$1.isHovering && this$1.pauseOnHover) && !this$1.stack.length && this$1.show('next'); },
                        this.autoplayInterval
                    );
                }

            },

            stopAutoplay: function stopAutoplay() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }

        }

    };
}

function DragMixin (UIkit) {

    var ref = UIkit.util;
    var doc = ref.doc;
    var getPos = ref.getPos;
    var includes = ref.includes;
    var isRtl = ref.isRtl;
    var isTouch = ref.isTouch;
    var off = ref.off;
    var on = ref.on;
    var pointerDown = ref.pointerDown;
    var pointerMove = ref.pointerMove;
    var pointerUp = ref.pointerUp;
    var preventClick = ref.preventClick;
    var trigger = ref.trigger;
    var win = ref.win;

    return {

        defaults: {
            threshold: 10,
            preventCatch: false
        },

        init: function init() {
            var this$1 = this;


            ['start', 'move', 'end'].forEach(function (key) {

                var fn = this$1[key];
                this$1[key] = function (e) {

                    var pos = getPos(e).x * (isRtl ? -1 : 1);

                    this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
                    this$1.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: pointerDown,

                delegate: function delegate() {
                    return this.slidesSelector;
                },

                handler: function handler(e) {

                    if (!isTouch(e) && hasTextNodesOnly(e.target)
                        || e.button > 0
                        || this.length < 2
                        || this.preventCatch
                    ) {
                        return;
                    }

                    this.start(e);
                }

            },

            {
                name: 'dragstart',

                handler: function handler(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start: function start() {

                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.translate(this.percent);
                    this._transitioner.cancel();

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                this.unbindMove = on(doc, pointerMove, this.move, {capture: true, passive: false});
                on(win, 'scroll', this.unbindMove);
                on(doc, pointerUp, this.end, true);

            },

            move: function move(e) {
                var this$1 = this;


                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var ref = this;
                var slides = ref.slides;
                var ref$1 = this;
                var prevIndex = ref$1.prevIndex;
                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this$1.drag -= width * this$1.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this$1.getIndex(prevIndex + this$1.dir, prevIndex);
                    width = this$1._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var reset;

                [this.index, this.prevIndex].filter(function (i) { return !includes([nextIndex, prevIndex], i); }).forEach(function (i) {
                    trigger(slides[i], 'itemhidden', [this$1]);

                    reset = true;

                    if (edge) {
                        this$1.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || reset && edge) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                (reset || this.length < 3) && this._transitioner && this._transitioner.reset();
                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }

            },

            end: function end() {

                off(win, 'scroll', this.unbindMove);
                this.unbindMove();
                off(doc, pointerUp, this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                    preventClick();

                }

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

}

function NavMixin (UIkit) {

    var ref = UIkit.util;
    var $ = ref.$;
    var $$ = ref.$$;
    var data = ref.data;
    var html = ref.html;
    var toggleClass = ref.toggleClass;
    var toNumber = ref.toNumber;

    return {

        defaults: {
            selNav: false
        },

        computed: {

            nav: function nav(ref, $el) {
                var selNav = ref.selNav;

                return $(selNav, $el);
            },

            navItemSelector: function navItemSelector(ref) {
                var attrItem = ref.attrItem;

                return ("[" + attrItem + "],[data-" + attrItem + "]");
            },

            navItems: function navItems(_, $el) {
                return $$(this.navItemSelector, $el);
            }

        },

        update: [

            {

                write: function write() {
                    var this$1 = this;


                    if (this.nav && this.length !== this.nav.children.length) {
                        html(this.nav, this.slides.map(function (_, i) { return ("<li " + (this$1.attrItem) + "=\"" + i + "\"><a href=\"#\"></a></li>"); }).join(''));
                    }

                    toggleClass($$(this.navItemSelector, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);

                    this.updateNav();

                },

                events: ['load', 'resize']

            }

        ],

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return this.navItemSelector;
                },

                handler: function handler(e) {
                    e.preventDefault();
                    e.current.blur();
                    this.show(data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',
                handler: 'updateNav'

            }

        ],

        methods: {

            updateNav: function updateNav() {
                var this$1 = this;


                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = data(el, this$1.attrItem);

                    toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
                    toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
                });

            }

        }

    };

}

function plugin$5(UIkit) {

    if (plugin$5.installed) {
        return;
    }

    var ref = UIkit.util;
    var $ = ref.$;
    var assign = ref.assign;
    var clamp = ref.clamp;
    var fastdom = ref.fastdom;
    var getIndex = ref.getIndex;
    var hasClass = ref.hasClass;
    var isNumber = ref.isNumber;
    var isRtl = ref.isRtl;
    var Promise = ref.Promise;
    var toNodes = ref.toNodes;
    var trigger = ref.trigger;

    UIkit.mixin.slider = {

        attrs: true,

        mixins: [AutoplayMixin(UIkit), DragMixin(UIkit), NavMixin(UIkit)],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },

        defaults: {
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        },

        computed: {

            duration: function duration(ref, $el) {
                var velocity = ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },

            length: function length() {
                return this.slides.length;
            },

            list: function list(ref, $el) {
                var selList = ref.selList;

                return $(selList, $el);
            },

            maxIndex: function maxIndex() {
                return this.length - 1;
            },

            slidesSelector: function slidesSelector(ref) {
                var selList = ref.selList;

                return (selList + " > *");
            },

            slides: function slides() {
                return toNodes(this.list.children);
            }

        },

        methods: {

            show: function show(index, force) {
                var this$1 = this;
                if ( force === void 0 ) force = false;


                if (this.dragging || !this.length) {
                    return;
                }

                var ref = this;
                var stack = ref.stack;
                var queueIndex = force ? 0 : stack.length;
                var reset = function () {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        this$1.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.index;
                var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                prev && trigger(prev, 'beforeitemhide', [this]);
                if (!trigger(next, 'beforeitemshow', [this, prev])) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && trigger(prev, 'itemhidden', [this$1]);
                    trigger(next, 'itemshown', [this$1]);

                    return new Promise(function (resolve) {
                        fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                this$1.show(stack.shift(), true);
                            } else {
                                this$1._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex: function getIndex$1(index, prev) {
                if ( index === void 0 ) index = this.index;
                if ( prev === void 0 ) prev = this.index;

                return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex: function getValidIndex(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;

                return this.getIndex(index, prevIndex);
            },

            _show: function _show(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    assign({
                        easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing
                    }, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._transitioner.translate(1);
                    return Promise.resolve();
                }

                var ref = this.stack;
                var length = ref.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance: function _getDistance(prev, next) {
                return new this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate: function _translate(percent, prev, next) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner: function _getTransitioner(prev, next, dir, options) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;
                if ( dir === void 0 ) dir = this.dir || 1;
                if ( options === void 0 ) options = this.transitionOptions;

                return new this.Transitioner(
                    isNumber(prev) ? this.slides[prev] : prev,
                    isNumber(next) ? this.slides[next] : next,
                    dir * (isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

}

function speedUp(x) {
    return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
}

function plugin$4(UIkit) {

    if (plugin$4.installed) {
        return;
    }

    UIkit.use(plugin$5);

    var mixin = UIkit.mixin;
    var UIkit_util = UIkit.util;
    var addClass = UIkit_util.addClass;
    var assign = UIkit_util.assign;
    var fastdom = UIkit_util.fastdom;
    var isNumber = UIkit_util.isNumber;
    var removeClass = UIkit_util.removeClass;

    var Animations = AnimationsPlugin(UIkit);
    var Transitioner = TransitionerPlugin(UIkit);

    UIkit.mixin.slideshow = {

        mixins: [mixin.slider],

        props: {
            animation: String
        },

        defaults: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations,
            Transitioner: Transitioner
        },

        computed: {

            animation: function animation(ref) {
                var animation = ref.animation;
                var Animations = ref.Animations;

                return assign(animation in Animations ? Animations[animation] : Animations.slide, {name: animation});
            },

            transitionOptions: function transitionOptions() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden': function itemshowitemhideitemshownitemhidden(ref) {
                var target = ref.target;

                UIkit.update(null, target);
            },

            itemshow: function itemshow() {
                isNumber(this.prevIndex) && fastdom.flush(); // iOS 10+ will honor the video.play only if called from a gesture handler
            },

            beforeitemshow: function beforeitemshow(ref) {
                var target = ref.target;

                addClass(target, this.clsActive);
            },

            itemshown: function itemshown(ref) {
                var target = ref.target;

                addClass(target, this.clsActivated);
            },

            itemhidden: function itemhidden(ref) {
                var target = ref.target;

                removeClass(target, this.clsActive, this.clsActivated);
            }

        }

    };

}

function AnimationsPlugin$1 (UIkit) {

    var mixin = UIkit.mixin;
    var UIkit_util = UIkit.util;
    var assign = UIkit_util.assign;
    var css = UIkit_util.css;

    return assign({}, mixin.slideshow.defaults.Animations, {

        fade: {

            show: function show() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function translate$$1(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show: function show() {
                return [
                    {opacity: 0, transform: scale3d(1 - .2)},
                    {opacity: 1, transform: scale3d(1)}
                ];
            },

            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function translate$$1(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 - .2 * percent)},
                    {opacity: percent, transform: scale3d(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

}

function plugin$3(UIkit) {

    if (plugin$3.installed) {
        return;
    }

    UIkit.use(plugin$4);

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var $ = util.$;
    var addClass = util.addClass;
    var ajax = util.ajax;
    var append = util.append;
    var assign = util.assign;
    var attr = util.attr;
    var css = util.css;
    var doc = util.doc;
    var getImage = util.getImage;
    var html = util.html;
    var index = util.index;
    var on = util.on;
    var pointerDown = util.pointerDown;
    var pointerMove = util.pointerMove;
    var removeClass = util.removeClass;
    var Transition = util.Transition;
    var trigger = util.trigger;

    var Animations = AnimationsPlugin$1(UIkit);

    UIkit.component('lightbox-panel', {

        mixins: [mixin.container, mixin.modal, mixin.togglable, mixin.slideshow],

        functional: true,

        defaults: {
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations,
            template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href=\"#\" uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href=\"#\" uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
        },

        created: function created() {
            var this$1 = this;


            this.$mount(append(this.container, this.template));

            this.caption = $('.uk-lightbox-caption', this.$el);

            this.items.forEach(function () { return append(this$1.list, '<li></li>'); });

        },

        events: [

            {

                name: (pointerMove + " " + pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate: function delegate() {
                    return this.slidesSelector;
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: 'showControls'
            },

            {

                name: 'hide',

                self: true,

                handler: function handler() {

                    this.hideControls();

                    removeClass(this.slides, this.clsActive);
                    Transition.stop(this.slides);

                }
            },

            {

                name: 'keyup',

                el: function el() {
                    return doc;
                },

                handler: function handler(e) {

                    if (!this.isToggled(this.$el)) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'beforeitemshow',

                handler: function handler(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.preventCatch = true;

                    e.preventDefault();

                    this.toggleNow(this.$el, true);

                    this.animation = Animations['scale'];
                    removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                }

            },

            {

                name: 'itemshow',

                handler: function handler(ref) {
                    var this$1 = this;
                    var target = ref.target;


                    var i = index(target);
                    var ref$1 = this.getItem(i);
                    var caption = ref$1.caption;

                    css(this.caption, 'display', caption ? '' : 'none');
                    html(this.caption, caption);

                    for (var j = 0; j <= this.preload; j++) {
                        this$1.loadItem(this$1.getIndex(i + j));
                        this$1.loadItem(this$1.getIndex(i - j));
                    }

                }

            },

            {

                name: 'itemshown',

                handler: function handler() {
                    this.preventCatch = false;
                }

            },

            {

                name: 'itemload',

                handler: function handler(_, item) {
                    var this$1 = this;


                    var source = item.source;
                    var type = item.type;
                    var alt = item.alt;

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!source) {
                        return;
                    }

                    var matches;

                    // Image
                    if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {

                        getImage(source).then(
                            function (img) { return this$1.setItem(item, ("<img width=\"" + (img.width) + "\" height=\"" + (img.height) + "\" src=\"" + source + "\" alt=\"" + (alt ? alt : '') + "\">")); },
                            function () { return this$1.setError(item); }
                        );

                    // Video
                    } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)$/i)) {

                        var video = $(("<video controls playsinline" + (item.poster ? (" poster=\"" + (item.poster) + "\"") : '') + " uk-video=\"autoplay: " + (this.videoAutoplay) + "\"></video>"));
                        attr(video, 'src', source);

                        on(video, 'error', function () { return this$1.setError(item); });
                        on(video, 'loadedmetadata', function () {
                            attr(video, {width: video.videoWidth, height: video.videoHeight});
                            this$1.setItem(item, video);
                        });

                    // Iframe
                    } else if (type === 'iframe') {

                        this.setItem(item, ("<iframe class=\"uk-lightbox-iframe\" src=\"" + source + "\" frameborder=\"0\" allowfullscreen></iframe>"));

                    // YouTube
                    } else if ((matches = source.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/()youtu\.be\/(.*)/))) {

                        var id = matches[2];
                        var setIframe = function (width, height) {
                            if ( width === void 0 ) width = 640;
                            if ( height === void 0 ) height = 450;

                            return this$1.setItem(item, getIframe(("//www.youtube" + (matches[1] || '') + ".com/embed/" + id), width, height, this$1.videoAutoplay));
                        };

                        getImage(("//img.youtube.com/vi/" + id + "/maxresdefault.jpg")).then(
                            function (ref) {
                                var width = ref.width;
                                var height = ref.height;

                                // YouTube default 404 thumb, fall back to low resolution
                                if (width === 120 && height === 90) {
                                    getImage(("//img.youtube.com/vi/" + id + "/0.jpg")).then(
                                        function (ref) {
                                            var width = ref.width;
                                            var height = ref.height;

                                            return setIframe(width, height);
                                    },
                                        setIframe
                                    );
                                } else {
                                    setIframe(width, height);
                                }
                            },
                            setIframe
                        );

                    // Vimeo
                    } else if ((matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/))) {

                        ajax(("//vimeo.com/api/oembed.json?maxwidth=1920&url=" + (encodeURI(source))), {responseType: 'json'})
                            .then(function (ref) {
                                    var ref_response = ref.response;
                                    var height = ref_response.height;
                                    var width = ref_response.width;

                                    return this$1.setItem(item, getIframe(("//player.vimeo.com/video/" + (matches[2])), width, height, this$1.videoAutoplay));
                        }
                            );

                    }

                }

            }

        ],

        methods: {

            loadItem: function loadItem(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (item.content) {
                    return;
                }

                trigger(this.$el, 'itemload', [item]);
            },

            getItem: function getItem(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[index] || {};
            },

            setItem: function setItem(item, content) {
                assign(item, {content: content});
                var el = html(this.slides[this.items.indexOf(item)], content);
                trigger(this.$el, 'itemloaded', [this, el]);
                UIkit.update(null, el);
            },

            setError: function setError(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function showControls() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls: function hideControls() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    });

    function getIframe(src, width, height, autoplay) {
        return ("<iframe src=\"" + src + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width: 100%; box-sizing: border-box;\" frameborder=\"0\" allowfullscreen uk-video=\"autoplay: " + autoplay + "\" uk-responsive></iframe>");
    }

}

function plugin$2(UIkit) {

    if (plugin$2.installed) {
        return;
    }

    UIkit.use(plugin$3);

    var util = UIkit.util;
    var $$ = util.$$;
    var assign = util.assign;
    var data = util.data;
    var index = util.index;
    var ref = UIkit.components.lightboxPanel;
    var options = ref.options;

    UIkit.component('lightbox', {

        attrs: true,

        props: assign({toggle: String}, options.props),

        defaults: assign({toggle: 'a'}, Object.keys(options.props).reduce(function (defaults, key) {
            defaults[key] = options.defaults[key];
            return defaults;
        }, {})),

        computed: {

            toggles: function toggles(ref, $el) {
                var toggle = ref.toggle;

                return $$(toggle, $el);
            }

        },

        disconnected: function disconnected() {
            this._destroy();
        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    e.current.blur();
                    this.show(index(this.toggles, e.current));
                }

            }

        ],

        update: function update(data) {

            if (this.panel && this.animation) {
                this.panel.$props.animation = this.animation;
                this.panel.$emit();
            }

            if (!this.panel || data.toggles && isEqualList(data.toggles, this.toggles)) {
                return;
            }

            data.toggles = this.toggles;
            this._destroy();
            this._init();

        },

        methods: {

            _init: function _init() {
                return this.panel = this.panel || UIkit.lightboxPanel(assign({}, this.$props, {
                    items: this.toggles.reduce(function (items, el) {
                        items.push(['href', 'caption', 'type', 'poster', 'alt'].reduce(function (obj, attr) {
                            obj[attr === 'href' ? 'source' : attr] = data(el, attr);
                            return obj;
                        }, {}));
                        return items;
                    }, [])
                }));
            },

            _destroy: function _destroy() {
                if (this.panel) {
                    this.panel.$destroy(true);
                    this.panel = null;
                }
            },

            show: function show(index) {

                if (!this.panel) {
                    this._init();
                }

                return this.panel.show(index);

            },

            hide: function hide() {

                return this.panel && this.panel.hide();

            }

        }

    });

    function isEqualList(listA, listB) {
        return listA.length === listB.length
            && listA.every(function (el, i) { return el !== listB[i]; });
    }

}

function plugin$6(UIkit) {
    var obj;


    if (plugin$6.installed) {
        return;
    }

    var ref = UIkit.util;
    var append = ref.append;
    var closest = ref.closest;
    var css = ref.css;
    var each = ref.each;
    var pointerEnter = ref.pointerEnter;
    var pointerLeave = ref.pointerLeave;
    var remove = ref.remove;
    var toFloat = ref.toFloat;
    var Transition = ref.Transition;
    var trigger = ref.trigger;
    var containers = {};

    UIkit.component('notification', {

        functional: true,

        args: ['message', 'status'],

        defaults: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        created: function created() {

            if (!containers[this.pos]) {
                containers[this.pos] = append(UIkit.container, ("<div class=\"uk-notification uk-notification-" + (this.pos) + "\"></div>"));
            }

            var container = css(containers[this.pos], 'display', 'block');

            this.$mount(append(container,
                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\"> <a href=\"#\" class=\"" + (this.clsClose) + "\" data-uk-close></a> <div>" + (this.message) + "</div> </div>")
            ));

        },

        ready: function ready() {
            var this$1 = this;


            var marginBottom = toFloat(css(this.$el, 'marginBottom'));
            Transition.start(
                css(this.$el, {opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0}),
                {opacity: 1, marginTop: 0, marginBottom: marginBottom}
            ).then(function () {
                if (this$1.timeout) {
                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
                }
            });

        },

        events: ( obj = {

            click: function click(e) {
                if (closest(e.target, 'a[href="#"]')) {
                    e.preventDefault();
                }
                this.close();
            }

        }, obj[pointerEnter] = function () {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }, obj[pointerLeave] = function () {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            }, obj),

        methods: {

            close: function close(immediate) {
                var this$1 = this;


                var removeFn = function () {

                    trigger(this$1.$el, 'close', [this$1]);
                    remove(this$1.$el);

                    if (!containers[this$1.pos].children.length) {
                        css(containers[this$1.pos], 'display', 'none');
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn();
                } else {
                    Transition.start(this.$el, {
                        opacity: 0,
                        marginTop: -this.$el.offsetHeight,
                        marginBottom: 0
                    }).then(removeFn);
                }
            }

        }

    });

    UIkit.notification.closeAll = function (group, immediate) {
        each(UIkit.instances, function (component) {
            if (component.$options.name === 'notification' && (!group || group === component.group)) {
                component.close(immediate);
            }
        });
    };

}

function plugin$8(UIkit) {

    if (plugin$8.installed) {
        return;
    }

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var css = util.css;
    var Dimensions = util.Dimensions;
    var each = util.each;
    var getImage = util.getImage;
    var includes = util.includes;
    var isNumber = util.isNumber;
    var isUndefined = util.isUndefined;
    var toFloat = util.toFloat;
    var win = util.win;

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity'];

    mixin.parallax = {

        props: props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {
            media: 'media'
        }),

        defaults: props.reduce(function (defaults, prop) {
            defaults[prop] = undefined;
            return defaults;
        }, {
            media: false
        }),

        computed: {

            props: function props$1(properties, $el) {
                var this$1 = this;


                return props.reduce(function (props, prop) {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i);
                    var isCssProp = isColor || prop === 'opacity';

                    var pos, bgPos, diff;
                    var steps = properties[prop].slice(0);

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale'
                            ? 1
                            : isCssProp
                                ? css($el, prop)
                                : 0) || 0);
                    }

                    var unit = includes(steps.join(''), '%') ? '%' : 'px';

                    if (isColor) {

                        var ref = $el.style;
                        var color = ref.color;
                        steps = steps.map(function (step) { return parseColor($el, step); });
                        $el.style.color = color;

                    } else {

                        steps = steps.map(toFloat);

                    }

                    if (prop.match(/^bg/)) {

                        css($el, ("background-position-" + (prop[2])), '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this$1.covers) {

                            var min = Math.min.apply(Math, steps);
                            var max = Math.max.apply(Math, steps);
                            var down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(function (step) { return step - (down ? min : max); });
                            pos = (down ? -diff : 0) + "px";

                        } else {

                            pos = bgPos;

                        }
                    }

                    props[prop] = {steps: steps, unit: unit, pos: pos, bgPos: bgPos, diff: diff};

                    return props;

                }, {});

            },

            bgProps: function bgProps() {
                var this$1 = this;

                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
            },

            covers: function covers(_, $el) {
                return css($el.style.backgroundSize !== '' ? css($el, 'backgroundSize', '') : $el, 'backgroundSize') === 'cover';
            }

        },

        disconnected: function disconnected() {
            delete this._image;
        },

        update: [

            {

                read: function read(data) {
                    var this$1 = this;


                    data.active = !this.media || win.matchMedia(this.media).matches;

                    if (data.image) {
                        data.image.dimEl = {
                            width: this.$el.offsetWidth,
                            height: this.$el.offsetHeight
                        };
                    }

                    if ('image' in data || !this.covers || !this.bgProps.length) {
                        return;
                    }

                    var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (!src) {
                        return;
                    }

                    data.image = false;

                    getImage(src).then(function (img) {
                        data.image = {
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        };

                        this$1.$emit();
                    });

                },

                write: function write(ref) {
                    var this$1 = this;
                    var image = ref.image;
                    var active = ref.active;


                    if (!image) {
                        return;
                    }

                    if (!active) {
                        css(this.$el, {backgroundSize: '', backgroundRepeat: ''});
                        return;
                    }

                    var dimEl = image.dimEl;

                    var dim = Dimensions.cover(image, dimEl);

                    this.bgProps.forEach(function (prop) {

                        var ref = this$1.props[prop];
                        var diff = ref.diff;
                        var bgPos = ref.bgPos;
                        var steps = ref.steps;
                        var attr = prop === 'bgy' ? 'height' : 'width';
                        var span = dim[attr] - dimEl[attr];

                        if (!bgPos.match(/%$|0px/)) {
                            return;
                        }

                        if (span < diff) {
                            dimEl[attr] = dim[attr] + diff - span;
                        } else if (span > diff) {

                            var bgPosFloat = parseFloat(bgPos);

                            if (bgPosFloat) {
                                this$1.props[prop].steps = steps.map(function (step) { return step - (span - diff) / (100 / bgPosFloat); });
                            }
                        }

                        dim = Dimensions.cover(image, dimEl);
                    });

                    css(this.$el, {
                        backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
                        backgroundRepeat: 'no-repeat'
                    });

                },

                events: ['load', 'resize']

            }

        ],

        methods: {

            reset: function reset() {
                var this$1 = this;

                each(this.getCss(0), function (_, prop) { return css(this$1.$el, prop, ''); });
            },

            getCss: function getCss(percent) {

                var ref = this;
                var props = ref.props;
                var translated = false;

                return Object.keys(props).reduce(function (css, prop) {

                    var ref = props[prop];
                    var steps = ref.steps;
                    var unit = ref.unit;
                    var pos = ref.pos;
                    var value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y':

                            if (translated) {
                                break;
                            }

                            var ref$1 = ['x', 'y'].map(function (dir) { return prop === dir
                                ? value + unit
                                : props[dir]
                                    ? getValue(props[dir].steps, percent) + props[dir].unit
                                    : 0; }
                            );
                    var x = ref$1[0];
                    var y = ref$1[1];

                            translated = css.transform += " translate3d(" + x + ", " + y + ", 0)";
                            break;
                        case 'rotate':
                            css.transform += " rotate(" + value + "deg)";
                            break;
                        case 'scale':
                            css.transform += " scale(" + value + ")";
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[("background-position-" + (prop[2]))] = "calc(" + pos + " + " + (value + unit) + ")";
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor':

                            var ref$2 = getStep(steps, percent);
                    var start = ref$2[0];
                    var end = ref$2[1];
                    var p = ref$2[2];

                            css[prop] = "rgba(" + (start.map(function (value, i) {
                                    value = value + p * (end[i] - value);
                                    return i === 3 ? toFloat(value) : parseInt(value, 10);
                                }).join(',')) + ")";
                            break;

                        // CSS Filter
                        case 'blur':
                            css.filter += " blur(" + value + "px)";
                            break;
                        case 'hue':
                            css.filter += " hue-rotate(" + value + "deg)";
                            break;
                        case 'fopacity':
                            css.filter += " opacity(" + value + "%)";
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            css.filter += " " + prop + "(" + value + "%)";
                            break;

                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color').split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (n) { return toFloat(n); });
    }

    function getStep(steps, percent) {
        var count = steps.length - 1;
        var index = Math.min(Math.floor(count * percent), count - 1);
        var step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent) {
        var ref = getStep(steps, percent);
        var start = ref[0];
        var end = ref[1];
        var p = ref[2];
        return (isNumber(start)
            ? start + Math.abs(start - end) * p * (start < end ? 1 : -1)
            : +end
        ).toFixed(2);
    }

}

function plugin$7(UIkit) {

    if (plugin$7.installed) {
        return;
    }

    UIkit.use(plugin$8);

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var clamp = util.clamp;
    var css = util.css;
    var scrolledOver = util.scrolledOver;
    var query = util.query;

    UIkit.component('parallax', {

        mixins: [mixin.parallax],

        props: {
            target: String,
            viewport: Number,
            easing: Number,
        },

        defaults: {
            target: false,
            viewport: 1,
            easing: 1,
        },

        computed: {

            target: function target(ref, $el) {
                var target = ref.target;

                return target && query(target, $el) || $el;
            }

        },

        update: [

            {

                read: function read(ref) {
                    var percent = ref.percent;

                    return {
                        prev: percent,
                        percent: ease(scrolledOver(this.target) / (this.viewport || 1), this.easing)
                    };
                },

                write: function write(ref, ref$1) {
                    var prev = ref.prev;
                    var percent = ref.percent;
                    var active = ref.active;
                    var type = ref$1.type;


                    if (type !== 'scroll') {
                        prev = false;
                    }

                    if (!active) {
                        this.reset();
                        return;
                    }

                    if (prev !== percent) {
                        css(this.$el, this.getCss(percent));
                    }

                },

                events: ['scroll', 'load', 'resize']
            }

        ]

    });

    function ease(percent, easing) {
        return clamp(percent * (1 - (easing - easing * percent)));
    }

}

function SliderReactive (UIkit) {

    var ref = UIkit.util;
    var removeClass = ref.removeClass;

    return {

        update: [

            {

                write: function write() {

                    if (this.stack.length || this.dragging) {
                        return;
                    }

                    var index = this.getValidIndex();
                    delete this.index;
                    removeClass(this.slides, this.clsActive, this.clsActivated);
                    this.show(index);

                },

                events: ['load', 'resize']

            }

        ]

    };

}

function TransitionerPlugin$1 (UIkit) {

    var ref = UIkit.util;
    var assign = ref.assign;
    var clamp = ref.clamp;
    var createEvent = ref.createEvent;
    var css = ref.css;
    var Deferred = ref.Deferred;
    var includes = ref.includes;
    var index = ref.index;
    var isRtl = ref.isRtl;
    var noop = ref.noop;
    var sortBy = ref.sortBy;
    var toNodes = ref.toNodes;
    var Transition = ref.Transition;
    var trigger = ref.trigger;

    var Transitioner = assign(function (prev, next, dir, ref) {
        var center = ref.center;
        var easing = ref.easing;
        var list = ref.list;


        var deferred = new Deferred();

        var from = prev
                ? Transitioner.getLeft(prev, list, center)
                : Transitioner.getLeft(next, list, center) + next.offsetWidth * dir,
            to = next
                ? Transitioner.getLeft(next, list, center)
                : from + prev.offsetWidth * dir * (isRtl ? -1 : 1);

        return {

            dir: dir,

            show: function show(duration, percent, linear) {
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                prev && this.updateTranslates();
                percent = prev ? percent : clamp(percent, 0, 1);
                triggerUpdate(this.getItemIn(), 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                prev && triggerUpdate(this.getItemIn(true), 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Transition
                    .start(list, {transform: translate(-to * (isRtl ? -1 : 1), 'px')}, duration, timing)
                    .then(deferred.resolve, noop);

                return deferred.promise;

            },

            stop: function stop() {
                return Transition.stop(list);
            },

            cancel: function cancel() {
                Transition.cancel(list);
            },

            reset: function reset() {
                css(list, 'transform', '');
            },

            forward: function forward(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel(list);
                return this.show(duration, percent, true);
            },

            translate: function translate$1(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', translate(clamp(
                    -to + (distance - distance * percent),
                    -Transitioner.getWidth(list),
                    list.offsetWidth
                ) * (isRtl ? -1 : 1), 'px'));

                this.updateTranslates();

                if (prev) {
                    percent = clamp(percent, -1, 1);
                    triggerUpdate(this.getItemIn(), 'itemtranslatein', {percent: percent, dir: dir});
                    triggerUpdate(this.getItemIn(true), 'itemtranslateout', {percent: 1 - percent, dir: dir});
                }

            },

            percent: function percent() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },

            getDistance: function getDistance() {
                return Math.abs(to - from);
            },

            getItemIn: function getItemIn(out) {
                if ( out === void 0 ) out = false;


                var actives = this.getActives();
                var all = sortBy(slides(list), 'offsetLeft');
                var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);

                return ~i && all[i + (prev && !out ? dir : 0)];

            },

            getActives: function getActives() {

                var left = Transitioner.getLeft(prev || next, list, center);

                return sortBy(slides(list).filter(function (slide) {
                    var slideLeft = Transitioner.getElLeft(slide, list);
                    return slideLeft >= left && slideLeft + slide.offsetWidth <= list.offsetWidth + left;
                }), 'offsetLeft');

            },

            updateTranslates: function updateTranslates() {

                var actives = this.getActives();

                slides(list).forEach(function (slide) {
                    var isActive = includes(actives, slide);

                    triggerUpdate(slide, ("itemtranslate" + (isActive ? 'in' : 'out')), {
                        percent: isActive ? 1 : 0,
                        dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
                    });
                });
            }

        };

    }, {

        getLeft: function getLeft(el, list, center) {

            var left = this.getElLeft(el, list);

            return center
                ? left - this.center(el, list)
                : Math.min(left, this.getMax(list));

        },

        getMax: function getMax(list) {
            return Math.max(0, this.getWidth(list) - list.offsetWidth);
        },

        getWidth: function getWidth(list) {
            return slides(list).reduce(function (right, el) { return el.offsetWidth + right; }, 0);
        },

        getMaxWidth: function getMaxWidth(list) {
            return slides(list).reduce(function (right, el) { return Math.max(right, el.offsetWidth); }, 0);
        },

        center: function center(el, list) {
            return list.offsetWidth / 2 - el.offsetWidth / 2;
        },

        getElLeft: function getElLeft(el, list) {
            return (el.offsetLeft + (isRtl ? el.offsetWidth - list.offsetWidth : 0)) * (isRtl ? -1 : 1);
        }

    });

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    function slides(list) {
        return toNodes(list.children);
    }

    return Transitioner;

}

function ParallaxPlugin (UIkit, parent) {

    UIkit.use(plugin$8);

    var mixin = UIkit.mixin;
    var UIkit_util = UIkit.util;
    var closest = UIkit_util.closest;
    var css = UIkit_util.css;
    var endsWith = UIkit_util.endsWith;
    var noop = UIkit_util.noop;
    var Transition = UIkit_util.Transition;

    return {

        mixins: [mixin.parallax],

        computed: {

            item: function item() {
                var slider = UIkit.getComponent(closest(this.$el, (".uk-" + parent)), parent);
                return slider && closest(this.$el, slider.slidesSelector);
            }

        },

        events: [

            {

                name: 'itemshown',

                self: true,

                el: function el() {
                    return this.item;
                },

                handler: function handler() {
                    css(this.$el, this.getCss(.5));
                }

            },

            {
                name: 'itemin itemout',

                self: true,

                el: function el() {
                    return this.item;
                },

                handler: function handler(ref) {
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var duration = ref_detail.duration;
                    var timing = ref_detail.timing;
                    var dir = ref_detail.dir;


                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));

                    Transition.start(this.$el, this.getCss(isIn(type)
                        ? .5
                        : dir > 0
                            ? 1
                            : 0
                    ), duration, timing).catch(noop);

                }
            },

            {
                name: 'transitioncanceled transitionend',

                self: true,

                el: function el() {
                    return this.item;
                },

                handler: function handler() {
                    Transition.cancel(this.$el);
                }

            },

            {
                name: 'itemtranslatein itemtranslateout',

                self: true,

                el: function el() {
                    return this.item;
                },

                handler: function handler(ref) {
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var dir = ref_detail.dir;

                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));
                }
            }

        ]

    };

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrent(type, dir, percent) {

        percent /= 2;

        return !isIn(type)
            ? dir < 0
                ? percent
                : 1 - percent
            : dir < 0
                ? 1 - percent
                : percent;
    }

}

function plugin$9(UIkit) {

    if (plugin$9.installed) {
        return;
    }

    UIkit.use(plugin$5);

    var mixin = UIkit.mixin;
    var UIkit_util = UIkit.util;
    var $ = UIkit_util.$;
    var $$ = UIkit_util.$$;
    var addClass = UIkit_util.addClass;
    var css = UIkit_util.css;
    var data = UIkit_util.data;
    var includes = UIkit_util.includes;
    var isNumeric = UIkit_util.isNumeric;
    var isUndefined = UIkit_util.isUndefined;
    var toggleClass = UIkit_util.toggleClass;
    var toFloat = UIkit_util.toFloat;
    var Transitioner = TransitionerPlugin$1(UIkit);

    UIkit.component('slider-parallax', ParallaxPlugin(UIkit, 'slider'));

    UIkit.component('slider', {

        mixins: [mixin.class, mixin.slider, SliderReactive(UIkit)],

        props: {
            center: Boolean,
            sets: Boolean,
        },

        defaults: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner: Transitioner
        },

        computed: {

            avgWidth: function avgWidth() {
                return Transitioner.getWidth(this.list) / this.length;
            },

            finite: function finite(ref) {
                var finite = ref.finite;

                return finite || Transitioner.getWidth(this.list) < this.list.offsetWidth + Transitioner.getMaxWidth(this.list) + this.center;
            },

            maxIndex: function maxIndex() {
                var this$1 = this;


                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return this.sets[this.sets.length - 1];
                }

                css(this.slides, 'order', '');

                var max = Transitioner.getMax(this.list);
                var i = this.length;

                while (i--) {
                    if (Transitioner.getElLeft(this$1.list.children[i], this$1.list) < max) {
                        return Math.min(i + 1, this$1.length - 1);
                    }
                }

                return 0;
            },

            sets: function sets(ref) {
                var this$1 = this;
                var sets = ref.sets;


                var width = this.list.offsetWidth / (this.center ? 2 : 1);

                var left = 0;
                var leftCenter = width;
                var slideLeft = 0;

                sets = sets && this.slides.reduce(function (sets, slide, i) {

                    var slideWidth = slide.offsetWidth;
                    var slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!this$1.center && i > this$1.maxIndex) {
                            i = this$1.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = this$1.slides[i + 1];
                            if (this$1.center && cmp && slideWidth < leftCenter - cmp.offsetWidth / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
                            }

                        }
                    }

                    slideLeft += slideWidth;

                    return sets;

                }, []);

                return sets && sets.length && sets;

            },

            transitionOptions: function transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                };
            }

        },

        connected: function connected() {
            toggleClass(this.$el, this.clsContainer, !$(("." + (this.clsContainer)), this.$el));
        },

        update: {

            write: function write() {
                var this$1 = this;


                $$(("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]"), this.$el).forEach(function (el) {
                    var index = data(el, this$1.attrItem);
                    this$1.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (this$1.sets && !includes(this$1.sets, toFloat(index)) || index > this$1.maxIndex));
                });

            },

            events: ['load', 'resize']

        },

        events: {

            beforeitemshow: function beforeitemshow(e) {
                var this$1 = this;


                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(
                    this.index
                    - this.prevIndex
                    + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
                );

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this$1.stack.splice(1, 0, this$1.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                this.duration = speedUp(this.avgWidth / this.velocity)
                    * ((
                        this.dir < 0 || !this.slides[this.prevIndex]
                            ? this.slides[this.index]
                            : this.slides[this.prevIndex]
                    ).offsetWidth / this.avgWidth);

                this.reorder();

            },

            itemshow: function itemshow() {
                !isUndefined(this.prevIndex) && addClass(this._getTransitioner().getItemIn(), this.clsActive);
            },

            itemshown: function itemshown() {
                var this$1 = this;

                var actives = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActive, includes(actives, slide)); });
                (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActivated, includes(actives, slide)); });
            }

        },

        methods: {

            reorder: function reorder() {
                var this$1 = this;


                css(this.slides, 'order', '');

                if (this.finite) {
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

                this.slides.forEach(function (slide, i) { return css(slide, 'order', this$1.dir > 0 && i < index
                        ? 1
                        : this$1.dir < 0 && i >= this$1.index
                            ? -1
                            : ''
                    ); }
                );

                if (!this.center) {
                    return;
                }

                var next = this.slides[index];
                var width = this.list.offsetWidth / 2 - next.offsetWidth / 2;
                var j = 0;

                while (width > 0) {
                    var slideIndex = this$1.getIndex(--j + index, index);
                    var slide = this$1.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= slide.offsetWidth;
                }

            },

            getValidIndex: function getValidIndex(index, prevIndex) {
                var this$1 = this;
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;


                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev;

                do {

                    if (includes(this$1.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this$1.getIndex(index + this$1.dir, prevIndex);

                } while (index !== prev);

                return index;
            }

        }

    });

}

function AnimationsPlugin$2 (UIkit) {

    var mixin = UIkit.mixin;
    var UIkit_util = UIkit.util;
    var assign = UIkit_util.assign;
    var css = UIkit_util.css;

    var Animations = assign({}, mixin.slideshow.defaults.Animations, {

        fade: {

            show: function show() {
                return [
                    {opacity: 0, zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function translate$$1(percent) {
                return [
                    {opacity: 1 - percent, zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        scale: {

            show: function show() {
                return [
                    {opacity: 0, transform: scale3d(1 + .5), zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function translate$$1(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 + .5 * percent), zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        pull: {

            show: function show(dir) {
                return dir < 0
                    ? [
                        {transform: translate(30), zIndex: -1},
                        {transform: translate(), zIndex: 0} ]
                    : [
                        {transform: translate(-100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ];
            },

            percent: function percent(current, next, dir) {
                return dir < 0
                    ? 1 - Animations.translated(next)
                    : Animations.translated(current);
            },

            translate: function translate$1(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(30 * percent), zIndex: -1},
                        {transform: translate(-100 * (1 - percent)), zIndex: 0} ]
                    : [
                        {transform: translate(-percent * 100), zIndex: 0},
                        {transform: translate(30 * (1 - percent)), zIndex: -1}
                    ];
            }

        },

        push: {

            show: function show(dir) {
                return dir < 0
                    ? [
                        {transform: translate(100), zIndex: 0},
                        {transform: translate(), zIndex: -1} ]
                    : [
                        {transform: translate(-30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ];
            },

            percent: function percent(current, next, dir) {
                return dir > 0
                    ? 1 - Animations.translated(next)
                    : Animations.translated(current);
            },

            translate: function translate$2(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(percent * 100), zIndex: 0},
                        {transform: translate(-30 * (1 - percent)), zIndex: -1} ]
                    : [
                        {transform: translate(-30 * percent), zIndex: -1},
                        {transform: translate(100 * (1 - percent)), zIndex: 0}
                    ];
            }

        }

    });

    return Animations;

}

function plugin$10(UIkit) {

    if (plugin$10.installed) {
        return;
    }

    UIkit.use(plugin$4);

    var mixin = UIkit.mixin;
    var height = UIkit.util.height;

    var Animations = AnimationsPlugin$2(UIkit);

    UIkit.component('slideshow-parallax', ParallaxPlugin(UIkit, 'slideshow'));

    UIkit.component('slideshow', {

        mixins: [mixin.class, mixin.slideshow, SliderReactive(UIkit)],

        props: {
            ratio: String,
            minHeight: Boolean,
            maxHeight: Boolean,
        },

        defaults: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations: Animations
        },

        update: {

            read: function read() {

                var ref = this.ratio.split(':').map(Number);
                var width = ref[0];
                var height = ref[1];

                height = height * this.$el.offsetWidth / width;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return {height: height};
            },

            write: function write(ref) {
                var hgt = ref.height;

                height(this.list, Math.floor(hgt));
            },

            events: ['load', 'resize']

        }

    });

}

function plugin$11(UIkit) {
    var obj;


    if (plugin$11.installed) {
        return;
    }

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var addClass = util.addClass;
    var after = util.after;
    var assign = util.assign;
    var append = util.append;
    var attr = util.attr;
    var before = util.before;
    var closest = util.closest;
    var css = util.css;
    var doc = util.doc;
    var docEl = util.docEl;
    var height = util.height;
    var fastdom = util.fastdom;
    var getPos = util.getPos;
    var includes = util.includes;
    var index = util.index;
    var isInput = util.isInput;
    var noop = util.noop;
    var offset = util.offset;
    var off = util.off;
    var on = util.on;
    var pointerDown = util.pointerDown;
    var pointerMove = util.pointerMove;
    var pointerUp = util.pointerUp;
    var position = util.position;
    var preventClick = util.preventClick;
    var Promise = util.Promise;
    var remove = util.remove;
    var removeClass = util.removeClass;
    var toggleClass = util.toggleClass;
    var toNodes = util.toNodes;
    var Transition = util.Transition;
    var trigger = util.trigger;
    var win = util.win;
    var within = util.within;

    UIkit.component('sortable', {

        mixins: [mixin.class],

        props: {
            group: String,
            animation: Number,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },

        defaults: {
            group: false,
            animation: 150,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false
        },

        init: function init() {
            var this$1 = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {
                    this$1.scrollY = win.pageYOffset;
                    var ref = getPos(e);
                    var x = ref.x;
                    var y = ref.y;
                    this$1.pos = {x: x, y: y};

                    fn(e);
                };
            });
        },

        events: ( obj = {}, obj[pointerDown] = 'init', obj),

        update: {

            write: function write() {

                if (this.clsEmpty) {
                    toggleClass(this.$el, this.clsEmpty, !this.$el.children.length);
                }

                if (!this.drag) {
                    return;
                }

                offset(this.drag, {top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left});

                var ref = offset(this.drag);
                var top = ref.top;
                var bottom = top + this.drag.offsetHeight;
                var scroll;

                if (top > 0 && top < this.scrollY) {
                    scroll = this.scrollY - 5;
                } else if (bottom < height(doc) && bottom > height(win) + this.scrollY) {
                    scroll = this.scrollY + 5;
                }

                scroll && setTimeout(function () { return win.scrollTo(win.scrollX, scroll); }, 5);
            }

        },

        methods: {

            init: function init(e) {

                var target = e.target;
                var button = e.button;
                var defaultPrevented = e.defaultPrevented;
                var ref = toNodes(this.$el.children).filter(function (el) { return within(target, el); });
                var placeholder = ref[0];

                if (!placeholder
                    || isInput(e.target)
                    || this.handle && !within(target, this.handle)
                    || button > 0
                    || within(target, ("." + (this.clsNoDrag)))
                    || defaultPrevented
                ) {
                    return;
                }

                e.preventDefault();

                this.touched = [this];
                this.placeholder = placeholder;
                this.origin = assign({target: target, index: index(placeholder)}, this.pos);

                on(docEl, pointerMove, this.move);
                on(docEl, pointerUp, this.end);
                on(win, 'scroll', this.scroll);

                if (!this.threshold) {
                    this.start(e);
                }

            },

            start: function start(e) {

                this.drag = append(UIkit.container, this.placeholder.outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'));

                css(this.drag, assign({
                    boxSizing: 'border-box',
                    width: this.placeholder.offsetWidth,
                    height: this.placeholder.offsetHeight
                }, css(this.placeholder, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
                attr(this.drag, 'uk-no-boot', '');
                addClass(this.drag, this.clsDrag, this.clsCustom);

                height(this.drag.firstElementChild, height(this.placeholder.firstElementChild));

                var ref = offset(this.placeholder);
                var left = ref.left;
                var top = ref.top;
                assign(this.origin, {left: left - this.pos.x, top: top - this.pos.y});

                addClass(this.placeholder, this.clsPlaceholder);
                addClass(this.$el.children, this.clsItem);
                addClass(docEl, this.clsDragState);

                trigger(this.$el, 'start', [this, this.placeholder, this.drag]);

                this.move(e);
            },

            move: function move(e) {

                if (!this.drag) {

                    if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                        this.start(e);
                    }

                    return;
                }

                this.$emit();

                var target = e.type === 'mousemove' ? e.target : doc.elementFromPoint(this.pos.x - doc.body.scrollLeft, this.pos.y - doc.body.scrollTop);

                var sortable = getSortable(target);
                var previous = getSortable(this.placeholder);
                var move = sortable !== previous;

                if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                    return;
                }

                target = sortable.$el === target.parentNode && target || toNodes(sortable.$el.children).filter(function (element) { return within(target, element); })[0];

                if (move) {
                    previous.remove(this.placeholder);
                } else if (!target) {
                    return;
                }

                sortable.insert(this.placeholder, target);

                if (!includes(this.touched, sortable)) {
                    this.touched.push(sortable);
                }

            },

            scroll: function scroll() {
                var scroll = win.pageYOffset;
                if (scroll !== this.scrollY) {
                    this.pos.y += scroll - this.scrollY;
                    this.scrollY = scroll;
                    this.$emit();
                }
            },

            end: function end(e) {

                off(docEl, pointerMove, this.move);
                off(docEl, pointerUp, this.end);
                off(win, 'scroll', this.scroll);

                if (!this.drag) {

                    if (e.type !== 'mouseup' && within(e.target, 'a[href]')) {
                        location.href = closest(e.target, 'a[href]').href;
                    }

                    return;
                }

                preventClick();

                var sortable = getSortable(this.placeholder);

                if (this === sortable) {
                    if (this.origin.index !== index(this.placeholder)) {
                        trigger(this.$el, 'moved', [this, this.placeholder]);
                    }
                } else {
                    trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                    trigger(this.$el, 'removed', [this, this.placeholder]);
                }

                trigger(this.$el, 'stop', [this]);

                remove(this.drag);
                this.drag = null;

                var classes = this.touched.map(function (sortable) { return ((sortable.clsPlaceholder) + " " + (sortable.clsItem)); }).join(' ');
                this.touched.forEach(function (sortable) { return removeClass(sortable.$el.children, classes); });

                removeClass(docEl, this.clsDragState);

            },

            insert: function insert(element, target) {
                var this$1 = this;


                addClass(this.$el.children, this.clsItem);

                var insert = function () {

                    if (target) {

                        if (!within(element, this$1.$el) || isPredecessor(element, target)) {
                            before(target, element);
                        } else {
                            after(target, element);
                        }

                    } else {
                        append(this$1.$el, element);
                    }

                };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }

            },

            remove: function remove$1(element) {

                if (!within(element, this.$el)) {
                    return;
                }

                if (this.animation) {
                    this.animate(function () { return remove(element); });
                } else {
                    remove(element);
                }

            },

            animate: function animate(action) {
                var this$1 = this;


                var props = [];
                var children = toNodes(this.$el.children);
                var reset = {position: '', width: '', height: '', pointerEvents: '', top: '', left: '', bottom: '', right: ''};

                children.forEach(function (el) {
                    props.push(assign({
                        position: 'absolute',
                        pointerEvents: 'none',
                        width: el.offsetWidth,
                        height: el.offsetHeight
                    }, position(el)));
                });

                action();

                children.forEach(Transition.cancel);
                css(this.$el.children, reset);
                this.$update('update', true);
                fastdom.flush();

                css(this.$el, 'minHeight', height(this.$el));

                var positions = children.map(function (el) { return position(el); });
                Promise.all(children.map(function (el, i) { return Transition.start(css(el, props[i]), positions[i], this$1.animation); }))
                    .then(function () {
                        css(this$1.$el, 'minHeight', '');
                        css(children, reset);
                        this$1.$update('update', true);
                        fastdom.flush();
                    }, noop);

            }

        }

    });

    function getSortable(element) {
        return element && (UIkit.getComponent(element, 'sortable') || getSortable(element.parentNode));
    }

    function isPredecessor(element, target) {
        return element.parentNode === target.parentNode && index(element) > index(target);
    }

}

function plugin$12(UIkit) {
    var obj;


    if (plugin$12.installed) {
        return;
    }

    var util = UIkit.util;
    var mixin = UIkit.mixin;
    var append = util.append;
    var attr = util.attr;
    var doc = util.doc;
    var flipPosition = util.flipPosition;
    var hasAttr = util.hasAttr;
    var includes = util.includes;
    var isTouch = util.isTouch;
    var isVisible = util.isVisible;
    var matches = util.matches;
    var on = util.on;
    var pointerDown = util.pointerDown;
    var pointerEnter = util.pointerEnter;
    var pointerLeave = util.pointerLeave;
    var remove = util.remove;
    var within = util.within;

    var actives = [];

    UIkit.component('tooltip', {

        attrs: true,

        args: 'title',

        mixins: [mixin.container, mixin.togglable, mixin.position],

        props: {
            delay: Number,
            title: String
        },

        defaults: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect: function beforeConnect() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, {title: '', 'aria-expanded': false});
        },

        disconnected: function disconnected() {
            this.hide();
            attr(this.$el, {title: this._hasTitle ? this.title : null, 'aria-expanded': null});
        },

        methods: {

            show: function show() {
                var this$1 = this;


                if (includes(actives, this)) {
                    return;
                }

                actives.forEach(function (active) { return active.hide(); });
                actives.push(this);

                this._unbind = on(doc, 'click', function (e) { return !within(e.target, this$1.$el) && this$1.hide(); });

                clearTimeout(this.showTimer);

                this.tooltip = append(this.container, ("<div class=\"" + (this.clsPos) + "\" aria-hidden><div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div></div>"));

                attr(this.$el, 'aria-expanded', true);

                this.positionAt(this.tooltip, this.$el);

                this.origin = this.getAxis() === 'y' ? ((flipPosition(this.dir)) + "-" + (this.align)) : ((this.align) + "-" + (flipPosition(this.dir)));

                this.showTimer = setTimeout(function () {

                    this$1.toggleElement(this$1.tooltip, true);

                    this$1.hideTimer = setInterval(function () {

                        if (!isVisible(this$1.$el)) {
                            this$1.hide();
                        }

                    }, 150);

                }, this.delay);
            },

            hide: function hide() {

                var index = actives.indexOf(this);

                if (!~index || matches(this.$el, 'input') && this.$el === doc.activeElement) {
                    return;
                }

                actives.splice(index, 1);

                clearTimeout(this.showTimer);
                clearInterval(this.hideTimer);
                attr(this.$el, 'aria-expanded', false);
                this.toggleElement(this.tooltip, false);
                this.tooltip && remove(this.tooltip);
                this.tooltip = false;
                this._unbind();

            }

        },

        events: ( obj = {}, obj[("focus " + pointerEnter + " " + pointerDown)] = function (e) {
                if (e.type !== pointerDown || !isTouch(e)) {
                    this.show();
                }
            }, obj.blur = 'hide', obj[pointerLeave] = function (e) {
                if (!isTouch(e)) {
                    this.hide();
                }
            }, obj)

    });

}

function plugin$13(UIkit) {

    if (plugin$13.installed) {
        return;
    }

    var ref = UIkit.util;
    var addClass = ref.addClass;
    var ajax = ref.ajax;
    var matches = ref.matches;
    var noop = ref.noop;
    var on = ref.on;
    var removeClass = ref.removeClass;
    var trigger = ref.trigger;

    UIkit.component('upload', {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String,
        },

        defaults: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            maxSize: 0,
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            msgInvalidSize: 'Invalid File Size: %s Bytes Max',
            multiple: false,
            name: 'files[]',
            params: {},
            type: 'POST',
            url: '',
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
        },

        events: {

            change: function change(e) {

                if (!matches(e.target, 'input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },

            drop: function drop(e) {
                stop(e);

                var transfer = e.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                removeClass(this.$el, this.clsDragover);

                this.upload(transfer.files);
            },

            dragenter: function dragenter(e) {
                stop(e);
            },

            dragover: function dragover(e) {
                stop(e);
                addClass(this.$el, this.clsDragover);
            },

            dragleave: function dragleave(e) {
                stop(e);
                removeClass(this.$el, this.clsDragover);
            }

        },

        methods: {

            upload: function upload(files) {
                var this$1 = this;


                if (!files.length) {
                    return;
                }

                trigger(this.$el, 'upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this$1.maxSize && this$1.maxSize * 1000 < files[i].size) {
                        this$1.fail(this$1.msgInvalidSize.replace('%s', this$1.allow));
                        return;
                    }

                    if (this$1.allow && !match(this$1.allow, files[i].name)) {
                        this$1.fail(this$1.msgInvalidName.replace('%s', this$1.allow));
                        return;
                    }

                    if (this$1.mime && !match(this$1.mime, files[i].type)) {
                        this$1.fail(this$1.msgInvalidMime.replace('%s', this$1.mime));
                        return;
                    }

                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent);
                var upload = function (files) {

                    var data = new FormData();

                    files.forEach(function (file) { return data.append(this$1.name, file); });

                    for (var key in this$1.params) {
                        data.append(key, this$1.params[key]);
                    }

                    ajax(this$1.url, {
                        data: data,
                        method: this$1.type,
                        beforeSend: function (env) {

                            var xhr = env.xhr;
                            xhr.upload && on(xhr.upload, 'progress', this$1.progress);
                            ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) { return on(xhr, type.toLowerCase(), this$1[type]); }
                            );

                            this$1.beforeSend(env);

                        }
                    }).then(
                        function (xhr) {

                            this$1.complete(xhr);

                            if (chunks.length) {
                                upload(chunks.shift());
                            } else {
                                this$1.completeAll(xhr);
                            }

                        },
                        function (e) { return this$1.error(e.message); }
                    );

                };

                upload(chunks.shift());

            }

        }

    });

    function match(pattern, path) {
        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var chunk = [];
            for (var j = 0; j < size; j++) {
                chunk.push(files[i + j]);
            }
            chunks.push(chunk);
        }
        return chunks;
    }

    function stop(e) {
        e.preventDefault();
        e.stopPropagation();
    }

}

UIkit$2.use(plugin);
UIkit$2.use(plugin$1);
UIkit$2.use(plugin$2);
UIkit$2.use(plugin$6);
UIkit$2.use(plugin$7);
UIkit$2.use(plugin$9);
UIkit$2.use(plugin$10);
UIkit$2.use(plugin$11);
UIkit$2.use(plugin$12);
UIkit$2.use(plugin$13);

{
    boot(UIkit$2);
}

return UIkit$2;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_js__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__locales_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_bar__ = __webpack_require__("./components/search-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_category__ = __webpack_require__("./containers/category.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page__ = __webpack_require__("./components/page.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/pages/index.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = Object(__WEBPACK_IMPORTED_MODULE_7__components_page__["a" /* default */])(Index);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/nicolas/Sites/greatsaigon/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/auth/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_LOAD; });
/* unused harmony export getAuth */
/* unused harmony export setLoad */
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

// src/containers/login/actions.jsx

var LOGIN_LOAD = 'LOGIN_LOAD';

function getAuth(creds) {}

function setLoad() {
    return {
        type: LOGIN_LOAD,
        isFetching: true
    };
}
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(LOGIN_LOAD, 'LOGIN_LOAD', '/Users/nicolas/Sites/greatsaigon/redux/auth/actions.js');
    reactHotLoader.register(getAuth, 'getAuth', '/Users/nicolas/Sites/greatsaigon/redux/auth/actions.js');
    reactHotLoader.register(setLoad, 'setLoad', '/Users/nicolas/Sites/greatsaigon/redux/auth/actions.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/auth/authReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./redux/auth/actions.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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

var _default = authReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, 'initialState', '/Users/nicolas/Sites/greatsaigon/redux/auth/authReducer.js');
    reactHotLoader.register(authReducer, 'authReducer', '/Users/nicolas/Sites/greatsaigon/redux/auth/authReducer.js');
    reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/redux/auth/authReducer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/data/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_LIST; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FETCH_LIST, 'FETCH_LIST', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(FETCH_OBJECT, 'FETCH_OBJECT', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(RESET_DATA, 'RESET_DATA', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(LOADING, 'LOADING', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(getList, 'getList', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(getSingleObject, 'getSingleObject', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(setLoading, 'setLoading', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(setList, 'setList', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(setSingleObject, 'setSingleObject', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    reactHotLoader.register(resetData, 'resetData', '/Users/nicolas/Sites/greatsaigon/redux/data/actions.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/data/dataReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./redux/data/actions.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();






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

var _default = dataReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, 'initialState', '/Users/nicolas/Sites/greatsaigon/redux/data/dataReducer.js');
    reactHotLoader.register(dataReducer, 'dataReducer', '/Users/nicolas/Sites/greatsaigon/redux/data/dataReducer.js');
    reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/redux/data/dataReducer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/menu/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_FETCH; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getMenu;
/* unused harmony export setMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(MENU_FETCH, 'MENU_FETCH', '/Users/nicolas/Sites/greatsaigon/redux/menu/actions.js');
    reactHotLoader.register(getMenu, 'getMenu', '/Users/nicolas/Sites/greatsaigon/redux/menu/actions.js');
    reactHotLoader.register(setMenu, 'setMenu', '/Users/nicolas/Sites/greatsaigon/redux/menu/actions.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/menu/menuReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./redux/menu/actions.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



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

var _default = menuReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, 'initialState', '/Users/nicolas/Sites/greatsaigon/redux/menu/menuReducer.js');
    reactHotLoader.register(menuReducer, 'menuReducer', '/Users/nicolas/Sites/greatsaigon/redux/menu/menuReducer.js');
    reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/redux/menu/menuReducer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/reducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authReducer__ = __webpack_require__("./redux/auth/authReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menuReducer__ = __webpack_require__("./redux/menu/menuReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_dataReducer__ = __webpack_require__("./redux/data/dataReducer.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();






var _default = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
    authReducer: __WEBPACK_IMPORTED_MODULE_1__auth_authReducer__["a" /* default */],
    menuReducer: __WEBPACK_IMPORTED_MODULE_2__menu_menuReducer__["a" /* default */],
    dataReducer: __WEBPACK_IMPORTED_MODULE_3__data_dataReducer__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/redux/reducers.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./redux/reducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_actions__ = __webpack_require__("./redux/menu/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_actions__ = __webpack_require__("./redux/data/actions.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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

var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(logger, __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)));

store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__menu_actions__["b" /* getMenu */])());

var _default = store;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(logger, 'logger', '/Users/nicolas/Sites/greatsaigon/redux/store.js');
    reactHotLoader.register(store, 'store', '/Users/nicolas/Sites/greatsaigon/redux/store.js');
    reactHotLoader.register(_default, 'default', '/Users/nicolas/Sites/greatsaigon/redux/store.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static-data/static-data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = StaticData;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StaticData, "StaticData", "/Users/nicolas/Sites/greatsaigon/static-data/static-data.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/static-data/static-data.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map