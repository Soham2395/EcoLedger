"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-circle";
exports.ids = ["vendor-chunks/tsparticles-shape-circle"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CircleDrawer: () => (/* binding */ CircleDrawer)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n\nclass CircleDrawer {\n    draw(context, particle, radius) {\n        if (!particle.circleRange) {\n            particle.circleRange = { min: 0, max: Math.PI * 2 };\n        }\n        const circleRange = particle.circleRange;\n        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);\n    }\n    getSidesCount() {\n        return 12;\n    }\n    particleInit(container, particle) {\n        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {\n            max: 360,\n            min: 0,\n        };\n        particle.circleRange = !(0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.isObject)(angle)\n            ? {\n                min: 0,\n                max: (angle * Math.PI) / 180,\n            }\n            : { min: (angle.min * Math.PI) / 180, max: (angle.max * Math.PI) / 180 };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2VzbS9DaXJjbGVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFDdkM7QUFDUDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0REFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbGVkZ2VyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLWNpcmNsZS9lc20vQ2lyY2xlRHJhd2VyLmpzPzNlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgY2xhc3MgQ2lyY2xlRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNsZS5jaXJjbGVSYW5nZSkge1xuICAgICAgICAgICAgcGFydGljbGUuY2lyY2xlUmFuZ2UgPSB7IG1pbjogMCwgbWF4OiBNYXRoLlBJICogMiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNpcmNsZVJhbmdlID0gcGFydGljbGUuY2lyY2xlUmFuZ2U7XG4gICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHJhZGl1cywgY2lyY2xlUmFuZ2UubWluLCBjaXJjbGVSYW5nZS5tYXgsIGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIDEyO1xuICAgIH1cbiAgICBwYXJ0aWNsZUluaXQoY29udGFpbmVyLCBwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBzaGFwZURhdGEgPSBwYXJ0aWNsZS5zaGFwZURhdGEsIGFuZ2xlID0gc2hhcGVEYXRhPy5hbmdsZSA/PyB7XG4gICAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgfTtcbiAgICAgICAgcGFydGljbGUuY2lyY2xlUmFuZ2UgPSAhaXNPYmplY3QoYW5nbGUpXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiAoYW5nbGUgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogeyBtaW46IChhbmdsZS5taW4gKiBNYXRoLlBJKSAvIDE4MCwgbWF4OiAoYW5nbGUubWF4ICogTWF0aC5QSSkgLyAxODAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCircleShape: () => (/* binding */ loadCircleShape)\n/* harmony export */ });\n/* harmony import */ var _CircleDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleDrawer */ \"(ssr)/./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js\");\n\nasync function loadCircleShape(engine, refresh = true) {\n    await engine.addShape(\"circle\", new _CircleDrawer__WEBPACK_IMPORTED_MODULE_0__.CircleDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QztBQUNQLHdDQUF3Qyx1REFBWTtBQUNwRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb2xlZGdlci8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1jaXJjbGUvZXNtL2luZGV4LmpzP2U1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY2xlRHJhd2VyIH0gZnJvbSBcIi4vQ2lyY2xlRHJhd2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENpcmNsZVNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoXCJjaXJjbGVcIiwgbmV3IENpcmNsZURyYXdlcigpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/esm/index.js\n");

/***/ })

};
;