/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./VarelaRound-Regular.ttf */ "./src/VarelaRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./search-icon.svg */ "./src/search-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "VarelaRound-Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "VarelaRound-Regular", 'Times New Roman', Times, serif;
  
}

#app-container {
  display: flex;
  height: 100%;
}

#main-menu {
  background-color: rgb(232, 232, 232);
  min-width: 270px;
  max-width: 20%;
  display: flex;
  flex-direction: column;
}



.tabs-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}

.tab {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(209, 205, 205);
  padding: 7px;
  border-radius: 10px;
  margin: 5px;
  
}

 .icon {
  height: 24px;
  width: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-radius: 50%;
}

.tab.all > .icon > svg {
  height: 70%;
  width: 70%;
  stroke: white;
  fill: white;
}

.tab.today > .icon-container> .icon {
  background-color: blue;
 
}

.tab.today > .icon-container> .icon > svg {
  stroke: white;
}

.tab.planned > .icon {
  background-color: red;
}

.tab.planned > .icon > svg {
  stroke: white;
}

.tab.flagged > .icon {
  background-color: orange;

}

.tab.flagged > .icon > svg {
  stroke: white;
  fill: white;
  height: 70%;
  width: 70%;
}

.tab.done > .icon {
  background-color: darkgray;
}

.tab.done > .icon > svg {
  stroke: white
}



.icon > svg {
  height: 100%;
  width: 100%;
  padding: 2px;
}

.tab.all > .icon {
  background-color: black;
}


.calendar-date{
  position: absolute;
  font-size: 8px;
  top: 42%;
  color: white;
}

.tab > .tab-name {
  font-size: 13px;
  padding: 2px;
  grid-column: 1/3;

}

.tab > .task-count {
 
  /* Add your task count styles here */
}

div.lists {
  margin: 10px;
}

div.list {
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 7px;
  
}

div.list > p {
  margin: 0;
  padding-left: 5px;
}

div.list > .icon > svg {
  height: 70%;
  width: 70%;
}

div.header {
  display: flex;
  justify-content: space-between;
  margin: 15px;
  margin-right: 20px;
}


#search-bar {
 /* Adjust the value as needed to create space for the icon */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___}); /* Replace "path/to/your/search-icon.png" with the actual path to your search icon image */
  background-repeat: no-repeat;
  background-position: 5px center; /* Adjust the 5px value to control the horizontal positioning of the icon */
  background-size: 15px 15px; /* Adjust the size of the icon image as needed */
  border-radius: 7px;
  margin: 5px;
  background-color: #f2f2f2;
  padding: 5px;
  padding-left: 30px;
  border: none;
  outline: solid 10px transparent;
  transition: outline 0.5s;
  margin-top: 20px;
  margin-bottom: 20px;
}

#search-bar:focus{
  outline: solid 3px rgb(64, 184, 224);
}

.lists > h5 {
  margin: 0px;
  font-size: 12px;
  padding: 5px;
}

button#new-list > svg {
  height: 16px;
  width: 16px;
  padding:5px
}

button#new-list{
  line-height: 16px;
  width: 100px;
  display: flex;
  height: 30px;
  align-items: center;
  margin: 10px;
  position: absolute;
  bottom:1%;
}

#main {
  flex: 1;
  min-width: 300px;
  background-color: white;
}

#main > h2 {
  padding: 15px;
}

.new-task-form {
  display: flex;
}

.new-task-info{
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  flex:1;
  position: relative;
  padding-top: 5px;
  padding-bottom: 10px;
  height: 15px;
  overflow: hidden;
  transition: height 0.5s ease-out;
}

.new-task-info.show{
  height: auto;

}

textarea:focus{
  outline: none;
}

input {
  border: none;
}

input:focus{
  outline:none
}

input[type=text]{
  font-size: 16px;
  margin-bottom: 3px;
}

input, select, textarea, button{font-family:inherit;}


input.new-task-deadline{
  width: 150px;
  background-color: rgb(234, 232, 232);
  border-radius: 5px;
  color: gray;
  border: none;
  padding: 3px;
  height: 20px;
}


input[type=datetime-local]::-webkit-calendar-picker-indicator {
  display: none;
}

input[type=datetime-local]:focus{
  outline: none;
}

.set-time-label{
  position:absolute;
  bottom: 0%;
}

div.check-container{
  height: 16px;
  width: 16px;
  margin-top: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  margin-right: 5px;
  margin-left: 5px;
}

div.check {
  height: 10px;
  width: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}


input[type=checkbox] {
  opacity: 0%;
}

div.check:has(>.task-done:checked){
  background-color: orange;
}

div.check-container:has(>div.check>.task-done:checked){
  border:1px solid orange;
}

.collapsible {
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  height: auto;
}

.collapsible.collapsed {
  height:0;
}

textarea {
  resize: none;
  width: 100%;
  max-height: 200px;
  border: 0px;
  font-size: 16px;
  color: gray;
}

#new-task-button {
  position: absolute;
  right: 2%;
  top: 5%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  color: gray;
  padding: 0px;
}

#new-task-button > svg {
  height: 30px;
  width: 30px;
  fill: gray;
}

#new-task-button:hover {
  cursor: pointer;
}



@media (max-width: 570px) {
  #main-menu {
    display: none;
  }

  #main{
    min-width: 300px;
  }
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"VarelaRound-Regular\";\n  src: url(./VarelaRound-Regular.ttf);\n  font-weight: 400;\n}\n\nbody, html {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"VarelaRound-Regular\", 'Times New Roman', Times, serif;\n  \n}\n\n#app-container {\n  display: flex;\n  height: 100%;\n}\n\n#main-menu {\n  background-color: rgb(232, 232, 232);\n  min-width: 270px;\n  max-width: 20%;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.tabs-container{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n}\n\n.tab {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(209, 205, 205);\n  padding: 7px;\n  border-radius: 10px;\n  margin: 5px;\n  \n}\n\n .icon {\n  height: 24px;\n  width: 24px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: orange;\n  border-radius: 50%;\n}\n\n.tab.all > .icon > svg {\n  height: 70%;\n  width: 70%;\n  stroke: white;\n  fill: white;\n}\n\n.tab.today > .icon-container> .icon {\n  background-color: blue;\n \n}\n\n.tab.today > .icon-container> .icon > svg {\n  stroke: white;\n}\n\n.tab.planned > .icon {\n  background-color: red;\n}\n\n.tab.planned > .icon > svg {\n  stroke: white;\n}\n\n.tab.flagged > .icon {\n  background-color: orange;\n\n}\n\n.tab.flagged > .icon > svg {\n  stroke: white;\n  fill: white;\n  height: 70%;\n  width: 70%;\n}\n\n.tab.done > .icon {\n  background-color: darkgray;\n}\n\n.tab.done > .icon > svg {\n  stroke: white\n}\n\n\n\n.icon > svg {\n  height: 100%;\n  width: 100%;\n  padding: 2px;\n}\n\n.tab.all > .icon {\n  background-color: black;\n}\n\n\n.calendar-date{\n  position: absolute;\n  font-size: 8px;\n  top: 42%;\n  color: white;\n}\n\n.tab > .tab-name {\n  font-size: 13px;\n  padding: 2px;\n  grid-column: 1/3;\n\n}\n\n.tab > .task-count {\n \n  /* Add your task count styles here */\n}\n\ndiv.lists {\n  margin: 10px;\n}\n\ndiv.list {\n  background-color: white;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  padding: 7px;\n  \n}\n\ndiv.list > p {\n  margin: 0;\n  padding-left: 5px;\n}\n\ndiv.list > .icon > svg {\n  height: 70%;\n  width: 70%;\n}\n\ndiv.header {\n  display: flex;\n  justify-content: space-between;\n  margin: 15px;\n  margin-right: 20px;\n}\n\n\n#search-bar {\n /* Adjust the value as needed to create space for the icon */\n  background-image: url(\"./search-icon.svg\"); /* Replace \"path/to/your/search-icon.png\" with the actual path to your search icon image */\n  background-repeat: no-repeat;\n  background-position: 5px center; /* Adjust the 5px value to control the horizontal positioning of the icon */\n  background-size: 15px 15px; /* Adjust the size of the icon image as needed */\n  border-radius: 7px;\n  margin: 5px;\n  background-color: #f2f2f2;\n  padding: 5px;\n  padding-left: 30px;\n  border: none;\n  outline: solid 10px transparent;\n  transition: outline 0.5s;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#search-bar:focus{\n  outline: solid 3px rgb(64, 184, 224);\n}\n\n.lists > h5 {\n  margin: 0px;\n  font-size: 12px;\n  padding: 5px;\n}\n\nbutton#new-list > svg {\n  height: 16px;\n  width: 16px;\n  padding:5px\n}\n\nbutton#new-list{\n  line-height: 16px;\n  width: 100px;\n  display: flex;\n  height: 30px;\n  align-items: center;\n  margin: 10px;\n  position: absolute;\n  bottom:1%;\n}\n\n#main {\n  flex: 1;\n  min-width: 300px;\n  background-color: white;\n}\n\n#main > h2 {\n  padding: 15px;\n}\n\n.new-task-form {\n  display: flex;\n}\n\n.new-task-info{\n  border-bottom: 1px solid gray;\n  display: flex;\n  flex-direction: column;\n  flex:1;\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  height: 15px;\n  overflow: hidden;\n  transition: height 0.5s ease-out;\n}\n\n.new-task-info.show{\n  height: auto;\n\n}\n\ntextarea:focus{\n  outline: none;\n}\n\ninput {\n  border: none;\n}\n\ninput:focus{\n  outline:none\n}\n\ninput[type=text]{\n  font-size: 16px;\n  margin-bottom: 3px;\n}\n\ninput, select, textarea, button{font-family:inherit;}\n\n\ninput.new-task-deadline{\n  width: 150px;\n  background-color: rgb(234, 232, 232);\n  border-radius: 5px;\n  color: gray;\n  border: none;\n  padding: 3px;\n  height: 20px;\n}\n\n\ninput[type=datetime-local]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\ninput[type=datetime-local]:focus{\n  outline: none;\n}\n\n.set-time-label{\n  position:absolute;\n  bottom: 0%;\n}\n\ndiv.check-container{\n  height: 16px;\n  width: 16px;\n  margin-top: 5px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid gray;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\ndiv.check {\n  height: 10px;\n  width: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n\ninput[type=checkbox] {\n  opacity: 0%;\n}\n\ndiv.check:has(>.task-done:checked){\n  background-color: orange;\n}\n\ndiv.check-container:has(>div.check>.task-done:checked){\n  border:1px solid orange;\n}\n\n.collapsible {\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n  height: auto;\n}\n\n.collapsible.collapsed {\n  height:0;\n}\n\ntextarea {\n  resize: none;\n  width: 100%;\n  max-height: 200px;\n  border: 0px;\n  font-size: 16px;\n  color: gray;\n}\n\n#new-task-button {\n  position: absolute;\n  right: 2%;\n  top: 5%;\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background-color: white;\n  color: gray;\n  padding: 0px;\n}\n\n#new-task-button > svg {\n  height: 30px;\n  width: 30px;\n  fill: gray;\n}\n\n#new-task-button:hover {\n  cursor: pointer;\n}\n\n\n\n@media (max-width: 570px) {\n  #main-menu {\n    display: none;\n  }\n\n  #main{\n    min-width: 300px;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMenusOnOutsideClick: () => (/* binding */ closeMenusOnOutsideClick),
/* harmony export */   setDateTimePicker: () => (/* binding */ setDateTimePicker),
/* harmony export */   setDoneCheckers: () => (/* binding */ setDoneCheckers),
/* harmony export */   setTaskForms: () => (/* binding */ setTaskForms),
/* harmony export */   setTextArea: () => (/* binding */ setTextArea),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
function setTextArea(element) {
  const tx = element.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + tx[i].scrollHeight + "px;");
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
}

function setDateTimePicker(element) {
  const dateTimePicker = element.getElementsByClassName("new-task-deadline");
  for (let i = 0; i < dateTimePicker.length; i++) {
    dateTimePicker[i].addEventListener("focus", DateonFocus);
    dateTimePicker[i].addEventListener("blur", DateonBlur);
  }

  function DateonFocus() {
    this.type = "datetime-local";
    this.showPicker();
  }

  function DateonBlur() {
    if (this.value.length == 0) this.type = "";
  }
}

function closeMenus() {
  let openMenus = document.getElementsByClassName("new-task-info show");
  if (openMenus.length > 0) {
    for (let i = 0; i < openMenus.length; i++) {
      openMenus[i].classList.remove("show");
    }
  }
}

function showFullMenu() {
  closeMenus();
  this.classList.add("show");
}

function taskFormListener(form) {
  form.addEventListener("click", showFullMenu);
}

function closeMenusOnOutsideClick() {
  document.addEventListener("click", function (event) {
    const doneCheckers = document.getElementsByClassName("task-done");
    for (let i = 0; i < doneCheckers.length; i++) {
      if (doneCheckers[i].contains(event.target)) {
        return;
      }
    }
    if (
      event.target.closest("div.new-task-info.show") !== null &&
      event.target.closest("div.new-task-info.show").classList.contains("show")
    ) {
      return;
    } else {
      closeMenus();
    }
  });
}

function setTaskForms(element) {
  const taskForms = element.getElementsByClassName("new-task-info");
  for (let i = 0; i < taskForms.length; i++) {
    taskFormListener(taskForms[i]);
  }
}

function doneCheckersListener(check) {
  check.addEventListener("click", function (event) {
    let a = check.parentElement.parentElement.nextElementSibling;
    if (a.classList.contains("show")) {
      return;
    }
    if (!a.classList.contains("show")) {
      closeMenus();
      a.classList.add("show");
    }
  });
}

function setDoneCheckers(element) {
  const doneCheckers = element.getElementsByClassName("task-done");
  for (let i = 0; i < doneCheckers.length; i++) {
    doneCheckersListener(doneCheckers[i]);
  }
}

function uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Expand animation
// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   const content = document.querySelector(".collapsible");
//   expandElement(content, "collapsed");
// });

// function expandElement(elem, collapseClass) {
//   elem.style.height = "";
//   elem.style.transition = "none";

//   const startHeight = window.getComputedStyle(elem).height;

//   elem.classList.toggle(collapseClass);
//   const height = window.getComputedStyle(elem).height;
//   elem.style.height = startHeight;

//   requestAnimationFrame(() => {
//     elem.style.transition = "";

//     requestAnimationFrame(() => {
//       elem.style.height = height;
//     });
//   });
//   elem.addEventListener("transitionend", () => {
//     elem.style.height = "";
//     elem.removeEventListener("transitionend", this);
//   });
// }


/***/ }),

/***/ "./src/VarelaRound-Regular.ttf":
/*!*************************************!*\
  !*** ./src/VarelaRound-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e67ccd4a92677fdf8719.ttf";

/***/ }),

/***/ "./src/search-icon.svg":
/*!*****************************!*\
  !*** ./src/search-icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34f3996eecb5600307d8.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



window.onload = function () {
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setDateTimePicker)(document);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setTextArea)(document);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setTaskForms)(document);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setDoneCheckers)(document);
  setFormSubmit(document);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.closeMenusOnOutsideClick)();
  setNewTaskButton();
};

// HTML element is created and appended
function createNewTaskForm() {
  const hiddenForm = document.getElementById("hidden-form-container");
  const newForm = hiddenForm.cloneNode(true);
  newForm.setAttribute("id", (0,_helper__WEBPACK_IMPORTED_MODULE_1__.uniqueId)());
  newForm.removeAttribute("hidden");
  console.log(newForm);
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.appendChild(newForm);
  setListenersForFormElements(newForm);
}

function setListenersForFormElements(form) {
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setDateTimePicker)(form);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setTextArea)(form);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setTaskForms)(form);
  (0,_helper__WEBPACK_IMPORTED_MODULE_1__.setDoneCheckers)(form);
  setFormSubmit(form);
}

function setNewTaskButton() {
  const newTaskButton = document.getElementById("new-task-button");
  newTaskButton.addEventListener("click", createNewTaskForm);
}

function setFormSubmit(element) {
  const formName = element.getElementsByClassName("new-task-name");
  formName[0].addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
      saveTask(this.parentElement.parentElement.parentElement);
    }
  });
}

function saveTask(data) {
  let name = data.getElementsByClassName("new-task-name")[0].value;

  let note = data.getElementsByClassName("new-task-notes")[0].value;
  let deadline = data.getElementsByClassName("new-task-deadline")[0].value;
  let done = data.getElementsByClassName("task-done")[0].checked;
  let date = Date.now();
  const task = createTask(data.id, name, note, deadline, done, date);
  console.log(task);
  localStorage.setItem(data.id, task);
}

function createTask(id, name, note, deadline, done, date) {
  return {
    id: id,
    name: name,
    note: note,
    deadline: deadline,
    done: done,
    date: date,
  };
}

console.log(localStorage[0]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQyxHQUFHO0FBQ2hFO0FBQ0EsbUNBQW1DO0FBQ25DLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7O0FBR2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQVFIOztBQUVsQjtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLEVBQUUsb0RBQVc7QUFDYixFQUFFLHFEQUFZO0FBQ2QsRUFBRSx3REFBZTtBQUNqQjtBQUNBLEVBQUUsaUVBQXdCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwREFBaUI7QUFDbkIsRUFBRSxvREFBVztBQUNiLEVBQUUscURBQVk7QUFDZCxFQUFFLHdEQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9WYXJlbGFSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vc2VhcmNoLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYVJvdW5kLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmJvZHksIGh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiVmFyZWxhUm91bmQtUmVndWxhclwiLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICBcbn1cblxuI2FwcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYWluLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIG1heC13aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cblxuLnRhYnMtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDUsIDIwNSk7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIFxufVxuXG4gLmljb24ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRhYi5hbGwgPiAuaWNvbiA+IHN2ZyB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBzdHJva2U6IHdoaXRlO1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRhYi50b2RheSA+IC5pY29uLWNvbnRhaW5lcj4gLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuIFxufVxuXG4udGFiLnRvZGF5ID4gLmljb24tY29udGFpbmVyPiAuaWNvbiA+IHN2ZyB7XG4gIHN0cm9rZTogd2hpdGU7XG59XG5cbi50YWIucGxhbm5lZCA+IC5pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udGFiLnBsYW5uZWQgPiAuaWNvbiA+IHN2ZyB7XG4gIHN0cm9rZTogd2hpdGU7XG59XG5cbi50YWIuZmxhZ2dlZCA+IC5pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuXG59XG5cbi50YWIuZmxhZ2dlZCA+IC5pY29uID4gc3ZnIHtcbiAgc3Ryb2tlOiB3aGl0ZTtcbiAgZmlsbDogd2hpdGU7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xufVxuXG4udGFiLmRvbmUgPiAuaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4udGFiLmRvbmUgPiAuaWNvbiA+IHN2ZyB7XG4gIHN0cm9rZTogd2hpdGVcbn1cblxuXG5cbi5pY29uID4gc3ZnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4udGFiLmFsbCA+IC5pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cblxuLmNhbGVuZGFyLWRhdGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHg7XG4gIHRvcDogNDIlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWIgPiAudGFiLW5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcblxufVxuXG4udGFiID4gLnRhc2stY291bnQge1xuIFxuICAvKiBBZGQgeW91ciB0YXNrIGNvdW50IHN0eWxlcyBoZXJlICovXG59XG5cbmRpdi5saXN0cyB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuZGl2Lmxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogN3B4O1xuICBcbn1cblxuZGl2Lmxpc3QgPiBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuZGl2Lmxpc3QgPiAuaWNvbiA+IHN2ZyB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xufVxuXG5kaXYuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuXG4jc2VhcmNoLWJhciB7XG4gLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgdG8gY3JlYXRlIHNwYWNlIGZvciB0aGUgaWNvbiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7IC8qIFJlcGxhY2UgXCJwYXRoL3RvL3lvdXIvc2VhcmNoLWljb24ucG5nXCIgd2l0aCB0aGUgYWN0dWFsIHBhdGggdG8geW91ciBzZWFyY2ggaWNvbiBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggY2VudGVyOyAvKiBBZGp1c3QgdGhlIDVweCB2YWx1ZSB0byBjb250cm9sIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uaW5nIG9mIHRoZSBpY29uICovXG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4OyAvKiBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGljb24gaW1hZ2UgYXMgbmVlZGVkICovXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IHNvbGlkIDEwcHggdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG91dGxpbmUgMC41cztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3NlYXJjaC1iYXI6Zm9jdXN7XG4gIG91dGxpbmU6IHNvbGlkIDNweCByZ2IoNjQsIDE4NCwgMjI0KTtcbn1cblxuLmxpc3RzID4gaDUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmJ1dHRvbiNuZXctbGlzdCA+IHN2ZyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIHBhZGRpbmc6NXB4XG59XG5cbmJ1dHRvbiNuZXctbGlzdHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOjElO1xufVxuXG4jbWFpbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jbWFpbiA+IGgyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm5ldy10YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmV3LXRhc2staW5mb3tcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6MTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBlYXNlLW91dDtcbn1cblxuLm5ldy10YXNrLWluZm8uc2hvd3tcbiAgaGVpZ2h0OiBhdXRvO1xuXG59XG5cbnRleHRhcmVhOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXN7XG4gIG91dGxpbmU6bm9uZVxufVxuXG5pbnB1dFt0eXBlPXRleHRde1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbntmb250LWZhbWlseTppbmhlcml0O31cblxuXG5pbnB1dC5uZXctdGFzay1kZWFkbGluZXtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzIsIDIzMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cblxuaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2V0LXRpbWUtbGFiZWx7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBib3R0b206IDAlO1xufVxuXG5kaXYuY2hlY2stY29udGFpbmVye1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5kaXYuY2hlY2sge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgb3BhY2l0eTogMCU7XG59XG5cbmRpdi5jaGVjazpoYXMoPi50YXNrLWRvbmU6Y2hlY2tlZCl7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuZGl2LmNoZWNrLWNvbnRhaW5lcjpoYXMoPmRpdi5jaGVjaz4udGFzay1kb25lOmNoZWNrZWQpe1xuICBib3JkZXI6MXB4IHNvbGlkIG9yYW5nZTtcbn1cblxuLmNvbGxhcHNpYmxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbGxhcHNpYmxlLmNvbGxhcHNlZCB7XG4gIGhlaWdodDowO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuI25ldy10YXNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDUlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI25ldy10YXNrLWJ1dHRvbiA+IHN2ZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGZpbGw6IGdyYXk7XG59XG5cbiNuZXctdGFzay1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgI21haW4tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNtYWlue1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLDRDQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixtRUFBbUU7O0FBRXJFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7Ozs7QUFJQTtF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QUNaLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7O0FBSUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWYXJlbGFSb3VuZC1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKC4vVmFyZWxhUm91bmQtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWYXJlbGFSb3VuZC1SZWd1bGFyXFxcIiwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIFxcbn1cXG5cXG4jYXBwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbWFpbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXG4gIG1pbi13aWR0aDogMjcwcHg7XFxuICBtYXgtd2lkdGg6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5cXG4udGFicy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFiIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwNSwgMjA1KTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIFxcbn1cXG5cXG4gLmljb24ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFiLmFsbCA+IC5pY29uID4gc3ZnIHtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHN0cm9rZTogd2hpdGU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLnRhYi50b2RheSA+IC5pY29uLWNvbnRhaW5lcj4gLmljb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gXFxufVxcblxcbi50YWIudG9kYXkgPiAuaWNvbi1jb250YWluZXI+IC5pY29uID4gc3ZnIHtcXG4gIHN0cm9rZTogd2hpdGU7XFxufVxcblxcbi50YWIucGxhbm5lZCA+IC5pY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhYi5wbGFubmVkID4gLmljb24gPiBzdmcge1xcbiAgc3Ryb2tlOiB3aGl0ZTtcXG59XFxuXFxuLnRhYi5mbGFnZ2VkID4gLmljb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcblxcbn1cXG5cXG4udGFiLmZsYWdnZWQgPiAuaWNvbiA+IHN2ZyB7XFxuICBzdHJva2U6IHdoaXRlO1xcbiAgZmlsbDogd2hpdGU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi50YWIuZG9uZSA+IC5pY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4udGFiLmRvbmUgPiAuaWNvbiA+IHN2ZyB7XFxuICBzdHJva2U6IHdoaXRlXFxufVxcblxcblxcblxcbi5pY29uID4gc3ZnIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4udGFiLmFsbCA+IC5pY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4uY2FsZW5kYXItZGF0ZXtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgdG9wOiA0MiU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWIgPiAudGFiLW5hbWUge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG5cXG59XFxuXFxuLnRhYiA+IC50YXNrLWNvdW50IHtcXG4gXFxuICAvKiBBZGQgeW91ciB0YXNrIGNvdW50IHN0eWxlcyBoZXJlICovXFxufVxcblxcbmRpdi5saXN0cyB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmRpdi5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgXFxufVxcblxcbmRpdi5saXN0ID4gcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuZGl2Lmxpc3QgPiAuaWNvbiA+IHN2ZyB7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbmRpdi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuXFxuI3NlYXJjaC1iYXIge1xcbiAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCB0byBjcmVhdGUgc3BhY2UgZm9yIHRoZSBpY29uICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vc2VhcmNoLWljb24uc3ZnXFxcIik7IC8qIFJlcGxhY2UgXFxcInBhdGgvdG8veW91ci9zZWFyY2gtaWNvbi5wbmdcXFwiIHdpdGggdGhlIGFjdHVhbCBwYXRoIHRvIHlvdXIgc2VhcmNoIGljb24gaW1hZ2UgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggY2VudGVyOyAvKiBBZGp1c3QgdGhlIDVweCB2YWx1ZSB0byBjb250cm9sIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uaW5nIG9mIHRoZSBpY29uICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDsgLyogQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpY29uIGltYWdlIGFzIG5lZWRlZCAqL1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogc29saWQgMTBweCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUgMC41cztcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jc2VhcmNoLWJhcjpmb2N1c3tcXG4gIG91dGxpbmU6IHNvbGlkIDNweCByZ2IoNjQsIDE4NCwgMjI0KTtcXG59XFxuXFxuLmxpc3RzID4gaDUge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmJ1dHRvbiNuZXctbGlzdCA+IHN2ZyB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIHBhZGRpbmc6NXB4XFxufVxcblxcbmJ1dHRvbiNuZXctbGlzdHtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206MSU7XFxufVxcblxcbiNtYWluIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNtYWluID4gaDIge1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5ldy10YXNrLWluZm97XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDoxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4ubmV3LXRhc2staW5mby5zaG93e1xcbiAgaGVpZ2h0OiBhdXRvO1xcblxcbn1cXG5cXG50ZXh0YXJlYTpmb2N1c3tcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICBvdXRsaW5lOm5vbmVcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XXtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbntmb250LWZhbWlseTppbmhlcml0O31cXG5cXG5cXG5pbnB1dC5uZXctdGFzay1kZWFkbGluZXtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzMiwgMjMyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOmZvY3Vze1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNldC10aW1lLWxhYmVse1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICBib3R0b206IDAlO1xcbn1cXG5cXG5kaXYuY2hlY2stY29udGFpbmVye1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuZGl2LmNoZWNrIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgb3BhY2l0eTogMCU7XFxufVxcblxcbmRpdi5jaGVjazpoYXMoPi50YXNrLWRvbmU6Y2hlY2tlZCl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbmRpdi5jaGVjay1jb250YWluZXI6aGFzKD5kaXYuY2hlY2s+LnRhc2stZG9uZTpjaGVja2VkKXtcXG4gIGJvcmRlcjoxcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4uY29sbGFwc2libGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29sbGFwc2libGUuY29sbGFwc2VkIHtcXG4gIGhlaWdodDowO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMiU7XFxuICB0b3A6IDUlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogZ3JheTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbiA+IHN2ZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGZpbGw6IGdyYXk7XFxufVxcblxcbiNuZXctdGFzay1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcXG4gICNtYWluLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI21haW57XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIHNldFRleHRBcmVhKGVsZW1lbnQpIHtcbiAgY29uc3QgdHggPSBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHgubGVuZ3RoOyBpKyspIHtcbiAgICB0eFtpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImhlaWdodDpcIiArIHR4W2ldLnNjcm9sbEhlaWdodCArIFwicHg7XCIpO1xuICAgIHR4W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBPbklucHV0LCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBPbklucHV0KCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlVGltZVBpY2tlcihlbGVtZW50KSB7XG4gIGNvbnN0IGRhdGVUaW1lUGlja2VyID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV3LXRhc2stZGVhZGxpbmVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZVRpbWVQaWNrZXIubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRlVGltZVBpY2tlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgRGF0ZW9uRm9jdXMpO1xuICAgIGRhdGVUaW1lUGlja2VyW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIERhdGVvbkJsdXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gRGF0ZW9uRm9jdXMoKSB7XG4gICAgdGhpcy50eXBlID0gXCJkYXRldGltZS1sb2NhbFwiO1xuICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gRGF0ZW9uQmx1cigpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT0gMCkgdGhpcy50eXBlID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU1lbnVzKCkge1xuICBsZXQgb3Blbk1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5ldy10YXNrLWluZm8gc2hvd1wiKTtcbiAgaWYgKG9wZW5NZW51cy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcGVuTWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9wZW5NZW51c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0Z1bGxNZW51KCkge1xuICBjbG9zZU1lbnVzKCk7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIHRhc2tGb3JtTGlzdGVuZXIoZm9ybSkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93RnVsbE1lbnUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNZW51c09uT3V0c2lkZUNsaWNrKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgZG9uZUNoZWNrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2stZG9uZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbmVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRvbmVDaGVja2Vyc1tpXS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJkaXYubmV3LXRhc2staW5mby5zaG93XCIpICE9PSBudWxsICYmXG4gICAgICBldmVudC50YXJnZXQuY2xvc2VzdChcImRpdi5uZXctdGFzay1pbmZvLnNob3dcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU1lbnVzKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhc2tGb3JtcyhlbGVtZW50KSB7XG4gIGNvbnN0IHRhc2tGb3JtcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5ldy10YXNrLWluZm9cIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Zvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFza0Zvcm1MaXN0ZW5lcih0YXNrRm9ybXNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvbmVDaGVja2Vyc0xpc3RlbmVyKGNoZWNrKSB7XG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgYSA9IGNoZWNrLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWEuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xuICAgICAgY2xvc2VNZW51cygpO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RG9uZUNoZWNrZXJzKGVsZW1lbnQpIHtcbiAgY29uc3QgZG9uZUNoZWNrZXJzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1kb25lXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbmVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGRvbmVDaGVja2Vyc0xpc3RlbmVyKGRvbmVDaGVja2Vyc1tpXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUlkKCkge1xuICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG59XG5cbi8vIEV4cGFuZCBhbmltYXRpb25cbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpO1xuXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sbGFwc2libGVcIik7XG4vLyAgIGV4cGFuZEVsZW1lbnQoY29udGVudCwgXCJjb2xsYXBzZWRcIik7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gZXhwYW5kRWxlbWVudChlbGVtLCBjb2xsYXBzZUNsYXNzKSB7XG4vLyAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbi8vICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XG5cbi8vICAgY29uc3Qgc3RhcnRIZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS5oZWlnaHQ7XG5cbi8vICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKGNvbGxhcHNlQ2xhc3MpO1xuLy8gICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS5oZWlnaHQ7XG4vLyAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gc3RhcnRIZWlnaHQ7XG5cbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbi8vICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xuXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbi8vICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4vLyAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuLy8gICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcyk7XG4vLyAgIH0pO1xuLy8gfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgc2V0RGF0ZVRpbWVQaWNrZXIsXG4gIHNldFRhc2tGb3JtcyxcbiAgc2V0VGV4dEFyZWEsXG4gIHNldERvbmVDaGVja2VycyxcbiAgY2xvc2VNZW51c09uT3V0c2lkZUNsaWNrLFxuICB1bmlxdWVJZCxcbn0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHNldERhdGVUaW1lUGlja2VyKGRvY3VtZW50KTtcbiAgc2V0VGV4dEFyZWEoZG9jdW1lbnQpO1xuICBzZXRUYXNrRm9ybXMoZG9jdW1lbnQpO1xuICBzZXREb25lQ2hlY2tlcnMoZG9jdW1lbnQpO1xuICBzZXRGb3JtU3VibWl0KGRvY3VtZW50KTtcbiAgY2xvc2VNZW51c09uT3V0c2lkZUNsaWNrKCk7XG4gIHNldE5ld1Rhc2tCdXR0b24oKTtcbn07XG5cbi8vIEhUTUwgZWxlbWVudCBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZFxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Zvcm0oKSB7XG4gIGNvbnN0IGhpZGRlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGRlbi1mb3JtLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbmV3Rm9ybSA9IGhpZGRlbkZvcm0uY2xvbmVOb2RlKHRydWUpO1xuICBuZXdGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIHVuaXF1ZUlkKCkpO1xuICBuZXdGb3JtLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbiAgY29uc29sZS5sb2cobmV3Rm9ybSk7XG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1jb250YWluZXJcIik7XG4gIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuICBzZXRMaXN0ZW5lcnNGb3JGb3JtRWxlbWVudHMobmV3Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHNldExpc3RlbmVyc0ZvckZvcm1FbGVtZW50cyhmb3JtKSB7XG4gIHNldERhdGVUaW1lUGlja2VyKGZvcm0pO1xuICBzZXRUZXh0QXJlYShmb3JtKTtcbiAgc2V0VGFza0Zvcm1zKGZvcm0pO1xuICBzZXREb25lQ2hlY2tlcnMoZm9ybSk7XG4gIHNldEZvcm1TdWJtaXQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHNldE5ld1Rhc2tCdXR0b24oKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWJ1dHRvblwiKTtcbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3VGFza0Zvcm0pO1xufVxuXG5mdW5jdGlvbiBzZXRGb3JtU3VibWl0KGVsZW1lbnQpIHtcbiAgY29uc3QgZm9ybU5hbWUgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXctdGFzay1uYW1lXCIpO1xuICBmb3JtTmFtZVswXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgc2F2ZVRhc2sodGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRhc2soZGF0YSkge1xuICBsZXQgbmFtZSA9IGRhdGEuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5ldy10YXNrLW5hbWVcIilbMF0udmFsdWU7XG5cbiAgbGV0IG5vdGUgPSBkYXRhLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXctdGFzay1ub3Rlc1wiKVswXS52YWx1ZTtcbiAgbGV0IGRlYWRsaW5lID0gZGF0YS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV3LXRhc2stZGVhZGxpbmVcIilbMF0udmFsdWU7XG4gIGxldCBkb25lID0gZGF0YS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1kb25lXCIpWzBdLmNoZWNrZWQ7XG4gIGxldCBkYXRlID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soZGF0YS5pZCwgbmFtZSwgbm90ZSwgZGVhZGxpbmUsIGRvbmUsIGRhdGUpO1xuICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YS5pZCwgdGFzayk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soaWQsIG5hbWUsIG5vdGUsIGRlYWRsaW5lLCBkb25lLCBkYXRlKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGlkLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgbm90ZTogbm90ZSxcbiAgICBkZWFkbGluZTogZGVhZGxpbmUsXG4gICAgZG9uZTogZG9uZSxcbiAgICBkYXRlOiBkYXRlLFxuICB9O1xufVxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2VbMF0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9