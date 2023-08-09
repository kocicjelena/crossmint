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
exports.id = "pages/api/start";
exports.ids = ["pages/api/start"];
exports.modules = {

/***/ "(api)/./pages/api/start/index.ts":
/*!**********************************!*\
  !*** ./pages/api/start/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_startMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/startMap */ \"(api)/./utils/startMap.ts\");\n\nconst handler = (_req, res)=>{\n    try {\n        const start_map = (0,_utils_startMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(30);\n        res.status(200).json(start_map);\n    } catch (err) {\n        res.status(500).json({\n            statusCode: 500,\n            message: err.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhcnQvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDNEM7QUFFNUMsTUFBTUMsVUFBVSxDQUFDQyxNQUFzQkM7SUFDckMsSUFBSTtRQUNGLE1BQU1DLFlBQVlKLDJEQUFNQSxDQUFDO1FBQ3pCRyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtJQUN2QixFQUFFLE9BQU9HLEtBQVU7UUFDakJKLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsWUFBWTtZQUFLQyxTQUFTRixJQUFJRSxPQUFPO1FBQUM7SUFDL0Q7QUFDRjtBQUVBLGlFQUFlUixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3N0YXJ0L2luZGV4LnRzPzIzNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgcmVzdWx0IGZyb20gJy4uLy4uLy4uL3V0aWxzL3N0YXJ0TWFwJ1xuXG5jb25zdCBoYW5kbGVyID0gKF9yZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXJ0X21hcCA9IHJlc3VsdCgzMClcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzdGFydF9tYXApXG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIl0sIm5hbWVzIjpbInJlc3VsdCIsImhhbmRsZXIiLCJfcmVxIiwicmVzIiwic3RhcnRfbWFwIiwic3RhdHVzIiwianNvbiIsImVyciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/start/index.ts\n");

/***/ }),

/***/ "(api)/./utils/startMap.ts":
/*!***************************!*\
  !*** ./utils/startMap.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst result = (l)=>{\n    const r = [];\n    for(let j = 0; j < l; j++){\n        r[j] = [];\n        for(let i = 0; i < l; i++){\n            r[j].push(\"SPACE\");\n        }\n    }\n    return r;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9zdGFydE1hcC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUyxDQUFDQztJQUNSLE1BQU1DLElBQVMsRUFBRTtJQUNiLElBQUssSUFBSUMsSUFBRyxHQUFFQSxJQUFFRixHQUFFRSxJQUFJO1FBQ3RCRCxDQUFDLENBQUNDLEVBQUUsR0FBRSxFQUFFO1FBQ0osSUFBSyxJQUFJQyxJQUFHLEdBQUVBLElBQUVILEdBQUVHLElBQUk7WUFDbEJGLENBQUMsQ0FBQ0MsRUFBRSxDQUFDRSxJQUFJLENBQUM7UUFDZDtJQUNKO0lBQ1IsT0FBT0g7QUFDWDtBQUNBLGlFQUFlRixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RhcnRNYXAudHM/Y2Y3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXN1bHQgPSAobDpudW1iZXIpPT57XG4gICAgICAgIGNvbnN0IHI6IGFueSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqID0wO2o8bDtqKyspe1xuICAgICAgICAgICAgcltqXSA9W11cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0wO2k8bDtpKyspe1xuICAgICAgICAgICAgICAgICAgICByW2pdLnB1c2goJ1NQQUNFJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgcmV0dXJuIHJcbn1cbmV4cG9ydCBkZWZhdWx0IHJlc3VsdCJdLCJuYW1lcyI6WyJyZXN1bHQiLCJsIiwiciIsImoiLCJpIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/startMap.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/start/index.ts"));
module.exports = __webpack_exports__;

})();