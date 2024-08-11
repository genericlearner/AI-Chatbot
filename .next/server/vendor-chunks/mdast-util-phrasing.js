"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing";
exports.ids = ["vendor-chunks/mdast-util-phrasing"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-phrasing/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').Html} Html\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n */\n\n\n\n/**\n * Check if the given value is *phrasing content*.\n *\n * > 👉 **Note**: Excludes `html`, which can be both phrasing or flow.\n *\n * @param node\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */\n\nconst phrasing =\n  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */\n  (\n    (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n      'break',\n      'delete',\n      'emphasis',\n      // To do: next major: removed since footnotes were added to GFM.\n      'footnote',\n      'footnoteReference',\n      'image',\n      'imageReference',\n      'inlineCode',\n      // Enabled by `mdast-util-math`:\n      'inlineMath',\n      'link',\n      'linkReference',\n      // Enabled by `mdast-util-mdx`:\n      'mdxJsxTextElement',\n      // Enabled by `mdast-util-mdx`:\n      'mdxTextExpression',\n      'strong',\n      'text',\n      // Enabled by `mdast-util-directive`:\n      'textDirective'\n    ])\n  )\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsaUNBQWlDO0FBQzlDOztBQUVxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxhQUFhLDREQUE0RDtBQUN6RTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY3VzdG9tZXItc3VwcG9ydC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXBocmFzaW5nL2xpYi9pbmRleC5qcz8zZDMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5IdG1sfSBIdG1sXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBocmFzaW5nQ29udGVudH0gUGhyYXNpbmdDb250ZW50XG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyAqcGhyYXNpbmcgY29udGVudCouXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBFeGNsdWRlcyBgaHRtbGAsIHdoaWNoIGNhbiBiZSBib3RoIHBocmFzaW5nIG9yIGZsb3cuXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqICAgVGhpbmcgdG8gY2hlY2ssIHR5cGljYWxseSBgTm9kZWAuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGB2YWx1ZWAgaXMgcGhyYXNpbmcgY29udGVudC5cbiAqL1xuXG5leHBvcnQgY29uc3QgcGhyYXNpbmcgPVxuICAvKiogQHR5cGUgeyhub2RlPzogdW5rbm93bikgPT4gbm9kZSBpcyBFeGNsdWRlPFBocmFzaW5nQ29udGVudCwgSHRtbD59ICovXG4gIChcbiAgICBjb252ZXJ0KFtcbiAgICAgICdicmVhaycsXG4gICAgICAnZGVsZXRlJyxcbiAgICAgICdlbXBoYXNpcycsXG4gICAgICAvLyBUbyBkbzogbmV4dCBtYWpvcjogcmVtb3ZlZCBzaW5jZSBmb290bm90ZXMgd2VyZSBhZGRlZCB0byBHRk0uXG4gICAgICAnZm9vdG5vdGUnLFxuICAgICAgJ2Zvb3Rub3RlUmVmZXJlbmNlJyxcbiAgICAgICdpbWFnZScsXG4gICAgICAnaW1hZ2VSZWZlcmVuY2UnLFxuICAgICAgJ2lubGluZUNvZGUnLFxuICAgICAgLy8gRW5hYmxlZCBieSBgbWRhc3QtdXRpbC1tYXRoYDpcbiAgICAgICdpbmxpbmVNYXRoJyxcbiAgICAgICdsaW5rJyxcbiAgICAgICdsaW5rUmVmZXJlbmNlJyxcbiAgICAgIC8vIEVuYWJsZWQgYnkgYG1kYXN0LXV0aWwtbWR4YDpcbiAgICAgICdtZHhKc3hUZXh0RWxlbWVudCcsXG4gICAgICAvLyBFbmFibGVkIGJ5IGBtZGFzdC11dGlsLW1keGA6XG4gICAgICAnbWR4VGV4dEV4cHJlc3Npb24nLFxuICAgICAgJ3N0cm9uZycsXG4gICAgICAndGV4dCcsXG4gICAgICAvLyBFbmFibGVkIGJ5IGBtZGFzdC11dGlsLWRpcmVjdGl2ZWA6XG4gICAgICAndGV4dERpcmVjdGl2ZSdcbiAgICBdKVxuICApXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ })

};
;