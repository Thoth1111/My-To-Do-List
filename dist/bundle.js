/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  background-color: #d3d3d3;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  margin-top: 80px;\\r\\n  background-color: whitesmoke;\\r\\n  border: 3px solid darkgray;\\r\\n  box-shadow: 2px 2px darkgray;\\r\\n  border-radius: 8px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n#top {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 97%;\\r\\n  padding: 0 8px;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n#refresh-img {\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n#publish {\\r\\n  width: 97%;\\r\\n  height: 60px;\\r\\n  border: 2px solid #d3d3d3;\\r\\n  padding: 12px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.add-input {\\r\\n  background-color: whitesmoke;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-style: italic;\\r\\n  width: 50%;\\r\\n  height: 40px;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.entry {\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  width: 98%;\\r\\n  height: 40px;\\r\\n  padding: 8px;\\r\\n  border-bottom: 1px solid #d3d3d3;\\r\\n}\\r\\n\\r\\n.boxes {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.detail {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  width: 600px;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.detail.done {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.trash-icon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.trash-icon.active {\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  left: 90px;\\r\\n}\\r\\n\\r\\n#clear-done {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  color: gray;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_refresh_cw_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/refresh-cw.svg */ \"./src/images/refresh-cw.svg\");\n/* harmony import */ var _images_corner_down_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/corner-down-left.svg */ \"./src/images/corner-down-left.svg\");\n/* harmony import */ var _images_more_vertical_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/more-vertical.svg */ \"./src/images/more-vertical.svg\");\n/* harmony import */ var _images_trash_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/trash-2.svg */ \"./src/images/trash-2.svg\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.refreshImg.src = _images_refresh_cw_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.enterImg.src = _images_corner_down_left_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.refreshDiv.appendChild(_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.refreshImg);\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.enterDiv.appendChild(_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.enterImg);\r\n\r\nfunction Options(items) {\r\n  items.forEach((n) => {\r\n    n.addEventListener('click', () => {\r\n      const remover = n.previousElementSibling;\r\n      remover.classList.toggle('active');\r\n    });\r\n  });\r\n}\r\n\r\nclass Manager {\r\n  constructor() {\r\n    this.toDoList = _modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.toDoList;\r\n  }\r\n\r\n  listAddition() {\r\n    if (!this.toDoList) {\r\n      this.toDoList = [];\r\n    }\r\n    const entry = {\r\n      description: _modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.addInput.value,\r\n      index: this.toDoList.length,\r\n      complete: false,\r\n    };\r\n    this.toDoList = [...this.toDoList, entry];\r\n    localStorage.setItem('compiled', JSON.stringify(this.toDoList));\r\n    this.listRender();\r\n  }\r\n\r\n  listRender() {\r\n    let lists = '';    \r\n    const sortedList = (0,_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.listSort)(this.toDoList);\r\n    sortedList.forEach((entry) => {\r\n      \r\n      let done;\r\n      let checked;\r\n      if(entry.complete === true) {\r\n        done = 'done';\r\n        checked = 'checked'\r\n      } else {\r\n        done = '';\r\n        checked = '';\r\n      }\r\n\r\n      lists\r\n      += `<div class=\"entry\">\r\n        <div>\r\n        <input type=\"checkbox\" class=\"boxes\" ${checked} name=\"checkbox\" id=\"${entry.index}\">\r\n        <input type=\"text\" size=\"125\" class=\"detail ${done}\" id=\"${entry.index}\" value=\"${entry.description}\"></input>\r\n        </div>\r\n        <img src='${_images_trash_2_svg__WEBPACK_IMPORTED_MODULE_4__}' class='trash-icon' id='${entry.index}'>\r\n        <img src='${_images_more_vertical_svg__WEBPACK_IMPORTED_MODULE_3__}' class='dots' id='${entry.index}'>\r\n      </div>`;\r\n    });\r\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.listWindow.innerHTML = lists;\r\n    const moreIcon = document.querySelectorAll('.dots');\r\n    Options(moreIcon);\r\n    const disposeBtn = document.querySelectorAll('.trash-icon');\r\n    this.listRemoval(disposeBtn);\r\n    const details = document.querySelectorAll('.detail');\r\n    this.update(details);\r\n    const status = document.querySelectorAll('.boxes');\r\n    this.mark(status);\r\n  }\r\n\r\n  listRemoval(disposeBtn) {\r\n    disposeBtn.forEach((btn) => {\r\n      btn.addEventListener('click', () => {\r\n        const index = btn.getAttribute('id');\r\n        this.toDoList.splice(index, 1);\r\n        if (this.toDoList.length > 0) {\r\n          this.toDoList.forEach((entry, i) => {\r\n            entry.index = i;\r\n          });\r\n        }\r\n        localStorage.setItem('compiled', JSON.stringify(this.toDoList));\r\n        this.listRender();\r\n      });\r\n    });\r\n  }\r\n\r\n  update(details) {\r\n    details.forEach((text) => {\r\n      text.addEventListener('keyup', (e) => {\r\n        if (e.key !== 'Enter' || !text.value) return;\r\n\r\n        const index = text.getAttribute('id');\r\n        this.toDoList[index].description = text.value;\r\n        localStorage.setItem('compiled', JSON.stringify(this.toDoList));\r\n        this.listRender();\r\n      });\r\n    });\r\n  }\r\n\r\n  mark(status) {\r\n    status.forEach((checker) => {\r\n      checker.addEventListener('change', () => {\r\n        const task = checker.nextElementSibling;\r\n        const index = task.getAttribute('id');\r\n        console.log(task);   \r\n        task.classList.toggle('done');\r\n        if (task.classList.contains('done')) {\r\n          this.toDoList[index].complete = true;\r\n        } else {\r\n          this.toDoList[index].complete = false;\r\n        }\r\n        console.log(this.toDoList[index].complete)\r\n        localStorage.setItem('compiled', JSON.stringify(this.toDoList))\r\n        // this.listRender();\r\n      })\r\n    })\r\n  }\r\n\r\n  clear() {\r\n    this.toDoList = this.toDoList.filter((entry) => entry.complete === false);\r\n    this.toDoList = (0,_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.listSort)(this.toDoList);\r\n    localStorage.setItem('compiled', JSON.stringify(this.toDoList))\r\n    this.listRender();\r\n  }\r\n}\r\n\r\nconst plan = new Manager();\r\nwindow.addEventListener('load', () => { plan.listRender(); });\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.addInput.addEventListener('keyup', (e) => {\r\n  if (e.key !== 'Enter' || !_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.addInput.value) return;\r\n  plan.listAddition();\r\n  _modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.addInput.value = '';\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.enterImg.addEventListener('click', () => {\r\n  if (!_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.addInput.value) return;\r\n  plan.listAddition();\r\n  _modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.addInput.value = '';\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_5__.clearAll.addEventListener('click', () => {\r\n  console.log('clicked');\r\n  plan.clear();\r\n})\n\n//# sourceURL=webpack://my-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addInput\": () => (/* binding */ addInput),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"enterDiv\": () => (/* binding */ enterDiv),\n/* harmony export */   \"enterImg\": () => (/* binding */ enterImg),\n/* harmony export */   \"listSort\": () => (/* binding */ listSort),\n/* harmony export */   \"listWindow\": () => (/* binding */ listWindow),\n/* harmony export */   \"refreshDiv\": () => (/* binding */ refreshDiv),\n/* harmony export */   \"refreshImg\": () => (/* binding */ refreshImg),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\nconst refreshDiv = document.querySelector('#refresh-img');\r\nconst enterDiv = document.querySelector('#enter-img');\r\nconst refreshImg = new Image();\r\nconst enterImg = new Image();\r\nconst toDoList = JSON.parse(localStorage.getItem('compiled'));\r\nconst listSort = (arr) => arr.slice().sort((a, b) => a.index - b.index);\r\nconst addInput = document.querySelector('.add-input');\r\nconst listWindow = document.querySelector('.list-window');\r\nconst clearAll = document.querySelector('#clear-done');\n\n//# sourceURL=webpack://my-to-do-list/./src/modules/variables.js?");

/***/ }),

/***/ "./src/images/corner-down-left.svg":
/*!*****************************************!*\
  !*** ./src/images/corner-down-left.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d5ef756445602685c9f.svg\";\n\n//# sourceURL=webpack://my-to-do-list/./src/images/corner-down-left.svg?");

/***/ }),

/***/ "./src/images/more-vertical.svg":
/*!**************************************!*\
  !*** ./src/images/more-vertical.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d062ec001e5c71cd155.svg\";\n\n//# sourceURL=webpack://my-to-do-list/./src/images/more-vertical.svg?");

/***/ }),

/***/ "./src/images/refresh-cw.svg":
/*!***********************************!*\
  !*** ./src/images/refresh-cw.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"228d4ce3c0b25dd46812.svg\";\n\n//# sourceURL=webpack://my-to-do-list/./src/images/refresh-cw.svg?");

/***/ }),

/***/ "./src/images/trash-2.svg":
/*!********************************!*\
  !*** ./src/images/trash-2.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63b2215180e59191412b.svg\";\n\n//# sourceURL=webpack://my-to-do-list/./src/images/trash-2.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;