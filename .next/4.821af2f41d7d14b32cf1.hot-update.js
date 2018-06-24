webpackHotUpdate(4,{

/***/ "./components/filters/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/components/filters/filter.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Filter;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Filter, "Filter", "/Users/nicolas/Sites/greatsaigon/components/filters/filter.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/components/filters/filter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.821af2f41d7d14b32cf1.hot-update.js.map