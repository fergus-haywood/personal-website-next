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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileProjectSlideshow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slideshow-image */ \"./node_modules/react-slideshow-image/dist/react-slideshow-image.esm.js\");\n/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slideshow-image/dist/styles.css */ \"./node_modules/react-slideshow-image/dist/styles.css\");\n/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MobileProjectSlideshow(param) {\n    var project = param.project;\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var slideImages = project.projectImages;\n    slideImages.forEach(function(image) {\n        return console.log(urlFor(image.image));\n    });\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slide-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n            children: slideImages.map(function(slideImage, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"each-slide-effect\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundImage: \"url(\".concat(urlFor(slideImage.image), \")\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileProjectSlideshow.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_c = MobileProjectSlideshow;\nvar _c;\n$RefreshReg$(_c, \"MobileProjectSlideshow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZVByb2plY3RTbGlkZXNob3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUNDO0FBQ0M7QUFFaEMsU0FBU0Usc0JBQXNCLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTzs7UUFLN0NDLE1BQU0sR0FBZixTQUFTQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtRQUN0QixPQUFPQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFORCxJQUFNRyxXQUFXLEdBQUdMLE9BQU8sQ0FBQ00sYUFBYTtJQUV6Q0QsV0FBVyxDQUFDRSxPQUFPLENBQUMsU0FBQ0gsS0FBSztlQUFLSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDRyxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO0tBQUEsQ0FBQztJQU1oRSxJQUFNRCxVQUFVLEdBQUdMLHdEQUFlLENBQUM7UUFDakNZLFNBQVMsRUFBRSxVQUFVO1FBQ3JCQyxPQUFPLEVBQUUsWUFBWTtLQUN0QixDQUFDO0lBRUYscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlCQUFpQjtrQkFDOUIsNEVBQUNoQix3REFBSztzQkFDSFEsV0FBVyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsVUFBVSxFQUFFQyxLQUFLO3FDQUNqQyw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs4QkFDaEMsNEVBQUNELEtBQUc7d0JBQ0ZLLEtBQUssRUFBRTs0QkFBRUMsZUFBZSxFQUFFLE1BQUssQ0FBMkIsTUFBQyxDQUExQmpCLE1BQU0sQ0FBQ2MsVUFBVSxDQUFDWCxLQUFLLENBQUMsRUFBQyxHQUFDLENBQUM7eUJBQUU7Ozs7OzZCQUN6RDttQkFIK0JZLEtBQUs7Ozs7eUJBSXZDO2FBQ1AsQ0FBQzs7Ozs7Z0JBQ0k7Ozs7O1lBQ0osQ0FDUDtBQUNILENBQUM7QUEzQnVCakIsS0FBQUEsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9iaWxlUHJvamVjdFNsaWRlc2hvdy5qcz9lYzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsaWRlIH0gZnJvbSAncmVhY3Qtc2xpZGVzaG93LWltYWdlJ1xuaW1wb3J0ICdyZWFjdC1zbGlkZXNob3ctaW1hZ2UvZGlzdC9zdHlsZXMuY3NzJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlUHJvamVjdFNsaWRlc2hvdyh7IHByb2plY3QgfSkge1xuICBjb25zdCBzbGlkZUltYWdlcyA9IHByb2plY3QucHJvamVjdEltYWdlc1xuXG4gIHNsaWRlSW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiBjb25zb2xlLmxvZyh1cmxGb3IoaW1hZ2UuaW1hZ2UpKSlcblxuICBmdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGltZ0J1aWxkZXIuaW1hZ2Uoc291cmNlKVxuICB9XG5cbiAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgcHJvamVjdElkOiAnMzZvbTdpM2QnLFxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyXCI+XG4gICAgICA8U2xpZGU+XG4gICAgICAgIHtzbGlkZUltYWdlcy5tYXAoKHNsaWRlSW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYWNoLXNsaWRlLWVmZmVjdFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1cmxGb3Ioc2xpZGVJbWFnZS5pbWFnZSl9KWAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiU2xpZGUiLCJpbWFnZVVybEJ1aWxkZXIiLCJNb2JpbGVQcm9qZWN0U2xpZGVzaG93IiwicHJvamVjdCIsInVybEZvciIsInNvdXJjZSIsImltZ0J1aWxkZXIiLCJpbWFnZSIsInNsaWRlSW1hZ2VzIiwicHJvamVjdEltYWdlcyIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwicHJvamVjdElkIiwiZGF0YXNldCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNsaWRlSW1hZ2UiLCJpbmRleCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MobileProjectSlideshow.js\n"));

/***/ })

});