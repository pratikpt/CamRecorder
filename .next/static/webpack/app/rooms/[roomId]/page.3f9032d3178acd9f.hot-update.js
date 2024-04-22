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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useRecordingTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRecordingTimer */ \"(app-pages-browser)/./src/app/rooms/[roomId]/useRecordingTimer.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst VideoRecorder = ()=>{\n    _s();\n    const [isPermissionGranted, setPermissionGranted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isRecording, setIsRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stream, setStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [videoChunks, setVideoChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mediaRecorderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { seconds, startTimer, pauseTimer, resetTimer } = (0,_useRecordingTimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (\"MediaRecorder\" in window) {\n            navigator.mediaDevices.getUserMedia({\n                audio: true,\n                video: true\n            }).then((mediaStream)=>{\n                setPermissionGranted(true);\n                let video = videoRef.current;\n                video.srcObject = mediaStream;\n                setStream(mediaStream);\n                video.addEventListener(\"loadedmetadata\", ()=>{\n                    video.play();\n                });\n            }, ()=>{\n                setPermissionGranted(false);\n            });\n        } else {\n            alert(\"Not supported.\");\n        }\n    }, []);\n    const startRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsRecording(true);\n        const media = new MediaRecorder(stream, {\n            mimeType: \"video/webm\"\n        });\n        mediaRecorderRef.current = media;\n        mediaRecorderRef.current.start();\n        startTimer();\n        const videoRecChunks = [];\n        mediaRecorderRef.current.ondataavailable = (event)=>{\n            if (event.data.size > 0) {\n                videoRecChunks.push(event.data);\n            }\n        };\n        setVideoChunks(videoRecChunks);\n    }, [\n        stream,\n        startTimer\n    ]);\n    const pauseRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        var _mediaRecorderRef_current;\n        setIsPaused(true);\n        (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.pause();\n        pauseTimer();\n    }, [\n        pauseTimer\n    ]);\n    const resumeRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        var _mediaRecorderRef_current;\n        setIsPaused(false);\n        (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.resume();\n        startTimer();\n    }, [\n        startTimer\n    ]);\n    const stopRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (stream) {\n            stream.getTracks().forEach((track)=>track.stop());\n            setStream(null);\n            if (videoRef.current) {\n                videoRef.current.srcObject = null;\n            }\n        }\n        setIsRecording(false);\n        resetTimer();\n        if (mediaRecorderRef.current) {\n            var _mediaRecorderRef_current;\n            (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.stop();\n            mediaRecorderRef.current.onstop = ()=>{\n                const videoBlob = new Blob(videoChunks, {\n                    type: \"video/webm\"\n                });\n                const videoURL = URL.createObjectURL(videoBlob);\n                setVideo(videoURL);\n            };\n        }\n    }, [\n        stream,\n        videoChunks,\n        resetTimer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            !video ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center\",\n                children: [\n                    !isPermissionGranted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-red-700 font-bold text-xl\",\n                        children: \"Please grant audio / video permission and reload.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            className: \"h-full w-[890px] rounded-lg\",\n                            ref: videoRef\n                        }, void 0, false, {\n                            fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-3xl px-8 py-2 mt-10 flex items-center justify-center border-indigo-700\",\n                        children: isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pr-4 opacity-60\",\n                                    children: \"Recording\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 9\n                                }, undefined),\n                                isPaused ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: resumeRecord,\n                                    src: \"/play.svg\",\n                                    alt: \"play\",\n                                    className: \"h-9 w-auto cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 10\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: pauseRecord,\n                                    src: \"/pause.svg\",\n                                    alt: \"pause\",\n                                    className: \"h-9 w-auto cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 10\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: stopRecord,\n                                    src: \"/stop.svg\",\n                                    alt: \"stop\",\n                                    className: \"h-9 w-auto cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pl-4 opacity-60\",\n                                    children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatTime)(seconds)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: startRecord,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Record\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-col items-center justify-center border rounded-md p-12 w-[890px] h-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        src: video,\n                        className: \"h-auto w-full\",\n                        controls: true\n                    }, void 0, false, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4  items-center justify-center w-full p-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border rounded-md shadow px-4 py-2\",\n                                onClick: ()=>{\n                                    window.location.reload();\n                                },\n                                children: \"\\uD83E\\uDC60 Record another video\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"border rounded-md shadow px-4 py-2 font-bold\",\n                                download: true,\n                                href: video,\n                                children: \"⬇ Download\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                lineNumber: 139,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]\",\n                    style: {\n                        clipPath: \"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n                lineNumber: 157,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pratikturakhia/Documents/Projects/CamRecorder/src/app/rooms/[roomId]/video-player.tsx\",\n        lineNumber: 93,\n        columnNumber: 3\n    }, undefined);\n};\n_s(VideoRecorder, \"TLsmezNuyXlWCEIaF/e7Wh6JrSE=\", false, function() {\n    return [\n        _useRecordingTimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = VideoRecorder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoRecorder);\nvar _c;\n$RefreshReg$(_c, \"VideoRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbXMvW3Jvb21JZF0vdmlkZW8tcGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV3RTtBQUVwQjtBQUNYO0FBRXpDLE1BQU1PLGdCQUFnQjs7SUFDckIsTUFBTSxDQUFDQyxxQkFBcUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBVTtJQUN0RSxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBTTtJQUMxQyxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQVMsRUFBRTtJQUN6RCxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBTTtJQUN4QyxNQUFNa0IsV0FBV25CLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNb0IsbUJBQW1CcEIsNkNBQU1BLENBQXVCO0lBRXRELE1BQU0sRUFBRXFCLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRSxHQUFHcEIsOERBQWlCQTtJQUV6RUYsZ0RBQVNBLENBQUM7UUFDVCxJQUFJLG1CQUFtQnVCLFFBQVE7WUFDOUJDLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPO2dCQUFNWixPQUFPO1lBQUssR0FBR2EsSUFBSSxDQUNyRUMsQ0FBQUE7Z0JBQ0N2QixxQkFBcUI7Z0JBQ3JCLElBQUlTLFFBQWFFLFNBQVNhLE9BQU87Z0JBQ2pDZixNQUFNZ0IsU0FBUyxHQUFHRjtnQkFDbEJqQixVQUFVaUI7Z0JBQ1ZkLE1BQU1pQixnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQ3hDakIsTUFBTWtCLElBQUk7Z0JBQ1g7WUFDRCxHQUNBO2dCQUNDM0IscUJBQXFCO1lBQ3RCO1FBRUYsT0FBTztZQUNONEIsTUFB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Q0FDZCw4REFBQ2hEO3dCQUFNb0QsS0FBS3BEO3dCQUFPZ0QsV0FBVTt3QkFBZ0JNLFFBQVE7Ozs7OztrQ0FDckQsOERBQUNQO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ087Z0NBQ0FQLFdBQVU7Z0NBQ1ZHLFNBQVM7b0NBQ1IzQyxPQUFPZ0QsUUFBUSxDQUFDQyxNQUFNO2dDQUN2QjswQ0FDQTs7Ozs7OzBDQUdELDhEQUFDQztnQ0FBRVYsV0FBVTtnQ0FBK0NXLFFBQVE7Z0NBQUNDLE1BQU01RDswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9yRiw4REFBQytDO2dCQUNBQyxXQUFVO2dCQUNWYSxlQUFZOzBCQUVaLDRFQUFDZDtvQkFDQUMsV0FBVTtvQkFDVmMsT0FBTzt3QkFDTkMsVUFDQztvQkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLTDtHQW5LTTFFOztRQVVtREYsMERBQWlCQTs7O0tBVnBFRTtBQXFLTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Jvb21zL1tyb29tSWRdL3ZpZGVvLXBsYXllci50c3g/ZDlhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB1c2VSZWNvcmRpbmdUaW1lciBmcm9tICcuL3VzZVJlY29yZGluZ1RpbWVyJztcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICdAL2xpYi91dGlscyc7XG5cbmNvbnN0IFZpZGVvUmVjb3JkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtpc1Blcm1pc3Npb25HcmFudGVkLCBzZXRQZXJtaXNzaW9uR3JhbnRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblx0Y29uc3QgW2lzUmVjb3JkaW5nLCBzZXRJc1JlY29yZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cdGNvbnN0IFtpc1BhdXNlZCwgc2V0SXNQYXVzZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXHRjb25zdCBbc3RyZWFtLCBzZXRTdHJlYW1dID0gdXNlU3RhdGU8YW55PihudWxsKTtcblx0Y29uc3QgW3ZpZGVvQ2h1bmtzLCBzZXRWaWRlb0NodW5rc10gPSB1c2VTdGF0ZTxCbG9iW10+KFtdKTtcblx0Y29uc3QgW3ZpZGVvLCBzZXRWaWRlb10gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuXHRjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcblx0Y29uc3QgbWVkaWFSZWNvcmRlclJlZiA9IHVzZVJlZjxNZWRpYVJlY29yZGVyIHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgeyBzZWNvbmRzLCBzdGFydFRpbWVyLCBwYXVzZVRpbWVyLCByZXNldFRpbWVyIH0gPSB1c2VSZWNvcmRpbmdUaW1lcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCdNZWRpYVJlY29yZGVyJyBpbiB3aW5kb3cpIHtcblx0XHRcdG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUsIHZpZGVvOiB0cnVlIH0pLnRoZW4oXG5cdFx0XHRcdG1lZGlhU3RyZWFtID0+IHtcblx0XHRcdFx0XHRzZXRQZXJtaXNzaW9uR3JhbnRlZCh0cnVlKTtcblx0XHRcdFx0XHRsZXQgdmlkZW86IGFueSA9IHZpZGVvUmVmLmN1cnJlbnQ7XG5cdFx0XHRcdFx0dmlkZW8uc3JjT2JqZWN0ID0gbWVkaWFTdHJlYW07XG5cdFx0XHRcdFx0c2V0U3RyZWFtKG1lZGlhU3RyZWFtKTtcblx0XHRcdFx0XHR2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLnBsYXkoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHNldFBlcm1pc3Npb25HcmFudGVkKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWxlcnQoJ05vdCBzdXBwb3J0ZWQuJyk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0Y29uc3Qgc3RhcnRSZWNvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0c2V0SXNSZWNvcmRpbmcodHJ1ZSk7XG5cdFx0Y29uc3QgbWVkaWEgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIHsgbWltZVR5cGU6ICd2aWRlby93ZWJtJyB9KTtcblx0XHRtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQgPSBtZWRpYTtcblx0XHRtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQuc3RhcnQoKTtcblxuXHRcdHN0YXJ0VGltZXIoKTtcblxuXHRcdGNvbnN0IHZpZGVvUmVjQ2h1bmtzOiBCbG9iW10gPSBbXTtcblxuXHRcdG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudC5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQ6IEJsb2JFdmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmRhdGEuc2l6ZSA+IDApIHtcblx0XHRcdFx0dmlkZW9SZWNDaHVua3MucHVzaChldmVudC5kYXRhKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0c2V0VmlkZW9DaHVua3ModmlkZW9SZWNDaHVua3MpO1xuXHR9LCBbc3RyZWFtLCBzdGFydFRpbWVyXSk7XG5cblx0Y29uc3QgcGF1c2VSZWNvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0c2V0SXNQYXVzZWQodHJ1ZSk7XG5cdFx0bWVkaWFSZWNvcmRlclJlZi5jdXJyZW50Py5wYXVzZSgpO1xuXHRcdHBhdXNlVGltZXIoKTtcblx0fSwgW3BhdXNlVGltZXJdKTtcblxuXHRjb25zdCByZXN1bWVSZWNvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0c2V0SXNQYXVzZWQoZmFsc2UpO1xuXHRcdG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudD8ucmVzdW1lKCk7XG5cdFx0c3RhcnRUaW1lcigpO1xuXHR9LCBbc3RhcnRUaW1lcl0pO1xuXG5cdGNvbnN0IHN0b3BSZWNvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0aWYgKHN0cmVhbSkge1xuXHRcdFx0c3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrOiBNZWRpYVN0cmVhbVRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuXHRcdFx0c2V0U3RyZWFtKG51bGwpO1xuXHRcdFx0aWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcblx0XHRcdFx0dmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzZXRJc1JlY29yZGluZyhmYWxzZSk7XG5cdFx0cmVzZXRUaW1lcigpO1xuXHRcdGlmIChtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQpIHtcblx0XHRcdG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudD8uc3RvcCgpO1xuXHRcdFx0bWVkaWFSZWNvcmRlclJlZi5jdXJyZW50Lm9uc3RvcCA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW9CbG9iID0gbmV3IEJsb2IodmlkZW9DaHVua3MsIHsgdHlwZTogJ3ZpZGVvL3dlYm0nIH0pO1xuXHRcdFx0XHRjb25zdCB2aWRlb1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmlkZW9CbG9iKTtcblx0XHRcdFx0c2V0VmlkZW8odmlkZW9VUkwpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0sIFtzdHJlYW0sIHZpZGVvQ2h1bmtzLCByZXNldFRpbWVyXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHR7IXZpZGVvID8gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdFx0eyFpc1Blcm1pc3Npb25HcmFudGVkICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwIGZvbnQtYm9sZCB0ZXh0LXhsXCI+XG5cdFx0XHRcdFx0XHRcdFBsZWFzZSBncmFudCBhdWRpbyAvIHZpZGVvIHBlcm1pc3Npb24gYW5kIHJlbG9hZC5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdDx2aWRlbyBjbGFzc05hbWU9XCJoLWZ1bGwgdy1bODkwcHhdIHJvdW5kZWQtbGdcIiByZWY9e3ZpZGVvUmVmfT48L3ZpZGVvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtM3hsIHB4LTggcHktMiBtdC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItaW5kaWdvLTcwMFwiPlxuXHRcdFx0XHRcdFx0e2lzUmVjb3JkaW5nID8gKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHItNCBvcGFjaXR5LTYwXCI+UmVjb3JkaW5nPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0e2lzUGF1c2VkID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXN1bWVSZWNvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9wbGF5LnN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cInBsYXlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTkgdy1hdXRvIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17cGF1c2VSZWNvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9wYXVzZS5zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJwYXVzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImgtOSB3LWF1dG8gY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3N0b3BSZWNvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RvcC5zdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwic3RvcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoLTkgdy1hdXRvIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGwtNCBvcGFjaXR5LTYwXCI+e2Zvcm1hdFRpbWUoc2Vjb25kcyl9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXtzdGFydFJlY29yZH0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5SZWNvcmQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlciByb3VuZGVkLW1kIHAtMTIgdy1bODkwcHhdIGgtYXV0b1wiPlxuXHRcdFx0XHRcdDx2aWRlbyBzcmM9e3ZpZGVvfSBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsXCIgY29udHJvbHM+PC92aWRlbz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC03XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHNoYWRvdyBweC00IHB5LTJcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHTwn6GgIFJlY29yZCBhbm90aGVyIHZpZGVvXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHNoYWRvdyBweC00IHB5LTIgZm9udC1ib2xkXCIgZG93bmxvYWQgaHJlZj17dmlkZW99PlxuXHRcdFx0XHRcdFx0XHTirIcgRG93bmxvYWRcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtW2NhbGMoMTAwJS0xM3JlbSldIC16LTEwIHRyYW5zZm9ybS1ncHUgb3ZlcmZsb3ctaGlkZGVuIGJsdXItM3hsIHNtOnRvcC1bY2FsYygxMDAlLTMwcmVtKV1cIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgbGVmdC1bY2FsYyg1MCUrM3JlbSldIGFzcGVjdC1bMTE1NS82NzhdIHctWzM2LjEyNXJlbV0gLXRyYW5zbGF0ZS14LTEvMiBiZy1ncmFkaWVudC10by10ciBmcm9tLVsjZmY4MGI1XSB0by1bIzkwODlmY10gb3BhY2l0eS0zMCBzbTpsZWZ0LVtjYWxjKDUwJSszNnJlbSldIHNtOnctWzcyLjE4NzVyZW1dXCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y2xpcFBhdGg6XG5cdFx0XHRcdFx0XHRcdFwicG9seWdvbig3NC4xJSA0NC4xJSwgMTAwJSA2MS42JSwgOTcuNSUgMjYuOSUsIDg1LjUlIDAuMSUsIDgwLjclIDIlLCA3Mi41JSAzMi41JSwgNjAuMiUgNjIuNCUsIDUyLjQlIDY4LjElLCA0Ny41JSA1OC4zJSwgNDUuMiUgMzQuNSUsIDI3LjUlIDc2LjclLCAwLjElIDY0LjklLCAxNy45JSAxMDAlLCAyNy42JSA3Ni44JSwgNzYuMSUgOTcuNyUsIDc0LjElIDQ0LjElKVwiLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvUmVjb3JkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlY29yZGluZ1RpbWVyIiwiZm9ybWF0VGltZSIsIlZpZGVvUmVjb3JkZXIiLCJpc1Blcm1pc3Npb25HcmFudGVkIiwic2V0UGVybWlzc2lvbkdyYW50ZWQiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwiaXNQYXVzZWQiLCJzZXRJc1BhdXNlZCIsInN0cmVhbSIsInNldFN0cmVhbSIsInZpZGVvQ2h1bmtzIiwic2V0VmlkZW9DaHVua3MiLCJ2aWRlbyIsInNldFZpZGVvIiwidmlkZW9SZWYiLCJtZWRpYVJlY29yZGVyUmVmIiwic2Vjb25kcyIsInN0YXJ0VGltZXIiLCJwYXVzZVRpbWVyIiwicmVzZXRUaW1lciIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsIm1lZGlhU3RyZWFtIiwiY3VycmVudCIsInNyY09iamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5IiwiYWxlcnQiLCJzdGFydFJlY29yZCIsIm1lZGlhIiwiTWVkaWFSZWNvcmRlciIsIm1pbWVUeXBlIiwic3RhcnQiLCJ2aWRlb1JlY0NodW5rcyIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwicGF1c2VSZWNvcmQiLCJwYXVzZSIsInJlc3VtZVJlY29yZCIsInJlc3VtZSIsInN0b3BSZWNvcmQiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwib25zdG9wIiwidmlkZW9CbG9iIiwiQmxvYiIsInR5cGUiLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImltZyIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJjb250cm9scyIsImJ1dHRvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiYSIsImRvd25sb2FkIiwiaHJlZiIsImFyaWEtaGlkZGVuIiwic3R5bGUiLCJjbGlwUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/rooms/[roomId]/video-player.tsx\n"));

/***/ })

});