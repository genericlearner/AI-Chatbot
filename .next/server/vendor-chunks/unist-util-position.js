"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-position/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/unist-util-position/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pointEnd: () => (/* binding */ pointEnd),\n/* harmony export */   pointStart: () => (/* binding */ pointStart),\n/* harmony export */   position: () => (/* binding */ position)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef NodeLike\n * @property {string} type\n * @property {PositionLike | null | undefined} [position]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n */\n\n/**\n * Get the ending point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */\nconst pointEnd = point('end')\n\n/**\n * Get the starting point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */\nconst pointStart = point('start')\n\n/**\n * Get the positional info of `node`.\n *\n * @param {'end' | 'start'} type\n *   Side.\n * @returns\n *   Getter.\n */\nfunction point(type) {\n  return point\n\n  /**\n   * Get the point info of `node` at a bound side.\n   *\n   * @param {Node | NodeLike | null | undefined} [node]\n   * @returns {Point | undefined}\n   */\n  function point(node) {\n    const point = (node && node.position && node.position[type]) || {}\n\n    if (\n      typeof point.line === 'number' &&\n      point.line > 0 &&\n      typeof point.column === 'number' &&\n      point.column > 0\n    ) {\n      return {\n        line: point.line,\n        column: point.column,\n        offset:\n          typeof point.offset === 'number' && point.offset > -1\n            ? point.offset\n            : undefined\n      }\n    }\n  }\n}\n\n/**\n * Get the positional info of `node`.\n *\n * @param {Node | NodeLike | null | undefined} [node]\n *   Node.\n * @returns {Position | undefined}\n *   Position.\n */\nfunction position(node) {\n  const start = pointStart(node)\n  const end = pointEnd(node)\n\n  if (start && end) {\n    return {start, end}\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLDhCQUE4QjtBQUM1QztBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWN1c3RvbWVyLXN1cHBvcnQvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9saWIvaW5kZXguanM/NjExNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb2ludH0gUG9pbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9zaXRpb259IFBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBOb2RlTGlrZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb25MaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Bvc2l0aW9uXVxuICpcbiAqIEB0eXBlZGVmIFBvc2l0aW9uTGlrZVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbc3RhcnRdXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmRdXG4gKlxuICogQHR5cGVkZWYgUG9pbnRMaWtlXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtsaW5lXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29sdW1uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbb2Zmc2V0XVxuICovXG5cbi8qKlxuICogR2V0IHRoZSBlbmRpbmcgcG9pbnQgb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiAgIE5vZGUuXG4gKiBAcmV0dXJuc1xuICogICBQb2ludC5cbiAqL1xuZXhwb3J0IGNvbnN0IHBvaW50RW5kID0gcG9pbnQoJ2VuZCcpXG5cbi8qKlxuICogR2V0IHRoZSBzdGFydGluZyBwb2ludCBvZiBgbm9kZWAuXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqICAgTm9kZS5cbiAqIEByZXR1cm5zXG4gKiAgIFBvaW50LlxuICovXG5leHBvcnQgY29uc3QgcG9pbnRTdGFydCA9IHBvaW50KCdzdGFydCcpXG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbmFsIGluZm8gb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSB7J2VuZCcgfCAnc3RhcnQnfSB0eXBlXG4gKiAgIFNpZGUuXG4gKiBAcmV0dXJuc1xuICogICBHZXR0ZXIuXG4gKi9cbmZ1bmN0aW9uIHBvaW50KHR5cGUpIHtcbiAgcmV0dXJuIHBvaW50XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcG9pbnQgaW5mbyBvZiBgbm9kZWAgYXQgYSBib3VuZCBzaWRlLlxuICAgKlxuICAgKiBAcGFyYW0ge05vZGUgfCBOb2RlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtub2RlXVxuICAgKiBAcmV0dXJucyB7UG9pbnQgfCB1bmRlZmluZWR9XG4gICAqL1xuICBmdW5jdGlvbiBwb2ludChub2RlKSB7XG4gICAgY29uc3QgcG9pbnQgPSAobm9kZSAmJiBub2RlLnBvc2l0aW9uICYmIG5vZGUucG9zaXRpb25bdHlwZV0pIHx8IHt9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcG9pbnQubGluZSA9PT0gJ251bWJlcicgJiZcbiAgICAgIHBvaW50LmxpbmUgPiAwICYmXG4gICAgICB0eXBlb2YgcG9pbnQuY29sdW1uID09PSAnbnVtYmVyJyAmJlxuICAgICAgcG9pbnQuY29sdW1uID4gMFxuICAgICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZTogcG9pbnQubGluZSxcbiAgICAgICAgY29sdW1uOiBwb2ludC5jb2x1bW4sXG4gICAgICAgIG9mZnNldDpcbiAgICAgICAgICB0eXBlb2YgcG9pbnQub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiBwb2ludC5vZmZzZXQgPiAtMVxuICAgICAgICAgICAgPyBwb2ludC5vZmZzZXRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbmFsIGluZm8gb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSB7Tm9kZSB8IE5vZGVMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW25vZGVdXG4gKiAgIE5vZGUuXG4gKiBAcmV0dXJucyB7UG9zaXRpb24gfCB1bmRlZmluZWR9XG4gKiAgIFBvc2l0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb24obm9kZSkge1xuICBjb25zdCBzdGFydCA9IHBvaW50U3RhcnQobm9kZSlcbiAgY29uc3QgZW5kID0gcG9pbnRFbmQobm9kZSlcblxuICBpZiAoc3RhcnQgJiYgZW5kKSB7XG4gICAgcmV0dXJuIHtzdGFydCwgZW5kfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-position/lib/index.js\n");

/***/ })

};
;