webpackHotUpdate(3,{

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

/***/ })

})
//# sourceMappingURL=3.43bf7e979810029682d8.hot-update.js.map