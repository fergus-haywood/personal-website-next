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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./components/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./components/footer.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Layout() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n                var navgigationQuery, navigationUrl, result, mainNav, socialNav, err;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            navgigationQuery = encodeURIComponent(\"*[ _type == 'navigation']\");\n                            navigationUrl = \"https://36om7i3d.api.sanity.io/v1/data/query/production?query=\".concat(navgigationQuery);\n                            return [\n                                4,\n                                fetch(navigationUrl).then(function(res) {\n                                    return res.json();\n                                })\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            mainNav = result.result[0].navItems;\n                            socialNav = result.result[1].navItems;\n                            setData(result);\n                            console.log(data);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            err = _state.sent();\n                            console.error(err.message);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, []);\n    // const aboutQuery = encodeURIComponent(`*[ _type == 'about']`)\n    // const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`\n    // const aboutBody = await fetch(aboutURL).then((res) => res.json())\n    // const clientsQuery = encodeURIComponent(`*[ _type == 'clients']`)\n    // const clientURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${clientsQuery}]`\n    // const clients = await fetch(clientURL).then((res) => res.json())\n    // const projectsQuery = encodeURIComponent(`*[ _type == 'projects']`)\n    // const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`\n    // const projects = await fetch(projectURL).then((res) => res.json())\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Layout.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Layout.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                content: data\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Layout.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Layout.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE0QjtBQUNDO0FBQ0E7QUFDUTtBQUNNO0FBRTVCLFNBQVNNLE1BQU0sR0FBRzs7SUFDL0IsSUFBd0JELEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQkUsSUFBSSxHQUFhRixHQUFVLEdBQXZCLEVBQUVHLE9BQU8sR0FBSUgsR0FBVSxHQUFkO0lBQ3BCRCxnREFBUyxDQUFDLFdBQU07aUJBQ0NLLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsR0FBeEIsK0ZBQTJCO29CQUVqQkMsZ0JBQWdCLEVBQ2hCQyxhQUFhLEVBQ2JDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxTQUFTLEVBR1JDLEdBQUc7Ozs7Ozs7Ozs7NEJBUEpMLGdCQUFnQixHQUFHTSxrQkFBa0IsQ0FBRSwyQkFBeUIsQ0FBRTs0QkFDbEVMLGFBQWEsR0FBRyxnRUFBK0QsQ0FBbUIsT0FBakJELGdCQUFnQixDQUFFOzRCQUMxRjs7Z0NBQU1PLEtBQUssQ0FBQ04sYUFBYSxDQUFDLENBQUNPLElBQUksQ0FBQyxTQUFDQyxHQUFHOzJDQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtpQ0FBQSxDQUFDOzhCQUFBOzs0QkFBN0RSLE1BQU0sR0FBRyxhQUFvRDs0QkFDN0RDLE9BQU8sR0FBR0QsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNTLFFBQVE7NEJBQ25DUCxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxRQUFROzRCQUMzQ2IsT0FBTyxDQUFDSSxNQUFNLENBQUM7NEJBQ2ZVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsSUFBSSxDQUFDOzs7Ozs7NEJBQ1ZRLEdBQUc7NEJBQ1ZPLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDVCxHQUFHLENBQUNVLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7WUFFOUIsQ0FBQzttQkFaY2hCLFVBQVM7O1FBYXhCQSxTQUFTLEVBQUU7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sZ0VBQWdFO0lBQ2hFLG1HQUFtRztJQUNuRyxvRUFBb0U7SUFFcEUsb0VBQW9FO0lBQ3BFLHNHQUFzRztJQUN0RyxtRUFBbUU7SUFFbkUsc0VBQXNFO0lBQ3RFLHdHQUF3RztJQUN4RyxxRUFBcUU7SUFFckUscUJBQ0U7OzBCQUNFLDhEQUFDVCxrREFBSTs7OztvQkFBRzswQkFDUiw4REFBQ0MsK0NBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNFLG1EQUFVO2dCQUFDdUIsT0FBTyxFQUFFbkIsSUFBSTs7Ozs7b0JBQUk7MEJBRTdCLDhEQUFDTCwrQ0FBTTs7OztvQkFBRzs7b0JBQ1QsQ0FDSjtBQUNILENBQUM7R0F4Q3VCSSxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmF2Z2lnYXRpb25RdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gJ25hdmlnYXRpb24nXWApXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25VcmwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT0ke25hdmdpZ2F0aW9uUXVlcnl9YFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChuYXZpZ2F0aW9uVXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIGNvbnN0IG1haW5OYXYgPSByZXN1bHQucmVzdWx0WzBdLm5hdkl0ZW1zXG4gICAgICAgIGNvbnN0IHNvY2lhbE5hdiA9IHJlc3VsdC5yZXN1bHRbMV0ubmF2SXRlbXNcbiAgICAgICAgc2V0RGF0YShyZXN1bHQpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgLy8gY29uc3QgYWJvdXRRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gJ2Fib3V0J11gKVxuICAvLyBjb25zdCBhYm91dFVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske2Fib3V0UXVlcnl9XWBcbiAgLy8gY29uc3QgYWJvdXRCb2R5ID0gYXdhaXQgZmV0Y2goYWJvdXRVUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICAvLyBjb25zdCBjbGllbnRzUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICdjbGllbnRzJ11gKVxuICAvLyBjb25zdCBjbGllbnRVUkwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT1bJHtjbGllbnRzUXVlcnl9XWBcbiAgLy8gY29uc3QgY2xpZW50cyA9IGF3YWl0IGZldGNoKGNsaWVudFVSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIC8vIGNvbnN0IHByb2plY3RzUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICdwcm9qZWN0cyddYClcbiAgLy8gY29uc3QgcHJvamVjdFVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske3Byb2plY3RzUXVlcnl9XWBcbiAgLy8gY29uc3QgcHJvamVjdHMgPSBhd2FpdCBmZXRjaChwcm9qZWN0VVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uIGNvbnRlbnQ9e2RhdGF9IC8+XG4gICAgICB7LyogPG1haW4+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj4gKi99XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiRm9vdGVyIiwiTmF2aWdhdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJuYXZnaWdhdGlvblF1ZXJ5IiwibmF2aWdhdGlvblVybCIsInJlc3VsdCIsIm1haW5OYXYiLCJzb2NpYWxOYXYiLCJlcnIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibmF2SXRlbXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});