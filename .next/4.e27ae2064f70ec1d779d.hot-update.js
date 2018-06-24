webpackHotUpdate(4,{

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

/***/ "./components/cards/card-venue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_constant__ = __webpack_require__("./api/constant.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/cards/card-venue.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





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

var _default = CardVenue;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(shortDesc, "shortDesc", "/Users/nicolas/Sites/greatsaigon/components/cards/card-venue.js");
  reactHotLoader.register(CardVenue, "CardVenue", "/Users/nicolas/Sites/greatsaigon/components/cards/card-venue.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/cards/card-venue.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/map/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("./node_modules/recompose/es/Recompose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps__ = __webpack_require__("./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/map/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return MyFancyComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

var _default = MyFancyComponent;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(marker, "marker", "/Users/nicolas/Sites/greatsaigon/components/map/index.js");
  reactHotLoader.register(MyMapComponent, "MyMapComponent", "/Users/nicolas/Sites/greatsaigon/components/map/index.js");
  reactHotLoader.register(MyFancyComponent, "MyFancyComponent", "/Users/nicolas/Sites/greatsaigon/components/map/index.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/map/index.js");
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
    __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.replace(href, as, { shallow: true });
    window.location.href = "" + __WEBPACK_IMPORTED_MODULE_2__api_constant__["d" /* PUBLIC_URL */] + as;
  };

  var loopMenu = function loopMenu(menu, x, y) {
    return menu.slice(x, y).map(function (x, index) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { key: index, style: { marginBottom: "20px", color: "#000" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
          {
            as: "/search-page/" + x.slug + "/district-1/1",
            href: "/search-page?directory=" + x.slug + "&where=1&what=1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            { className: "directories", __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            x.name,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { className: "uk-float-right", "data-uk-icon": "check", __source: {
                fileName: _jsxFileName,
                lineNumber: 24
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
                lineNumber: 32
              }
            },
            z.name,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
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
        lineNumber: 51
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      { "data-uk-grid": true, className: "jsx-449868446" + " " + "uk-child-width-1-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        },
        loopMenu(menu, 0, 3)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        loopMenu(menu, 3, 7)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        },
        loopMenu(menu, 7, 8)
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { paddingLeft: "30px" }, className: "jsx-449868446",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        loopMenu(menu, 8)
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "449868446",
      css: ".directories{border-bottom:1px solid red;}p:hover{cursor:pointer;}.directories{-webkit-transition:0.2s linear;transition:0.2s linear;}.directories:hover{color:red;}.uk-button-text::before{border-bottom:1px solid red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbnMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V5QixBQUd1QyxBQUdiLEFBR1EsQUFHYixBQUdrQixVQUY5QixLQU5BLGFBSEEsQUFZQSwwQkFOQSIsImZpbGUiOiJjb21wb25lbnRzL25hdmlnYXRpb25zL2Ryb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQVUJMSUNfVVJMfSBmcm9tICcuLi8uLi9hcGkvY29uc3RhbnQnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBEcm9wZG93biA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBtZW51IH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoIGhyZWYsIGFzICkgPT4ge1xuICAgIFJvdXRlci5yZXBsYWNlKGhyZWYsIGFzLCB7c2hhbGxvdzp0cnVlfSlcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke1BVQkxJQ19VUkx9JHthc31gXG4gIH1cblxuICBjb25zdCBsb29wTWVudSA9IChtZW51LCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIG1lbnUuc2xpY2UoeCwgeSkubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiLCBjb2xvcjogXCIjMDAwXCIgfX0+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGFzPXtgL3NlYXJjaC1wYWdlLyR7eC5zbHVnfS9kaXN0cmljdC0xLzFgfVxuICAgICAgICAgICAgaHJlZj17YC9zZWFyY2gtcGFnZT9kaXJlY3Rvcnk9JHsgeC5zbHVnIH0md2hlcmU9MSZ3aGF0PTFgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpcmVjdG9yaWVzXCI+XG4gICAgICAgICAgICAgIHt4Lm5hbWV9XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVrLWZsb2F0LXJpZ2h0XCIgZGF0YS11ay1pY29uPVwiY2hlY2tcIiAvPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHt4LnN1YmRpcmVjdG9yeS5tYXAoKHosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgYXMgPSBgL3NlYXJjaC1wYWdlLyR7eC5zbHVnfS8xLyR7ei5zbHVnfWA7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGAvc2VhcmNoLXBhZ2U/ZGlyZWN0b3J5PSR7IHguc2x1ZyB9JndoZXJlPTEmd2hhdD0ke3ouc2x1Z31gO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVTZWFyY2goaHJlZiwgYXMpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uLXRleHRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbjogXCIwcHggMHB4IDBweCAyMHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt6Lm5hbWV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInVrLWFuaW1hdGlvbi1zbGlkZS10b3Atc21hbGxcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMmVtXCIsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgYm94U2hhZG93OiBcIjVweCA1cHggMThweCAwcHggIzg4ODg4OFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY2hpbGQtd2lkdGgtMS00XCIgZGF0YS11ay1ncmlkPlxuICAgICAgICA8ZGl2Pntsb29wTWVudShtZW51LCAwLCAzKX08L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjMwcHhcIiB9fT57bG9vcE1lbnUobWVudSwgMywgNyl9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMzBweFwiIH19Pntsb29wTWVudShtZW51LCA3LCA4KX08L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjMwcHhcIiB9fT57bG9vcE1lbnUobWVudSwgOCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5kaXJlY3RvcmllcyB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICAgICBwOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRpcmVjdG9yaWVzIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAuZGlyZWN0b3JpZXM6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnVrLWJ1dHRvbi10ZXh0OjpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19 */\n/*@ sourceURL=components/navigations/dropdown.js */"
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


      console.log("SEARCH", what);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3934959866' + ' ' + 'wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'directory', onChange: this.handleSelect, value: directory, className: 'jsx-3934959866' + ' ' + 'uk-select select-directory',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, style: { width: "100%" }, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
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
                  lineNumber: 109
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
              lineNumber: 119
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
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
                  lineNumber: 123
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
              lineNumber: 130
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
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
                  lineNumber: 134
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
              lineNumber: 141
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3934959866' + ' ' + 'uk-inline',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 143
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', (_React$createElement = { className: 'uk-form-icon', style: { color: 'white' } }, _defineProperty(_React$createElement, 'className', 'jsx-3934959866' + ' ' + 'uk-form-icon uk-form-icon-flip fas fa-search fa-lg'), _defineProperty(_React$createElement, '__source', {
              fileName: _jsxFileName,
              lineNumber: 144
            }), _React$createElement)),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onClick: function onClick() {
                _this3.props.handleSearch(directory, where, what);
              }, type: 'submit', value: __WEBPACK_IMPORTED_MODULE_4__locales_en_json___default.a.search, className: 'jsx-3934959866' + ' ' + 'submit uk-input',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3934959866',
          css: 'body{margin:0px;}.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;left:25%;box-shadow:8px 8px 20px 8px rgba(0,0,0,0.2);border-radius:25px;background-color:none;width:50%;}.uk-input{height:50px;}.uk-select{height:50px !important;}.fas{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.search input{color:white;background-color:#f50633;border-color:red;}.search input:hover,.search input:focus{background-color:#f6a406;border-color:#f6a406;cursor:pointer;}@media(max-width:960px){.wrapper{width:100%;left:0%;margin-top:5px;display:grid;grid-template-columns:1fr;}.submit{border-bottom-right-radius:0px;border-top-right-radius:0px;}.select-directory{border-bottom-left-radius:0px;border-top-left-radius:0px;}.uk-grid-margin{margin-top:0px;}.search .uk-inline{width:100%;}}@media(min-width:960px){.wrapper .uk-inline:nth-child(2),.wrapper .uk-inline:nth-child(3){padding-left:1px;}.select-directory{border-bottom-left-radius:24px;border-top-left-radius:24px;}.submit{border-bottom-right-radius:24px;border-top-right-radius:24px;}.search{padding-left:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSnFDLEFBR2tDLEFBR0UsQUFTRCxBQUdXLEFBR0gsQUFHUixBQUthLEFBT1osQUFPb0IsQUFJRCxBQUlmLEFBR0osQUFPUSxBQUdZLEFBSUMsQUFJZixXQXBFckIsQUFpQ1ksQUFrQlYsQ0F2Q0YsQUFTMkIsR0EyQnpCLEVBVUEsQUFXQSxFQW5DaUIsSUFuQm5CLEVBV3VCLEtBa0JRLENBSkMsQUFxQkEsQ0FJQyxFQTlCaEIsR0FiRSxTQUtGLENBU2EsT0FiOUIsR0FzQkUsRUFKQSxBQXFCQSxFQWxDRixBQXNDRSxZQTdCQSxDQWxDa0Isa0JBQ1QsU0FDbUMsQ0FhOUMsMkNBWnFCLG1CQUNHLHNCQUNaLFVBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gtYmFyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBUElfRU5EUE9JTlR9IGZyb20gJy4uLy4uL2FwaS9jb25zdGFudCdcbmltcG9ydCBTdGF0aWNEYXRhIGZyb20gJy4uLy4uL3N0YXRpYy1kYXRhL3N0YXRpYy1kYXRhJ1xuaW1wb3J0IGxvY2FsZXMgZnJvbSAnLi4vLi4vbG9jYWxlcy9lbi5qc29uJ1xuXG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2hhdDogJzEnLFxuICAgICAgd2hlcmU6ICcnLFxuICAgICAgZGlyZWN0b3J5OiAnMScsXG4gICAgICBkcm9wX3doZXJlOiBTdGF0aWNEYXRhLkRpc3RyaWN0LFxuICAgICAgZHJvcF93aGF0OiBbXSxcbiAgICAgIGRyb3BfZGlyZWN0b3J5OiBbXSxcbiAgICAgIHJlc3VsdDogW10sXG4gICAgICBkaXJlY3RvcmllczogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdoZXJlOiB0aGlzLnByb3BzLndoZXJlIHx8ICcnLFxuICAgICAgd2hhdDogdGhpcy5wcm9wcy53aGF0IHx8ICcxJyxcbiAgICAgIGRpcmVjdG9yeTogdGhpcy5wcm9wcy5kaXJlY3RvcnkgfHwgJzEnXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdoZXJlOiBuZXh0UHJvcHMud2hlcmUgfHwgJycsXG4gICAgICB3aGF0OiBuZXh0UHJvcHMud2hhdCB8fCAnMScsXG4gICAgICBkaXJlY3Rvcnk6IG5leHRQcm9wcy5kaXJlY3RvcnkgfHwgJzEnXG4gICAgfSlcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAvLyBOT1QgWUVUIFdPUktJTkcgLyBUTyBCRSBGSVhFRCBcbiAgICBmZXRjaChgJHtBUElfRU5EUE9JTlR9ZGlyZWN0b3JpZXNgLCB7XG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9KVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHZhciBkcm9wX2RpcmVjdG9yeSA9IGRhdGEuZmlsdGVyKCAocmVzKSA9PiB7IHJldHVybiByZXMuc2x1ZyB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICBkaXJlY3RvcmllczogZGF0YSxcbiAgICAgICAgZHJvcF9kaXJlY3Rvcnk6IGRyb3BfZGlyZWN0b3J5LFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcF93aGF0OiB0aGlzLmdldFdoYXRMaXN0KHRoaXMuc3RhdGUuZGlyZWN0b3J5KSB9KVxuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cbiAgICBcbiAgICBnZXRXaGF0TGlzdCA9IChjYXRlZ29yeSkgPT4ge1xuXG4gICAgICB2YXIgZGlyID0gdGhpcy5zdGF0ZS5kaXJlY3RvcmllcztcbiAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGRpci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGNhdGVnb3J5ID09PSBkaXJbaV0uc2x1Zyl7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkgPSBkaXJbaV0uc3ViZGlyZWN0b3J5ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuXG4gICAgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgICAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdmFyIGRpciA9IG5hbWUgPT09ICdkaXJlY3RvcnknID8gdHJ1ZSA6IGZhbHNlXG5cbiAgICAgICAgLy8gQ2FsbCBmdW5jdGlvbiB0byB1cGRhdGUgZHJvcGRvd24tc2VsZWN0LXdoYXRcbiAgICAgICAgaWYoIGRpciApe1xuICAgICAgICAgIHZhciB3aGF0ID0gdGhpcy5nZXRXaGF0TGlzdCh2YWx1ZSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hhdDogJzEnLFxuICAgICAgICAgICAgICB3aGVyZTogJydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUsIGRyb3Bfd2hhdDogZGlyID8gd2hhdCA6IHRoaXMuc3RhdGUuZHJvcF93aGF0IH0pXG4gICAgfSAgICAgIFxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCB7IHdoZXJlLCB3aGF0LCBkaXJlY3RvcnksIGRyb3Bfd2hlcmUsIGRyb3Bfd2hhdCwgZHJvcF9kaXJlY3RvcnksIHJlc3VsdCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hcIiwgd2hhdClcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgey8qIENBVEVHT1JZICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRpcmVjdG9yeVwiIGNsYXNzTmFtZT1cInVrLXNlbGVjdCBzZWxlY3QtZGlyZWN0b3J5XCIgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdCB9IHZhbHVlPXsgZGlyZWN0b3J5IH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBkaXNhYmxlZCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCJ9fT5CYXIvUmVzdGF1cmFudC9OaWdodGxpZmUgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF9kaXJlY3RvcnkubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17eC5zbHVnfSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3gubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgey8qIFdIRVJFICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2hlcmVcIiBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlU2VsZWN0IH0gdmFsdWU9e3doZXJlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+V2hlcmUgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bfd2hlcmUubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt4LnNsdWd9IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57eC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBXSEFUICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ3aGF0XCIgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdCB9IHZhbHVlPXt3aGF0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIGRpc2FibGVkPldoYXQgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bfd2hhdC5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3guc2x1Z30gc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19Pnt4Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7LyogU0VBUkNIICovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWstZm9ybS1pY29uXCIgIGNsYXNzTmFtZT1cInVrLWZvcm0taWNvbiB1ay1mb3JtLWljb24tZmxpcCBmYXMgZmEtc2VhcmNoIGZhLWxnXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+PC9pPlxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaCggZGlyZWN0b3J5LCB3aGVyZSwgd2hhdCApIH0gfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9eyBsb2NhbGVzLnNlYXJjaCB9IGNsYXNzTmFtZT1cInN1Ym1pdCB1ay1pbnB1dFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHsgXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudWstaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC51ay1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mYXMge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNjMzO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaCBpbnB1dDpob3ZlciwgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTQwNjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNmE0MDY7XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LWRpcmVjdG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudWstZ3JpZC1tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoIC51ay1pbmxpbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtZGlyZWN0b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuXG5cbiJdfQ== */\n/*@ sourceURL=components/search-bar/index.js */'
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

/***/ })

})
//# sourceMappingURL=4.e27ae2064f70ec1d779d.hot-update.js.map