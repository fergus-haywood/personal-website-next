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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MobileNavigation.module.css */ \"./styles/MobileNavigation.module.css\");\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navigation(props) {\n    var _this = this;\n    var handleClick = function handleClick(e) {\n        menuStatus === \"Menu\" ? setMenuStatus(\"Close\") : setMenuStatus(\"Menu\");\n        setActive(function(current) {\n            return !current;\n        });\n    };\n    _s();\n    var mainNav = props.props.navigation.mainNav;\n    var socialNav = props.props.navigation.socialNav;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Menu\"), menuStatus = ref[0], setMenuStatus = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isActive = ref1[0], setActive = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: function() {\n                    return handleClick();\n                },\n                className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().menuButton),\n                children: menuStatus\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"mobileNavWrapper \".concat(isActive ? \"is-active\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainNavItemList),\n                        children: mainNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: item.text,\n                                className: \"navItem\",\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: item.text\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialNavItemList),\n                        children: socialNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"navItem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: item.navItemUrl.linkUrl,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"J19bTdcxUtk5fXEPaa23kADH+fU=\");\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUMxQjtBQUVqQixTQUFTRSxVQUFVLENBQUNDLEtBQUssRUFBRTs7UUFPL0JDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDQyxDQUFDLEVBQUU7UUFDdEJDLFVBQVUsS0FBSyxNQUFNLEdBQUdDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBR0EsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUN0RUMsU0FBUyxDQUFDLFNBQUNDLE9BQU87bUJBQUssQ0FBQ0EsT0FBTztTQUFBLENBQUM7SUFDbEMsQ0FBQzs7SUFURCxJQUFNQyxPQUFPLEdBQUdQLEtBQUssQ0FBQ0EsS0FBSyxDQUFDUSxVQUFVLENBQUNELE9BQU87SUFDOUMsSUFBTUUsU0FBUyxHQUFHVCxLQUFLLENBQUNBLEtBQUssQ0FBQ1EsVUFBVSxDQUFDQyxTQUFTO0lBRWxELElBQW9DWCxHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFBN0NLLFVBQVUsR0FBbUJMLEdBQWdCLEdBQW5DLEVBQUVNLGFBQWEsR0FBSU4sR0FBZ0IsR0FBcEI7SUFDaEMsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENZLFFBQVEsR0FBZVosSUFBZSxHQUE5QixFQUFFTyxTQUFTLEdBQUlQLElBQWUsR0FBbkI7SUFNMUIscUJBQ0U7OzBCQUNFLDhEQUFDYSxHQUFDO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1YLFdBQVcsRUFBRTtpQkFBQTtnQkFBRVksU0FBUyxFQUFFaEIsdUZBQWlCOzBCQUMxRE0sVUFBVTs7Ozs7b0JBQ1Q7MEJBQ0osOERBQUNZLEtBQUc7Z0JBQUNGLFNBQVMsRUFBRSxtQkFBa0IsQ0FBOEIsT0FBNUJILFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFFOztrQ0FDL0QsOERBQUNNLElBQUU7d0JBQUNILFNBQVMsRUFBRWhCLDRGQUFzQjtrQ0FDbENVLE9BQU8sQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLOzRCQUN4QixxQkFDRSw4REFBQ0MsSUFBRTtnQ0FDREMsRUFBRSxFQUFFSCxJQUFJLENBQUNJLElBQUk7Z0NBRWJWLFNBQVMsRUFBQyxTQUFTO2dDQUNuQkQsT0FBTyxFQUFFLFNBQUNWLENBQUM7MkNBQUtELFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDO2lDQUFBOzBDQUU3QmlCLElBQUksQ0FBQ0ksSUFBSTsrQkFKTEosSUFBSSxDQUFDSSxJQUFJOzs7O3FDQUtYLENBQ047d0JBQ0gsQ0FBQyxDQUFDOzs7Ozs0QkFDQztrQ0FDTCw4REFBQ1AsSUFBRTt3QkFBQ0gsU0FBUyxFQUFFaEIsOEZBQXdCO2tDQUNwQ1ksU0FBUyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7NEJBQzFCLHFCQUNFLDhEQUFDQyxJQUFFO2dDQUFpQlIsU0FBUyxFQUFDLFNBQVM7MENBQ3JDLDRFQUFDWSxHQUFDO29DQUFDQyxNQUFNLEVBQUMsUUFBUTtvQ0FBQ0MsSUFBSSxFQUFFUixJQUFJLENBQUNTLFVBQVUsQ0FBQ0MsT0FBTzs4Q0FDN0NWLElBQUksQ0FBQ0ksSUFBSTs7Ozs7eUNBQ1I7K0JBSEdKLElBQUksQ0FBQ0ksSUFBSTs7OztxQ0FJYixDQUNOO3dCQUNILENBQUMsQ0FBQzs7Ozs7NEJBQ0M7Ozs7OztvQkFDRDs7b0JBQ0wsQ0FDSjtBQUNILENBQUM7R0E3Q3VCeEIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9iaWxlTmF2aWdhdGlvbi5qcz81NmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01vYmlsZU5hdmlnYXRpb24ubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24ocHJvcHMpIHtcbiAgY29uc3QgbWFpbk5hdiA9IHByb3BzLnByb3BzLm5hdmlnYXRpb24ubWFpbk5hdlxuICBjb25zdCBzb2NpYWxOYXYgPSBwcm9wcy5wcm9wcy5uYXZpZ2F0aW9uLnNvY2lhbE5hdlxuXG4gIGNvbnN0IFttZW51U3RhdHVzLCBzZXRNZW51U3RhdHVzXSA9IHVzZVN0YXRlKCdNZW51JylcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIG1lbnVTdGF0dXMgPT09ICdNZW51JyA/IHNldE1lbnVTdGF0dXMoJ0Nsb3NlJykgOiBzZXRNZW51U3RhdHVzKCdNZW51JylcbiAgICBzZXRBY3RpdmUoKGN1cnJlbnQpID0+ICFjdXJyZW50KVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b259PlxuICAgICAgICB7bWVudVN0YXR1c31cbiAgICAgIDwvcD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbW9iaWxlTmF2V3JhcHBlciAke2lzQWN0aXZlID8gJ2lzLWFjdGl2ZScgOiAnJ31gfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1haW5OYXZJdGVtTGlzdH0+XG4gICAgICAgICAge21haW5OYXYubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxOYXZJdGVtTGlzdH0+XG4gICAgICAgICAge3NvY2lhbE5hdi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGV4dH0gY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2l0ZW0ubmF2SXRlbVVybC5saW5rVXJsfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZSIsIm1lbnVTdGF0dXMiLCJzZXRNZW51U3RhdHVzIiwic2V0QWN0aXZlIiwiY3VycmVudCIsIm1haW5OYXYiLCJuYXZpZ2F0aW9uIiwic29jaWFsTmF2IiwiaXNBY3RpdmUiLCJwIiwib25DbGljayIsImNsYXNzTmFtZSIsIm1lbnVCdXR0b24iLCJuYXYiLCJ1bCIsIm1haW5OYXZJdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJpIiwibGkiLCJpZCIsInRleHQiLCJzb2NpYWxOYXZJdGVtTGlzdCIsImEiLCJ0YXJnZXQiLCJocmVmIiwibmF2SXRlbVVybCIsImxpbmtVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MobileNavigation.js\n"));

/***/ })

});