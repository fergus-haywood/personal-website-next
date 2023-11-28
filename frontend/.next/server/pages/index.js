(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 9475:
/***/ ((module) => {

// Exports
module.exports = {
	"aboutContent": "About_aboutContent__OXL_y"
};


/***/ }),

/***/ 2744:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "HomePageImage_wrapper__1Os24",
	"image": "HomePageImage_image__wRmRt"
};


/***/ }),

/***/ 3412:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  x Expected '}', got ';'\n    ,-[17:1]\n 17 | <Script async src=\"https://www.googletagmanager.com/gtag/js?id=G-32CBED8Z0C\"></Script>\n 18 | <Script>\n 19 |   window.dataLayer = window.dataLayer || [];\n 20 |   function gtag(){dataLayer.push(arguments);}\n    :                                            ^\n 21 |   gtag('js', new Date());\n 22 | \n 23 |   gtag('config', 'G-32CBED8Z0C');\n    `----\n\n\nCaused by:\n    0: failed to process input file\n    1: Syntax Error");

/***/ }),

/***/ 8312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(3412);
var Layout_default = /*#__PURE__*/__webpack_require__.n(Layout);
// EXTERNAL MODULE: ./styles/About.module.css
var About_module = __webpack_require__(9475);
var About_module_default = /*#__PURE__*/__webpack_require__.n(About_module);
// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__(4836);
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);
;// CONCATENATED MODULE: ./components/About.js



function About({ content  }) {
    const bodyBlock = content.result[0][0].body;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (About_module_default()).aboutContent,
        children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
            blocks: bodyBlock
        })
    });
}

// EXTERNAL MODULE: ./styles/HomePageImage.module.css
var HomePageImage_module = __webpack_require__(2744);
var HomePageImage_module_default = /*#__PURE__*/__webpack_require__.n(HomePageImage_module);
// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__(1791);
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/HomePageImage.js




function HomePageImage({ image  }) {
    const homepageImage = image.result[0][0].image;
    function urlFor(source) {
        return imgBuilder.image(source);
    }
    const imgBuilder = image_url_default()({
        projectId: "36om7i3d",
        dataset: "production"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (HomePageImage_module_default()).wrapper,
        children: homepageImage && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: urlFor(homepageImage).width(1500).url(),
            className: (HomePageImage_module_default()).image,
            layout: "fill",
            alt: "Fergus Haywood Homepage Gif Image",
            placeholder: "blur",
            blurDataURL: urlFor(homepageImage).url()
        })
    });
}

;// CONCATENATED MODULE: ./pages/index.js




function Home(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Layout_default()), {
        navigation: props.navigationBody,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(About, {
                content: props.aboutBody
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HomePageImage, {
                image: props.aboutBody
            })
        ]
    });
}
async function getServerSideProps() {
    const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`);
    const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`;
    const navigationBody = await fetch(navigationURL).then((res)=>res.json());
    const aboutQuery = encodeURIComponent(`*[ _type == 'about']`);
    const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`;
    const aboutBody = await fetch(aboutURL).then((res)=>res.json());
    return {
        props: {
            navigationBody,
            aboutBody
        }
    };
}


/***/ }),

/***/ 4836:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675], () => (__webpack_exec__(8312)));
module.exports = __webpack_exports__;

})();