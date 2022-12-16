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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Contact(props) {\n    _s();\n    // States for contact form fields\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    //   Form validation state\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), errors = ref3[0], setErrors = ref3[1];\n    //   Setting button text on form submission\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Send\"), buttonText = ref4[0], setButtonText = ref4[1];\n    // Setting success or failure messages states\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showSuccessMessage = ref5[0], setShowSuccessMessage = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showFailureMessage = ref6[0], setShowFailureMessage = ref6[1];\n    // Validation check method\n    var handleValidation = function() {\n        var tempErrors = {};\n        var isValid = true;\n        if (name.length <= 0) {\n            tempErrors[\"fullname\"] = true;\n            isValid = false;\n        }\n        if (email.length <= 0) {\n            tempErrors[\"email\"] = true;\n            isValid = false;\n        }\n        if (message.length <= 0) {\n            tempErrors[\"message\"] = true;\n            isValid = false;\n        }\n        setErrors((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, tempErrors));\n        console.log(\"errors\", errors);\n        return isValid;\n    };\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(e) {\n            var isValidForm, data, _tmp, res, _tmp1, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        isValidForm = handleValidation();\n                        _tmp = {};\n                        data = (_tmp.name = name, _tmp.email = email, _tmp.message = message, _tmp);\n                        if (!isValidForm) return [\n                            3,\n                            3\n                        ];\n                        setButtonText(\"Sending\");\n                        _tmp1 = {};\n                        return [\n                            4,\n                            fetch(\"/api/contact\", (_tmp1.method = \"post\", _tmp1.body = JSON.stringify(data), _tmp1))\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            4,\n                            res.json()\n                        ];\n                    case 2:\n                        error = _state.sent().error;\n                        if (error) {\n                            console.log(error);\n                            setShowSuccessMessage(false);\n                            setShowFailureMessage(true);\n                            setButtonText(\"Send\");\n                            return [\n                                2\n                            ];\n                        }\n                        setShowSuccessMessage(true);\n                        setShowFailureMessage(false);\n                        setButtonText(\"Sent\");\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        navigation: props.navigationBody,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"contactWrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"heading\",\n                    children: \"Get in Touch\"\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"name\",\n                            type: \"text\",\n                            required: true,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"email\",\n                            type: \"email\",\n                            required: true,\n                            className: \"form-email\",\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"message\",\n                            children: \"Message:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"message\",\n                            type: \"text\",\n                            required: true,\n                            rows: \"4\",\n                            onChange: function(e) {\n                                return setMessage(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"projectLink\",\n                            type: \"submit\",\n                            children: [\n                                buttonText,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"form-send-arrow\",\n                                    src: \"./sendArrow.svg\",\n                                    width: \"20\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"contact-form__message\",\n                            children: [\n                                showSuccessMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Thanks for your message, i'll get back to you shortly\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this),\n                                showFailureMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Sorry there was an error, please\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:hello@fergushaywood.com\",\n                                            children: \"email me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" instead at\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:hello@fergushaywood.com\",\n                                            children: \"hello@fergushaywood\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n};\n_s(Contact, \"GenpgJmgsuWVvvPNaBBskhdJxFg=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7d0NBQUk7Z0NBRTdEM0Msa0JBQWtCLGtCQUNqQiw4REFBQzJDLEdBQUM7O3dDQUFDLGtDQUMrQjt3Q0FBQyxHQUFHO3NEQUNwQyw4REFBQ0MsR0FBQzs0Q0FBQ0MsSUFBSSxFQUFDLGdDQUFnQztzREFBQyxVQUFROzs7OztnREFBSTt3Q0FBQSxhQUNyRDtzREFBQSw4REFBQ0QsR0FBQzs0Q0FBQ0MsSUFBSSxFQUFDLGdDQUFnQztzREFBQyxxQkFBbUI7Ozs7O2dEQUFJOzs7Ozs7d0NBQzlEOzs7Ozs7Z0NBRUY7Ozs7Ozt3QkFDRDs7Ozs7O2dCQUNIOzs7OztZQUNDLENBQ1Y7QUFDSCxDQUFDO0dBdkh1QjNELE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzPzRlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QocHJvcHMpIHtcbiAgLy8gU3RhdGVzIGZvciBjb250YWN0IGZvcm0gZmllbGRzXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICAvLyAgIEZvcm0gdmFsaWRhdGlvbiBzdGF0ZVxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pXG5cbiAgLy8gICBTZXR0aW5nIGJ1dHRvbiB0ZXh0IG9uIGZvcm0gc3VibWlzc2lvblxuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZSgnU2VuZCcpXG5cbiAgLy8gU2V0dGluZyBzdWNjZXNzIG9yIGZhaWx1cmUgbWVzc2FnZXMgc3RhdGVzXG4gIGNvbnN0IFtzaG93U3VjY2Vzc01lc3NhZ2UsIHNldFNob3dTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dGYWlsdXJlTWVzc2FnZSwgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIFZhbGlkYXRpb24gY2hlY2sgbWV0aG9kXG4gIGNvbnN0IGhhbmRsZVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBFcnJvcnMgPSB7fVxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKG5hbWUubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRlbXBFcnJvcnNbJ2Z1bGxuYW1lJ10gPSB0cnVlXG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0ZW1wRXJyb3JzWydlbWFpbCddID0gdHJ1ZVxuICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0ZW1wRXJyb3JzWydtZXNzYWdlJ10gPSB0cnVlXG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICB9XG5cbiAgICBzZXRFcnJvcnMoeyAuLi50ZW1wRXJyb3JzIH0pXG4gICAgY29uc29sZS5sb2coJ2Vycm9ycycsIGVycm9ycylcbiAgICByZXR1cm4gaXNWYWxpZFxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBpc1ZhbGlkRm9ybSA9IGhhbmRsZVZhbGlkYXRpb24oKVxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWRGb3JtKSB7XG4gICAgICBzZXRCdXR0b25UZXh0KCdTZW5kaW5nJylcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHNldFNob3dTdWNjZXNzTWVzc2FnZShmYWxzZSlcbiAgICAgICAgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlKHRydWUpXG4gICAgICAgIHNldEJ1dHRvblRleHQoJ1NlbmQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFNob3dTdWNjZXNzTWVzc2FnZSh0cnVlKVxuICAgICAgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlKGZhbHNlKVxuICAgICAgc2V0QnV0dG9uVGV4dCgnU2VudCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG5hdmlnYXRpb249e3Byb3BzLm5hdmlnYXRpb25Cb2R5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFdyYXBwZXJcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5HZXQgaW4gVG91Y2g8L2g0PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1lbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvamVjdExpbmtcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dH17JyAnfVxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmb3JtLXNlbmQtYXJyb3dcIiBzcmM9XCIuL3NlbmRBcnJvdy5zdmdcIiB3aWR0aD1cIjIwXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybV9fbWVzc2FnZVwiPlxuICAgICAgICAgICAge3Nob3dTdWNjZXNzTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgIDxwPlRoYW5rcyBmb3IgeW91ciBtZXNzYWdlLCBpJ2xsIGdldCBiYWNrIHRvIHlvdSBzaG9ydGx5PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzaG93RmFpbHVyZU1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBTb3JyeSB0aGVyZSB3YXMgYW4gZXJyb3IsIHBsZWFzZXsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0BmZXJndXNoYXl3b29kLmNvbVwiPmVtYWlsIG1lPC9hPiBpbnN0ZWFkIGF0XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0BmZXJndXNoYXl3b29kLmNvbVwiPmhlbGxvQGZlcmd1c2hheXdvb2Q8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBuYXZpZ2F0aW9uUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICduYXZpZ2F0aW9uJ11gKVxuICBjb25zdCBuYXZpZ2F0aW9uVVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7bmF2aWdhdGlvblF1ZXJ5fV1gXG4gIGNvbnN0IG5hdmlnYXRpb25Cb2R5ID0gYXdhaXQgZmV0Y2gobmF2aWdhdGlvblVSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hdmlnYXRpb25Cb2R5LFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxheW91dCIsIkNvbnRhY3QiLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJzZXRTaG93U3VjY2Vzc01lc3NhZ2UiLCJzaG93RmFpbHVyZU1lc3NhZ2UiLCJzZXRTaG93RmFpbHVyZU1lc3NhZ2UiLCJoYW5kbGVWYWxpZGF0aW9uIiwidGVtcEVycm9ycyIsImlzVmFsaWQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsImlzVmFsaWRGb3JtIiwiZGF0YSIsInJlcyIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uQm9keSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJpbWciLCJzcmMiLCJ3aWR0aCIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});