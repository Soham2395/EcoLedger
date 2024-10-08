"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-stroke-color";
exports.ids = ["vendor-chunks/tsparticles-updater-stroke-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StrokeColorUpdater: () => (/* binding */ StrokeColorUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/ColorUtils.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/Utils.js\");\n\n\nclass StrokeColorUpdater {\n    constructor(container) {\n        this.container = container;\n    }\n    init(particle) {\n        const container = this.container, options = particle.options;\n        const stroke = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.itemFromSingleOrMultiple)(options.stroke, particle.id, options.reduceDuplicates);\n        particle.strokeWidth = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRangeValue)(stroke.width) * container.retina.pixelRatio;\n        particle.strokeOpacity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRangeValue)(stroke.opacity ?? 1);\n        particle.strokeAnimation = stroke.color?.animation;\n        const strokeHslColor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.rangeColorToHsl)(stroke.color) ?? particle.getFillColor();\n        if (strokeHslColor) {\n            particle.strokeColor = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.getHslAnimationFromHsl)(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);\n        }\n    }\n    isEnabled(particle) {\n        const color = particle.strokeAnimation, { strokeColor } = particle;\n        return (!particle.destroyed &&\n            !particle.spawning &&\n            !!color &&\n            ((strokeColor?.h.value !== undefined && strokeColor.h.enable) ||\n                (strokeColor?.s.value !== undefined && strokeColor.s.enable) ||\n                (strokeColor?.l.value !== undefined && strokeColor.l.enable)));\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.updateStrokeColor)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL1N0cm9rZUNvbG9yVXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1SDtBQUMzRTtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEVBQXdCO0FBQy9DLCtCQUErQixpRUFBYTtBQUM1QyxpQ0FBaUMsaUVBQWE7QUFDOUM7QUFDQSwrQkFBK0IsbUVBQWU7QUFDOUM7QUFDQSxtQ0FBbUMsMEVBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFpQjtBQUN6QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbGVkZ2VyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItc3Ryb2tlLWNvbG9yL2VzbS9TdHJva2VDb2xvclVwZGF0ZXIuanM/ZDBjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRIc2xBbmltYXRpb25Gcm9tSHNsLCBnZXRSYW5nZVZhbHVlLCBpdGVtRnJvbVNpbmdsZU9yTXVsdGlwbGUsIHJhbmdlQ29sb3JUb0hzbCwgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5pbXBvcnQgeyB1cGRhdGVTdHJva2VDb2xvciB9IGZyb20gXCIuL1V0aWxzXCI7XG5leHBvcnQgY2xhc3MgU3Ryb2tlQ29sb3JVcGRhdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuICAgIGluaXQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIG9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBpdGVtRnJvbVNpbmdsZU9yTXVsdGlwbGUob3B0aW9ucy5zdHJva2UsIHBhcnRpY2xlLmlkLCBvcHRpb25zLnJlZHVjZUR1cGxpY2F0ZXMpO1xuICAgICAgICBwYXJ0aWNsZS5zdHJva2VXaWR0aCA9IGdldFJhbmdlVmFsdWUoc3Ryb2tlLndpZHRoKSAqIGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICAgICAgcGFydGljbGUuc3Ryb2tlT3BhY2l0eSA9IGdldFJhbmdlVmFsdWUoc3Ryb2tlLm9wYWNpdHkgPz8gMSk7XG4gICAgICAgIHBhcnRpY2xlLnN0cm9rZUFuaW1hdGlvbiA9IHN0cm9rZS5jb2xvcj8uYW5pbWF0aW9uO1xuICAgICAgICBjb25zdCBzdHJva2VIc2xDb2xvciA9IHJhbmdlQ29sb3JUb0hzbChzdHJva2UuY29sb3IpID8/IHBhcnRpY2xlLmdldEZpbGxDb2xvcigpO1xuICAgICAgICBpZiAoc3Ryb2tlSHNsQ29sb3IpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnN0cm9rZUNvbG9yID0gZ2V0SHNsQW5pbWF0aW9uRnJvbUhzbChzdHJva2VIc2xDb2xvciwgcGFydGljbGUuc3Ryb2tlQW5pbWF0aW9uLCBjb250YWluZXIucmV0aW5hLnJlZHVjZUZhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gcGFydGljbGUuc3Ryb2tlQW5pbWF0aW9uLCB7IHN0cm9rZUNvbG9yIH0gPSBwYXJ0aWNsZTtcbiAgICAgICAgcmV0dXJuICghcGFydGljbGUuZGVzdHJveWVkICYmXG4gICAgICAgICAgICAhcGFydGljbGUuc3Bhd25pbmcgJiZcbiAgICAgICAgICAgICEhY29sb3IgJiZcbiAgICAgICAgICAgICgoc3Ryb2tlQ29sb3I/LmgudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdHJva2VDb2xvci5oLmVuYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAoc3Ryb2tlQ29sb3I/LnMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdHJva2VDb2xvci5zLmVuYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAoc3Ryb2tlQ29sb3I/LmwudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdHJva2VDb2xvci5sLmVuYWJsZSkpKTtcbiAgICB9XG4gICAgdXBkYXRlKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkKHBhcnRpY2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVN0cm9rZUNvbG9yKHBhcnRpY2xlLCBkZWx0YSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/Utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-stroke-color/esm/Utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateStrokeColor: () => (/* binding */ updateStrokeColor)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nfunction updateColorValue(delta, colorValue, valueAnimation, max, decrease) {\n    if (!colorValue ||\n        !valueAnimation.enable ||\n        ((colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0))) {\n        return;\n    }\n    if (!colorValue.time) {\n        colorValue.time = 0;\n    }\n    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {\n        colorValue.time += delta.value;\n    }\n    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {\n        return;\n    }\n    const offset = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.randomInRange)(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;\n    if (!decrease || colorValue.status === \"increasing\") {\n        colorValue.value += velocity;\n        if (colorValue.value > max) {\n            if (!colorValue.loops) {\n                colorValue.loops = 0;\n            }\n            colorValue.loops++;\n            if (decrease) {\n                colorValue.status = \"decreasing\";\n                colorValue.value -= colorValue.value % max;\n            }\n        }\n    }\n    else {\n        colorValue.value -= velocity;\n        if (colorValue.value < 0) {\n            if (!colorValue.loops) {\n                colorValue.loops = 0;\n            }\n            colorValue.loops++;\n            colorValue.status = \"increasing\";\n            colorValue.value += colorValue.value;\n        }\n    }\n    if (colorValue.velocity && decay !== 1) {\n        colorValue.velocity *= decay;\n    }\n    if (colorValue.value > max) {\n        colorValue.value %= max;\n    }\n}\nfunction updateStrokeColor(particle, delta) {\n    if (!particle.strokeColor || !particle.strokeAnimation) {\n        return;\n    }\n    const { h, s, l } = particle.strokeColor, { h: hAnimation, s: sAnimation, l: lAnimation } = particle.strokeAnimation;\n    if (h) {\n        updateColorValue(delta, h, hAnimation, 360, false);\n    }\n    if (s) {\n        updateColorValue(delta, s, sAnimation, 100, true);\n    }\n    if (l) {\n        updateColorValue(delta, l, lAnimation, 100, true);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL1V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVLDBCQUEwQiw4Q0FBOEM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29sZWRnZXIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL1V0aWxzLmpzPzcwYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZG9tSW5SYW5nZSwgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5mdW5jdGlvbiB1cGRhdGVDb2xvclZhbHVlKGRlbHRhLCBjb2xvclZhbHVlLCB2YWx1ZUFuaW1hdGlvbiwgbWF4LCBkZWNyZWFzZSkge1xuICAgIGlmICghY29sb3JWYWx1ZSB8fFxuICAgICAgICAhdmFsdWVBbmltYXRpb24uZW5hYmxlIHx8XG4gICAgICAgICgoY29sb3JWYWx1ZS5tYXhMb29wcyA/PyAwKSA+IDAgJiYgKGNvbG9yVmFsdWUubG9vcHMgPz8gMCkgPiAoY29sb3JWYWx1ZS5tYXhMb29wcyA/PyAwKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNvbG9yVmFsdWUudGltZSkge1xuICAgICAgICBjb2xvclZhbHVlLnRpbWUgPSAwO1xuICAgIH1cbiAgICBpZiAoKGNvbG9yVmFsdWUuZGVsYXlUaW1lID8/IDApID4gMCAmJiBjb2xvclZhbHVlLnRpbWUgPCAoY29sb3JWYWx1ZS5kZWxheVRpbWUgPz8gMCkpIHtcbiAgICAgICAgY29sb3JWYWx1ZS50aW1lICs9IGRlbHRhLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoKGNvbG9yVmFsdWUuZGVsYXlUaW1lID8/IDApID4gMCAmJiBjb2xvclZhbHVlLnRpbWUgPCAoY29sb3JWYWx1ZS5kZWxheVRpbWUgPz8gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvZmZzZXQgPSByYW5kb21JblJhbmdlKHZhbHVlQW5pbWF0aW9uLm9mZnNldCksIHZlbG9jaXR5ID0gKGNvbG9yVmFsdWUudmVsb2NpdHkgPz8gMCkgKiBkZWx0YS5mYWN0b3IgKyBvZmZzZXQgKiAzLjYsIGRlY2F5ID0gY29sb3JWYWx1ZS5kZWNheSA/PyAxO1xuICAgIGlmICghZGVjcmVhc2UgfHwgY29sb3JWYWx1ZS5zdGF0dXMgPT09IFwiaW5jcmVhc2luZ1wiKSB7XG4gICAgICAgIGNvbG9yVmFsdWUudmFsdWUgKz0gdmVsb2NpdHk7XG4gICAgICAgIGlmIChjb2xvclZhbHVlLnZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICBpZiAoIWNvbG9yVmFsdWUubG9vcHMpIHtcbiAgICAgICAgICAgICAgICBjb2xvclZhbHVlLmxvb3BzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yVmFsdWUubG9vcHMrKztcbiAgICAgICAgICAgIGlmIChkZWNyZWFzZSkge1xuICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUuc3RhdHVzID0gXCJkZWNyZWFzaW5nXCI7XG4gICAgICAgICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSAtPSBjb2xvclZhbHVlLnZhbHVlICUgbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb2xvclZhbHVlLnZhbHVlIC09IHZlbG9jaXR5O1xuICAgICAgICBpZiAoY29sb3JWYWx1ZS52YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIGlmICghY29sb3JWYWx1ZS5sb29wcykge1xuICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUubG9vcHMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3JWYWx1ZS5sb29wcysrO1xuICAgICAgICAgICAgY29sb3JWYWx1ZS5zdGF0dXMgPSBcImluY3JlYXNpbmdcIjtcbiAgICAgICAgICAgIGNvbG9yVmFsdWUudmFsdWUgKz0gY29sb3JWYWx1ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JWYWx1ZS52ZWxvY2l0eSAmJiBkZWNheSAhPT0gMSkge1xuICAgICAgICBjb2xvclZhbHVlLnZlbG9jaXR5ICo9IGRlY2F5O1xuICAgIH1cbiAgICBpZiAoY29sb3JWYWx1ZS52YWx1ZSA+IG1heCkge1xuICAgICAgICBjb2xvclZhbHVlLnZhbHVlICU9IG1heDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3Ryb2tlQ29sb3IocGFydGljbGUsIGRlbHRhKSB7XG4gICAgaWYgKCFwYXJ0aWNsZS5zdHJva2VDb2xvciB8fCAhcGFydGljbGUuc3Ryb2tlQW5pbWF0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBoLCBzLCBsIH0gPSBwYXJ0aWNsZS5zdHJva2VDb2xvciwgeyBoOiBoQW5pbWF0aW9uLCBzOiBzQW5pbWF0aW9uLCBsOiBsQW5pbWF0aW9uIH0gPSBwYXJ0aWNsZS5zdHJva2VBbmltYXRpb247XG4gICAgaWYgKGgpIHtcbiAgICAgICAgdXBkYXRlQ29sb3JWYWx1ZShkZWx0YSwgaCwgaEFuaW1hdGlvbiwgMzYwLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChzKSB7XG4gICAgICAgIHVwZGF0ZUNvbG9yVmFsdWUoZGVsdGEsIHMsIHNBbmltYXRpb24sIDEwMCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChsKSB7XG4gICAgICAgIHVwZGF0ZUNvbG9yVmFsdWUoZGVsdGEsIGwsIGxBbmltYXRpb24sIDEwMCwgdHJ1ZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-stroke-color/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStrokeColorUpdater: () => (/* binding */ loadStrokeColorUpdater)\n/* harmony export */ });\n/* harmony import */ var _StrokeColorUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrokeColorUpdater */ \"(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js\");\n\nasync function loadStrokeColorUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"strokeColor\", (container) => new _StrokeColorUpdater__WEBPACK_IMPORTED_MODULE_0__.StrokeColorUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zdHJva2UtY29sb3IvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBEO0FBQ25EO0FBQ1Asc0VBQXNFLG1FQUFrQjtBQUN4RiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb2xlZGdlci8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXN0cm9rZS1jb2xvci9lc20vaW5kZXguanM/YzUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJva2VDb2xvclVwZGF0ZXIgfSBmcm9tIFwiLi9TdHJva2VDb2xvclVwZGF0ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3Ryb2tlQ29sb3JVcGRhdGVyKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkUGFydGljbGVVcGRhdGVyKFwic3Ryb2tlQ29sb3JcIiwgKGNvbnRhaW5lcikgPT4gbmV3IFN0cm9rZUNvbG9yVXBkYXRlcihjb250YWluZXIpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-stroke-color/esm/index.js\n");

/***/ })

};
;