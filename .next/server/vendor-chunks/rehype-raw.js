"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-raw";
exports.ids = ["vendor-chunks/rehype-raw"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-raw/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rehype-raw/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeRaw)\n/* harmony export */ });\n/* harmony import */ var hast_util_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-raw */ \"(ssr)/./node_modules/hast-util-raw/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-raw').Options} RawOptions\n * @typedef {import('vfile').VFile} VFile\n */ /**\n * @typedef {Omit<RawOptions, 'file'>} Options\n *   Configuration.\n */ \n/**\n * Parse the tree (and raw nodes) again, keeping positional info okay.\n *\n * @param {Options | null | undefined}  [options]\n *   Configuration (optional).\n * @returns\n *   Transform.\n */ function rehypeRaw(options) {\n    /**\n   * @param {Root} tree\n   *   Tree.\n   * @param {VFile} file\n   *   File.\n   * @returns {Root}\n   *   New tree.\n   */ return function(tree, file) {\n        // Assume root in -> root out.\n        const result = /** @type {Root} */ (0,hast_util_raw__WEBPACK_IMPORTED_MODULE_0__.raw)(tree, {\n            ...options,\n            file\n        });\n        return result;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJhdy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztDQUlDLEdBRUQ7OztDQUdDLEdBRWdDO0FBRWpDOzs7Ozs7O0NBT0MsR0FDYyxTQUFTQyxVQUFVQyxPQUFPO0lBQ3ZDOzs7Ozs7O0dBT0MsR0FDRCxPQUFPLFNBQVVDLElBQUksRUFBRUMsSUFBSTtRQUN6Qiw4QkFBOEI7UUFDOUIsTUFBTUMsU0FBUyxpQkFBaUIsR0FBSUwsa0RBQUdBLENBQUNHLE1BQU07WUFBQyxHQUFHRCxPQUFPO1lBQUVFO1FBQUk7UUFDL0QsT0FBT0M7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGdwdC1saXRlLy4vbm9kZV9tb2R1bGVzL3JlaHlwZS1yYXcvbGliL2luZGV4LmpzP2YzZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLXJhdycpLk9wdGlvbnN9IFJhd09wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3ZmaWxlJykuVkZpbGV9IFZGaWxlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T21pdDxSYXdPcHRpb25zLCAnZmlsZSc+fSBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKi9cblxuaW1wb3J0IHtyYXd9IGZyb20gJ2hhc3QtdXRpbC1yYXcnXG5cbi8qKlxuICogUGFyc2UgdGhlIHRyZWUgKGFuZCByYXcgbm9kZXMpIGFnYWluLCBrZWVwaW5nIHBvc2l0aW9uYWwgaW5mbyBva2F5LlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9ICBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnNcbiAqICAgVHJhbnNmb3JtLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVSYXcob3B0aW9ucykge1xuICAvKipcbiAgICogQHBhcmFtIHtSb290fSB0cmVlXG4gICAqICAgVHJlZS5cbiAgICogQHBhcmFtIHtWRmlsZX0gZmlsZVxuICAgKiAgIEZpbGUuXG4gICAqIEByZXR1cm5zIHtSb290fVxuICAgKiAgIE5ldyB0cmVlLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmVlLCBmaWxlKSB7XG4gICAgLy8gQXNzdW1lIHJvb3QgaW4gLT4gcm9vdCBvdXQuXG4gICAgY29uc3QgcmVzdWx0ID0gLyoqIEB0eXBlIHtSb290fSAqLyAocmF3KHRyZWUsIHsuLi5vcHRpb25zLCBmaWxlfSkpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iXSwibmFtZXMiOlsicmF3IiwicmVoeXBlUmF3Iiwib3B0aW9ucyIsInRyZWUiLCJmaWxlIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-raw/lib/index.js\n");

/***/ })

};
;