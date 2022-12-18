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

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MobileProjectSlideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MobileProjectSlideshow */ \"./components/MobileProjectSlideshow.js\");\n/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProjectList */ \"./components/ProjectList.js\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Projects.module.css */ \"./styles/Projects.module.css\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Project(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var projectContent = props.project.result[0][0];\n    var projectList = props.projects.result[0];\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    // console.log(urlFor(projectContent.projectImages[0].image))\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        navigation: props.navigationBody,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                projects: projectList\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectContent),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectContentInner),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            blocks: projectContent.body\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        projectContent.extraCredits && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().extraCredit),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                blocks: projectContent.extraCredits\n                            }, void 0, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectDisciplines),\n                            children: projectContent.projectDisciplines.map(function(discipline) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectDisciplineItem),\n                                    children: discipline.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: projectContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Project\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectArrow),\n                                    src: \"../projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectImages),\n                children: projectContent.projectImages.map(function(image, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(image.image).width(2000),\n                        className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_7___default().projectImage)\n                    }, i, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/projects/[slug].js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3RzL1tzbHVnXS5qcz83NzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNb2JpbGVQcm9qZWN0U2xpZGVzaG93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9iaWxlUHJvamVjdFNsaWRlc2hvdydcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2plY3RMaXN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLmNzcydcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChwcm9wcykge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IHByb3BzLnByb2plY3QucmVzdWx0WzBdWzBdXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gcHJvcHMucHJvamVjdHMucmVzdWx0WzBdXG5cbiAgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWdCdWlsZGVyLmltYWdlKHNvdXJjZSlcbiAgfVxuXG4gIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgIHByb2plY3RJZDogJzM2b203aTNkJyxcbiAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIH0pXG5cbiAgLy8gY29uc29sZS5sb2codXJsRm9yKHByb2plY3RDb250ZW50LnByb2plY3RJbWFnZXNbMF0uaW1hZ2UpKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbmF2aWdhdGlvbj17cHJvcHMubmF2aWdhdGlvbkJvZHl9PlxuICAgICAgPFByb2plY3RMaXN0IHByb2plY3RzPXtwcm9qZWN0TGlzdH0gLz5cbiAgICAgIHsvKiA8TW9iaWxlUHJvamVjdFNsaWRlc2hvdyBwcm9qZWN0PXtwcm9qZWN0Q29udGVudH0gLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RDb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0Q29udGVudElubmVyfT5cbiAgICAgICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17cHJvamVjdENvbnRlbnQuYm9keX0gLz5cbiAgICAgICAgICB7cHJvamVjdENvbnRlbnQuZXh0cmFDcmVkaXRzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXh0cmFDcmVkaXR9PlxuICAgICAgICAgICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17cHJvamVjdENvbnRlbnQuZXh0cmFDcmVkaXRzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3REaXNjaXBsaW5lc30+XG4gICAgICAgICAgICB7cHJvamVjdENvbnRlbnQucHJvamVjdERpc2NpcGxpbmVzLm1hcCgoZGlzY2lwbGluZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3REaXNjaXBsaW5lSXRlbX0+XG4gICAgICAgICAgICAgICAgICB7ZGlzY2lwbGluZS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3RDb250ZW50LmxpbmsubGlua1VybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RMaW5rXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBQcm9qZWN0eycgJ31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEFycm93fVxuICAgICAgICAgICAgICBzcmM9XCIuLi9wcm9qZWN0QXJyb3cuc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEltYWdlc30+XG4gICAgICAgIHtwcm9qZWN0Q29udGVudC5wcm9qZWN0SW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlLmltYWdlKS53aWR0aCgyMDAwKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhwYWdlQ29udGV4dCkge1xuICBjb25zdCBwYWdlU2x1ZyA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWdcblxuICBpZiAoIXBhZ2VTbHVnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5hdmlnYXRpb25RdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gJ25hdmlnYXRpb24nXWApXG4gIGNvbnN0IG5hdmlnYXRpb25VUkwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT1bJHtuYXZpZ2F0aW9uUXVlcnl9XWBcbiAgY29uc3QgbmF2aWdhdGlvbkJvZHkgPSBhd2FpdCBmZXRjaChuYXZpZ2F0aW9uVVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbiAgY29uc3QgcHJvamVjdFF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIGAqWyBfdHlwZSA9PSAncHJvamVjdHMnICYmIGlkID09ICcke3BhZ2VTbHVnfSddYFxuICApXG4gIGNvbnN0IHByb2plY3RVUkwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT1bJHtwcm9qZWN0UXVlcnl9XWBcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IGZldGNoKHByb2plY3RVUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICBjb25zdCBwcm9qZWN0c1F1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAncHJvamVjdHMnIF1gKVxuICBjb25zdCBwcm9qZWN0c1VSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske3Byb2plY3RzUXVlcnl9XWBcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBmZXRjaChwcm9qZWN0c1VSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIGlmICghcHJvamVjdCkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHByb2plY3RzLFxuICAgICAgICBuYXZpZ2F0aW9uQm9keSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGF5b3V0IiwiTW9iaWxlUHJvamVjdFNsaWRlc2hvdyIsIlByb2plY3RMaXN0Iiwic3R5bGVzIiwiaW1hZ2VVcmxCdWlsZGVyIiwiQmxvY2tDb250ZW50IiwiUHJvamVjdCIsInByb3BzIiwidXJsRm9yIiwic291cmNlIiwiaW1nQnVpbGRlciIsImltYWdlIiwicHJvamVjdENvbnRlbnQiLCJwcm9qZWN0IiwicmVzdWx0IiwicHJvamVjdExpc3QiLCJwcm9qZWN0cyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9qZWN0Q29udGVudElubmVyIiwiYmxvY2tzIiwiYm9keSIsImV4dHJhQ3JlZGl0cyIsImV4dHJhQ3JlZGl0IiwicHJvamVjdERpc2NpcGxpbmVzIiwibWFwIiwiZGlzY2lwbGluZSIsInNwYW4iLCJwcm9qZWN0RGlzY2lwbGluZUl0ZW0iLCJ0ZXh0IiwiYSIsImhyZWYiLCJsaW5rIiwibGlua1VybCIsInRhcmdldCIsImltZyIsInByb2plY3RBcnJvdyIsInNyYyIsIndpZHRoIiwicHJvamVjdEltYWdlcyIsImkiLCJwcm9qZWN0SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n"));

/***/ })

});