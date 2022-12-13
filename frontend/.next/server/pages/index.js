(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 238:
/***/ ((module) => {

// Exports
module.exports = {
	"aboutContent": "About_aboutContent__OXL_y"
};


/***/ }),

/***/ 820:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "AnnouncementBar_wrapper__Ej_0k",
	"surround": "AnnouncementBar_surround__2nF3x",
	"inner": "AnnouncementBar_inner__V5SQk",
	"announcement-bar": "AnnouncementBar_announcement-bar__a8DDz"
};


/***/ }),

/***/ 849:
/***/ ((module) => {

// Exports
module.exports = {
	"clientWrapper": "Clients_clientWrapper__y4dCE",
	"clientItem": "Clients_clientItem__D8a_q",
	"clientOrigin": "Clients_clientOrigin__echlS",
	"clientContent": "Clients_clientContent__BjWey",
	"clientImage": "Clients_clientImage__YzV_N",
	"clientDisciplines": "Clients_clientDisciplines__tOb_W"
};


/***/ }),

/***/ 596:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "CurrentTime_wrapper__QbSeS",
	"time": "CurrentTime_time__zK54X"
};


/***/ }),

/***/ 656:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Footer_wrapper__Lvr15",
	"footerEmail": "Footer_footerEmail__GS7dh",
	"themePicker": "Footer_themePicker__Tlovi",
	"lightMode": "Footer_lightMode__OjGC_",
	"darkMode": "Footer_darkMode__aMi_8",
	"creamMode": "Footer_creamMode__IllIL"
};


/***/ }),

/***/ 168:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Header_wrapper__jiYD5",
	"title": "Header_title__UlymB"
};


/***/ }),

/***/ 7:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Main_wrapper__0HuN5",
	"mainContent": "Main_mainContent__20J1E"
};


/***/ }),

/***/ 302:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Navigation_wrapper__J4_uA",
	"submenu": "Navigation_submenu__qJ5Mw",
	"socialNavItemList": "Navigation_socialNavItemList__RKhto",
	"mainNavItemList": "Navigation_mainNavItemList__z07nE",
	"mainNavItem": "Navigation_mainNavItem___Q8VD",
	"socialNavItem": "Navigation_socialNavItem__1ya8c"
};


/***/ }),

/***/ 871:
/***/ ((module) => {

// Exports
module.exports = {
	"projectList": "Projects_projectList__fyrGi",
	"projectContent": "Projects_projectContent__GKEiB",
	"projectContentInner": "Projects_projectContentInner__tJjc8",
	"subNavItem": "Projects_subNavItem__zF6SO",
	"clientOrigin": "Projects_clientOrigin__KduoO",
	"projectDisciplines": "Projects_projectDisciplines__dUS0h",
	"projectDisciplineItem": "Projects_projectDisciplineItem__vWcap",
	"projectImages": "Projects_projectImages__s92Kj",
	"projectImage": "Projects_projectImage__eybwp",
	"projectArrow": "Projects_projectArrow__SV2eM",
	"extraCredit": "Projects_extraCredit__I157F"
};


/***/ }),

/***/ 285:
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
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(168);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles/AnnouncementBar.module.css
var AnnouncementBar_module = __webpack_require__(820);
var AnnouncementBar_module_default = /*#__PURE__*/__webpack_require__.n(AnnouncementBar_module);
;// CONCATENATED MODULE: ./components/AnnouncementBar.js



function announcementBar() {
    const { 0: announcementBar , 1: setAnnouncementBar  } = (0,external_react_.useState)("Lets work together \uD83E\uDD1D");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (AnnouncementBar_module_default()).wrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (AnnouncementBar_module_default()).surround,
            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (AnnouncementBar_module_default()).inner,
                children: announcementBar
            })
        })
    });
};

;// CONCATENATED MODULE: external "react-moment"
const external_react_moment_namespaceObject = require("react-moment");
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_namespaceObject);
;// CONCATENATED MODULE: external "moment-timezone"
const external_moment_timezone_namespaceObject = require("moment-timezone");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/NoSsr.js



const NoSsr = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: props.children
    });
/* harmony default export */ const components_NoSsr = (dynamic_default()(()=>Promise.resolve(NoSsr), {
    ssr: false
}));

// EXTERNAL MODULE: ./styles/CurrentTime.module.css
var CurrentTime_module = __webpack_require__(596);
var CurrentTime_module_default = /*#__PURE__*/__webpack_require__.n(CurrentTime_module);
;// CONCATENATED MODULE: ./components/CurrentTime.js





function CurrentTime() {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_NoSsr, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (CurrentTime_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "Tāmaki Makaurau, New Zealand"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_moment_default()), {
                    className: (CurrentTime_module_default()).time,
                    tz: "Pacific/Auckland",
                    interval: "1000",
                    format: "hh:mm:ss a"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: (Header_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Header_module_default()).title,
                    children: "Fergus Haywood"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(announcementBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(CurrentTime, {})
            ]
        })
    });
};

// EXTERNAL MODULE: ./styles/Navigation.module.css
var Navigation_module = __webpack_require__(302);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./components/Navigation.js


function Navigation(props) {
    const mainNav = props.navigation.mainNav;
    const socialNav = props.navigation.socialNav;
    function handleClick(e) {
        props.content(e.target.id);
        document.body.removeAttribute("style");
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (Navigation_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (Navigation_module_default()).mainNavItemList,
                    children: mainNav.map((item, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            id: item.text,
                            className: "navItem",
                            onClick: (e)=>handleClick(e),
                            children: item.text
                        }, item.text);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (Navigation_module_default()).socialNavItemList,
                    children: socialNav.map((item, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "navItem",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                href: item.navItemUrl.linkUrl,
                                children: item.text
                            })
                        }, item.text);
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./styles/About.module.css
var About_module = __webpack_require__(238);
var About_module_default = /*#__PURE__*/__webpack_require__.n(About_module);
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
const block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
;// CONCATENATED MODULE: ./components/About.js



function About({ body  }) {
    const bodyBlock = body.aboutBody.result[0][0].body;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (About_module_default()).aboutContent,
        children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
            blocks: bodyBlock
        })
    });
};

// EXTERNAL MODULE: ./styles/Clients.module.css
var Clients_module = __webpack_require__(849);
var Clients_module_default = /*#__PURE__*/__webpack_require__.n(Clients_module);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./components/Clients.js




function Clients({ clients  }) {
    const { 0: clientContent , 1: setClientContent  } = (0,external_react_.useState)({});
    const clientsItems = document.querySelectorAll(".Clients_clientItem__D8a_q");
    const clientList = clients.clients.result[0].sort((a, b)=>a.title.localeCompare(b.title));
    const imgBuilder = image_url_default()({
        projectId: "36om7i3d",
        dataset: "production"
    });
    function urlFor(source) {
        return imgBuilder.image(source);
    }
    function handleClick(e) {
        const targetClient = e.target.id;
        const content = clientList.find((content)=>content.title == targetClient);
        setClientContent(content);
        clientsItems.forEach((client)=>client.classList.remove("active-client"));
        e.target.classList.add("active-client");
    }
    const root = document.documentElement;
    if (clientContent) {
        document.body.style.backgroundColor = clientContent.backgroundColor;
    } else {
        document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--background-color");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Clients_module_default()).clientWrapper,
                children: clientList.map((client)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            id: client.title,
                            // href={client.link.linkUrl}
                            className: (Clients_module_default()).clientItem,
                            onClick: (e)=>handleClick(e),
                            children: [
                                client.title,
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (Clients_module_default()).clientOrigin,
                                    children: [
                                        "(",
                                        client.origin,
                                        ")"
                                    ]
                                })
                            ]
                        }, client.title)
                    });
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Clients_module_default()).clientContent,
                children: [
                    clientContent.mainImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: urlFor(clientContent.mainImage),
                        className: (Clients_module_default()).clientImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Clients_module_default()).clientDisciplines,
                        children: clientContent.disciplines
                    }),
                    clientContent.link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: clientContent.link.linkUrl,
                        className: "projectLink",
                        target: "_blank",
                        children: [
                            "View Client",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                class: (Clients_module_default()).projectArrow,
                                src: "./projectArrow.svg",
                                width: "15"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Contact.js


function Contact() {
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            name,
            email,
            message
        };
        fetch("/api/contact", {
            method: "post",
            body: JSON.stringify(data)
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "contactWrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "heading",
                children: "Get in Touch"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "form",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "name",
                        children: "Name:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "name",
                        type: "text",
                        required: true,
                        onChange: (e)=>setName(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "email",
                        children: "Email:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "email",
                        type: "email",
                        required: true,
                        className: "form-email",
                        onChange: (e)=>setEmail(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "message",
                        children: "Message:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        id: "message",
                        type: "text",
                        required: true,
                        rows: "4",
                        onChange: (e)=>setMessage(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "projectLink",
                        type: "submit",
                        children: [
                            "Send",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "form-send-arrow",
                                src: "./sendArrow.svg",
                                width: "20"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/Projects.module.css
var Projects_module = __webpack_require__(871);
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);
;// CONCATENATED MODULE: ./components/Projects.js





function Projects({ projects  }) {
    const projectList = projects.projects.result[0].sort((a, b)=>a.title.localeCompare(b.title));
    const projectItems = Array.from(document.querySelectorAll(".navItem"));
    console.log(projectItems);
    const { 0: projectContent , 1: setProjectContent  } = (0,external_react_.useState)();
    function handleClick(e) {
        const targetProject = e.target.id;
        const content = projectList.find((content)=>content.title == targetProject);
        projectItems.forEach((project)=>project.classList.remove("active-project"));
        e.target.classList.add("active-project");
        setProjectContent(content);
    }
    const imgBuilder = image_url_default()({
        projectId: "36om7i3d",
        dataset: "production"
    });
    function urlFor(source) {
        return imgBuilder.image(source);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Projects_module_default()).projectList,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: projectList.map((project)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            id: project.title,
                            className: "navItem",
                            onClick: (e)=>handleClick(e),
                            children: [
                                project.title,
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (Projects_module_default()).clientOrigin,
                                    children: [
                                        "(",
                                        project.origin,
                                        ")"
                                    ]
                                })
                            ]
                        }, project.title);
                    })
                })
            }),
            projectContent && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Projects_module_default()).projectContent,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Projects_module_default()).projectContentInner,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                                    blocks: projectContent.body
                                }),
                                projectContent.extraCredits && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Projects_module_default()).extraCredit,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                                        blocks: projectContent.extraCredits
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Projects_module_default()).projectDisciplines,
                                    children: projectContent.projectDisciplines.map((discipline)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Projects_module_default()).projectDisciplineItem,
                                            children: discipline.text
                                        });
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: projectContent.link.linkUrl,
                                    className: "projectLink",
                                    target: "_blank",
                                    children: [
                                        "View Project",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: (Projects_module_default()).projectArrow,
                                            src: "./projectArrow.svg",
                                            width: "15"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Projects_module_default()).projectImages,
                        children: projectContent.projectImages.map((image, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: urlFor(image.image).width(2000),
                                className: (Projects_module_default()).projectImage
                            }, i);
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/Main.module.css
var Main_module = __webpack_require__(7);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
;// CONCATENATED MODULE: ./components/Main.js









function Main(props) {
    const { 0: content , 1: setContent  } = (0,external_react_.useState)("About");
    const { 0: projects , 1: setProject  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{}, [
        content
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Main_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                content: setContent,
                navigation: props.props.navigation
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Main_module_default()).mainContent,
                children: {
                    About: /*#__PURE__*/ jsx_runtime_.jsx(About, {
                        body: props.props.about
                    }),
                    Clients: /*#__PURE__*/ jsx_runtime_.jsx(Clients, {
                        clients: props.props.clients
                    }),
                    Contact: /*#__PURE__*/ jsx_runtime_.jsx(Contact, {}),
                    Projects: /*#__PURE__*/ jsx_runtime_.jsx(Projects, {
                        projects: props.props.projects
                    })
                }[content]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(656);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.js


function Footer() {
    function toggleTheme(theme) {
        const root = document.documentElement;
        if (theme == "light") {
            root.style.setProperty("--background-color", "var(--light-background)");
            root.style.setProperty("--color", "#000000");
        } else if (theme == "cream") {
            root.style.setProperty("--background-color", "var(--cream-background)");
            root.style.setProperty("--color", "#000000");
        } else if (theme == "dark") {
            root.style.setProperty("--background-color", "var(--dark-background)");
            root.style.setProperty("--color", "#FFFFFF");
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).themePicker,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).lightMode,
                        onClick: ()=>toggleTheme("light")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).darkMode,
                        onClick: ()=>toggleTheme("dark")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).creamMode,
                        onClick: ()=>toggleTheme("cream")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).footerEmail,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "mailto:hello@fergushaywood.com",
                    children: "hello@fergushaywood.com"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.js







function Home(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                props: props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
async function getServerSideProps() {
    const navgigationQuery = encodeURIComponent(`*[ _type == 'navigation']`);
    const navigationUrl = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=${navgigationQuery}`;
    const result = await fetch(navigationUrl).then((res)=>res.json());
    const mainNav = result.result[0].navItems;
    const socialNav = result.result[1].navItems;
    const aboutQuery = encodeURIComponent(`*[ _type == 'about']`);
    const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`;
    const aboutBody = await fetch(aboutURL).then((res)=>res.json());
    const clientsQuery = encodeURIComponent(`*[ _type == 'clients']`);
    const clientURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${clientsQuery}]`;
    const clients = await fetch(clientURL).then((res)=>res.json());
    const projectsQuery = encodeURIComponent(`*[ _type == 'projects']`);
    const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`;
    const projects = await fetch(projectURL).then((res)=>res.json());
    return {
        props: {
            navigation: {
                mainNav,
                socialNav
            },
            about: {
                aboutBody
            },
            clients: {
                clients
            },
            projects: {
                projects
            }
        }
    };
}


/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
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
var __webpack_exports__ = __webpack_require__.X(0, [486], () => (__webpack_exec__(285)));
module.exports = __webpack_exports__;

})();