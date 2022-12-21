"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nmail.setApiKey(process.env.SENDGRID_API_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const body = JSON.parse(req.body);\n    const message = `\n    Name: ${body.name}\\r\\n\n    Email: ${body.email}\\r\\n\n    Message: ${body.message}\n  `;\n    const data = {\n        to: \"hello@fergushaywood.com\",\n        from: \"fergus.haywood5@gmail.com\",\n        subject: `New Website Contact Form Submitted`,\n        text: message,\n        html: message.replace(/\\r\\n/g, \"<br />\")\n    };\n    try {\n        await mail.send(data);\n        res.status(200).json({\n            status: \"OK\"\n        });\n    } catch (err) {\n        console.error(err);\n        res.send(err);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBT0MsbUJBQU9BLENBQUM7QUFFckJELEtBQUtFLFNBQVMsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7QUFFM0MsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNKLElBQUlFLElBQUk7SUFFaEMsTUFBTUcsVUFBVSxDQUFDO1VBQ1QsRUFBRUgsS0FBS0ksSUFBSSxDQUFDO1dBQ1gsRUFBRUosS0FBS0ssS0FBSyxDQUFDO2FBQ1gsRUFBRUwsS0FBS0csT0FBTyxDQUFDO0VBQzFCLENBQUM7SUFFRCxNQUFNRyxPQUFPO1FBQ1hDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTLENBQUMsa0NBQWtDLENBQUM7UUFDN0NDLE1BQU1QO1FBQ05RLE1BQU1SLFFBQVFTLE9BQU8sQ0FBQyxTQUFTO0lBQ2pDO0lBRUEsSUFBSTtRQUNGLE1BQU1wQixLQUFLcUIsSUFBSSxDQUFDUDtRQUNoQlAsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRCxRQUFRO1FBQUs7SUFDdEMsRUFBRSxPQUFPRSxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZGpCLElBQUljLElBQUksQ0FBQ0c7SUFDWDtBQUNGLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLWZyb250Ly4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYWlsID0gcmVxdWlyZSgnQHNlbmRncmlkL21haWwnKVxuXG5tYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5TRU5ER1JJRF9BUElfS0VZKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXG5cbiAgY29uc3QgbWVzc2FnZSA9IGBcbiAgICBOYW1lOiAke2JvZHkubmFtZX1cXHJcXG5cbiAgICBFbWFpbDogJHtib2R5LmVtYWlsfVxcclxcblxuICAgIE1lc3NhZ2U6ICR7Ym9keS5tZXNzYWdlfVxuICBgXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0bzogJ2hlbGxvQGZlcmd1c2hheXdvb2QuY29tJyxcbiAgICBmcm9tOiAnZmVyZ3VzLmhheXdvb2Q1QGdtYWlsLmNvbScsXG4gICAgc3ViamVjdDogYE5ldyBXZWJzaXRlIENvbnRhY3QgRm9ybSBTdWJtaXR0ZWRgLFxuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgaHRtbDogbWVzc2FnZS5yZXBsYWNlKC9cXHJcXG4vZywgJzxiciAvPicpLFxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBtYWlsLnNlbmQoZGF0YSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogJ09LJyB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXMuc2VuZChlcnIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYWlsIiwicmVxdWlyZSIsInNldEFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJTRU5ER1JJRF9BUElfS0VZIiwicmVxIiwicmVzIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJuYW1lIiwiZW1haWwiLCJkYXRhIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwicmVwbGFjZSIsInNlbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();