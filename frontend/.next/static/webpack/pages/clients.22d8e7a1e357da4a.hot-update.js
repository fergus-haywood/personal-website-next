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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientsItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), clientContent = ref[0], setClientContent = ref[1];\n    // const clientsItems = document.querySelectorAll('.Clients_clientItem__D8a_q')\n    var clientList = props.clients.result[0].sort(function(a, b) {\n        return a.title.localeCompare(b.title);\n    });\n    console.log(clientList);\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    // const root = document.documentElement\n    // if (clientContent) {\n    //   document.body.style.backgroundColor = clientContent.backgroundColor\n    // } else {\n    //   document.body.style.backgroundColor = getComputedStyle(\n    //     document.body\n    //   ).getPropertyValue('--background-color')\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            navigation: props.navigationBody\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGllbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpRDtBQUNOO0FBQ0Y7QUFDTTs7QUFFaEMsU0FBU0ssT0FBTyxDQUFDQyxLQUFLLEVBQUU7UUFlNUJDLE1BQU0sR0FBZixTQUFTQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtRQUN0QixPQUFPQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDO0lBQ2pDLENBQUM7UUFFUUcsV0FBVyxHQUFwQixTQUFTQSxXQUFXLENBQUNDLENBQUMsRUFBRTtRQUN0QixJQUFNQyxZQUFZLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxFQUFFO1FBQ2hDLElBQU1DLE9BQU8sR0FBR0MsVUFBVSxDQUFDQyxJQUFJLENBQUMsU0FBQ0YsT0FBTzttQkFBS0EsT0FBTyxDQUFDRyxLQUFLLElBQUlOLFlBQVk7U0FBQSxDQUFDO1FBQzNFTyxnQkFBZ0IsQ0FBQ0osT0FBTyxDQUFDO1FBQ3pCSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFDQyxNQUFNO21CQUFLQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQztTQUFBLENBQUM7UUFDMUViLENBQUMsQ0FBQ0UsTUFBTSxDQUFDVSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDekMsQ0FBQzs7SUF4QkQsSUFBMEN6QixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9DMEIsYUFBYSxHQUFzQjFCLEdBQVksR0FBbEMsRUFBRW1CLGdCQUFnQixHQUFJbkIsR0FBWSxHQUFoQjtJQUN0QywrRUFBK0U7SUFFL0UsSUFBTWdCLFVBQVUsR0FBR1gsS0FBSyxDQUFDc0IsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUM7ZUFDbkRELENBQUMsQ0FBQ1osS0FBSyxDQUFDYyxhQUFhLENBQUNELENBQUMsQ0FBQ2IsS0FBSyxDQUFDO0tBQUEsQ0FDL0I7SUFFRGUsT0FBTyxDQUFDQyxHQUFHLENBQUNsQixVQUFVLENBQUM7SUFFdkIsSUFBTVIsVUFBVSxHQUFHTCx3REFBZSxDQUFDO1FBQ2pDZ0MsU0FBUyxFQUFFLFVBQVU7UUFDckJDLE9BQU8sRUFBRSxZQUFZO0tBQ3RCLENBQUM7SUFjRix3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLHdFQUF3RTtJQUN4RSxXQUFXO0lBQ1gsNERBQTREO0lBQzVELG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MsSUFBSTtJQUVKLHFCQUNFO2tCQUNFLDRFQUFDbEMsMERBQU07WUFBQ21DLFVBQVUsRUFBRWhDLEtBQUssQ0FBQ2lDLGNBQWM7Ozs7O2dCQTRDL0I7cUJBQ1IsQ0FDSjtBQUNILENBQUM7R0FyRnVCbEMsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NsaWVudHMuanM/ZWNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbGllbnRzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50cyhwcm9wcykge1xuICBjb25zdCBbY2xpZW50Q29udGVudCwgc2V0Q2xpZW50Q29udGVudF0gPSB1c2VTdGF0ZSh7fSlcbiAgLy8gY29uc3QgY2xpZW50c0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNsaWVudHNfY2xpZW50SXRlbV9fRDhhX3EnKVxuXG4gIGNvbnN0IGNsaWVudExpc3QgPSBwcm9wcy5jbGllbnRzLnJlc3VsdFswXS5zb3J0KChhLCBiKSA9PlxuICAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxuICApXG5cbiAgY29uc29sZS5sb2coY2xpZW50TGlzdClcblxuICBjb25zdCBpbWdCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHtcbiAgICBwcm9qZWN0SWQ6ICczNm9tN2kzZCcsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICB9KVxuXG4gIGZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1nQnVpbGRlci5pbWFnZShzb3VyY2UpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3QgdGFyZ2V0Q2xpZW50ID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCBjb250ZW50ID0gY2xpZW50TGlzdC5maW5kKChjb250ZW50KSA9PiBjb250ZW50LnRpdGxlID09IHRhcmdldENsaWVudClcbiAgICBzZXRDbGllbnRDb250ZW50KGNvbnRlbnQpXG4gICAgY2xpZW50c0l0ZW1zLmZvckVhY2goKGNsaWVudCkgPT4gY2xpZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1jbGllbnQnKSlcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtY2xpZW50JylcbiAgfVxuXG4gIC8vIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgLy8gaWYgKGNsaWVudENvbnRlbnQpIHtcbiAgLy8gICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNsaWVudENvbnRlbnQuYmFja2dyb3VuZENvbG9yXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKFxuICAvLyAgICAgZG9jdW1lbnQuYm9keVxuICAvLyAgICkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1iYWNrZ3JvdW5kLWNvbG9yJylcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgbmF2aWdhdGlvbj17cHJvcHMubmF2aWdhdGlvbkJvZHl9PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRXcmFwcGVyfT5cbiAgICAgICAgICB7Y2xpZW50TGlzdC5tYXAoKGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaWQ9e2NsaWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGtleT17Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLy8gaHJlZj17Y2xpZW50LmxpbmsubGlua1VybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEl0ZW19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NsaWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudE9yaWdpbn0+KHtjbGllbnQub3JpZ2lufSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50Q29udGVudH0+XG4gICAgICAgICAge2NsaWVudENvbnRlbnQubWFpbkltYWdlICYmIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoY2xpZW50Q29udGVudC5tYWluSW1hZ2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudERpc2NpcGxpbmVzfT5cbiAgICAgICAgICAgIHtjbGllbnRDb250ZW50LmRpc2NpcGxpbmVzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjbGllbnRDb250ZW50LmxpbmsgJiYgKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17Y2xpZW50Q29udGVudC5saW5rLmxpbmtVcmx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RMaW5rXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBDbGllbnR7JyAnfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3M9e3N0eWxlcy5wcm9qZWN0QXJyb3d9XG4gICAgICAgICAgICAgICAgc3JjPVwiLi9wcm9qZWN0QXJyb3cuc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBuYXZpZ2F0aW9uUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICduYXZpZ2F0aW9uJ11gKVxuICBjb25zdCBuYXZpZ2F0aW9uVVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7bmF2aWdhdGlvblF1ZXJ5fV1gXG4gIGNvbnN0IG5hdmlnYXRpb25Cb2R5ID0gYXdhaXQgZmV0Y2gobmF2aWdhdGlvblVSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIGNvbnN0IGNsaWVudHNRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gJ2NsaWVudHMnXWApXG4gIGNvbnN0IHByb2plY3RVUkwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT1bJHtjbGllbnRzUXVlcnl9XWBcbiAgY29uc3QgY2xpZW50cyA9IGF3YWl0IGZldGNoKHByb2plY3RVUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbmF2aWdhdGlvbkJvZHksXG4gICAgICBjbGllbnRzLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxheW91dCIsImltYWdlVXJsQnVpbGRlciIsIkNsaWVudHMiLCJwcm9wcyIsInVybEZvciIsInNvdXJjZSIsImltZ0J1aWxkZXIiLCJpbWFnZSIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldENsaWVudCIsInRhcmdldCIsImlkIiwiY29udGVudCIsImNsaWVudExpc3QiLCJmaW5kIiwidGl0bGUiLCJzZXRDbGllbnRDb250ZW50IiwiY2xpZW50c0l0ZW1zIiwiZm9yRWFjaCIsImNsaWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsaWVudENvbnRlbnQiLCJjbGllbnRzIiwicmVzdWx0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwibmF2aWdhdGlvbiIsIm5hdmlnYXRpb25Cb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});