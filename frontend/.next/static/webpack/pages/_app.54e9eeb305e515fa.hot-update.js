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

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Navigation() {\n    var handleClick = // const mainNav = data.result[0].navItems\n    // const socialNav = data.result[1].navItems\n    function handleClick(e) {\n        props.content(e.target.id);\n        document.body.removeAttribute(\"style\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var navgigationQuery, navigationUrl, result, err;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            navgigationQuery = encodeURIComponent(\"*[ _type == 'navigation']\");\n                            navigationUrl = \"https://36om7i3d.api.sanity.io/v1/data/query/production?query=\".concat(navgigationQuery);\n                            return [\n                                4,\n                                fetch(navigationUrl).then(function(res) {\n                                    return res.json();\n                                })\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setData(result);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            err = _state.sent();\n                            console.error(err.message);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data && // <nav className={styles.wrapper}>\n        //   <ul className={styles.mainNavItemList}>\n        //     {mainNav.map((item, i) => {\n        //       return (\n        //         <li\n        //           id={item.text}\n        //           key={item.text}\n        //           className=\"navItem\"\n        //           onClick={(e) => handleClick(e)}\n        //         >\n        //           {item.text}\n        //         </li>\n        //       )\n        //     })}\n        //     <Link href=\"/about\">About Test </Link>\n        //   </ul>\n        //   <ul className={styles.socialNavItemList}>\n        //     {socialNav.map((item, i) => {\n        //       return (\n        //         <li key={item.text} className=\"navItem\">\n        //           <a target=\"_blank\" href={item.navItemUrl.linkUrl}>\n        //             {item.text}\n        //           </a>\n        //         </li>\n        //       )\n        //     })}\n        //   </ul>\n        // </nav>\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Testing Navigation\"\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/Navigation.js\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(Navigation, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBb0Q7QUFDeEI7QUFDZTtBQUM1QixTQUFTSSxVQUFVLEdBQUc7UUFzQjFCQyxXQUFXLEdBSHBCLDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFFNUMsU0FBU0EsV0FBVyxDQUFDQyxDQUFDLEVBQUU7UUFDdEJDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDO1FBQzFCQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUN4QyxDQUFDOztJQXhCRCxJQUF3QlYsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNCVyxJQUFJLEdBQWFYLEdBQVUsR0FBdkIsRUFBRVksT0FBTyxHQUFJWixHQUFVLEdBQWQ7SUFDcEJELGdEQUFTLENBQUMsV0FBTTtpQkFDQ2MsU0FBUzttQkFBVEEsVUFBUzs7aUJBQVRBLFVBQVM7WUFBVEEsVUFBUyxHQUF4QiwrRkFBMkI7b0JBRWpCQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFDYkMsTUFBTSxFQUdMQyxHQUFHOzs7Ozs7Ozs7OzRCQUxKSCxnQkFBZ0IsR0FBR0ksa0JBQWtCLENBQUUsMkJBQXlCLENBQUU7NEJBQ2xFSCxhQUFhLEdBQUcsZ0VBQStELENBQW1CLE9BQWpCRCxnQkFBZ0IsQ0FBRTs0QkFDMUY7O2dDQUFNSyxLQUFLLENBQUNKLGFBQWEsQ0FBQyxDQUFDSyxJQUFJLENBQUMsU0FBQ0MsR0FBRzsyQ0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7aUNBQUEsQ0FBQzs4QkFBQTs7NEJBQTdETixNQUFNLEdBQUcsYUFBb0Q7NEJBRW5FSixPQUFPLENBQUNJLE1BQU0sQ0FBQzs7Ozs7OzRCQUNSQyxHQUFHOzRCQUNWTSxPQUFPLENBQUNDLEtBQUssQ0FBQ1AsR0FBRyxDQUFDUSxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1lBRTlCLENBQUM7bUJBVmNaLFVBQVM7O1FBV3hCQSxTQUFTLEVBQUU7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU5VLE9BQU8sQ0FBQ0csR0FBRyxDQUFDZixJQUFJLENBQUM7SUFVakIscUJBQ0U7a0JBQ0dBLElBQUksSUFDSCxtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIsY0FBYztRQUNkLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLDRDQUE0QztRQUM1QyxZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsVUFBVTtRQUNWLDZDQUE2QztRQUM3QyxVQUFVO1FBQ1YsOENBQThDO1FBQzlDLG9DQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsbURBQW1EO1FBQ25ELCtEQUErRDtRQUMvRCwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixTQUFTO3NCQUNULDhEQUFDZ0IsSUFBRTtzQkFBQyxvQkFBa0I7Ozs7O2dCQUFLO3FCQUU1QixDQUNKO0FBQ0gsQ0FBQztHQTlEdUIxQixVQUFVO0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2IwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5hdmdpZ2F0aW9uUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICduYXZpZ2F0aW9uJ11gKVxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVXJsID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9JHtuYXZnaWdhdGlvblF1ZXJ5fWBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2gobmF2aWdhdGlvblVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gICAgICAgIHNldERhdGEocmVzdWx0KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgLy8gY29uc3QgbWFpbk5hdiA9IGRhdGEucmVzdWx0WzBdLm5hdkl0ZW1zXG4gIC8vIGNvbnN0IHNvY2lhbE5hdiA9IGRhdGEucmVzdWx0WzFdLm5hdkl0ZW1zXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIHByb3BzLmNvbnRlbnQoZS50YXJnZXQuaWQpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgLy8gPG5hdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgLy8gICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubWFpbk5hdkl0ZW1MaXN0fT5cbiAgICAgICAgLy8gICAgIHttYWluTmF2Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAvLyAgICAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgIDxsaVxuICAgICAgICAvLyAgICAgICAgICAgaWQ9e2l0ZW0udGV4dH1cbiAgICAgICAgLy8gICAgICAgICAgIGtleT17aXRlbS50ZXh0fVxuICAgICAgICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2SXRlbVwiXG4gICAgICAgIC8vICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgIC8vICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgLy8gICAgICAgICA8L2xpPlxuICAgICAgICAvLyAgICAgICApXG4gICAgICAgIC8vICAgICB9KX1cbiAgICAgICAgLy8gICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dCBUZXN0IDwvTGluaz5cbiAgICAgICAgLy8gICA8L3VsPlxuICAgICAgICAvLyAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxOYXZJdGVtTGlzdH0+XG4gICAgICAgIC8vICAgICB7c29jaWFsTmF2Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAvLyAgICAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGV4dH0gY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAvLyAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aXRlbS5uYXZJdGVtVXJsLmxpbmtVcmx9PlxuICAgICAgICAvLyAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAvLyAgICAgICAgICAgPC9hPlxuICAgICAgICAvLyAgICAgICAgIDwvbGk+XG4gICAgICAgIC8vICAgICAgIClcbiAgICAgICAgLy8gICAgIH0pfVxuICAgICAgICAvLyAgIDwvdWw+XG4gICAgICAgIC8vIDwvbmF2PlxuICAgICAgICA8aDE+VGVzdGluZyBOYXZpZ2F0aW9uPC9oMT5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJvcHMiLCJjb250ZW50IiwidGFyZ2V0IiwiaWQiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsIm5hdmdpZ2F0aW9uUXVlcnkiLCJuYXZpZ2F0aW9uVXJsIiwicmVzdWx0IiwiZXJyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJsb2ciLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});