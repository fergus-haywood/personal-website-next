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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n:root {\\n  --accent-color: #00E723;\\n  --short-transition: 200ms cubic-bezier(.1,.76,.49,.97);\\n  --background-color: #F7F8FA;\\n  --color: #000000;\\n\\n  --light-background: #F7F8FA;\\n  --dark-background: #000000;\\n  --cream-background: #FFFEF2;\\n}\\n\\n::-moz-selection { \\n  background-color: var(--accent-color);\\n}\\n\\n::selection { \\n  background-color: var(--accent-color);\\n}\\n\\nbutton { \\n  background-color: transparent;\\n  border: none;\\n  padding: 0;\\n}\\n\\na { \\n  transition: color var(--short-transition);\\n}\\n\\na:hover { \\n  color: var(--accent-color);\\n}\\n\\n@import url(\\\"https://use.typekit.net/aij1aqx.css\\\");\\n\\nhtml,\\nbody { \\n  font-size: 18px !important;\\n  font-family: 'neue-haas-grotesk-text', Helvetica;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--background-color);\\n  color: var(--color);\\n  transition: color var(--short-transition), background-color var(--short-transition);\\n}\\n\\nh1, h2, h3, h4 { \\n  margin: 0;\\n  font-weight: normal;\\n}\\n\\nul, p { \\n  margin: 0;\\n  padding: 0;\\n}\\n\\nli { \\n  list-style: none;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.active-client {\\n  color: white !important;\\n}\\n.active-project {\\n  color: var(--accent-color) !important;\\n}\\n\\n.navItem { \\n  cursor: pointer;\\n  transition: color var(--short-transition);\\n}\\n\\n.navItem:hover { \\n  color: var(--accent-color);\\n}\\n\\n\\n.projectLink { \\n  display: block;\\n  margin-top: 40px;\\n  color: var(--accent-color);\\n  overflow: hidden;\\n  position: relative;\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  padding-bottom: 4px;\\n}\\n\\n\\n/* Fade in */\\n.projectLink::after {\\n\\tcontent: '';\\n\\tposition: absolute;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\twidth: 100%;\\n\\theight: 0.1em;\\n  opacity: 1;\\n\\tbackground-color: var(--accent-color);\\n  overflow: hidden;\\n\\ttransition: opacity var(--short-transition), transform var(--short-transition);\\n  transform: translate3d(-100%, 0, 0);\\n}\\n\\n.projectLink:hover::after {\\n  transform: translate3d(0, 0, 0);\\n}\\n\\n.contactWrapper { \\n  grid-column: 2 / span 3;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.form { \\n  display: flex;\\n  flex-direction: column;\\n  font-size: 18px;\\n}\\n\\n.form label { \\n  margin-bottom: 8px;\\n}\\n.form input { \\n  height: 35px;\\n  border: 1px solid var(--color);\\n  border-radius: 13.5px;\\n  margin-bottom: 20px;\\n  width: 300px;\\n  font-size: 18px;\\n  padding-left: 10px;\\n  background-color: transparent;\\n  color: var(--color);\\n}\\n\\n.form textarea { \\n  width: 450px;\\n  height: 140px;\\n  border-radius: 13.5px;\\n  border: 1px solid var(--color);\\n  padding: 10px 10px;\\n  font-family: 'neue-haas-grotesk-text', Helvetica;\\n  background-color: transparent;\\n  font-size: 18px;\\n  color: var(--color);\\n}\\n\\n.form button { \\n  cursor: pointer;\\n  font-size: 18px;\\n}\\n\\n.form input:focus-visible,\\n.form textarea:focus-visible { \\n  outline: 2px solid var(--accent-color);\\n}\\n\\n.form-email { \\n   width: 340px !important;\\n}\\n\\n.heading { \\n  margin-bottom: 80px;\\n}\\n\\n.form-send-arrow { \\n  margin: 0 0 1px 2px;\\n}\\n\\n.mobileNavWrapper { \\n  margin-top: 30px;\\n  display: grid;\\n  grid-column: 1 / span 5;\\n  grid-template-columns: repeat(5, 1fr);\\n  display: none;\\n}\\n\\n.mobileNavWrapper.is-active { \\n  display: grid;\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\";AACA;EACE,uBAAuB;EACvB,sDAAsD;EACtD,2BAA2B;EAC3B,gBAAgB;;EAEhB,2BAA2B;EAC3B,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,qCAAqC;AACvC;;AAFA;EACE,qCAAqC;AACvC;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,kDAAkD;;AAElD;;EAEE,0BAA0B;EAC1B,gDAAgD;AAClD;;AAEA;EACE,UAAU;EACV,SAAS;EACT,yCAAyC;EACzC,mBAAmB;EACnB,mFAAmF;AACrF;;AAEA;EACE,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;AAC5B;;;AAGA;EACE,cAAc;EACd,gBAAgB;EAChB,0BAA0B;EAC1B,gBAAgB;EAChB,kBAAkB;EAClB,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,mBAAmB;AACrB;;;AAGA,YAAY;AACZ;CACC,WAAW;CACX,kBAAkB;CAClB,SAAS;CACT,OAAO;CACP,WAAW;CACX,aAAa;EACZ,UAAU;CACX,qCAAqC;EACpC,gBAAgB;CACjB,8EAA8E;EAC7E,mCAAmC;AACrC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,8BAA8B;EAC9B,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B,kBAAkB;EAClB,gDAAgD;EAChD,6BAA6B;EAC7B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;GACG,uBAAuB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,qCAAqC;EACrC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;AACZ\",\"sourcesContent\":[\"\\n:root {\\n  --accent-color: #00E723;\\n  --short-transition: 200ms cubic-bezier(.1,.76,.49,.97);\\n  --background-color: #F7F8FA;\\n  --color: #000000;\\n\\n  --light-background: #F7F8FA;\\n  --dark-background: #000000;\\n  --cream-background: #FFFEF2;\\n}\\n\\n::selection { \\n  background-color: var(--accent-color);\\n}\\n\\nbutton { \\n  background-color: transparent;\\n  border: none;\\n  padding: 0;\\n}\\n\\na { \\n  transition: color var(--short-transition);\\n}\\n\\na:hover { \\n  color: var(--accent-color);\\n}\\n\\n@import url(\\\"https://use.typekit.net/aij1aqx.css\\\");\\n\\nhtml,\\nbody { \\n  font-size: 18px !important;\\n  font-family: 'neue-haas-grotesk-text', Helvetica;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--background-color);\\n  color: var(--color);\\n  transition: color var(--short-transition), background-color var(--short-transition);\\n}\\n\\nh1, h2, h3, h4 { \\n  margin: 0;\\n  font-weight: normal;\\n}\\n\\nul, p { \\n  margin: 0;\\n  padding: 0;\\n}\\n\\nli { \\n  list-style: none;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.active-client {\\n  color: white !important;\\n}\\n.active-project {\\n  color: var(--accent-color) !important;\\n}\\n\\n.navItem { \\n  cursor: pointer;\\n  transition: color var(--short-transition);\\n}\\n\\n.navItem:hover { \\n  color: var(--accent-color);\\n}\\n\\n\\n.projectLink { \\n  display: block;\\n  margin-top: 40px;\\n  color: var(--accent-color);\\n  overflow: hidden;\\n  position: relative;\\n  width: fit-content;\\n  padding-bottom: 4px;\\n}\\n\\n\\n/* Fade in */\\n.projectLink::after {\\n\\tcontent: '';\\n\\tposition: absolute;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\twidth: 100%;\\n\\theight: 0.1em;\\n  opacity: 1;\\n\\tbackground-color: var(--accent-color);\\n  overflow: hidden;\\n\\ttransition: opacity var(--short-transition), transform var(--short-transition);\\n  transform: translate3d(-100%, 0, 0);\\n}\\n\\n.projectLink:hover::after {\\n  transform: translate3d(0, 0, 0);\\n}\\n\\n.contactWrapper { \\n  grid-column: 2 / span 3;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.form { \\n  display: flex;\\n  flex-direction: column;\\n  font-size: 18px;\\n}\\n\\n.form label { \\n  margin-bottom: 8px;\\n}\\n.form input { \\n  height: 35px;\\n  border: 1px solid var(--color);\\n  border-radius: 13.5px;\\n  margin-bottom: 20px;\\n  width: 300px;\\n  font-size: 18px;\\n  padding-left: 10px;\\n  background-color: transparent;\\n  color: var(--color);\\n}\\n\\n.form textarea { \\n  width: 450px;\\n  height: 140px;\\n  border-radius: 13.5px;\\n  border: 1px solid var(--color);\\n  padding: 10px 10px;\\n  font-family: 'neue-haas-grotesk-text', Helvetica;\\n  background-color: transparent;\\n  font-size: 18px;\\n  color: var(--color);\\n}\\n\\n.form button { \\n  cursor: pointer;\\n  font-size: 18px;\\n}\\n\\n.form input:focus-visible,\\n.form textarea:focus-visible { \\n  outline: 2px solid var(--accent-color);\\n}\\n\\n.form-email { \\n   width: 340px !important;\\n}\\n\\n.heading { \\n  margin-bottom: 80px;\\n}\\n\\n.form-send-arrow { \\n  margin: 0 0 1px 2px;\\n}\\n\\n.mobileNavWrapper { \\n  margin-top: 30px;\\n  display: grid;\\n  grid-column: 1 / span 5;\\n  grid-template-columns: repeat(5, 1fr);\\n  display: none;\\n}\\n\\n.mobileNavWrapper.is-active { \\n  display: grid;\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxtREFBbUQsNEJBQTRCLDJEQUEyRCxnQ0FBZ0MscUJBQXFCLGtDQUFrQywrQkFBK0IsZ0NBQWdDLEdBQUcsdUJBQXVCLDBDQUEwQyxHQUFHLGtCQUFrQiwwQ0FBMEMsR0FBRyxhQUFhLGtDQUFrQyxpQkFBaUIsZUFBZSxHQUFHLFFBQVEsOENBQThDLEdBQUcsY0FBYywrQkFBK0IsR0FBRyx5REFBeUQsa0JBQWtCLCtCQUErQixxREFBcUQsR0FBRyxVQUFVLGVBQWUsY0FBYyw4Q0FBOEMsd0JBQXdCLHdGQUF3RixHQUFHLHFCQUFxQixjQUFjLHdCQUF3QixHQUFHLFlBQVksY0FBYyxlQUFlLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLDJCQUEyQixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxtQkFBbUIsMENBQTBDLEdBQUcsZUFBZSxvQkFBb0IsOENBQThDLEdBQUcscUJBQXFCLCtCQUErQixHQUFHLHFCQUFxQixtQkFBbUIscUJBQXFCLCtCQUErQixxQkFBcUIsdUJBQXVCLCtCQUErQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixHQUFHLDBDQUEwQyxnQkFBZ0IsdUJBQXVCLGNBQWMsWUFBWSxnQkFBZ0Isa0JBQWtCLGVBQWUsMENBQTBDLHFCQUFxQixtRkFBbUYsd0NBQXdDLEdBQUcs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QixrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLG9CQUFvQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxnQkFBZ0IsaUJBQWlCLG1DQUFtQywwQkFBMEIsd0JBQXdCLGlCQUFpQixvQkFBb0IsdUJBQXVCLGtDQUFrQyx3QkFBd0IsR0FBRyxxQkFBcUIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsbUNBQW1DLHVCQUF1QixxREFBcUQsa0NBQWtDLG9CQUFvQix3QkFBd0IsR0FBRyxtQkFBbUIsb0JBQW9CLG9CQUFvQixHQUFHLCtEQUErRCwyQ0FBMkMsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixrQkFBa0IsNEJBQTRCLDBDQUEwQyxrQkFBa0IsR0FBRyxrQ0FBa0Msa0JBQWtCLGVBQWUsR0FBRyxxQkFBcUI7QUFDeGlRO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2JjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIC0tYWNjZW50LWNvbG9yOiAjMDBFNzIzO1xcbiAgLS1zaG9ydC10cmFuc2l0aW9uOiAyMDBtcyBjdWJpYy1iZXppZXIoLjEsLjc2LC40OSwuOTcpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgLS1jb2xvcjogIzAwMDAwMDtcXG5cXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI0Y3RjhGQTtcXG4gIC0tZGFyay1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgLS1jcmVhbS1iYWNrZ3JvdW5kOiAjRkZGRUYyO1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEgeyBcXG4gIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXNob3J0LXRyYW5zaXRpb24pO1xcbn1cXG5cXG5hOmhvdmVyIHsgXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FpajFhcXguY3NzXFxcIik7XFxuXFxuaHRtbCxcXG5ib2R5IHsgXFxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXG4gIGZvbnQtZmFtaWx5OiAnbmV1ZS1oYWFzLWdyb3Rlc2stdGV4dCcsIEhlbHZldGljYTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbiksIGJhY2tncm91bmQtY29sb3IgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbik7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0IHsgXFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG51bCwgcCB7IFxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGkgeyBcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFjdGl2ZS1jbGllbnQge1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2SXRlbSB7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbik7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyIHsgXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuXFxuLnByb2plY3RMaW5rIHsgXFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuXFxuLyogRmFkZSBpbiAqL1xcbi5wcm9qZWN0TGluazo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDAuMWVtO1xcbiAgb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXNob3J0LXRyYW5zaXRpb24pLCB0cmFuc2Zvcm0gdmFyKC0tc2hvcnQtdHJhbnNpdGlvbik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG59XFxuXFxuLnByb2plY3RMaW5rOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uY29udGFjdFdyYXBwZXIgeyBcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmZvcm0gbGFiZWwgeyBcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmZvcm0gaW5wdXQgeyBcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHsgXFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICduZXVlLWhhYXMtZ3JvdGVzay10ZXh0JywgSGVsdmV0aWNhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4uZm9ybSBidXR0b24geyBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmZvcm0gaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4uZm9ybSB0ZXh0YXJlYTpmb2N1cy12aXNpYmxlIHsgXFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmZvcm0tZW1haWwgeyBcXG4gICB3aWR0aDogMzQwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmhlYWRpbmcgeyBcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxufVxcblxcbi5mb3JtLXNlbmQtYXJyb3cgeyBcXG4gIG1hcmdpbjogMCAwIDFweCAycHg7XFxufVxcblxcbi5tb2JpbGVOYXZXcmFwcGVyIHsgXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA1O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGVOYXZXcmFwcGVyLmlzLWFjdGl2ZSB7IFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNEQUFzRDtFQUN0RCwyQkFBMkI7RUFDM0IsZ0JBQWdCOztFQUVoQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFGQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGtEQUFrRDs7QUFFbEQ7O0VBRUUsMEJBQTBCO0VBQzFCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixtRkFBbUY7QUFDckY7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7OztBQUdBLFlBQVk7QUFDWjtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULE9BQU87Q0FDUCxXQUFXO0NBQ1gsYUFBYTtFQUNaLFVBQVU7Q0FDWCxxQ0FBcUM7RUFDcEMsZ0JBQWdCO0NBQ2pCLDhFQUE4RTtFQUM3RSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHNDQUFzQztBQUN4Qzs7QUFFQTtHQUNHLHVCQUF1QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290IHtcXG4gIC0tYWNjZW50LWNvbG9yOiAjMDBFNzIzO1xcbiAgLS1zaG9ydC10cmFuc2l0aW9uOiAyMDBtcyBjdWJpYy1iZXppZXIoLjEsLjc2LC40OSwuOTcpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgLS1jb2xvcjogIzAwMDAwMDtcXG5cXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI0Y3RjhGQTtcXG4gIC0tZGFyay1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgLS1jcmVhbS1iYWNrZ3JvdW5kOiAjRkZGRUYyO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEgeyBcXG4gIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXNob3J0LXRyYW5zaXRpb24pO1xcbn1cXG5cXG5hOmhvdmVyIHsgXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FpajFhcXguY3NzXFxcIik7XFxuXFxuaHRtbCxcXG5ib2R5IHsgXFxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXG4gIGZvbnQtZmFtaWx5OiAnbmV1ZS1oYWFzLWdyb3Rlc2stdGV4dCcsIEhlbHZldGljYTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbiksIGJhY2tncm91bmQtY29sb3IgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbik7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0IHsgXFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG51bCwgcCB7IFxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGkgeyBcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFjdGl2ZS1jbGllbnQge1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2SXRlbSB7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbik7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyIHsgXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuXFxuLnByb2plY3RMaW5rIHsgXFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5cXG4vKiBGYWRlIGluICovXFxuLnByb2plY3RMaW5rOjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMC4xZW07XFxuICBvcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tc2hvcnQtdHJhbnNpdGlvbiksIHRyYW5zZm9ybSB2YXIoLS1zaG9ydC10cmFuc2l0aW9uKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbn1cXG5cXG4ucHJvamVjdExpbms6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5jb250YWN0V3JhcHBlciB7IFxcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0geyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7IFxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4uZm9ybSBpbnB1dCB7IFxcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEgeyBcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMy41cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LWZhbWlseTogJ25ldWUtaGFhcy1ncm90ZXNrLXRleHQnLCBIZWx2ZXRpY2E7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZm9ybSBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5mb3JtIHRleHRhcmVhOmZvY3VzLXZpc2libGUgeyBcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9ybS1lbWFpbCB7IFxcbiAgIHdpZHRoOiAzNDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGVhZGluZyB7IFxcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcXG59XFxuXFxuLmZvcm0tc2VuZC1hcnJvdyB7IFxcbiAgbWFyZ2luOiAwIDAgMXB4IDJweDtcXG59XFxuXFxuLm1vYmlsZU5hdldyYXBwZXIgeyBcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU5hdldyYXBwZXIuaXMtYWN0aXZlIHsgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css\n"));

/***/ })

});