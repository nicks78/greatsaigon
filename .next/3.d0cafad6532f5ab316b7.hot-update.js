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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__locales_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_bar__ = __webpack_require__("./components/search-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_category__ = __webpack_require__("./containers/category.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page__ = __webpack_require__("./components/page.js");
var _this = this,
    _jsxFileName = "/Users/nicolas/Sites/greatsaigon/pages/index.js";




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

//pages/index.js

// Redux
// import Page from '../components/page'
// import {connect} from 'react-redux'









var Index = function Index(props) {
  // Tmp data
  var carousels = ["http://hungthinhsale.com/wp-content/uploads/2016/08/Mia.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQyL5aaNmbu5EwHmt1u6gDpkkG7QOg3LwR4Kh7zSTtDflrmLN", "http://blisssaigon.com/wp-content/uploads/2018/05/Feature-event.jpg"];

  // Previous Background
  // style={{backgroundImage: 'url(https://c1.staticflickr.com/9/8148/7644863446_5bace673c9_b.jpg)'}}

  var handleSearch = function handleSearch(directory, where, what) {
    var as = "/search-page/" + (directory || 'food-and-drink') + "/" + (where || '1') + "/" + (what || 'restaurant');
    var href = "/search-page/?directory=" + (directory || 'food-and-drink') + "/?where=" + (where || '1') + "/?what=" + (what || 'restaurant');
    Router.replace(href, as, { shallow: true });
    var api = "venues/search?items=1000&page=1&what=" + what + "&directory=" + directory + "&where=" + where;
    _this.props.getList(api);
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-883210753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__components_layout_js__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-883210753" + " " + "header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
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
            lineNumber: 41
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-883210753" + " " + "wrapper-search-bar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_search_bar__["a" /* default */], { images: carousels, handleSearch: handleSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
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
            lineNumber: 55
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-883210753" + " " + "uk-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "h2",
            {
              className: "jsx-883210753" + " " + "hero_title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            __WEBPACK_IMPORTED_MODULE_3__locales_en_json___default.a.title_event
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
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: "jsx-883210753" + " " + "uk-slideshow-items",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              carousels.map(function (carousel, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { key: index, className: "jsx-883210753",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: carousel, alt: "", "data-uk-cover": true, className: "jsx-883210753",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
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
                  lineNumber: 76
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                className: "jsx-883210753" + " " + "fas fa-caret-left fa-5x",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
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
                  lineNumber: 84
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                className: "jsx-883210753" + " " + "fas fa-caret-right fa-5x",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
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
            lineNumber: 96
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_category__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "883210753",
      css: ".event{padding-top:40px;padding-bottom:40px;background-color:#f50633;margin-top:-50px;}.hero_title{color:#fff;font-weight:normal;text-align:center;}.uk-position-center-left{color:white;}.uk-position-center-right{color:white;}.slider-image{background-size:cover;background-position:center;}.wrapper-search-bar{text-align:center;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;bottom:350px;}.content{margin:1em auto;max-width:1080px !important;}.CarouselHome{padding:2em 0em 2em 0em;}@media (max-width:960px){.content{margin:0 auto;width:100%;}.header{height:auto;padding-bottom:1em;}.wrapper-search-bar{width:100%;padding-top:1em;bottom:0px;}.event{height:300px;margin:0px;}.CarouselHome{padding:0em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HeUIsQUFHNEIsQUFNTixBQUtDLEFBR0EsQUFHVSxBQUlKLEFBUUYsQUFJUSxBQUlSLEFBSUYsQUFJRCxBQUtFLEFBSUQsV0EvQ0ssQUF1Q0QsQ0FsQ3BCLEFBR0EsQUEyQnVCLEFBYXJCLENBSmEsQ0FiQSxFQVJlLENBN0JSLENBcUJULElBSmdCLEVBZ0I3QixBQWtCRSxDQWJBLEVBUWEsRUF4QkEsQ0FmSyxDQW1DbEIsTUF6Q3lCLENBOEN6QixNQWpCRixJQXRCQSxDQVVBLGFBaEJtQixpQkFDbkIsd0JBb0JtQiwrREFDQyxrQkFDTCxhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiLy9wYWdlcy9pbmRleC5qc1xuXG4vLyBSZWR1eFxuLy8gaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJ1xuLy8gaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQuanNcIjtcblxuaW1wb3J0IGxvY2FsZXMgZnJvbSBcIi4uL2xvY2FsZXMvZW4uanNvblwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWFyY2gtYmFyXCI7XG5cbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vY29udGFpbmVycy9jYXRlZ29yeVwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgLy8gVG1wIGRhdGFcbiAgY29uc3QgY2Fyb3VzZWxzID0gW1xuICAgIFwiaHR0cDovL2h1bmd0aGluaHNhbGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA4L01pYS5wbmdcIixcbiAgICBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1N5UXlMNWFhTm1idTVFd0htdDF1NmdEcGtrRzdRT2czTHdSNEtoN3pTVHREZmxybUxOXCIsXG4gICAgXCJodHRwOi8vYmxpc3NzYWlnb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1L0ZlYXR1cmUtZXZlbnQuanBnXCJcbiAgXTtcblxuICAvLyBQcmV2aW91cyBCYWNrZ3JvdW5kXG4gIC8vIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vYzEuc3RhdGljZmxpY2tyLmNvbS85LzgxNDgvNzY0NDg2MzQ0Nl81YmFjZTY3M2M5X2IuanBnKSd9fVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICggZGlyZWN0b3J5LCB3aGVyZSwgd2hhdCApID0+IHtcbiAgICB2YXIgYXMgPSBgL3NlYXJjaC1wYWdlLyR7ZGlyZWN0b3J5IHx8ICdmb29kLWFuZC1kcmluaycgfS8ke3doZXJlIHx8ICcxJ30vJHt3aGF0IHx8ICdyZXN0YXVyYW50J31gXG4gICAgdmFyIGhyZWYgPSBgL3NlYXJjaC1wYWdlLz9kaXJlY3Rvcnk9JHtkaXJlY3RvcnkgfHwgJ2Zvb2QtYW5kLWRyaW5rJyB9Lz93aGVyZT0ke3doZXJlIHx8ICcxJ30vP3doYXQ9JHt3aGF0IHx8ICdyZXN0YXVyYW50J31gXG4gICAgUm91dGVyLnJlcGxhY2UoaHJlZiwgYXMsIHtzaGFsbG93OiB0cnVlfSlcbiAgICB2YXIgYXBpID0gYHZlbnVlcy9zZWFyY2g/aXRlbXM9MTAwMCZwYWdlPTEmd2hhdD0ke1xuICAgICAgd2hhdFxuICAgIH0mZGlyZWN0b3J5PSR7ZGlyZWN0b3J5fSZ3aGVyZT0ke3doZXJlfWA7XG4gICAgdGhpcy5wcm9wcy5nZXRMaXN0KGFwaSk7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHpJbmRleDogXCItMVwiLCBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX1cbiAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICBsb29wXG4gICAgICAgICAgICBwb3N0ZXI9XCJodHRwczovL2dyZWF0c2FpZ29uLmNvbS9WaWRlb3MvVGh1bWJuYWlsX1NreWxpbmUuanBnXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3JlYXRzYWlnb24uY29tL2NvbnRlbnQvdmlkZW9zL2ZpbmFsc2t5bGluZS0zLm1wNFwiXG4gICAgICAgICAgICBhdXRvUGxheT1cImF1dG9wbGF5XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLXNlYXJjaC1iYXJcIj5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgaW1hZ2VzPXtjYXJvdXNlbHN9IGhhbmRsZVNlYXJjaD17IGhhbmRsZVNlYXJjaCB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlcm9fdGl0bGVcIj57bG9jYWxlcy50aXRsZV9ldmVudH08L2gyPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgXCIwIDExcHggMjJweCByZ2JhKDAsIDAsIDAsIDAuMjApLCAwIDdweCA3cHggcmdiYSgwLCAwLCAwLCAwLjI0KVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLXJlbGF0aXZlIHVrLXZpc2libGUtdG9nZ2xlIHVrLWxpZ2h0IFwiXG4gICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVzaG93PVwiYXV0b3BsYXk6IHRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNsaWRlc2hvdy1pdGVtc1wiPlxuICAgICAgICAgICAgICAgIHtjYXJvdXNlbHMubWFwKChjYXJvdXNlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nhcm91c2VsfSBhbHQ9XCJcIiBkYXRhLXVrLWNvdmVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1jZW50ZXItbGVmdCB1ay1wb3NpdGlvbi1zbWFsbFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtcHJldmlvdXNcbiAgICAgICAgICAgICAgICBkYXRhLXVrLXNsaWRlc2hvdy1pdGVtPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhcmV0LWxlZnQgZmEtNXhcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLWNlbnRlci1yaWdodCB1ay1wb3NpdGlvbi1zbWFsbFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtbmV4dFxuICAgICAgICAgICAgICAgIGRhdGEtdWstc2xpZGVzaG93LWl0ZW09XCJuZXh0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJldC1yaWdodCBmYS01eFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxDYXRlZ29yeSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmV2ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNjMzO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvX3RpdGxlIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudWstcG9zaXRpb24tY2VudGVyLWxlZnQge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudWstcG9zaXRpb24tY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlci1pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXItc2VhcmNoLWJhciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvdHRvbTogMzUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuQ2Fyb3VzZWxIb21lIHtcbiAgICAgICAgICBwYWRkaW5nOiAyZW0gMGVtIDJlbSAwZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlci1zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXZlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2Fyb3VzZWxIb21lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIEdldCBhbGwgZGF0YSBmb3IgY2hpbGQgY29tcG9uZW50c1xuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICAgIG1lbnU6IHN0YXRlLm1lbnVSZWR1Y2VyLFxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=pages/index.js */"
    })
  );
};

// Get all data for child components
// const mapStateToProps = (state) => {

//   return {
//       menu: state.menuReducer,
//   }
// }

var _default = Object(__WEBPACK_IMPORTED_MODULE_6__components_page__["a" /* default */])(Index);

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
//# sourceMappingURL=3.d0cafad6532f5ab316b7.hot-update.js.map