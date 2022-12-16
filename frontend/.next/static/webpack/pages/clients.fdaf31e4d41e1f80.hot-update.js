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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Clients.module.css */ \"./styles/Clients.module.css\");\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientsItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), clientContent = ref[0], setClientContent = ref[1];\n    // const clientsItems = document.querySelectorAll('.Clients_clientItem__D8a_q')\n    // const clientList = props.clients.clients.result[0].sort((a, b) =>\n    //   a.title.localeCompare(b.title)\n    // )\n    console.log(props.clients);\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    var root = document.documentElement;\n    if (clientContent) {\n        document.body.style.backgroundColor = clientContent.backgroundColor;\n    } else {\n        document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n            navigation: props.navigationBody,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().clientWrapper),\n                    children: clientList.map(function(client) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                id: client.title,\n                                // href={client.link.linkUrl}\n                                className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().clientItem),\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: [\n                                    client.title,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().clientOrigin),\n                                        children: [\n                                            \"(\",\n                                            client.origin,\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, client.title, true, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().clientContent),\n                    children: [\n                        clientContent.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: urlFor(clientContent.mainImage),\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().clientImage)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().clientDisciplines),\n                            children: clientContent.disciplines\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        clientContent.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: clientContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Client\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_3___default().projectArrow),\n                                    src: \"./projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUc7NEJBQ0ZDLEdBQUcsRUFBRWpELE1BQU0sQ0FBQ29CLGFBQWEsQ0FBQzJCLFNBQVMsQ0FBQzs0QkFDcENULFNBQVMsRUFBRTVDLCtFQUFrQjs7Ozs7Z0NBQzdCO3NDQUVKLDhEQUFDMkMsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFNUMscUZBQXdCO3NDQUNyQzBCLGFBQWEsQ0FBQ2dDLFdBQVc7Ozs7O2dDQUN0Qjt3QkFDTGhDLGFBQWEsQ0FBQ2lDLElBQUksa0JBQ2pCLDhEQUFDWixHQUFDOzRCQUNBYSxJQUFJLEVBQUVsQyxhQUFhLENBQUNpQyxJQUFJLENBQUNFLE9BQU87NEJBQ2hDakIsU0FBUyxFQUFDLGFBQWE7NEJBQ3ZCL0IsTUFBTSxFQUFDLFFBQVE7O2dDQUNoQixhQUNZO2dDQUFDLEdBQUc7OENBQ2YsOERBQUN5QyxLQUFHO29DQUNGUSxLQUFLLEVBQUU5RCxnRkFBbUI7b0NBQzFCdUQsR0FBRyxFQUFDLG9CQUFvQjtvQ0FDeEJTLEtBQUssRUFBQyxJQUFJOzs7Ozt3Q0FDVjs7Ozs7O2dDQUNBOzs7Ozs7d0JBRUY7Ozs7OztnQkFDQztxQkFDUixDQUNKO0FBQ0gsQ0FBQztHQXJGdUI1RCxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50cy5qcz9lY2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NsaWVudHMubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudHMocHJvcHMpIHtcbiAgY29uc3QgW2NsaWVudENvbnRlbnQsIHNldENsaWVudENvbnRlbnRdID0gdXNlU3RhdGUoe30pXG4gIC8vIGNvbnN0IGNsaWVudHNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5DbGllbnRzX2NsaWVudEl0ZW1fX0Q4YV9xJylcblxuICAvLyBjb25zdCBjbGllbnRMaXN0ID0gcHJvcHMuY2xpZW50cy5jbGllbnRzLnJlc3VsdFswXS5zb3J0KChhLCBiKSA9PlxuICAvLyAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxuICAvLyApXG5cbiAgY29uc29sZS5sb2cocHJvcHMuY2xpZW50cylcblxuICBjb25zdCBpbWdCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHtcbiAgICBwcm9qZWN0SWQ6ICczNm9tN2kzZCcsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICB9KVxuXG4gIGZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1nQnVpbGRlci5pbWFnZShzb3VyY2UpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3QgdGFyZ2V0Q2xpZW50ID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBjb250ZW50ID0gY2xpZW50TGlzdC5maW5kKChjb250ZW50KSA9PiBjb250ZW50LnRpdGxlID09IHRhcmdldENsaWVudClcbiAgICBzZXRDbGllbnRDb250ZW50KGNvbnRlbnQpXG4gICAgY2xpZW50c0l0ZW1zLmZvckVhY2goKGNsaWVudCkgPT4gY2xpZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1jbGllbnQnKSlcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtY2xpZW50JylcbiAgfVxuXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgaWYgKGNsaWVudENvbnRlbnQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNsaWVudENvbnRlbnQuYmFja2dyb3VuZENvbG9yXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgICAgZG9jdW1lbnQuYm9keVxuICAgICkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1iYWNrZ3JvdW5kLWNvbG9yJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgbmF2aWdhdGlvbj17cHJvcHMubmF2aWdhdGlvbkJvZHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudFdyYXBwZXJ9PlxuICAgICAgICAgIHtjbGllbnRMaXN0Lm1hcCgoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBpZD17Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAga2V5PXtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvLyBocmVmPXtjbGllbnQubGluay5saW5rVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SXRlbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50T3JpZ2lufT4oe2NsaWVudC5vcmlnaW59KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250ZW50fT5cbiAgICAgICAgICB7Y2xpZW50Q29udGVudC5tYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VybEZvcihjbGllbnRDb250ZW50Lm1haW5JbWFnZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50RGlzY2lwbGluZXN9PlxuICAgICAgICAgICAge2NsaWVudENvbnRlbnQuZGlzY2lwbGluZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NsaWVudENvbnRlbnQubGluayAmJiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtjbGllbnRDb250ZW50LmxpbmsubGlua1VybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdExpbmtcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IENsaWVudHsnICd9XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzcz17c3R5bGVzLnByb2plY3RBcnJvd31cbiAgICAgICAgICAgICAgICBzcmM9XCIuL3Byb2plY3RBcnJvdy5zdmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgbmF2aWdhdGlvblF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAnbmF2aWdhdGlvbiddYClcbiAgY29uc3QgbmF2aWdhdGlvblVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske25hdmlnYXRpb25RdWVyeX1dYFxuICBjb25zdCBuYXZpZ2F0aW9uQm9keSA9IGF3YWl0IGZldGNoKG5hdmlnYXRpb25VUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICBjb25zdCBjbGllbnRzUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICdjbGllbnRzJ11gKVxuICBjb25zdCBwcm9qZWN0VVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7Y2xpZW50c1F1ZXJ5fV1gXG4gIGNvbnN0IGNsaWVudHMgPSBhd2FpdCBmZXRjaChwcm9qZWN0VVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hdmlnYXRpb25Cb2R5LFxuICAgICAgY2xpZW50cyxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbWFnZVVybEJ1aWxkZXIiLCJDbGllbnRzIiwicHJvcHMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWdCdWlsZGVyIiwiaW1hZ2UiLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXRDbGllbnQiLCJ0YXJnZXQiLCJpZCIsImNvbnRlbnQiLCJjbGllbnRMaXN0IiwiZmluZCIsInRpdGxlIiwic2V0Q2xpZW50Q29udGVudCIsImNsaWVudHNJdGVtcyIsImZvckVhY2giLCJjbGllbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjbGllbnRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImNsaWVudHMiLCJwcm9qZWN0SWQiLCJkYXRhc2V0Iiwicm9vdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJMYXlvdXQiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGllbnRXcmFwcGVyIiwibWFwIiwiYSIsImNsaWVudEl0ZW0iLCJvbkNsaWNrIiwic3BhbiIsImNsaWVudE9yaWdpbiIsIm9yaWdpbiIsIm1haW5JbWFnZSIsImltZyIsInNyYyIsImNsaWVudEltYWdlIiwiY2xpZW50RGlzY2lwbGluZXMiLCJkaXNjaXBsaW5lcyIsImxpbmsiLCJocmVmIiwibGlua1VybCIsImNsYXNzIiwicHJvamVjdEFycm93Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});