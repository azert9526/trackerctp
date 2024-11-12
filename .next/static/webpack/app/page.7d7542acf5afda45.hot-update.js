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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBussesPositions: () => (/* binding */ getBussesPositions),\n/* harmony export */   getRouteShapePositions: () => (/* binding */ getRouteShapePositions),\n/* harmony export */   getStopPositions: () => (/* binding */ getStopPositions)\n/* harmony export */ });\nfunction getStopPositions(tripId, tripStops, stopLocations) {\n    if (!tripId) return {\n        stops: [],\n        firstGreen: -1\n    };\n    const tripId0 = tripId + '_0';\n    const tripId1 = tripId + '_1';\n    const stops = [];\n    const tripStopsForId = tripStops.filter((tripStop)=>tripStop.trip_id === tripId0 || tripStop.trip_id === tripId1);\n    tripStopsForId.forEach((tripStop)=>{\n        const stopLocation = stopLocations.find((stop)=>stop.stop_id === tripStop.stop_id);\n        if (stopLocation) {\n            stops.push({\n                id: stopLocation.stop_id,\n                position: {\n                    lat: stopLocation.stop_lat,\n                    lng: stopLocation.stop_lon\n                },\n                color: tripStop.trip_id.endsWith('_0') ? 'red' : 'green'\n            });\n        }\n    });\n    const firstGreen = stops.findIndex((stop)=>stop.color === 'green');\n    return {\n        stops: stops,\n        firstGreen: firstGreen\n    };\n}\nfunction getRouteShapePositions(shapeId, shapesData) {\n    if (!shapesData || !shapesData.length) {\n        console.warn('Shapes data is not available');\n        return [];\n    }\n    const shapePoints = shapesData.flat().filter((shape)=>shape.shape_id === shapeId).sort((a, b)=>a.shape_pt_sequence - b.shape_pt_sequence).map((point)=>({\n            lat: point.shape_pt_lat,\n            lng: point.shape_pt_lon\n        }));\n    return shapePoints;\n}\nfunction getBusData(vehicle, tripStops, stopLocations) {\n    var _tripStops_find, _tripStops_find1;\n    const data = {\n        id: vehicle.label,\n        position: {\n            lat: vehicle.latitude,\n            lng: vehicle.longitude\n        },\n        color: vehicle.trip_id.endsWith('_0') ? 'red' : 'green'\n    };\n    const stopLocationsForVehicle = stopLocations.filter((tripStop)=>tripStop.trip_id === vehicle.trip_id);\n    const startStop = stopLocationsForVehicle.find((stop)=>stop.stop_sequence === 0);\n    if (!startStop) {\n        console.warn(\"Stop distances could not be calculated.\");\n        return data;\n    }\n    const startStopLocation = tripStops.find((sl)=>sl.stop_id === startStop.stop_id);\n    const stopDistances = stopLocationsForVehicle.map((stop)=>{\n        const stopLocation = tripStops.find((sl)=>sl.stop_id === stop.stop_id);\n        if (stopLocation) {\n            const distanceToStop = calculateDistance(startStopLocation.stop_lat, startStopLocation.stop_lon, stopLocation.stop_lat, stopLocation.stop_lon);\n            return {\n                stop,\n                distance: distanceToStop\n            };\n        }\n        return null;\n    }).filter((stopDistance)=>stopDistance !== null);\n    const vehicleDistance = calculateDistance(startStopLocation.stop_lat, startStopLocation.stop_lon, vehicle.latitude, vehicle.longitude);\n    stopDistances.push({\n        stop: {\n            stop_id: 'vehicle',\n            stop_lat: vehicle.latitude,\n            stop_lon: vehicle.longitude\n        },\n        distance: vehicleDistance\n    });\n    stopDistances.sort((a, b)=>a.distance - b.distance);\n    let vehicleIndex = stopDistances.findIndex((stopDistance)=>stopDistance.stop.stop_id === 'vehicle');\n    const previousStop = vehicleIndex > 0 ? stopDistances[vehicleIndex - 1].stop : {\n        stop_id: null\n    };\n    const nextStop = vehicleIndex < stopDistances.length - 1 ? stopDistances[vehicleIndex + 1].stop : {\n        stop_id: null\n    };\n    const previousStopName = ((_tripStops_find = tripStops.find((sl)=>sl.stop_id === previousStop.stop_id)) === null || _tripStops_find === void 0 ? void 0 : _tripStops_find.stop_name) || 'At first stop';\n    const nextStopName = ((_tripStops_find1 = tripStops.find((sl)=>sl.stop_id === nextStop.stop_id)) === null || _tripStops_find1 === void 0 ? void 0 : _tripStops_find1.stop_name) || 'At last stop';\n    return {\n        ...data,\n        speed: vehicle.speed,\n        previousStopName: previousStopName,\n        nextStopName: nextStopName\n    };\n}\nfunction getBussesPositions(routeId, data, tripStops, stopLocations) {\n    if (!data || !routeId) return [];\n    const busData = data.flat().filter((vehicle)=>{\n        var _vehicle_route_id;\n        return ((_vehicle_route_id = vehicle.route_id) === null || _vehicle_route_id === void 0 ? void 0 : _vehicle_route_id.toString()) === routeId && vehicle.trip_id !== null && (vehicle.trip_id.endsWith('_0') || vehicle.trip_id.endsWith('_1'));\n    }).map((vehicle)=>getBusData(vehicle, tripStops, stopLocations));\n    return busData;\n}\nfunction calculateDistance(lat1, lon1, lat2, lon2) {\n    //Haversine formula\n    const R = 6371;\n    const dLat = (lat2 - lat1) * Math.PI / 180;\n    const dLon = (lon2 - lon1) * Math.PI / 180;\n    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);\n    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n    return R * c;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2RyYXdpbmdVdGlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFlTyxTQUFTQSxpQkFBaUJDLE1BQWMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhO0lBQ3JFLElBQUcsQ0FBQ0YsUUFBUSxPQUFPO1FBQUVHLE9BQU8sRUFBRTtRQUFFQyxZQUFZLENBQUM7SUFBRTtJQUUvQyxNQUFNQyxVQUFVTCxTQUFTO0lBQ3pCLE1BQU1NLFVBQVVOLFNBQVM7SUFDekIsTUFBTUcsUUFBMkIsRUFBRTtJQUVuQyxNQUFNSSxpQkFBaUJOLFVBQVVPLE1BQU0sQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsT0FBTyxLQUFLTCxXQUFXSSxTQUFTQyxPQUFPLEtBQUtKO0lBRXpHQyxlQUFlSSxPQUFPLENBQUNGLENBQUFBO1FBQ25CLE1BQU1HLGVBQWVWLGNBQWNXLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsT0FBTyxLQUFLTixTQUFTTSxPQUFPO1FBQ2pGLElBQUlILGNBQWM7WUFDZFQsTUFBTWEsSUFBSSxDQUFDO2dCQUNQQyxJQUFJTCxhQUFhRyxPQUFPO2dCQUN4QkcsVUFBVTtvQkFDTkMsS0FBS1AsYUFBYVEsUUFBUTtvQkFDMUJDLEtBQUtULGFBQWFVLFFBQVE7Z0JBQzlCO2dCQUNBQyxPQUFPZCxTQUFTQyxPQUFPLENBQUNjLFFBQVEsQ0FBQyxRQUFRLFFBQVE7WUFDckQ7UUFDSjtJQUNKO0lBRUEsTUFBTXBCLGFBQWFELE1BQU1zQixTQUFTLENBQUNYLENBQUFBLE9BQVFBLEtBQUtTLEtBQUssS0FBSztJQUMxRCxPQUFPO1FBQUVwQixPQUFPQTtRQUFPQyxZQUFZQTtJQUFXO0FBQ2xEO0FBRU8sU0FBU3NCLHVCQUF1QkMsT0FBZSxFQUFFQyxVQUFVO0lBQzlELElBQUksQ0FBQ0EsY0FBYyxDQUFDQSxXQUFXQyxNQUFNLEVBQUU7UUFDbkNDLFFBQVFDLElBQUksQ0FBQztRQUNiLE9BQU8sRUFBRTtJQUNiO0lBRUEsTUFBTUMsY0FBY0osV0FBV0ssSUFBSSxHQUFHekIsTUFBTSxDQUFDMEIsQ0FBQUEsUUFBU0EsTUFBTUMsUUFBUSxLQUFLUixTQUFTUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsaUJBQWlCLEdBQUdELEVBQUVDLGlCQUFpQixFQUFFQyxHQUFHLENBQUNDLENBQUFBLFFBQVU7WUFDdEp0QixLQUFLc0IsTUFBTUMsWUFBWTtZQUN2QnJCLEtBQUtvQixNQUFNRSxZQUFZO1FBQzNCO0lBQ0EsT0FBT1g7QUFDWDtBQUVBLFNBQVNZLFdBQVdDLE9BQVksRUFBRTVDLFNBQWMsRUFBRUMsYUFBa0I7UUE4Q3ZDRCxpQkFDSkE7SUE5Q3JCLE1BQU02QyxPQUFPO1FBQ1Q3QixJQUFJNEIsUUFBUUUsS0FBSztRQUNqQjdCLFVBQVU7WUFDTkMsS0FBSzBCLFFBQVFHLFFBQVE7WUFDckIzQixLQUFLd0IsUUFBUUksU0FBUztRQUMxQjtRQUNBMUIsT0FBT3NCLFFBQVFuQyxPQUFPLENBQUNjLFFBQVEsQ0FBQyxRQUFRLFFBQVE7SUFDcEQ7SUFFQSxNQUFNMEIsMEJBQTBCaEQsY0FBY00sTUFBTSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxPQUFPLEtBQUttQyxRQUFRbkMsT0FBTztJQUNyRyxNQUFNeUMsWUFBWUQsd0JBQXdCckMsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLc0MsYUFBYSxLQUFLO0lBQzlFLElBQUksQ0FBQ0QsV0FBVztRQUNackIsUUFBUUMsSUFBSSxDQUFFO1FBQ2QsT0FBT2U7SUFDWDtJQUNBLE1BQU1PLG9CQUFvQnBELFVBQVVZLElBQUksQ0FBQ3lDLENBQUFBLEtBQU1BLEdBQUd2QyxPQUFPLEtBQUtvQyxVQUFVcEMsT0FBTztJQUMvRSxNQUFNd0MsZ0JBQWdCTCx3QkFBd0JWLEdBQUcsQ0FBQzFCLENBQUFBO1FBQzlDLE1BQU1GLGVBQWVYLFVBQVVZLElBQUksQ0FBQ3lDLENBQUFBLEtBQU1BLEdBQUd2QyxPQUFPLEtBQUtELEtBQUtDLE9BQU87UUFDckUsSUFBSUgsY0FBYztZQUNkLE1BQU00QyxpQkFBaUJDLGtCQUFrQkosa0JBQWtCakMsUUFBUSxFQUFFaUMsa0JBQWtCL0IsUUFBUSxFQUFFVixhQUFhUSxRQUFRLEVBQUVSLGFBQWFVLFFBQVE7WUFDN0ksT0FBTztnQkFDSFI7Z0JBQ0E0QyxVQUFVRjtZQUNkO1FBQ0o7UUFDQSxPQUFPO0lBQ1gsR0FBR2hELE1BQU0sQ0FBQ21ELENBQUFBLGVBQWdCQSxpQkFBaUI7SUFDM0MsTUFBTUMsa0JBQWtCSCxrQkFBa0JKLGtCQUFrQmpDLFFBQVEsRUFBRWlDLGtCQUFrQi9CLFFBQVEsRUFBRXVCLFFBQVFHLFFBQVEsRUFBRUgsUUFBUUksU0FBUztJQUNySU0sY0FBY3ZDLElBQUksQ0FBQztRQUNmRixNQUFNO1lBQ0ZDLFNBQVM7WUFDVEssVUFBVXlCLFFBQVFHLFFBQVE7WUFDMUIxQixVQUFVdUIsUUFBUUksU0FBUztRQUMvQjtRQUNBUyxVQUFVRTtJQUNkO0lBQ0FMLGNBQWNuQixJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRXFCLFFBQVEsR0FBR3BCLEVBQUVvQixRQUFRO0lBRXBELElBQUlHLGVBQWVOLGNBQWM5QixTQUFTLENBQUNrQyxDQUFBQSxlQUFnQkEsYUFBYTdDLElBQUksQ0FBQ0MsT0FBTyxLQUFLO0lBQ3pGLE1BQU0rQyxlQUFlRCxlQUFlLElBQUlOLGFBQWEsQ0FBQ00sZUFBZSxFQUFFLENBQUMvQyxJQUFJLEdBQUc7UUFDM0VDLFNBQVM7SUFDYjtJQUNBLE1BQU1nRCxXQUFXRixlQUFlTixjQUFjMUIsTUFBTSxHQUFHLElBQUkwQixhQUFhLENBQUNNLGVBQWUsRUFBRSxDQUFDL0MsSUFBSSxHQUFHO1FBQzlGQyxTQUFTO0lBQ2I7SUFDQSxNQUFNaUQsbUJBQW1CL0QsRUFBQUEsa0JBQUFBLFVBQVVZLElBQUksQ0FBQ3lDLENBQUFBLEtBQU1BLEdBQUd2QyxPQUFPLEtBQUsrQyxhQUFhL0MsT0FBTyxlQUF4RGQsc0NBQUFBLGdCQUEyRGdFLFNBQVMsS0FBSTtJQUNqRyxNQUFNQyxlQUFlakUsRUFBQUEsbUJBQUFBLFVBQVVZLElBQUksQ0FBQ3lDLENBQUFBLEtBQU1BLEdBQUd2QyxPQUFPLEtBQUtnRCxTQUFTaEQsT0FBTyxlQUFwRGQsdUNBQUFBLGlCQUF1RGdFLFNBQVMsS0FBSTtJQUN6RixPQUFPO1FBQ0gsR0FBR25CLElBQUk7UUFDUHFCLE9BQU90QixRQUFRc0IsS0FBSztRQUNwQkgsa0JBQWtCQTtRQUNsQkUsY0FBY0E7SUFDbEI7QUFDSjtBQUVPLFNBQVNFLG1CQUFtQkMsT0FBZSxFQUFFdkIsSUFBUyxFQUFFN0MsU0FBYyxFQUFFQyxhQUFrQjtJQUM3RixJQUFHLENBQUM0QyxRQUFRLENBQUN1QixTQUFTLE9BQU8sRUFBRTtJQUUvQixNQUFNQyxVQUFVeEIsS0FBS2IsSUFBSSxHQUNSekIsTUFBTSxDQUFDcUMsQ0FBQUE7WUFBV0E7ZUFBQUEsRUFBQUEsb0JBQUFBLFFBQVEwQixRQUFRLGNBQWhCMUIsd0NBQUFBLGtCQUFrQjJCLFFBQVEsUUFBT0gsV0FBV3hCLFFBQVFuQyxPQUFPLEtBQUssUUFBU21DLENBQUFBLFFBQVFuQyxPQUFPLENBQUNjLFFBQVEsQ0FBQyxTQUFTcUIsUUFBUW5DLE9BQU8sQ0FBQ2MsUUFBUSxDQUFDLEtBQUk7T0FDMUpnQixHQUFHLENBQUNLLENBQUFBLFVBQVlELFdBQVdDLFNBQVM1QyxXQUFXQztJQUVoRSxPQUFPb0U7QUFDWDtBQUdBLFNBQVNiLGtCQUFrQmdCLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7SUFDN0MsbUJBQW1CO0lBQ25CLE1BQU1DLElBQUk7SUFDVixNQUFNQyxPQUFPLENBQUNILE9BQU9GLElBQUcsSUFBS00sS0FBS0MsRUFBRSxHQUFHO0lBQ3ZDLE1BQU1DLE9BQU8sQ0FBQ0wsT0FBT0YsSUFBRyxJQUFLSyxLQUFLQyxFQUFFLEdBQUc7SUFDdkMsTUFBTTNDLElBQUkwQyxLQUFLRyxHQUFHLENBQUNKLE9BQU8sS0FBS0MsS0FBS0csR0FBRyxDQUFDSixPQUFPLEtBQUtDLEtBQUtJLEdBQUcsQ0FBQ1YsT0FBT00sS0FBS0MsRUFBRSxHQUFHLE9BQU9ELEtBQUtJLEdBQUcsQ0FBQ1IsT0FBT0ksS0FBS0MsRUFBRSxHQUFHLE9BQU9ELEtBQUtHLEdBQUcsQ0FBQ0QsT0FBTyxLQUFLRixLQUFLRyxHQUFHLENBQUNELE9BQU87SUFDM0osTUFBTUcsSUFBSSxJQUFJTCxLQUFLTSxLQUFLLENBQUNOLEtBQUtPLElBQUksQ0FBQ2pELElBQUkwQyxLQUFLTyxJQUFJLENBQUMsSUFBSWpEO0lBQ3JELE9BQU93QyxJQUFJTztBQUNmIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxoZWxwZXJzXFxkcmF3aW5nVXRpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBNYXBFbGVtZW50RGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgICBsYXQ6IG51bWJlcixcclxuICAgICAgICBsbmc6IG51bWJlclxyXG4gICAgfTtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnVzRWxlbWVudERhdGEgZXh0ZW5kcyBNYXBFbGVtZW50RGF0YSB7XHJcbiAgICBzcGVlZDogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNTdG9wTmFtZTogc3RyaW5nO1xyXG4gICAgbmV4dFN0b3BOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9wUG9zaXRpb25zKHRyaXBJZDogc3RyaW5nLCB0cmlwU3RvcHMsIHN0b3BMb2NhdGlvbnMpOiB7c3RvcHM6IGFueSwgZmlyc3RHcmVlbjogbnVtYmVyfSB7XHJcbiAgICBpZighdHJpcElkKSByZXR1cm4geyBzdG9wczogW10sIGZpcnN0R3JlZW46IC0xIH07XHJcblxyXG4gICAgY29uc3QgdHJpcElkMCA9IHRyaXBJZCArICdfMCdcclxuICAgIGNvbnN0IHRyaXBJZDEgPSB0cmlwSWQgKyAnXzEnXHJcbiAgICBjb25zdCBzdG9wcyA6IE1hcEVsZW1lbnREYXRhW10gPSBbXVxyXG5cclxuICAgIGNvbnN0IHRyaXBTdG9wc0ZvcklkID0gdHJpcFN0b3BzLmZpbHRlcih0cmlwU3RvcCA9PiB0cmlwU3RvcC50cmlwX2lkID09PSB0cmlwSWQwIHx8IHRyaXBTdG9wLnRyaXBfaWQgPT09IHRyaXBJZDEpO1xyXG5cclxuICAgIHRyaXBTdG9wc0ZvcklkLmZvckVhY2godHJpcFN0b3AgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3BMb2NhdGlvbiA9IHN0b3BMb2NhdGlvbnMuZmluZChzdG9wID0+IHN0b3Auc3RvcF9pZCA9PT0gdHJpcFN0b3Auc3RvcF9pZCk7XHJcbiAgICAgICAgaWYgKHN0b3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBzdG9wcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBzdG9wTG9jYXRpb24uc3RvcF9pZCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBzdG9wTG9jYXRpb24uc3RvcF9sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBzdG9wTG9jYXRpb24uc3RvcF9sb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJpcFN0b3AudHJpcF9pZC5lbmRzV2l0aCgnXzAnKSA/ICdyZWQnIDogJ2dyZWVuJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaXJzdEdyZWVuID0gc3RvcHMuZmluZEluZGV4KHN0b3AgPT4gc3RvcC5jb2xvciA9PT0gJ2dyZWVuJyk7XHJcbiAgICByZXR1cm4geyBzdG9wczogc3RvcHMsIGZpcnN0R3JlZW46IGZpcnN0R3JlZW4gfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlU2hhcGVQb3NpdGlvbnMoc2hhcGVJZDogc3RyaW5nLCBzaGFwZXNEYXRhKSB7XHJcbiAgICBpZiAoIXNoYXBlc0RhdGEgfHwgIXNoYXBlc0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdTaGFwZXMgZGF0YSBpcyBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzaGFwZVBvaW50cyA9IHNoYXBlc0RhdGEuZmxhdCgpLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5zaGFwZV9pZCA9PT0gc2hhcGVJZCkuc29ydCgoYSwgYikgPT4gYS5zaGFwZV9wdF9zZXF1ZW5jZSAtIGIuc2hhcGVfcHRfc2VxdWVuY2UpLm1hcChwb2ludCA9PiAoe1xyXG4gICAgICAgIGxhdDogcG9pbnQuc2hhcGVfcHRfbGF0LFxyXG4gICAgICAgIGxuZzogcG9pbnQuc2hhcGVfcHRfbG9uXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gc2hhcGVQb2ludHNcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QnVzRGF0YSh2ZWhpY2xlOiBhbnksIHRyaXBTdG9wczogYW55LCBzdG9wTG9jYXRpb25zOiBhbnkpIHsgLy92ZWhpY2xlIGZldGNoZWQgZGluIGFwaVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpZDogdmVoaWNsZS5sYWJlbCxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICBsYXQ6IHZlaGljbGUubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxuZzogdmVoaWNsZS5sb25naXR1ZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB2ZWhpY2xlLnRyaXBfaWQuZW5kc1dpdGgoJ18wJykgPyAncmVkJyA6ICdncmVlbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wTG9jYXRpb25zRm9yVmVoaWNsZSA9IHN0b3BMb2NhdGlvbnMuZmlsdGVyKHRyaXBTdG9wID0+IHRyaXBTdG9wLnRyaXBfaWQgPT09IHZlaGljbGUudHJpcF9pZCk7XHJcbiAgICBjb25zdCBzdGFydFN0b3AgPSBzdG9wTG9jYXRpb25zRm9yVmVoaWNsZS5maW5kKHN0b3AgPT4gc3RvcC5zdG9wX3NlcXVlbmNlID09PSAwKTtcclxuICAgIGlmICghc3RhcnRTdG9wKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBTdG9wIGRpc3RhbmNlcyBjb3VsZCBub3QgYmUgY2FsY3VsYXRlZC5gKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXJ0U3RvcExvY2F0aW9uID0gdHJpcFN0b3BzLmZpbmQoc2wgPT4gc2wuc3RvcF9pZCA9PT0gc3RhcnRTdG9wLnN0b3BfaWQpO1xyXG4gICAgY29uc3Qgc3RvcERpc3RhbmNlcyA9IHN0b3BMb2NhdGlvbnNGb3JWZWhpY2xlLm1hcChzdG9wID0+IHtcclxuICAgICAgICBjb25zdCBzdG9wTG9jYXRpb24gPSB0cmlwU3RvcHMuZmluZChzbCA9PiBzbC5zdG9wX2lkID09PSBzdG9wLnN0b3BfaWQpO1xyXG4gICAgICAgIGlmIChzdG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1N0b3AgPSBjYWxjdWxhdGVEaXN0YW5jZShzdGFydFN0b3BMb2NhdGlvbi5zdG9wX2xhdCwgc3RhcnRTdG9wTG9jYXRpb24uc3RvcF9sb24sIHN0b3BMb2NhdGlvbi5zdG9wX2xhdCwgc3RvcExvY2F0aW9uLnN0b3BfbG9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0b3AsXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VUb1N0b3BcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KS5maWx0ZXIoc3RvcERpc3RhbmNlID0+IHN0b3BEaXN0YW5jZSAhPT0gbnVsbCk7XHJcbiAgICBjb25zdCB2ZWhpY2xlRGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShzdGFydFN0b3BMb2NhdGlvbi5zdG9wX2xhdCwgc3RhcnRTdG9wTG9jYXRpb24uc3RvcF9sb24sIHZlaGljbGUubGF0aXR1ZGUsIHZlaGljbGUubG9uZ2l0dWRlKTtcclxuICAgIHN0b3BEaXN0YW5jZXMucHVzaCh7XHJcbiAgICAgICAgc3RvcDoge1xyXG4gICAgICAgICAgICBzdG9wX2lkOiAndmVoaWNsZScsXHJcbiAgICAgICAgICAgIHN0b3BfbGF0OiB2ZWhpY2xlLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICBzdG9wX2xvbjogdmVoaWNsZS5sb25naXR1ZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc3RhbmNlOiB2ZWhpY2xlRGlzdGFuY2VcclxuICAgIH0pO1xyXG4gICAgc3RvcERpc3RhbmNlcy5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSk7XHJcblxyXG4gICAgbGV0IHZlaGljbGVJbmRleCA9IHN0b3BEaXN0YW5jZXMuZmluZEluZGV4KHN0b3BEaXN0YW5jZSA9PiBzdG9wRGlzdGFuY2Uuc3RvcC5zdG9wX2lkID09PSAndmVoaWNsZScpO1xyXG4gICAgY29uc3QgcHJldmlvdXNTdG9wID0gdmVoaWNsZUluZGV4ID4gMCA/IHN0b3BEaXN0YW5jZXNbdmVoaWNsZUluZGV4IC0gMV0uc3RvcCA6IHtcclxuICAgICAgICBzdG9wX2lkOiBudWxsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV4dFN0b3AgPSB2ZWhpY2xlSW5kZXggPCBzdG9wRGlzdGFuY2VzLmxlbmd0aCAtIDEgPyBzdG9wRGlzdGFuY2VzW3ZlaGljbGVJbmRleCArIDFdLnN0b3AgOiB7XHJcbiAgICAgICAgc3RvcF9pZDogbnVsbFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHByZXZpb3VzU3RvcE5hbWUgPSB0cmlwU3RvcHMuZmluZChzbCA9PiBzbC5zdG9wX2lkID09PSBwcmV2aW91c1N0b3Auc3RvcF9pZCk/LnN0b3BfbmFtZSB8fCAnQXQgZmlyc3Qgc3RvcCc7XHJcbiAgICBjb25zdCBuZXh0U3RvcE5hbWUgPSB0cmlwU3RvcHMuZmluZChzbCA9PiBzbC5zdG9wX2lkID09PSBuZXh0U3RvcC5zdG9wX2lkKT8uc3RvcF9uYW1lIHx8ICdBdCBsYXN0IHN0b3AnO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHNwZWVkOiB2ZWhpY2xlLnNwZWVkLFxyXG4gICAgICAgIHByZXZpb3VzU3RvcE5hbWU6IHByZXZpb3VzU3RvcE5hbWUsXHJcbiAgICAgICAgbmV4dFN0b3BOYW1lOiBuZXh0U3RvcE5hbWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1c3Nlc1Bvc2l0aW9ucyhyb3V0ZUlkOiBzdHJpbmcsIGRhdGE6IGFueSwgdHJpcFN0b3BzOiBhbnksIHN0b3BMb2NhdGlvbnM6IGFueSkge1xyXG4gICAgaWYoIWRhdGEgfHwgIXJvdXRlSWQpIHJldHVybiBbXTtcclxuXHJcbiAgICBjb25zdCBidXNEYXRhID0gZGF0YS5mbGF0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHZlaGljbGUgPT4gdmVoaWNsZS5yb3V0ZV9pZD8udG9TdHJpbmcoKSA9PT0gcm91dGVJZCAmJiB2ZWhpY2xlLnRyaXBfaWQgIT09IG51bGwgJiYgKHZlaGljbGUudHJpcF9pZC5lbmRzV2l0aCgnXzAnKSB8fCB2ZWhpY2xlLnRyaXBfaWQuZW5kc1dpdGgoJ18xJykpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodmVoaWNsZSA9PiAoZ2V0QnVzRGF0YSh2ZWhpY2xlLCB0cmlwU3RvcHMsIHN0b3BMb2NhdGlvbnMpKSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1c0RhdGFcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZURpc3RhbmNlKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcclxuICAgIC8vSGF2ZXJzaW5lIGZvcm11bGFcclxuICAgIGNvbnN0IFIgPSA2MzcxO1xyXG4gICAgY29uc3QgZExhdCA9IChsYXQyIC0gbGF0MSkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgY29uc3QgZExvbiA9IChsb24yIC0gbG9uMSkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgY29uc3QgYSA9IE1hdGguc2luKGRMYXQgLyAyKSAqIE1hdGguc2luKGRMYXQgLyAyKSArIE1hdGguY29zKGxhdDEgKiBNYXRoLlBJIC8gMTgwKSAqIE1hdGguY29zKGxhdDIgKiBNYXRoLlBJIC8gMTgwKSAqIE1hdGguc2luKGRMb24gLyAyKSAqIE1hdGguc2luKGRMb24gLyAyKTtcclxuICAgIGNvbnN0IGMgPSAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoYSksIE1hdGguc3FydCgxIC0gYSkpO1xyXG4gICAgcmV0dXJuIFIgKiBjO1xyXG59Il0sIm5hbWVzIjpbImdldFN0b3BQb3NpdGlvbnMiLCJ0cmlwSWQiLCJ0cmlwU3RvcHMiLCJzdG9wTG9jYXRpb25zIiwic3RvcHMiLCJmaXJzdEdyZWVuIiwidHJpcElkMCIsInRyaXBJZDEiLCJ0cmlwU3RvcHNGb3JJZCIsImZpbHRlciIsInRyaXBTdG9wIiwidHJpcF9pZCIsImZvckVhY2giLCJzdG9wTG9jYXRpb24iLCJmaW5kIiwic3RvcCIsInN0b3BfaWQiLCJwdXNoIiwiaWQiLCJwb3NpdGlvbiIsImxhdCIsInN0b3BfbGF0IiwibG5nIiwic3RvcF9sb24iLCJjb2xvciIsImVuZHNXaXRoIiwiZmluZEluZGV4IiwiZ2V0Um91dGVTaGFwZVBvc2l0aW9ucyIsInNoYXBlSWQiLCJzaGFwZXNEYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJzaGFwZVBvaW50cyIsImZsYXQiLCJzaGFwZSIsInNoYXBlX2lkIiwic29ydCIsImEiLCJiIiwic2hhcGVfcHRfc2VxdWVuY2UiLCJtYXAiLCJwb2ludCIsInNoYXBlX3B0X2xhdCIsInNoYXBlX3B0X2xvbiIsImdldEJ1c0RhdGEiLCJ2ZWhpY2xlIiwiZGF0YSIsImxhYmVsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzdG9wTG9jYXRpb25zRm9yVmVoaWNsZSIsInN0YXJ0U3RvcCIsInN0b3Bfc2VxdWVuY2UiLCJzdGFydFN0b3BMb2NhdGlvbiIsInNsIiwic3RvcERpc3RhbmNlcyIsImRpc3RhbmNlVG9TdG9wIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJkaXN0YW5jZSIsInN0b3BEaXN0YW5jZSIsInZlaGljbGVEaXN0YW5jZSIsInZlaGljbGVJbmRleCIsInByZXZpb3VzU3RvcCIsIm5leHRTdG9wIiwicHJldmlvdXNTdG9wTmFtZSIsInN0b3BfbmFtZSIsIm5leHRTdG9wTmFtZSIsInNwZWVkIiwiZ2V0QnVzc2VzUG9zaXRpb25zIiwicm91dGVJZCIsImJ1c0RhdGEiLCJyb3V0ZV9pZCIsInRvU3RyaW5nIiwibGF0MSIsImxvbjEiLCJsYXQyIiwibG9uMiIsIlIiLCJkTGF0IiwiTWF0aCIsIlBJIiwiZExvbiIsInNpbiIsImNvcyIsImMiLCJhdGFuMiIsInNxcnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/drawingUtil.tsx\n"));

/***/ })

});