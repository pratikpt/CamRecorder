"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/rooms/[roomId]/page",{

/***/ "(app-pages-browser)/./src/app/rooms/[roomId]/video-player.tsx":
/*!*************************************************!*\
  !*** ./src/app/rooms/[roomId]/video-player.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useRecordingTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRecordingTimer */ \"(app-pages-browser)/./src/app/rooms/[roomId]/useRecordingTimer.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst VideoRecorder = ()=>{\n    _s();\n    const [isPermissionGranted, setPermissionGranted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isRecording, setIsRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stream, setStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [videoChunks, setVideoChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mediaRecorderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { seconds, startTimer, pauseTimer, resetTimer } = (0,_useRecordingTimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (\"MediaRecorder\" in window) {\n            navigator.mediaDevices.getUserMedia({\n                audio: true,\n                video: true\n            }).then((mediaStream)=>{\n                setPermissionGranted(true);\n                let video = videoRef.current;\n                video.srcObject = mediaStream;\n                setStream(mediaStream);\n                video.addEventListener(\"loadedmetadata\", ()=>{\n                    video.play();\n                });\n            }, ()=>{\n                setPermissionGranted(false);\n            });\n        } else {\n            alert(\"Not supported.\");\n        }\n    }, []);\n    const startRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsRecording(true);\n        const media = new MediaRecorder(stream, {\n            mimeType: \"video/webm\"\n        });\n        mediaRecorderRef.current = media;\n        mediaRecorderRef.current.start();\n        startTimer();\n        const videoRecChunks = [];\n        mediaRecorderRef.current.ondataavailable = (event)=>{\n            if (event.data.size > 0) {\n                videoRecChunks.push(event.data);\n            }\n        };\n        setVideoChunks(videoRecChunks);\n    }, [\n        stream,\n        startTimer\n    ]);\n    const pauseRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        var _mediaRecorderRef_current;\n        setIsPaused(true);\n        (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.pause();\n        pauseTimer();\n    }, [\n        pauseTimer\n    ]);\n    const resumeRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        var _mediaRecorderRef_current;\n        setIsPaused(false);\n        (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.resume();\n        startTimer();\n    }, [\n        startTimer\n    ]);\n    const stopRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (stream) {\n            stream.getTracks().forEach((track)=>track.stop());\n            setStream(null);\n            if (videoRef.current) {\n                videoRef.current.srcObject = null;\n            }\n        }\n        setIsRecording(false);\n        resetTimer();\n        if (mediaRecorderRef.current) {\n            var _mediaRecorderRef_current;\n            (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.stop();\n            mediaRecorderRef.current.onstop = ()=>{\n                const videoBlob = new Blob(videoChunks, {\n                    type: \"video/webm\"\n                });\n                const videoURL = URL.createObjectURL(videoBlob);\n                setVideo(videoURL);\n            };\n        }\n    }, [\n        stream,\n        videoChunks,\n        resetTimer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            !video ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center\",\n                children: [\n                    !isPermissionGranted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-red-700 font-bold text-xl\",\n                        children: \"Please grant audio / video permission and reload.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            className: \"h-full w-[890px] rounded-lg\",\n                            ref: videoRef\n                        }, void 0, false, {\n                            fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-3xl px-8 py-2 mt-10 flex items-center justify-center border-indigo-700\",\n                        children: isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-4 opacity-60\",\n                                    children: \"Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 9\n                                }, undefined),\n                                isPaused ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: resumeRecord,\n                                    src: \"/play.svg\",\n                                    alt: \"play\",\n                                    className: \"h-9 w-auto cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 10\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: pauseRecord,\n                                    src: \"/pause.svg\",\n                                    alt: \"pause\",\n                                    className: \"h-9 w-auto cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 10\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: stopRecord,\n                                    src: \"/stop.svg\",\n                                    alt: \"stop\",\n                                    className: \"h-9 w-auto cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pl-4 opacity-60\",\n                                    children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatTime)(seconds)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: startRecord,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex text-center border-l-2 text-4xl font-extralight\",\n                                children: \"Record\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-col items-center justify-center border rounded-md p-12 w-[890px] h-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        src: video,\n                        className: \"h-auto w-full\",\n                        controls: true\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4  items-center justify-center w-full p-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border rounded-md shadow px-4 py-2\",\n                                onClick: ()=>{\n                                    window.location.reload();\n                                },\n                                children: \"\\uD83E\\uDC60 Record another video\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"border rounded-md shadow px-4 py-2 font-bold\",\n                                download: true,\n                                href: video,\n                                children: \"⬇ Download\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                lineNumber: 139,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]\",\n                    style: {\n                        clipPath: \"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                lineNumber: 157,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n        lineNumber: 93,\n        columnNumber: 3\n    }, undefined);\n};\n_s(VideoRecorder, \"TLsmezNuyXlWCEIaF/e7Wh6JrSE=\", false, function() {\n    return [\n        _useRecordingTimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = VideoRecorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoRecorder);\nvar _c;\n$RefreshReg$(_c, \"VideoRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbXMvW3Jvb21JZF0vdmlkZW8tcGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV3RTtBQUVwQjtBQUNYO0FBRXpDLE1BQU1PLGdCQUFnQjs7SUFDckIsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBVTtJQUN0RSxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBTTtJQUMxQyxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQVMsRUFBRTtJQUN6RCxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBTTtJQUN4QyxNQUFNa0IsV0FBV25CLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNb0IsbUJBQW1CcEIsNkNBQU1BLENBQXVCO0lBRXRELE1BQU0sRUFBRXFCLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRSxHQUFHcEIsOERBQWlCQTtJQUV6RUYsZ0RBQVNBLENBQUM7UUFDVCxJQUFJLG1CQUFtQnVCLFFBQVE7WUFDOUJDLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPO2dCQUFNWixPQUFPO1lBQUssR0FBR2EsSUFBSSxDQUNyRUMsQ0FBQUE7Z0JBQ0N2QixxQkFBcUI7Z0JBQ3JCLElBQUlTLFFBQWFFLFNBQVNhLE9BQU87Z0JBQ2pDZixNQUFNZ0IsU0FBUyxHQUFHRjtnQkFDbEJqQixVQUFVaUI7Z0JBQ1ZkLE1BQU1pQixnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQ3hDakIsTUFBTWtCLElBQUk7Z0JBQ1g7WUFDRCxHQUNBO2dCQUNDM0IscUJBQXFCO1lBQ3RCO1FBRUYsT0FBTztZQUNONEIsTUFB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a0NBQ2QsOERBQUNoRDt3QkFBTW9ELEtBQUtwRDt3QkFBT2dELFdBQVU7d0JBQWdCTSxRQUFROzs7Ozs7a0NBQ3JELDhEQUFDUDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNPO2dDQUNBUCxXQUFVO2dDQUNWRyxTQUFTO29DQUNSM0MsT0FBT2dELFFBQVEsQ0FBQ0MsTUFBTTtnQ0FDdkI7MENBQ0E7Ozs7OzswQ0FHRCw4REFBQ0M7Z0NBQUVWLFdBQVU7Z0NBQStDVyxRQUFRO2dDQUFDQyxNQUFNNUQ7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPckYsOERBQUMrQztnQkFDQUMsV0FBVTtnQkFDVmEsZUFBWTswQkFFWiw0RUFBQ2Q7b0JBQ0FDLFdBQVU7b0JBQ1ZjLE9BQU87d0JBQ05DLFVBQ0M7b0JBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0w7R0FuS00xRTs7UUFVbURGLDBEQUFpQkE7OztLQVZwRUU7QUFxS04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yb29tcy9bcm9vbUlkXS92aWRlby1wbGF5ZXIudHN4P2Q5YWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdXNlUmVjb3JkaW5nVGltZXIgZnJvbSAnLi91c2VSZWNvcmRpbmdUaW1lcic7XG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuXG5jb25zdCBWaWRlb1JlY29yZGVyID0gKCkgPT4ge1xuXHRjb25zdCBbaXNQZXJtaXNzaW9uR3JhbnRlZCwgc2V0UGVybWlzc2lvbkdyYW50ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cdGNvbnN0IFtpc1JlY29yZGluZywgc2V0SXNSZWNvcmRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXHRjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblx0Y29uc3QgW3N0cmVhbSwgc2V0U3RyZWFtXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cdGNvbnN0IFt2aWRlb0NodW5rcywgc2V0VmlkZW9DaHVua3NdID0gdXNlU3RhdGU8QmxvYltdPihbXSk7XG5cdGNvbnN0IFt2aWRlbywgc2V0VmlkZW9dID0gdXNlU3RhdGU8YW55PihudWxsKTtcblx0Y29uc3QgdmlkZW9SZWYgPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IG1lZGlhUmVjb3JkZXJSZWYgPSB1c2VSZWY8TWVkaWFSZWNvcmRlciB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IHsgc2Vjb25kcywgc3RhcnRUaW1lciwgcGF1c2VUaW1lciwgcmVzZXRUaW1lciB9ID0gdXNlUmVjb3JkaW5nVGltZXIoKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICgnTWVkaWFSZWNvcmRlcicgaW4gd2luZG93KSB7XG5cdFx0XHRuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlLCB2aWRlbzogdHJ1ZSB9KS50aGVuKFxuXHRcdFx0XHRtZWRpYVN0cmVhbSA9PiB7XG5cdFx0XHRcdFx0c2V0UGVybWlzc2lvbkdyYW50ZWQodHJ1ZSk7XG5cdFx0XHRcdFx0bGV0IHZpZGVvOiBhbnkgPSB2aWRlb1JlZi5jdXJyZW50O1xuXHRcdFx0XHRcdHZpZGVvLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtO1xuXHRcdFx0XHRcdHNldFN0cmVhbShtZWRpYVN0cmVhbSk7XG5cdFx0XHRcdFx0dmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby5wbGF5KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRzZXRQZXJtaXNzaW9uR3JhbnRlZChmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFsZXJ0KCdOb3Qgc3VwcG9ydGVkLicpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdGNvbnN0IHN0YXJ0UmVjb3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdHNldElzUmVjb3JkaW5nKHRydWUpO1xuXHRcdGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtLCB7IG1pbWVUeXBlOiAndmlkZW8vd2VibScgfSk7XG5cdFx0bWVkaWFSZWNvcmRlclJlZi5jdXJyZW50ID0gbWVkaWE7XG5cdFx0bWVkaWFSZWNvcmRlclJlZi5jdXJyZW50LnN0YXJ0KCk7XG5cblx0XHRzdGFydFRpbWVyKCk7XG5cblx0XHRjb25zdCB2aWRlb1JlY0NodW5rczogQmxvYltdID0gW107XG5cblx0XHRtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50OiBCbG9iRXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5kYXRhLnNpemUgPiAwKSB7XG5cdFx0XHRcdHZpZGVvUmVjQ2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHNldFZpZGVvQ2h1bmtzKHZpZGVvUmVjQ2h1bmtzKTtcblx0fSwgW3N0cmVhbSwgc3RhcnRUaW1lcl0pO1xuXG5cdGNvbnN0IHBhdXNlUmVjb3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdHNldElzUGF1c2VkKHRydWUpO1xuXHRcdG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudD8ucGF1c2UoKTtcblx0XHRwYXVzZVRpbWVyKCk7XG5cdH0sIFtwYXVzZVRpbWVyXSk7XG5cblx0Y29uc3QgcmVzdW1lUmVjb3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdHNldElzUGF1c2VkKGZhbHNlKTtcblx0XHRtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQ/LnJlc3VtZSgpO1xuXHRcdHN0YXJ0VGltZXIoKTtcblx0fSwgW3N0YXJ0VGltZXJdKTtcblxuXHRjb25zdCBzdG9wUmVjb3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdGlmIChzdHJlYW0pIHtcblx0XHRcdHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjazogTWVkaWFTdHJlYW1UcmFjaykgPT4gdHJhY2suc3RvcCgpKTtcblx0XHRcdHNldFN0cmVhbShudWxsKTtcblx0XHRcdGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XG5cdFx0XHRcdHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuXHRcdHJlc2V0VGltZXIoKTtcblx0XHRpZiAobWVkaWFSZWNvcmRlclJlZi5jdXJyZW50KSB7XG5cdFx0XHRtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0b3AoKTtcblx0XHRcdG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudC5vbnN0b3AgPSAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvQmxvYiA9IG5ldyBCbG9iKHZpZGVvQ2h1bmtzLCB7IHR5cGU6ICd2aWRlby93ZWJtJyB9KTtcblx0XHRcdFx0Y29uc3QgdmlkZW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHZpZGVvQmxvYik7XG5cdFx0XHRcdHNldFZpZGVvKHZpZGVvVVJMKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9LCBbc3RyZWFtLCB2aWRlb0NodW5rcywgcmVzZXRUaW1lcl0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0eyF2aWRlbyA/IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0XHRcdHshaXNQZXJtaXNzaW9uR3JhbnRlZCAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTcwMCBmb250LWJvbGQgdGV4dC14bFwiPlxuXHRcdFx0XHRcdFx0XHRQbGVhc2UgZ3JhbnQgYXVkaW8gLyB2aWRlbyBwZXJtaXNzaW9uIGFuZCByZWxvYWQuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dmlkZW8gY2xhc3NOYW1lPVwiaC1mdWxsIHctWzg5MHB4XSByb3VuZGVkLWxnXCIgcmVmPXt2aWRlb1JlZn0+PC92aWRlbz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLTN4bCBweC04IHB5LTIgbXQtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWluZGlnby03MDBcIj5cblx0XHRcdFx0XHRcdHtpc1JlY29yZGluZyA/IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByLTQgb3BhY2l0eS02MFwiPlJlY29yZGluZzwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtpc1BhdXNlZCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17cmVzdW1lUmVjb3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvcGxheS5zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJwbGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaC05IHctYXV0byBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3BhdXNlUmVjb3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvcGF1c2Uuc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwicGF1c2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTkgdy1hdXRvIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtzdG9wUmVjb3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0b3Auc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cInN0b3BcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaC05IHctYXV0byBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsLTQgb3BhY2l0eS02MFwiPntmb3JtYXRUaW1lKHNlY29uZHMpfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17c3RhcnRSZWNvcmR9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggdGV4dC1jZW50ZXIgYm9yZGVyLWwtMiB0ZXh0LTR4bCBmb250LWV4dHJhbGlnaHRcIj5SZWNvcmQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlciByb3VuZGVkLW1kIHAtMTIgdy1bODkwcHhdIGgtYXV0b1wiPlxuXHRcdFx0XHRcdDx2aWRlbyBzcmM9e3ZpZGVvfSBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsXCIgY29udHJvbHM+PC92aWRlbz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC03XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHNoYWRvdyBweC00IHB5LTJcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHTwn6GgIFJlY29yZCBhbm90aGVyIHZpZGVvXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHNoYWRvdyBweC00IHB5LTIgZm9udC1ib2xkXCIgZG93bmxvYWQgaHJlZj17dmlkZW99PlxuXHRcdFx0XHRcdFx0XHTirIcgRG93bmxvYWRcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtW2NhbGMoMTAwJS0xM3JlbSldIC16LTEwIHRyYW5zZm9ybS1ncHUgb3ZlcmZsb3ctaGlkZGVuIGJsdXItM3hsIHNtOnRvcC1bY2FsYygxMDAlLTMwcmVtKV1cIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgbGVmdC1bY2FsYyg1MCUrM3JlbSldIGFzcGVjdC1bMTE1NS82NzhdIHctWzM2LjEyNXJlbV0gLXRyYW5zbGF0ZS14LTEvMiBiZy1ncmFkaWVudC10by10ciBmcm9tLVsjZmY4MGI1XSB0by1bIzkwODlmY10gb3BhY2l0eS0zMCBzbTpsZWZ0LVtjYWxjKDUwJSszNnJlbSldIHNtOnctWzcyLjE4NzVyZW1dXCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y2xpcFBhdGg6XG5cdFx0XHRcdFx0XHRcdFwicG9seWdvbig3NC4xJSA0NC4xJSwgMTAwJSA2MS42JSwgOTcuNSUgMjYuOSUsIDg1LjUlIDAuMSUsIDgwLjclIDIlLCA3Mi41JSAzMi41JSwgNjAuMiUgNjIuNCUsIDUyLjQlIDY4LjElLCA0Ny41JSA1OC4zJSwgNDUuMiUgMzQuNSUsIDI3LjUlIDc2LjclLCAwLjElIDY0LjklLCAxNy45JSAxMDAlLCAyNy42JSA3Ni44JSwgNzYuMSUgOTcuNyUsIDc0LjElIDQ0LjElKVwiLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvUmVjb3JkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlY29yZGluZ1RpbWVyIiwiZm9ybWF0VGltZSIsIlZpZGVvUmVjb3JkZXIiLCJpc1Blcm1pc3Npb25HcmFudGVkIiwic2V0UGVybWlzc2lvbkdyYW50ZWQiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwiaXNQYXVzZWQiLCJzZXRJc1BhdXNlZCIsInN0cmVhbSIsInNldFN0cmVhbSIsInZpZGVvQ2h1bmtzIiwic2V0VmlkZW9DaHVua3MiLCJ2aWRlbyIsInNldFZpZGVvIiwidmlkZW9SZWYiLCJtZWRpYVJlY29yZGVyUmVmIiwic2Vjb25kcyIsInN0YXJ0VGltZXIiLCJwYXVzZVRpbWVyIiwicmVzZXRUaW1lciIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsIm1lZGlhU3RyZWFtIiwiY3VycmVudCIsInNyY09iamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5IiwiYWxlcnQiLCJzdGFydFJlY29yZCIsIm1lZGlhIiwiTWVkaWFSZWNvcmRlciIsIm1pbWVUeXBlIiwic3RhcnQiLCJ2aWRlb1JlY0NodW5rcyIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwicGF1c2VSZWNvcmQiLCJwYXVzZSIsInJlc3VtZVJlY29yZCIsInJlc3VtZSIsInN0b3BSZWNvcmQiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwib25zdG9wIiwidmlkZW9CbG9iIiwiQmxvYiIsInR5cGUiLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImltZyIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJjb250cm9scyIsImJ1dHRvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiYSIsImRvd25sb2FkIiwiaHJlZiIsImFyaWEtaGlkZGVuIiwic3R5bGUiLCJjbGlwUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/rooms/[roomId]/video-player.tsx\n"));

/***/ })

});