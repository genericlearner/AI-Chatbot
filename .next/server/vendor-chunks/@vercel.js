"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.3.1\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    const mode = isBrowser() ? window.vam : detectEnvironment();\n    return mode || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    if (!properties) return void 0;\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nvar DEV_SCRIPT_URL = \"https://va.vercel-scripts.com/v1/script.debug.js\";\nvar PROD_SCRIPT_URL = \"/_vercel/insights/script.js\";\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.disableAutoTrack) {\n        script.dataset.disableAutoTrack = \"1\";\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    script.onerror = ()=>{\n        const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);\n    };\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties, options) {\n    var _a, _b;\n    if (!isBrowser()) {\n        const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n        if (isProduction()) {\n            console.warn(msg);\n        } else {\n            throw new Error(msg);\n        }\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2,\n            options\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props,\n            options\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\nfunction pageview({ route, path }) {\n    var _a;\n    (_a = window.va) == null ? void 0 : _a.call(window, \"pageview\", {\n        route,\n        path\n    });\n}\n// src/react.tsx\nfunction Analytics(props) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        inject({\n            framework: props.framework || \"react\",\n            ...props.route !== void 0 && {\n                disableAutoTrack: true\n            },\n            ...props\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (props.route && props.path) {\n            pageview({\n                route: props.route,\n                path: props.path\n            });\n        }\n    }, [\n        props.route,\n        props.path\n    ]);\n    return null;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjs7QUNDeEIsSUFBQUMsT0FBUTtBQUNSLElBQUFDLFVBQVc7O0FDRk4sSUFBTUMsWUFBWTtJQUV2QixJQUFJQyxPQUFPQyxFQUFBLEVBQUk7SUFFZkQsT0FBT0MsRUFBQSxHQUFLLFNBQVNDLEVBQUEsR0FBS0MsTUFBQTtRQUN2QkgsQ0FBQUEsT0FBT0ksR0FBQSxHQUFNSixPQUFPSSxHQUFBLElBQU8sRUFBQyxFQUFHQyxJQUFBLENBQUtGO0lBQ3ZDO0FBQ0Y7O0FDTE8sU0FBU0c7SUFDZCxPQUFPLGdCQUFrQjtBQUMzQjtBQUVBLFNBQVNDO0lBQ1AsSUFBSTtRQUNGLE1BQU1DO1FBQ04sSUFBSUEsUUFBUSxpQkFBaUJBLFFBQVEsUUFBUTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixTQUFTQyxHQUFQLENBRUY7SUFDQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTQyxRQUFRQyxPQUFhO0lBQ25DLElBQUlBLFNBQVMsUUFBUTtRQUNuQlgsT0FBT1ksR0FBQSxHQUFNTDtRQUNiO0lBQ0Y7SUFFQVAsT0FBT1ksR0FBQSxHQUFNRDtBQUNmO0FBRU8sU0FBU0U7SUFDZCxNQUFNRixPQUFPTCxjQUFjTixPQUFPWSxHQUFBLEdBQU1MO0lBQ3hDLE9BQU9JLFFBQVE7QUFDakI7QUFFTyxTQUFTRztJQUNkLE9BQU9ELGNBQWM7QUFDdkI7QUFFTyxTQUFTRTtJQUNkLE9BQU9GLGNBQWM7QUFDdkI7QUFFQSxTQUFTRyxVQUNQQyxHQUFBLEVBQ0EsRUFBRSxDQUFDQSxJQUFHLEVBQUdDLENBQUEsRUFBRyxHQUFHQyxNQUFLO0lBRXBCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTQyxnQkFDZEMsVUFBQSxFQUNBQyxPQUFBO0lBSUEsSUFBSSxDQUFDRCxZQUFZLE9BQU87SUFDeEIsSUFBSUUsUUFBUUY7SUFDWixNQUFNRyxrQkFBNEIsRUFBQztJQUNu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QUFBLEtBQVAsZ0JBQUEyRCxHQUFBdEIsSUFBQSxDQUFBdEMsUUFBWSxTQUFTO1lBQ25CSCxNQUFBQTtZQUNBa0UsTUFBTXhDO1lBQ05EO1FBQ0Y7SUFDRixTQUFTMEMsS0FBUDtRQUNBLElBQUlBLGVBQWVsQyxTQUFTZixpQkFBaUI7WUFFM0N5QyxRQUFRUyxLQUFBLENBQU1EO1FBQ2hCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNFLFNBQVMsRUFBRUMsS0FBQSxFQUFPQyxJQUFBLEVBQUs7SUF6SWhDLElBQUFoQztJQTBJRUEsQ0FBQUEsS0FBQXBDLE9BQU9DLEVBQUEsS0FBUCxnQkFBQW1DLEdBQUFFLElBQUEsQ0FBQXRDLFFBQVksWUFBWTtRQUN0Qm1FO1FBQ0FDO0lBQ0Y7QUFDRjs7QUpuSEEsU0FBU0MsVUFDUDlDLEtBQUE7SUFLQTNCLGdEQUFTQSxDQUFDO1FBQ1JzQyxPQUFPO1lBQ0xlLFdBQVcxQixNQUFNMEIsU0FBQSxJQUFhO1lBQzlCLEdBQUkxQixNQUFNNEMsS0FBQSxLQUFVLFVBQWE7Z0JBQUVoQixrQkFBa0I7WUFBSztZQUMxRCxHQUFHNUIsS0FBQTtRQUNMO0lBRUYsR0FBRyxFQUFFO0lBRUwzQixnREFBU0EsQ0FBQztRQUNSLElBQUkyQixNQUFNNEMsS0FBQSxJQUFTNUMsTUFBTTZDLElBQUEsRUFBTTtZQUM3QkYsU0FBUztnQkFDUEMsT0FBTzVDLE1BQU00QyxLQUFBO2dCQUNiQyxNQUFNN0MsTUFBTTZDLElBQUE7WUFDZDtRQUNGO0lBQ0YsR0FBRztRQUFDN0MsTUFBTTRDLEtBQUE7UUFBTzVDLE1BQU02QyxJQUFJO0tBQUM7SUFFNUIsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY3VzdG9tZXItc3VwcG9ydC8uLi8uLi9zcmMvcmVhY3QudHN4PzQ3NzciLCJ3ZWJwYWNrOi8vYWktY3VzdG9tZXItc3VwcG9ydC8uLi8uLi9wYWNrYWdlLmpzb24/NmZjNiIsIndlYnBhY2s6Ly9haS1jdXN0b21lci1zdXBwb3J0Ly4uLy4uL3NyYy9xdWV1ZS50cz84NzNlIiwid2VicGFjazovL2FpLWN1c3RvbWVyLXN1cHBvcnQvLi4vLi4vc3JjL3V0aWxzLnRzPzYyNTIiLCJ3ZWJwYWNrOi8vYWktY3VzdG9tZXItc3VwcG9ydC8uLi8uLi9zcmMvZ2VuZXJpYy50cz8wYmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluamVjdCwgdHJhY2ssIHBhZ2V2aWV3IH0gZnJvbSAnLi9nZW5lcmljJztcbmltcG9ydCB0eXBlIHsgQW5hbHl0aWNzUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBJbmplY3RzIHRoZSBWZXJjZWwgV2ViIEFuYWx5dGljcyBzY3JpcHQgaW50byB0aGUgcGFnZSBoZWFkIGFuZCBzdGFydHMgdHJhY2tpbmcgcGFnZSB2aWV3cy4gUmVhZCBtb3JlIGluIG91ciBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvY29uY2VwdHMvYW5hbHl0aWNzL3BhY2thZ2UpLlxuICogQHBhcmFtIFtwcm9wc10gLSBBbmFseXRpY3Mgb3B0aW9ucy5cbiAqIEBwYXJhbSBbcHJvcHMubW9kZV0gLSBUaGUgbW9kZSB0byB1c2UgZm9yIHRoZSBhbmFseXRpY3Mgc2NyaXB0LiBEZWZhdWx0cyB0byBgYXV0b2AuXG4gKiAgLSBgYXV0b2AgLSBBdXRvbWF0aWNhbGx5IGRldGVjdCB0aGUgZW52aXJvbm1lbnQuICBVc2VzIGBwcm9kdWN0aW9uYCBpZiB0aGUgZW52aXJvbm1lbnQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKiAgLSBgcHJvZHVjdGlvbmAgLSBBbHdheXMgdXNlIHRoZSBwcm9kdWN0aW9uIHNjcmlwdC4gKFNlbmRzIGV2ZW50cyB0byB0aGUgc2VydmVyKVxuICogIC0gYGRldmVsb3BtZW50YCAtIEFsd2F5cyB1c2UgdGhlIGRldmVsb3BtZW50IHNjcmlwdC4gKExvZ3MgZXZlbnRzIHRvIHRoZSBjb25zb2xlKVxuICogQHBhcmFtIFtwcm9wcy5kZWJ1Z10gLSBXaGV0aGVyIHRvIGVuYWJsZSBkZWJ1ZyBsb2dnaW5nIGluIGRldmVsb3BtZW50LiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gKiBAcGFyYW0gW3Byb3BzLmJlZm9yZVNlbmRdIC0gQSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIG1vZGlmeSBldmVudHMgYmVmb3JlIHRoZXkgYXJlIHNlbnQuIFNob3VsZCByZXR1cm4gdGhlIGV2ZW50IG9iamVjdCBvciBgbnVsbGAgdG8gY2FuY2VsIHRoZSBldmVudC5cbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSAnQHZlcmNlbC9hbmFseXRpY3MvcmVhY3QnO1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAqICByZXR1cm4gKFxuICogICA8ZGl2PlxuICogICAgPEFuYWx5dGljcyAvPlxuICogICAgPGgxPk15IEFwcDwvaDE+XG4gKiAgPC9kaXY+XG4gKiApO1xuICogfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIEFuYWx5dGljcyhcbiAgcHJvcHM6IEFuYWx5dGljc1Byb3BzICYge1xuICAgIGZyYW1ld29yaz86IHN0cmluZztcbiAgICBwYXRoPzogc3RyaW5nIHwgbnVsbDtcbiAgfVxuKTogbnVsbCB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5qZWN0KHtcbiAgICAgIGZyYW1ld29yazogcHJvcHMuZnJhbWV3b3JrIHx8ICdyZWFjdCcsXG4gICAgICAuLi4ocHJvcHMucm91dGUgIT09IHVuZGVmaW5lZCAmJiB7IGRpc2FibGVBdXRvVHJhY2s6IHRydWUgfSksXG4gICAgICAuLi5wcm9wcyxcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIG9ubHkgcnVuIG9uY2VcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnJvdXRlICYmIHByb3BzLnBhdGgpIHtcbiAgICAgIHBhZ2V2aWV3KHtcbiAgICAgICAgcm91dGU6IHByb3BzLnJvdXRlLFxuICAgICAgICBwYXRoOiBwcm9wcy5wYXRoLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMucm91dGUsIHByb3BzLnBhdGhdKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHsgdHJhY2ssIEFuYWx5dGljcyB9O1xuZXhwb3J0IHR5cGUgeyBBbmFseXRpY3NQcm9wcyB9O1xuIiwie1xuICBcIm5hbWVcIjogXCJAdmVyY2VsL2FuYWx5dGljc1wiLFxuICBcInZlcnNpb25cIjogXCIxLjMuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2FpbiByZWFsLXRpbWUgdHJhZmZpYyBpbnNpZ2h0cyB3aXRoIFZlcmNlbCBXZWIgQW5hbHl0aWNzXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiYW5hbHl0aWNzXCIsXG4gICAgXCJ2ZXJjZWxcIlxuICBdLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidXJsXCI6IFwiZ2l0aHViOnZlcmNlbC9hbmFseXRpY3NcIixcbiAgICBcImRpcmVjdG9yeVwiOiBcInBhY2thZ2VzL3dlYlwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIk1QTC0yLjBcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi4vcGFja2FnZS5qc29uXCI6IFwiLi9wYWNrYWdlLmpzb25cIixcbiAgICBcIi5cIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3JlYWN0XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9yZWFjdC9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3JlYWN0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3JlYWN0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9uZXh0XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9uZXh0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbmV4dC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9uZXh0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9zZXJ2ZXJcIjoge1xuICAgICAgXCJub2RlXCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5qc1wiLFxuICAgICAgXCJlZGdlLWxpZ2h0XCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9zZXJ2ZXIvaW5kZXguanNcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9zZXJ2ZXIvaW5kZXguanNcIlxuICAgIH1cbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4Lm1qc1wiLFxuICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgXCJ0eXBlc1ZlcnNpb25zXCI6IHtcbiAgICBcIipcIjoge1xuICAgICAgXCIqXCI6IFtcbiAgICAgICAgXCJkaXN0L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwicmVhY3RcIjogW1xuICAgICAgICBcImRpc3QvcmVhY3QvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJzZXJ2ZXJcIjogW1xuICAgICAgICBcImRpc3Qvc2VydmVyL2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwibmV4dFwiOiBbXG4gICAgICAgIFwiZGlzdC9uZXh0L2luZGV4LmQudHNcIlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidHN1cFwiLFxuICAgIFwiZGV2XCI6IFwidHN1cCAtLXdhdGNoXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC5cIixcbiAgICBcImxpbnQtZml4XCI6IFwiZXNsaW50IC4gLS1maXhcIixcbiAgICBcInRlc3RcIjogXCJqZXN0XCIsXG4gICAgXCJ0eXBlLWNoZWNrXCI6IFwidHNjIC0tbm9FbWl0XCJcbiAgfSxcbiAgXCJlc2xpbnRDb25maWdcIjoge1xuICAgIFwiZXh0ZW5kc1wiOiBbXG4gICAgICBcIkB2ZXJjZWwvZXNsaW50LWNvbmZpZ1wiXG4gICAgXSxcbiAgICBcInJ1bGVzXCI6IHtcbiAgICAgIFwidHNkb2Mvc3ludGF4XCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIFwiaWdub3JlUGF0dGVybnNcIjogW1xuICAgICAgXCJqZXN0LnNldHVwLnRzXCJcbiAgICBdXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInNlcnZlci1vbmx5XCI6IFwiXjAuMC4xXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHN3Yy9jb3JlXCI6IFwiXjEuMy42NlwiLFxuICAgIFwiQHN3Yy9qZXN0XCI6IFwiXjAuMi4yNlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl41LjE2LjVcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTQuMC4wXCIsXG4gICAgXCJAdHlwZXMvamVzdFwiOiBcIl4yOS41LjJcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjMuMVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuMTRcIixcbiAgICBcIkB0eXBlcy90ZXN0aW5nLWxpYnJhcnlfX2plc3QtZG9tXCI6IFwiXjUuMTQuNlwiLFxuICAgIFwiQHZlcmNlbC9lc2xpbnQtY29uZmlnXCI6IFwid29ya3NwYWNlOjAuMC4wXCIsXG4gICAgXCJqZXN0XCI6IFwiXjI5LjUuMFwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS41LjBcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwidHN1cFwiOiBcIjcuMS4wXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIm5leHRcIjogXCI+PSAxM1wiLFxuICAgIFwicmVhY3RcIjogXCJeMTggfHwgXjE5XCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzTWV0YVwiOiB7XG4gICAgXCJuZXh0XCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJyZWFjdFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbml0UXVldWUgPSAoKTogdm9pZCA9PiB7XG4gIC8vIGluaXRpYWxpemUgdmEgdW50aWwgc2NyaXB0IGlzIGxvYWRlZFxuICBpZiAod2luZG93LnZhKSByZXR1cm47XG5cbiAgd2luZG93LnZhID0gZnVuY3Rpb24gYSguLi5wYXJhbXMpOiB2b2lkIHtcbiAgICAod2luZG93LnZhcSA9IHdpbmRvdy52YXEgfHwgW10pLnB1c2gocGFyYW1zKTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEFsbG93ZWRQcm9wZXJ0eVZhbHVlcywgTW9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEVudmlyb25tZW50KCk6ICdkZXZlbG9wbWVudCcgfCAncHJvZHVjdGlvbicge1xuICB0cnkge1xuICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmIChlbnYgPT09ICdkZXZlbG9wbWVudCcgfHwgZW52ID09PSAndGVzdCcpIHtcbiAgICAgIHJldHVybiAnZGV2ZWxvcG1lbnQnO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGRvIG5vdGhpbmcsIHRoaXMgaXMgb2theVxuICB9XG4gIHJldHVybiAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNb2RlKG1vZGU6IE1vZGUgPSAnYXV0bycpOiB2b2lkIHtcbiAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgIHdpbmRvdy52YW0gPSBkZXRlY3RFbnZpcm9ubWVudCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdpbmRvdy52YW0gPSBtb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZSgpOiBNb2RlIHtcbiAgY29uc3QgbW9kZSA9IGlzQnJvd3NlcigpID8gd2luZG93LnZhbSA6IGRldGVjdEVudmlyb25tZW50KCk7XG4gIHJldHVybiBtb2RlIHx8ICdwcm9kdWN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZHVjdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gJ3Byb2R1Y3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZlbG9wbWVudCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gJ2RldmVsb3BtZW50Jztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlS2V5KFxuICBrZXk6IHN0cmluZyxcbiAgeyBba2V5XTogXywgLi4ucmVzdCB9XG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIHJldHVybiByZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wZXJ0aWVzKFxuICBwcm9wZXJ0aWVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCxcbiAgb3B0aW9uczoge1xuICAgIHN0cmlwPzogYm9vbGVhbjtcbiAgfVxuKTogRXJyb3IgfCBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFwcm9wZXJ0aWVzKSByZXR1cm4gdW5kZWZpbmVkO1xuICBsZXQgcHJvcHMgPSBwcm9wZXJ0aWVzO1xuICBjb25zdCBlcnJvclByb3BlcnRpZXM6IHN0cmluZ1tdID0gW107XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMpKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLnN0cmlwKSB7XG4gICAgICAgIHByb3BzID0gcmVtb3ZlS2V5KGtleSwgcHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZXJyb3JQcm9wZXJ0aWVzLmxlbmd0aCA+IDAgJiYgIW9wdGlvbnMuc3RyaXApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB2YWxpZDogJHtlcnJvclByb3BlcnRpZXMuam9pbihcbiAgICAgICAgJywgJ1xuICAgICAgKX0uIE9ubHkgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMsIGFuZCBudWxsIGFyZSBhbGxvd2VkLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBwcm9wcyBhcyBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVJvdXRlKFxuICBwYXRobmFtZTogc3RyaW5nIHwgbnVsbCxcbiAgcGF0aFBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+IHwgbnVsbFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcGF0aG5hbWUgfHwgIXBhdGhQYXJhbXMpIHtcbiAgICByZXR1cm4gcGF0aG5hbWU7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gcGF0aG5hbWU7XG4gIHRyeSB7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHBhdGhQYXJhbXMpO1xuICAgIC8vIHNpbXBsZSBrZXlzIG11c3QgYmUgaGFuZGxlZCBmaXJzdFxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlKTtcbiAgICAgICAgaWYgKG1hdGNoZXIudGVzdChyZXN1bHQpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWF0Y2hlciwgYC9bJHtrZXl9XWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFycmF5IHZhbHVlcyBuZXh0XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXIgPSB0dXJuVmFsdWVUb1JlZ0V4cCh2YWx1ZS5qb2luKCcvJykpO1xuICAgICAgICBpZiAobWF0Y2hlci50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtYXRjaGVyLCBgL1suLi4ke2tleX1dYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBwYXRobmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0dXJuVmFsdWVUb1JlZ0V4cCh2YWx1ZTogc3RyaW5nKTogUmVnRXhwIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYC8ke2VzY2FwZVJlZ0V4cCh2YWx1ZSl9KD89Wy8/I118JClgKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuIiwiaW1wb3J0IHsgbmFtZSBhcyBwYWNrYWdlTmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBpbml0UXVldWUgfSBmcm9tICcuL3F1ZXVlJztcbmltcG9ydCB0eXBlIHtcbiAgQWxsb3dlZFByb3BlcnR5VmFsdWVzLFxuICBBbmFseXRpY3NQcm9wcyxcbiAgRmxhZ3NEYXRhSW5wdXQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgaXNCcm93c2VyLFxuICBwYXJzZVByb3BlcnRpZXMsXG4gIHNldE1vZGUsXG4gIGlzRGV2ZWxvcG1lbnQsXG4gIGlzUHJvZHVjdGlvbixcbn0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBERVZfU0NSSVBUX1VSTCA9XG4gICdodHRwczovL3ZhLnZlcmNlbC1zY3JpcHRzLmNvbS92MS9zY3JpcHQuZGVidWcuanMnO1xuZXhwb3J0IGNvbnN0IFBST0RfU0NSSVBUX1VSTCA9ICcvX3ZlcmNlbC9pbnNpZ2h0cy9zY3JpcHQuanMnO1xuXG4vKipcbiAqIEluamVjdHMgdGhlIFZlcmNlbCBXZWIgQW5hbHl0aWNzIHNjcmlwdCBpbnRvIHRoZSBwYWdlIGhlYWQgYW5kIHN0YXJ0cyB0cmFja2luZyBwYWdlIHZpZXdzLiBSZWFkIG1vcmUgaW4gb3VyIFtkb2N1bWVudGF0aW9uXShodHRwczovL3ZlcmNlbC5jb20vZG9jcy9jb25jZXB0cy9hbmFseXRpY3MvcGFja2FnZSkuXG4gKiBAcGFyYW0gW3Byb3BzXSAtIEFuYWx5dGljcyBvcHRpb25zLlxuICogQHBhcmFtIFtwcm9wcy5tb2RlXSAtIFRoZSBtb2RlIHRvIHVzZSBmb3IgdGhlIGFuYWx5dGljcyBzY3JpcHQuIERlZmF1bHRzIHRvIGBhdXRvYC5cbiAqICAtIGBhdXRvYCAtIEF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBlbnZpcm9ubWVudC4gIFVzZXMgYHByb2R1Y3Rpb25gIGlmIHRoZSBlbnZpcm9ubWVudCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqICAtIGBwcm9kdWN0aW9uYCAtIEFsd2F5cyB1c2UgdGhlIHByb2R1Y3Rpb24gc2NyaXB0LiAoU2VuZHMgZXZlbnRzIHRvIHRoZSBzZXJ2ZXIpXG4gKiAgLSBgZGV2ZWxvcG1lbnRgIC0gQWx3YXlzIHVzZSB0aGUgZGV2ZWxvcG1lbnQgc2NyaXB0LiAoTG9ncyBldmVudHMgdG8gdGhlIGNvbnNvbGUpXG4gKiBAcGFyYW0gW3Byb3BzLmRlYnVnXSAtIFdoZXRoZXIgdG8gZW5hYmxlIGRlYnVnIGxvZ2dpbmcgaW4gZGV2ZWxvcG1lbnQuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAqIEBwYXJhbSBbcHJvcHMuYmVmb3JlU2VuZF0gLSBBIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gbW9kaWZ5IGV2ZW50cyBiZWZvcmUgdGhleSBhcmUgc2VudC4gU2hvdWxkIHJldHVybiB0aGUgZXZlbnQgb2JqZWN0IG9yIGBudWxsYCB0byBjYW5jZWwgdGhlIGV2ZW50LlxuICogQHBhcmFtIFtwcm9wcy5kc25dIC0gVGhlIERTTiBvZiB0aGUgcHJvamVjdCB0byBzZW5kIGV2ZW50cyB0by4gT25seSByZXF1aXJlZCB3aGVuIHNlbGYtaG9zdGluZy5cbiAqL1xuZnVuY3Rpb24gaW5qZWN0KFxuICBwcm9wczogQW5hbHl0aWNzUHJvcHMgJiB7XG4gICAgZnJhbWV3b3JrPzogc3RyaW5nO1xuICB9ID0ge1xuICAgIGRlYnVnOiB0cnVlLFxuICB9XG4pOiB2b2lkIHtcbiAgaWYgKCFpc0Jyb3dzZXIoKSkgcmV0dXJuO1xuXG4gIHNldE1vZGUocHJvcHMubW9kZSk7XG5cbiAgaW5pdFF1ZXVlKCk7XG5cbiAgaWYgKHByb3BzLmJlZm9yZVNlbmQpIHtcbiAgICB3aW5kb3cudmE/LignYmVmb3JlU2VuZCcsIHByb3BzLmJlZm9yZVNlbmQpO1xuICB9XG5cbiAgY29uc3Qgc3JjID1cbiAgICBwcm9wcy5zY3JpcHRTcmMgfHwgKGlzRGV2ZWxvcG1lbnQoKSA/IERFVl9TQ1JJUFRfVVJMIDogUFJPRF9TQ1JJUFRfVVJMKTtcblxuICBpZiAoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjKj1cIiR7c3JjfVwiXWApKSByZXR1cm47XG5cbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSBzcmM7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5kYXRhc2V0LnNka24gPVxuICAgIHBhY2thZ2VOYW1lICsgKHByb3BzLmZyYW1ld29yayA/IGAvJHtwcm9wcy5mcmFtZXdvcmt9YCA6ICcnKTtcbiAgc2NyaXB0LmRhdGFzZXQuc2RrdiA9IHZlcnNpb247XG5cbiAgaWYgKHByb3BzLmRpc2FibGVBdXRvVHJhY2spIHtcbiAgICBzY3JpcHQuZGF0YXNldC5kaXNhYmxlQXV0b1RyYWNrID0gJzEnO1xuICB9XG4gIGlmIChwcm9wcy5lbmRwb2ludCkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmVuZHBvaW50ID0gcHJvcHMuZW5kcG9pbnQ7XG4gIH1cbiAgaWYgKHByb3BzLmRzbikge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRzbiA9IHByb3BzLmRzbjtcbiAgfVxuXG4gIHNjcmlwdC5vbmVycm9yID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGlzRGV2ZWxvcG1lbnQoKVxuICAgICAgPyAnUGxlYXNlIGNoZWNrIGlmIGFueSBhZCBibG9ja2VycyBhcmUgZW5hYmxlZCBhbmQgdHJ5IGFnYWluLidcbiAgICAgIDogJ0JlIHN1cmUgdG8gZW5hYmxlIFdlYiBBbmFseXRpY3MgZm9yIHlvdXIgcHJvamVjdCBhbmQgZGVwbG95IGFnYWluLiBTZWUgaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvYW5hbHl0aWNzL3F1aWNrc3RhcnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uJztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIC0tIExvZ2dpbmcgdG8gY29uc29sZSBpcyBpbnRlbnRpb25hbFxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtWZXJjZWwgV2ViIEFuYWx5dGljc10gRmFpbGVkIHRvIGxvYWQgc2NyaXB0IGZyb20gJHtzcmN9LiAke2Vycm9yTWVzc2FnZX1gXG4gICAgKTtcbiAgfTtcblxuICBpZiAoaXNEZXZlbG9wbWVudCgpICYmIHByb3BzLmRlYnVnID09PSBmYWxzZSkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRlYnVnID0gJ2ZhbHNlJztcbiAgfVxuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuLyoqXG4gKiBUcmFja3MgYSBjdXN0b20gZXZlbnQuIFBsZWFzZSByZWZlciB0byB0aGUgW2RvY3VtZW50YXRpb25dKGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2NvbmNlcHRzL2FuYWx5dGljcy9jdXN0b20tZXZlbnRzKSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBjdXN0b20gZXZlbnRzLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gKiAqIEV4YW1wbGVzOiBgUHVyY2hhc2VgLCBgQ2xpY2sgQnV0dG9uYCwgb3IgYFBsYXkgVmlkZW9gLlxuICogQHBhcmFtIFtwcm9wZXJ0aWVzXSAtIEFkZGl0aW9uYWwgcHJvcGVydGllcyBvZiB0aGUgZXZlbnQuIE5lc3RlZCBvYmplY3RzIGFyZSBub3Qgc3VwcG9ydGVkLiBBbGxvd2VkIHZhbHVlcyBhcmUgYHN0cmluZ2AsIGBudW1iZXJgLCBgYm9vbGVhbmAsIGFuZCBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRyYWNrKFxuICBuYW1lOiBzdHJpbmcsXG4gIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+LFxuICBvcHRpb25zPzoge1xuICAgIGZsYWdzPzogRmxhZ3NEYXRhSW5wdXQ7XG4gIH1cbik6IHZvaWQge1xuICBpZiAoIWlzQnJvd3NlcigpKSB7XG4gICAgY29uc3QgbXNnID1cbiAgICAgICdbVmVyY2VsIFdlYiBBbmFseXRpY3NdIFBsZWFzZSBpbXBvcnQgYHRyYWNrYCBmcm9tIGBAdmVyY2VsL2FuYWx5dGljcy9zZXJ2ZXJgIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpbiBhIHNlcnZlciBlbnZpcm9ubWVudCc7XG5cbiAgICBpZiAoaXNQcm9kdWN0aW9uKCkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIC0tIFNob3cgd2FybmluZyBpbiBwcm9kdWN0aW9uXG4gICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgd2luZG93LnZhPy4oJ2V2ZW50JywgeyBuYW1lLCBvcHRpb25zIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BlcnRpZXMocHJvcGVydGllcywge1xuICAgICAgc3RyaXA6IGlzUHJvZHVjdGlvbigpLFxuICAgIH0pO1xuXG4gICAgd2luZG93LnZhPy4oJ2V2ZW50Jywge1xuICAgICAgbmFtZSxcbiAgICAgIGRhdGE6IHByb3BzLFxuICAgICAgb3B0aW9ucyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGlzRGV2ZWxvcG1lbnQoKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gTG9nZ2luZyB0byBjb25zb2xlIGlzIGludGVudGlvbmFsXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2V2aWV3KHsgcm91dGUsIHBhdGggfTogeyByb3V0ZT86IHN0cmluZzsgcGF0aD86IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy52YT8uKCdwYWdldmlldycsIHtcbiAgICByb3V0ZSxcbiAgICBwYXRoLFxuICB9KTtcbn1cblxuZXhwb3J0IHsgaW5qZWN0LCB0cmFjaywgcGFnZXZpZXcgfTtcbmV4cG9ydCB0eXBlIHsgQW5hbHl0aWNzUHJvcHMgfTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydCAtLSBEZWZhdWx0IGV4cG9ydCBpcyBpbnRlbnRpb25hbFxuZXhwb3J0IGRlZmF1bHQge1xuICBpbmplY3QsXG4gIHRyYWNrLFxufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJuYW1lIiwidmVyc2lvbiIsImluaXRRdWV1ZSIsIndpbmRvdyIsInZhIiwiYSIsInBhcmFtcyIsInZhcSIsInB1c2giLCJpc0Jyb3dzZXIiLCJkZXRlY3RFbnZpcm9ubWVudCIsImVudiIsImUiLCJzZXRNb2RlIiwibW9kZSIsInZhbSIsImdldE1vZGUiLCJpc1Byb2R1Y3Rpb24iLCJpc0RldmVsb3BtZW50IiwicmVtb3ZlS2V5Iiwia2V5IiwiXyIsInJlc3QiLCJwYXJzZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwib3B0aW9ucyIsInByb3BzIiwiZXJyb3JQcm9wZXJ0aWVzIiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwic3RyaXAiLCJsZW5ndGgiLCJFcnJvciIsImpvaW4iLCJERVZfU0NSSVBUX1VSTCIsIlBST0RfU0NSSVBUX1VSTCIsImluamVjdCIsImRlYnVnIiwiX2EiLCJiZWZvcmVTZW5kIiwiY2FsbCIsInNyYyIsInNjcmlwdFNyYyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiZGVmZXIiLCJkYXRhc2V0Iiwic2RrbiIsImZyYW1ld29yayIsInNka3YiLCJkaXNhYmxlQXV0b1RyYWNrIiwiZW5kcG9pbnQiLCJkc24iLCJvbmVycm9yIiwiZXJyb3JNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwidHJhY2siLCJfYiIsIm1zZyIsIndhcm4iLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJwYWdldmlldyIsInJvdXRlIiwicGF0aCIsIkFuYWx5dGljcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\umara\OneDrive\Documents\chat_bot\node_modules\@vercel\analytics\dist\react\index.mjs`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\umara\OneDrive\Documents\chat_bot\node_modules\@vercel\analytics\dist\react\index.mjs#Analytics`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\umara\OneDrive\Documents\chat_bot\node_modules\@vercel\analytics\dist\react\index.mjs#track`);


/***/ })

};
;