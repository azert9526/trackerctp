"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/helpers/drawingUtil.tsx":
/*!*************************************!*\
  !*** ./src/helpers/drawingUtil.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStopPositions: () => (/* binding */ getStopPositions)\n/* harmony export */ });\nfunction getStopPositions(tripId, tripStops, stopLocations) {\n    if (!tripId) return [];\n    const tripId0 = tripId + \"_0\";\n    const tripId1 = tripId + \"_1\";\n    const stops = [];\n    const tripStopsForId = tripStops.filter((tripStop)=>tripStop.trip_id === tripId0 || tripStop.trip_id === tripId1);\n    console.log(tripStopsForId);\n    tripStopsForId.forEach((tripStop)=>{\n        const stopLocation = stopLocations.find((stop)=>stop.stop_id === tripStop.stop_id);\n        if (stopLocation) {\n            console.log(\"stopLocation:\", stopLocation);\n            stops.push({\n                position: {\n                    lat: stopLocation.stop_lat,\n                    lng: stopLocation.stop_lon\n                },\n                color: tripStop.trip_id.endsWith('_0') ? 'red' : 'green'\n            });\n        }\n    });\n    return stops;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2RyYXdpbmdVdGlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBUU8sU0FBU0EsaUJBQWlCQyxNQUFjLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtJQUNyRSxJQUFHLENBQUNGLFFBQVEsT0FBTyxFQUFFO0lBRXJCLE1BQU1HLFVBQVVILFNBQVM7SUFDekIsTUFBTUksVUFBVUosU0FBUztJQUN6QixNQUFNSyxRQUF5QixFQUFFO0lBRWpDLE1BQU1DLGlCQUFpQkwsVUFBVU0sTUFBTSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxPQUFPLEtBQUtOLFdBQVdLLFNBQVNDLE9BQU8sS0FBS0w7SUFDekdNLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWkEsZUFBZU0sT0FBTyxDQUFDSixDQUFBQTtRQUNuQixNQUFNSyxlQUFlWCxjQUFjWSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLE9BQU8sS0FBS1IsU0FBU1EsT0FBTztRQUNqRixJQUFJSCxjQUFjO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJFO1lBQzdCUixNQUFNWSxJQUFJLENBQUM7Z0JBQ1BDLFVBQVU7b0JBQ05DLEtBQUtOLGFBQWFPLFFBQVE7b0JBQzFCQyxLQUFLUixhQUFhUyxRQUFRO2dCQUM5QjtnQkFDQUMsT0FBT2YsU0FBU0MsT0FBTyxDQUFDZSxRQUFRLENBQUMsUUFBUSxRQUFRO1lBQ3JEO1FBQ0o7SUFDSjtJQUVBLE9BQU9uQjtBQUNYIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxoZWxwZXJzXFxkcmF3aW5nVXRpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTdG9wUG9zaXRpb24ge1xyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgICBsYXQ6IG51bWJlcixcclxuICAgICAgICBsbmc6IG51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3BQb3NpdGlvbnModHJpcElkOiBzdHJpbmcsIHRyaXBTdG9wcywgc3RvcExvY2F0aW9ucykge1xyXG4gICAgaWYoIXRyaXBJZCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IHRyaXBJZDAgPSB0cmlwSWQgKyBcIl8wXCJcclxuICAgIGNvbnN0IHRyaXBJZDEgPSB0cmlwSWQgKyBcIl8xXCJcclxuICAgIGNvbnN0IHN0b3BzIDogU3RvcFBvc2l0aW9uW10gPSBbXVxyXG5cclxuICAgIGNvbnN0IHRyaXBTdG9wc0ZvcklkID0gdHJpcFN0b3BzLmZpbHRlcih0cmlwU3RvcCA9PiB0cmlwU3RvcC50cmlwX2lkID09PSB0cmlwSWQwIHx8IHRyaXBTdG9wLnRyaXBfaWQgPT09IHRyaXBJZDEpO1xyXG4gICAgY29uc29sZS5sb2codHJpcFN0b3BzRm9ySWQpXHJcblxyXG4gICAgdHJpcFN0b3BzRm9ySWQuZm9yRWFjaCh0cmlwU3RvcCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcExvY2F0aW9uID0gc3RvcExvY2F0aW9ucy5maW5kKHN0b3AgPT4gc3RvcC5zdG9wX2lkID09PSB0cmlwU3RvcC5zdG9wX2lkKTtcclxuICAgICAgICBpZiAoc3RvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcExvY2F0aW9uOlwiLCBzdG9wTG9jYXRpb24pXHJcbiAgICAgICAgICAgIHN0b3BzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHN0b3BMb2NhdGlvbi5zdG9wX2xhdCxcclxuICAgICAgICAgICAgICAgICAgICBsbmc6IHN0b3BMb2NhdGlvbi5zdG9wX2xvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0cmlwU3RvcC50cmlwX2lkLmVuZHNXaXRoKCdfMCcpID8gJ3JlZCcgOiAnZ3JlZW4nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdG9wcztcclxufSJdLCJuYW1lcyI6WyJnZXRTdG9wUG9zaXRpb25zIiwidHJpcElkIiwidHJpcFN0b3BzIiwic3RvcExvY2F0aW9ucyIsInRyaXBJZDAiLCJ0cmlwSWQxIiwic3RvcHMiLCJ0cmlwU3RvcHNGb3JJZCIsImZpbHRlciIsInRyaXBTdG9wIiwidHJpcF9pZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwic3RvcExvY2F0aW9uIiwiZmluZCIsInN0b3AiLCJzdG9wX2lkIiwicHVzaCIsInBvc2l0aW9uIiwibGF0Iiwic3RvcF9sYXQiLCJsbmciLCJzdG9wX2xvbiIsImNvbG9yIiwiZW5kc1dpdGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/drawingUtil.tsx\n"));

/***/ })

});