"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnouncementBar */ \"./components/AnnouncementBar.js\");\n/* harmony import */ var _components_CurrentTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CurrentTime */ \"./components/CurrentTime.js\");\n/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MobileNavigation */ \"./components/MobileNavigation.js\");\n\n\n\n\n\n\nfunction Header(param) {\n    var props = param.props;\n    var handleClick = function handleClick(e) {\n        document.body.removeAttribute(\"style\");\n        document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: function(e) {\n                            return handleClick(e);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Fergus Haywood\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CurrentTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    items: props.navigation\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Header.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFFcEI7QUFDbUI7QUFDSTtBQUNVO0FBRTlDLFNBQVNLLE1BQU0sQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLO1FBQzNCQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3RCQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUN0Q0YsUUFBUSxDQUFDQyxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsZUFBZSxHQUFHQyxnQkFBZ0IsQ0FDcERMLFFBQVEsQ0FBQ0MsSUFBSSxDQUNkLENBQUNLLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQzFDLENBQUM7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ0MsUUFBTTtZQUFDQyxTQUFTLEVBQUVqQiwwRUFBYzs7OEJBQy9CLDhEQUFDbUIsSUFBRTtvQkFBQ0YsU0FBUyxFQUFFakIsd0VBQVk7OEJBQ3pCLDRFQUFDcUIsR0FBQzt3QkFBQ0MsT0FBTyxFQUFFLFNBQUNkLENBQUM7bUNBQUtELFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDO3lCQUFBO2tDQUMvQiw0RUFBQ1Asa0RBQUk7NEJBQUNzQixJQUFJLEVBQUMsR0FBRztzQ0FBQyxnQkFBYzs7Ozs7Z0NBQU87Ozs7OzRCQUNsQzs7Ozs7d0JBQ0Q7OEJBQ0wsOERBQUNyQix3REFBZTs7Ozt3QkFBRzs4QkFDbkIsOERBQUNDLCtEQUFXOzs7O3dCQUFHOzhCQUNmLDhEQUFDQyxvRUFBZ0I7b0JBQUNvQixLQUFLLEVBQUVsQixLQUFLLENBQUNtQixVQUFVOzs7Ozt3QkFBSTs7Ozs7O2dCQUN0QztxQkFDUixDQUNKO0FBQ0gsQ0FBQztBQXRCdUJwQixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBbm5vdW5jZW1lbnRCYXIgZnJvbSAnLi9Bbm5vdW5jZW1lbnRCYXInXG5pbXBvcnQgQ3VycmVudFRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy9DdXJyZW50VGltZSdcbmltcG9ydCBNb2JpbGVOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlTmF2aWdhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgcHJvcHMgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJhY2tncm91bmQtY29sb3InKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5GZXJndXMgSGF5d29vZDwvTGluaz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxBbm5vdW5jZW1lbnRCYXIgLz5cbiAgICAgICAgPEN1cnJlbnRUaW1lIC8+XG4gICAgICAgIDxNb2JpbGVOYXZpZ2F0aW9uIGl0ZW1zPXtwcm9wcy5uYXZpZ2F0aW9ufSAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwiQW5ub3VuY2VtZW50QmFyIiwiQ3VycmVudFRpbWUiLCJNb2JpbGVOYXZpZ2F0aW9uIiwiSGVhZGVyIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImUiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImgxIiwidGl0bGUiLCJhIiwib25DbGljayIsImhyZWYiLCJpdGVtcyIsIm5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});