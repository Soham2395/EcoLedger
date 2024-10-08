"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SquareDrawer: () => (/* binding */ SquareDrawer)\n/* harmony export */ });\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbGVkZ2VyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXNxdWFyZS9lc20vU3F1YXJlRHJhd2VyLmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZml4RmFjdG9yID0gTWF0aC5zcXJ0KDIpO1xuZXhwb3J0IGNsYXNzIFNxdWFyZURyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGZpeGVkUmFkaXVzID0gcmFkaXVzIC8gZml4RmFjdG9yLCBmaXhlZERpYW1ldGVyID0gZml4ZWRSYWRpdXMgKiAyO1xuICAgICAgICBjb250ZXh0LnJlY3QoLWZpeGVkUmFkaXVzLCAtZml4ZWRSYWRpdXMsIGZpeGVkRGlhbWV0ZXIsIGZpeGVkRGlhbWV0ZXIpO1xuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSquareShape: () => (/* binding */ loadSquareShape)\n/* harmony export */ });\n/* harmony import */ var _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\");\n\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\"edge\", \"square\"], new _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__.SquareDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QztBQUNQLGtEQUFrRCx1REFBWTtBQUM5RCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb2xlZGdlci8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zcXVhcmUvZXNtL2luZGV4LmpzPzRmODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3F1YXJlRHJhd2VyIH0gZnJvbSBcIi4vU3F1YXJlRHJhd2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFNxdWFyZVNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoW1wiZWRnZVwiLCBcInNxdWFyZVwiXSwgbmV3IFNxdWFyZURyYXdlcigpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/index.js\n");

/***/ })

};
;