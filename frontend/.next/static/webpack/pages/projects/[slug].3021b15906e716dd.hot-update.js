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

/***/ "./components/ProjectList.js":
/*!***********************************!*\
  !*** ./components/ProjectList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Projects.module.css */ \"./styles/Projects.module.css\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction ProjectList(param) {\n    var projects = param.projects;\n    var _this = this;\n    console.log(projects);\n    var projectList = projects;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2___default().projectList),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: projectList.map(function(project) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/projects/\".concat(project.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        id: project.title,\n                        className: \"navItem\",\n                        children: [\n                            project.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientOrigin),\n                                children: [\n                                    \"(\",\n                                    project.origin,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                                lineNumber: 15,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, project.title, true, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                        lineNumber: 13,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/ProjectList.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectList;\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUN0QjtBQUViLFNBQVNFLFdBQVcsQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROztJQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztJQUNyQixJQUFNRyxXQUFXLEdBQUdILFFBQVE7SUFDNUIscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUixnRkFBa0I7a0JBQ2hDLDRFQUFDUyxJQUFFO3NCQUNBSCxXQUFXLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7Z0JBQzVCLHFCQUNFLDhEQUFDVixrREFBSTtvQkFBQ1csSUFBSSxFQUFFLFlBQVcsQ0FBYSxPQUFYRCxPQUFPLENBQUNFLEVBQUUsQ0FBRTs4QkFDbkMsNEVBQUNDLElBQUU7d0JBQUNELEVBQUUsRUFBRUYsT0FBTyxDQUFDSSxLQUFLO3dCQUFzQlAsU0FBUyxFQUFDLFNBQVM7OzRCQUMzREcsT0FBTyxDQUFDSSxLQUFLOzBDQUNkLDhEQUFDQyxNQUFJO2dDQUFDUixTQUFTLEVBQUVSLGlGQUFtQjs7b0NBQUUsR0FBQztvQ0FBQ1csT0FBTyxDQUFDTyxNQUFNO29DQUFDLEdBQUM7Ozs7OztxQ0FBTzs7dUJBRnJDUCxPQUFPLENBQUNJLEtBQUs7Ozs7NkJBR3BDOzs7Ozt5QkFDQSxDQUNSO1lBQ0gsQ0FBQyxDQUFDOzs7OztnQkFDQzs7Ozs7WUFDRCxDQUNQO0FBQ0gsQ0FBQztBQW5CdUJiLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0TGlzdC5qcz8wM2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2plY3RzLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMaXN0KHsgcHJvamVjdHMgfSkge1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0c1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdExpc3R9PlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvamVjdExpc3QubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9qZWN0LmlkfWB9PlxuICAgICAgICAgICAgICA8bGkgaWQ9e3Byb2plY3QudGl0bGV9IGtleT17cHJvamVjdC50aXRsZX0gY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudE9yaWdpbn0+KHtwcm9qZWN0Lm9yaWdpbn0pPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsIlByb2plY3RMaXN0IiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwicHJvamVjdExpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInByb2plY3QiLCJocmVmIiwiaWQiLCJsaSIsInRpdGxlIiwic3BhbiIsImNsaWVudE9yaWdpbiIsIm9yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectList.js\n"));

/***/ }),

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProjectList */ \"./components/ProjectList.js\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Projects.module.css */ \"./styles/Projects.module.css\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Project(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var projectContent = props.project.result[0][0];\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        navigation: props.navigationBody,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectContent),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectContentInner),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            blocks: projectContent.body\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        projectContent.extraCredits && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().extraCredit),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                blocks: projectContent.extraCredits\n                            }, void 0, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectDisciplines),\n                            children: projectContent.projectDisciplines.map(function(discipline) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectDisciplineItem),\n                                    children: discipline.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: projectContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Project\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectArrow),\n                                    src: \"./projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectImages),\n                children: projectContent.projectImages.map(function(image, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(image.image).width(2000),\n                        className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().projectImage)\n                    }, i, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNLO0FBQ1U7QUFDRDtBQUNOO0FBQ1U7O0FBRTFDLFNBQVNNLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFOztRQUc1QkMsTUFBTSxHQUFmLFNBQVNBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO1FBQ3RCLE9BQU9DLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDRixNQUFNLENBQUM7SUFDakMsQ0FBQztJQUpELElBQU1HLGNBQWMsR0FBR0wsS0FBSyxDQUFDTSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNakQsSUFBTUosVUFBVSxHQUFHTix3REFBZSxDQUFDO1FBQ2pDVyxTQUFTLEVBQUUsVUFBVTtRQUNyQkMsT0FBTyxFQUFFLFlBQVk7S0FDdEIsQ0FBQztJQUNGLHFCQUNFLDhEQUFDZiwwREFBTTtRQUFDZ0IsVUFBVSxFQUFFVixLQUFLLENBQUNXLGNBQWM7OzBCQUN0Qyw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFakIsbUZBQXFCOzBCQUNuQyw0RUFBQ2dCLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWpCLHdGQUEwQjs7c0NBQ3hDLDhEQUFDRSx1RUFBWTs0QkFBQ2lCLE1BQU0sRUFBRVYsY0FBYyxDQUFDVyxJQUFJOzs7OztnQ0FBSTt3QkFDNUNYLGNBQWMsQ0FBQ1ksWUFBWSxrQkFDMUIsOERBQUNMLEtBQUc7NEJBQUNDLFNBQVMsRUFBRWpCLGdGQUFrQjtzQ0FDaEMsNEVBQUNFLHVFQUFZO2dDQUFDaUIsTUFBTSxFQUFFVixjQUFjLENBQUNZLFlBQVk7Ozs7O29DQUFJOzs7OztnQ0FDakQ7c0NBRVIsOERBQUNMLEtBQUc7NEJBQUNDLFNBQVMsRUFBRWpCLHVGQUF5QjtzQ0FDdENTLGNBQWMsQ0FBQ2Msa0JBQWtCLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxVQUFVLEVBQUs7Z0NBQ3JELHFCQUNFLDhEQUFDQyxNQUFJO29DQUFDVCxTQUFTLEVBQUVqQiwwRkFBNEI7OENBQzFDeUIsVUFBVSxDQUFDRyxJQUFJOzs7Ozt5Q0FDWCxDQUNSOzRCQUNILENBQUMsQ0FBQzs7Ozs7Z0NBQ0U7c0NBQ04sOERBQUNDLEdBQUM7NEJBQ0FDLElBQUksRUFBRXJCLGNBQWMsQ0FBQ3NCLElBQUksQ0FBQ0MsT0FBTzs0QkFDakNmLFNBQVMsRUFBQyxhQUFhOzRCQUN2QmdCLE1BQU0sRUFBQyxRQUFROztnQ0FDaEIsY0FDYTtnQ0FBQyxHQUFHOzhDQUNoQiw4REFBQ0MsS0FBRztvQ0FDRmpCLFNBQVMsRUFBRWpCLGlGQUFtQjtvQ0FDOUJvQyxHQUFHLEVBQUMsb0JBQW9CO29DQUN4QkMsS0FBSyxFQUFDLElBQUk7Ozs7O3dDQUNWOzs7Ozs7Z0NBQ0E7Ozs7Ozt3QkFDQTs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNyQixLQUFHO2dCQUFDQyxTQUFTLEVBQUVqQixrRkFBb0I7MEJBQ2pDUyxjQUFjLENBQUM2QixhQUFhLENBQUNkLEdBQUcsQ0FBQyxTQUFDaEIsS0FBSyxFQUFFK0IsQ0FBQyxFQUFLO29CQUM5QyxxQkFDRSw4REFBQ0wsS0FBRzt3QkFFRkUsR0FBRyxFQUFFL0IsTUFBTSxDQUFDRyxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDNkIsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDcENwQixTQUFTLEVBQUVqQixpRkFBbUI7dUJBRnpCdUMsQ0FBQzs7Ozs2QkFHTixDQUNIO2dCQUNILENBQUMsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNDLENBQ1Y7QUFDSCxDQUFDO0FBekR1QnBDLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzPzc3MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvamVjdExpc3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuY3NzJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHByb3BzKSB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gcHJvcHMucHJvamVjdC5yZXN1bHRbMF1bMF1cblxuICBmdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGltZ0J1aWxkZXIuaW1hZ2Uoc291cmNlKVxuICB9XG5cbiAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgcHJvamVjdElkOiAnMzZvbTdpM2QnLFxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG5hdmlnYXRpb249e3Byb3BzLm5hdmlnYXRpb25Cb2R5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdENvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RDb250ZW50SW5uZXJ9PlxuICAgICAgICAgIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtwcm9qZWN0Q29udGVudC5ib2R5fSAvPlxuICAgICAgICAgIHtwcm9qZWN0Q29udGVudC5leHRyYUNyZWRpdHMgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leHRyYUNyZWRpdH0+XG4gICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtwcm9qZWN0Q29udGVudC5leHRyYUNyZWRpdHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdERpc2NpcGxpbmVzfT5cbiAgICAgICAgICAgIHtwcm9qZWN0Q29udGVudC5wcm9qZWN0RGlzY2lwbGluZXMubWFwKChkaXNjaXBsaW5lKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdERpc2NpcGxpbmVJdGVtfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNjaXBsaW5lLnRleHR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17cHJvamVjdENvbnRlbnQubGluay5saW5rVXJsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdExpbmtcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IFByb2plY3R7JyAnfVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0QXJyb3d9XG4gICAgICAgICAgICAgIHNyYz1cIi4vcHJvamVjdEFycm93LnN2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWFnZXN9PlxuICAgICAgICB7cHJvamVjdENvbnRlbnQucHJvamVjdEltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZS5pbWFnZSkud2lkdGgoMjAwMCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocGFnZUNvbnRleHQpIHtcbiAgY29uc3QgcGFnZVNsdWcgPSBwYWdlQ29udGV4dC5xdWVyeS5zbHVnXG5cbiAgaWYgKCFwYWdlU2x1Zykge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBuYXZpZ2F0aW9uUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICduYXZpZ2F0aW9uJ11gKVxuICBjb25zdCBuYXZpZ2F0aW9uVVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7bmF2aWdhdGlvblF1ZXJ5fV1gXG4gIGNvbnN0IG5hdmlnYXRpb25Cb2R5ID0gYXdhaXQgZmV0Y2gobmF2aWdhdGlvblVSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIGNvbnN0IHByb2plY3RRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICBgKlsgX3R5cGUgPT0gJ3Byb2plY3RzJyAmJiBpZCA9PSAnJHtwYWdlU2x1Z30nXWBcbiAgKVxuICBjb25zdCBwcm9qZWN0VVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7cHJvamVjdFF1ZXJ5fV1gXG4gIGNvbnN0IHByb2plY3QgPSBhd2FpdCBmZXRjaChwcm9qZWN0VVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbmF2aWdhdGlvbkJvZHksXG4gICAgICB9LFxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxheW91dCIsIlByb2plY3RMaXN0Iiwic3R5bGVzIiwiaW1hZ2VVcmxCdWlsZGVyIiwiQmxvY2tDb250ZW50IiwiUHJvamVjdCIsInByb3BzIiwidXJsRm9yIiwic291cmNlIiwiaW1nQnVpbGRlciIsImltYWdlIiwicHJvamVjdENvbnRlbnQiLCJwcm9qZWN0IiwicmVzdWx0IiwicHJvamVjdElkIiwiZGF0YXNldCIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uQm9keSIsImRpdiIsImNsYXNzTmFtZSIsInByb2plY3RDb250ZW50SW5uZXIiLCJibG9ja3MiLCJib2R5IiwiZXh0cmFDcmVkaXRzIiwiZXh0cmFDcmVkaXQiLCJwcm9qZWN0RGlzY2lwbGluZXMiLCJtYXAiLCJkaXNjaXBsaW5lIiwic3BhbiIsInByb2plY3REaXNjaXBsaW5lSXRlbSIsInRleHQiLCJhIiwiaHJlZiIsImxpbmsiLCJsaW5rVXJsIiwidGFyZ2V0IiwiaW1nIiwicHJvamVjdEFycm93Iiwic3JjIiwid2lkdGgiLCJwcm9qZWN0SW1hZ2VzIiwiaSIsInByb2plY3RJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n"));

/***/ })

});