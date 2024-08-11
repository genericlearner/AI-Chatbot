"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-is-element";
exports.ids = ["vendor-chunks/hast-util-is-element"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-is-element/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-is-element/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertElement: () => (/* binding */ convertElement),\n/* harmony export */   isElement: () => (/* binding */ isElement)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Parents} Parents\n */\n\n/**\n * @template Fn\n * @template Fallback\n * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate\n */\n\n/**\n * @callback Check\n *   Check that an arbitrary value is an element.\n * @param {unknown} this\n *   Context object (`this`) to call `test` with\n * @param {unknown} [element]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   Position of `element` in its parent.\n * @param {Parents | null | undefined} [parent]\n *   Parent of `element`.\n * @returns {boolean}\n *   Whether this is an element and passes a test.\n *\n * @typedef {Array<TestFunction | string> | TestFunction | string | null | undefined} Test\n *   Check for an arbitrary element.\n *\n *   * when `string`, checks that the element has that tag name\n *   * when `function`, see `TestFunction`\n *   * when `Array`, checks if one of the subtests pass\n *\n * @callback TestFunction\n *   Check if an element passes a test.\n * @param {unknown} this\n *   The given context.\n * @param {Element} element\n *   An element.\n * @param {number | undefined} [index]\n *   Position of `element` in its parent.\n * @param {Parents | undefined} [parent]\n *   Parent of `element`.\n * @returns {boolean | undefined | void}\n *   Whether this element passes the test.\n *\n *   Note: `void` is included until TS sees no return as `undefined`.\n */\n\n/**\n * Check if `element` is an `Element` and whether it passes the given test.\n *\n * @param element\n *   Thing to check, typically `element`.\n * @param test\n *   Check for a specific element.\n * @param index\n *   Position of `element` in its parent.\n * @param parent\n *   Parent of `element`.\n * @param context\n *   Context object (`this`) to call `test` with.\n * @returns\n *   Whether `element` is an `Element` and passes a test.\n * @throws\n *   When an incorrect `test`, `index`, or `parent` is given; there is no error\n *   thrown when `element` is not a node or not an element.\n */\nconst isElement =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends TestFunction>(element: unknown, test: Condition, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &\n   *   (<Condition extends string>(element: unknown, test: Condition, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &\n   *   ((element?: null | undefined) => false) &\n   *   ((element: unknown, test?: null | undefined, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &\n   *   ((element: unknown, test?: Test, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => boolean)\n   * )}\n   */\n  (\n    /**\n     * @param {unknown} [element]\n     * @param {Test | undefined} [test]\n     * @param {number | null | undefined} [index]\n     * @param {Parents | null | undefined} [parent]\n     * @param {unknown} [context]\n     * @returns {boolean}\n     */\n    // eslint-disable-next-line max-params\n    function (element, test, index, parent, context) {\n      const check = convertElement(test)\n\n      if (\n        index !== null &&\n        index !== undefined &&\n        (typeof index !== 'number' ||\n          index < 0 ||\n          index === Number.POSITIVE_INFINITY)\n      ) {\n        throw new Error('Expected positive finite `index`')\n      }\n\n      if (\n        parent !== null &&\n        parent !== undefined &&\n        (!parent.type || !parent.children)\n      ) {\n        throw new Error('Expected valid `parent`')\n      }\n\n      if (\n        (index === null || index === undefined) !==\n        (parent === null || parent === undefined)\n      ) {\n        throw new Error('Expected both `index` and `parent`')\n      }\n\n      return looksLikeAnElement(element)\n        ? check.call(context, element, index, parent)\n        : false\n    }\n  )\n\n/**\n * Generate a check from a test.\n *\n * Useful if you’re going to test many nodes, for example when creating a\n * utility where something else passes a compatible test.\n *\n * The created function is a bit faster because it expects valid input only:\n * an `element`, `index`, and `parent`.\n *\n * @param test\n *   A test for a specific element.\n * @returns\n *   A check.\n */\nconst convertElement =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &\n   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &\n   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &\n   *   ((test?: Test) => Check)\n   * )}\n   */\n  (\n    /**\n     * @param {Test | null | undefined} [test]\n     * @returns {Check}\n     */\n    function (test) {\n      if (test === null || test === undefined) {\n        return element\n      }\n\n      if (typeof test === 'string') {\n        return tagNameFactory(test)\n      }\n\n      // Assume array.\n      if (typeof test === 'object') {\n        return anyFactory(test)\n      }\n\n      if (typeof test === 'function') {\n        return castFactory(test)\n      }\n\n      throw new Error('Expected function, string, or array as `test`')\n    }\n  )\n\n/**\n * Handle multiple tests.\n *\n * @param {Array<TestFunction | string>} tests\n * @returns {Check}\n */\nfunction anyFactory(tests) {\n  /** @type {Array<Check>} */\n  const checks = []\n  let index = -1\n\n  while (++index < tests.length) {\n    checks[index] = convertElement(tests[index])\n  }\n\n  return castFactory(any)\n\n  /**\n   * @this {unknown}\n   * @type {TestFunction}\n   */\n  function any(...parameters) {\n    let index = -1\n\n    while (++index < checks.length) {\n      if (checks[index].apply(this, parameters)) return true\n    }\n\n    return false\n  }\n}\n\n/**\n * Turn a string into a test for an element with a certain type.\n *\n * @param {string} check\n * @returns {Check}\n */\nfunction tagNameFactory(check) {\n  return castFactory(tagName)\n\n  /**\n   * @param {Element} element\n   * @returns {boolean}\n   */\n  function tagName(element) {\n    return element.tagName === check\n  }\n}\n\n/**\n * Turn a custom test into a test for an element that passes that test.\n *\n * @param {TestFunction} testFunction\n * @returns {Check}\n */\nfunction castFactory(testFunction) {\n  return check\n\n  /**\n   * @this {unknown}\n   * @type {Check}\n   */\n  function check(value, index, parent) {\n    return Boolean(\n      looksLikeAnElement(value) &&\n        testFunction.call(\n          this,\n          value,\n          typeof index === 'number' ? index : undefined,\n          parent || undefined\n        )\n    )\n  }\n}\n\n/**\n * Make sure something is an element.\n *\n * @param {unknown} element\n * @returns {element is Element}\n */\nfunction element(element) {\n  return Boolean(\n    element &&\n      typeof element === 'object' &&\n      'type' in element &&\n      element.type === 'element' &&\n      'tagName' in element &&\n      typeof element.tagName === 'string'\n  )\n}\n\n/**\n * @param {unknown} value\n * @returns {value is Element}\n */\nfunction looksLikeAnElement(value) {\n  return (\n    value !== null &&\n    typeof value === 'object' &&\n    'type' in value &&\n    'tagName' in value\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHdCQUF3QjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9FQUFvRTtBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLHlFQUF5RTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsMExBQTBMLG1CQUFtQjtBQUM3TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLGtCQUFrQjtBQUNqQyxlQUFlLDJCQUEyQjtBQUMxQyxlQUFlLDRCQUE0QjtBQUMzQyxlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsOExBQThMLG1CQUFtQjtBQUNqTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY3VzdG9tZXItc3VwcG9ydC8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaXMtZWxlbWVudC9saWIvaW5kZXguanM/ZDc2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUGFyZW50c30gUGFyZW50c1xuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEZuXG4gKiBAdGVtcGxhdGUgRmFsbGJhY2tcbiAqIEB0eXBlZGVmIHtGbiBleHRlbmRzICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBpbmZlciBUaGluZyA/IFRoaW5nIDogRmFsbGJhY2t9IFByZWRpY2F0ZVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIENoZWNrXG4gKiAgIENoZWNrIHRoYXQgYW4gYXJiaXRyYXJ5IHZhbHVlIGlzIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaXNcbiAqICAgQ29udGV4dCBvYmplY3QgKGB0aGlzYCkgdG8gY2FsbCBgdGVzdGAgd2l0aFxuICogQHBhcmFtIHt1bmtub3dufSBbZWxlbWVudF1cbiAqICAgQW55dGhpbmcgKHR5cGljYWxseSBhIG5vZGUpLlxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbaW5kZXhdXG4gKiAgIFBvc2l0aW9uIG9mIGBlbGVtZW50YCBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHtQYXJlbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgUGFyZW50IG9mIGBlbGVtZW50YC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIHRoaXMgaXMgYW4gZWxlbWVudCBhbmQgcGFzc2VzIGEgdGVzdC5cbiAqXG4gKiBAdHlwZWRlZiB7QXJyYXk8VGVzdEZ1bmN0aW9uIHwgc3RyaW5nPiB8IFRlc3RGdW5jdGlvbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFRlc3RcbiAqICAgQ2hlY2sgZm9yIGFuIGFyYml0cmFyeSBlbGVtZW50LlxuICpcbiAqICAgKiB3aGVuIGBzdHJpbmdgLCBjaGVja3MgdGhhdCB0aGUgZWxlbWVudCBoYXMgdGhhdCB0YWcgbmFtZVxuICogICAqIHdoZW4gYGZ1bmN0aW9uYCwgc2VlIGBUZXN0RnVuY3Rpb25gXG4gKiAgICogd2hlbiBgQXJyYXlgLCBjaGVja3MgaWYgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzXG4gKlxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvblxuICogICBDaGVjayBpZiBhbiBlbGVtZW50IHBhc3NlcyBhIHRlc3QuXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaXNcbiAqICAgVGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqICAgQW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBbaW5kZXhdXG4gKiAgIFBvc2l0aW9uIG9mIGBlbGVtZW50YCBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHtQYXJlbnRzIHwgdW5kZWZpbmVkfSBbcGFyZW50XVxuICogICBQYXJlbnQgb2YgYGVsZW1lbnRgLlxuICogQHJldHVybnMge2Jvb2xlYW4gfCB1bmRlZmluZWQgfCB2b2lkfVxuICogICBXaGV0aGVyIHRoaXMgZWxlbWVudCBwYXNzZXMgdGhlIHRlc3QuXG4gKlxuICogICBOb3RlOiBgdm9pZGAgaXMgaW5jbHVkZWQgdW50aWwgVFMgc2VlcyBubyByZXR1cm4gYXMgYHVuZGVmaW5lZGAuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBgZWxlbWVudGAgaXMgYW4gYEVsZW1lbnRgIGFuZCB3aGV0aGVyIGl0IHBhc3NlcyB0aGUgZ2l2ZW4gdGVzdC5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogICBUaGluZyB0byBjaGVjaywgdHlwaWNhbGx5IGBlbGVtZW50YC5cbiAqIEBwYXJhbSB0ZXN0XG4gKiAgIENoZWNrIGZvciBhIHNwZWNpZmljIGVsZW1lbnQuXG4gKiBAcGFyYW0gaW5kZXhcbiAqICAgUG9zaXRpb24gb2YgYGVsZW1lbnRgIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0gcGFyZW50XG4gKiAgIFBhcmVudCBvZiBgZWxlbWVudGAuXG4gKiBAcGFyYW0gY29udGV4dFxuICogICBDb250ZXh0IG9iamVjdCAoYHRoaXNgKSB0byBjYWxsIGB0ZXN0YCB3aXRoLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBgZWxlbWVudGAgaXMgYW4gYEVsZW1lbnRgIGFuZCBwYXNzZXMgYSB0ZXN0LlxuICogQHRocm93c1xuICogICBXaGVuIGFuIGluY29ycmVjdCBgdGVzdGAsIGBpbmRleGAsIG9yIGBwYXJlbnRgIGlzIGdpdmVuOyB0aGVyZSBpcyBubyBlcnJvclxuICogICB0aHJvd24gd2hlbiBgZWxlbWVudGAgaXMgbm90IGEgbm9kZSBvciBub3QgYW4gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzRWxlbWVudCA9XG4gIC8vIE5vdGU6IG92ZXJsb2FkcyBpbiBKU0RvYyBjYW7igJl0IHlldCB1c2UgZGlmZmVyZW50IGBAdGVtcGxhdGVgcy5cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBUZXN0RnVuY3Rpb24+KGVsZW1lbnQ6IHVua25vd24sIHRlc3Q6IENvbmRpdGlvbiwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnRzIHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IGVsZW1lbnQgaXMgRWxlbWVudCAmIFByZWRpY2F0ZTxDb25kaXRpb24sIEVsZW1lbnQ+KSAmXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBzdHJpbmc+KGVsZW1lbnQ6IHVua25vd24sIHRlc3Q6IENvbmRpdGlvbiwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnRzIHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IGVsZW1lbnQgaXMgRWxlbWVudCAmIHt0YWdOYW1lOiBDb25kaXRpb259KSAmXG4gICAqICAgKChlbGVtZW50PzogbnVsbCB8IHVuZGVmaW5lZCkgPT4gZmFsc2UpICZcbiAgICogICAoKGVsZW1lbnQ6IHVua25vd24sIHRlc3Q/OiBudWxsIHwgdW5kZWZpbmVkLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudHMgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gZWxlbWVudCBpcyBFbGVtZW50KSAmXG4gICAqICAgKChlbGVtZW50OiB1bmtub3duLCB0ZXN0PzogVGVzdCwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnRzIHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IGJvb2xlYW4pXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbZWxlbWVudF1cbiAgICAgKiBAcGFyYW0ge1Rlc3QgfCB1bmRlZmluZWR9IFt0ZXN0XVxuICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICAgICAqIEBwYXJhbSB7UGFyZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtwYXJlbnRdXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbY29udGV4dF1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICAgIGZ1bmN0aW9uIChlbGVtZW50LCB0ZXN0LCBpbmRleCwgcGFyZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBjaGVjayA9IGNvbnZlcnRFbGVtZW50KHRlc3QpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgaW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgIGluZGV4IDwgMCB8fFxuICAgICAgICAgIGluZGV4ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgYGluZGV4YCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgIHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICghcGFyZW50LnR5cGUgfHwgIXBhcmVudC5jaGlsZHJlbilcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHZhbGlkIGBwYXJlbnRgJylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAoaW5kZXggPT09IG51bGwgfHwgaW5kZXggPT09IHVuZGVmaW5lZCkgIT09XG4gICAgICAgIChwYXJlbnQgPT09IG51bGwgfHwgcGFyZW50ID09PSB1bmRlZmluZWQpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBib3RoIGBpbmRleGAgYW5kIGBwYXJlbnRgJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvb2tzTGlrZUFuRWxlbWVudChlbGVtZW50KVxuICAgICAgICA/IGNoZWNrLmNhbGwoY29udGV4dCwgZWxlbWVudCwgaW5kZXgsIHBhcmVudClcbiAgICAgICAgOiBmYWxzZVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hlY2sgZnJvbSBhIHRlc3QuXG4gKlxuICogVXNlZnVsIGlmIHlvdeKAmXJlIGdvaW5nIHRvIHRlc3QgbWFueSBub2RlcywgZm9yIGV4YW1wbGUgd2hlbiBjcmVhdGluZyBhXG4gKiB1dGlsaXR5IHdoZXJlIHNvbWV0aGluZyBlbHNlIHBhc3NlcyBhIGNvbXBhdGlibGUgdGVzdC5cbiAqXG4gKiBUaGUgY3JlYXRlZCBmdW5jdGlvbiBpcyBhIGJpdCBmYXN0ZXIgYmVjYXVzZSBpdCBleHBlY3RzIHZhbGlkIGlucHV0IG9ubHk6XG4gKiBhbiBgZWxlbWVudGAsIGBpbmRleGAsIGFuZCBgcGFyZW50YC5cbiAqXG4gKiBAcGFyYW0gdGVzdFxuICogICBBIHRlc3QgZm9yIGEgc3BlY2lmaWMgZWxlbWVudC5cbiAqIEByZXR1cm5zXG4gKiAgIEEgY2hlY2suXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0RWxlbWVudCA9XG4gIC8vIE5vdGU6IG92ZXJsb2FkcyBpbiBKU0RvYyBjYW7igJl0IHlldCB1c2UgZGlmZmVyZW50IGBAdGVtcGxhdGVgcy5cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBUZXN0RnVuY3Rpb24+KHRlc3Q6IENvbmRpdGlvbikgPT4gKGVsZW1lbnQ6IHVua25vd24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50cyB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBlbGVtZW50IGlzIEVsZW1lbnQgJiBQcmVkaWNhdGU8Q29uZGl0aW9uLCBFbGVtZW50PikgJlxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgc3RyaW5nPih0ZXN0OiBDb25kaXRpb24pID0+IChlbGVtZW50OiB1bmtub3duLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudHMgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gZWxlbWVudCBpcyBFbGVtZW50ICYge3RhZ05hbWU6IENvbmRpdGlvbn0pICZcbiAgICogICAoKHRlc3Q/OiBudWxsIHwgdW5kZWZpbmVkKSA9PiAoZWxlbWVudD86IHVua25vd24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50cyB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBlbGVtZW50IGlzIEVsZW1lbnQpICZcbiAgICogICAoKHRlc3Q/OiBUZXN0KSA9PiBDaGVjaylcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rlc3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbdGVzdF1cbiAgICAgKiBAcmV0dXJucyB7Q2hlY2t9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICAvLyBBc3N1bWUgYXJyYXkuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBhbnlGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FzdEZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBhcnJheSBhcyBgdGVzdGAnKVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEhhbmRsZSBtdWx0aXBsZSB0ZXN0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PFRlc3RGdW5jdGlvbiB8IHN0cmluZz59IHRlc3RzXG4gKiBAcmV0dXJucyB7Q2hlY2t9XG4gKi9cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxDaGVjaz59ICovXG4gIGNvbnN0IGNoZWNrcyA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydEVsZW1lbnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGNhc3RGYWN0b3J5KGFueSlcblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEB0eXBlIHtUZXN0RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBhbnkoLi4ucGFyYW1ldGVycykge1xuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIHBhcmFtZXRlcnMpKSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVHVybiBhIHN0cmluZyBpbnRvIGEgdGVzdCBmb3IgYW4gZWxlbWVudCB3aXRoIGEgY2VydGFpbiB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1xuICogQHJldHVybnMge0NoZWNrfVxuICovXG5mdW5jdGlvbiB0YWdOYW1lRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkodGFnTmFtZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gdGFnTmFtZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PT0gY2hlY2tcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSBjdXN0b20gdGVzdCBpbnRvIGEgdGVzdCBmb3IgYW4gZWxlbWVudCB0aGF0IHBhc3NlcyB0aGF0IHRlc3QuXG4gKlxuICogQHBhcmFtIHtUZXN0RnVuY3Rpb259IHRlc3RGdW5jdGlvblxuICogQHJldHVybnMge0NoZWNrfVxuICovXG5mdW5jdGlvbiBjYXN0RmFjdG9yeSh0ZXN0RnVuY3Rpb24pIHtcbiAgcmV0dXJuIGNoZWNrXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAdHlwZSB7Q2hlY2t9XG4gICAqL1xuICBmdW5jdGlvbiBjaGVjayh2YWx1ZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgbG9va3NMaWtlQW5FbGVtZW50KHZhbHVlKSAmJlxuICAgICAgICB0ZXN0RnVuY3Rpb24uY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwYXJlbnQgfHwgdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBNYWtlIHN1cmUgc29tZXRoaW5nIGlzIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSBlbGVtZW50XG4gKiBAcmV0dXJucyB7ZWxlbWVudCBpcyBFbGVtZW50fVxuICovXG5mdW5jdGlvbiBlbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgZWxlbWVudCAmJlxuICAgICAgdHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmXG4gICAgICAndHlwZScgaW4gZWxlbWVudCAmJlxuICAgICAgZWxlbWVudC50eXBlID09PSAnZWxlbWVudCcgJiZcbiAgICAgICd0YWdOYW1lJyBpbiBlbGVtZW50ICYmXG4gICAgICB0eXBlb2YgZWxlbWVudC50YWdOYW1lID09PSAnc3RyaW5nJ1xuICApXG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGxvb2tzTGlrZUFuRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICd0eXBlJyBpbiB2YWx1ZSAmJlxuICAgICd0YWdOYW1lJyBpbiB2YWx1ZVxuICApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-is-element/lib/index.js\n");

/***/ })

};
;