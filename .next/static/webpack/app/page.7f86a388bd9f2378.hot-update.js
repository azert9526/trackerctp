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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapComponent */ \"(app-pages-browser)/./src/components/MapComponent.tsx\");\n/* harmony import */ var components_RouteSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/RouteSelect */ \"(app-pages-browser)/./src/components/RouteSelect.tsx\");\n/* harmony import */ var providers_MapProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! providers/MapProvider */ \"(app-pages-browser)/./src/providers/MapProvider.tsx\");\n/* harmony import */ var components_FavouriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FavouriteButton */ \"(app-pages-browser)/./src/components/FavouriteButton.tsx\");\n/* harmony import */ var components_RouteButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/RouteButtons */ \"(app-pages-browser)/./src/components/RouteButtons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [favourites, setFavourites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [route, setRoute] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');\n    const filterByRoute = (routeId)=>{\n        console.log(\"Filtering by route \".concat(routeId));\n    };\n    const toggleBusinesses = ()=>{\n        console.log('Toggling other map elements');\n    };\n    const centerMapOnUser = ()=>{\n        console.log('Centering map on user');\n    };\n    const initiatePrediction = ()=>{\n        console.log('Initiating prediction');\n    };\n    function addFavourite() {\n        if (route == '') return;\n        if (favourites.includes(route)) setFavourites((prevFavourites)=>prevFavourites.filter((item)=>item !== route));\n        else setFavourites((prevFavourites)=>[\n                ...prevFavourites,\n                route\n            ]);\n    }\n    async function onRouteChange(newRoute) {\n        setRoute(newRoute);\n    }\n    async function fetchVehicles() {\n        const response = await fetch('https://api.tranzy.ai/v1/opendata/vehicles', {\n            method: 'GET',\n            headers: {\n                'Accept': 'application/json',\n                'X-API-KEY': \"1v6BK493vzooj5F97rbEcRiuAGwS0VJPPJ7fCI0U\",\n                'X-Agency-Id': '2'\n            }\n        });\n        const data = response.json();\n        console.log(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tracker Bus CTP Cluj-Napoca\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteButtons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        favouriteRoutes: favourites,\n                        onButtonPress: onRouteButtonPress\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteSelect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        routeValue: route,\n                        onRouteChange: onRouteChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_FavouriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isRouteFavourite: favourites.includes(route),\n                        addFavourite: addFavourite\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: toggleBusinesses,\n                        children: \"Show/Hide other map elements\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: centerMapOnUser,\n                        children: \"Center on you\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: initiatePrediction,\n                        children: \"Select vehicle/destination for time arrival prediction\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_MapProvider__WEBPACK_IMPORTED_MODULE_4__.MapProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MapComponent__WEBPACK_IMPORTED_MODULE_2__.MapComponent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bottom-routefetchtext\",\n                style: {\n                    position: 'fixed',\n                    bottom: '10px',\n                    left: '0',\n                    right: '0',\n                    textAlign: 'center',\n                    fontSize: '12px',\n                    color: 'black'\n                },\n                children: \"Last time fetching a route:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bottom-warningtext\",\n                style: {\n                    position: 'fixed',\n                    bottom: '30px',\n                    left: '0',\n                    right: '0',\n                    textAlign: 'center',\n                    fontSize: '12px',\n                    color: 'black'\n                },\n                children: \"Some warning messages will be displayed here.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"7okIuo4wa7FPmo7pRS5pwUrp8OA=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDd0I7QUFDTjtBQUNHO0FBQ0E7QUFDSztBQUNOO0FBRXBDLFNBQVNPOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQVcsRUFBRTtJQUN6RCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1gsMkNBQWMsQ0FBUztJQUVqRCxNQUFNWSxnQkFBZ0IsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBOEIsT0FBUkY7SUFDdEM7SUFFQSxNQUFNRyxtQkFBbUI7UUFDckJGLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1FLGtCQUFrQjtRQUNwQkgsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEsTUFBTUcscUJBQXFCO1FBQ3ZCSixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxTQUFTSTtRQUNMLElBQUdULFNBQVMsSUFBSTtRQUNoQixJQUFHRixXQUFXWSxRQUFRLENBQUNWLFFBQ25CRCxjQUFjLENBQUNZLGlCQUFtQkEsZUFBZUMsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxTQUFTYjthQUV6RUQsY0FBYyxDQUFDWSxpQkFBbUI7bUJBQUlBO2dCQUFnQlg7YUFBTTtJQUNwRTtJQUVBLGVBQWVjLGNBQWNDLFFBQWdCO1FBQ3pDZCxTQUFTYztJQUNiO0lBRUEsZUFBZUM7UUFDWCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sOENBQThDO1lBQ3ZFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsVUFBVTtnQkFDVixhQUFhQywwQ0FBc0M7Z0JBQ25ELGVBQWU7WUFDbkI7UUFDSjtRQUNBLE1BQU1HLE9BQU9QLFNBQVNRLElBQUk7UUFDMUJyQixRQUFRQyxHQUFHLENBQUNtQjtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOztrQ0FDRyw4REFBQzlCLCtEQUFZQTt3QkFBQ2dDLGlCQUFpQjlCO3dCQUFZK0IsZUFBZUM7Ozs7OztrQ0FDMUQsOERBQUN0Qyw4REFBV0E7d0JBQUN1QyxZQUFZL0I7d0JBQU9jLGVBQWVBOzs7Ozs7a0NBQy9DLDhEQUFDbkIsa0VBQWVBO3dCQUFDcUMsa0JBQWtCbEMsV0FBV1ksUUFBUSxDQUFDVjt3QkFBUVMsY0FBY0E7Ozs7OztrQ0FDN0UsOERBQUN3Qjt3QkFBT0MsV0FBVTt3QkFBTUMsU0FBUzdCO2tDQUFrQjs7Ozs7O2tDQUduRCw4REFBQzJCO3dCQUFPQyxXQUFVO3dCQUFNQyxTQUFTNUI7a0NBQWlCOzs7Ozs7a0NBR2xELDhEQUFDMEI7d0JBQU9DLFdBQVU7d0JBQU1DLFNBQVMzQjtrQ0FBb0I7Ozs7Ozs7Ozs7OzswQkFJekQsOERBQUNmLDhEQUFXQTswQkFDUiw0RUFBQ0YsaUVBQVlBOzs7Ozs7Ozs7OzBCQUVqQiw4REFBQ21DO2dCQUFJVSxJQUFHO2dCQUF3QkMsT0FBTztvQkFBRUMsVUFBVTtvQkFBU0MsUUFBUTtvQkFBUUMsTUFBTTtvQkFBS0MsT0FBTztvQkFBS0MsV0FBVztvQkFBVUMsVUFBVTtvQkFBUUMsT0FBTztnQkFBUTswQkFBRzs7Ozs7OzBCQUc1Siw4REFBQ2xCO2dCQUFJVSxJQUFHO2dCQUFxQkMsT0FBTztvQkFBRUMsVUFBVTtvQkFBU0MsUUFBUTtvQkFBUUMsTUFBTTtvQkFBS0MsT0FBTztvQkFBS0MsV0FBVztvQkFBVUMsVUFBVTtvQkFBUUMsT0FBTztnQkFBUTswQkFBRzs7Ozs7Ozs7Ozs7O0FBS3JLO0dBekV3Qi9DO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnY29tcG9uZW50cy9NYXBDb21wb25lbnQnO1xyXG5pbXBvcnQgUm91dGVTZWxlY3QgZnJvbSAnY29tcG9uZW50cy9Sb3V0ZVNlbGVjdCc7XHJcbmltcG9ydCB7IE1hcFByb3ZpZGVyIH0gZnJvbSAncHJvdmlkZXJzL01hcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmF2b3VyaXRlQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRmF2b3VyaXRlQnV0dG9uJztcclxuaW1wb3J0IFJvdXRlQnV0dG9ucyBmcm9tICdjb21wb25lbnRzL1JvdXRlQnV0dG9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gICAgY29uc3QgW2Zhdm91cml0ZXMsIHNldEZhdm91cml0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICAgIGNvbnN0IFtyb3V0ZSwgc2V0Um91dGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyQnlSb3V0ZSA9IChyb3V0ZUlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRmlsdGVyaW5nIGJ5IHJvdXRlICR7cm91dGVJZH1gKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQnVzaW5lc3NlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9nZ2xpbmcgb3RoZXIgbWFwIGVsZW1lbnRzJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNlbnRlck1hcE9uVXNlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2VudGVyaW5nIG1hcCBvbiB1c2VyJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYXRlUHJlZGljdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhdGluZyBwcmVkaWN0aW9uJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEZhdm91cml0ZSgpIHtcclxuICAgICAgICBpZihyb3V0ZSA9PSAnJykgcmV0dXJuO1xyXG4gICAgICAgIGlmKGZhdm91cml0ZXMuaW5jbHVkZXMocm91dGUpKSBcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlcygocHJldkZhdm91cml0ZXMpID0+IHByZXZGYXZvdXJpdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdXRlKSk7IFxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHNldEZhdm91cml0ZXMoKHByZXZGYXZvdXJpdGVzKSA9PiBbLi4ucHJldkZhdm91cml0ZXMsIHJvdXRlXSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uUm91dGVDaGFuZ2UobmV3Um91dGU6IHN0cmluZykge1xyXG4gICAgICAgIHNldFJvdXRlKG5ld1JvdXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVmVoaWNsZXMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHJhbnp5LmFpL3YxL29wZW5kYXRhL3ZlaGljbGVzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ1gtQVBJLUtFWSc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RSQU5aWV9BUElfS0VZIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICAgICdYLUFnZW5jeS1JZCc6ICcyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5UcmFja2VyIEJ1cyBDVFAgQ2x1ai1OYXBvY2E8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlQnV0dG9ucyBmYXZvdXJpdGVSb3V0ZXM9e2Zhdm91cml0ZXN9IG9uQnV0dG9uUHJlc3M9e29uUm91dGVCdXR0b25QcmVzc30gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZVNlbGVjdCByb3V0ZVZhbHVlPXtyb3V0ZX0gb25Sb3V0ZUNoYW5nZT17b25Sb3V0ZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgPEZhdm91cml0ZUJ1dHRvbiBpc1JvdXRlRmF2b3VyaXRlPXtmYXZvdXJpdGVzLmluY2x1ZGVzKHJvdXRlKX0gYWRkRmF2b3VyaXRlPXthZGRGYXZvdXJpdGV9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dG9nZ2xlQnVzaW5lc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdy9IaWRlIG90aGVyIG1hcCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2NlbnRlck1hcE9uVXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2VudGVyIG9uIHlvdVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2luaXRpYXRlUHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHZlaGljbGUvZGVzdGluYXRpb24gZm9yIHRpbWUgYXJyaXZhbCBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNYXBQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxNYXBDb21wb25lbnQvPlxyXG4gICAgICAgICAgICA8L01hcFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXJvdXRlZmV0Y2h0ZXh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzEwcHgnLCBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgTGFzdCB0aW1lIGZldGNoaW5nIGEgcm91dGU6XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXdhcm5pbmd0ZXh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzMwcHgnLCBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgU29tZSB3YXJuaW5nIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIGhlcmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBDb21wb25lbnQiLCJSb3V0ZVNlbGVjdCIsIk1hcFByb3ZpZGVyIiwidXNlU3RhdGUiLCJGYXZvdXJpdGVCdXR0b24iLCJSb3V0ZUJ1dHRvbnMiLCJQYWdlIiwiZmF2b3VyaXRlcyIsInNldEZhdm91cml0ZXMiLCJyb3V0ZSIsInNldFJvdXRlIiwiZmlsdGVyQnlSb3V0ZSIsInJvdXRlSWQiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlQnVzaW5lc3NlcyIsImNlbnRlck1hcE9uVXNlciIsImluaXRpYXRlUHJlZGljdGlvbiIsImFkZEZhdm91cml0ZSIsImluY2x1ZGVzIiwicHJldkZhdm91cml0ZXMiLCJmaWx0ZXIiLCJpdGVtIiwib25Sb3V0ZUNoYW5nZSIsIm5ld1JvdXRlIiwiZmV0Y2hWZWhpY2xlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RSQU5aWV9BUElfS0VZIiwiZGF0YSIsImpzb24iLCJkaXYiLCJoMSIsImZhdm91cml0ZVJvdXRlcyIsIm9uQnV0dG9uUHJlc3MiLCJvblJvdXRlQnV0dG9uUHJlc3MiLCJyb3V0ZVZhbHVlIiwiaXNSb3V0ZUZhdm91cml0ZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsInN0eWxlIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});