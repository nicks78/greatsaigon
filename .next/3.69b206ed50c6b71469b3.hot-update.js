webpackHotUpdate(3,{

/***/ "./components/search-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_constant__ = __webpack_require__("./api/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_data_static_data__ = __webpack_require__("./static-data/static-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locales_en_json__ = __webpack_require__("./locales/en.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locales_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__locales_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_render_html__ = __webpack_require__("./node_modules/react-render-html/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_render_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_render_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_page__ = __webpack_require__("./pages/search-page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tag_holder__ = __webpack_require__("./components/search-bar/tag-holder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_input__ = __webpack_require__("./components/forms/input.js");
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










// Component



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
          where: '1'
        });
      }

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, 'drop_what', dir ? what : _this.state.drop_what), _this$setState));
    };

    _this.goToLink = function (href, as) {
      __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.replace(href, as, { shallow: true });
    };

    _this.state = {
      what: '1',
      where: '',
      directory: '1',
      drop_where: __WEBPACK_IMPORTED_MODULE_5__static_data_static_data__["a" /* default */].District,
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // NOT YET WORKING / TO BE FIXED 
      fetch(__WEBPACK_IMPORTED_MODULE_4__api_constant__["a" /* API_ENDPOINT */] + 'directories', {
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
            lineNumber: 103
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'directory', onChange: this.handleSelect, value: directory, className: 'jsx-3934959866' + ' ' + 'uk-select select-directory',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, style: { width: "100%" }, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
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
                  lineNumber: 111
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
              lineNumber: 121
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            },
            'Where ?'
          ),
          drop_where.map(function (x, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { key: index, value: x.toLowerCase(), style: { textTransform: 'capitalize' }, className: 'jsx-3934959866',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                }
              },
              x
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          { name: 'what', onChange: this.handleSelect, value: what, className: 'jsx-3934959866' + ' ' + 'uk-select',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'option',
            { value: '1', disabled: true, className: 'jsx-3934959866',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
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
                  lineNumber: 136
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
              lineNumber: 143
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3934959866' + ' ' + 'uk-inline',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', (_React$createElement = { className: 'uk-form-icon', style: { color: 'white' } }, _defineProperty(_React$createElement, 'className', 'jsx-3934959866' + ' ' + 'uk-form-icon uk-form-icon-flip fas fa-search fa-lg'), _defineProperty(_React$createElement, '__source', {
              fileName: _jsxFileName,
              lineNumber: 146
            }), _React$createElement)),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onClick: function onClick() {
                _this3.goToLink('/search-page/?directory=' + (directory || 'food-and-drink') + '/?where=' + (where || 'district-1') + '/?what=' + (what || 'restaurant'), '/search-page/' + (directory || 'food-and-drink') + '/' + (where || 'district-1') + '/' + (what || 'restaurant'));
              }, type: 'submit', value: __WEBPACK_IMPORTED_MODULE_6__locales_en_json___default.a.search, className: 'jsx-3934959866' + ' ' + 'submit uk-input',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3934959866',
          css: 'body{margin:0px;}.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;left:25%;box-shadow:8px 8px 20px 8px rgba(0,0,0,0.2);border-radius:25px;background-color:none;width:50%;}.uk-input{height:50px;}.uk-select{height:50px !important;}.fas{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.search input{color:white;background-color:#f50633;border-color:red;}.search input:hover,.search input:focus{background-color:#f6a406;border-color:#f6a406;cursor:pointer;}@media(max-width:960px){.wrapper{width:100%;left:0%;margin-top:5px;display:grid;grid-template-columns:1fr;}.submit{border-bottom-right-radius:0px;border-top-right-radius:0px;}.select-directory{border-bottom-left-radius:0px;border-top-left-radius:0px;}.uk-grid-margin{margin-top:0px;}.search .uk-inline{width:100%;}}@media(min-width:960px){.wrapper .uk-inline:nth-child(2),.wrapper .uk-inline:nth-child(3){padding-left:1px;}.select-directory{border-bottom-left-radius:24px;border-top-left-radius:24px;}.submit{border-bottom-right-radius:24px;border-top-right-radius:24px;}.search{padding-left:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SnFDLEFBR2tDLEFBR0UsQUFTRCxBQUdXLEFBR0gsQUFHUixBQUthLEFBT1osQUFPb0IsQUFJRCxBQUlmLEFBR0osQUFPUSxBQUdZLEFBSUMsQUFJZixXQXBFckIsQUFpQ1ksQUFrQlYsQ0F2Q0YsQUFTMkIsR0EyQnpCLEVBVUEsQUFXQSxFQW5DaUIsSUFuQm5CLEVBV3VCLEtBa0JRLENBSkMsQUFxQkEsQ0FJQyxFQTlCaEIsR0FiRSxTQUtGLENBU2EsT0FiOUIsR0FzQkUsRUFKQSxBQXFCQSxFQWxDRixBQXNDRSxZQTdCQSxDQWxDa0Isa0JBQ1QsU0FDbUMsQ0FhOUMsMkNBWnFCLG1CQUNHLHNCQUNaLFVBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gtYmFyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWNvbGFzL1NpdGVzL2dyZWF0c2FpZ29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL3BhZ2UnXG5pbXBvcnQge0FQSV9FTkRQT0lOVH0gZnJvbSAnLi4vLi4vYXBpL2NvbnN0YW50J1xuaW1wb3J0IFN0YXRpY0RhdGEgZnJvbSAnLi4vLi4vc3RhdGljLWRhdGEvc3RhdGljLWRhdGEnXG5pbXBvcnQgbG9jYWxlcyBmcm9tICcuLi8uLi9sb2NhbGVzL2VuLmpzb24nXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFNlYXJjaFBhZ2UgZnJvbSAnLi4vLi4vcGFnZXMvc2VhcmNoLXBhZ2UnXG4vLyBDb21wb25lbnRcbmltcG9ydCBUYWdIb2xkZXIgZnJvbSAnLi90YWctaG9sZGVyJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2Zvcm1zL2lucHV0J1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdoYXQ6ICcxJyxcbiAgICAgIHdoZXJlOiAnJyxcbiAgICAgIGRpcmVjdG9yeTogJzEnLFxuICAgICAgZHJvcF93aGVyZTogU3RhdGljRGF0YS5EaXN0cmljdCxcbiAgICAgIGRyb3Bfd2hhdDogW10sXG4gICAgICBkcm9wX2RpcmVjdG9yeTogW10sXG4gICAgICByZXN1bHQ6IFtdLFxuICAgICAgZGlyZWN0b3JpZXM6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aGVyZTogdGhpcy5wcm9wcy53aGVyZSB8fCAnJyxcbiAgICAgIHdoYXQ6IHRoaXMucHJvcHMud2hhdCB8fCAnMScsXG4gICAgICBkaXJlY3Rvcnk6IHRoaXMucHJvcHMuZGlyZWN0b3J5IHx8ICcxJ1xuICAgIH0pXG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgLy8gTk9UIFlFVCBXT1JLSU5HIC8gVE8gQkUgRklYRUQgXG4gICAgZmV0Y2goYCR7QVBJX0VORFBPSU5UfWRpcmVjdG9yaWVzYCwge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfSlcbiAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICB2YXIgZHJvcF9kaXJlY3RvcnkgPSBkYXRhLmZpbHRlciggKHJlcykgPT4geyByZXR1cm4gcmVzLnNsdWcgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgZGlyZWN0b3JpZXM6IGRhdGEsXG4gICAgICAgIGRyb3BfZGlyZWN0b3J5OiBkcm9wX2RpcmVjdG9yeSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bfd2hhdDogdGhpcy5nZXRXaGF0TGlzdCh0aGlzLnN0YXRlLmRpcmVjdG9yeSkgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICB9XG4gICAgXG4gICAgZ2V0V2hhdExpc3QgPSAoY2F0ZWdvcnkpID0+IHtcblxuICAgICAgdmFyIGRpciA9IHRoaXMuc3RhdGUuZGlyZWN0b3JpZXM7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBkaXIubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihjYXRlZ29yeSA9PT0gZGlyW2ldLnNsdWcpe1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5ID0gZGlyW2ldLnN1YmRpcmVjdG9yeSAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cblxuICAgIGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgICAgIHZhciBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciBkaXIgPSBuYW1lID09PSAnZGlyZWN0b3J5JyA/IHRydWUgOiBmYWxzZVxuXG4gICAgICAgIC8vIENhbGwgZnVuY3Rpb24gdG8gdXBkYXRlIGRyb3Bkb3duLXNlbGVjdC13aGF0XG4gICAgICAgIGlmKCBkaXIgKXtcbiAgICAgICAgICB2YXIgd2hhdCA9IHRoaXMuZ2V0V2hhdExpc3QodmFsdWUpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoYXQ6ICcxJyxcbiAgICAgICAgICAgICAgd2hlcmU6ICcxJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSwgZHJvcF93aGF0OiBkaXIgPyB3aGF0IDogdGhpcy5zdGF0ZS5kcm9wX3doYXQgfSlcbiAgICB9ICBcblxuICAgIGdvVG9MaW5rID0gKGhyZWYsIGFzKSA9PiB7XG4gICAgICBSb3V0ZXIucmVwbGFjZShocmVmLCBhcywge3NoYWxsb3c6IHRydWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgeyB3aGVyZSwgd2hhdCwgZGlyZWN0b3J5LCBkcm9wX3doZXJlLCBkcm9wX3doYXQsIGRyb3BfZGlyZWN0b3J5LCByZXN1bHQgfSA9IHRoaXMuc3RhdGU7XG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgey8qIENBVEVHT1JZICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRpcmVjdG9yeVwiIGNsYXNzTmFtZT1cInVrLXNlbGVjdCBzZWxlY3QtZGlyZWN0b3J5XCIgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdCB9IHZhbHVlPXsgZGlyZWN0b3J5IH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBkaXNhYmxlZCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCJ9fT5CYXIvUmVzdGF1cmFudC9OaWdodGxpZmUgPzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF9kaXJlY3RvcnkubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17eC5zbHVnfSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3gubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgey8qIFdIRVJFICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwid2hlcmVcIiBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlU2VsZWN0IH0gdmFsdWU9e3doZXJlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIGRpc2FibGVkPldoZXJlID88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wX3doZXJlLm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17eC50b0xvd2VyQ2FzZSgpfSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3h9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgey8qIFdIQVQgKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIndoYXRcIiBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlU2VsZWN0IH0gdmFsdWU9e3doYXR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgZGlzYWJsZWQ+V2hhdCA/PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF93aGF0Lm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17eC5zbHVnfSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3gubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBTRUFSQ0ggKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1ay1mb3JtLWljb25cIiAgY2xhc3NOYW1lPVwidWstZm9ybS1pY29uIHVrLWZvcm0taWNvbi1mbGlwIGZhcyBmYS1zZWFyY2ggZmEtbGdcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DbGljaz17ICgpID0+IHsgdGhpcy5nb1RvTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL3NlYXJjaC1wYWdlLz9kaXJlY3Rvcnk9JHtkaXJlY3RvcnkgfHwgJ2Zvb2QtYW5kLWRyaW5rJyB9Lz93aGVyZT0ke3doZXJlIHx8ICdkaXN0cmljdC0xJ30vP3doYXQ9JHt3aGF0IHx8ICdyZXN0YXVyYW50J31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvc2VhcmNoLXBhZ2UvJHtkaXJlY3RvcnkgfHwgJ2Zvb2QtYW5kLWRyaW5rJyB9LyR7d2hlcmUgfHwgJ2Rpc3RyaWN0LTEnfS8ke3doYXQgfHwgJ3Jlc3RhdXJhbnQnfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfSB9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17IGxvY2FsZXMuc2VhcmNoIH0gY2xhc3NOYW1lPVwic3VibWl0IHVrLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHsgXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudWstaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC51ay1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mYXMge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2ggaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNjMzO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaCBpbnB1dDpob3ZlciwgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTQwNjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNmE0MDY7XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LWRpcmVjdG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudWstZ3JpZC1tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoIC51ay1pbmxpbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIC51ay1pbmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtZGlyZWN0b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuXG5cbiJdfQ== */\n/*@ sourceURL=components/search-bar/index.js */'
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

/***/ })

})
//# sourceMappingURL=3.69b206ed50c6b71469b3.hot-update.js.map