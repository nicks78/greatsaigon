webpackHotUpdate(4,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_bar__ = __webpack_require__("./components/search-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_map__ = __webpack_require__("./components/map/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cards_card_venue__ = __webpack_require__("./components/cards/card-venue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_filters_filter__ = __webpack_require__("./components/filters/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_loader__ = __webpack_require__("./components/loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash__);
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

    _this.handleSearch = function (directory, where, what) {
      var as = directory + "/" + where + "/" + what;
      Router.push(as, { shallow: true });
      var api = "venues/search?items=1000&page=1&what=" + what + "&directory=" + directory + "&where=" + where;
      _this.props.getList(api);
    };

    _this.handleFilterButtons = function (event) {
      var filterIcons = event.target.getAttribute("name");
      var valueInput = event.target.value;
      var apiFilters = "https://backend.greatsaigon.com/api/v1/en/directories/" + _this.state.directory + "/venues";
      __WEBPACK_IMPORTED_MODULE_11_axios___default.a.get(apiFilters).then(function (response) {
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
          result: __WEBPACK_IMPORTED_MODULE_12_lodash___default.a.uniq(_this.state.stockResult)
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
      var _this2 = this;

      if (this.props.url) this.setState({
        where: this.props.url.query.where,
        what: this.props.url.query.what,
        directory: this.props.url.query.directory
      }, function () {
        console.log('WHERE-1', _this2.state.where);
        var api = "venues/search?items=1000&page=1&what=" + _this2.state.what + "&directory=" + _this2.state.directory + "&where=" + _this2.state.where;
        _this2.props.getList(api);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.url) this.setState({
        where: this.props.url.query.where,
        what: this.props.url.query.what,
        directory: this.props.url.query.directory
      }, function () {
        console.log('WHERE-2', _this3.state.where);
        var api = "venues/search?items=1000&page=1&what=" + _this3.state.what + "&directory=" + _this3.state.directory + "&where=" + _this3.state.where;
        _this3.props.getList(api);
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url) this.setState({
        result: nextProps.result.list
      });
    }
  }, {
    key: "render",
    value: function render() {

      if (this.props.result.isFecthing) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_loader__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        });
      }
      if (!this.state.where || !this.state.what || !this.state.directory) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_loader__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        });
      }
      console.log('WHERE', this.state.where);
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
            lineNumber: 142
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-1966805774" + " " + "wrapper-search-bar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_search_bar__["a" /* default */], { what: what, where: where, directory: directory, onSubmit: this.handleSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-1966805774" + " " + "content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { "data-uk-grid": true, className: "jsx-1966805774",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            },
            this.state.directory === "beauty" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              {
                className: "jsx-1966805774" + " " + "uk-width-auto@m",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_filters_filter__["a" /* default */], { onClick: this.handleFilterButtons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 151
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
                  lineNumber: 154
                }
              },
              !result.status ? result.map(function (x, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  { key: index, style: { marginBottom: "10px" }, className: "jsx-1966805774",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 164
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_cards_card_venue__["a" /* default */], { venue: x, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 165
                    }
                  })
                );
              }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                {
                  className: "jsx-1966805774",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
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
                  lineNumber: 174
                }
              },
              !result.status ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_map__["a" /* default */], { result: result, isSingle: false, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                }
              }) : null
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1966805774",
          css: ".content{background-color:#f1f1f2;border-bottom:1px solid #d0d2d3;margin:1em auto;max-width:100% !important;}.filters_icon{display:grid;grid-template-columns:repeat(2,1fr);}.fas{cursor:pointer;}#map{height:100vh;}@media (max-width:960px){.content{margin:0 auto;width:100%;}#map{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdMVyxBQUd3QyxBQU1aLEFBSUUsQUFHRixBQUlHLEFBSVUsQUFHZCxhQWpCeUIsQUFPdkMsQ0FJZSxDQVBmLFNBV0UsQ0FyQmdDLEFBa0JoQyx3QkFYRixRQU5rQixnQkFDVSwwQkFDNUIiLCJmaWxlIjoicGFnZXMvc2VhcmNoLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pY29sYXMvU2l0ZXMvZ3JlYXRzYWlnb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gXCIuLi9yZWR1eC9kYXRhL2FjdGlvbnNcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXBcIjtcbmltcG9ydCBDYXJkVmVudWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvY2FyZC12ZW51ZVwiO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuY2xhc3MgU2VhcmNoUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2hhdDogXCIxXCIsXG4gICAgICB3aGVyZTogXCJcIixcbiAgICAgIGRpcmVjdG9yeTogXCIxXCIsXG4gICAgICBuZXh0OiAxMCxcbiAgICAgIHByZXY6IDAsXG4gICAgICBwYWdlOiAxLFxuICAgICAgaXNUb2dnbGU6IGZhbHNlLFxuICAgICAgc3RvY2tSZXN1bHQ6IFtdLFxuICAgICAgcmVzdWx0OiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudXJsKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdoZXJlOiB0aGlzLnByb3BzLnVybC5xdWVyeS53aGVyZSxcbiAgICAgICAgd2hhdDogdGhpcy5wcm9wcy51cmwucXVlcnkud2hhdCxcbiAgICAgICAgZGlyZWN0b3J5OiB0aGlzLnByb3BzLnVybC5xdWVyeS5kaXJlY3RvcnlcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dIRVJFLTEnLCB0aGlzLnN0YXRlLndoZXJlKVxuICAgICAgICB2YXIgYXBpID0gYHZlbnVlcy9zZWFyY2g/aXRlbXM9MTAwMCZwYWdlPTEmd2hhdD0ke1xuICAgICAgICAgIHRoaXMuc3RhdGUud2hhdFxuICAgICAgICB9JmRpcmVjdG9yeT0ke3RoaXMuc3RhdGUuZGlyZWN0b3J5fSZ3aGVyZT0ke3RoaXMuc3RhdGUud2hlcmV9YDtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRMaXN0KGFwaSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnVybClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aGVyZTogdGhpcy5wcm9wcy51cmwucXVlcnkud2hlcmUsXG4gICAgICAgIHdoYXQ6IHRoaXMucHJvcHMudXJsLnF1ZXJ5LndoYXQsXG4gICAgICAgIGRpcmVjdG9yeTogdGhpcy5wcm9wcy51cmwucXVlcnkuZGlyZWN0b3J5XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXSEVSRS0yJywgdGhpcy5zdGF0ZS53aGVyZSlcbiAgICAgICAgdmFyIGFwaSA9IGB2ZW51ZXMvc2VhcmNoP2l0ZW1zPTEwMDAmcGFnZT0xJndoYXQ9JHtcbiAgICAgICAgICB0aGlzLnN0YXRlLndoYXRcbiAgICAgICAgfSZkaXJlY3Rvcnk9JHt0aGlzLnN0YXRlLmRpcmVjdG9yeX0md2hlcmU9JHt0aGlzLnN0YXRlLndoZXJlfWA7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TGlzdChhcGkpO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy51cmwpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVzdWx0OiBuZXh0UHJvcHMucmVzdWx0Lmxpc3RcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoID0gKCBkaXJlY3RvcnksIHdoZXJlLCB3aGF0ICkgPT4ge1xuICAgIHZhciBhcyA9IGAke2RpcmVjdG9yeX0vJHt3aGVyZX0vJHt3aGF0fWBcbiAgICBSb3V0ZXIucHVzaChhcywge3NoYWxsb3c6IHRydWV9KVxuICAgIHZhciBhcGkgPSBgdmVudWVzL3NlYXJjaD9pdGVtcz0xMDAwJnBhZ2U9MSZ3aGF0PSR7XG4gICAgICB3aGF0XG4gICAgfSZkaXJlY3Rvcnk9JHtkaXJlY3Rvcnl9JndoZXJlPSR7d2hlcmV9YDtcbiAgICB0aGlzLnByb3BzLmdldExpc3QoYXBpKTtcblxuICB9XG5cbiAgaGFuZGxlRmlsdGVyQnV0dG9ucyA9IGV2ZW50ID0+IHtcbiAgICB2YXIgZmlsdGVySWNvbnMgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICB2YXIgdmFsdWVJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB2YXIgYXBpRmlsdGVycyA9IGBodHRwczovL2JhY2tlbmQuZ3JlYXRzYWlnb24uY29tL2FwaS92MS9lbi9kaXJlY3Rvcmllcy8ke1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3RvcnlcbiAgICB9L3ZlbnVlc2A7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYXBpRmlsdGVycylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2gocmVxID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVySWNvbnMgPT09IFwiSGFpclwiKSB7XG4gICAgICAgICAgICBpZiAocmVxLm9wdGlvbnMuYmVhdXR5LmhhaXIudHJlYXRtZW50ICE9PSBcIjBcIikge1xuICAgICAgICAgICAgICByZXEub3B0aW9ucy5iZWF1dHkuaGFpci50cmVhdG1lbnQuZm9yRWFjaChyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IHZhbHVlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlcTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tSZXN1bHQudW5zaGlmdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJJY29ucyA9PT0gXCJOYWlsc1wiKSB7XG4gICAgICAgICAgICBpZiAocmVxLm9wdGlvbnMuYmVhdXR5Lm5haWxzLnRyZWF0bWVudCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgcmVxLm9wdGlvbnMuYmVhdXR5Lm5haWxzLnRyZWF0bWVudC5mb3JFYWNoKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gdmFsdWVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVxO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja1Jlc3VsdC51bnNoaWZ0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckljb25zID09PSBcIlNwYSAmIE1hc3NhZ2VcIikge1xuICAgICAgICAgICAgaWYgKHJlcS5vcHRpb25zLmJlYXV0eS5zcGEudHJlYXRtZW50ICE9PSBcIjBcIikge1xuICAgICAgICAgICAgICByZXEub3B0aW9ucy5iZWF1dHkuc3BhLnRyZWF0bWVudC5mb3JFYWNoKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gdmFsdWVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVxO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja1Jlc3VsdC51bnNoaWZ0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHJlc3VsdDogXy51bmlxKHRoaXMuc3RhdGUuc3RvY2tSZXN1bHQpXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yZXN1bHQuaXNGZWN0aGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkZXIgLz47XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS53aGVyZSB8fCAhdGhpcy5zdGF0ZS53aGF0IHx8ICF0aGlzLnN0YXRlLmRpcmVjdG9yeSkge1xuICAgICAgcmV0dXJuIDxMb2FkZXIgLz47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdXSEVSRScsIHRoaXMuc3RhdGUud2hlcmUpXG4gICAgY29uc3QgeyB3aGVyZSwgd2hhdCwgZGlyZWN0b3J5LCByZXN1bHQsIGRyb3Bfd2hhdCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItc2VhcmNoLWJhclwiPlxuICAgICAgICAgIDxTZWFyY2hCYXIgd2hhdD17d2hhdH0gd2hlcmU9e3doZXJlfSBkaXJlY3Rvcnk9e2RpcmVjdG9yeX0gb25TdWJtaXQ9eyB0aGlzLmhhbmRsZVNlYXJjaCB9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXVrLWdyaWQ+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXJlY3RvcnkgPT09IFwiYmVhdXR5XCIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWF1dG9AbVwiPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXIgb25DbGljaz17dGhpcy5oYW5kbGVGaWx0ZXJCdXR0b25zfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdzLXNjcm9sbC1zZWN0aW9uIHVrLXdpZHRoLWV4cGFuZEBtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyFyZXN1bHQuc3RhdHVzID8gKFxuICAgICAgICAgICAgICAgIHJlc3VsdC5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRWZW51ZSB2ZW51ZT17eH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHA+e3Jlc3VsdC5tc2d9PC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjk4MFwiIH19XG4gICAgICAgICAgICAgIGlkPVwibWFwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstd2lkdGgtMS0zQG1cIlxuICAgICAgICAgICAgICBkYXRhLXVrLXNjcm9sbHNweT1cImNsczogdWstYW5pbWF0aW9uLXNsaWRlLXJpZ2h0OyByZXBlYXQ6IGZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyFyZXN1bHQuc3RhdHVzID8gPE1hcCByZXN1bHQ9e3Jlc3VsdH0gaXNTaW5nbGU9e2ZhbHNlfSAvPiA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjI7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMmQzO1xuICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXJzX2ljb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZhcyB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYXAge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAjbWFwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmdzLXNjcm9sbC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuLy8gR2V0IGFsbCBkYXRhIGZvciBjaGlsZCBjb21wb25lbnRzXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVzdWx0OiBzdGF0ZS5kYXRhUmVkdWNlclxuICB9O1xufTtcblxuLy8gR2V0IGFsbCBkYXRhIGZvciBjaGlsZCBjb21wb25lbnRzXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgZ2V0TGlzdDogYXBpID0+IGRpc3BhdGNoKGdldExpc3QoYXBpKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UoXG4gIGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuICApKFNlYXJjaFBhZ2UpXG4pO1xuIl19 */\n/*@ sourceURL=pages/search-page.js */"
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_9__components_page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(SearchPage));

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
//# sourceMappingURL=4.e93022e3cfb57338f428.hot-update.js.map