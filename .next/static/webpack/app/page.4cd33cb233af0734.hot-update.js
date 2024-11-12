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

/***/ "(app-pages-browser)/./src/components/MainComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/MainComponent.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var providers_MapProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! providers/MapProvider */ \"(app-pages-browser)/./src/providers/MapProvider.tsx\");\n/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/utils */ \"(app-pages-browser)/./src/helpers/utils.tsx\");\n/* harmony import */ var components_RouteSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RouteSelection */ \"(app-pages-browser)/./src/components/RouteSelection.tsx\");\n/* harmony import */ var components_MapComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapComponent */ \"(app-pages-browser)/./src/components/MapComponent.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MainComponent(param) {\n    let { stopLocationsPromise, tripStopsPromise, shapesPromise } = param;\n    _s();\n    const [favourites, setFavourites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [route, setRoute] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');\n    const [stopLocations, setStopLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tripStops, setTripStops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [shapes, setShapes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [busLocations, setBusLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [userLocation, setUserLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MainComponent.useEffect\": ()=>{\n            // Load favourites from localStorage on component mount\n            const storedFavourites = localStorage.getItem('favourites');\n            if (storedFavourites) {\n                setFavourites(JSON.parse(storedFavourites));\n            }\n        }\n    }[\"MainComponent.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MainComponent.useEffect\": ()=>{\n            // Save favourites to localStorage whenever it changes\n            localStorage.setItem('favourites', JSON.stringify(favourites));\n        }\n    }[\"MainComponent.useEffect\"], [\n        favourites\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MainComponent.useEffect\": ()=>{\n            shapesPromise.then({\n                \"MainComponent.useEffect\": (data)=>setShapes(data.flat())\n            }[\"MainComponent.useEffect\"]);\n            stopLocationsPromise.then({\n                \"MainComponent.useEffect\": (data)=>setStopLocations(data)\n            }[\"MainComponent.useEffect\"]);\n            tripStopsPromise.then({\n                \"MainComponent.useEffect\": (data)=>setTripStops(data)\n            }[\"MainComponent.useEffect\"]);\n        }\n    }[\"MainComponent.useEffect\"], [\n        stopLocationsPromise,\n        tripStopsPromise\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MainComponent.useEffect\": ()=>{\n            const fetchBusses = {\n                \"MainComponent.useEffect.fetchBusses\": async ()=>{\n                    await fetch('https://api.tranzy.ai/v1/opendata/vehicles', {\n                        method: 'GET',\n                        headers: {\n                            'Accept': 'application/json',\n                            'X-API-KEY': \"1v6BK493vzooj5F97rbEcRiuAGwS0VJPPJ7fCI0U\",\n                            'X-Agency-Id': '2'\n                        },\n                        next: {\n                            revalidate: 45\n                        } //45 de secunde\n                    }).then({\n                        \"MainComponent.useEffect.fetchBusses\": (data)=>data.json()\n                    }[\"MainComponent.useEffect.fetchBusses\"]).then({\n                        \"MainComponent.useEffect.fetchBusses\": (data)=>setBusLocations(data)\n                    }[\"MainComponent.useEffect.fetchBusses\"]);\n                }\n            }[\"MainComponent.useEffect.fetchBusses\"];\n            if (navigator.geolocation) {\n                navigator.geolocation.getCurrentPosition({\n                    \"MainComponent.useEffect\": (position)=>{\n                        const coords = {\n                            lat: position.coords.latitude,\n                            lng: position.coords.longitude\n                        };\n                        setUserLocation(coords);\n                    }\n                }[\"MainComponent.useEffect\"], {\n                    \"MainComponent.useEffect\": (error)=>{\n                        console.error(\"Error getting location:\", error);\n                        alert(\"Could not retrieve your location.\");\n                        setUserLocation(null);\n                    }\n                }[\"MainComponent.useEffect\"]);\n            } else {\n                alert(\"Geolocation is not supported by this browser.\");\n                setUserLocation(null);\n            }\n            fetchBusses();\n            console.log(userLocation);\n        }\n    }[\"MainComponent.useEffect\"], [\n        route\n    ]);\n    function addFavourite() {\n        if (route == '') return;\n        if (favourites.includes(route)) setFavourites((prevFavourites)=>prevFavourites.filter((item)=>item !== route).toSorted(helpers_utils__WEBPACK_IMPORTED_MODULE_3__.bussesSort));\n        else setFavourites((prevFavourites)=>[\n                ...prevFavourites,\n                route\n            ].toSorted(helpers_utils__WEBPACK_IMPORTED_MODULE_3__.bussesSort));\n    }\n    async function onRouteChange(newRoute) {\n        setRoute(newRoute);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                route: route,\n                favourites: favourites,\n                onRouteChange: onRouteChange,\n                addFavourite: addFavourite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_MapProvider__WEBPACK_IMPORTED_MODULE_2__.MapProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MapComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    route: route,\n                    stopLocations: stopLocations,\n                    tripStops: tripStops,\n                    shapes: shapes,\n                    busLocations: busLocations,\n                    userLocation: userLocation\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainComponent, \"I3K99YpMbHWPkJP7y/IqKYLaRas=\");\n_c = MainComponent;\nvar _c;\n$RefreshReg$(_c, \"MainComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDcUI7QUFDQTtBQUNUO0FBRVk7QUFHSjtBQVNwQyxTQUFTTyxjQUFjLEtBQTZFO1FBQTdFLEVBQUVDLG9CQUFvQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFzQixHQUE3RTs7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdkLDJDQUFjLENBQVM7SUFFakQsTUFBTSxDQUFDZSxlQUFlQyxpQkFBaUIsR0FBR2IsK0NBQVFBO0lBQ2xELE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUE7SUFDMUMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2tCLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBO0lBQ2hELE1BQU0sQ0FBQ29CLGNBQWNDLGdCQUFnQixHQUFHckIsK0NBQVFBO0lBRWhERCxnREFBU0E7bUNBQUM7WUFDTix1REFBdUQ7WUFDdkQsTUFBTXVCLG1CQUFtQkMsYUFBYUMsT0FBTyxDQUFDO1lBQzlDLElBQUlGLGtCQUFrQjtnQkFDbEJiLGNBQWNnQixLQUFLQyxLQUFLLENBQUNKO1lBQzdCO1FBQ0o7a0NBQUcsRUFBRTtJQUVMdkIsZ0RBQVNBO21DQUFDO1lBQ04sc0RBQXNEO1lBQ3REd0IsYUFBYUksT0FBTyxDQUFDLGNBQWNGLEtBQUtHLFNBQVMsQ0FBQ3BCO1FBQ3REO2tDQUFHO1FBQUNBO0tBQVc7SUFFZlQsZ0RBQVNBO21DQUFDO1lBQ05RLGNBQWNzQixJQUFJOzJDQUFDLENBQUNDLE9BQVNiLFVBQVVhLEtBQUtDLElBQUk7O1lBQ2hEMUIscUJBQXFCd0IsSUFBSTsyQ0FBQyxDQUFDQyxPQUFTakIsaUJBQWlCaUI7O1lBQ3JEeEIsaUJBQWlCdUIsSUFBSTsyQ0FBQyxDQUFDQyxPQUFTZixhQUFhZTs7UUFDakQ7a0NBQUc7UUFBQ3pCO1FBQXNCQztLQUFpQjtJQUUzQ1AsZ0RBQVNBO21DQUFDO1lBQ04sTUFBTWlDO3VEQUFjO29CQUFhLE1BQU1DLE1BQU0sOENBQThDO3dCQUNuRkMsUUFBUTt3QkFDUkMsU0FBUzs0QkFDTCxVQUFVOzRCQUNWLGFBQWFDLDBDQUFzQzs0QkFDbkQsZUFBZTt3QkFDbkI7d0JBQ0FHLE1BQU07NEJBQUVDLFlBQVk7d0JBQUcsRUFBRSxlQUFlO29CQUM1QyxHQUNDWCxJQUFJOytEQUFDLENBQUNDLE9BQVNBLEtBQUtXLElBQUk7OERBQ3hCWixJQUFJOytEQUFDLENBQUNDLE9BQVNYLGdCQUFnQlc7O2dCQUNwQzs7WUFDQSxJQUFJWSxVQUFVQyxXQUFXLEVBQUU7Z0JBQ3ZCRCxVQUFVQyxXQUFXLENBQUNDLGtCQUFrQjsrQ0FDcEMsQ0FBQ0M7d0JBQ0csTUFBTUMsU0FBUzs0QkFDWEMsS0FBS0YsU0FBU0MsTUFBTSxDQUFDRSxRQUFROzRCQUM3QkMsS0FBS0osU0FBU0MsTUFBTSxDQUFDSSxTQUFTO3dCQUNsQzt3QkFDQTdCLGdCQUFnQnlCO29CQUNwQjs7K0NBQ0EsQ0FBQ0s7d0JBQ0dDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO3dCQUN6Q0UsTUFBTTt3QkFDTmhDLGdCQUFnQjtvQkFDcEI7O1lBRVIsT0FBTztnQkFDSGdDLE1BQU07Z0JBQ05oQyxnQkFBZ0I7WUFDcEI7WUFFQVc7WUFDQW9CLFFBQVFFLEdBQUcsQ0FBQ2xDO1FBQ2hCO2tDQUFHO1FBQUNWO0tBQU07SUFFVixTQUFTNkM7UUFDTCxJQUFHN0MsU0FBUyxJQUFJO1FBQ2hCLElBQUdGLFdBQVdnRCxRQUFRLENBQUM5QyxRQUNuQkQsY0FBYyxDQUFDZ0QsaUJBQW1CQSxlQUFlQyxNQUFNLENBQUNDLENBQUFBLE9BQVFBLFNBQVNqRCxPQUFPa0QsUUFBUSxDQUFDM0QscURBQVVBO2FBRW5HUSxjQUFjLENBQUNnRCxpQkFBbUI7bUJBQUlBO2dCQUFnQi9DO2FBQU0sQ0FBQ2tELFFBQVEsQ0FBQzNELHFEQUFVQTtJQUN4RjtJQUVBLGVBQWU0RCxjQUFjQyxRQUFnQjtRQUN6Q25ELFNBQVNtRDtJQUNiO0lBRUEscUJBQ0k7OzBCQUNBLDhEQUFDNUQsaUVBQWNBO2dCQUFDUSxPQUFPQTtnQkFBT0YsWUFBWUE7Z0JBQVlxRCxlQUFlQTtnQkFBZU4sY0FBY0E7Ozs7OzswQkFDbEcsOERBQUN6RCw4REFBV0E7MEJBQ1IsNEVBQUNLLCtEQUFZQTtvQkFBQ08sT0FBT0E7b0JBQU9FLGVBQWVBO29CQUFlRSxXQUFXQTtvQkFBV0UsUUFBUUE7b0JBQVFFLGNBQWNBO29CQUFjRSxjQUFjQTs7Ozs7Ozs7Ozs7OztBQUl0SjtHQXRGd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxheG1hZ1xcUHJvamVjdHNcXHRyYWNrZXJjdHBcXHNyY1xcY29tcG9uZW50c1xcTWFpbkNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNYXBQcm92aWRlciB9IGZyb20gJ3Byb3ZpZGVycy9NYXBQcm92aWRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnVzc2VzU29ydCB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XHJcbmltcG9ydCBSb3V0ZVNlbGVjdGlvbiBmcm9tICdjb21wb25lbnRzL1JvdXRlU2VsZWN0aW9uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHJvdXRlRGljdGlvbmFyeSB9IGZyb20gJ2hlbHBlcnMvY29uc3RhbnRzJztcclxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL01hcENvbXBvbmVudCc7XHJcbmltcG9ydCB7IGdldEJ1c3Nlc1Bvc2l0aW9ucyB9IGZyb20gJ2hlbHBlcnMvZHJhd2luZ1V0aWwnO1xyXG5cclxuaW50ZXJmYWNlIE1haW5Db21wb25lbnRQcm9wcyB7XHJcbiAgICBzaGFwZXNQcm9taXNlOiBQcm9taXNlPGFueT47XHJcbiAgICBzdG9wTG9jYXRpb25zUHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG4gICAgdHJpcFN0b3BzUHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQ29tcG9uZW50KHsgc3RvcExvY2F0aW9uc1Byb21pc2UsIHRyaXBTdG9wc1Byb21pc2UsIHNoYXBlc1Byb21pc2UgfTogTWFpbkNvbXBvbmVudFByb3BzKSB7XHJcbiAgICBjb25zdCBbZmF2b3VyaXRlcywgc2V0RmF2b3VyaXRlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gICAgY29uc3QgW3JvdXRlLCBzZXRSb3V0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgW3N0b3BMb2NhdGlvbnMsIHNldFN0b3BMb2NhdGlvbnNdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gICAgY29uc3QgW3RyaXBTdG9wcywgc2V0VHJpcFN0b3BzXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIGNvbnN0IFtzaGFwZXMsIHNldFNoYXBlc10gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBjb25zdCBbYnVzTG9jYXRpb25zLCBzZXRCdXNMb2NhdGlvbnNdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gICAgY29uc3QgW3VzZXJMb2NhdGlvbiwgc2V0VXNlckxvY2F0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIExvYWQgZmF2b3VyaXRlcyBmcm9tIGxvY2FsU3RvcmFnZSBvbiBjb21wb25lbnQgbW91bnRcclxuICAgICAgICBjb25zdCBzdG9yZWRGYXZvdXJpdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm91cml0ZXMnKTtcclxuICAgICAgICBpZiAoc3RvcmVkRmF2b3VyaXRlcykge1xyXG4gICAgICAgICAgICBzZXRGYXZvdXJpdGVzKEpTT04ucGFyc2Uoc3RvcmVkRmF2b3VyaXRlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFNhdmUgZmF2b3VyaXRlcyB0byBsb2NhbFN0b3JhZ2Ugd2hlbmV2ZXIgaXQgY2hhbmdlc1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvdXJpdGVzJywgSlNPTi5zdHJpbmdpZnkoZmF2b3VyaXRlcykpO1xyXG4gICAgfSwgW2Zhdm91cml0ZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNoYXBlc1Byb21pc2UudGhlbigoZGF0YSkgPT4gc2V0U2hhcGVzKGRhdGEuZmxhdCgpKSlcclxuICAgICAgICBzdG9wTG9jYXRpb25zUHJvbWlzZS50aGVuKChkYXRhKSA9PiBzZXRTdG9wTG9jYXRpb25zKGRhdGEpKVxyXG4gICAgICAgIHRyaXBTdG9wc1Byb21pc2UudGhlbigoZGF0YSkgPT4gc2V0VHJpcFN0b3BzKGRhdGEpKVxyXG4gICAgfSwgW3N0b3BMb2NhdGlvbnNQcm9taXNlLCB0cmlwU3RvcHNQcm9taXNlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaEJ1c3NlcyA9IGFzeW5jICgpID0+IHthd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHJhbnp5LmFpL3YxL29wZW5kYXRhL3ZlaGljbGVzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UUkFOWllfQVBJX0tFWSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtQWdlbmN5LUlkJzogJzInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiA0NSB9IC8vNDUgZGUgc2VjdW5kZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRCdXNMb2NhdGlvbnMoZGF0YSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyTG9jYXRpb24oY29vcmRzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBsb2NhdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ291bGQgbm90IHJldHJpZXZlIHlvdXIgbG9jYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJMb2NhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlwiKTtcclxuICAgICAgICAgICAgc2V0VXNlckxvY2F0aW9uKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmZXRjaEJ1c3NlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJMb2NhdGlvbilcclxuICAgIH0sIFtyb3V0ZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRmF2b3VyaXRlKCkge1xyXG4gICAgICAgIGlmKHJvdXRlID09ICcnKSByZXR1cm47XHJcbiAgICAgICAgaWYoZmF2b3VyaXRlcy5pbmNsdWRlcyhyb3V0ZSkpIFxyXG4gICAgICAgICAgICBzZXRGYXZvdXJpdGVzKChwcmV2RmF2b3VyaXRlcykgPT4gcHJldkZhdm91cml0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm91dGUpLnRvU29ydGVkKGJ1c3Nlc1NvcnQpKTsgXHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlcygocHJldkZhdm91cml0ZXMpID0+IFsuLi5wcmV2RmF2b3VyaXRlcywgcm91dGVdLnRvU29ydGVkKGJ1c3Nlc1NvcnQpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Sb3V0ZUNoYW5nZShuZXdSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0Um91dGUobmV3Um91dGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxSb3V0ZVNlbGVjdGlvbiByb3V0ZT17cm91dGV9IGZhdm91cml0ZXM9e2Zhdm91cml0ZXN9IG9uUm91dGVDaGFuZ2U9e29uUm91dGVDaGFuZ2V9IGFkZEZhdm91cml0ZT17YWRkRmF2b3VyaXRlfS8+XHJcbiAgICAgICAgPE1hcFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8TWFwQ29tcG9uZW50IHJvdXRlPXtyb3V0ZX0gc3RvcExvY2F0aW9ucz17c3RvcExvY2F0aW9uc30gdHJpcFN0b3BzPXt0cmlwU3RvcHN9IHNoYXBlcz17c2hhcGVzfSBidXNMb2NhdGlvbnM9e2J1c0xvY2F0aW9uc30gdXNlckxvY2F0aW9uPXt1c2VyTG9jYXRpb259Lz5cclxuICAgICAgICA8L01hcFByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcFByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJidXNzZXNTb3J0IiwiUm91dGVTZWxlY3Rpb24iLCJNYXBDb21wb25lbnQiLCJNYWluQ29tcG9uZW50Iiwic3RvcExvY2F0aW9uc1Byb21pc2UiLCJ0cmlwU3RvcHNQcm9taXNlIiwic2hhcGVzUHJvbWlzZSIsImZhdm91cml0ZXMiLCJzZXRGYXZvdXJpdGVzIiwicm91dGUiLCJzZXRSb3V0ZSIsInN0b3BMb2NhdGlvbnMiLCJzZXRTdG9wTG9jYXRpb25zIiwidHJpcFN0b3BzIiwic2V0VHJpcFN0b3BzIiwic2hhcGVzIiwic2V0U2hhcGVzIiwiYnVzTG9jYXRpb25zIiwic2V0QnVzTG9jYXRpb25zIiwidXNlckxvY2F0aW9uIiwic2V0VXNlckxvY2F0aW9uIiwic3RvcmVkRmF2b3VyaXRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhlbiIsImRhdGEiLCJmbGF0IiwiZmV0Y2hCdXNzZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVFJBTlpZX0FQSV9LRVkiLCJuZXh0IiwicmV2YWxpZGF0ZSIsImpzb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJlcnJvciIsImNvbnNvbGUiLCJhbGVydCIsImxvZyIsImFkZEZhdm91cml0ZSIsImluY2x1ZGVzIiwicHJldkZhdm91cml0ZXMiLCJmaWx0ZXIiLCJpdGVtIiwidG9Tb3J0ZWQiLCJvblJvdXRlQ2hhbmdlIiwibmV3Um91dGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MainComponent.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/helpers/utils.tsx":
/*!*******************************!*\
  !*** ./src/helpers/utils.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetPixelPositionOffset: () => (/* binding */ GetPixelPositionOffset),\n/* harmony export */   bussesSort: () => (/* binding */ bussesSort)\n/* harmony export */ });\nfunction bussesSort(a, b) {\n    const numA = Number(a);\n    const numB = Number(b);\n    return numA - numB;\n}\nfunction GetPixelPositionOffset(width, height) {\n    return {\n        x: -(width / 2),\n        y: -(height / 2)\n    };\n}\n_c = GetPixelPositionOffset;\nvar _c;\n$RefreshReg$(_c, \"GetPixelPositionOffset\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLFNBQVNBLFdBQVdDLENBQVMsRUFBRUMsQ0FBUztJQUM3QyxNQUFNQyxPQUFPQyxPQUFPSDtJQUNwQixNQUFNSSxPQUFPRCxPQUFPRjtJQUNwQixPQUFPQyxPQUFPRTtBQUNoQjtBQUVPLFNBQVNDLHVCQUF1QkMsS0FBYSxFQUFFQyxNQUFjO0lBQ2xFLE9BQU87UUFDTEMsR0FBRyxDQUFFRixDQUFBQSxRQUFRO1FBQ2JHLEdBQUcsQ0FBRUYsQ0FBQUEsU0FBUztJQUNoQjtBQUNGO0tBTGdCRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxheG1hZ1xcUHJvamVjdHNcXHRyYWNrZXJjdHBcXHNyY1xcaGVscGVyc1xcdXRpbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBidXNzZXNTb3J0KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcclxuICBjb25zdCBudW1BID0gTnVtYmVyKGEpO1xyXG4gIGNvbnN0IG51bUIgPSBOdW1iZXIoYik7XHJcbiAgcmV0dXJuIG51bUEgLSBudW1CO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0UGl4ZWxQb3NpdGlvbk9mZnNldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiAtKHdpZHRoIC8gMiksXHJcbiAgICB5OiAtKGhlaWdodCAvIDIpXHJcbiAgfTtcclxufSJdLCJuYW1lcyI6WyJidXNzZXNTb3J0IiwiYSIsImIiLCJudW1BIiwiTnVtYmVyIiwibnVtQiIsIkdldFBpeGVsUG9zaXRpb25PZmZzZXQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/utils.tsx\n"));

/***/ })

});