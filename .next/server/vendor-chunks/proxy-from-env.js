"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/proxy-from-env";
exports.ids = ["vendor-chunks/proxy-from-env"];
exports.modules = {

/***/ "(ssr)/./node_modules/proxy-from-env/index.js":
/*!**********************************************!*\
  !*** ./node_modules/proxy-from-env/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar parseUrl = (__webpack_require__(/*! url */ \"url\").parse);\nvar DEFAULT_PORTS = {\n    ftp: 21,\n    gopher: 70,\n    http: 80,\n    https: 443,\n    ws: 80,\n    wss: 443\n};\nvar stringEndsWith = String.prototype.endsWith || function(s) {\n    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;\n};\n/**\n * @param {string|object} url - The URL, or the result from url.parse.\n * @return {string} The URL of the proxy that should handle the request to the\n *  given URL. If no proxy is set, this will be an empty string.\n */ function getProxyForUrl(url) {\n    var parsedUrl = typeof url === \"string\" ? parseUrl(url) : url || {};\n    var proto = parsedUrl.protocol;\n    var hostname = parsedUrl.host;\n    var port = parsedUrl.port;\n    if (typeof hostname !== \"string\" || !hostname || typeof proto !== \"string\") {\n        return \"\"; // Don't proxy URLs without a valid scheme or host.\n    }\n    proto = proto.split(\":\", 1)[0];\n    // Stripping ports in this way instead of using parsedUrl.hostname to make\n    // sure that the brackets around IPv6 addresses are kept.\n    hostname = hostname.replace(/:\\d*$/, \"\");\n    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;\n    if (!shouldProxy(hostname, port)) {\n        return \"\"; // Don't proxy URLs that match NO_PROXY.\n    }\n    var proxy = getEnv(\"npm_config_\" + proto + \"_proxy\") || getEnv(proto + \"_proxy\") || getEnv(\"npm_config_proxy\") || getEnv(\"all_proxy\");\n    if (proxy && proxy.indexOf(\"://\") === -1) {\n        // Missing scheme in proxy, default to the requested URL's scheme.\n        proxy = proto + \"://\" + proxy;\n    }\n    return proxy;\n}\n/**\n * Determines whether a given URL should be proxied.\n *\n * @param {string} hostname - The host name of the URL.\n * @param {number} port - The effective port of the URL.\n * @returns {boolean} Whether the given URL should be proxied.\n * @private\n */ function shouldProxy(hostname, port) {\n    var NO_PROXY = (getEnv(\"npm_config_no_proxy\") || getEnv(\"no_proxy\")).toLowerCase();\n    if (!NO_PROXY) {\n        return true; // Always proxy if NO_PROXY is not set.\n    }\n    if (NO_PROXY === \"*\") {\n        return false; // Never proxy if wildcard is set.\n    }\n    return NO_PROXY.split(/[,\\s]/).every(function(proxy) {\n        if (!proxy) {\n            return true; // Skip zero-length hosts.\n        }\n        var parsedProxy = proxy.match(/^(.+):(\\d+)$/);\n        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;\n        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;\n        if (parsedProxyPort && parsedProxyPort !== port) {\n            return true; // Skip if ports don't match.\n        }\n        if (!/^[.*]/.test(parsedProxyHostname)) {\n            // No wildcards, so stop proxying if there is an exact match.\n            return hostname !== parsedProxyHostname;\n        }\n        if (parsedProxyHostname.charAt(0) === \"*\") {\n            // Remove leading wildcard.\n            parsedProxyHostname = parsedProxyHostname.slice(1);\n        }\n        // Stop proxying if the hostname ends with the no_proxy host.\n        return !stringEndsWith.call(hostname, parsedProxyHostname);\n    });\n}\n/**\n * Get the value for an environment variable.\n *\n * @param {string} key - The name of the environment variable.\n * @return {string} The value of the environment variable.\n * @private\n */ function getEnv(key) {\n    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || \"\";\n}\nexports.getProxyForUrl = getProxyForUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJveHktZnJvbS1lbnYvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxXQUFXQyw2Q0FBb0I7QUFFbkMsSUFBSUUsZ0JBQWdCO0lBQ2xCQyxLQUFLO0lBQ0xDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLElBQUk7SUFDSkMsS0FBSztBQUNQO0FBRUEsSUFBSUMsaUJBQWlCQyxPQUFPQyxTQUFTLENBQUNDLFFBQVEsSUFBSSxTQUFTQyxDQUFDO0lBQzFELE9BQU9BLEVBQUVDLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sSUFDNUIsSUFBSSxDQUFDQyxPQUFPLENBQUNGLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEdBQUdELEVBQUVDLE1BQU0sTUFBTSxDQUFDO0FBQ2pEO0FBRUE7Ozs7Q0FJQyxHQUNELFNBQVNFLGVBQWVDLEdBQUc7SUFDekIsSUFBSUMsWUFBWSxPQUFPRCxRQUFRLFdBQVdsQixTQUFTa0IsT0FBT0EsT0FBTyxDQUFDO0lBQ2xFLElBQUlFLFFBQVFELFVBQVVFLFFBQVE7SUFDOUIsSUFBSUMsV0FBV0gsVUFBVUksSUFBSTtJQUM3QixJQUFJQyxPQUFPTCxVQUFVSyxJQUFJO0lBQ3pCLElBQUksT0FBT0YsYUFBYSxZQUFZLENBQUNBLFlBQVksT0FBT0YsVUFBVSxVQUFVO1FBQzFFLE9BQU8sSUFBSyxtREFBbUQ7SUFDakU7SUFFQUEsUUFBUUEsTUFBTUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7SUFDOUIsMEVBQTBFO0lBQzFFLHlEQUF5RDtJQUN6REgsV0FBV0EsU0FBU0ksT0FBTyxDQUFDLFNBQVM7SUFDckNGLE9BQU9HLFNBQVNILFNBQVNyQixhQUFhLENBQUNpQixNQUFNLElBQUk7SUFDakQsSUFBSSxDQUFDUSxZQUFZTixVQUFVRSxPQUFPO1FBQ2hDLE9BQU8sSUFBSyx3Q0FBd0M7SUFDdEQ7SUFFQSxJQUFJSyxRQUNGQyxPQUFPLGdCQUFnQlYsUUFBUSxhQUMvQlUsT0FBT1YsUUFBUSxhQUNmVSxPQUFPLHVCQUNQQSxPQUFPO0lBQ1QsSUFBSUQsU0FBU0EsTUFBTWIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHO1FBQ3hDLGtFQUFrRTtRQUNsRWEsUUFBUVQsUUFBUSxRQUFRUztJQUMxQjtJQUNBLE9BQU9BO0FBQ1Q7QUFFQTs7Ozs7OztDQU9DLEdBQ0QsU0FBU0QsWUFBWU4sUUFBUSxFQUFFRSxJQUFJO0lBQ2pDLElBQUlPLFdBQ0YsQ0FBQ0QsT0FBTywwQkFBMEJBLE9BQU8sV0FBVSxFQUFHRSxXQUFXO0lBQ25FLElBQUksQ0FBQ0QsVUFBVTtRQUNiLE9BQU8sTUFBTyx1Q0FBdUM7SUFDdkQ7SUFDQSxJQUFJQSxhQUFhLEtBQUs7UUFDcEIsT0FBTyxPQUFRLGtDQUFrQztJQUNuRDtJQUVBLE9BQU9BLFNBQVNOLEtBQUssQ0FBQyxTQUFTUSxLQUFLLENBQUMsU0FBU0osS0FBSztRQUNqRCxJQUFJLENBQUNBLE9BQU87WUFDVixPQUFPLE1BQU8sMEJBQTBCO1FBQzFDO1FBQ0EsSUFBSUssY0FBY0wsTUFBTU0sS0FBSyxDQUFDO1FBQzlCLElBQUlDLHNCQUFzQkYsY0FBY0EsV0FBVyxDQUFDLEVBQUUsR0FBR0w7UUFDekQsSUFBSVEsa0JBQWtCSCxjQUFjUCxTQUFTTyxXQUFXLENBQUMsRUFBRSxJQUFJO1FBQy9ELElBQUlHLG1CQUFtQkEsb0JBQW9CYixNQUFNO1lBQy9DLE9BQU8sTUFBTyw2QkFBNkI7UUFDN0M7UUFFQSxJQUFJLENBQUMsUUFBUWMsSUFBSSxDQUFDRixzQkFBc0I7WUFDdEMsNkRBQTZEO1lBQzdELE9BQU9kLGFBQWFjO1FBQ3RCO1FBRUEsSUFBSUEsb0JBQW9CRyxNQUFNLENBQUMsT0FBTyxLQUFLO1lBQ3pDLDJCQUEyQjtZQUMzQkgsc0JBQXNCQSxvQkFBb0JJLEtBQUssQ0FBQztRQUNsRDtRQUNBLDZEQUE2RDtRQUM3RCxPQUFPLENBQUM5QixlQUFlK0IsSUFBSSxDQUFDbkIsVUFBVWM7SUFDeEM7QUFDRjtBQUVBOzs7Ozs7Q0FNQyxHQUNELFNBQVNOLE9BQU9ZLEdBQUc7SUFDakIsT0FBT0MsUUFBUUMsR0FBRyxDQUFDRixJQUFJVixXQUFXLEdBQUcsSUFBSVcsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxXQUFXLEdBQUcsSUFBSTtBQUM3RTtBQUVBQyxzQkFBc0IsR0FBRzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGdwdC1saXRlLy4vbm9kZV9tb2R1bGVzL3Byb3h5LWZyb20tZW52L2luZGV4LmpzPzU4YWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2VVcmwgPSByZXF1aXJlKCd1cmwnKS5wYXJzZTtcblxudmFyIERFRkFVTFRfUE9SVFMgPSB7XG4gIGZ0cDogMjEsXG4gIGdvcGhlcjogNzAsXG4gIGh0dHA6IDgwLFxuICBodHRwczogNDQzLFxuICB3czogODAsXG4gIHdzczogNDQzLFxufTtcblxudmFyIHN0cmluZ0VuZHNXaXRoID0gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCB8fCBmdW5jdGlvbihzKSB7XG4gIHJldHVybiBzLmxlbmd0aCA8PSB0aGlzLmxlbmd0aCAmJlxuICAgIHRoaXMuaW5kZXhPZihzLCB0aGlzLmxlbmd0aCAtIHMubGVuZ3RoKSAhPT0gLTE7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gdXJsIC0gVGhlIFVSTCwgb3IgdGhlIHJlc3VsdCBmcm9tIHVybC5wYXJzZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgcHJveHkgdGhhdCBzaG91bGQgaGFuZGxlIHRoZSByZXF1ZXN0IHRvIHRoZVxuICogIGdpdmVuIFVSTC4gSWYgbm8gcHJveHkgaXMgc2V0LCB0aGlzIHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBnZXRQcm94eUZvclVybCh1cmwpIHtcbiAgdmFyIHBhcnNlZFVybCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gcGFyc2VVcmwodXJsKSA6IHVybCB8fCB7fTtcbiAgdmFyIHByb3RvID0gcGFyc2VkVXJsLnByb3RvY29sO1xuICB2YXIgaG9zdG5hbWUgPSBwYXJzZWRVcmwuaG9zdDtcbiAgdmFyIHBvcnQgPSBwYXJzZWRVcmwucG9ydDtcbiAgaWYgKHR5cGVvZiBob3N0bmFtZSAhPT0gJ3N0cmluZycgfHwgIWhvc3RuYW1lIHx8IHR5cGVvZiBwcm90byAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gJyc7ICAvLyBEb24ndCBwcm94eSBVUkxzIHdpdGhvdXQgYSB2YWxpZCBzY2hlbWUgb3IgaG9zdC5cbiAgfVxuXG4gIHByb3RvID0gcHJvdG8uc3BsaXQoJzonLCAxKVswXTtcbiAgLy8gU3RyaXBwaW5nIHBvcnRzIGluIHRoaXMgd2F5IGluc3RlYWQgb2YgdXNpbmcgcGFyc2VkVXJsLmhvc3RuYW1lIHRvIG1ha2VcbiAgLy8gc3VyZSB0aGF0IHRoZSBicmFja2V0cyBhcm91bmQgSVB2NiBhZGRyZXNzZXMgYXJlIGtlcHQuXG4gIGhvc3RuYW1lID0gaG9zdG5hbWUucmVwbGFjZSgvOlxcZCokLywgJycpO1xuICBwb3J0ID0gcGFyc2VJbnQocG9ydCkgfHwgREVGQVVMVF9QT1JUU1twcm90b10gfHwgMDtcbiAgaWYgKCFzaG91bGRQcm94eShob3N0bmFtZSwgcG9ydCkpIHtcbiAgICByZXR1cm4gJyc7ICAvLyBEb24ndCBwcm94eSBVUkxzIHRoYXQgbWF0Y2ggTk9fUFJPWFkuXG4gIH1cblxuICB2YXIgcHJveHkgPVxuICAgIGdldEVudignbnBtX2NvbmZpZ18nICsgcHJvdG8gKyAnX3Byb3h5JykgfHxcbiAgICBnZXRFbnYocHJvdG8gKyAnX3Byb3h5JykgfHxcbiAgICBnZXRFbnYoJ25wbV9jb25maWdfcHJveHknKSB8fFxuICAgIGdldEVudignYWxsX3Byb3h5Jyk7XG4gIGlmIChwcm94eSAmJiBwcm94eS5pbmRleE9mKCc6Ly8nKSA9PT0gLTEpIHtcbiAgICAvLyBNaXNzaW5nIHNjaGVtZSBpbiBwcm94eSwgZGVmYXVsdCB0byB0aGUgcmVxdWVzdGVkIFVSTCdzIHNjaGVtZS5cbiAgICBwcm94eSA9IHByb3RvICsgJzovLycgKyBwcm94eTtcbiAgfVxuICByZXR1cm4gcHJveHk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gVVJMIHNob3VsZCBiZSBwcm94aWVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBob3N0bmFtZSAtIFRoZSBob3N0IG5hbWUgb2YgdGhlIFVSTC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3J0IC0gVGhlIGVmZmVjdGl2ZSBwb3J0IG9mIHRoZSBVUkwuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZ2l2ZW4gVVJMIHNob3VsZCBiZSBwcm94aWVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2hvdWxkUHJveHkoaG9zdG5hbWUsIHBvcnQpIHtcbiAgdmFyIE5PX1BST1hZID1cbiAgICAoZ2V0RW52KCducG1fY29uZmlnX25vX3Byb3h5JykgfHwgZ2V0RW52KCdub19wcm94eScpKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIU5PX1BST1hZKSB7XG4gICAgcmV0dXJuIHRydWU7ICAvLyBBbHdheXMgcHJveHkgaWYgTk9fUFJPWFkgaXMgbm90IHNldC5cbiAgfVxuICBpZiAoTk9fUFJPWFkgPT09ICcqJykge1xuICAgIHJldHVybiBmYWxzZTsgIC8vIE5ldmVyIHByb3h5IGlmIHdpbGRjYXJkIGlzIHNldC5cbiAgfVxuXG4gIHJldHVybiBOT19QUk9YWS5zcGxpdCgvWyxcXHNdLykuZXZlcnkoZnVuY3Rpb24ocHJveHkpIHtcbiAgICBpZiAoIXByb3h5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vIFNraXAgemVyby1sZW5ndGggaG9zdHMuXG4gICAgfVxuICAgIHZhciBwYXJzZWRQcm94eSA9IHByb3h5Lm1hdGNoKC9eKC4rKTooXFxkKykkLyk7XG4gICAgdmFyIHBhcnNlZFByb3h5SG9zdG5hbWUgPSBwYXJzZWRQcm94eSA/IHBhcnNlZFByb3h5WzFdIDogcHJveHk7XG4gICAgdmFyIHBhcnNlZFByb3h5UG9ydCA9IHBhcnNlZFByb3h5ID8gcGFyc2VJbnQocGFyc2VkUHJveHlbMl0pIDogMDtcbiAgICBpZiAocGFyc2VkUHJveHlQb3J0ICYmIHBhcnNlZFByb3h5UG9ydCAhPT0gcG9ydCkge1xuICAgICAgcmV0dXJuIHRydWU7ICAvLyBTa2lwIGlmIHBvcnRzIGRvbid0IG1hdGNoLlxuICAgIH1cblxuICAgIGlmICghL15bLipdLy50ZXN0KHBhcnNlZFByb3h5SG9zdG5hbWUpKSB7XG4gICAgICAvLyBObyB3aWxkY2FyZHMsIHNvIHN0b3AgcHJveHlpbmcgaWYgdGhlcmUgaXMgYW4gZXhhY3QgbWF0Y2guXG4gICAgICByZXR1cm4gaG9zdG5hbWUgIT09IHBhcnNlZFByb3h5SG9zdG5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZFByb3h5SG9zdG5hbWUuY2hhckF0KDApID09PSAnKicpIHtcbiAgICAgIC8vIFJlbW92ZSBsZWFkaW5nIHdpbGRjYXJkLlxuICAgICAgcGFyc2VkUHJveHlIb3N0bmFtZSA9IHBhcnNlZFByb3h5SG9zdG5hbWUuc2xpY2UoMSk7XG4gICAgfVxuICAgIC8vIFN0b3AgcHJveHlpbmcgaWYgdGhlIGhvc3RuYW1lIGVuZHMgd2l0aCB0aGUgbm9fcHJveHkgaG9zdC5cbiAgICByZXR1cm4gIXN0cmluZ0VuZHNXaXRoLmNhbGwoaG9zdG5hbWUsIHBhcnNlZFByb3h5SG9zdG5hbWUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIGZvciBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0RW52KGtleSkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnZba2V5LnRvTG93ZXJDYXNlKCldIHx8IHByb2Nlc3MuZW52W2tleS50b1VwcGVyQ2FzZSgpXSB8fCAnJztcbn1cblxuZXhwb3J0cy5nZXRQcm94eUZvclVybCA9IGdldFByb3h5Rm9yVXJsO1xuIl0sIm5hbWVzIjpbInBhcnNlVXJsIiwicmVxdWlyZSIsInBhcnNlIiwiREVGQVVMVF9QT1JUUyIsImZ0cCIsImdvcGhlciIsImh0dHAiLCJodHRwcyIsIndzIiwid3NzIiwic3RyaW5nRW5kc1dpdGgiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJlbmRzV2l0aCIsInMiLCJsZW5ndGgiLCJpbmRleE9mIiwiZ2V0UHJveHlGb3JVcmwiLCJ1cmwiLCJwYXJzZWRVcmwiLCJwcm90byIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJob3N0IiwicG9ydCIsInNwbGl0IiwicmVwbGFjZSIsInBhcnNlSW50Iiwic2hvdWxkUHJveHkiLCJwcm94eSIsImdldEVudiIsIk5PX1BST1hZIiwidG9Mb3dlckNhc2UiLCJldmVyeSIsInBhcnNlZFByb3h5IiwibWF0Y2giLCJwYXJzZWRQcm94eUhvc3RuYW1lIiwicGFyc2VkUHJveHlQb3J0IiwidGVzdCIsImNoYXJBdCIsInNsaWNlIiwiY2FsbCIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJ0b1VwcGVyQ2FzZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/proxy-from-env/index.js\n");

/***/ })

};
;