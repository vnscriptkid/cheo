(function() {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7127:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PostPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "marked"
var external_marked_namespaceObject = require("marked");;
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./pages/blog/[slug].js








function PostPage({
  frontmatter: {
    title,
    date,
    cover_image
  },
  slug,
  content
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "btn btn-back",
        children: "Go Back"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card card-page",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "post-title",
        children: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "post-date",
        children: ["Posted on ", date]
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: cover_image,
        alt: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "post-body",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: external_marked_default()(content)
          }
        })
      })]
    })]
  });
}
async function getStaticPaths() {
  const files = external_fs_default().readdirSync(external_path_default().join('posts'));
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params: {
    slug
  }
}) {
  const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join('posts', slug + '.md'), 'utf-8');
  const {
    data: frontmatter,
    content
  } = external_gray_matter_default()(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content
    }
  };
}

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(7127); });
module.exports = __webpack_exports__;

})();