"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-math";
exports.ids = ["vendor-chunks/remark-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-math/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/remark-math/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkMath)\n/* harmony export */ });\n/* harmony import */ var mdast_util_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-math */ \"(ssr)/./node_modules/mdast-util-math/lib/index.js\");\n/* harmony import */ var micromark_extension_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-math */ \"(ssr)/./node_modules/micromark-extension-math/dev/lib/syntax.js\");\n/// <reference types=\"mdast-util-math\" />\n/// <reference types=\"remark-parse\" />\n/// <reference types=\"remark-stringify\" />\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-math').ToOptions} Options\n * @typedef {import('unified').Processor<Root>} Processor\n */ \n\n/** @type {Readonly<Options>} */ const emptyOptions = {};\n/**\n * Add support for math.\n *\n * @param {Readonly<Options> | null | undefined} [options]\n *   Configuration (optional).\n * @returns {undefined}\n *   Nothing.\n */ function remarkMath(options) {\n    // @ts-expect-error: TS is wrong about `this`.\n    // eslint-disable-next-line unicorn/no-this-assignment\n    const self = /** @type {Processor} */ this;\n    const settings = options || emptyOptions;\n    const data = self.data();\n    const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);\n    const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);\n    const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);\n    micromarkExtensions.push((0,micromark_extension_math__WEBPACK_IMPORTED_MODULE_0__.math)(settings));\n    fromMarkdownExtensions.push((0,mdast_util_math__WEBPACK_IMPORTED_MODULE_1__.mathFromMarkdown)());\n    toMarkdownExtensions.push((0,mdast_util_math__WEBPACK_IMPORTED_MODULE_1__.mathToMarkdown)(settings));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLW1hdGgvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsMENBQTBDO0FBRTFDOzs7O0NBSUMsR0FFK0Q7QUFDbkI7QUFFN0MsOEJBQThCLEdBQzlCLE1BQU1HLGVBQWUsQ0FBQztBQUV0Qjs7Ozs7OztDQU9DLEdBQ2MsU0FBU0MsV0FBV0MsT0FBTztJQUN4Qyw4Q0FBOEM7SUFDOUMsc0RBQXNEO0lBQ3RELE1BQU1DLE9BQU8sc0JBQXNCLEdBQUksSUFBSTtJQUMzQyxNQUFNQyxXQUFXRixXQUFXRjtJQUM1QixNQUFNSyxPQUFPRixLQUFLRSxJQUFJO0lBRXRCLE1BQU1DLHNCQUNKRCxLQUFLQyxtQkFBbUIsSUFBS0QsQ0FBQUEsS0FBS0MsbUJBQW1CLEdBQUcsRUFBRTtJQUM1RCxNQUFNQyx5QkFDSkYsS0FBS0Usc0JBQXNCLElBQUtGLENBQUFBLEtBQUtFLHNCQUFzQixHQUFHLEVBQUU7SUFDbEUsTUFBTUMsdUJBQ0pILEtBQUtHLG9CQUFvQixJQUFLSCxDQUFBQSxLQUFLRyxvQkFBb0IsR0FBRyxFQUFFO0lBRTlERixvQkFBb0JHLElBQUksQ0FBQ1YsOERBQUlBLENBQUNLO0lBQzlCRyx1QkFBdUJFLElBQUksQ0FBQ1osaUVBQWdCQTtJQUM1Q1cscUJBQXFCQyxJQUFJLENBQUNYLCtEQUFjQSxDQUFDTTtBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRncHQtbGl0ZS8uL25vZGVfbW9kdWxlcy9yZW1hcmstbWF0aC9saWIvaW5kZXguanM/NjQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm1kYXN0LXV0aWwtbWF0aFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJlbWFyay1wYXJzZVwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJlbWFyay1zdHJpbmdpZnlcIiAvPlxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1tYXRoJykuVG9PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yPFJvb3Q+fSBQcm9jZXNzb3JcbiAqL1xuXG5pbXBvcnQge21hdGhGcm9tTWFya2Rvd24sIG1hdGhUb01hcmtkb3dufSBmcm9tICdtZGFzdC11dGlsLW1hdGgnXG5pbXBvcnQge21hdGh9IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tbWF0aCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxPcHRpb25zPn0gKi9cbmNvbnN0IGVtcHR5T3B0aW9ucyA9IHt9XG5cbi8qKlxuICogQWRkIHN1cHBvcnQgZm9yIG1hdGguXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICogICBOb3RoaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1hcmtNYXRoKG9wdGlvbnMpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogVFMgaXMgd3JvbmcgYWJvdXQgYHRoaXNgLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10aGlzLWFzc2lnbm1lbnRcbiAgY29uc3Qgc2VsZiA9IC8qKiBAdHlwZSB7UHJvY2Vzc29yfSAqLyAodGhpcylcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IGVtcHR5T3B0aW9uc1xuICBjb25zdCBkYXRhID0gc2VsZi5kYXRhKClcblxuICBjb25zdCBtaWNyb21hcmtFeHRlbnNpb25zID1cbiAgICBkYXRhLm1pY3JvbWFya0V4dGVuc2lvbnMgfHwgKGRhdGEubWljcm9tYXJrRXh0ZW5zaW9ucyA9IFtdKVxuICBjb25zdCBmcm9tTWFya2Rvd25FeHRlbnNpb25zID1cbiAgICBkYXRhLmZyb21NYXJrZG93bkV4dGVuc2lvbnMgfHwgKGRhdGEuZnJvbU1hcmtkb3duRXh0ZW5zaW9ucyA9IFtdKVxuICBjb25zdCB0b01hcmtkb3duRXh0ZW5zaW9ucyA9XG4gICAgZGF0YS50b01hcmtkb3duRXh0ZW5zaW9ucyB8fCAoZGF0YS50b01hcmtkb3duRXh0ZW5zaW9ucyA9IFtdKVxuXG4gIG1pY3JvbWFya0V4dGVuc2lvbnMucHVzaChtYXRoKHNldHRpbmdzKSlcbiAgZnJvbU1hcmtkb3duRXh0ZW5zaW9ucy5wdXNoKG1hdGhGcm9tTWFya2Rvd24oKSlcbiAgdG9NYXJrZG93bkV4dGVuc2lvbnMucHVzaChtYXRoVG9NYXJrZG93bihzZXR0aW5ncykpXG59XG4iXSwibmFtZXMiOlsibWF0aEZyb21NYXJrZG93biIsIm1hdGhUb01hcmtkb3duIiwibWF0aCIsImVtcHR5T3B0aW9ucyIsInJlbWFya01hdGgiLCJvcHRpb25zIiwic2VsZiIsInNldHRpbmdzIiwiZGF0YSIsIm1pY3JvbWFya0V4dGVuc2lvbnMiLCJmcm9tTWFya2Rvd25FeHRlbnNpb25zIiwidG9NYXJrZG93bkV4dGVuc2lvbnMiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-math/lib/index.js\n");

/***/ })

};
;