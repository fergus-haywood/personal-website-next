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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Clients.module.css */ \"./styles/Clients.module.css\");\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), clientContent = ref[0], setClientContent = ref[1];\n    var clientItems = [];\n    var clientList = props.clients.result[0].sort(function(a, b) {\n        return a.title.localeCompare(b.title);\n    });\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    if (true) {\n        clientItems = document.querySelectorAll(\".Clients_clientItem__D8a_q\");\n        if (clientContent) {\n            document.body.style.backgroundColor = clientContent.backgroundColor;\n        } else {\n            document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n        }\n    }\n    console.log(clientContent);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            navigation: props.navigationBody,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientWrapper),\n                children: clientList.map(function(client) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            id: client.title,\n                            // href={client.link.linkUrl}\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientItem),\n                            onClick: function(e) {\n                                return handleClick(e);\n                            },\n                            children: [\n                                client.title,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientOrigin),\n                                    children: [\n                                        \"(\",\n                                        client.origin,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, client.title, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDZ0MsTUFBTTt3Q0FBQyxHQUFDOzs7Ozs7eUNBQU87OzJCQU56RGhDLE1BQU0sQ0FBQ0osS0FBSzs7OztpQ0FPZjtxQ0FDSCxDQUNKO2dCQUNILENBQUMsQ0FBQzs7Ozs7b0JBQ0U7Ozs7O2dCQTBCQztxQkFDUixDQUNKO0FBQ0gsQ0FBQztHQXRGdUJkLE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jbGllbnRzLmpzP2VjYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2xpZW50cy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudHMocHJvcHMpIHtcbiAgY29uc3QgW2NsaWVudENvbnRlbnQsIHNldENsaWVudENvbnRlbnRdID0gdXNlU3RhdGUoe30pXG4gIGxldCBjbGllbnRJdGVtcyA9IFtdXG5cbiAgY29uc3QgY2xpZW50TGlzdCA9IHByb3BzLmNsaWVudHMucmVzdWx0WzBdLnNvcnQoKGEsIGIpID0+XG4gICAgYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpXG4gIClcblxuICBjb25zdCBpbWdCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHtcbiAgICBwcm9qZWN0SWQ6ICczNm9tN2kzZCcsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICB9KVxuXG4gIGZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1nQnVpbGRlci5pbWFnZShzb3VyY2UpXG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjbGllbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5DbGllbnRzX2NsaWVudEl0ZW1fX0Q4YV9xJylcbiAgICBpZiAoY2xpZW50Q29udGVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjbGllbnRDb250ZW50LmJhY2tncm91bmRDb2xvclxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1iYWNrZ3JvdW5kLWNvbG9yJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3QgdGFyZ2V0Q2xpZW50ID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBjb250ZW50ID0gY2xpZW50TGlzdC5maW5kKChjb250ZW50KSA9PiBjb250ZW50LnRpdGxlID09IHRhcmdldENsaWVudClcbiAgICBzZXRDbGllbnRDb250ZW50KGNvbnRlbnQpXG4gICAgY2xpZW50SXRlbXMuZm9yRWFjaCgoY2xpZW50KSA9PiBjbGllbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWNsaWVudCcpKVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1jbGllbnQnKVxuICB9XG5cbiAgY29uc29sZS5sb2coY2xpZW50Q29udGVudClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBuYXZpZ2F0aW9uPXtwcm9wcy5uYXZpZ2F0aW9uQm9keX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50V3JhcHBlcn0+XG4gICAgICAgICAge2NsaWVudExpc3QubWFwKChjbGllbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGlkPXtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICBrZXk9e2NsaWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8vIGhyZWY9e2NsaWVudC5saW5rLmxpbmtVcmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJdGVtfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRPcmlnaW59Pih7Y2xpZW50Lm9yaWdpbn0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250ZW50fT5cbiAgICAgICAgICB7Y2xpZW50Q29udGVudCAmJiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKGNsaWVudENvbnRlbnQubWFpbkltYWdlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SW1hZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnREaXNjaXBsaW5lc30+XG4gICAgICAgICAgICB7Y2xpZW50Q29udGVudC5kaXNjaXBsaW5lc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y2xpZW50Q29udGVudC5saW5rICYmIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2NsaWVudENvbnRlbnQubGluay5saW5rVXJsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0TGlua1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgQ2xpZW50eycgJ31cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzPXtzdHlsZXMucHJvamVjdEFycm93fVxuICAgICAgICAgICAgICAgIHNyYz1cIi4vcHJvamVjdEFycm93LnN2Z1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgbmF2aWdhdGlvblF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAnbmF2aWdhdGlvbiddYClcbiAgY29uc3QgbmF2aWdhdGlvblVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske25hdmlnYXRpb25RdWVyeX1dYFxuICBjb25zdCBuYXZpZ2F0aW9uQm9keSA9IGF3YWl0IGZldGNoKG5hdmlnYXRpb25VUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICBjb25zdCBjbGllbnRzUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICdjbGllbnRzJ11gKVxuICBjb25zdCBwcm9qZWN0VVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7Y2xpZW50c1F1ZXJ5fV1gXG4gIGNvbnN0IGNsaWVudHMgPSBhd2FpdCBmZXRjaChwcm9qZWN0VVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hdmlnYXRpb25Cb2R5LFxuICAgICAgY2xpZW50cyxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJpbWFnZVVybEJ1aWxkZXIiLCJDbGllbnRzIiwicHJvcHMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWdCdWlsZGVyIiwiaW1hZ2UiLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXRDbGllbnQiLCJ0YXJnZXQiLCJpZCIsImNvbnRlbnQiLCJjbGllbnRMaXN0IiwiZmluZCIsInRpdGxlIiwic2V0Q2xpZW50Q29udGVudCIsImNsaWVudEl0ZW1zIiwiZm9yRWFjaCIsImNsaWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsaWVudENvbnRlbnQiLCJjbGllbnRzIiwicmVzdWx0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInByb2plY3RJZCIsImRhdGFzZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGllbnRXcmFwcGVyIiwibWFwIiwiY2xpZW50SXRlbSIsIm9uQ2xpY2siLCJzcGFuIiwiY2xpZW50T3JpZ2luIiwib3JpZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});