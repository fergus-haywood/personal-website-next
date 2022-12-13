"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mail = __webpack_require__(139);
mail.setApiKey(process.env.SENDGRID_API_KEY);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const body = JSON.parse(req.body);
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
    const data = {
        to: "hello@fergushaywood.com",
        from: "fergus.haywood5@gmail.com",
        subject: `New Website Contact Form Submitted`,
        text: message,
        html: message.replace(/\r\n/g, "<br />")
    };
    try {
        await mail.send(data);
        res.status(200).json({
            status: "OK"
        });
    } catch (err) {
        console.error(err);
        res.send(err);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(221));
module.exports = __webpack_exports__;

})();