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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileProjectSlideshow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction MobileProjectSlideshow(param) {\n    var project = param.project;\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var slideImages = project.projectImages;\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    console.log(slideImages[0].image);\n    // slideImages.forEach((image) => console.log(urlFor(image.image)))\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mobile-project-slideshow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n            loop: true,\n            children: slideImages.map(function(slide, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(slide.image),\n                        className: \"slide-image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_c = MobileProjectSlideshow;\nvar _c;\n$RefreshReg$(_c, \"MobileProjectSlideshow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZVByb2plY3RTbGlkZXNob3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUErQztBQUNHO0FBRS9CO0FBRUosU0FBU0csc0JBQXNCLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTzs7UUFHN0NDLE1BQU0sR0FBZixTQUFTQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtRQUN0QixPQUFPQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFKRCxJQUFNRyxXQUFXLEdBQUdMLE9BQU8sQ0FBQ00sYUFBYTtJQU16QyxJQUFNSCxVQUFVLEdBQUdQLHdEQUFlLENBQUM7UUFDakNXLFNBQVMsRUFBRSxVQUFVO1FBQ3JCQyxPQUFPLEVBQUUsWUFBWTtLQUN0QixDQUFDO0lBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNELEtBQUssQ0FBQztJQUNqQyxtRUFBbUU7SUFDbkUscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDBCQUEwQjtrQkFDdkMsNEVBQUNmLGdEQUFNO1lBQUNnQixJQUFJLEVBQUUsSUFBSTtzQkFDZlIsV0FBVyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxLQUFLO3FDQUM1Qiw4REFBQ2xCLHFEQUFXOzhCQUNWLDRFQUFDbUIsS0FBRzt3QkFBQ0MsR0FBRyxFQUFFakIsTUFBTSxDQUFDYyxLQUFLLENBQUNYLEtBQUssQ0FBQzt3QkFBRVEsU0FBUyxFQUFDLGFBQWE7Ozs7OzZCQUFHOzs7Ozt5QkFDN0M7YUFDZixDQUFDOzs7OztnQkFDSzs7Ozs7WUFDTCxDQUNQO0FBQ0gsQ0FBQztBQXpCdUJiLEtBQUFBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vYmlsZVByb2plY3RTbGlkZXNob3cuanM/ZWM3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCdcblxuaW1wb3J0ICdzd2lwZXIvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVQcm9qZWN0U2xpZGVzaG93KHsgcHJvamVjdCB9KSB7XG4gIGNvbnN0IHNsaWRlSW1hZ2VzID0gcHJvamVjdC5wcm9qZWN0SW1hZ2VzXG5cbiAgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWdCdWlsZGVyLmltYWdlKHNvdXJjZSlcbiAgfVxuXG4gIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgIHByb2plY3RJZDogJzM2b203aTNkJyxcbiAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIH0pXG5cbiAgY29uc29sZS5sb2coc2xpZGVJbWFnZXNbMF0uaW1hZ2UpXG4gIC8vIHNsaWRlSW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiBjb25zb2xlLmxvZyh1cmxGb3IoaW1hZ2UuaW1hZ2UpKSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1wcm9qZWN0LXNsaWRlc2hvd1wiPlxuICAgICAgPFN3aXBlciBsb29wPXt0cnVlfT5cbiAgICAgICAge3NsaWRlSW1hZ2VzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFN3aXBlclNsaWRlPlxuICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihzbGlkZS5pbWFnZSl9IGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgLz5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiaW1hZ2VVcmxCdWlsZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJNb2JpbGVQcm9qZWN0U2xpZGVzaG93IiwicHJvamVjdCIsInVybEZvciIsInNvdXJjZSIsImltZ0J1aWxkZXIiLCJpbWFnZSIsInNsaWRlSW1hZ2VzIiwicHJvamVjdEltYWdlcyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9vcCIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MobileProjectSlideshow.js\n"));

/***/ })

});