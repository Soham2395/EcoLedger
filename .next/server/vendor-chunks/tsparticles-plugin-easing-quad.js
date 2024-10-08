"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-plugin-easing-quad";
exports.ids = ["vendor-chunks/tsparticles-plugin-easing-quad"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-plugin-easing-quad/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-plugin-easing-quad/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadEasingQuadPlugin: () => (/* binding */ loadEasingQuadPlugin)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nasync function loadEasingQuadPlugin() {\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-in-quad\", (value) => value ** 2);\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-out-quad\", (value) => 1 - (1 - value) ** 2);\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-in-out-quad\", (value) => (value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcGx1Z2luLWVhc2luZy1xdWFkL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUN4QztBQUNQLElBQUksNkRBQVM7QUFDYixJQUFJLDZEQUFTO0FBQ2IsSUFBSSw2REFBUztBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbGVkZ2VyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXBsdWdpbi1lYXNpbmctcXVhZC9lc20vaW5kZXguanM/OWQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRFYXNpbmcgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEVhc2luZ1F1YWRQbHVnaW4oKSB7XG4gICAgYWRkRWFzaW5nKFwiZWFzZS1pbi1xdWFkXCIsICh2YWx1ZSkgPT4gdmFsdWUgKiogMik7XG4gICAgYWRkRWFzaW5nKFwiZWFzZS1vdXQtcXVhZFwiLCAodmFsdWUpID0+IDEgLSAoMSAtIHZhbHVlKSAqKiAyKTtcbiAgICBhZGRFYXNpbmcoXCJlYXNlLWluLW91dC1xdWFkXCIsICh2YWx1ZSkgPT4gKHZhbHVlIDwgMC41ID8gMiAqIHZhbHVlICoqIDIgOiAxIC0gKC0yICogdmFsdWUgKyAyKSAqKiAyIC8gMikpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-plugin-easing-quad/esm/index.js\n");

/***/ })

};
;