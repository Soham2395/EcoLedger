"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pauser: () => (/* binding */ Pauser)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n\nclass Pauser extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this.handleClickMode = (mode) => {\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            }\n            else {\n                container.play();\n            }\n        };\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact() {\n    }\n    isEnabled() {\n        return true;\n    }\n    reset() {\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUNyRCxxQkFBcUIsc0VBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb2xlZGdlci8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1wYXVzZS9lc20vUGF1c2VyLmpzPzBkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBQYXVzZXIgZXh0ZW5kcyBFeHRlcm5hbEludGVyYWN0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja01vZGUgPSAobW9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGUgIT09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5nZXRBbmltYXRpb25TdGF0dXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgfVxuICAgIGFzeW5jIGludGVyYWN0KCkge1xuICAgIH1cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadExternalPauseInteraction: () => (/* binding */ loadExternalPauseInteraction)\n/* harmony export */ });\n/* harmony import */ var _Pauser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\");\n\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container) => new _Pauser__WEBPACK_IMPORTED_MODULE_0__.Pauser(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQzNCO0FBQ1AsbUVBQW1FLDJDQUFNO0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbGVkZ2VyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXBhdXNlL2VzbS9pbmRleC5qcz8xYzdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdXNlciB9IGZyb20gXCIuL1BhdXNlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb24oZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRJbnRlcmFjdG9yKFwiZXh0ZXJuYWxQYXVzZVwiLCAoY29udGFpbmVyKSA9PiBuZXcgUGF1c2VyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js\n");

/***/ })

};
;