exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 4891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);




const Header = ({
  isEnglish = true,
  onEnClick = () => {},
  onVnClick = () => {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    style: {
      position: "fixed",
      height: 50,
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      backgroundColor: "rgba(0,0,0, 0.5)",
      display: "flex",
      color: "white",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "'Dancing Script', cursive"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      style: {
        fontSize: 30,
        paddingLeft: 30,
        cursor: "pointer"
      },
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/"),
      children: isEnglish ? "Home" : "Trang chủ"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
      style: {
        display: "flex",
        listStyle: "none",
        fontSize: 22,
        paddingRight: 20
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        style: {
          marginRight: 40,
          cursor: "pointer"
        },
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/about"),
        children: isEnglish ? "About" : "Về dự án"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        style: {
          marginRight: 40,
          cursor: "pointer"
        },
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/yen-bai-character"),
        children: isEnglish ? "Yen Bai" : "Yên Bái"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        style: {
          marginRight: 40,
          cursor: "pointer"
        },
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/hue-character"),
        children: isEnglish ? "Hue" : "Huế"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        style: {
          marginRight: 40,
          cursor: "pointer"
        },
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/ninh-thuan-character"),
        children: isEnglish ? "Ninh Thuan" : "Ninh Thuận"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          style: {
            cursor: "pointer",
            marginRight: 5
          },
          onClick: () => onEnClick(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "https://flagicons.lipis.dev/flags/4x3/um.svg",
            alt: "usa",
            width: "30px",
            height: "30px"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          style: {
            cursor: "pointer"
          },
          onClick: () => onVnClick(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "https://flagicons.lipis.dev/flags/4x3/vn.svg",
            alt: "vietnam",
            width: "30px",
            height: "30px"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

};
;