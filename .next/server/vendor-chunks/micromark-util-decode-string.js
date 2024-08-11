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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeString: () => (/* binding */ decodeString)\n/* harmony export */ });\n/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decode-named-character-reference */ \"(ssr)/./node_modules/decode-named-character-reference/index.js\");\n/* harmony import */ var micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-decode-numeric-character-reference */ \"(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n\n\n\n\nconst characterEscapeOrReference =\n  /\\\\([!-/:-@[-`{-~])|&(#(?:\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});/gi\n\n/**\n * Decode markdown strings (which occur in places such as fenced code info\n * strings, destinations, labels, and titles).\n *\n * The “string” content type allows character escapes and -references.\n * This decodes those.\n *\n * @param {string} value\n *   Value to decode.\n * @returns {string}\n *   Decoded value.\n */\nfunction decodeString(value) {\n  return value.replace(characterEscapeOrReference, decode)\n}\n\n/**\n * @param {string} $0\n * @param {string} $1\n * @param {string} $2\n * @returns {string}\n */\nfunction decode($0, $1, $2) {\n  if ($1) {\n    // Escape.\n    return $1\n  }\n\n  // Reference.\n  const head = $2.charCodeAt(0)\n\n  if (head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.numberSign) {\n    const head = $2.charCodeAt(1)\n    const hex = head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX || head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX\n    return (0,micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__.decodeNumericCharacterReference)(\n      $2.slice(hex ? 2 : 1),\n      hex ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseHexadecimal : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseDecimal\n    )\n  }\n\n  return (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__.decodeNamedCharacterReference)($2) || $0\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZy9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFDbUI7QUFDM0M7O0FBRXREO0FBQ0EsaUJBQWlCLGNBQWMsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLEVBQUU7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSx3REFBSztBQUNwQjtBQUNBLHlCQUF5Qix3REFBSyx3QkFBd0Isd0RBQUs7QUFDM0QsV0FBVyxrSEFBK0I7QUFDMUM7QUFDQSxZQUFZLDREQUFTLDBCQUEwQiw0REFBUztBQUN4RDtBQUNBOztBQUVBLFNBQVMsK0ZBQTZCO0FBQ3RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY3VzdG9tZXItc3VwcG9ydC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1kZWNvZGUtc3RyaW5nL2Rldi9pbmRleC5qcz8yZjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2V9IGZyb20gJ2RlY29kZS1uYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlJ1xuaW1wb3J0IHtkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1kZWNvZGUtbnVtZXJpYy1jaGFyYWN0ZXItcmVmZXJlbmNlJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbmNvbnN0IGNoYXJhY3RlckVzY2FwZU9yUmVmZXJlbmNlID1cbiAgL1xcXFwoWyEtLzotQFstYHstfl0pfCYoIyg/OlxcZHsxLDd9fHhbXFxkYS1mXXsxLDZ9KXxbXFxkYS16XXsxLDMxfSk7L2dpXG5cbi8qKlxuICogRGVjb2RlIG1hcmtkb3duIHN0cmluZ3MgKHdoaWNoIG9jY3VyIGluIHBsYWNlcyBzdWNoIGFzIGZlbmNlZCBjb2RlIGluZm9cbiAqIHN0cmluZ3MsIGRlc3RpbmF0aW9ucywgbGFiZWxzLCBhbmQgdGl0bGVzKS5cbiAqXG4gKiBUaGUg4oCcc3RyaW5n4oCdIGNvbnRlbnQgdHlwZSBhbGxvd3MgY2hhcmFjdGVyIGVzY2FwZXMgYW5kIC1yZWZlcmVuY2VzLlxuICogVGhpcyBkZWNvZGVzIHRob3NlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBkZWNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBEZWNvZGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKGNoYXJhY3RlckVzY2FwZU9yUmVmZXJlbmNlLCBkZWNvZGUpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9ICQwXG4gKiBAcGFyYW0ge3N0cmluZ30gJDFcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKCQwLCAkMSwgJDIpIHtcbiAgaWYgKCQxKSB7XG4gICAgLy8gRXNjYXBlLlxuICAgIHJldHVybiAkMVxuICB9XG5cbiAgLy8gUmVmZXJlbmNlLlxuICBjb25zdCBoZWFkID0gJDIuY2hhckNvZGVBdCgwKVxuXG4gIGlmIChoZWFkID09PSBjb2Rlcy5udW1iZXJTaWduKSB7XG4gICAgY29uc3QgaGVhZCA9ICQyLmNoYXJDb2RlQXQoMSlcbiAgICBjb25zdCBoZXggPSBoZWFkID09PSBjb2Rlcy5sb3dlcmNhc2VYIHx8IGhlYWQgPT09IGNvZGVzLnVwcGVyY2FzZVhcbiAgICByZXR1cm4gZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZShcbiAgICAgICQyLnNsaWNlKGhleCA/IDIgOiAxKSxcbiAgICAgIGhleCA/IGNvbnN0YW50cy5udW1lcmljQmFzZUhleGFkZWNpbWFsIDogY29uc3RhbnRzLm51bWVyaWNCYXNlRGVjaW1hbFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZSgkMikgfHwgJDBcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-decode-string/dev/index.js\n");

/***/ })

};
;