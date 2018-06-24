webpackHotUpdate(3,{

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

  // Previous Background
  // style={{backgroundImage: 'url(https://c1.staticflickr.com/9/8148/7644863446_5bace673c9_b.jpg)'}}

  var handleSearch = function handleSearch(directory, where, what) {
    var as = "/search-page/" + (directory || 'food-and-drink') + "/" + (where || '1') + "/" + (what || 'restaurant');
    var href = "/search-page?directory=" + (directory || 'food-and-drink') + "/?where=" + (where || '1') + "?what=" + (what || 'restaurant');
    __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(href, as, { shallow: true });
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-883210753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__components_layout_js__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-883210753" + " " + "header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
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
            lineNumber: 31
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-883210753" + " " + "wrapper-search-bar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_search_bar__["a" /* default */], { what: "1", where: "", directory: "1", images: carousels, handleSearch: handleSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
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
            lineNumber: 45
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-883210753" + " " + "uk-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "h2",
            {
              className: "jsx-883210753" + " " + "hero_title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
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
                lineNumber: 49
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: "jsx-883210753" + " " + "uk-slideshow-items",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              carousels.map(function (carousel, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { key: index, className: "jsx-883210753",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: carousel, alt: "", "data-uk-cover": true, className: "jsx-883210753",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
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
                  lineNumber: 66
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                className: "jsx-883210753" + " " + "fas fa-caret-left fa-5x",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
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
                  lineNumber: 74
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                className: "jsx-883210753" + " " + "fas fa-caret-right fa-5x",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
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
            lineNumber: 86
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_category__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "883210753",
      css: ".event{padding-top:40px;padding-bottom:40px;background-color:#f50633;margin-top:-50px;}.hero_title{color:#fff;font-weight:normal;text-align:center;}.uk-position-center-left{color:white;}.uk-position-center-right{color:white;}.slider-image{background-size:cover;background-position:center;}.wrapper-search-bar{text-align:center;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;bottom:350px;}.content{margin:1em auto;max-width:1080px !important;}.CarouselHome{padding:2em 0em 2em 0em;}@media (max-width:960px){.content{margin:0 auto;width:100%;}.header{height:auto;padding-bottom:1em;}.wrapper-search-bar{width:100%;padding-top:1em;bottom:0px;}.event{height:300px;margin:0px;}.CarouselHome{padding:0em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGeUIsQUFHNEIsQUFNTixBQUtDLEFBR0EsQUFHVSxBQUlKLEFBUUYsQUFJUSxBQUlSLEFBSUYsQUFJRCxBQUtFLEFBSUQsV0EvQ0ssQUF1Q0QsQ0FsQ3BCLEFBR0EsQUEyQnVCLEFBYXJCLENBSmEsQ0FiQSxFQVJlLENBN0JSLENBcUJULElBSmdCLEVBZ0I3QixBQWtCRSxDQWJBLEVBUWEsRUF4QkEsQ0FmSyxDQW1DbEIsTUF6Q3lCLENBOEN6QixNQWpCRixJQXRCQSxDQVVBLGFBaEJtQixpQkFDbkIsd0JBb0JtQiwrREFDQyxrQkFDTCxhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiLy9wYWdlcy9pbmRleC5qc1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQuanNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgbG9jYWxlcyBmcm9tIFwiLi4vbG9jYWxlcy9lbi5qc29uXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaC1iYXJcIjtcblxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb250YWluZXJzL2NhdGVnb3J5XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xuICAvLyBUbXAgZGF0YVxuICBjb25zdCBjYXJvdXNlbHMgPSBbXG4gICAgXCJodHRwOi8vaHVuZ3RoaW5oc2FsZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDgvTWlhLnBuZ1wiLFxuICAgIFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU3lReUw1YWFObWJ1NUV3SG10MXU2Z0Rwa2tHN1FPZzNMd1I0S2g3elNUdERmbHJtTE5cIixcbiAgICBcImh0dHA6Ly9ibGlzc3NhaWdvbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvRmVhdHVyZS1ldmVudC5qcGdcIlxuICBdO1xuXG4gIC8vIFByZXZpb3VzIEJhY2tncm91bmRcbiAgLy8gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9jMS5zdGF0aWNmbGlja3IuY29tLzkvODE0OC83NjQ0ODYzNDQ2XzViYWNlNjczYzlfYi5qcGcpJ319XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCBkaXJlY3RvcnksIHdoZXJlLCB3aGF0ICkgPT4ge1xuICAgIHZhciBhcyA9IGAvc2VhcmNoLXBhZ2UvJHtkaXJlY3RvcnkgfHwgJ2Zvb2QtYW5kLWRyaW5rJyB9LyR7d2hlcmUgfHwgJzEnfS8ke3doYXQgfHwgJ3Jlc3RhdXJhbnQnfWBcbiAgICB2YXIgaHJlZiA9IGAvc2VhcmNoLXBhZ2U/ZGlyZWN0b3J5PSR7ZGlyZWN0b3J5IHx8ICdmb29kLWFuZC1kcmluaycgfS8/d2hlcmU9JHt3aGVyZSB8fCAnMSd9P3doYXQ9JHt3aGF0IHx8ICdyZXN0YXVyYW50J31gXG4gICAgUm91dGVyLnB1c2goaHJlZiwgYXMsIHtzaGFsbG93OnRydWV9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgekluZGV4OiBcIi0xXCIsIG1hcmdpbkJvdHRvbTogXCIwcHhcIiB9fVxuICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgIHBvc3Rlcj1cImh0dHBzOi8vZ3JlYXRzYWlnb24uY29tL1ZpZGVvcy9UaHVtYm5haWxfU2t5bGluZS5qcGdcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ncmVhdHNhaWdvbi5jb20vY29udGVudC92aWRlb3MvZmluYWxza3lsaW5lLTMubXA0XCJcbiAgICAgICAgICAgIGF1dG9QbGF5PVwiYXV0b3BsYXlcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItc2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgPFNlYXJjaEJhciB3aGF0PVwiMVwiIHdoZXJlPVwiXCIgZGlyZWN0b3J5PVwiMVwiIGltYWdlcz17Y2Fyb3VzZWxzfSBoYW5kbGVTZWFyY2g9eyBoYW5kbGVTZWFyY2ggfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZXJvX3RpdGxlXCI+e2xvY2FsZXMudGl0bGVfZXZlbnR9PC9oMj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgIFwiMCAxMXB4IDIycHggcmdiYSgwLCAwLCAwLCAwLjIwKSwgMCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNClcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1yZWxhdGl2ZSB1ay12aXNpYmxlLXRvZ2dsZSB1ay1saWdodCBcIlxuICAgICAgICAgICAgICBkYXRhLXVrLXNsaWRlc2hvdz1cImF1dG9wbGF5OiB0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zbGlkZXNob3ctaXRlbXNcIj5cbiAgICAgICAgICAgICAgICB7Y2Fyb3VzZWxzLm1hcCgoY2Fyb3VzZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJvdXNlbH0gYWx0PVwiXCIgZGF0YS11ay1jb3ZlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstcG9zaXRpb24tY2VudGVyLWxlZnQgdWstcG9zaXRpb24tc21hbGxcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBkYXRhLXVrLXNsaWRlbmF2LXByZXZpb3VzXG4gICAgICAgICAgICAgICAgZGF0YS11ay1zbGlkZXNob3ctaXRlbT1cInByZXZpb3VzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1sZWZ0IGZhLTV4XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1jZW50ZXItcmlnaHQgdWstcG9zaXRpb24tc21hbGxcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBkYXRhLXVrLXNsaWRlbmF2LW5leHRcbiAgICAgICAgICAgICAgICBkYXRhLXVrLXNsaWRlc2hvdy1pdGVtPVwibmV4dFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtcmlnaHQgZmEtNXhcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8Q2F0ZWdvcnkgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MDYzMztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVyb190aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnVrLXBvc2l0aW9uLWNlbnRlci1sZWZ0IHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnVrLXBvc2l0aW9uLWNlbnRlci1yaWdodCB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zbGlkZXItaW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyLXNlYXJjaC1iYXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3R0b206IDM1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLkNhcm91c2VsSG9tZSB7XG4gICAgICAgICAgcGFkZGluZzogMmVtIDBlbSAyZW0gMGVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXItc2VhcmNoLWJhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV2ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLkNhcm91c2VsSG9tZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBHZXQgYWxsIGRhdGEgZm9yIGNoaWxkIGNvbXBvbmVudHNcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgICBtZW51OiBzdGF0ZS5tZW51UmVkdWNlcixcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
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

/***/ })

})
//# sourceMappingURL=3.828beb7fb3405231fe03.hot-update.js.map