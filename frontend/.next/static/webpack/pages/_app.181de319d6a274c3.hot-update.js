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

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Navigation.module.css */ \"./styles/Navigation.module.css\");\n/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Navigation(param) {\n    var content = param.content;\n    var _this = this;\n    var handleClick = function handleClick(e) {\n        props.content(e.target.id);\n        document.body.removeAttribute(\"style\");\n    };\n    var mainNav = content.result[0].navItems;\n    var socialNav = content.result[1].navItems;\n    console.log(\"content in Nav\", mainNav);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainNavItemList),\n                    children: [\n                        mainNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: item.text,\n                                className: \"navItem\",\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: item.text\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/about\",\n                            children: \"About Test \"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialNavItemList),\n                    children: socialNav.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"navItem\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                target: \"_blank\",\n                                href: item.navItemUrl.linkUrl,\n                                children: item.text\n                            }, void 0, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n                                lineNumber: 36,\n                                columnNumber: 19\n                            }, _this)\n                        }, item.text, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBQ3hCO0FBQ2IsU0FBU0UsVUFBVSxDQUFDLEtBQVcsRUFBRTtRQUFiLE9BQVMsR0FBVCxLQUFXLENBQVRDLE9BQU87O1FBS2pDQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3RCQyxLQUFLLENBQUNILE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEVBQUUsQ0FBQztRQUMxQkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDeEMsQ0FBQztJQVBELElBQU1DLE9BQU8sR0FBR1QsT0FBTyxDQUFDVSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVE7SUFDMUMsSUFBTUMsU0FBUyxHQUFHWixPQUFPLENBQUNVLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUTtJQUU1Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVMLE9BQU8sQ0FBQztJQU10QyxxQkFDRTtrQkFDR1QsT0FBTyxrQkFDTiw4REFBQ2UsS0FBRztZQUFDQyxTQUFTLEVBQUVuQiw4RUFBYzs7OEJBQzVCLDhEQUFDcUIsSUFBRTtvQkFBQ0YsU0FBUyxFQUFFbkIsc0ZBQXNCOzt3QkFDbENZLE9BQU8sQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLOzRCQUN4QixxQkFDRSw4REFBQ0MsSUFBRTtnQ0FDRGxCLEVBQUUsRUFBRWdCLElBQUksQ0FBQ0csSUFBSTtnQ0FFYlIsU0FBUyxFQUFDLFNBQVM7Z0NBQ25CUyxPQUFPLEVBQUUsU0FBQ3ZCLENBQUM7MkNBQUtELFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDO2lDQUFBOzBDQUU3Qm1CLElBQUksQ0FBQ0csSUFBSTsrQkFKTEgsSUFBSSxDQUFDRyxJQUFJOzs7O3FDQUtYLENBQ047d0JBQ0gsQ0FBQyxDQUFDO3NDQUNGLDhEQUFDMUIsa0RBQUk7NEJBQUM0QixJQUFJLEVBQUMsUUFBUTtzQ0FBQyxhQUFXOzs7OztnQ0FBTzs7Ozs7O3dCQUNuQzs4QkFDTCw4REFBQ1IsSUFBRTtvQkFBQ0YsU0FBUyxFQUFFbkIsd0ZBQXdCOzhCQUNwQ2UsU0FBUyxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7d0JBQzFCLHFCQUNFLDhEQUFDQyxJQUFFOzRCQUFpQlAsU0FBUyxFQUFDLFNBQVM7c0NBQ3JDLDRFQUFDWSxHQUFDO2dDQUFDeEIsTUFBTSxFQUFDLFFBQVE7Z0NBQUNzQixJQUFJLEVBQUVMLElBQUksQ0FBQ1EsVUFBVSxDQUFDQyxPQUFPOzBDQUM3Q1QsSUFBSSxDQUFDRyxJQUFJOzs7OztxQ0FDUjsyQkFIR0gsSUFBSSxDQUFDRyxJQUFJOzs7O2lDQUliLENBQ047b0JBQ0gsQ0FBQyxDQUFDOzs7Ozt3QkFDQzs7Ozs7O2dCQUNEO3FCQUVQLENBQ0o7QUFDSCxDQUFDO0FBNUN1QnpCLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2IwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbih7IGNvbnRlbnQgfSkge1xuICBjb25zdCBtYWluTmF2ID0gY29udGVudC5yZXN1bHRbMF0ubmF2SXRlbXNcbiAgY29uc3Qgc29jaWFsTmF2ID0gY29udGVudC5yZXN1bHRbMV0ubmF2SXRlbXNcblxuICBjb25zb2xlLmxvZygnY29udGVudCBpbiBOYXYnLCBtYWluTmF2KVxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgcHJvcHMuY29udGVudChlLnRhcmdldC5pZClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnRlbnQgJiYgKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tYWluTmF2SXRlbUxpc3R9PlxuICAgICAgICAgICAge21haW5OYXYubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBpZD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZJdGVtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0IFRlc3QgPC9MaW5rPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbE5hdkl0ZW1MaXN0fT5cbiAgICAgICAgICAgIHtzb2NpYWxOYXYubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS50ZXh0fSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtpdGVtLm5hdkl0ZW1VcmwubGlua1VybH0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsIk5hdmlnYXRpb24iLCJjb250ZW50IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJvcHMiLCJ0YXJnZXQiLCJpZCIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW5OYXYiLCJyZXN1bHQiLCJuYXZJdGVtcyIsInNvY2lhbE5hdiIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwidWwiLCJtYWluTmF2SXRlbUxpc3QiLCJtYXAiLCJpdGVtIiwiaSIsImxpIiwidGV4dCIsIm9uQ2xpY2siLCJocmVmIiwic29jaWFsTmF2SXRlbUxpc3QiLCJhIiwibmF2SXRlbVVybCIsImxpbmtVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});