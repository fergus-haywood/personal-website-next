"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProjectList.js":
/*!***********************************!*\
  !*** ./components/ProjectList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Projects.module.css */ \"./styles/Projects.module.css\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction ProjectList(param) {\n    var projects = param.projects;\n    var _this = this;\n    var projectList = projects;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2___default().projectList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mobile-page-title\",\n                children: \"Clients\"\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: projectList.map(function(project) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/projects/\".concat(project.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            id: project.title,\n                            className: \"navItem\",\n                            children: [\n                                project.title,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientOrigin),\n                                    children: [\n                                        \"(\",\n                                        project.origin,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, project.title, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectList;\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUN0QjtBQUViLFNBQVNFLFdBQVcsQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROztJQUM1QyxJQUFNQyxXQUFXLEdBQUdELFFBQVE7SUFDNUIscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTixnRkFBa0I7OzBCQUNoQyw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjswQkFBQyxTQUFPOzs7OztvQkFBTTswQkFDaEQsOERBQUNDLElBQUU7MEJBQ0FILFdBQVcsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBSztvQkFDNUIscUJBQ0UsOERBQUNSLGtEQUFJO3dCQUFDUyxJQUFJLEVBQUUsWUFBVyxDQUFhLE9BQVhELE9BQU8sQ0FBQ0UsRUFBRSxDQUFFO2tDQUNuQyw0RUFBQ0MsSUFBRTs0QkFBQ0QsRUFBRSxFQUFFRixPQUFPLENBQUNJLEtBQUs7NEJBQXNCUCxTQUFTLEVBQUMsU0FBUzs7Z0NBQzNERyxPQUFPLENBQUNJLEtBQUs7OENBQ2QsOERBQUNDLE1BQUk7b0NBQUNSLFNBQVMsRUFBRU4saUZBQW1COzt3Q0FBRSxHQUFDO3dDQUFDUyxPQUFPLENBQUNPLE1BQU07d0NBQUMsR0FBQzs7Ozs7O3lDQUFPOzsyQkFGckNQLE9BQU8sQ0FBQ0ksS0FBSzs7OztpQ0FHcEM7Ozs7OzZCQUNBLENBQ1I7Z0JBQ0gsQ0FBQyxDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0QsQ0FDUDtBQUNILENBQUM7QUFuQnVCWCxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdExpc3QuanM/MDNlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TGlzdCh7IHByb2plY3RzIH0pIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0c1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdExpc3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtcGFnZS10aXRsZVwiPkNsaWVudHM8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb2plY3RMaXN0Lm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvamVjdC5pZH1gfT5cbiAgICAgICAgICAgICAgPGxpIGlkPXtwcm9qZWN0LnRpdGxlfSBrZXk9e3Byb2plY3QudGl0bGV9IGNsYXNzTmFtZT1cIm5hdkl0ZW1cIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRPcmlnaW59Pih7cHJvamVjdC5vcmlnaW59KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkxpbmsiLCJQcm9qZWN0TGlzdCIsInByb2plY3RzIiwicHJvamVjdExpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInByb2plY3QiLCJocmVmIiwiaWQiLCJsaSIsInRpdGxlIiwic3BhbiIsImNsaWVudE9yaWdpbiIsIm9yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectList.js\n"));

/***/ })

});