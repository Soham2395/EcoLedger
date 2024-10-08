"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-bounce";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-bounce"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Bouncer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/esm/Bouncer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bouncer: () => (/* binding */ Bouncer)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Circle.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Vector.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Rectangle.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/Constants.js\");\n/* harmony import */ var _Options_Classes_Bounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Options/Classes/Bounce */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Options/Classes/Bounce.js\");\n\n\nclass Bouncer extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this._processBounce = (position, radius, area) => {\n            const query = this.container.particles.quadTree.query(area, (p) => this.isEnabled(p));\n            for (const particle of query) {\n                if (area instanceof tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.Circle) {\n                    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.circleBounce)((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.circleBounceDataFromParticle)(particle), {\n                        position,\n                        radius,\n                        mass: (radius ** 2 * Math.PI) / 2,\n                        velocity: tsparticles_engine__WEBPACK_IMPORTED_MODULE_3__.Vector.origin,\n                        factor: tsparticles_engine__WEBPACK_IMPORTED_MODULE_3__.Vector.origin,\n                    });\n                }\n                else if (area instanceof tsparticles_engine__WEBPACK_IMPORTED_MODULE_4__.Rectangle) {\n                    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.rectBounce)(particle, (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.calculateBounds)(position, radius));\n                }\n            }\n        };\n        this._processMouseBounce = () => {\n            const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;\n            if (!radius || radius < 0 || !mousePos) {\n                return;\n            }\n            this._processBounce(mousePos, radius, new tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.Circle(mousePos.x, mousePos.y, radius + tolerance));\n        };\n        this._singleSelectorBounce = (selector, div) => {\n            const container = this.container, query = document.querySelectorAll(selector);\n            if (!query.length) {\n                return;\n            }\n            query.forEach((item) => {\n                const elem = item, pxRatio = container.retina.pixelRatio, pos = {\n                    x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,\n                    y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,\n                }, radius = (elem.offsetWidth / 2) * pxRatio, tolerance = 10 * pxRatio, area = div.type === \"circle\"\n                    ? new tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.Circle(pos.x, pos.y, radius + tolerance)\n                    : new tsparticles_engine__WEBPACK_IMPORTED_MODULE_4__.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);\n                this._processBounce(pos, radius, area);\n            });\n        };\n    }\n    clear() {\n    }\n    init() {\n        const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;\n        if (!bounce) {\n            return;\n        }\n        container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;\n    }\n    async interact() {\n        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === tsparticles_engine__WEBPACK_IMPORTED_MODULE_5__.mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;\n        if (mouseMoveStatus && hoverEnabled && (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.isInArray)(\"bounce\", hoverMode)) {\n            this._processMouseBounce();\n        }\n        else {\n            (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.divModeExecute)(\"bounce\", divs, (selector, div) => this._singleSelectorBounce(selector, div));\n        }\n    }\n    isEnabled(particle) {\n        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv;\n        return ((mouse.position && events.onHover.enable && (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.isInArray)(\"bounce\", events.onHover.mode)) ||\n            (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.isDivModeEnabled)(\"bounce\", divs));\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.bounce) {\n            options.bounce = new _Options_Classes_Bounce__WEBPACK_IMPORTED_MODULE_6__.Bounce();\n        }\n        for (const source of sources) {\n            options.bounce.load(source?.bounce);\n        }\n    }\n    reset() {\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2VzbS9Cb3VuY2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThOO0FBQzVLO0FBQzNDLHNCQUFzQixzRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzREFBTTtBQUMxQyxvQkFBb0IsZ0VBQVksQ0FBQyxnRkFBNEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNEQUFNO0FBQ3hDLGdDQUFnQyxzREFBTTtBQUN0QyxxQkFBcUI7QUFDckI7QUFDQSx5Q0FBeUMseURBQVM7QUFDbEQsb0JBQW9CLDhEQUFVLFdBQVcsbUVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxzREFBTTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwwQkFBMEIsc0RBQU07QUFDaEMsMEJBQTBCLHlEQUFTO0FBQ25DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlLQUF5Syw4REFBYztBQUN2TCwrQ0FBK0MsNkRBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCw2REFBUztBQUNyRSxZQUFZLG9FQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkRBQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb2xlZGdlci8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1ib3VuY2UvZXNtL0JvdW5jZXIuanM/YzBmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjbGUsIEV4dGVybmFsSW50ZXJhY3RvckJhc2UsIFJlY3RhbmdsZSwgVmVjdG9yLCBjYWxjdWxhdGVCb3VuZHMsIGNpcmNsZUJvdW5jZSwgY2lyY2xlQm91bmNlRGF0YUZyb21QYXJ0aWNsZSwgZGl2TW9kZUV4ZWN1dGUsIGlzRGl2TW9kZUVuYWJsZWQsIGlzSW5BcnJheSwgbW91c2VNb3ZlRXZlbnQsIHJlY3RCb3VuY2UsIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuaW1wb3J0IHsgQm91bmNlIH0gZnJvbSBcIi4vT3B0aW9ucy9DbGFzc2VzL0JvdW5jZVwiO1xuZXhwb3J0IGNsYXNzIEJvdW5jZXIgZXh0ZW5kcyBFeHRlcm5hbEludGVyYWN0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc0JvdW5jZSA9IChwb3NpdGlvbiwgcmFkaXVzLCBhcmVhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29udGFpbmVyLnBhcnRpY2xlcy5xdWFkVHJlZS5xdWVyeShhcmVhLCAocCkgPT4gdGhpcy5pc0VuYWJsZWQocCkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJ0aWNsZSBvZiBxdWVyeSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmVhIGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZUJvdW5jZShjaXJjbGVCb3VuY2VEYXRhRnJvbVBhcnRpY2xlKHBhcnRpY2xlKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzOiAocmFkaXVzICoqIDIgKiBNYXRoLlBJKSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eTogVmVjdG9yLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvcjogVmVjdG9yLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZWEgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdEJvdW5jZShwYXJ0aWNsZSwgY2FsY3VsYXRlQm91bmRzKHBvc2l0aW9uLCByYWRpdXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NNb3VzZUJvdW5jZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBweFJhdGlvID0gY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvLCB0b2xlcmFuY2UgPSAxMCAqIHB4UmF0aW8sIG1vdXNlUG9zID0gY29udGFpbmVyLmludGVyYWN0aXZpdHkubW91c2UucG9zaXRpb24sIHJhZGl1cyA9IGNvbnRhaW5lci5yZXRpbmEuYm91bmNlTW9kZURpc3RhbmNlO1xuICAgICAgICAgICAgaWYgKCFyYWRpdXMgfHwgcmFkaXVzIDwgMCB8fCAhbW91c2VQb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzQm91bmNlKG1vdXNlUG9zLCByYWRpdXMsIG5ldyBDaXJjbGUobW91c2VQb3MueCwgbW91c2VQb3MueSwgcmFkaXVzICsgdG9sZXJhbmNlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdG9yQm91bmNlID0gKHNlbGVjdG9yLCBkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKCFxdWVyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IGl0ZW0sIHB4UmF0aW8gPSBjb250YWluZXIucmV0aW5hLnBpeGVsUmF0aW8sIHBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogKGVsZW0ub2Zmc2V0TGVmdCArIGVsZW0ub2Zmc2V0V2lkdGggLyAyKSAqIHB4UmF0aW8sXG4gICAgICAgICAgICAgICAgICAgIHk6IChlbGVtLm9mZnNldFRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0IC8gMikgKiBweFJhdGlvLFxuICAgICAgICAgICAgICAgIH0sIHJhZGl1cyA9IChlbGVtLm9mZnNldFdpZHRoIC8gMikgKiBweFJhdGlvLCB0b2xlcmFuY2UgPSAxMCAqIHB4UmF0aW8sIGFyZWEgPSBkaXYudHlwZSA9PT0gXCJjaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICA/IG5ldyBDaXJjbGUocG9zLngsIHBvcy55LCByYWRpdXMgKyB0b2xlcmFuY2UpXG4gICAgICAgICAgICAgICAgICAgIDogbmV3IFJlY3RhbmdsZShlbGVtLm9mZnNldExlZnQgKiBweFJhdGlvIC0gdG9sZXJhbmNlLCBlbGVtLm9mZnNldFRvcCAqIHB4UmF0aW8gLSB0b2xlcmFuY2UsIGVsZW0ub2Zmc2V0V2lkdGggKiBweFJhdGlvICsgdG9sZXJhbmNlICogMiwgZWxlbS5vZmZzZXRIZWlnaHQgKiBweFJhdGlvICsgdG9sZXJhbmNlICogMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0JvdW5jZShwb3MsIHJhZGl1cywgYXJlYSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBib3VuY2UgPSBjb250YWluZXIuYWN0dWFsT3B0aW9ucy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJvdW5jZTtcbiAgICAgICAgaWYgKCFib3VuY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIucmV0aW5hLmJvdW5jZU1vZGVEaXN0YW5jZSA9IGJvdW5jZS5kaXN0YW5jZSAqIGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBvcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnMsIGV2ZW50cyA9IG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMsIG1vdXNlTW92ZVN0YXR1cyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PT0gbW91c2VNb3ZlRXZlbnQsIGhvdmVyRW5hYmxlZCA9IGV2ZW50cy5vbkhvdmVyLmVuYWJsZSwgaG92ZXJNb2RlID0gZXZlbnRzLm9uSG92ZXIubW9kZSwgZGl2cyA9IGV2ZW50cy5vbkRpdjtcbiAgICAgICAgaWYgKG1vdXNlTW92ZVN0YXR1cyAmJiBob3ZlckVuYWJsZWQgJiYgaXNJbkFycmF5KFwiYm91bmNlXCIsIGhvdmVyTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NNb3VzZUJvdW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGl2TW9kZUV4ZWN1dGUoXCJib3VuY2VcIiwgZGl2cywgKHNlbGVjdG9yLCBkaXYpID0+IHRoaXMuX3NpbmdsZVNlbGVjdG9yQm91bmNlKHNlbGVjdG9yLCBkaXYpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIG9wdGlvbnMgPSBjb250YWluZXIuYWN0dWFsT3B0aW9ucywgbW91c2UgPSBjb250YWluZXIuaW50ZXJhY3Rpdml0eS5tb3VzZSwgZXZlbnRzID0gKHBhcnRpY2xlPy5pbnRlcmFjdGl2aXR5ID8/IG9wdGlvbnMuaW50ZXJhY3Rpdml0eSkuZXZlbnRzLCBkaXZzID0gZXZlbnRzLm9uRGl2O1xuICAgICAgICByZXR1cm4gKChtb3VzZS5wb3NpdGlvbiAmJiBldmVudHMub25Ib3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KFwiYm91bmNlXCIsIGV2ZW50cy5vbkhvdmVyLm1vZGUpKSB8fFxuICAgICAgICAgICAgaXNEaXZNb2RlRW5hYmxlZChcImJvdW5jZVwiLCBkaXZzKSk7XG4gICAgfVxuICAgIGxvYWRNb2RlT3B0aW9ucyhvcHRpb25zLCAuLi5zb3VyY2VzKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5ib3VuY2UpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYm91bmNlID0gbmV3IEJvdW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYm91bmNlLmxvYWQoc291cmNlPy5ib3VuY2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Bouncer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Options/Classes/Bounce.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/esm/Options/Classes/Bounce.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bounce: () => (/* binding */ Bounce)\n/* harmony export */ });\nclass Bounce {\n    constructor() {\n        this.distance = 200;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = data.distance;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2VzbS9PcHRpb25zL0NsYXNzZXMvQm91bmNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb2xlZGdlci8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1ib3VuY2UvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Cb3VuY2UuanM/NWI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm91bmNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDIwMDtcbiAgICB9XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRpc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkYXRhLmRpc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Options/Classes/Bounce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bounce: () => (/* reexport safe */ _Options_Classes_Bounce__WEBPACK_IMPORTED_MODULE_1__.Bounce),\n/* harmony export */   loadExternalBounceInteraction: () => (/* binding */ loadExternalBounceInteraction)\n/* harmony export */ });\n/* harmony import */ var _Bouncer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bouncer */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Bouncer.js\");\n/* harmony import */ var _Options_Classes_Bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Bounce */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/Options/Classes/Bounce.js\");\n\nasync function loadExternalBounceInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalBounce\", (container) => new _Bouncer__WEBPACK_IMPORTED_MODULE_0__.Bouncer(container), refresh);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBQzdCO0FBQ1Asb0VBQW9FLDZDQUFPO0FBQzNFO0FBQ3lDO0FBQ0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29sZWRnZXIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2VzbS9pbmRleC5qcz85NDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdW5jZXIgfSBmcm9tIFwiLi9Cb3VuY2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEV4dGVybmFsQm91bmNlSW50ZXJhY3Rpb24oZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRJbnRlcmFjdG9yKFwiZXh0ZXJuYWxCb3VuY2VcIiwgKGNvbnRhaW5lcikgPT4gbmV3IEJvdW5jZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25zL0NsYXNzZXMvQm91bmNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25zL0ludGVyZmFjZXMvSUJvdW5jZVwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/esm/index.js\n");

/***/ })

};
;