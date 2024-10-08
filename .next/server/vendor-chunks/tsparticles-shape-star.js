"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-star";
exports.ids = ["vendor-chunks/tsparticles-shape-star"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/esm/StarDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StarDrawer: () => (/* binding */ StarDrawer)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass StarDrawer {\n    draw(context, particle, radius) {\n        const sides = particle.sides, inset = particle.starInset ?? 2;\n        context.moveTo(0, 0 - radius);\n        for (let i = 0; i < sides; i++) {\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius * inset);\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius);\n        }\n    }\n    getSidesCount(particle) {\n        const star = particle.shapeData;\n        return Math.round((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));\n    }\n    particleInit(container, particle) {\n        const star = particle.shapeData, inset = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(star?.inset ?? 2);\n        particle.starInset = inset;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vU3RhckRyYXdlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUM1QztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQWE7QUFDdkM7QUFDQTtBQUNBLGlEQUFpRCxpRUFBYTtBQUM5RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29sZWRnZXIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vU3RhckRyYXdlci5qcz83MTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJhbmdlVmFsdWUgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgY2xhc3MgU3RhckRyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IHNpZGVzID0gcGFydGljbGUuc2lkZXMsIGluc2V0ID0gcGFydGljbGUuc3Rhckluc2V0ID8/IDI7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKDAsIDAgLSByYWRpdXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQucm90YXRlKE1hdGguUEkgLyBzaWRlcyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygwLCAwIC0gcmFkaXVzICogaW5zZXQpO1xuICAgICAgICAgICAgY29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIHNpZGVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDAsIDAgLSByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgc3RhciA9IHBhcnRpY2xlLnNoYXBlRGF0YTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZ2V0UmFuZ2VWYWx1ZShzdGFyPy5zaWRlcyA/PyBzdGFyPy5uYl9zaWRlcyA/PyA1KSk7XG4gICAgfVxuICAgIHBhcnRpY2xlSW5pdChjb250YWluZXIsIHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHN0YXIgPSBwYXJ0aWNsZS5zaGFwZURhdGEsIGluc2V0ID0gZ2V0UmFuZ2VWYWx1ZShzdGFyPy5pbnNldCA/PyAyKTtcbiAgICAgICAgcGFydGljbGUuc3Rhckluc2V0ID0gaW5zZXQ7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-star/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStarShape: () => (/* binding */ loadStarShape)\n/* harmony export */ });\n/* harmony import */ var _StarDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarDrawer */ \"(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js\");\n\nasync function loadStarShape(engine, refresh = true) {\n    await engine.addShape(\"star\", new _StarDrawer__WEBPACK_IMPORTED_MODULE_0__.StarDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDbkM7QUFDUCxzQ0FBc0MsbURBQVU7QUFDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29sZWRnZXIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vaW5kZXguanM/MzMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFyRHJhd2VyIH0gZnJvbSBcIi4vU3RhckRyYXdlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTdGFyU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShcInN0YXJcIiwgbmV3IFN0YXJEcmF3ZXIoKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/esm/index.js\n");

/***/ })

};
;