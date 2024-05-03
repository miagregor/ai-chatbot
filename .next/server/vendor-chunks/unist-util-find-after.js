"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-find-after";
exports.ids = ["vendor-chunks/unist-util-find-after"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-find-after/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/unist-util-find-after/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findAfter: () => (/* binding */ findAfter)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n */ /**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */ /**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */ /**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */ /**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */ /**\n * @typedef {(\n *   Kind extends {children: Array<infer Child>}\n *   ? Child\n *   : never\n * )} Child\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Kind\n *   All node types.\n */ \n/**\n * Find the first node in `parent` after another `node` or after an index,\n * that passes `test`.\n *\n * @param parent\n *   Parent node.\n * @param index\n *   Child node or index.\n * @param [test=undefined]\n *   Test for child to look for (optional).\n * @returns\n *   A child (matching `test`, if given) or `undefined`.\n */ const findAfter = // Note: overloads like this are needed to support optional generics.\n/**\n   * @type {(\n   *   (<Kind extends UnistParent, Check extends Test>(parent: Kind, index: Child<Kind> | number, test: Check) => Matches<Child<Kind>, Check> | undefined) &\n   *   (<Kind extends UnistParent>(parent: Kind, index: Child<Kind> | number, test?: null | undefined) => Child<Kind> | undefined)\n   * )}\n   */ /**\n     * @param {UnistParent} parent\n     * @param {UnistNode | number} index\n     * @param {Test} [test]\n     * @returns {UnistNode | undefined}\n     */ function(parent, index, test) {\n    const is = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)(test);\n    if (!parent || !parent.type || !parent.children) {\n        throw new Error(\"Expected parent node\");\n    }\n    if (typeof index === \"number\") {\n        if (index < 0 || index === Number.POSITIVE_INFINITY) {\n            throw new Error(\"Expected positive finite number as index\");\n        }\n    } else {\n        index = parent.children.indexOf(index);\n        if (index < 0) {\n            throw new Error(\"Expected child node or index\");\n        }\n    }\n    while(++index < parent.children.length){\n        if (is(parent.children[index], index, parent)) {\n            return parent.children[index];\n        }\n    }\n    return undefined;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1maW5kLWFmdGVyL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Q0FHQyxHQUVEOzs7Ozs7O0NBT0MsR0FFRDs7Ozs7Ozs7Ozs7Q0FXQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJDLEdBRUQ7Ozs7Ozs7Ozs7O0NBV0MsR0FFRDs7Ozs7Ozs7O0NBU0MsR0FFb0M7QUFFckM7Ozs7Ozs7Ozs7OztDQVlDLEdBQ00sTUFBTUMsWUFDWCxxRUFBcUU7QUFDckU7Ozs7O0dBS0MsR0FFQzs7Ozs7S0FLQyxHQUNELFNBQVVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzNCLE1BQU1DLEtBQUtMLHNEQUFPQSxDQUFDSTtJQUVuQixJQUFJLENBQUNGLFVBQVUsQ0FBQ0EsT0FBT0ksSUFBSSxJQUFJLENBQUNKLE9BQU9LLFFBQVEsRUFBRTtRQUMvQyxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxJQUFJLE9BQU9MLFVBQVUsVUFBVTtRQUM3QixJQUFJQSxRQUFRLEtBQUtBLFVBQVVNLE9BQU9DLGlCQUFpQixFQUFFO1lBQ25ELE1BQU0sSUFBSUYsTUFBTTtRQUNsQjtJQUNGLE9BQU87UUFDTEwsUUFBUUQsT0FBT0ssUUFBUSxDQUFDSSxPQUFPLENBQUNSO1FBRWhDLElBQUlBLFFBQVEsR0FBRztZQUNiLE1BQU0sSUFBSUssTUFBTTtRQUNsQjtJQUNGO0lBRUEsTUFBTyxFQUFFTCxRQUFRRCxPQUFPSyxRQUFRLENBQUNLLE1BQU0sQ0FBRTtRQUN2QyxJQUFJUCxHQUFHSCxPQUFPSyxRQUFRLENBQUNKLE1BQU0sRUFBRUEsT0FBT0QsU0FBUztZQUM3QyxPQUFPQSxPQUFPSyxRQUFRLENBQUNKLE1BQU07UUFDL0I7SUFDRjtJQUVBLE9BQU9VO0FBQ1QsRUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRncHQtbGl0ZS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWZpbmQtYWZ0ZXIvbGliL2luZGV4LmpzP2JkM2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IFVuaXN0Tm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFVuaXN0UGFyZW50XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RXhjbHVkZTxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0LCB1bmRlZmluZWQ+IHwgdW5kZWZpbmVkfSBUZXN0XG4gKiAgIFRlc3QgZnJvbSBgdW5pc3QtdXRpbC1pc2AuXG4gKlxuICogICBOb3RlOiB3ZSBoYXZlIHJlbW92ZSBhbmQgYWRkIGB1bmRlZmluZWRgLCBiZWNhdXNlIG90aGVyd2lzZSB3aGVuIGdlbmVyYXRpbmdcbiAqICAgYXV0b21hdGljIGAuZC50c2AgZmlsZXMsIFRTIHRyaWVzIHRvIGZsYXR0ZW4gcGF0aHMgZnJvbSBhIGxvY2FsIHBlcnNwZWN0aXZlLFxuICogICB3aGljaCBkb2VzbuKAmXQgd29yayB3aGVuIHB1Ymxpc2hpbmcgb24gbnBtLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgRm4gZXh0ZW5kcyAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgaW5mZXIgVGhpbmdcbiAqICAgPyBUaGluZ1xuICogICA6IEZhbGxiYWNrXG4gKiApfSBQcmVkaWNhdGVcbiAqICAgR2V0IHRoZSB2YWx1ZSBvZiBhIHR5cGUgZ3VhcmQgYEZuYC5cbiAqIEB0ZW1wbGF0ZSBGblxuICogICBWYWx1ZTsgdHlwaWNhbGx5IGZ1bmN0aW9uIHRoYXQgaXMgYSB0eXBlIGd1YXJkIChzdWNoIGFzIGAoeCk6IHggaXMgWWApLlxuICogQHRlbXBsYXRlIEZhbGxiYWNrXG4gKiAgIFZhbHVlIHRvIHlpZWxkIGlmIGBGbmAgaXMgbm90IGEgdHlwZSBndWFyZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIENoZWNrIGV4dGVuZHMgbnVsbCB8IHVuZGVmaW5lZCAvLyBObyB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogVmFsdWUgZXh0ZW5kcyB7dHlwZTogQ2hlY2t9IC8vIFN0cmluZyAodHlwZSkgdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IFZhbHVlIGV4dGVuZHMgQ2hlY2sgLy8gUGFydGlhbCB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogQ2hlY2sgZXh0ZW5kcyBGdW5jdGlvbiAvLyBGdW5jdGlvbiB0ZXN0LlxuICogICA/IFByZWRpY2F0ZTxDaGVjaywgVmFsdWU+IGV4dGVuZHMgVmFsdWVcbiAqICAgICA/IFByZWRpY2F0ZTxDaGVjaywgVmFsdWU+XG4gKiAgICAgOiBuZXZlclxuICogICA6IG5ldmVyIC8vIFNvbWUgb3RoZXIgdGVzdD9cbiAqICl9IE1hdGNoZXNPbmVcbiAqICAgQ2hlY2sgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyBhIHByaW1pdGl2ZSBjaGVjayBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUgVmFsdWVcbiAqICAgVmFsdWU7IHR5cGljYWxseSB1bmlzdCBgTm9kZWAuXG4gKiBAdGVtcGxhdGUgQ2hlY2tcbiAqICAgVmFsdWU7IHR5cGljYWxseSBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LCBidXQgbm90IGFycmF5cy5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIENoZWNrIGV4dGVuZHMgQXJyYXk8YW55PlxuICogICA/IE1hdGNoZXNPbmU8VmFsdWUsIENoZWNrW2tleW9mIENoZWNrXT5cbiAqICAgOiBNYXRjaGVzT25lPFZhbHVlLCBDaGVjaz5cbiAqICl9IE1hdGNoZXNcbiAqICAgQ2hlY2sgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyBhIGNoZWNrIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSBWYWx1ZVxuICogICBWYWx1ZTsgdHlwaWNhbGx5IHVuaXN0IGBOb2RlYC5cbiAqIEB0ZW1wbGF0ZSBDaGVja1xuICogICBWYWx1ZTsgdHlwaWNhbGx5IGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBLaW5kIGV4dGVuZHMge2NoaWxkcmVuOiBBcnJheTxpbmZlciBDaGlsZD59XG4gKiAgID8gQ2hpbGRcbiAqICAgOiBuZXZlclxuICogKX0gQ2hpbGRcbiAqICAgQ29sbGVjdCBub2RlcyB0aGF0IGNhbiBiZSBwYXJlbnRzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gS2luZFxuICogICBBbGwgbm9kZSB0eXBlcy5cbiAqL1xuXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5cbi8qKlxuICogRmluZCB0aGUgZmlyc3Qgbm9kZSBpbiBgcGFyZW50YCBhZnRlciBhbm90aGVyIGBub2RlYCBvciBhZnRlciBhbiBpbmRleCxcbiAqIHRoYXQgcGFzc2VzIGB0ZXN0YC5cbiAqXG4gKiBAcGFyYW0gcGFyZW50XG4gKiAgIFBhcmVudCBub2RlLlxuICogQHBhcmFtIGluZGV4XG4gKiAgIENoaWxkIG5vZGUgb3IgaW5kZXguXG4gKiBAcGFyYW0gW3Rlc3Q9dW5kZWZpbmVkXVxuICogICBUZXN0IGZvciBjaGlsZCB0byBsb29rIGZvciAob3B0aW9uYWwpLlxuICogQHJldHVybnNcbiAqICAgQSBjaGlsZCAobWF0Y2hpbmcgYHRlc3RgLCBpZiBnaXZlbikgb3IgYHVuZGVmaW5lZGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kQWZ0ZXIgPVxuICAvLyBOb3RlOiBvdmVybG9hZHMgbGlrZSB0aGlzIGFyZSBuZWVkZWQgdG8gc3VwcG9ydCBvcHRpb25hbCBnZW5lcmljcy5cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxLaW5kIGV4dGVuZHMgVW5pc3RQYXJlbnQsIENoZWNrIGV4dGVuZHMgVGVzdD4ocGFyZW50OiBLaW5kLCBpbmRleDogQ2hpbGQ8S2luZD4gfCBudW1iZXIsIHRlc3Q6IENoZWNrKSA9PiBNYXRjaGVzPENoaWxkPEtpbmQ+LCBDaGVjaz4gfCB1bmRlZmluZWQpICZcbiAgICogICAoPEtpbmQgZXh0ZW5kcyBVbmlzdFBhcmVudD4ocGFyZW50OiBLaW5kLCBpbmRleDogQ2hpbGQ8S2luZD4gfCBudW1iZXIsIHRlc3Q/OiBudWxsIHwgdW5kZWZpbmVkKSA9PiBDaGlsZDxLaW5kPiB8IHVuZGVmaW5lZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1VuaXN0UGFyZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge1VuaXN0Tm9kZSB8IG51bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIEByZXR1cm5zIHtVbmlzdE5vZGUgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmVudCwgaW5kZXgsIHRlc3QpIHtcbiAgICAgIGNvbnN0IGlzID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnR5cGUgfHwgIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgbnVtYmVyIGFzIGluZGV4JylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihpbmRleClcblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGlsZCBub2RlIG9yIGluZGV4JylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGlzKHBhcmVudC5jaGlsZHJlbltpbmRleF0sIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudC5jaGlsZHJlbltpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICApXG4iXSwibmFtZXMiOlsiY29udmVydCIsImZpbmRBZnRlciIsInBhcmVudCIsImluZGV4IiwidGVzdCIsImlzIiwidHlwZSIsImNoaWxkcmVuIiwiRXJyb3IiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImluZGV4T2YiLCJsZW5ndGgiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-find-after/lib/index.js\n");

/***/ })

};
;