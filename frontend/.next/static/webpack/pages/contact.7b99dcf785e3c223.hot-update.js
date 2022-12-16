"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Contact() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        var data = {\n            name: name,\n            email: email,\n            message: message\n        };\n        fetch(\"/api/contact\", {\n            method: \"post\",\n            body: JSON.stringify(data)\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"contactWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"heading\",\n                children: \"Get in Touch\"\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        type: \"text\",\n                        required: true,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        type: \"email\",\n                        required: true,\n                        className: \"form-email\",\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"message\",\n                        children: \"Message:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"message\",\n                        type: \"text\",\n                        required: true,\n                        rows: \"4\",\n                        onChange: function(e) {\n                            return setMessage(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"projectLink\",\n                        type: \"submit\",\n                        children: [\n                            \"Send\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"form-send-arrow\",\n                                src: \"./sendArrow.svg\",\n                                width: \"20\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Contact, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDN0Q7Ozs7OztvQkFDSjs7Ozs7O1lBQ0gsQ0FDUDtBQUNILENBQUM7R0FwRHVCbkMsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExhdm91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfVxuICAgIGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFdyYXBwZXJcIj5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkaW5nXCI+R2V0IGluIFRvdWNoPC9oND5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1lbWFpbFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcm9qZWN0TGlua1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTZW5keycgJ31cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvcm0tc2VuZC1hcnJvd1wiIHNyYz1cIi4vc2VuZEFycm93LnN2Z1wiIHdpZHRoPVwiMjBcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF2b3V0IiwiQ29udGFjdCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});