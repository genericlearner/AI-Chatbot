"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-destination";
exports.ids = ["vendor-chunks/micromark-factory-destination"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-destination/dev/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-factory-destination/dev/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryDestination: () => (/* binding */ factoryDestination)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n\n/**\n * Parse destinations.\n *\n * ###### Examples\n *\n * ```markdown\n * <a>\n * <a\\>b>\n * <a b>\n * <a)>\n * a\n * a\\)b\n * a(b)c\n * a(b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type for whole (`<a>` or `b`).\n * @param {TokenType} literalType\n *   Type when enclosed (`<a>`).\n * @param {TokenType} literalMarkerType\n *   Type for enclosing (`<` and `>`).\n * @param {TokenType} rawType\n *   Type when not enclosed (`b`).\n * @param {TokenType} stringType\n *   Type for the value (`a` or `b`).\n * @param {number | undefined} [max=Infinity]\n *   Depth of nested parens (inclusive).\n * @returns {State}\n *   Start state.\n */\n// eslint-disable-next-line max-params\nfunction factoryDestination(\n  effects,\n  ok,\n  nok,\n  type,\n  literalType,\n  literalMarkerType,\n  rawType,\n  stringType,\n  max\n) {\n  const limit = max || Number.POSITIVE_INFINITY\n  let balance = 0\n\n  return start\n\n  /**\n   * Start of destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *     ^\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function start(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan) {\n      effects.enter(type)\n      effects.enter(literalType)\n      effects.enter(literalMarkerType)\n      effects.consume(code)\n      effects.exit(literalMarkerType)\n      return enclosedBefore\n    }\n\n    // ASCII control, space, closing paren.\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)\n    ) {\n      return nok(code)\n    }\n\n    effects.enter(type)\n    effects.enter(rawType)\n    effects.enter(stringType)\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})\n    return raw(code)\n  }\n\n  /**\n   * After `<`, at an enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function enclosedBefore(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n      effects.enter(literalMarkerType)\n      effects.consume(code)\n      effects.exit(literalMarkerType)\n      effects.exit(literalType)\n      effects.exit(type)\n      return ok\n    }\n\n    effects.enter(stringType)\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})\n    return enclosed(code)\n  }\n\n  /**\n   * In enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function enclosed(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)\n      effects.exit(stringType)\n      return enclosedBefore(code)\n    }\n\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)\n    ) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? enclosedEscape : enclosed\n  }\n\n  /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | <a\\*a>\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */\n  function enclosedEscape(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash\n    ) {\n      effects.consume(code)\n      return enclosed\n    }\n\n    return enclosed(code)\n  }\n\n  /**\n   * In raw destination.\n   *\n   * ```markdown\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function raw(code) {\n    if (\n      !balance &&\n      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||\n        (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code))\n    ) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)\n      effects.exit(stringType)\n      effects.exit(rawType)\n      effects.exit(type)\n      return ok(code)\n    }\n\n    if (balance < limit && code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n      effects.consume(code)\n      balance++\n      return raw\n    }\n\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis) {\n      effects.consume(code)\n      balance--\n      return raw\n    }\n\n    // ASCII control (but *not* `\\0`) and space and `(`.\n    // Note: in `markdown-rs`, `\\0` exists in codes, in `micromark-js` it\n    // doesn’t.\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)\n    ) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? rawEscape : raw\n  }\n\n  /**\n   * After `\\`, at special character.\n   *\n   * ```markdown\n   * > | a\\*a\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */\n  function rawEscape(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash\n    ) {\n      effects.consume(code)\n      return raw\n    }\n\n    return raw(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktZGVzdGluYXRpb24vZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLDBDQUEwQztBQUN2RDs7QUFNaUM7QUFDNEI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlCQUFpQix3REFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEIsTUFBTSxzRUFBWTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFLLGVBQWUsYUFBYSw0REFBUyxtQkFBbUI7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isd0RBQUssZUFBZSxhQUFhLDREQUFTLG1CQUFtQjtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlCQUFpQix3REFBSztBQUN0QixtQkFBbUIsd0RBQUs7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLE1BQU0sNEVBQWtCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3REFBSztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBSztBQUNyQixpQkFBaUIsd0RBQUs7QUFDdEIsUUFBUSxtRkFBeUI7QUFDakM7QUFDQSxtQkFBbUIsd0RBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msd0RBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHdEQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEIsTUFBTSxzRUFBWTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jdXN0b21lci1zdXBwb3J0Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uL2Rldi9pbmRleC5qcz82NGVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlblR5cGV9IFRva2VuVHlwZVxuICovXG5cbmltcG9ydCB7XG4gIGFzY2lpQ29udHJvbCxcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgbWFya2Rvd25MaW5lRW5kaW5nXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50cywgdHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBQYXJzZSBkZXN0aW5hdGlvbnMuXG4gKlxuICogIyMjIyMjIEV4YW1wbGVzXG4gKlxuICogYGBgbWFya2Rvd25cbiAqIDxhPlxuICogPGFcXD5iPlxuICogPGEgYj5cbiAqIDxhKT5cbiAqIGFcbiAqIGFcXCliXG4gKiBhKGIpY1xuICogYShiKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIGZvciB3aG9sZSAoYDxhPmAgb3IgYGJgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBsaXRlcmFsVHlwZVxuICogICBUeXBlIHdoZW4gZW5jbG9zZWQgKGA8YT5gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBsaXRlcmFsTWFya2VyVHlwZVxuICogICBUeXBlIGZvciBlbmNsb3NpbmcgKGA8YCBhbmQgYD5gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSByYXdUeXBlXG4gKiAgIFR5cGUgd2hlbiBub3QgZW5jbG9zZWQgKGBiYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgdmFsdWUgKGBhYCBvciBgYmApLlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IFttYXg9SW5maW5pdHldXG4gKiAgIERlcHRoIG9mIG5lc3RlZCBwYXJlbnMgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlEZXN0aW5hdGlvbihcbiAgZWZmZWN0cyxcbiAgb2ssXG4gIG5vayxcbiAgdHlwZSxcbiAgbGl0ZXJhbFR5cGUsXG4gIGxpdGVyYWxNYXJrZXJUeXBlLFxuICByYXdUeXBlLFxuICBzdHJpbmdUeXBlLFxuICBtYXhcbikge1xuICBjb25zdCBsaW1pdCA9IG1heCB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgbGV0IGJhbGFuY2UgPSAwXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPGFhPlxuICAgKiAgICAgXlxuICAgKiA+IHwgYWFcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gY29kZXMubGVzc1RoYW4pIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbFR5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICByZXR1cm4gZW5jbG9zZWRCZWZvcmVcbiAgICB9XG5cbiAgICAvLyBBU0NJSSBjb250cm9sLCBzcGFjZSwgY2xvc2luZyBwYXJlbi5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnNwYWNlIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5yaWdodFBhcmVudGhlc2lzIHx8XG4gICAgICBhc2NpaUNvbnRyb2woY29kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihyYXdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmNodW5rU3RyaW5nLCB7Y29udGVudFR5cGU6IGNvbnN0YW50cy5jb250ZW50VHlwZVN0cmluZ30pXG4gICAgcmV0dXJuIHJhdyhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGA8YCwgYXQgYW4gZW5jbG9zZWQgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5jbG9zZWRCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBjb2Rlcy5ncmVhdGVyVGhhbikge1xuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KGxpdGVyYWxUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlcy5jaHVua1N0cmluZywge2NvbnRlbnRUeXBlOiBjb25zdGFudHMuY29udGVudFR5cGVTdHJpbmd9KVxuICAgIHJldHVybiBlbmNsb3NlZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGVuY2xvc2VkIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPGFhPlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVuY2xvc2VkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gY29kZXMuZ3JlYXRlclRoYW4pIHtcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5jaHVua1N0cmluZylcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgcmV0dXJuIGVuY2xvc2VkQmVmb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5sZXNzVGhhbiB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCA/IGVuY2xvc2VkRXNjYXBlIDogZW5jbG9zZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgXFxgLCBhdCBhIHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgPGFcXCphPlxuICAgKiAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5jbG9zZWRFc2NhcGUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlc3NUaGFuIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5ncmVhdGVyVGhhbiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuYmFja3NsYXNoXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBlbmNsb3NlZFxuICAgIH1cblxuICAgIHJldHVybiBlbmNsb3NlZChjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHJhdyBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGFhXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiByYXcoY29kZSkge1xuICAgIGlmIChcbiAgICAgICFiYWxhbmNlICYmXG4gICAgICAoY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgfHxcbiAgICAgICAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSlcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5jaHVua1N0cmluZylcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHJhd1R5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChiYWxhbmNlIDwgbGltaXQgJiYgY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJhbGFuY2UrK1xuICAgICAgcmV0dXJuIHJhd1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBjb2Rlcy5yaWdodFBhcmVudGhlc2lzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJhbGFuY2UtLVxuICAgICAgcmV0dXJuIHJhd1xuICAgIH1cblxuICAgIC8vIEFTQ0lJIGNvbnRyb2wgKGJ1dCAqbm90KiBgXFwwYCkgYW5kIHNwYWNlIGFuZCBgKGAuXG4gICAgLy8gTm90ZTogaW4gYG1hcmtkb3duLXJzYCwgYFxcMGAgZXhpc3RzIGluIGNvZGVzLCBpbiBgbWljcm9tYXJrLWpzYCBpdFxuICAgIC8vIGRvZXNu4oCZdC5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnNwYWNlIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXMgfHxcbiAgICAgIGFzY2lpQ29udHJvbChjb2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2ggPyByYXdFc2NhcGUgOiByYXdcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgXFxgLCBhdCBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IGFcXCphXG4gICAqICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJhd0VzY2FwZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5yaWdodFBhcmVudGhlc2lzIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2hcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHJhd1xuICAgIH1cblxuICAgIHJldHVybiByYXcoY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-destination/dev/index.js\n");

/***/ })

};
;