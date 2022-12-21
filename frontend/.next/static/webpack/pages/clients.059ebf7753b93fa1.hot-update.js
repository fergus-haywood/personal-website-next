"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients",{

/***/ "./pages/clients.js":
/*!**************************!*\
  !*** ./pages/clients.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Clients.module.css */ \"./styles/Clients.module.css\");\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), clientContent = ref[0], setClientContent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasImage = ref1[0], setHasImage = ref1[1];\n    var clientItems = [];\n    var clientList = props.clients.result[0].sort(function(a, b) {\n        return a.title.localeCompare(b.title);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (clientContent.mainImage) {\n            setHasImage(true);\n        }\n    }, [\n        clientContent\n    ]);\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    if (true) {\n        clientItems = document.querySelectorAll(\".Clients_clientItem__D8a_q\");\n        if (clientContent) {\n            document.body.style.backgroundColor = clientContent.backgroundColor;\n        } else {\n            document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            navigation: props.navigationBody,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mobile-page-title\",\n                            children: \"Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        clientList.map(function(client) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    id: client.title,\n                                    // href={client.link.linkUrl}\n                                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientItem),\n                                    onClick: function(e) {\n                                        return handleClick(e);\n                                    },\n                                    children: [\n                                        client.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientOrigin),\n                                            children: [\n                                                \"(\",\n                                                client.origin,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, client.title, true, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientContent),\n                    children: [\n                        clientContent.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: urlFor(clientContent.mainImage),\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientImage)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientDisciplines),\n                            children: clientContent.disciplines\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        clientContent.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: clientContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Client\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectArrow),\n                                    src: \"./projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"37Yare1rXtLq/4+g1TbihUCGpqE=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTs7Ozs7d0NBQ1Y7Ozs7OztnQ0FDQTs7Ozs7O3dCQUVGOzs7Ozs7Z0JBQ0M7cUJBQ1IsQ0FDSjtBQUNILENBQUM7R0E3RnVCOUQsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NsaWVudHMuanM/ZWNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbGllbnRzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50cyhwcm9wcykge1xuICBjb25zdCBbY2xpZW50Q29udGVudCwgc2V0Q2xpZW50Q29udGVudF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2hhc0ltYWdlLCBzZXRIYXNJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IGNsaWVudEl0ZW1zID0gW11cblxuICBjb25zdCBjbGllbnRMaXN0ID0gcHJvcHMuY2xpZW50cy5yZXN1bHRbMF0uc29ydCgoYSwgYikgPT5cbiAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSlcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNsaWVudENvbnRlbnQubWFpbkltYWdlKSB7XG4gICAgICBzZXRIYXNJbWFnZSh0cnVlKVxuICAgIH1cbiAgfSwgW2NsaWVudENvbnRlbnRdKVxuXG4gIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgIHByb2plY3RJZDogJzM2b203aTNkJyxcbiAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIH0pXG5cbiAgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWdCdWlsZGVyLmltYWdlKHNvdXJjZSlcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNsaWVudEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNsaWVudHNfY2xpZW50SXRlbV9fRDhhX3EnKVxuICAgIGlmIChjbGllbnRDb250ZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNsaWVudENvbnRlbnQuYmFja2dyb3VuZENvbG9yXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJhY2tncm91bmQtY29sb3InKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB0YXJnZXRDbGllbnQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IGNvbnRlbnQgPSBjbGllbnRMaXN0LmZpbmQoKGNvbnRlbnQpID0+IGNvbnRlbnQudGl0bGUgPT0gdGFyZ2V0Q2xpZW50KVxuICAgIHNldENsaWVudENvbnRlbnQoY29udGVudClcbiAgICBjbGllbnRJdGVtcy5mb3JFYWNoKChjbGllbnQpID0+IGNsaWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtY2xpZW50JykpXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWNsaWVudCcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IG5hdmlnYXRpb249e3Byb3BzLm5hdmlnYXRpb25Cb2R5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRXcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1wYWdlLXRpdGxlXCI+Q2xpZW50czwvZGl2PlxuICAgICAgICAgIHtjbGllbnRMaXN0Lm1hcCgoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBpZD17Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAga2V5PXtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvLyBocmVmPXtjbGllbnQubGluay5saW5rVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SXRlbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50T3JpZ2lufT4oe2NsaWVudC5vcmlnaW59KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250ZW50fT5cbiAgICAgICAgICB7Y2xpZW50Q29udGVudC5tYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VybEZvcihjbGllbnRDb250ZW50Lm1haW5JbWFnZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50RGlzY2lwbGluZXN9PlxuICAgICAgICAgICAge2NsaWVudENvbnRlbnQuZGlzY2lwbGluZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NsaWVudENvbnRlbnQubGluayAmJiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtjbGllbnRDb250ZW50LmxpbmsubGlua1VybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdExpbmtcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IENsaWVudHsnICd9XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzcz17c3R5bGVzLnByb2plY3RBcnJvd31cbiAgICAgICAgICAgICAgICBzcmM9XCIuL3Byb2plY3RBcnJvdy5zdmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgbmF2aWdhdGlvblF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAnbmF2aWdhdGlvbiddYClcbiAgY29uc3QgbmF2aWdhdGlvblVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske25hdmlnYXRpb25RdWVyeX1dYFxuICBjb25zdCBuYXZpZ2F0aW9uQm9keSA9IGF3YWl0IGZldGNoKG5hdmlnYXRpb25VUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICBjb25zdCBjbGllbnRzUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICdjbGllbnRzJ11gKVxuICBjb25zdCBwcm9qZWN0VVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7Y2xpZW50c1F1ZXJ5fV1gXG4gIGNvbnN0IGNsaWVudHMgPSBhd2FpdCBmZXRjaChwcm9qZWN0VVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hdmlnYXRpb25Cb2R5LFxuICAgICAgY2xpZW50cyxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJpbWFnZVVybEJ1aWxkZXIiLCJDbGllbnRzIiwicHJvcHMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWdCdWlsZGVyIiwiaW1hZ2UiLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXRDbGllbnQiLCJ0YXJnZXQiLCJpZCIsImNvbnRlbnQiLCJjbGllbnRMaXN0IiwiZmluZCIsInRpdGxlIiwic2V0Q2xpZW50Q29udGVudCIsImNsaWVudEl0ZW1zIiwiZm9yRWFjaCIsImNsaWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsaWVudENvbnRlbnQiLCJoYXNJbWFnZSIsInNldEhhc0ltYWdlIiwiY2xpZW50cyIsInJlc3VsdCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtYWluSW1hZ2UiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGllbnRXcmFwcGVyIiwibWFwIiwiY2xpZW50SXRlbSIsIm9uQ2xpY2siLCJzcGFuIiwiY2xpZW50T3JpZ2luIiwib3JpZ2luIiwiaW1nIiwic3JjIiwiY2xpZW50SW1hZ2UiLCJjbGllbnREaXNjaXBsaW5lcyIsImRpc2NpcGxpbmVzIiwibGluayIsImhyZWYiLCJsaW5rVXJsIiwiY2xhc3MiLCJwcm9qZWN0QXJyb3ciLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});