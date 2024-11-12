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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var _mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/RadioButtonChecked */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/RadioButtonChecked.js\");\n/* harmony import */ var helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/drawingUtil */ \"(app-pages-browser)/./src/helpers/drawingUtil.tsx\");\n/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/constants */ \"(app-pages-browser)/./src/helpers/constants.tsx\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_DirectionsOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/DirectionsOff */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/DirectionsOff.js\");\n/* harmony import */ var _mui_icons_material_Directions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Directions */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Directions.js\");\n/* harmony import */ var _mui_icons_material_MyLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/MyLocation */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/MyLocation.js\");\n/* harmony import */ var _BusComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BusComponent */ \"(app-pages-browser)/./src/components/BusComponent.tsx\");\n/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/utils */ \"(app-pages-browser)/./src/helpers/utils.tsx\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Tooltip */ \"(app-pages-browser)/./node_modules/@mui/material/Tooltip/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_icons_material_Flag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Flag */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Flag.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction dataToKey(data) {\n    return data.id.toString() + data.color;\n}\nconst defaultMapContainerStyle = {\n    width: '100%',\n    height: '75vh',\n    borderRadius: '15px 0px 0px 15px'\n};\nconst defaultMapCenter = {\n    lat: 46.7712,\n    lng: 23.5966\n};\nconst defaultMapZoom = 14;\nconst defaultMapOptions = {\n    mapTypeId: 'roadmap',\n    streetViewControl: false,\n    mapTypeControl: false,\n    gestureHandling: 'greedy'\n};\nconst polylineOptions0 = {\n    strokeColor: '#FF0000',\n    strokeOpacity: 0.5,\n    strokeWeight: 6\n};\nconst polylineOptions1 = {\n    strokeColor: '#00FF00',\n    strokeOpacity: 0.5,\n    strokeWeight: 4\n};\nfunction MapComponent(param) {\n    let { route = \"\", stopLocations, tripStops, shapes, busLocations, userLocation } = param;\n    _s();\n    const { stopPositions, firstGreen } = (0,helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__.getStopPositions)(helpers_constants__WEBPACK_IMPORTED_MODULE_2__.routeDictionary[route], stopLocations, tripStops);\n    const [shapePoints0, setShapePoints0] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [shapePoints1, setShapePoints1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const busPositions = (0,helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__.getBussesPositions)(helpers_constants__WEBPACK_IMPORTED_MODULE_2__.routeDictionary[route], busLocations, tripStops, stopLocations);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"MapComponent.useEffect\": ()=>{\n            setShapePoints0([]);\n            setShapePoints1([]);\n            setShapePoints0((0,helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__.getRouteShapePositions)(helpers_constants__WEBPACK_IMPORTED_MODULE_2__.routeDictionary[route] + '_0', shapes));\n            setShapePoints1((0,helpers_drawingUtil__WEBPACK_IMPORTED_MODULE_1__.getRouteShapePositions)(helpers_constants__WEBPACK_IMPORTED_MODULE_2__.routeDictionary[route] + '_1', shapes));\n        }\n    }[\"MapComponent.useEffect\"], [\n        route\n    ]);\n    const [clickedBus, setClickedBus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleBusClick = (data)=>{\n        // Toggle clickedBus state; close if clicking the same bus again\n        setClickedBus((clickedBus === null || clickedBus === void 0 ? void 0 : clickedBus.id) === data.id ? null : data);\n    };\n    const [showElements, setShowElements] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const toggleMapElements = ()=>{\n        setShowElements((prevShow)=>!prevShow);\n    };\n    const [mapCenter, setMapCenter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultMapCenter);\n    const centerMapOnUserLocation = ()=>{\n        if (!userLocation) return;\n        setMapCenter(userLocation);\n    };\n    const [isPredicting, setIsPredicting] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleEstimateTimeButtonClick = ()=>{\n        setIsPredicting(true);\n    };\n    const doPrediction = async (latLng)=>{\n        const lat = latLng.lat();\n        const lng = latLng.lng();\n        setIsPredicting(false);\n        const response = await fetch('https://trackerctp.onrender.com/predict', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                trip_id: clickedBus.tripId,\n                d1: d1,\n                d2: d2\n            })\n        });\n    };\n    const handlePolylineClick0 = (event)=>{\n        if (!isPredicting || clickedBus.color != \"red\" || !event.latLng) return;\n        doPrediction(event.latLng);\n    };\n    const handlePolylineClick1 = (event)=>{\n        if (!isPredicting || clickedBus.color != \"green\" || !event.latLng) return;\n        doPrediction(event.latLng);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        style: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: {\n                    position: 'absolute',\n                    top: '8px',\n                    left: '8px',\n                    zIndex: 10\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        \"aria-label\": \"Center on my location\",\n                        onClick: centerMapOnUserLocation,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            id: \"button-center\",\n                            title: \"Center on my location\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MyLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        \"aria-label\": \"Hide/Show Map Elements\",\n                        onClick: toggleMapElements,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            id: \"hide-show-map-elements\",\n                            title: showElements ? 'Hide Map Elements' : 'Show Map Elements',\n                            children: showElements ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DirectionsOff__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 41\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Directions__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 64\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.GoogleMap, {\n                mapContainerStyle: defaultMapContainerStyle,\n                center: mapCenter,\n                zoom: defaultMapZoom,\n                options: {\n                    ...defaultMapOptions,\n                    styles: showElements ? helpers_constants__WEBPACK_IMPORTED_MODULE_2__.mapDarkMode : helpers_constants__WEBPACK_IMPORTED_MODULE_2__.hiddenElementsMapStyle\n                },\n                children: [\n                    stopPositions.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.OverlayViewF, {\n                            mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.OverlayView.OVERLAY_LAYER,\n                            position: data.position,\n                            getPixelPositionOffset: helpers_utils__WEBPACK_IMPORTED_MODULE_5__.GetPixelPositionOffset,\n                            zIndex: index === 0 ? 1 : 0,\n                            children: index === 0 || index === firstGreen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Flag__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                style: {\n                                    color: data.color,\n                                    minWidth: 40,\n                                    minHeight: 40\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 64\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                style: {\n                                    color: data.color\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 138\n                            }, this)\n                        }, dataToKey(data), false, {\n                            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                            lineNumber: 157,\n                            columnNumber: 21\n                        }, this)),\n                    busPositions.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BusComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: data,\n                            clicked: (clickedBus === null || clickedBus === void 0 ? void 0 : clickedBus.id) === data.id,\n                            handleBusClick: handleBusClick,\n                            handleEstimateTimeButtonClick: handleEstimateTimeButtonClick\n                        }, dataToKey(data), false, {\n                            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, this)),\n                    userLocation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.Marker, {\n                        position: userLocation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 35\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.Polyline, {\n                        onClick: handlePolylineClick0,\n                        path: shapePoints0,\n                        options: polylineOptions0\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_12__.Polyline, {\n                        onClick: handlePolylineClick1,\n                        path: shapePoints1,\n                        options: polylineOptions1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MapComponent.tsx\",\n        lineNumber: 129,\n        columnNumber: 9\n    }, this);\n}\n_s(MapComponent, \"AS++w2+zA5bOMtkm+IRLwo+aTYk=\");\n_c = MapComponent;\nvar _c;\n$RefreshReg$(_c, \"MapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcENvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRztBQUVsQztBQUNxRTtBQUMxQztBQUN2QztBQUNOO0FBQ2xCO0FBQ3dDO0FBQ047QUFDQTtBQUNsQjtBQUNhO0FBQ1g7QUFDTjtBQUNXO0FBRWpELFNBQVN3QixVQUFVQyxJQUFvQjtJQUNuQyxPQUFPLEtBQU1DLEVBQUUsQ0FBRUMsUUFBUSxLQUFLRixLQUFLRyxLQUFLO0FBQzVDO0FBRUEsTUFBTUMsMkJBQTJCO0lBQzdCQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsY0FBYztBQUNsQjtBQUVBLE1BQU1DLG1CQUFtQjtJQUNyQkMsS0FBSztJQUNMQyxLQUFLO0FBQ1Q7QUFFQSxNQUFNQyxpQkFBaUI7QUFFdkIsTUFBTUMsb0JBQW9CO0lBQ3RCQyxXQUFXO0lBQ1hDLG1CQUFtQjtJQUNuQkMsZ0JBQWdCO0lBQ2hCQyxpQkFBaUI7QUFDckI7QUFFQSxNQUFNQyxtQkFBbUI7SUFDckJDLGFBQWE7SUFDYkMsZUFBZTtJQUNmQyxjQUFjO0FBQ2xCO0FBQ0EsTUFBTUMsbUJBQW1CO0lBQ3JCSCxhQUFhO0lBQ2JDLGVBQWU7SUFDZkMsY0FBYztBQUNsQjtBQVdlLFNBQVNFLGFBQWEsS0FBK0Y7UUFBL0YsRUFBRUMsUUFBUSxFQUFFLEVBQUVDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFxQixHQUEvRjs7SUFDakMsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHL0MscUVBQWdCQSxDQUFDRyw4REFBZSxDQUFDcUMsTUFBTSxFQUFFQyxlQUFlQztJQUM5RixNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHM0MsK0NBQVFBLENBQVEsRUFBRTtJQUMxRCxNQUFNLENBQUM0QyxjQUFjQyxnQkFBZ0IsR0FBRzdDLCtDQUFRQSxDQUFRLEVBQUU7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XFVzZXJzXFxheG1hZ1xcUHJvamVjdHNcXHRyYWNrZXJjdHBcXHNyY1xcY29tcG9uZW50c1xcTWFwQ29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVNYXAsIE1hcmtlciwgUG9seWxpbmUsIE92ZXJsYXlWaWV3RiwgT3ZlcmxheVZpZXcgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xyXG5pbXBvcnQgQnVzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpcmVjdGlvbnNCdXMnO1xyXG5pbXBvcnQgU3RvcEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SYWRpb0J1dHRvbkNoZWNrZWQnO1xyXG5pbXBvcnQgeyBCdXNFbGVtZW50RGF0YSwgZ2V0QnVzc2VzUG9zaXRpb25zLCBnZXRSb3V0ZVNoYXBlUG9zaXRpb25zLCBnZXRTdG9wUG9zaXRpb25zLCBNYXBFbGVtZW50RGF0YSB9IGZyb20gXCJoZWxwZXJzL2RyYXdpbmdVdGlsXCI7XHJcbmltcG9ydCB7IGhpZGRlbkVsZW1lbnRzTWFwU3R5bGUsIG1hcERhcmtNb2RlLCByb3V0ZURpY3Rpb25hcnkgfSBmcm9tIFwiaGVscGVycy9jb25zdGFudHNcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERpcmVjdGlvbnNPZmZJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGlyZWN0aW9uc09mZic7XHJcbmltcG9ydCBEaXJlY3Rpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RpcmVjdGlvbnMnO1xyXG5pbXBvcnQgTXlMb2NhdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NeUxvY2F0aW9uJztcclxuaW1wb3J0IEJ1c0NvbXBvbmVudCBmcm9tIFwiLi9CdXNDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2V0UGl4ZWxQb3NpdGlvbk9mZnNldCB9IGZyb20gXCJoZWxwZXJzL3V0aWxzXCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgU3RhcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRmxhZyc7XHJcblxyXG5mdW5jdGlvbiBkYXRhVG9LZXkoZGF0YTogTWFwRWxlbWVudERhdGEpIHtcclxuICAgIHJldHVybiAoZGF0YS5pZCkudG9TdHJpbmcoKSArIGRhdGEuY29sb3JcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdE1hcENvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzc1dmgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTVweCAwcHggMHB4IDE1cHgnLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdE1hcENlbnRlciA9IHsgLy9jbHVqIG5hcG9jYSFcclxuICAgIGxhdDogNDYuNzcxMixcclxuICAgIGxuZzogMjMuNTk2NlxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0TWFwWm9vbSA9IDE0XHJcblxyXG5jb25zdCBkZWZhdWx0TWFwT3B0aW9ucyA9IHtcclxuICAgIG1hcFR5cGVJZDogJ3JvYWRtYXAnLFxyXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5J1xyXG59O1xyXG5cclxuY29uc3QgcG9seWxpbmVPcHRpb25zMCA9IHtcclxuICAgIHN0cm9rZUNvbG9yOiAnI0ZGMDAwMCcsXHJcbiAgICBzdHJva2VPcGFjaXR5OiAwLjUsXHJcbiAgICBzdHJva2VXZWlnaHQ6IDZcclxufTtcclxuY29uc3QgcG9seWxpbmVPcHRpb25zMSA9IHtcclxuICAgIHN0cm9rZUNvbG9yOiAnIzAwRkYwMCcsXHJcbiAgICBzdHJva2VPcGFjaXR5OiAwLjUsXHJcbiAgICBzdHJva2VXZWlnaHQ6IDRcclxufTtcclxuXHJcbmludGVyZmFjZSBNYXBDb21wb25lbnRQcm9wcyB7XHJcbiAgICByb3V0ZTogc3RyaW5nO1xyXG4gICAgc3RvcExvY2F0aW9uczogYW55O1xyXG4gICAgdHJpcFN0b3BzOiBhbnk7XHJcbiAgICBzaGFwZXM6IGFueTtcclxuICAgIGJ1c0xvY2F0aW9uczogYW55O1xyXG4gICAgdXNlckxvY2F0aW9uOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcENvbXBvbmVudCh7IHJvdXRlID0gXCJcIiwgc3RvcExvY2F0aW9ucywgdHJpcFN0b3BzLCBzaGFwZXMsIGJ1c0xvY2F0aW9ucywgdXNlckxvY2F0aW9uIH06IE1hcENvbXBvbmVudFByb3BzKSB7XHJcbiAgICBjb25zdCB7IHN0b3BQb3NpdGlvbnMsIGZpcnN0R3JlZW4gfSA9IGdldFN0b3BQb3NpdGlvbnMocm91dGVEaWN0aW9uYXJ5W3JvdXRlXSwgc3RvcExvY2F0aW9ucywgdHJpcFN0b3BzKVxyXG4gICAgY29uc3QgW3NoYXBlUG9pbnRzMCwgc2V0U2hhcGVQb2ludHMwXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgICBjb25zdCBbc2hhcGVQb2ludHMxLCBzZXRTaGFwZVBvaW50czFdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICAgIGNvbnN0IGJ1c1Bvc2l0aW9ucyA9IGdldEJ1c3Nlc1Bvc2l0aW9ucyhyb3V0ZURpY3Rpb25hcnlbcm91dGVdLCBidXNMb2NhdGlvbnMsIHRyaXBTdG9wcywgc3RvcExvY2F0aW9ucylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNoYXBlUG9pbnRzMChbXSk7XHJcbiAgICAgICAgc2V0U2hhcGVQb2ludHMxKFtdKTtcclxuXHJcbiAgICAgICAgc2V0U2hhcGVQb2ludHMwKGdldFJvdXRlU2hhcGVQb3NpdGlvbnMocm91dGVEaWN0aW9uYXJ5W3JvdXRlXSArICdfMCcsIHNoYXBlcykpO1xyXG4gICAgICAgIHNldFNoYXBlUG9pbnRzMShnZXRSb3V0ZVNoYXBlUG9zaXRpb25zKHJvdXRlRGljdGlvbmFyeVtyb3V0ZV0gKyAnXzEnLCBzaGFwZXMpKTtcclxuICAgIH0sIFtyb3V0ZV0pO1xyXG5cclxuICAgIGNvbnN0IFtjbGlja2VkQnVzLCBzZXRDbGlja2VkQnVzXSA9IHVzZVN0YXRlPEJ1c0VsZW1lbnREYXRhIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVCdXNDbGljayA9IChkYXRhOiBCdXNFbGVtZW50RGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIFRvZ2dsZSBjbGlja2VkQnVzIHN0YXRlOyBjbG9zZSBpZiBjbGlja2luZyB0aGUgc2FtZSBidXMgYWdhaW5cclxuICAgICAgICBzZXRDbGlja2VkQnVzKGNsaWNrZWRCdXM/LmlkID09PSBkYXRhLmlkID8gbnVsbCA6IGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0VsZW1lbnRzLCBzZXRTaG93RWxlbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWFwRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0VsZW1lbnRzKHByZXZTaG93ID0+ICFwcmV2U2hvdyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFttYXBDZW50ZXIsIHNldE1hcENlbnRlcl0gPSB1c2VTdGF0ZShkZWZhdWx0TWFwQ2VudGVyKTtcclxuICAgIGNvbnN0IGNlbnRlck1hcE9uVXNlckxvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCF1c2VyTG9jYXRpb24pIHJldHVybjtcclxuICAgICAgICBzZXRNYXBDZW50ZXIodXNlckxvY2F0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2lzUHJlZGljdGluZywgc2V0SXNQcmVkaWN0aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUVzdGltYXRlVGltZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzUHJlZGljdGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb1ByZWRpY3Rpb24gPSBhc3luYyAobGF0TG5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGF0ID0gbGF0TG5nLmxhdCgpO1xyXG4gICAgICAgIGNvbnN0IGxuZyA9IGxhdExuZy5sbmcoKTtcclxuICAgICAgICBzZXRJc1ByZWRpY3RpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3RyYWNrZXJjdHAub25yZW5kZXIuY29tL3ByZWRpY3QnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHRyaXBfaWQ6IGNsaWNrZWRCdXMudHJpcElkLFxyXG4gICAgICAgICAgICAgICAgZDE6IGQxLFxyXG4gICAgICAgICAgICAgICAgZDI6IGQyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9seWxpbmVDbGljazAgPSAoZXZlbnQ6IGdvb2dsZS5tYXBzLk1hcE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZighaXNQcmVkaWN0aW5nIHx8IGNsaWNrZWRCdXMuY29sb3IgIT0gXCJyZWRcIiB8fCAhZXZlbnQubGF0TG5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRvUHJlZGljdGlvbihldmVudC5sYXRMbmcpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlUG9seWxpbmVDbGljazEgPSAoZXZlbnQ6IGdvb2dsZS5tYXBzLk1hcE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZighaXNQcmVkaWN0aW5nIHx8IGNsaWNrZWRCdXMuY29sb3IgIT0gXCJncmVlblwiIHx8ICFldmVudC5sYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgZG9QcmVkaWN0aW9uKGV2ZW50LmxhdExuZylcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgPFN0YWNrIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2VudGVyIG9uIG15IGxvY2F0aW9uXCIgb25DbGljaz17Y2VudGVyTWFwT25Vc2VyTG9jYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiYnV0dG9uLWNlbnRlclwiIHRpdGxlPVwiQ2VudGVyIG9uIG15IGxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUxvY2F0aW9uSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJIaWRlL1Nob3cgTWFwIEVsZW1lbnRzXCIgb25DbGljaz17dG9nZ2xlTWFwRWxlbWVudHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiaGlkZS1zaG93LW1hcC1lbGVtZW50c1wiIHRpdGxlPXtzaG93RWxlbWVudHMgPyAnSGlkZSBNYXAgRWxlbWVudHMnIDogJ1Nob3cgTWFwIEVsZW1lbnRzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RWxlbWVudHMgPyA8RGlyZWN0aW9uc09mZkljb24vPiA6IDxEaXJlY3Rpb25zSWNvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgICAgIDxHb29nbGVNYXAgIFxyXG4gICAgICAgICAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e2RlZmF1bHRNYXBDb250YWluZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgIGNlbnRlcj17bWFwQ2VudGVyfVxyXG4gICAgICAgICAgICAgICAgem9vbT17ZGVmYXVsdE1hcFpvb219XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdE1hcE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzaG93RWxlbWVudHMgPyBtYXBEYXJrTW9kZSA6IGhpZGRlbkVsZW1lbnRzTWFwU3R5bGUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RvcFBvc2l0aW9ucy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlWaWV3RiBrZXk9e2RhdGFUb0tleShkYXRhKX0gbWFwUGFuZU5hbWU9e092ZXJsYXlWaWV3Lk9WRVJMQVlfTEFZRVJ9IHBvc2l0aW9uPXtkYXRhLnBvc2l0aW9ufSBnZXRQaXhlbFBvc2l0aW9uT2Zmc2V0PXtHZXRQaXhlbFBvc2l0aW9uT2Zmc2V0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4PXtpbmRleCA9PT0gMCA/IDEgOiAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAwIHx8IGluZGV4ID09PSBmaXJzdEdyZWVuID8gPFN0YXJ0SWNvbiBzdHlsZT17eyBjb2xvcjogZGF0YS5jb2xvciwgbWluV2lkdGg6IDQwLCBtaW5IZWlnaHQ6IDQwIH19Lz4gOiA8U3RvcEljb24gc3R5bGU9e3sgY29sb3I6IGRhdGEuY29sb3J9fSAvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5Vmlld0Y+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7YnVzUG9zaXRpb25zLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXNDb21wb25lbnQga2V5PXtkYXRhVG9LZXkoZGF0YSl9IGRhdGE9e2RhdGF9IGNsaWNrZWQ9e2NsaWNrZWRCdXM/LmlkID09PSBkYXRhLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQnVzQ2xpY2s9e2hhbmRsZUJ1c0NsaWNrfSBoYW5kbGVFc3RpbWF0ZVRpbWVCdXR0b25DbGljaz17aGFuZGxlRXN0aW1hdGVUaW1lQnV0dG9uQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dXNlckxvY2F0aW9uICYmICg8TWFya2VyIHBvc2l0aW9uPXt1c2VyTG9jYXRpb259IC8+KSB9XHJcblxyXG4gICAgICAgICAgICAgICAgPFBvbHlsaW5lIG9uQ2xpY2s9e2hhbmRsZVBvbHlsaW5lQ2xpY2swfSBwYXRoPXtzaGFwZVBvaW50czB9IG9wdGlvbnM9e3BvbHlsaW5lT3B0aW9uczB9Lz5cclxuICAgICAgICAgICAgICAgIDxQb2x5bGluZSBvbkNsaWNrPXtoYW5kbGVQb2x5bGluZUNsaWNrMX0gcGF0aD17c2hhcGVQb2ludHMxfSBvcHRpb25zPXtwb2x5bGluZU9wdGlvbnMxfS8+XHJcbiAgICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG4iXSwibmFtZXMiOlsiR29vZ2xlTWFwIiwiTWFya2VyIiwiUG9seWxpbmUiLCJPdmVybGF5Vmlld0YiLCJPdmVybGF5VmlldyIsIlN0b3BJY29uIiwiZ2V0QnVzc2VzUG9zaXRpb25zIiwiZ2V0Um91dGVTaGFwZVBvc2l0aW9ucyIsImdldFN0b3BQb3NpdGlvbnMiLCJoaWRkZW5FbGVtZW50c01hcFN0eWxlIiwibWFwRGFya01vZGUiLCJyb3V0ZURpY3Rpb25hcnkiLCJJY29uQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkRpcmVjdGlvbnNPZmZJY29uIiwiRGlyZWN0aW9uc0ljb24iLCJNeUxvY2F0aW9uSWNvbiIsIkJ1c0NvbXBvbmVudCIsIkdldFBpeGVsUG9zaXRpb25PZmZzZXQiLCJUb29sdGlwIiwiU3RhY2siLCJTdGFydEljb24iLCJkYXRhVG9LZXkiLCJkYXRhIiwiaWQiLCJ0b1N0cmluZyIsImNvbG9yIiwiZGVmYXVsdE1hcENvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJkZWZhdWx0TWFwQ2VudGVyIiwibGF0IiwibG5nIiwiZGVmYXVsdE1hcFpvb20iLCJkZWZhdWx0TWFwT3B0aW9ucyIsIm1hcFR5cGVJZCIsInN0cmVldFZpZXdDb250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJnZXN0dXJlSGFuZGxpbmciLCJwb2x5bGluZU9wdGlvbnMwIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwicG9seWxpbmVPcHRpb25zMSIsIk1hcENvbXBvbmVudCIsInJvdXRlIiwic3RvcExvY2F0aW9ucyIsInRyaXBTdG9wcyIsInNoYXBlcyIsImJ1c0xvY2F0aW9ucyIsInVzZXJMb2NhdGlvbiIsInN0b3BQb3NpdGlvbnMiLCJmaXJzdEdyZWVuIiwic2hhcGVQb2ludHMwIiwic2V0U2hhcGVQb2ludHMwIiwic2hhcGVQb2ludHMxIiwic2V0U2hhcGVQb2ludHMxIiwiYnVzUG9zaXRpb25zIiwiY2xpY2tlZEJ1cyIsInNldENsaWNrZWRCdXMiLCJoYW5kbGVCdXNDbGljayIsInNob3dFbGVtZW50cyIsInNldFNob3dFbGVtZW50cyIsInRvZ2dsZU1hcEVsZW1lbnRzIiwicHJldlNob3ciLCJtYXBDZW50ZXIiLCJzZXRNYXBDZW50ZXIiLCJjZW50ZXJNYXBPblVzZXJMb2NhdGlvbiIsImlzUHJlZGljdGluZyIsInNldElzUHJlZGljdGluZyIsImhhbmRsZUVzdGltYXRlVGltZUJ1dHRvbkNsaWNrIiwiZG9QcmVkaWN0aW9uIiwibGF0TG5nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRyaXBfaWQiLCJ0cmlwSWQiLCJkMSIsImQyIiwiaGFuZGxlUG9seWxpbmVDbGljazAiLCJldmVudCIsImhhbmRsZVBvbHlsaW5lQ2xpY2sxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJhcmlhLWxhYmVsIiwib25DbGljayIsInRpdGxlIiwibWFwQ29udGFpbmVyU3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwib3B0aW9ucyIsInN0eWxlcyIsIm1hcCIsImluZGV4IiwibWFwUGFuZU5hbWUiLCJPVkVSTEFZX0xBWUVSIiwiZ2V0UGl4ZWxQb3NpdGlvbk9mZnNldCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiY2xpY2tlZCIsInBhdGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MapComponent.tsx\n"));

/***/ })

});