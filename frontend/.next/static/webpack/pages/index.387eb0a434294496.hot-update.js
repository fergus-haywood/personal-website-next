"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MobileNavigation.js":
/*!****************************************!*\
  !*** ./components/MobileNavigation.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MobileNavigation.module.css */ \"./styles/MobileNavigation.module.css\");\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navigation(props) {\n    var _this = this;\n    var handleClick = function handleClick() {};\n    _s();\n    var mainNav = props.props.navigation.mainNav;\n    var socialNav = props.props.navigation.socialNav;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Close\"), menuStatus = ref[0], setMenuState = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: function() {\n                    return handleClick();\n                },\n                className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().menuButton),\n                children: menuStatus\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainNavItemList),\n                        children: mainNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: item.text,\n                                className: \"navItem\",\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: item.text\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialNavItemList),\n                        children: socialNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"navItem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: item.navItemUrl.linkUrl,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"TWPcTlzYFGfKU+hDQGb1f5lH3gc=\");\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUMxQjtBQUVqQixTQUFTRSxVQUFVLENBQUNDLEtBQUssRUFBRTs7UUFNL0JDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHLENBQUMsQ0FBQzs7SUFMekIsSUFBTUMsT0FBTyxHQUFHRixLQUFLLENBQUNBLEtBQUssQ0FBQ0csVUFBVSxDQUFDRCxPQUFPO0lBQzlDLElBQU1FLFNBQVMsR0FBR0osS0FBSyxDQUFDQSxLQUFLLENBQUNHLFVBQVUsQ0FBQ0MsU0FBUztJQUVsRCxJQUFtQ04sR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBQTdDTyxVQUFVLEdBQWtCUCxHQUFpQixHQUFuQyxFQUFFUSxZQUFZLEdBQUlSLEdBQWlCLEdBQXJCO0lBRy9CLHFCQUNFOzswQkFDRSw4REFBQ1MsR0FBQztnQkFBQ0MsT0FBTyxFQUFFOzJCQUFNUCxXQUFXLEVBQUU7aUJBQUE7Z0JBQUVRLFNBQVMsRUFBRVosdUZBQWlCOzBCQUMxRFEsVUFBVTs7Ozs7b0JBQ1Q7MEJBQ0osOERBQUNNLEtBQUc7Z0JBQUNGLFNBQVMsRUFBRVosb0ZBQWM7O2tDQUM1Qiw4REFBQ2dCLElBQUU7d0JBQUNKLFNBQVMsRUFBRVosNEZBQXNCO2tDQUNsQ0ssT0FBTyxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7NEJBQ3hCLHFCQUNFLDhEQUFDQyxJQUFFO2dDQUNEQyxFQUFFLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtnQ0FFYlgsU0FBUyxFQUFDLFNBQVM7Z0NBQ25CRCxPQUFPLEVBQUUsU0FBQ2EsQ0FBQzsyQ0FBS3BCLFdBQVcsQ0FBQ29CLENBQUMsQ0FBQztpQ0FBQTswQ0FFN0JMLElBQUksQ0FBQ0ksSUFBSTsrQkFKTEosSUFBSSxDQUFDSSxJQUFJOzs7O3FDQUtYLENBQ047d0JBQ0gsQ0FBQyxDQUFDOzs7Ozs0QkFDQztrQ0FDTCw4REFBQ1AsSUFBRTt3QkFBQ0osU0FBUyxFQUFFWiw4RkFBd0I7a0NBQ3BDTyxTQUFTLENBQUNXLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSzs0QkFDMUIscUJBQ0UsOERBQUNDLElBQUU7Z0NBQWlCVCxTQUFTLEVBQUMsU0FBUzswQ0FDckMsNEVBQUNjLEdBQUM7b0NBQUNDLE1BQU0sRUFBQyxRQUFRO29DQUFDQyxJQUFJLEVBQUVULElBQUksQ0FBQ1UsVUFBVSxDQUFDQyxPQUFPOzhDQUM3Q1gsSUFBSSxDQUFDSSxJQUFJOzs7Ozt5Q0FDUjsrQkFIR0osSUFBSSxDQUFDSSxJQUFJOzs7O3FDQUliLENBQ047d0JBQ0gsQ0FBQyxDQUFDOzs7Ozs0QkFDQzs7Ozs7O29CQUNEOztvQkFDTCxDQUNKO0FBQ0gsQ0FBQztHQXpDdUJyQixVQUFVO0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVOYXZpZ2F0aW9uLmpzPzU2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTW9iaWxlTmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbihwcm9wcykge1xuICBjb25zdCBtYWluTmF2ID0gcHJvcHMucHJvcHMubmF2aWdhdGlvbi5tYWluTmF2XG4gIGNvbnN0IHNvY2lhbE5hdiA9IHByb3BzLnByb3BzLm5hdmlnYXRpb24uc29jaWFsTmF2XG5cbiAgY29uc3QgW21lbnVTdGF0dXMsIHNldE1lbnVTdGF0ZV0gPSB1c2VTdGF0ZSgnQ2xvc2UnKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge31cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbn0+XG4gICAgICAgIHttZW51U3RhdHVzfVxuICAgICAgPC9wPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1haW5OYXZJdGVtTGlzdH0+XG4gICAgICAgICAge21haW5OYXYubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxOYXZJdGVtTGlzdH0+XG4gICAgICAgICAge3NvY2lhbE5hdi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGV4dH0gY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2l0ZW0ubmF2SXRlbVVybC5saW5rVXJsfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwibWFpbk5hdiIsIm5hdmlnYXRpb24iLCJzb2NpYWxOYXYiLCJtZW51U3RhdHVzIiwic2V0TWVudVN0YXRlIiwicCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJtZW51QnV0dG9uIiwibmF2Iiwid3JhcHBlciIsInVsIiwibWFpbk5hdkl0ZW1MaXN0IiwibWFwIiwiaXRlbSIsImkiLCJsaSIsImlkIiwidGV4dCIsImUiLCJzb2NpYWxOYXZJdGVtTGlzdCIsImEiLCJ0YXJnZXQiLCJocmVmIiwibmF2SXRlbVVybCIsImxpbmtVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MobileNavigation.js\n"));

/***/ })

});