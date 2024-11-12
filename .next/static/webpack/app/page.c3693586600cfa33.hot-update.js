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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateRoadDistance: () => (/* binding */ calculateRoadDistance),\n/* harmony export */   getBussesPositions: () => (/* binding */ getBussesPositions),\n/* harmony export */   getRouteShapePositions: () => (/* binding */ getRouteShapePositions),\n/* harmony export */   getStopPositions: () => (/* binding */ getStopPositions)\n/* harmony export */ });\nfunction getStopPositions(tripId, tripStops, stopLocations) {\n    if (!tripId) return {\n        stopPositions: [],\n        firstGreen: -1\n    };\n    const tripId0 = tripId + '_0';\n    const tripId1 = tripId + '_1';\n    const stops = [];\n    const tripStopsForId = tripStops.filter((tripStop)=>tripStop.trip_id === tripId0 || tripStop.trip_id === tripId1);\n    tripStopsForId.forEach((tripStop)=>{\n        const stopLocation = stopLocations.find((stop)=>stop.stop_id === tripStop.stop_id);\n        if (stopLocation) {\n            stops.push({\n                id: stopLocation.stop_id,\n                position: {\n                    lat: stopLocation.stop_lat,\n                    lng: stopLocation.stop_lon\n                },\n                color: tripStop.trip_id.endsWith('_0') ? 'red' : 'green'\n            });\n        }\n    });\n    const firstGreen = stops.findIndex((stop)=>stop.color === 'green');\n    return {\n        stopPositions: stops,\n        firstGreen: firstGreen\n    };\n}\nfunction getRouteShapePositions(shapeId, shapesData) {\n    if (!shapesData || !shapesData.length) {\n        console.warn('Shapes data is not available');\n        return [];\n    }\n    const shapePoints = shapesData.flat().filter((shape)=>shape.shape_id === shapeId).sort((a, b)=>a.shape_pt_sequence - b.shape_pt_sequence).map((point)=>({\n            lat: point.shape_pt_lat,\n            lng: point.shape_pt_lon\n        }));\n    return shapePoints;\n}\nfunction getBusData(vehicle, tripStops, stopLocations) {\n    var _tripStops_find, _tripStops_find1;\n    const data = {\n        id: vehicle.label,\n        tripId: vehicle.trip_id,\n        position: {\n            lat: vehicle.latitude,\n            lng: vehicle.longitude\n        },\n        color: vehicle.trip_id.endsWith('_0') ? 'red' : 'green'\n    };\n    const stopLocationsForVehicle = stopLocations.filter((tripStop)=>tripStop.trip_id === vehicle.trip_id);\n    const startStop = stopLocationsForVehicle.find((stop)=>stop.stop_sequence === 0);\n    if (!startStop) {\n        console.warn(\"Stop distances could not be calculated.\");\n        return data;\n    }\n    const startStopLocation = tripStops.find((sl)=>sl.stop_id === startStop.stop_id);\n    const stopDistances = stopLocationsForVehicle.map((stop)=>{\n        const stopLocation = tripStops.find((sl)=>sl.stop_id === stop.stop_id);\n        if (stopLocation) {\n            const distanceToStop = calculateDistance(startStopLocation.stop_lat, startStopLocation.stop_lon, stopLocation.stop_lat, stopLocation.stop_lon);\n            return {\n                stop,\n                distance: distanceToStop\n            };\n        }\n        return null;\n    }).filter((stopDistance)=>stopDistance !== null);\n    const vehicleDistance = calculateDistance(startStopLocation.stop_lat, startStopLocation.stop_lon, vehicle.latitude, vehicle.longitude);\n    stopDistances.push({\n        stop: {\n            stop_id: 'vehicle',\n            stop_lat: vehicle.latitude,\n            stop_lon: vehicle.longitude\n        },\n        distance: vehicleDistance\n    });\n    stopDistances.sort((a, b)=>a.distance - b.distance);\n    let vehicleIndex = stopDistances.findIndex((stopDistance)=>stopDistance.stop.stop_id === 'vehicle');\n    const previousStop = vehicleIndex > 0 ? stopDistances[vehicleIndex - 1].stop : {\n        stop_id: null\n    };\n    const nextStop = vehicleIndex < stopDistances.length - 1 ? stopDistances[vehicleIndex + 1].stop : {\n        stop_id: null\n    };\n    const previousStopName = ((_tripStops_find = tripStops.find((sl)=>sl.stop_id === previousStop.stop_id)) === null || _tripStops_find === void 0 ? void 0 : _tripStops_find.stop_name) || 'At first stop';\n    const nextStopName = ((_tripStops_find1 = tripStops.find((sl)=>sl.stop_id === nextStop.stop_id)) === null || _tripStops_find1 === void 0 ? void 0 : _tripStops_find1.stop_name) || 'At last stop';\n    return {\n        ...data,\n        speed: vehicle.speed,\n        previousStopName: previousStopName,\n        nextStopName: nextStopName\n    };\n}\nfunction getBussesPositions(routeId, data, tripStops, stopLocations) {\n    if (!data || !routeId) return [];\n    const busData = data.flat().filter((vehicle)=>{\n        var _vehicle_route_id;\n        return ((_vehicle_route_id = vehicle.route_id) === null || _vehicle_route_id === void 0 ? void 0 : _vehicle_route_id.toString()) === routeId && vehicle.trip_id !== null && (vehicle.trip_id.endsWith('_0') || vehicle.trip_id.endsWith('_1'));\n    }).map((vehicle)=>getBusData(vehicle, tripStops, stopLocations));\n    return busData;\n}\nfunction calculateDistance(lat1, lon1, lat2, lon2) {\n    //Haversine formula\n    const R = 6371;\n    const dLat = (lat2 - lat1) * Math.PI / 180;\n    const dLon = (lon2 - lon1) * Math.PI / 180;\n    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);\n    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n    return R * c;\n}\nfunction calculateRoadDistance(lat, lng, vehicleTripId, shapesData) {\n    const shapePoints = getRouteShapePositions(vehicleTripId, shapesData);\n    if (!shapePoints) {\n        return null;\n    }\n    let closestDistance = Infinity;\n    let closestIndex = null;\n    let cumulativeDistance = 0;\n    // Find the closest shape point to the vehicle\n    shapePoints.forEach((point, index)=>{\n        const shapeLat = point.shape_pt_lat;\n        const shapeLng = point.shape_pt_lon;\n        const distanceToVehicle = calculateDistance(shapeLat, shapeLng, lat, lng);\n        console.log(distanceToVehicle);\n        if (distanceToVehicle < closestDistance) {\n            closestDistance = distanceToVehicle;\n            closestIndex = index;\n        }\n    });\n    // Calculate cumulative distance up to the closest shape point\n    if (closestIndex !== null) {\n        for(let i = 0; i < closestIndex; i++){\n            const { shape_pt_lat: lat1, shape_pt_lon: lon1 } = shapePoints[i];\n            const { shape_pt_lat: lat2, shape_pt_lon: lon2 } = shapePoints[i + 1];\n            cumulativeDistance += calculateDistance(lat1, lon1, lat2, lon2);\n        }\n    }\n    return cumulativeDistance;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2RyYXdpbmdVdGlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZ0JPLFNBQVNBLGlCQUFpQkMsTUFBYyxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7SUFDckUsSUFBRyxDQUFDRixRQUFRLE9BQU87UUFBRUcsZUFBZSxFQUFFO1FBQUVDLFlBQVksQ0FBQztJQUFFO0lBRXZELE1BQU1DLFVBQVVMLFNBQVM7SUFDekIsTUFBTU0sVUFBVU4sU0FBUztJQUN6QixNQUFNTyxRQUEyQixFQUFFO0lBRW5DLE1BQU1DLGlCQUFpQlAsVUFBVVEsTUFBTSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxPQUFPLEtBQUtOLFdBQVdLLFNBQVNDLE9BQU8sS0FBS0w7SUFFekdFLGVBQWVJLE9BQU8sQ0FBQ0YsQ0FBQUE7UUFDbkIsTUFBTUcsZUFBZVgsY0FBY1ksSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxPQUFPLEtBQUtOLFNBQVNNLE9BQU87UUFDakYsSUFBSUgsY0FBYztZQUNkTixNQUFNVSxJQUFJLENBQUM7Z0JBQ1BDLElBQUlMLGFBQWFHLE9BQU87Z0JBQ3hCRyxVQUFVO29CQUNOQyxLQUFLUCxhQUFhUSxRQUFRO29CQUMxQkMsS0FBS1QsYUFBYVUsUUFBUTtnQkFDOUI7Z0JBQ0FDLE9BQU9kLFNBQVNDLE9BQU8sQ0FBQ2MsUUFBUSxDQUFDLFFBQVEsUUFBUTtZQUNyRDtRQUNKO0lBQ0o7SUFFQSxNQUFNckIsYUFBYUcsTUFBTW1CLFNBQVMsQ0FBQ1gsQ0FBQUEsT0FBUUEsS0FBS1MsS0FBSyxLQUFLO0lBQzFELE9BQU87UUFBRXJCLGVBQWVJO1FBQU9ILFlBQVlBO0lBQVc7QUFDMUQ7QUFFTyxTQUFTdUIsdUJBQXVCQyxPQUFlLEVBQUVDLFVBQVU7SUFDOUQsSUFBSSxDQUFDQSxjQUFjLENBQUNBLFdBQVdDLE1BQU0sRUFBRTtRQUNuQ0MsUUFBUUMsSUFBSSxDQUFDO1FBQ2IsT0FBTyxFQUFFO0lBQ2I7SUFF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QyxJQUFJLEVBQUUsR0FBRzVDLFdBQVcsQ0FBQ2tFLElBQUksRUFBRTtZQUNyRU4sc0JBQXNCbkMsa0JBQWtCZ0IsTUFBTUMsTUFBTUMsTUFBTUM7UUFDOUQ7SUFDSjtJQUVBLE9BQU9nQjtBQUNYIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxoZWxwZXJzXFxkcmF3aW5nVXRpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBNYXBFbGVtZW50RGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgICBsYXQ6IG51bWJlcixcclxuICAgICAgICBsbmc6IG51bWJlclxyXG4gICAgfTtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnVzRWxlbWVudERhdGEgZXh0ZW5kcyBNYXBFbGVtZW50RGF0YSB7XHJcbiAgICBzcGVlZDogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNTdG9wTmFtZTogc3RyaW5nO1xyXG4gICAgbmV4dFN0b3BOYW1lOiBzdHJpbmc7XHJcbiAgICB0cmlwSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3BQb3NpdGlvbnModHJpcElkOiBzdHJpbmcsIHRyaXBTdG9wcywgc3RvcExvY2F0aW9ucyk6IHtzdG9wUG9zaXRpb25zOiBhbnksIGZpcnN0R3JlZW46IG51bWJlcn0ge1xyXG4gICAgaWYoIXRyaXBJZCkgcmV0dXJuIHsgc3RvcFBvc2l0aW9uczogW10sIGZpcnN0R3JlZW46IC0xIH07XHJcblxyXG4gICAgY29uc3QgdHJpcElkMCA9IHRyaXBJZCArICdfMCdcclxuICAgIGNvbnN0IHRyaXBJZDEgPSB0cmlwSWQgKyAnXzEnXHJcbiAgICBjb25zdCBzdG9wcyA6IE1hcEVsZW1lbnREYXRhW10gPSBbXVxyXG5cclxuICAgIGNvbnN0IHRyaXBTdG9wc0ZvcklkID0gdHJpcFN0b3BzLmZpbHRlcih0cmlwU3RvcCA9PiB0cmlwU3RvcC50cmlwX2lkID09PSB0cmlwSWQwIHx8IHRyaXBTdG9wLnRyaXBfaWQgPT09IHRyaXBJZDEpO1xyXG5cclxuICAgIHRyaXBTdG9wc0ZvcklkLmZvckVhY2godHJpcFN0b3AgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3BMb2NhdGlvbiA9IHN0b3BMb2NhdGlvbnMuZmluZChzdG9wID0+IHN0b3Auc3RvcF9pZCA9PT0gdHJpcFN0b3Auc3RvcF9pZCk7XHJcbiAgICAgICAgaWYgKHN0b3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBzdG9wcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBzdG9wTG9jYXRpb24uc3RvcF9pZCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBzdG9wTG9jYXRpb24uc3RvcF9sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBzdG9wTG9jYXRpb24uc3RvcF9sb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJpcFN0b3AudHJpcF9pZC5lbmRzV2l0aCgnXzAnKSA/ICdyZWQnIDogJ2dyZWVuJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaXJzdEdyZWVuID0gc3RvcHMuZmluZEluZGV4KHN0b3AgPT4gc3RvcC5jb2xvciA9PT0gJ2dyZWVuJyk7XHJcbiAgICByZXR1cm4geyBzdG9wUG9zaXRpb25zOiBzdG9wcywgZmlyc3RHcmVlbjogZmlyc3RHcmVlbiB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVTaGFwZVBvc2l0aW9ucyhzaGFwZUlkOiBzdHJpbmcsIHNoYXBlc0RhdGEpIHtcclxuICAgIGlmICghc2hhcGVzRGF0YSB8fCAhc2hhcGVzRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1NoYXBlcyBkYXRhIGlzIG5vdCBhdmFpbGFibGUnKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNoYXBlUG9pbnRzID0gc2hhcGVzRGF0YS5mbGF0KCkuZmlsdGVyKHNoYXBlID0+IHNoYXBlLnNoYXBlX2lkID09PSBzaGFwZUlkKS5zb3J0KChhLCBiKSA9PiBhLnNoYXBlX3B0X3NlcXVlbmNlIC0gYi5zaGFwZV9wdF9zZXF1ZW5jZSkubWFwKHBvaW50ID0+ICh7XHJcbiAgICAgICAgbGF0OiBwb2ludC5zaGFwZV9wdF9sYXQsXHJcbiAgICAgICAgbG5nOiBwb2ludC5zaGFwZV9wdF9sb25cclxuICAgIH0pKTtcclxuICAgIHJldHVybiBzaGFwZVBvaW50c1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCdXNEYXRhKHZlaGljbGU6IGFueSwgdHJpcFN0b3BzOiBhbnksIHN0b3BMb2NhdGlvbnM6IGFueSkgeyAvL3ZlaGljbGUgZmV0Y2hlZCBkaW4gYXBpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGlkOiB2ZWhpY2xlLmxhYmVsLFxyXG4gICAgICAgIHRyaXBJZDogdmVoaWNsZS50cmlwX2lkLFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGxhdDogdmVoaWNsZS5sYXRpdHVkZSxcclxuICAgICAgICAgICAgbG5nOiB2ZWhpY2xlLmxvbmdpdHVkZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IHZlaGljbGUudHJpcF9pZC5lbmRzV2l0aCgnXzAnKSA/ICdyZWQnIDogJ2dyZWVuJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3BMb2NhdGlvbnNGb3JWZWhpY2xlID0gc3RvcExvY2F0aW9ucy5maWx0ZXIodHJpcFN0b3AgPT4gdHJpcFN0b3AudHJpcF9pZCA9PT0gdmVoaWNsZS50cmlwX2lkKTtcclxuICAgIGNvbnN0IHN0YXJ0U3RvcCA9IHN0b3BMb2NhdGlvbnNGb3JWZWhpY2xlLmZpbmQoc3RvcCA9PiBzdG9wLnN0b3Bfc2VxdWVuY2UgPT09IDApO1xyXG4gICAgaWYgKCFzdGFydFN0b3ApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYFN0b3AgZGlzdGFuY2VzIGNvdWxkIG5vdCBiZSBjYWxjdWxhdGVkLmApO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRTdG9wTG9jYXRpb24gPSB0cmlwU3RvcHMuZmluZChzbCA9PiBzbC5zdG9wX2lkID09PSBzdGFydFN0b3Auc3RvcF9pZCk7XHJcbiAgICBjb25zdCBzdG9wRGlzdGFuY2VzID0gc3RvcExvY2F0aW9uc0ZvclZlaGljbGUubWFwKHN0b3AgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3BMb2NhdGlvbiA9IHRyaXBTdG9wcy5maW5kKHNsID0+IHNsLnN0b3BfaWQgPT09IHN0b3Auc3RvcF9pZCk7XHJcbiAgICAgICAgaWYgKHN0b3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVRvU3RvcCA9IGNhbGN1bGF0ZURpc3RhbmNlKHN0YXJ0U3RvcExvY2F0aW9uLnN0b3BfbGF0LCBzdGFydFN0b3BMb2NhdGlvbi5zdG9wX2xvbiwgc3RvcExvY2F0aW9uLnN0b3BfbGF0LCBzdG9wTG9jYXRpb24uc3RvcF9sb24pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcCxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVRvU3RvcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0pLmZpbHRlcihzdG9wRGlzdGFuY2UgPT4gc3RvcERpc3RhbmNlICE9PSBudWxsKTtcclxuICAgIGNvbnN0IHZlaGljbGVEaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKHN0YXJ0U3RvcExvY2F0aW9uLnN0b3BfbGF0LCBzdGFydFN0b3BMb2NhdGlvbi5zdG9wX2xvbiwgdmVoaWNsZS5sYXRpdHVkZSwgdmVoaWNsZS5sb25naXR1ZGUpO1xyXG4gICAgc3RvcERpc3RhbmNlcy5wdXNoKHtcclxuICAgICAgICBzdG9wOiB7XHJcbiAgICAgICAgICAgIHN0b3BfaWQ6ICd2ZWhpY2xlJyxcclxuICAgICAgICAgICAgc3RvcF9sYXQ6IHZlaGljbGUubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIHN0b3BfbG9uOiB2ZWhpY2xlLmxvbmdpdHVkZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzdGFuY2U6IHZlaGljbGVEaXN0YW5jZVxyXG4gICAgfSk7XHJcbiAgICBzdG9wRGlzdGFuY2VzLnNvcnQoKGEsIGIpID0+IGEuZGlzdGFuY2UgLSBiLmRpc3RhbmNlKTtcclxuXHJcbiAgICBsZXQgdmVoaWNsZUluZGV4ID0gc3RvcERpc3RhbmNlcy5maW5kSW5kZXgoc3RvcERpc3RhbmNlID0+IHN0b3BEaXN0YW5jZS5zdG9wLnN0b3BfaWQgPT09ICd2ZWhpY2xlJyk7XHJcbiAgICBjb25zdCBwcmV2aW91c1N0b3AgPSB2ZWhpY2xlSW5kZXggPiAwID8gc3RvcERpc3RhbmNlc1t2ZWhpY2xlSW5kZXggLSAxXS5zdG9wIDoge1xyXG4gICAgICAgIHN0b3BfaWQ6IG51bGxcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0U3RvcCA9IHZlaGljbGVJbmRleCA8IHN0b3BEaXN0YW5jZXMubGVuZ3RoIC0gMSA/IHN0b3BEaXN0YW5jZXNbdmVoaWNsZUluZGV4ICsgMV0uc3RvcCA6IHtcclxuICAgICAgICBzdG9wX2lkOiBudWxsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJldmlvdXNTdG9wTmFtZSA9IHRyaXBTdG9wcy5maW5kKHNsID0+IHNsLnN0b3BfaWQgPT09IHByZXZpb3VzU3RvcC5zdG9wX2lkKT8uc3RvcF9uYW1lIHx8ICdBdCBmaXJzdCBzdG9wJztcclxuICAgIGNvbnN0IG5leHRTdG9wTmFtZSA9IHRyaXBTdG9wcy5maW5kKHNsID0+IHNsLnN0b3BfaWQgPT09IG5leHRTdG9wLnN0b3BfaWQpPy5zdG9wX25hbWUgfHwgJ0F0IGxhc3Qgc3RvcCc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgc3BlZWQ6IHZlaGljbGUuc3BlZWQsXHJcbiAgICAgICAgcHJldmlvdXNTdG9wTmFtZTogcHJldmlvdXNTdG9wTmFtZSxcclxuICAgICAgICBuZXh0U3RvcE5hbWU6IG5leHRTdG9wTmFtZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVzc2VzUG9zaXRpb25zKHJvdXRlSWQ6IHN0cmluZywgZGF0YTogYW55LCB0cmlwU3RvcHM6IGFueSwgc3RvcExvY2F0aW9uczogYW55KSB7XHJcbiAgICBpZighZGF0YSB8fCAhcm91dGVJZCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IGJ1c0RhdGEgPSBkYXRhLmZsYXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodmVoaWNsZSA9PiB2ZWhpY2xlLnJvdXRlX2lkPy50b1N0cmluZygpID09PSByb3V0ZUlkICYmIHZlaGljbGUudHJpcF9pZCAhPT0gbnVsbCAmJiAodmVoaWNsZS50cmlwX2lkLmVuZHNXaXRoKCdfMCcpIHx8IHZlaGljbGUudHJpcF9pZC5lbmRzV2l0aCgnXzEnKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2ZWhpY2xlID0+IChnZXRCdXNEYXRhKHZlaGljbGUsIHRyaXBTdG9wcywgc3RvcExvY2F0aW9ucykpKTtcclxuXHJcbiAgICByZXR1cm4gYnVzRGF0YVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlRGlzdGFuY2UobGF0MSwgbG9uMSwgbGF0MiwgbG9uMikge1xyXG4gICAgLy9IYXZlcnNpbmUgZm9ybXVsYVxyXG4gICAgY29uc3QgUiA9IDYzNzE7XHJcbiAgICBjb25zdCBkTGF0ID0gKGxhdDIgLSBsYXQxKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICBjb25zdCBkTG9uID0gKGxvbjIgLSBsb24xKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICBjb25zdCBhID0gTWF0aC5zaW4oZExhdCAvIDIpICogTWF0aC5zaW4oZExhdCAvIDIpICsgTWF0aC5jb3MobGF0MSAqIE1hdGguUEkgLyAxODApICogTWF0aC5jb3MobGF0MiAqIE1hdGguUEkgLyAxODApICogTWF0aC5zaW4oZExvbiAvIDIpICogTWF0aC5zaW4oZExvbiAvIDIpO1xyXG4gICAgY29uc3QgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEgLSBhKSk7XHJcbiAgICByZXR1cm4gUiAqIGM7XHJcbn1cclxuXHJcbnR5cGUgU2hhcGVQb2ludCA9IHtcclxuICAgIHNoYXBlX3B0X2xhdDogbnVtYmVyO1xyXG4gICAgc2hhcGVfcHRfbG9uOiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUm9hZERpc3RhbmNlKGxhdCwgbG5nLCB2ZWhpY2xlVHJpcElkLCBzaGFwZXNEYXRhKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBjb25zdCBzaGFwZVBvaW50cyA9IGdldFJvdXRlU2hhcGVQb3NpdGlvbnModmVoaWNsZVRyaXBJZCwgc2hhcGVzRGF0YSk7XHJcbiAgICBpZiAoIXNoYXBlUG9pbnRzKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IGNsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG4gICAgbGV0IGNsb3Nlc3RJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBsZXQgY3VtdWxhdGl2ZURpc3RhbmNlID0gMDtcclxuICBcclxuICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3Qgc2hhcGUgcG9pbnQgdG8gdGhlIHZlaGljbGVcclxuICAgIHNoYXBlUG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNoYXBlTGF0ID0gcG9pbnQuc2hhcGVfcHRfbGF0O1xyXG4gICAgICAgIGNvbnN0IHNoYXBlTG5nID0gcG9pbnQuc2hhcGVfcHRfbG9uO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9WZWhpY2xlID0gY2FsY3VsYXRlRGlzdGFuY2Uoc2hhcGVMYXQsIHNoYXBlTG5nLCBsYXQsIGxuZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGlzdGFuY2VUb1ZlaGljbGUpXHJcblxyXG4gICAgICAgIGlmIChkaXN0YW5jZVRvVmVoaWNsZSA8IGNsb3Nlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICBjbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZVRvVmVoaWNsZTtcclxuICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBDYWxjdWxhdGUgY3VtdWxhdGl2ZSBkaXN0YW5jZSB1cCB0byB0aGUgY2xvc2VzdCBzaGFwZSBwb2ludFxyXG4gICAgaWYgKGNsb3Nlc3RJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xvc2VzdEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgeyBzaGFwZV9wdF9sYXQ6IGxhdDEsIHNoYXBlX3B0X2xvbjogbG9uMSB9ID0gc2hhcGVQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhcGVfcHRfbGF0OiBsYXQyLCBzaGFwZV9wdF9sb246IGxvbjIgfSA9IHNoYXBlUG9pbnRzW2kgKyAxXTtcclxuICAgICAgICAgICAgY3VtdWxhdGl2ZURpc3RhbmNlICs9IGNhbGN1bGF0ZURpc3RhbmNlKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjdW11bGF0aXZlRGlzdGFuY2U7XHJcbn0iXSwibmFtZXMiOlsiZ2V0U3RvcFBvc2l0aW9ucyIsInRyaXBJZCIsInRyaXBTdG9wcyIsInN0b3BMb2NhdGlvbnMiLCJzdG9wUG9zaXRpb25zIiwiZmlyc3RHcmVlbiIsInRyaXBJZDAiLCJ0cmlwSWQxIiwic3RvcHMiLCJ0cmlwU3RvcHNGb3JJZCIsImZpbHRlciIsInRyaXBTdG9wIiwidHJpcF9pZCIsImZvckVhY2giLCJzdG9wTG9jYXRpb24iLCJmaW5kIiwic3RvcCIsInN0b3BfaWQiLCJwdXNoIiwiaWQiLCJwb3NpdGlvbiIsImxhdCIsInN0b3BfbGF0IiwibG5nIiwic3RvcF9sb24iLCJjb2xvciIsImVuZHNXaXRoIiwiZmluZEluZGV4IiwiZ2V0Um91dGVTaGFwZVBvc2l0aW9ucyIsInNoYXBlSWQiLCJzaGFwZXNEYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJzaGFwZVBvaW50cyIsImZsYXQiLCJzaGFwZSIsInNoYXBlX2lkIiwic29ydCIsImEiLCJiIiwic2hhcGVfcHRfc2VxdWVuY2UiLCJtYXAiLCJwb2ludCIsInNoYXBlX3B0X2xhdCIsInNoYXBlX3B0X2xvbiIsImdldEJ1c0RhdGEiLCJ2ZWhpY2xlIiwiZGF0YSIsImxhYmVsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzdG9wTG9jYXRpb25zRm9yVmVoaWNsZSIsInN0YXJ0U3RvcCIsInN0b3Bfc2VxdWVuY2UiLCJzdGFydFN0b3BMb2NhdGlvbiIsInNsIiwic3RvcERpc3RhbmNlcyIsImRpc3RhbmNlVG9TdG9wIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJkaXN0YW5jZSIsInN0b3BEaXN0YW5jZSIsInZlaGljbGVEaXN0YW5jZSIsInZlaGljbGVJbmRleCIsInByZXZpb3VzU3RvcCIsIm5leHRTdG9wIiwicHJldmlvdXNTdG9wTmFtZSIsInN0b3BfbmFtZSIsIm5leHRTdG9wTmFtZSIsInNwZWVkIiwiZ2V0QnVzc2VzUG9zaXRpb25zIiwicm91dGVJZCIsImJ1c0RhdGEiLCJyb3V0ZV9pZCIsInRvU3RyaW5nIiwibGF0MSIsImxvbjEiLCJsYXQyIiwibG9uMiIsIlIiLCJkTGF0IiwiTWF0aCIsIlBJIiwiZExvbiIsInNpbiIsImNvcyIsImMiLCJhdGFuMiIsInNxcnQiLCJjYWxjdWxhdGVSb2FkRGlzdGFuY2UiLCJ2ZWhpY2xlVHJpcElkIiwiY2xvc2VzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJjbG9zZXN0SW5kZXgiLCJjdW11bGF0aXZlRGlzdGFuY2UiLCJpbmRleCIsInNoYXBlTGF0Iiwic2hhcGVMbmciLCJkaXN0YW5jZVRvVmVoaWNsZSIsImxvZyIsImkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/drawingUtil.tsx\n"));

/***/ })

});