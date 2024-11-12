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

/***/ "(app-pages-browser)/./src/components/MapComponent.tsx":
/*!*****************************************!*\
  !*** ./src/components/MapComponent.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var _mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/RadioButtonChecked */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/RadioButtonChecked.js\");\n/* harmony import */ var helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/drawingUtil */ \"(app-pages-browser)/./src/helpers/drawingUtil.tsx\");\n/* harmony import */ var helpers_routedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/routedata */ \"(app-pages-browser)/./src/helpers/routedata.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction dataToKey(data) {\n    return (data.position.lat * 1000 + data.position.lng).toString() + data.color;\n}\nconst defaultMapContainerStyle = {\n    width: '100%',\n    height: '80vh',\n    borderRadius: '15px 0px 0px 15px'\n};\nconst defaultMapCenter = {\n    lat: 46.7712,\n    lng: 23.5966\n};\nconst defaultMapZoom = 14;\nconst defaultMapOptions = {\n    mapTypeId: 'roadmap',\n    streetViewControl: false,\n    mapTypeControl: false,\n    gestureHandling: 'greedy'\n};\nfunction MapComponent(param) {\n    let { route = \"\", stopLocations, tripStops } = param;\n    const stopPositions = (0,helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__.getStopPositions)(helpers_routedata__WEBPACK_IMPORTED_MODULE_2__.routeDictionary[route], stopLocations, tripStops);\n    console.log(\"stops:\", stopPositions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n            mapContainerStyle: defaultMapContainerStyle,\n            center: defaultMapCenter,\n            zoom: defaultMapZoom,\n            options: defaultMapOptions,\n            children: [\n                stopPositions.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.OverlayView, {\n                        mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.OverlayView.MAP_PANE,\n                        position: data.position,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            style: {\n                                color: data.color\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, this)\n                    }, dataToKey(data), false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Polyline, {\n                    path: [\n                        {\n                            lat: 46.7712,\n                            lng: 23.5966\n                        },\n                        {\n                            lat: 46.78,\n                            lng: 23.6\n                        }\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_c = MapComponent;\nvar _c;\n$RefreshReg$(_c, \"MapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcENvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRjtBQUVwQjtBQUNPO0FBQ2pCO0FBRXBELFNBQVNNLFVBQVVDLElBQWtCO0lBQ2pDLE9BQU8sQ0FBQ0EsS0FBS0MsUUFBUSxDQUFDQyxHQUFHLEdBQUMsT0FBT0YsS0FBS0MsUUFBUSxDQUFDRSxHQUFHLEVBQUVDLFFBQVEsS0FBS0osS0FBS0ssS0FBSztBQUMvRTtBQUVBLE1BQU1DLDJCQUEyQjtJQUM3QkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLGNBQWM7QUFDbEI7QUFFQSxNQUFNQyxtQkFBbUI7SUFDckJSLEtBQUs7SUFDTEMsS0FBSztBQUNUO0FBRUEsTUFBTVEsaUJBQWlCO0FBRXZCLE1BQU1DLG9CQUFvQjtJQUN0QkMsV0FBVztJQUNYQyxtQkFBbUI7SUFDbkJDLGdCQUFnQjtJQUNoQkMsaUJBQWlCO0FBQ3JCO0FBUWUsU0FBU0MsYUFBYSxLQUEyRDtRQUEzRCxFQUFFQyxRQUFRLEVBQUUsRUFBRUMsYUFBYSxFQUFFQyxTQUFTLEVBQXFCLEdBQTNEO0lBQ2pDLE1BQU1DLGdCQUFnQnhCLHFFQUFnQkEsQ0FBQ0MsOERBQWUsQ0FBQ29CLE1BQU0sRUFBRUMsZUFBZUM7SUFDOUVFLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtJQUN0QixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ2hDLDZEQUFTQTtZQUNOaUMsbUJBQW1CcEI7WUFDbkJxQixRQUFRakI7WUFDUmtCLE1BQU1qQjtZQUNOa0IsU0FBU2pCOztnQkFFUlMsY0FBY1MsR0FBRyxDQUFDLENBQUM5QixxQkFFaEIsOERBQUNMLCtEQUFXQTt3QkFBdUJvQyxhQUFhcEMsK0RBQVdBLENBQUNxQyxRQUFRO3dCQUFFL0IsVUFBVUQsS0FBS0MsUUFBUTtrQ0FDekYsNEVBQUNMLDhFQUFRQTs0QkFBQ3FDLE9BQU87Z0NBQUU1QixPQUFPTCxLQUFLSyxLQUFLOzRCQUFDOzs7Ozs7dUJBRHZCTixVQUFVQzs7Ozs7OEJBS2hDLDhEQUFDTiw0REFBUUE7b0JBQUN3QyxNQUFNO3dCQUNoQjs0QkFBRWhDLEtBQUs7NEJBQVNDLEtBQUs7d0JBQVE7d0JBQzdCOzRCQUFFRCxLQUFLOzRCQUFPQyxLQUFLO3dCQUFLO3FCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztLQXpCd0JjIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxjb21wb25lbnRzXFxNYXBDb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBHb29nbGVNYXAsIE1hcmtlciwgUG9seWxpbmUsIE92ZXJsYXlWaWV3IH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IEJ1c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EaXJlY3Rpb25zQnVzJztcclxuaW1wb3J0IFN0b3BJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmFkaW9CdXR0b25DaGVja2VkJztcclxuaW1wb3J0IHsgZ2V0U3RvcFBvc2l0aW9ucywgU3RvcFBvc2l0aW9uIH0gZnJvbSBcImhlbHBlcnMvZHJhd2luZ1V0aWxcIjtcclxuaW1wb3J0IHsgcm91dGVEaWN0aW9uYXJ5IH0gZnJvbSBcImhlbHBlcnMvcm91dGVkYXRhXCI7XHJcblxyXG5mdW5jdGlvbiBkYXRhVG9LZXkoZGF0YTogU3RvcFBvc2l0aW9uKSB7XHJcbiAgICByZXR1cm4gKGRhdGEucG9zaXRpb24ubGF0KjEwMDAgKyBkYXRhLnBvc2l0aW9uLmxuZykudG9TdHJpbmcoKSArIGRhdGEuY29sb3JcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdE1hcENvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzgwdmgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTVweCAwcHggMHB4IDE1cHgnLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdE1hcENlbnRlciA9IHsgLy9jbHVqIG5hcG9jYSFcclxuICAgIGxhdDogNDYuNzcxMixcclxuICAgIGxuZzogMjMuNTk2NlxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0TWFwWm9vbSA9IDE0XHJcblxyXG5jb25zdCBkZWZhdWx0TWFwT3B0aW9ucyA9IHtcclxuICAgIG1hcFR5cGVJZDogJ3JvYWRtYXAnLFxyXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5J1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIE1hcENvbXBvbmVudFByb3BzIHtcclxuICAgIHJvdXRlOiBzdHJpbmc7XHJcbiAgICBzdG9wTG9jYXRpb25zOiBhbnk7XHJcbiAgICB0cmlwU3RvcHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQ29tcG9uZW50KHsgcm91dGUgPSBcIlwiLCBzdG9wTG9jYXRpb25zLCB0cmlwU3RvcHMgfTogTWFwQ29tcG9uZW50UHJvcHMpIHtcclxuICAgIGNvbnN0IHN0b3BQb3NpdGlvbnMgPSBnZXRTdG9wUG9zaXRpb25zKHJvdXRlRGljdGlvbmFyeVtyb3V0ZV0sIHN0b3BMb2NhdGlvbnMsIHRyaXBTdG9wcylcclxuICAgIGNvbnNvbGUubG9nKFwic3RvcHM6XCIsIHN0b3BQb3NpdGlvbnMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtkZWZhdWx0TWFwQ29udGFpbmVyU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI9e2RlZmF1bHRNYXBDZW50ZXJ9XHJcbiAgICAgICAgICAgICAgICB6b29tPXtkZWZhdWx0TWFwWm9vbX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRNYXBPcHRpb25zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RvcFBvc2l0aW9ucy5tYXAoKGRhdGEpID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlWaWV3IGtleT17ZGF0YVRvS2V5KGRhdGEpfSBtYXBQYW5lTmFtZT17T3ZlcmxheVZpZXcuTUFQX1BBTkV9IHBvc2l0aW9uPXtkYXRhLnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0b3BJY29uIHN0eWxlPXt7IGNvbG9yOiBkYXRhLmNvbG9yIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPFBvbHlsaW5lIHBhdGg9e1tcclxuICAgICAgICAgICAgICAgIHsgbGF0OiA0Ni43NzEyLCBsbmc6IDIzLjU5NjYgfSxcclxuICAgICAgICAgICAgICAgIHsgbGF0OiA0Ni43OCwgbG5nOiAyMy42IH0sIF19ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dvb2dsZU1hcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuIl0sIm5hbWVzIjpbIkdvb2dsZU1hcCIsIlBvbHlsaW5lIiwiT3ZlcmxheVZpZXciLCJTdG9wSWNvbiIsImdldFN0b3BQb3NpdGlvbnMiLCJyb3V0ZURpY3Rpb25hcnkiLCJkYXRhVG9LZXkiLCJkYXRhIiwicG9zaXRpb24iLCJsYXQiLCJsbmciLCJ0b1N0cmluZyIsImNvbG9yIiwiZGVmYXVsdE1hcENvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJkZWZhdWx0TWFwQ2VudGVyIiwiZGVmYXVsdE1hcFpvb20iLCJkZWZhdWx0TWFwT3B0aW9ucyIsIm1hcFR5cGVJZCIsInN0cmVldFZpZXdDb250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJnZXN0dXJlSGFuZGxpbmciLCJNYXBDb21wb25lbnQiLCJyb3V0ZSIsInN0b3BMb2NhdGlvbnMiLCJ0cmlwU3RvcHMiLCJzdG9wUG9zaXRpb25zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcENvbnRhaW5lclN0eWxlIiwiY2VudGVyIiwiem9vbSIsIm9wdGlvbnMiLCJtYXAiLCJtYXBQYW5lTmFtZSIsIk1BUF9QQU5FIiwic3R5bGUiLCJwYXRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MapComponent.tsx\n"));

/***/ })

});