/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/*! exports provided: play, reset, select, updateSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSelect\", function() { return updateSelect; });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n// import { step } from './visual';\n\n\nlet i = 0;\n\n// ============================= Play ===================================\n\nlet interval;\n\nconst play = (data) => {\n\n  const playButton = document.getElementById(\"play-button\");\n\n  playButton.addEventListener(\"click\", (e) => {\n\n    if (playButton.textContent === \"Play\") {\n      playButton.textContent = \"Pause\";\n      interval = setInterval(() => step(data), 150);\n    } else if (playButton.textContent === \"Pause\") {\n      playButton.textContent = \"Play\";\n      clearInterval(interval);\n    }\n  });\n\n};\n\nconst step = (data) => {\n  i = (i < 214) ? i + 1 : 0;\n  Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n};\n\n// ============================= Reset ===================================\n\nconst resetButton = document.getElementById(\"reset-button\");\n\nconst reset = (data) => {\n\n  resetButton.addEventListener(\"click\", (e) => {\n    i = 0;\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[0], 0);\n  });\n\n};\n\n\n// ============================= Reset ===================================\n\nconst selector = document.getElementById(\"continent-select\");\n\nconst select = (data) => {\n\n  let continent = selector.value;\n\n  data = data.filter(d => {\n    if (continent === \"all\") {\n      return true;\n    } else {\n      return d.continent === continent;\n    }\n  });\n\n  return data;\n};\n\nconst updateSelect = (data) => {\n  selector.addEventListener(\"change\", () => {\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n  });\n};\n\n//# sourceURL=webpack:///./src/buttons.js?");

/***/ }),

/***/ "./src/chart-area.js":
/*!***************************!*\
  !*** ./src/chart-area.js ***!
  \***************************/
/*! exports provided: width, height, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return g; });\nconst margin = { left: 80, right: 20, top: 50, bottom: 100 };\n\nconst width = 800 - margin.left - margin.right;\nconst height = 500 - margin.top - margin.bottom;\n\nconst g = d3.select(\"#chart-area\")\n  .append(\"svg\")\n  .attr(\"width\", width + margin.left + margin.right)\n  .attr(\"height\", height + margin.top + margin.bottom)\n  .append(\"g\")\n  .attr(\"transform\", \"translate(\" + margin.left\n    + \", \" + margin.top + \")\");\n\nconst line = g.append(\"line\")\n  .attr(\"x1\", width)\n  .attr(\"y1\", 0)\n  .attr(\"x2\", 0)\n  .attr(\"y2\", height)\n  .attr(\"stroke\", \"gray\")\n  .attr(\"stroke-width\", \"1px\");\n\n//# sourceURL=webpack:///./src/chart-area.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _visual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual.js */ \"./src/visual.js\");\nconsole.log(\"webpack is working\")\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  Object(_visual_js__WEBPACK_IMPORTED_MODULE_0__[\"Visual\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/labels+axes.js":
/*!****************************!*\
  !*** ./src/labels+axes.js ***!
  \****************************/
/*! exports provided: timeLabel, xAxisCall, yAxisCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeLabel\", function() { return timeLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xAxisCall\", function() { return xAxisCall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yAxisCall\", function() { return yAxisCall; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n\n// ============================= Labels ===================================\n\nconst xLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 50)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] / 2)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"GDP Per Capita ($)\");\nconst yLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"transform\", \"rotate(-90)\")\n  .attr(\"y\", -40)\n  .attr(\"x\", -170)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"Life Expectancy (Years)\")\nconst timeLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] - 10)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 40)\n  .attr(\"font-size\", \"40px\")\n  .attr(\"opacity\", \"0.4\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"1800\");\n\n\n// ============================= Axes ===================================\n\n// X Axis\nconst xAxisCall = d3.axisBottom(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])\n  .tickValues([400, 4000, 40000])\n  .tickFormat(d3.format(\"$\"));\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"x axis\")\n  .attr(\"transform\", \"translate(0, \" + _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + \")\")\n  .call(xAxisCall);\n\n// Y Axis\nconst yAxisCall = d3.axisLeft(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])\n  .ticks(10)\n  .tickFormat(d => { return + d; });\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"y-axis\")\n  .call(yAxisCall);\n\n\n//# sourceURL=webpack:///./src/labels+axes.js?");

/***/ }),

/***/ "./src/legend.js":
/*!***********************!*\
  !*** ./src/legend.js ***!
  \***********************/
/*! exports provided: legend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legend\", function() { return legend; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n\nconst continents = [\"europe\", \"asia\", \"americas\", \"africa\"];\n\nconst legend = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"transform\", \"translate(\" + (_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 10) + \",\" + (_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] - 125) + \")\");\n// shift to bottom of visualization\n\ncontinents.forEach((continent, i) => {\n  let legendRow = legend.append(\"g\")\n    .attr(\"transform\", \"translate(0,\" + (i * 20) + \")\");\n  // using the index \"i\" so that each row are seperated by 20px in the y direction\n  // create the squares of colors\n  legendRow.append(\"rect\")\n    .attr(\"width\", 10)\n    .attr(\"height\", 10)\n    .attr(\"fill\", Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(continent));\n\n  // create the labels\n  legendRow.append(\"text\")\n    .attr(\"x\", -10)\n    // puts the texts -10px aka 10px to the left\n    .attr(\"y\", 10)\n    // y-val of 10 so that the texts lines up vertically\n    .attr(\"text-anchor\", \"end\")\n    // text anchor end so text gets appended from the end of the texts\n    .style(\"text-transform\", \"capitalize\")\n    // fomrats the texts \n    .text(continent);\n\n});\n\n//# sourceURL=webpack:///./src/legend.js?");

/***/ }),

/***/ "./src/scales.js":
/*!***********************!*\
  !*** ./src/scales.js ***!
  \***********************/
/*! exports provided: x, y, area, continentColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"x\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"y\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"continentColor\", function() { return continentColor; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n\n\n// X Scale\nconst x = d3.scaleLog()\n  .domain([142, 150000])\n  .range([0, _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"]])\n  .base(10);\n\n// Y Scale\nconst y = d3.scaleLinear()\n  .range([_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"], 0])\n  .domain([0, 90]);\n\n// Area Scale\nconst area = d3.scaleLinear()\n  .range([25 * Math.PI, 1500 * Math.PI])\n  .domain([2000, 1400000000]);\n// scale by population\n\n// Color Scale\nconst continentColor = d3.scaleOrdinal().range(d3.schemeTableau10);\n\n//# sourceURL=webpack:///./src/scales.js?");

/***/ }),

/***/ "./src/tooltip.js":
/*!************************!*\
  !*** ./src/tooltip.js ***!
  \************************/
/*! exports provided: tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tip\", function() { return tip; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n\n\nconst tip = d3.tip().attr('class', 'd3-tip') // class to match css\n  // set html with a function\n  .html(d => {\n    let text = \"<strong>Country:</strong> <span style='color: #903436'>\" + d.country + \"</span><br>\";\n    text += \"<strong>Continent:</strong> <span style='color: #903436; text-transform: capitalize'>\" + d.continent + \"</span><br>\";\n    text += \"<strong>Life Expectancy:</strong> <span style='color: #903436'>\" + d3.format(\".2f\")(d.life_exp) + \"</span><br>\";\n    text += \"<strong>GDP Per Capita:</strong> <span style='color: #903436'>\" + d3.format(\"($.2f\")(d.income) + \"</span><br>\";\n    text += \"<strong>Population:</strong> <span style='color: #903436'>\" + d3.format(\",.0f\")(d.population) + \"</span><br>\";\n\n    return text;\n  });\n// #2E4B69\n// use call method to set context\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].call(tip);\n\n\n//# sourceURL=webpack:///./src/tooltip.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n/* harmony import */ var _labels_axes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labels+axes.js */ \"./src/labels+axes.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.js */ \"./src/tooltip.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n\n\n\n\n\n\nconst update = (data, time) => {\n  const t = d3.transition().duration(150);\n\n  data = Object(_buttons_js__WEBPACK_IMPORTED_MODULE_4__[\"select\"])(data);\n\n  const circles = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].selectAll(\"circle\")\n    .data(data, d => {\n      return d.country;\n    });\n\n  circles.exit().remove();\n\n  circles.enter()\n    .append(\"circle\")\n      .on(\"mouseover\", _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"tip\"].show)\n      .on(\"mouseout\", _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"tip\"].hide)\n      .merge(circles)\n      .transition(t)\n        .attr(\"fill\", function (d) { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent); })\n        .attr(\"cy\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])(d.life_exp) })\n        .attr(\"cx\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])(d.income) })\n        .attr(\"r\", d => {\n          return Math.sqrt(Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"area\"])(d.population) / Math.PI);\n        })\n        .attr(\"stroke\", \"black\")\n        .attr(\"stroke-width\", \"1px\");\n\n  _labels_axes_js__WEBPACK_IMPORTED_MODULE_2__[\"timeLabel\"].text(+(time + 1800))\n};\n\n//# sourceURL=webpack:///./src/update.js?");

/***/ }),

/***/ "./src/visual.js":
/*!***********************!*\
  !*** ./src/visual.js ***!
  \***********************/
/*! exports provided: Visual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Visual\", function() { return Visual; });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n/* harmony import */ var _legend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legend.js */ \"./src/legend.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n\n\n\n\nconst Visual = () => {\n  _legend_js__WEBPACK_IMPORTED_MODULE_1__[\"legend\"];\n  \n  d3.json(\"data/data.json\").then((data) => {\n\n    // changes data from string to integer\n    data.forEach(d => {\n      d.countries.forEach(c => {\n        c.income = +c.income;\n      });\n      d.year = +d.year;\n    });\n    \n    // formats data to get rid of null values\n    let formattedData = data.map(year => {\n      return year[\"countries\"].filter(country => {\n        let dataExists = (country.income && country.life_exp);\n        return dataExists;\n      })\n    });\n\n    // buttons and selectors\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"play\"])(formattedData);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"reset\"])(formattedData);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"updateSelect\"])(formattedData);\n\n    // let i = 0\n\n    // d3.interval(() => {\n    //   // At the end of our data, loop back\n    //   i = (i < 214) ? i + 1 : 0;\n    //   update(formattedData[i], i);\n    // }, 100);\n\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(formattedData[0], 0);\n \n  });\n};\n\n\n//# sourceURL=webpack:///./src/visual.js?");

/***/ })

/******/ });