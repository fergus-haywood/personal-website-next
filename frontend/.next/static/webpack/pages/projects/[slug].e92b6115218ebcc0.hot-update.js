"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[slug]",{

/***/ "./components/MobileProjectSlideshow.js":
/*!**********************************************!*\
  !*** ./components/MobileProjectSlideshow.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileProjectSlideshow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Projects.module.css */ \"./styles/Projects.module.css\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction MobileProjectSlideshow(param) {\n    var project = param.project;\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var slideImages = project.projectImages;\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    console.log(slideImages[0].image);\n    // slideImages.forEach((image) => console.log(urlFor(image.image)))\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mobile-project-slideshow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n            modules: [\n                Navigation\n            ],\n            loop: true,\n            slidesPerView: 1,\n            spaceBetween: 20,\n            pagination: {\n                clickable: true\n            },\n            onSlideChange: function() {\n                return console.log(\"slide change\");\n            },\n            children: slideImages.map(function(slide, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(slide.image),\n                        className: \"slide-image \".concat((_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectImage))\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_c = MobileProjectSlideshow;\nvar _c;\n$RefreshReg$(_c, \"MobileProjectSlideshow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZVByb2plY3RTbGlkZXNob3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStDO0FBQ0c7QUFDZjtBQUNlO0FBRS9CO0FBQ1c7QUFFZixTQUFTSyxzQkFBc0IsQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztRQUc3Q0MsTUFBTSxHQUFmLFNBQVNBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO1FBQ3RCLE9BQU9DLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDRixNQUFNLENBQUM7SUFDakMsQ0FBQztJQUpELElBQU1HLFdBQVcsR0FBR0wsT0FBTyxDQUFDTSxhQUFhO0lBTXpDLElBQU1ILFVBQVUsR0FBR1Qsd0RBQWUsQ0FBQztRQUNqQ2EsU0FBUyxFQUFFLFVBQVU7UUFDckJDLE9BQU8sRUFBRSxZQUFZO0tBQ3RCLENBQUM7SUFFRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0QsS0FBSyxDQUFDO0lBQ2pDLG1FQUFtRTtJQUNuRSxxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsMEJBQTBCO2tCQUN2Qyw0RUFBQ2pCLGdEQUFNO1lBQ0xrQixPQUFPLEVBQUU7Z0JBQUNDLFVBQVU7YUFBQztZQUNyQkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsYUFBYSxFQUFFLENBQUM7WUFDaEJDLFlBQVksRUFBRSxFQUFFO1lBQ2hCQyxVQUFVLEVBQUU7Z0JBQUVDLFNBQVMsRUFBRSxJQUFJO2FBQUU7WUFDL0JDLGFBQWEsRUFBRTt1QkFBTVgsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO2FBQUE7c0JBRS9DTCxXQUFXLENBQUNnQixHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxLQUFLO3FDQUM1Qiw4REFBQzNCLHFEQUFXOzhCQUNWLDRFQUFDNEIsS0FBRzt3QkFDRkMsR0FBRyxFQUFFeEIsTUFBTSxDQUFDcUIsS0FBSyxDQUFDbEIsS0FBSyxDQUFDO3dCQUN4QlEsU0FBUyxFQUFFLGNBQWEsQ0FBc0IsT0FBcEJkLGlGQUFtQixDQUFFOzs7Ozs2QkFDL0M7Ozs7O3lCQUNVO2FBQ2YsQ0FBQzs7Ozs7Z0JBQ0s7Ozs7O1lBQ0wsQ0FDUDtBQUNILENBQUM7QUFuQ3VCQyxLQUFBQSxzQkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVQcm9qZWN0U2xpZGVzaG93LmpzP2VjNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLmNzcydcblxuaW1wb3J0ICdzd2lwZXIvY3NzJ1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZVByb2plY3RTbGlkZXNob3coeyBwcm9qZWN0IH0pIHtcbiAgY29uc3Qgc2xpZGVJbWFnZXMgPSBwcm9qZWN0LnByb2plY3RJbWFnZXNcblxuICBmdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGltZ0J1aWxkZXIuaW1hZ2Uoc291cmNlKVxuICB9XG5cbiAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgcHJvamVjdElkOiAnMzZvbTdpM2QnLFxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgfSlcblxuICBjb25zb2xlLmxvZyhzbGlkZUltYWdlc1swXS5pbWFnZSlcbiAgLy8gc2xpZGVJbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IGNvbnNvbGUubG9nKHVybEZvcihpbWFnZS5pbWFnZSkpKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXByb2plY3Qtc2xpZGVzaG93XCI+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uXX1cbiAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXsyMH1cbiAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgb25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfVxuICAgICAgPlxuICAgICAgICB7c2xpZGVJbWFnZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKHNsaWRlLmltYWdlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGUtaW1hZ2UgJHtzdHlsZXMucHJvamVjdEltYWdlfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbWFnZVVybEJ1aWxkZXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlBhZ2luYXRpb24iLCJzdHlsZXMiLCJNb2JpbGVQcm9qZWN0U2xpZGVzaG93IiwicHJvamVjdCIsInVybEZvciIsInNvdXJjZSIsImltZ0J1aWxkZXIiLCJpbWFnZSIsInNsaWRlSW1hZ2VzIiwicHJvamVjdEltYWdlcyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsIk5hdmlnYXRpb24iLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJvblNsaWRlQ2hhbmdlIiwibWFwIiwic2xpZGUiLCJpbmRleCIsImltZyIsInNyYyIsInByb2plY3RJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MobileProjectSlideshow.js\n"));

/***/ })

});