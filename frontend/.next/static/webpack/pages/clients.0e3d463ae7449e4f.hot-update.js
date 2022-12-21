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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Clients.module.css */ \"./styles/Clients.module.css\");\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    // const [clientContent, setClientContent] = useState({})\n    var clientContent = {};\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasImage = ref[0], setHasImage = ref[1];\n    var clientItems = [];\n    var clientList = props.clients.result[0].sort(function(a, b) {\n        return a.title.localeCompare(b.title);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (clientContent.mainImage) {\n            setHasImage(true);\n        }\n    }, [\n        clientContent\n    ]);\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    console.log(clientList);\n    if (true) {\n        clientItems = document.querySelectorAll(\".Clients_clientItem__D8a_q\");\n        if (clientContent) {\n            document.body.style.backgroundColor = clientContent.backgroundColor;\n        } else {\n            document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            navigation: props.navigationBody,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mobile-page-title\",\n                            children: \"Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        clientList.map(function(client) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    id: client.title,\n                                    // href={client.link.linkUrl}\n                                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientItem),\n                                    onClick: function(e) {\n                                        return handleClick(e);\n                                    },\n                                    children: [\n                                        client.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientOrigin),\n                                            children: [\n                                                \"(\",\n                                                client.origin,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, client.title, true, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientContent),\n                    children: [\n                        hasImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: urlFor(clientContent.mainImage),\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientImage)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientDisciplines),\n                            children: clientContent.disciplines\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        clientContent.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: clientContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Client\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectArrow),\n                                    src: \"./projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ0M7cUJBQ1IsQ0FDSjtBQUNILENBQUM7R0FoR3VCaEUsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NsaWVudHMuanM/ZWNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbGllbnRzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50cyhwcm9wcykge1xuICAvLyBjb25zdCBbY2xpZW50Q29udGVudCwgc2V0Q2xpZW50Q29udGVudF0gPSB1c2VTdGF0ZSh7fSlcbiAgbGV0IGNsaWVudENvbnRlbnQgPSB7fVxuICBjb25zdCBbaGFzSW1hZ2UsIHNldEhhc0ltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgY2xpZW50SXRlbXMgPSBbXVxuXG4gIGNvbnN0IGNsaWVudExpc3QgPSBwcm9wcy5jbGllbnRzLnJlc3VsdFswXS5zb3J0KChhLCBiKSA9PlxuICAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2xpZW50Q29udGVudC5tYWluSW1hZ2UpIHtcbiAgICAgIHNldEhhc0ltYWdlKHRydWUpXG4gICAgfVxuICB9LCBbY2xpZW50Q29udGVudF0pXG5cbiAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgcHJvamVjdElkOiAnMzZvbTdpM2QnLFxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgfSlcblxuICBmdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGltZ0J1aWxkZXIuaW1hZ2Uoc291cmNlKVxuICB9XG5cbiAgY29uc29sZS5sb2coY2xpZW50TGlzdClcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjbGllbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5DbGllbnRzX2NsaWVudEl0ZW1fX0Q4YV9xJylcbiAgICBpZiAoY2xpZW50Q29udGVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjbGllbnRDb250ZW50LmJhY2tncm91bmRDb2xvclxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1iYWNrZ3JvdW5kLWNvbG9yJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3QgdGFyZ2V0Q2xpZW50ID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBjb250ZW50ID0gY2xpZW50TGlzdC5maW5kKChjb250ZW50KSA9PiBjb250ZW50LnRpdGxlID09IHRhcmdldENsaWVudClcbiAgICBzZXRDbGllbnRDb250ZW50KGNvbnRlbnQpXG4gICAgY2xpZW50SXRlbXMuZm9yRWFjaCgoY2xpZW50KSA9PiBjbGllbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWNsaWVudCcpKVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1jbGllbnQnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBuYXZpZ2F0aW9uPXtwcm9wcy5uYXZpZ2F0aW9uQm9keX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50V3JhcHBlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtcGFnZS10aXRsZVwiPkNsaWVudHM8L2Rpdj5cbiAgICAgICAgICB7Y2xpZW50TGlzdC5tYXAoKGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaWQ9e2NsaWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGtleT17Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLy8gaHJlZj17Y2xpZW50LmxpbmsubGlua1VybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEl0ZW19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NsaWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudE9yaWdpbn0+KHtjbGllbnQub3JpZ2lufSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50Q29udGVudH0+XG4gICAgICAgICAge2hhc0ltYWdlICYmIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoY2xpZW50Q29udGVudC5tYWluSW1hZ2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudERpc2NpcGxpbmVzfT5cbiAgICAgICAgICAgIHtjbGllbnRDb250ZW50LmRpc2NpcGxpbmVzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjbGllbnRDb250ZW50LmxpbmsgJiYgKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17Y2xpZW50Q29udGVudC5saW5rLmxpbmtVcmx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RMaW5rXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBDbGllbnR7JyAnfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3M9e3N0eWxlcy5wcm9qZWN0QXJyb3d9XG4gICAgICAgICAgICAgICAgc3JjPVwiLi9wcm9qZWN0QXJyb3cuc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IG5hdmlnYXRpb25RdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gJ25hdmlnYXRpb24nXWApXG4gIGNvbnN0IG5hdmlnYXRpb25VUkwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT1bJHtuYXZpZ2F0aW9uUXVlcnl9XWBcbiAgY29uc3QgbmF2aWdhdGlvbkJvZHkgPSBhd2FpdCBmZXRjaChuYXZpZ2F0aW9uVVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbiAgY29uc3QgY2xpZW50c1F1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAnY2xpZW50cyddYClcbiAgY29uc3QgcHJvamVjdFVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske2NsaWVudHNRdWVyeX1dYFxuICBjb25zdCBjbGllbnRzID0gYXdhaXQgZmV0Y2gocHJvamVjdFVSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBuYXZpZ2F0aW9uQm9keSxcbiAgICAgIGNsaWVudHMsXG4gICAgfSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGF5b3V0IiwiaW1hZ2VVcmxCdWlsZGVyIiwiQ2xpZW50cyIsInByb3BzIiwidXJsRm9yIiwic291cmNlIiwiaW1nQnVpbGRlciIsImltYWdlIiwiaGFuZGxlQ2xpY2siLCJlIiwidGFyZ2V0Q2xpZW50IiwidGFyZ2V0IiwiaWQiLCJjb250ZW50IiwiY2xpZW50TGlzdCIsImZpbmQiLCJ0aXRsZSIsInNldENsaWVudENvbnRlbnQiLCJjbGllbnRJdGVtcyIsImZvckVhY2giLCJjbGllbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjbGllbnRDb250ZW50IiwiaGFzSW1hZ2UiLCJzZXRIYXNJbWFnZSIsImNsaWVudHMiLCJyZXN1bHQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwibWFpbkltYWdlIiwicHJvamVjdElkIiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uQm9keSIsImRpdiIsImNsYXNzTmFtZSIsImNsaWVudFdyYXBwZXIiLCJtYXAiLCJjbGllbnRJdGVtIiwib25DbGljayIsInNwYW4iLCJjbGllbnRPcmlnaW4iLCJvcmlnaW4iLCJpbWciLCJzcmMiLCJjbGllbnRJbWFnZSIsImNsaWVudERpc2NpcGxpbmVzIiwiZGlzY2lwbGluZXMiLCJsaW5rIiwiaHJlZiIsImxpbmtVcmwiLCJjbGFzcyIsInByb2plY3RBcnJvdyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});