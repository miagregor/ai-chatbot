"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-string";
exports.ids = ["vendor-chunks/micromark-util-decode-string"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-decode-string/dev/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-util-decode-string/dev/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeString: () => (/* binding */ decodeString)\n/* harmony export */ });\n/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decode-named-character-reference */ \"(ssr)/./node_modules/decode-named-character-reference/index.js\");\n/* harmony import */ var micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-decode-numeric-character-reference */ \"(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n\n\n\nconst characterEscapeOrReference = /\\\\([!-/:-@[-`{-~])|&(#(?:\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});/gi;\n/**\n * Decode markdown strings (which occur in places such as fenced code info\n * strings, destinations, labels, and titles).\n *\n * The “string” content type allows character escapes and -references.\n * This decodes those.\n *\n * @param {string} value\n *   Value to decode.\n * @returns {string}\n *   Decoded value.\n */ function decodeString(value) {\n    return value.replace(characterEscapeOrReference, decode);\n}\n/**\n * @param {string} $0\n * @param {string} $1\n * @param {string} $2\n * @returns {string}\n */ function decode($0, $1, $2) {\n    if ($1) {\n        // Escape.\n        return $1;\n    }\n    // Reference.\n    const head = $2.charCodeAt(0);\n    if (head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.numberSign) {\n        const head = $2.charCodeAt(1);\n        const hex = head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX || head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX;\n        return (0,micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__.decodeNumericCharacterReference)($2.slice(hex ? 2 : 1), hex ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseHexadecimal : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseDecimal);\n    }\n    return (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__.decodeNamedCharacterReference)($2) || $0;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZy9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFDbUI7QUFDM0M7QUFFdEQsTUFBTUksNkJBQ0o7QUFFRjs7Ozs7Ozs7Ozs7Q0FXQyxHQUNNLFNBQVNDLGFBQWFDLEtBQUs7SUFDaEMsT0FBT0EsTUFBTUMsT0FBTyxDQUFDSCw0QkFBNEJJO0FBQ25EO0FBRUE7Ozs7O0NBS0MsR0FDRCxTQUFTQSxPQUFPQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRTtJQUN4QixJQUFJRCxJQUFJO1FBQ04sVUFBVTtRQUNWLE9BQU9BO0lBQ1Q7SUFFQSxhQUFhO0lBQ2IsTUFBTUUsT0FBT0QsR0FBR0UsVUFBVSxDQUFDO0lBRTNCLElBQUlELFNBQVNWLHdEQUFLQSxDQUFDWSxVQUFVLEVBQUU7UUFDN0IsTUFBTUYsT0FBT0QsR0FBR0UsVUFBVSxDQUFDO1FBQzNCLE1BQU1FLE1BQU1ILFNBQVNWLHdEQUFLQSxDQUFDYyxVQUFVLElBQUlKLFNBQVNWLHdEQUFLQSxDQUFDZSxVQUFVO1FBQ2xFLE9BQU9oQixrSEFBK0JBLENBQ3BDVSxHQUFHTyxLQUFLLENBQUNILE1BQU0sSUFBSSxJQUNuQkEsTUFBTVosNERBQVNBLENBQUNnQixzQkFBc0IsR0FBR2hCLDREQUFTQSxDQUFDaUIsa0JBQWtCO0lBRXpFO0lBRUEsT0FBT3BCLCtGQUE2QkEsQ0FBQ1csT0FBT0Y7QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0LWxpdGUvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZy9kZXYvaW5kZXguanM/ODEzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlfSBmcm9tICdkZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZSdcbmltcG9ydCB7ZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZSdcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50c30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG5jb25zdCBjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSA9XG4gIC9cXFxcKFshLS86LUBbLWB7LX5dKXwmKCMoPzpcXGR7MSw3fXx4W1xcZGEtZl17MSw2fSl8W1xcZGEtel17MSwzMX0pOy9naVxuXG4vKipcbiAqIERlY29kZSBtYXJrZG93biBzdHJpbmdzICh3aGljaCBvY2N1ciBpbiBwbGFjZXMgc3VjaCBhcyBmZW5jZWQgY29kZSBpbmZvXG4gKiBzdHJpbmdzLCBkZXN0aW5hdGlvbnMsIGxhYmVscywgYW5kIHRpdGxlcykuXG4gKlxuICogVGhlIOKAnHN0cmluZ+KAnSBjb250ZW50IHR5cGUgYWxsb3dzIGNoYXJhY3RlciBlc2NhcGVzIGFuZCAtcmVmZXJlbmNlcy5cbiAqIFRoaXMgZGVjb2RlcyB0aG9zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gZGVjb2RlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgRGVjb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZShjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSwgZGVjb2RlKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMFxuICogQHBhcmFtIHtzdHJpbmd9ICQxXG4gKiBAcGFyYW0ge3N0cmluZ30gJDJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRlY29kZSgkMCwgJDEsICQyKSB7XG4gIGlmICgkMSkge1xuICAgIC8vIEVzY2FwZS5cbiAgICByZXR1cm4gJDFcbiAgfVxuXG4gIC8vIFJlZmVyZW5jZS5cbiAgY29uc3QgaGVhZCA9ICQyLmNoYXJDb2RlQXQoMClcblxuICBpZiAoaGVhZCA9PT0gY29kZXMubnVtYmVyU2lnbikge1xuICAgIGNvbnN0IGhlYWQgPSAkMi5jaGFyQ29kZUF0KDEpXG4gICAgY29uc3QgaGV4ID0gaGVhZCA9PT0gY29kZXMubG93ZXJjYXNlWCB8fCBoZWFkID09PSBjb2Rlcy51cHBlcmNhc2VYXG4gICAgcmV0dXJuIGRlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UoXG4gICAgICAkMi5zbGljZShoZXggPyAyIDogMSksXG4gICAgICBoZXggPyBjb25zdGFudHMubnVtZXJpY0Jhc2VIZXhhZGVjaW1hbCA6IGNvbnN0YW50cy5udW1lcmljQmFzZURlY2ltYWxcbiAgICApXG4gIH1cblxuICByZXR1cm4gZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UoJDIpIHx8ICQwXG59XG4iXSwibmFtZXMiOlsiZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UiLCJkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlIiwiY29kZXMiLCJjb25zdGFudHMiLCJjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSIsImRlY29kZVN0cmluZyIsInZhbHVlIiwicmVwbGFjZSIsImRlY29kZSIsIiQwIiwiJDEiLCIkMiIsImhlYWQiLCJjaGFyQ29kZUF0IiwibnVtYmVyU2lnbiIsImhleCIsImxvd2VyY2FzZVgiLCJ1cHBlcmNhc2VYIiwic2xpY2UiLCJudW1lcmljQmFzZUhleGFkZWNpbWFsIiwibnVtZXJpY0Jhc2VEZWNpbWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-decode-string/dev/index.js\n");

/***/ })

};
;