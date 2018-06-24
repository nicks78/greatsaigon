webpackHotUpdate(3,{

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

/***/ })

})
//# sourceMappingURL=3.e406b1bcc3fec3e78591.hot-update.js.map