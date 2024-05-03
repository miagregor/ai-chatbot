/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! inline-style-parser */ \"(ssr)/./node_modules/inline-style-parser/index.js\");\n/**\n * Parses inline style to object.\n *\n * @example\n * // returns { 'line-height': '42' }\n * StyleToObject('line-height: 42;');\n *\n * @param  {String}      style      - The inline style.\n * @param  {Function}    [iterator] - The iterator function.\n * @return {null|Object}\n */ function StyleToObject(style, iterator) {\n    var output = null;\n    if (!style || typeof style !== \"string\") {\n        return output;\n    }\n    var declaration;\n    var declarations = parse(style);\n    var hasIterator = typeof iterator === \"function\";\n    var property;\n    var value;\n    for(var i = 0, len = declarations.length; i < len; i++){\n        declaration = declarations[i];\n        property = declaration.property;\n        value = declaration.value;\n        if (hasIterator) {\n            iterator(property, value, declaration);\n        } else if (value) {\n            output || (output = {});\n            output[property] = value;\n        }\n    }\n    return output;\n}\nmodule.exports = StyleToObject;\nmodule.exports[\"default\"] = StyleToObject; // ESM support\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFFBQVFDLG1CQUFPQSxDQUFDO0FBRXBCOzs7Ozs7Ozs7O0NBVUMsR0FDRCxTQUFTQyxjQUFjQyxLQUFLLEVBQUVDLFFBQVE7SUFDcEMsSUFBSUMsU0FBUztJQUNiLElBQUksQ0FBQ0YsU0FBUyxPQUFPQSxVQUFVLFVBQVU7UUFDdkMsT0FBT0U7SUFDVDtJQUVBLElBQUlDO0lBQ0osSUFBSUMsZUFBZVAsTUFBTUc7SUFDekIsSUFBSUssY0FBYyxPQUFPSixhQUFhO0lBQ3RDLElBQUlLO0lBQ0osSUFBSUM7SUFFSixJQUFLLElBQUlDLElBQUksR0FBR0MsTUFBTUwsYUFBYU0sTUFBTSxFQUFFRixJQUFJQyxLQUFLRCxJQUFLO1FBQ3ZETCxjQUFjQyxZQUFZLENBQUNJLEVBQUU7UUFDN0JGLFdBQVdILFlBQVlHLFFBQVE7UUFDL0JDLFFBQVFKLFlBQVlJLEtBQUs7UUFFekIsSUFBSUYsYUFBYTtZQUNmSixTQUFTSyxVQUFVQyxPQUFPSjtRQUM1QixPQUFPLElBQUlJLE9BQU87WUFDaEJMLFVBQVdBLENBQUFBLFNBQVMsQ0FBQztZQUNyQkEsTUFBTSxDQUFDSSxTQUFTLEdBQUdDO1FBQ3JCO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUFTLE9BQU9DLE9BQU8sR0FBR2I7QUFDakJZLHlCQUFzQixHQUFHWixlQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0LWxpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzP2YxZTAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhcnNlID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXBhcnNlcicpO1xuXG4vKipcbiAqIFBhcnNlcyBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHsgJ2xpbmUtaGVpZ2h0JzogJzQyJyB9XG4gKiBTdHlsZVRvT2JqZWN0KCdsaW5lLWhlaWdodDogNDI7Jyk7XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgIHN0eWxlICAgICAgLSBUaGUgaW5saW5lIHN0eWxlLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgIFtpdGVyYXRvcl0gLSBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudWxsfE9iamVjdH1cbiAqL1xuZnVuY3Rpb24gU3R5bGVUb09iamVjdChzdHlsZSwgaXRlcmF0b3IpIHtcbiAgdmFyIG91dHB1dCA9IG51bGw7XG4gIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICB2YXIgZGVjbGFyYXRpb247XG4gIHZhciBkZWNsYXJhdGlvbnMgPSBwYXJzZShzdHlsZSk7XG4gIHZhciBoYXNJdGVyYXRvciA9IHR5cGVvZiBpdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3BlcnR5O1xuICB2YXIgdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zW2ldO1xuICAgIHByb3BlcnR5ID0gZGVjbGFyYXRpb24ucHJvcGVydHk7XG4gICAgdmFsdWUgPSBkZWNsYXJhdGlvbi52YWx1ZTtcblxuICAgIGlmIChoYXNJdGVyYXRvcikge1xuICAgICAgaXRlcmF0b3IocHJvcGVydHksIHZhbHVlLCBkZWNsYXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgb3V0cHV0IHx8IChvdXRwdXQgPSB7fSk7XG4gICAgICBvdXRwdXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVRvT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlVG9PYmplY3Q7IC8vIEVTTSBzdXBwb3J0XG4iXSwibmFtZXMiOlsicGFyc2UiLCJyZXF1aXJlIiwiU3R5bGVUb09iamVjdCIsInN0eWxlIiwiaXRlcmF0b3IiLCJvdXRwdXQiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyIsImhhc0l0ZXJhdG9yIiwicHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJsZW4iLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/style-to-object/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/style-to-object/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"(ssr)/./node_modules/style-to-object/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV2QyxpRUFBZUEsc0NBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0LWxpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcz83OGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZVRvT2JqZWN0IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVRvT2JqZWN0O1xuIl0sIm5hbWVzIjpbIlN0eWxlVG9PYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.mjs\n");

/***/ })

};
;