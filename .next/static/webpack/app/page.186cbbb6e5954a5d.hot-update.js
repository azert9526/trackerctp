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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRouteShapePositions: () => (/* binding */ getRouteShapePositions),\n/* harmony export */   getStopPositions: () => (/* binding */ getStopPositions)\n/* harmony export */ });\nfunction getStopPositions(tripId, tripStops, stopLocations) {\n    if (!tripId) return [];\n    const tripId0 = tripId + '_0';\n    const tripId1 = tripId + '_1';\n    const stops = [];\n    const tripStopsForId = tripStops.filter((tripStop)=>tripStop.trip_id === tripId0 || tripStop.trip_id === tripId1);\n    tripStopsForId.forEach((tripStop)=>{\n        const stopLocation = stopLocations.find((stop)=>stop.stop_id === tripStop.stop_id);\n        if (stopLocation) {\n            stops.push({\n                id: stopLocation.stop_id,\n                position: {\n                    lat: stopLocation.stop_lat,\n                    lng: stopLocation.stop_lon\n                },\n                color: tripStop.trip_id.endsWith('_0') ? 'red' : 'green'\n            });\n        }\n    });\n    return stops;\n}\nfunction getRouteShapePositions(shapeId, shapesData) {\n    if (!shapesData || !shapesData.length) {\n        console.warn('Shapes data is not available');\n        return;\n    }\n    const shapePoints = shapesData.filter((shape)=>shape.shape_id === shapeId).sort((a, b)=>a.shape_pt_sequence - b.shape_pt_sequence).map((point)=>({\n            lat: point.shape_pt_lat,\n            lng: point.shape_pt_lon\n        }));\n    console.log(shapesData.flat());\n    return shapePoints;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2RyYXdpbmdVdGlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQVNPLFNBQVNBLGlCQUFpQkMsTUFBYyxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7SUFDckUsSUFBRyxDQUFDRixRQUFRLE9BQU8sRUFBRTtJQUVyQixNQUFNRyxVQUFVSCxTQUFTO0lBQ3pCLE1BQU1JLFVBQVVKLFNBQVM7SUFDekIsTUFBTUssUUFBeUIsRUFBRTtJQUVqQyxNQUFNQyxpQkFBaUJMLFVBQVVNLE1BQU0sQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsT0FBTyxLQUFLTixXQUFXSyxTQUFTQyxPQUFPLEtBQUtMO0lBRXpHRSxlQUFlSSxPQUFPLENBQUNGLENBQUFBO1FBQ25CLE1BQU1HLGVBQWVULGNBQWNVLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsT0FBTyxLQUFLTixTQUFTTSxPQUFPO1FBQ2pGLElBQUlILGNBQWM7WUFDZE4sTUFBTVUsSUFBSSxDQUFDO2dCQUNQQyxJQUFJTCxhQUFhRyxPQUFPO2dCQUN4QkcsVUFBVTtvQkFDTkMsS0FBS1AsYUFBYVEsUUFBUTtvQkFDMUJDLEtBQUtULGFBQWFVLFFBQVE7Z0JBQzlCO2dCQUNBQyxPQUFPZCxTQUFTQyxPQUFPLENBQUNjLFFBQVEsQ0FBQyxRQUFRLFFBQVE7WUFDckQ7UUFDSjtJQUNKO0lBRUEsT0FBT2xCO0FBQ1g7QUFFTyxTQUFTbUIsdUJBQXVCQyxPQUFlLEVBQUVDLFVBQVU7SUFDOUQsSUFBSSxDQUFDQSxjQUFjLENBQUNBLFdBQVdDLE1BQU0sRUFBRTtRQUNuQ0MsUUFBUUMsSUFBSSxDQUFDO1FBQ2I7SUFDSjtJQUVBLE1BQU1DLGNBQWNKLFdBQVduQixNQUFNLENBQUN3QixDQUFBQSxRQUFTQSxNQUFNQyxRQUFRLEtBQUtQLFNBQVNRLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxpQkFBaUIsR0FBR0QsRUFBRUMsaUJBQWlCLEVBQUVDLEdBQUcsQ0FBQ0MsQ0FBQUEsUUFBVTtZQUMvSXBCLEtBQUtvQixNQUFNQyxZQUFZO1lBQ3ZCbkIsS0FBS2tCLE1BQU1FLFlBQVk7UUFDM0I7SUFDQVosUUFBUWEsR0FBRyxDQUFDZixXQUFXZ0IsSUFBSTtJQUMzQixPQUFPWjtBQUNYIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxoZWxwZXJzXFxkcmF3aW5nVXRpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTdG9wUG9zaXRpb24ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgbGF0OiBudW1iZXIsXHJcbiAgICAgICAgbG5nOiBudW1iZXJcclxuICAgIH07XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcFBvc2l0aW9ucyh0cmlwSWQ6IHN0cmluZywgdHJpcFN0b3BzLCBzdG9wTG9jYXRpb25zKSB7XHJcbiAgICBpZighdHJpcElkKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgdHJpcElkMCA9IHRyaXBJZCArICdfMCdcclxuICAgIGNvbnN0IHRyaXBJZDEgPSB0cmlwSWQgKyAnXzEnXHJcbiAgICBjb25zdCBzdG9wcyA6IFN0b3BQb3NpdGlvbltdID0gW11cclxuXHJcbiAgICBjb25zdCB0cmlwU3RvcHNGb3JJZCA9IHRyaXBTdG9wcy5maWx0ZXIodHJpcFN0b3AgPT4gdHJpcFN0b3AudHJpcF9pZCA9PT0gdHJpcElkMCB8fCB0cmlwU3RvcC50cmlwX2lkID09PSB0cmlwSWQxKTtcclxuXHJcbiAgICB0cmlwU3RvcHNGb3JJZC5mb3JFYWNoKHRyaXBTdG9wID0+IHtcclxuICAgICAgICBjb25zdCBzdG9wTG9jYXRpb24gPSBzdG9wTG9jYXRpb25zLmZpbmQoc3RvcCA9PiBzdG9wLnN0b3BfaWQgPT09IHRyaXBTdG9wLnN0b3BfaWQpO1xyXG4gICAgICAgIGlmIChzdG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgc3RvcHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogc3RvcExvY2F0aW9uLnN0b3BfaWQsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdDogc3RvcExvY2F0aW9uLnN0b3BfbGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc3RvcExvY2F0aW9uLnN0b3BfbG9uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRyaXBTdG9wLnRyaXBfaWQuZW5kc1dpdGgoJ18wJykgPyAncmVkJyA6ICdncmVlbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVTaGFwZVBvc2l0aW9ucyhzaGFwZUlkOiBzdHJpbmcsIHNoYXBlc0RhdGEpIHtcclxuICAgIGlmICghc2hhcGVzRGF0YSB8fCAhc2hhcGVzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1NoYXBlcyBkYXRhIGlzIG5vdCBhdmFpbGFibGUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNoYXBlUG9pbnRzID0gc2hhcGVzRGF0YS5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuc2hhcGVfaWQgPT09IHNoYXBlSWQpLnNvcnQoKGEsIGIpID0+IGEuc2hhcGVfcHRfc2VxdWVuY2UgLSBiLnNoYXBlX3B0X3NlcXVlbmNlKS5tYXAocG9pbnQgPT4gKHtcclxuICAgICAgICBsYXQ6IHBvaW50LnNoYXBlX3B0X2xhdCxcclxuICAgICAgICBsbmc6IHBvaW50LnNoYXBlX3B0X2xvblxyXG4gICAgfSkpO1xyXG4gICAgY29uc29sZS5sb2coc2hhcGVzRGF0YS5mbGF0KCkpXHJcbiAgICByZXR1cm4gc2hhcGVQb2ludHNcclxufSJdLCJuYW1lcyI6WyJnZXRTdG9wUG9zaXRpb25zIiwidHJpcElkIiwidHJpcFN0b3BzIiwic3RvcExvY2F0aW9ucyIsInRyaXBJZDAiLCJ0cmlwSWQxIiwic3RvcHMiLCJ0cmlwU3RvcHNGb3JJZCIsImZpbHRlciIsInRyaXBTdG9wIiwidHJpcF9pZCIsImZvckVhY2giLCJzdG9wTG9jYXRpb24iLCJmaW5kIiwic3RvcCIsInN0b3BfaWQiLCJwdXNoIiwiaWQiLCJwb3NpdGlvbiIsImxhdCIsInN0b3BfbGF0IiwibG5nIiwic3RvcF9sb24iLCJjb2xvciIsImVuZHNXaXRoIiwiZ2V0Um91dGVTaGFwZVBvc2l0aW9ucyIsInNoYXBlSWQiLCJzaGFwZXNEYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJzaGFwZVBvaW50cyIsInNoYXBlIiwic2hhcGVfaWQiLCJzb3J0IiwiYSIsImIiLCJzaGFwZV9wdF9zZXF1ZW5jZSIsIm1hcCIsInBvaW50Iiwic2hhcGVfcHRfbGF0Iiwic2hhcGVfcHRfbG9uIiwibG9nIiwiZmxhdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/drawingUtil.tsx\n"));

/***/ })

});