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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Contact(props) {\n    _s();\n    // States for contact form fields\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), fullname = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    //   Form validation state\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), errors = ref3[0], setErrors = ref3[1];\n    //   Setting button text on form submission\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Send\"), buttonText = ref4[0], setButtonText = ref4[1];\n    // Setting success or failure messages states\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showSuccessMessage = ref5[0], setShowSuccessMessage = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showFailureMessage = ref6[0], setShowFailureMessage = ref6[1];\n    // Validation check method\n    var handleValidation = function() {\n        var tempErrors = {};\n        var isValid = true;\n        if (fullname.length <= 0) {\n            tempErrors[\"fullname\"] = true;\n            isValid = false;\n        }\n        if (email.length <= 0) {\n            tempErrors[\"email\"] = true;\n            isValid = false;\n        }\n        if (message.length <= 0) {\n            tempErrors[\"message\"] = true;\n            isValid = false;\n        }\n        setErrors((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, tempErrors));\n        console.log(\"errors\", errors);\n        return isValid;\n    };\n    //   Handling form submit\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(e) {\n            var isValidForm, res, _tmp, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        isValidForm = handleValidation();\n                        if (!isValidForm) return [\n                            3,\n                            3\n                        ];\n                        setButtonText(\"Sending\");\n                        _tmp = {};\n                        return [\n                            4,\n                            fetch(\"/api/contact\", (_tmp.body = JSON.stringify({\n                                email: email,\n                                fullname: fullname,\n                                message: message\n                            }), _tmp.headers = {\n                                \"Content-Type\": \"application/json\"\n                            }, _tmp.method = \"POST\", _tmp))\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            4,\n                            res.json()\n                        ];\n                    case 2:\n                        error = _state.sent().error;\n                        if (error) {\n                            console.log(error);\n                            setShowSuccessMessage(false);\n                            setShowFailureMessage(true);\n                            setButtonText(\"Send\");\n                            return [\n                                2\n                            ];\n                        }\n                        setShowSuccessMessage(true);\n                        setShowFailureMessage(false);\n                        setButtonText(\"Send\");\n                        _state.label = 3;\n                    case 3:\n                        console.log(fullname, email, subject, message);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        navigation: props.navigationBody,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"contactWrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"heading\",\n                    children: \"Get in Touch\"\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"name\",\n                            type: \"text\",\n                            required: true,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"email\",\n                            type: \"email\",\n                            required: true,\n                            className: \"form-email\",\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"message\",\n                            children: \"Message:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"message\",\n                            type: \"text\",\n                            required: true,\n                            rows: \"4\",\n                            onChange: function(e) {\n                                return setMessage(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"projectLink\",\n                            type: \"submit\",\n                            children: [\n                                \"Send\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"form-send-arrow\",\n                                    src: \"./sendArrow.svg\",\n                                    width: \"20\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/contact.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n};\n_s(Contact, \"GenpgJmgsuWVvvPNaBBskhdJxFg=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztZQUNDLENBQ1Y7QUFDSCxDQUFDO0dBL0d1QnpELE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzPzRlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QocHJvcHMpIHtcbiAgLy8gU3RhdGVzIGZvciBjb250YWN0IGZvcm0gZmllbGRzXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgLy8gICBGb3JtIHZhbGlkYXRpb24gc3RhdGVcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KVxuXG4gIC8vICAgU2V0dGluZyBidXR0b24gdGV4dCBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgY29uc3QgW2J1dHRvblRleHQsIHNldEJ1dHRvblRleHRdID0gdXNlU3RhdGUoJ1NlbmQnKVxuXG4gIC8vIFNldHRpbmcgc3VjY2VzcyBvciBmYWlsdXJlIG1lc3NhZ2VzIHN0YXRlc1xuICBjb25zdCBbc2hvd1N1Y2Nlc3NNZXNzYWdlLCBzZXRTaG93U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaG93RmFpbHVyZU1lc3NhZ2UsIHNldFNob3dGYWlsdXJlTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBWYWxpZGF0aW9uIGNoZWNrIG1ldGhvZFxuICBjb25zdCBoYW5kbGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCB0ZW1wRXJyb3JzID0ge31cbiAgICBsZXQgaXNWYWxpZCA9IHRydWVcblxuICAgIGlmIChmdWxsbmFtZS5sZW5ndGggPD0gMCkge1xuICAgICAgdGVtcEVycm9yc1snZnVsbG5hbWUnXSA9IHRydWVcbiAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAoZW1haWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRlbXBFcnJvcnNbJ2VtYWlsJ10gPSB0cnVlXG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRlbXBFcnJvcnNbJ21lc3NhZ2UnXSA9IHRydWVcbiAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHNldEVycm9ycyh7IC4uLnRlbXBFcnJvcnMgfSlcbiAgICBjb25zb2xlLmxvZygnZXJyb3JzJywgZXJyb3JzKVxuICAgIHJldHVybiBpc1ZhbGlkXG4gIH1cblxuICAvLyAgIEhhbmRsaW5nIGZvcm0gc3VibWl0XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBpc1ZhbGlkRm9ybSA9IGhhbmRsZVZhbGlkYXRpb24oKVxuXG4gICAgaWYgKGlzVmFsaWRGb3JtKSB7XG4gICAgICBzZXRCdXR0b25UZXh0KCdTZW5kaW5nJylcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgZnVsbG5hbWU6IGZ1bGxuYW1lLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHNldFNob3dTdWNjZXNzTWVzc2FnZShmYWxzZSlcbiAgICAgICAgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlKHRydWUpXG4gICAgICAgIHNldEJ1dHRvblRleHQoJ1NlbmQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFNob3dTdWNjZXNzTWVzc2FnZSh0cnVlKVxuICAgICAgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlKGZhbHNlKVxuICAgICAgc2V0QnV0dG9uVGV4dCgnU2VuZCcpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGZ1bGxuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBuYXZpZ2F0aW9uPXtwcm9wcy5uYXZpZ2F0aW9uQm9keX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RXcmFwcGVyXCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkaW5nXCI+R2V0IGluIFRvdWNoPC9oND5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlOjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByb2plY3RMaW5rXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU2VuZHsnICd9XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvcm0tc2VuZC1hcnJvd1wiIHNyYz1cIi4vc2VuZEFycm93LnN2Z1wiIHdpZHRoPVwiMjBcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgbmF2aWdhdGlvblF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAnbmF2aWdhdGlvbiddYClcbiAgY29uc3QgbmF2aWdhdGlvblVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske25hdmlnYXRpb25RdWVyeX1dYFxuICBjb25zdCBuYXZpZ2F0aW9uQm9keSA9IGF3YWl0IGZldGNoKG5hdmlnYXRpb25VUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBuYXZpZ2F0aW9uQm9keSxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJDb250YWN0IiwicHJvcHMiLCJmdWxsbmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsInNob3dTdWNjZXNzTWVzc2FnZSIsInNldFNob3dTdWNjZXNzTWVzc2FnZSIsInNob3dGYWlsdXJlTWVzc2FnZSIsInNldFNob3dGYWlsdXJlTWVzc2FnZSIsImhhbmRsZVZhbGlkYXRpb24iLCJ0ZW1wRXJyb3JzIiwiaXNWYWxpZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwiaXNWYWxpZEZvcm0iLCJyZXMiLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJqc29uIiwic3ViamVjdCIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uQm9keSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJpbWciLCJzcmMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});