webpackHotUpdate(3,{

/***/ "./pages/search-page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_data_actions__ = __webpack_require__("./redux/data/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_device_detect__ = __webpack_require__("./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_device_detect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_device_detect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_bar__ = __webpack_require__("./components/search-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_map__ = __webpack_require__("./components/map/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cards_card_venue__ = __webpack_require__("./components/cards/card-venue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_filters_filter__ = __webpack_require__("./components/filters/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_loader__ = __webpack_require__("./components/loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash__);
var _jsxFileName = "/Users/nicolas/Sites/greatsaigon/pages/search-page.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_10__components_page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(SearchPage));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchPage, "SearchPage", "/Users/nicolas/Sites/greatsaigon/pages/search-page.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/nicolas/Sites/greatsaigon/pages/search-page.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/nicolas/Sites/greatsaigon/pages/search-page.js");
  reactHotLoader.register(_default, "default", "/Users/nicolas/Sites/greatsaigon/pages/search-page.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/search-page")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.236eeded2ae367a8c228.hot-update.js.map