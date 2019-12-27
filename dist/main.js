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
/*! exports provided: play, select, updateSelect, reset, sliderListener, createCheckBoxes, checkCountry, clearBoxes, clearAllChecks, checkListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSelect\", function() { return updateSelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliderListener\", function() { return sliderListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCheckBoxes\", function() { return createCheckBoxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCountry\", function() { return checkCountry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearBoxes\", function() { return clearBoxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAllChecks\", function() { return clearAllChecks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkListener\", function() { return checkListener; });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.js */ \"./src/tooltip.js\");\n\n\n\nlet selectedCountries;\nlet i = 0;\nlet interval;\n\n// ================================= Play ======================================\n\nconst playButton = document.getElementById(\"play-button\");\n\nconst play = (data) => {\n\n  playButton.addEventListener(\"click\", (e) => {\n\n    if (playButton.textContent === \"Play\") {\n      playButton.textContent = \"Pause\";\n      interval = setInterval(() => step(data), 100);\n\n    } else if (playButton.textContent === \"Pause\") {\n      playButton.textContent = \"Play\";\n      clearInterval(interval);\n    }\n  });\n\n};\n\nconst step = (data) => {\n  // i = (i < 214) ? i + 1 : 214;\n  i = (i < 214) ? i + 1 : 0;\n  rangeslider.value = 1800 + i;\n  output.innerHTML = rangeslider.value;\n  Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n};\n\n\n// ================================= Select ====================================\n\nconst selector = document.getElementById(\"continent-select\");\n\nconst select = (data) => {\n\n  let continent = selector.value;\n  let selected;\n\n  data = data.filter(d => {\n    if (continent === \"all\") {\n      selected = false;\n      return true;\n    } else {\n      selected = true;\n      return d.continent === continent;\n    }\n  });\n\n  return [data, selected, continent];\n};\n\nconst updateSelect = (data) => {\n  selector.addEventListener(\"change\", () => {\n    // selectedCountries = [];\n    // checked = false;\n    selectedCountries = [];\n    // selector.value = \"all\";\n    clearBoxes();\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n    // clearBoxes();\n    // update(data[i], i);    \n  });\n};\n\n// ================================ Reset ======================================\n\nconst resetButton = document.getElementById(\"reset-button\");\n\nconst reset = (data) => {\n\n  resetButton.addEventListener(\"click\", (e) => {\n    i = 0;\n    playButton.textContent = \"Play\";\n    clearInterval(interval);\n    rangeslider.value = 1800;\n    output.innerHTML = rangeslider.value;\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[0], 0);\n  });\n\n};\n\n// ============================== Slider ==================================\n\nlet rangeslider = document.getElementById(\"sliderRange\");\nlet output = document.getElementById(\"demo\");\n\noutput.innerHTML = rangeslider.value;\n\nconst sliderListener = data => {\n\n  rangeslider.addEventListener('input', () => {\n    clearInterval(interval);\n    playButton.textContent = \"Play\";\n    output.innerHTML = rangeslider.value;\n    i = rangeslider.value - 1800;\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n  });\n  \n  rangeslider.addEventListener('click', () => {\n    clearInterval(interval);\n    playButton.textContent = \"Play\";\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n  });\n};\n\n// ============================== Check Boxes ==================================\n\nconst checkBoxForm = document.getElementById(\"country-radio\");\n\nconst createCheckBoxes = (countries) => {\n  let x = '';\n  countries.forEach( (country, i) => {\n    let container = document.createElement(\"div\");\n    container.setAttribute(\"class\", \"checkboxes\");\n\n    let label = document.createElement(\"span\");\n    label.setAttribute(\"class\", \"box-label\");\n    label.innerHTML += country;\n\n\n    let box = document.createElement(\"span\");\n    box.setAttribute(\"class\", \"each-box\");\n\n    x = document.createElement(\"input\");\n    x.setAttribute(\"type\", \"checkbox\");\n    x.setAttribute(\"name\", `countries-check`);\n    x.setAttribute(\"value\", `${country}`);\n    x.setAttribute(\"class\", \"input-checkbox\");\n\n    box.appendChild(x);\n\n    container.appendChild(box);\n    container.appendChild(label);\n    checkBoxForm.appendChild(container);\n  });\n};\n\nconst checkCountry = (data) => {\n  let checked;\n\n  let checkedBoxes = document.querySelectorAll('input[name=countries-check]:checked');\n  selectedCountries = [];\n  \n  checkedBoxes.forEach((obj) => {\n    selectedCountries.push(obj.value);\n  });\n\n  data = data.filter( d => {\n\n    if (selectedCountries.length === 0) {\n      checked = false;\n      return true;\n    } else {\n      checked = true;\n      return selectedCountries.includes(d.country);\n    }\n  });\n\n  return [data, checked];\n};\n\nconst allBoxes = document.getElementsByName(\"countries-check\")\n\nconst clearBoxes = () => {\n  allBoxes.forEach( box => {\n    if (box.type === 'checkbox') {\n      box.checked = false;\n    }\n  })\n}\n\nconst clearChecks = document.getElementById(\"clear-checks\");\n\nconst clearAllChecks = data => {\n  clearChecks.addEventListener('click', e => {\n    // clearBoxes();\n    selectedCountries = [];\n    selector.value = \"all\";\n    clearBoxes();\n    playButton.textContent = \"Play\";\n    clearInterval(interval);\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n  })\n}\n\nconst checkListener = data => {\n  allBoxes.forEach ( box => {\n    box.addEventListener('change', () => {\n      selector.value = \"all\";\n      Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(data[i], i);\n    })\n  })\n}\n\n//# sourceURL=webpack:///./src/buttons.js?");

/***/ }),

/***/ "./src/chart-area.js":
/*!***************************!*\
  !*** ./src/chart-area.js ***!
  \***************************/
/*! exports provided: width, height, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return g; });\nconst margin = { left: 80, right: 50, top: 10, bottom: 280 };\n\nconst width = 750 - margin.left - margin.right;\nconst height = 640 - margin.top - margin.bottom;\n\nconst g = d3.select(\"#chart-area\")\n  .append(\"svg\")\n  .attr(\"width\", width + margin.left + margin.right)\n  .attr(\"height\", height + margin.top + margin.bottom)\n  .append(\"g\")\n  .attr(\"transform\", \"translate(\" + margin.left\n    + \", \" + margin.top + \")\");\n\n\n\n//# sourceURL=webpack:///./src/chart-area.js?");

/***/ }),

/***/ "./src/continent_legends.js":
/*!**********************************!*\
  !*** ./src/continent_legends.js ***!
  \**********************************/
/*! exports provided: contLegend, createContLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contLegend\", function() { return contLegend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContLegend\", function() { return createContLegend; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n// import { africa } from './visual'\n\nconst all = { \n  \"africa\": \n    [\"Zambia\", \"Uganda\", \"Tunisia\", \"Togo\", \"Tanzania\", \"Swaziland\", \"South Sudan\", \n    \"South Africa\", \"Senegal\", \"Sao Tome and Principe\", \"Rwanda\", \"Somalia\", \n    \"Gabon\", \"Egypt\", \"Algeria\", \"Cote d'Ivoire\", \"Liberia\", \"Sierra Leone\", \n    \"Congo, Rep.\", \"Congo, Dem. Rep.\", \"Gambia\", \"Benin\", \"Namibia\", \"Eritrea\", \n    \"Djibouti\", \"Cape Verde\", \"Sudan\", \"Central African Republic\", \"Guinea\", \n    \"Equatorial Guinea\", \"Lesotho\", \"Chad\", \"Burundi\", \"Ghana\", \"Burkina Faso\", \n    \"Angola\", \"Morocco\", \"Cameroon\", \"Niger\", \"Botswana\", \"Kenya\", \"Zimbabwe\", \n    \"Libya\", \"Guinea-Bissau\", \"Madagascar\", \"Malawi\", \"Mauritania\", \"Mauritius\", \n    \"Mozambique\", \"Nigeria\", \"Seychelles\", \"Mali\", \"Comoros\", \"Ethiopia\"],\n  \"asia\": \n    [\"Vanuatu\", \"Uzbekistan\", \"Vietnam\", \"Turkmenistan\", \"Tonga\", \"Timor-Leste\", \n    \"Thailand\", \"Tajikistan\", \"Taiwan\", \"Syria\", \"Yemen\", \"South Korea\", \n    \"Solomon Islands\", \"Singapore\", \"Saudi Arabia\", \"Samoa\", \"Qatar\", \"Maldives\", \n    \"Myanmar\", \"Bhutan\", \"Fiji\", \"United Arab Emirates\", \"Macao, China\", \"Nepal\", \n    \"Cambodia\", \"New Zealand\", \"Kazakhstan\", \"Philippines\", \"Afghanistan\", \n    \"Pakistan\", \"Kiribati\", \"India\", \"Mongolia\", \"Bahrain\", \"Bangladesh\", \n    \"Oman\", \"Japan\", \"Micronesia, Fed. Sts.\", \"North Korea\", \"Hong Kong, China\", \n    \"China\", \"Iraq\", \"Iran\", \"Jordan\", \"Kuwait\", \"Kyrgyz Republic\", \"Lao\", \n    \"Israel\", \"Australia\", \"Malaysia\", \"Indonesia\", \"Sri Lanka\", \"Palestine\", \n    \"Lebanon\", \"Papua New Guinea\", \"Brunei\"\n  ],\n  \"americas\": \n    [\"Venezuela\", \"Uruguay\", \"United States\", \"Suriname\", \"Bahamas\", \n    \"St. Vincent and the Grenadines\", \n    \"Argentina\", \"Bolivia\", \"Cuba\", \"Haiti\", \"Colombia\", \"Chile\", \"El Salvador\", \n    \"Costa Rica\", \"Brazil\", \"Aruba\", \"Antigua and Barbuda\", \"Ecuador\", \"Mexico\", \n    \"St. Lucia\", \"Grenada\", \"Dominican Republic\", \"Jamaica\", \"Belize\", \"Canada\", \n    \"Guatemala\", \"Guyana\", \"Paraguay\", \"Puerto Rico\", \"Trinidad and Tobago\", \n    \"Barbados\", \"Nicaragua\", \"Panama\", \"Honduras\", \"Peru\"],\n  \"europe\": \n    [\"United Kingdom\", \"Ukraine\", \"Turkey\", \"Sweden\", \"Slovenia\", \"Portugal\", \n    \"Georgia\", \"Finland\", \"Germany\", \"Slovak Republic\", \"Estonia\", \"Cyprus\", \n    \"Belgium\", \"Denmark\", \"France\", \"Austria\", \"Switzerland\", \"Montenegro\", \n    \"Czech Republic\", \"Greenland\", \"Greece\", \"Azerbaijan\", \"Hungary\", \"Romania\", \n    \"Armenia\", \"Spain\", \"Albania\", \"Russia\", \"Poland\", \"Serbia\", \"Moldova\", \n    \"Bosnia and Herzegovina\", \"Bulgaria\", \"Latvia\", \"Belarus\", \"Ireland\", \n    \"Italy\", \"Lithuania\", \"Luxembourg\", \"Macedonia, FYR\", \"Malta\", \"Norway\", \n    \"Netherlands\", \"Iceland\"],\n  \"all\": []\n};\n\nlet contLegend = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"transform\", \"translate(\" + 40 + \",\" + (_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 60) + \")\")\n\nconst createContLegend = (continent) => {\n  contLegend.remove();\n\n  contLegend = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n    .attr(\"transform\", \"translate(\" + 40 + \",\" + (_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 60) + \")\");\n  \n  if (continent === \"all\") {\n    contLegend.append(\"text\")\n      .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"]/2 - 40)\n      .attr(\"y\", 40)\n      .attr(\"text-anchor\", \"middle\")\n      .attr(\"font-size\", \"16px\")\n      .attr(\"fill\", \"rgb(216, 216, 216)\")\n      .text(\"Select a continent to see it's list of countries here\");\n  }\n\n  let countries = all[continent];\n\n  countries.sort();\n  \n  countries.forEach((country, i) => {\n\n    let c = 5;   // number of columns\n    let h = 15;  // legend entry height\n    let w = 150; // legend entry width (so we can position the next column) \n    let tx = 2; // tx/ty are essentially margin values\n    let ty = 2;\n    let x = i % c * w + tx;\n    let y = Math.floor(i / c) * h + ty;\n\n      let legendRow = contLegend.append(\"g\")\n        .attr(\"transform\",\n          \"translate(\" + x + \",\" + y + \")\")\n\n    legendRow.append(\"rect\")\n      .attr(\"width\", 7)\n      .attr(\"height\", 7)\n\n    console.log(continent);\n    if (continent === \"asia\") {\n      legendRow.attr(\"fill\", Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"asiaColor\"])(country));\n    } else if (continent === \"europe\") {\n      legendRow.attr(\"fill\", Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"europeColor\"])(country));\n    } else if (continent === \"americas\") {\n      legendRow.attr(\"fill\", Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"americaColor\"])(country));\n    } else {\n      legendRow.attr(\"fill\", Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"africaColor\"])(country));\n    }\n\n      legendRow.append(\"text\")\n        .attr(\"x\", -2)\n        .attr(\"y\", 7)\n        .attr(\"text-anchor\", \"end\")\n        .attr(\"font-size\", \"9px\")\n        .style(\"text-transform\", \"capitalize\")\n        .text(country);\n\n  });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/continent_legends.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _visual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual.js */ \"./src/visual.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\nconsole.log(\"webpack is working\")\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  Object(_visual_js__WEBPACK_IMPORTED_MODULE_0__[\"Visual\"])();\n\n  Object(_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"modalFunction\"])();\n});\n \n\n//working\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/labels+axes.js":
/*!****************************!*\
  !*** ./src/labels+axes.js ***!
  \****************************/
/*! exports provided: timeLabel, xAxisCall, yAxisCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeLabel\", function() { return timeLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xAxisCall\", function() { return xAxisCall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yAxisCall\", function() { return yAxisCall; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n\n// ============================= Labels ===================================\n\nconst xLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 40)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] / 2)\n  .attr(\"font-size\", \"17px\")\n  .attr(\"text-anchor\", \"middle\")\n  .attr(\"font-weight\", \"600\")\n  // .attr(\"fill\", \"rgb(170, 170, 170)\")\n  .text(\"GDP Per Capita ($)\");\nconst yLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"transform\", \"rotate(-90)\")\n  .attr(\"y\", -40)\n  .attr(\"x\", - _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"]/2)\n  .attr(\"font-size\", \"17px\")\n  .attr(\"text-anchor\", \"middle\")\n  .attr(\"font-weight\", \"600\")\n  // .attr(\"fill\", \"rgb(170, 170, 170)\")\n  .text(\"Life Expectancy (Years)\");\nconst timeLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] - 10)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 45)\n  .attr(\"font-size\", \"40px\")\n  .attr(\"opacity\", \"0.9\")\n  .attr(\"fill\", \"rgb(170, 170, 170)\")\n  .attr(\"text-anchor\", \"middle\")\n  .attr(\"class\", \"time-label\")\n  .text(\"1800\");\n\n\n// ============================= Axes ===================================\n\n// X Axis\nconst xAxisCall = d3.axisBottom(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])\n  .tickValues([400, 4000, 40000])\n  .tickFormat(d3.format(\"$\"));\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"x-axis\")\n  .attr(\"transform\", \"translate(0, \" + _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + \")\")\n  .attr(\"stroke-width\", \"1.5px\")\n  .call(xAxisCall);\n\n// Y Axis\nconst yAxisCall = d3.axisLeft(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])\n  .ticks(10)\n  .tickFormat(d => { return + d; });\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"y-axis\")\n  .attr(\"stroke-width\", \"1.5px\")\n  .call(yAxisCall);\n\n\n// ============================= Linear Line ===================================\n\nconst line = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"line\")\n  .attr(\"x1\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"])\n  .attr(\"y1\", 0)\n  .attr(\"x2\", 1)\n  .attr(\"y2\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] - 1)\n  .attr(\"stroke\", \"#E0DEDE\")\n  .attr(\"stroke-width\", \"1px\");\n\n//# sourceURL=webpack:///./src/labels+axes.js?");

/***/ }),

/***/ "./src/legend.js":
/*!***********************!*\
  !*** ./src/legend.js ***!
  \***********************/
/*! exports provided: legend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legend\", function() { return legend; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n\nconst continents = [\"europe\", \"asia\", \"americas\", \"africa\"];\n\nconst legend = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"transform\", \"translate(\" + (_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 15) + \",\" + (_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] - 125) + \")\");\n// shift to bottom of visualization\n\ncontinents.forEach((continent, i) => {\n  let legendRow = legend.append(\"g\")\n    .attr(\"transform\", \"translate(0,\" + (i * 20) + \")\");\n  // using the index \"i\" so that each row are seperated by 20px in the y direction\n  // create the squares of colors\n  legendRow.append(\"rect\")\n    .attr(\"width\", 10)\n    .attr(\"height\", 10)\n    .attr(\"fill\", Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(continent));\n\n  // create the labels\n  legendRow.append(\"text\")\n    .attr(\"x\", -10)\n    // puts the texts -10px aka 10px to the left\n    .attr(\"y\", 10)\n    // y-val of 10 so that the texts lines up vertically\n    .attr(\"text-anchor\", \"end\")\n    // text anchor end so text gets appended from the end of the texts\n    .style(\"text-transform\", \"capitalize\")\n    // fomrats the texts \n    .text(continent);\n\n});\n\n//# sourceURL=webpack:///./src/legend.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: modalFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalFunction\", function() { return modalFunction; });\nconst modalFunction = () => {\n  // Get the modal\n  const modal = document.getElementById(\"myModal\");\n\n  // Get the button that opens the modal\n  const btn = document.getElementById(\"myBtn\");\n\n  // Get the <span> element that closes the modal\n  const span = document.getElementsByClassName(\"close\")[0];\n\n  // When the user clicks on the button, open the modal\n  btn.onclick = function () {\n    modal.style.display = \"block\";\n  }\n\n  // When the user clicks on <span> (x), close the modal\n  span.onclick = function () {\n    modal.style.display = \"none\";\n  }\n\n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/scales.js":
/*!***********************!*\
  !*** ./src/scales.js ***!
  \***********************/
/*! exports provided: x, y, area, continentColor, americaColor, africaColor, europeColor, asiaColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"x\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"y\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"continentColor\", function() { return continentColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"americaColor\", function() { return americaColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"africaColor\", function() { return africaColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"europeColor\", function() { return europeColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asiaColor\", function() { return asiaColor; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n\n\n// X Scale\nconst x = d3.scaleLog()\n  .domain([142, 150000])\n  .range([0, _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"]])\n  .base(10);\n\n// Y Scale\nconst y = d3.scaleLinear()\n  .range([_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"], 0])\n  .domain([0, 90]);\n\n// Area Scale\nconst area = d3.scaleLinear()\n  .range([25 * Math.PI, 1500 * Math.PI])\n  .domain([2000, 1400000000]);\n// scale by population\n\n// Color Scale\nconst continentColor = d3.scaleOrdinal().range([\"#65001c\", \"#335152\", \"#B58254\", \"#678869\"] );\n\nconst americaColor = d3.scaleOrdinal().range([\"rgb(49, 32, 17)\", \"rgb(85, 68, 52)\", \"rgb(131, 97, 66)\", \"rgb(153, 118, 85)\", \"rgb(195, 156, 119)\"] );\nconst africaColor = d3.scaleOrdinal().range([\"#172918\", \"#2e4d30\", \"#48724b\", \"#609063\", \"#81c585\"]);\n\nconst europeColor = d3.scaleOrdinal().range([\"#2a0c14\", \"#551929\", \"#792a3f\", \"#a84963\", \"#c07388\"]);\nconst asiaColor = d3.scaleOrdinal().range([\"#192525\", \"#406162\", \"#557c7e\", \"#4098a0\", \"#6fb7bd\"]);\n\n//# sourceURL=webpack:///./src/scales.js?");

/***/ }),

/***/ "./src/tooltip.js":
/*!************************!*\
  !*** ./src/tooltip.js ***!
  \************************/
/*! exports provided: tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tip\", function() { return tip; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\nconst tip = d3.tip().attr('class', 'd3-tip') // class to match css\n  // set html with a function\n  .html(d => {\n    let text = `<span>Country:</span> <span style='color: ${Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent)}'>` + d.country + \"</span><br>\";\n    text += `<span>Continent:</span> <span style='color: ${Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent)}; text-transform: capitalize'>` + d.continent + \"</span><br>\";\n    text += `<span>Life Expectancy:</span> <span style='color: ${Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent)}'>` + d3.format(\".2f\")(d.life_exp) + \"</span><br>\";\n    text += `<span>GDP Per Capita:</span> <span style='color: ${Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent)}'>` + d3.format(\"($.2f\")(d.income) + \"</span><br>\";\n    text += `<span>Population:</span> <span style='color: ${Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent)}'>` + d3.format(\",.0f\")(d.population) + \"</span><br>\";\n\n    return text;\n  });\n// #2E4B69\n// use call method to set context\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].call(tip);\n\n\n//# sourceURL=webpack:///./src/tooltip.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n/* harmony import */ var _labels_axes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labels+axes.js */ \"./src/labels+axes.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.js */ \"./src/tooltip.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n/* harmony import */ var _continent_legends_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continent_legends.js */ \"./src/continent_legends.js\");\n\n\n\n\n\n\n// import { formattedData } from './visual.js'\n\nconst labelColor = d3.scaleOrdinal()\n  .domain([\"europe\", \"asia\", \"americas\", \"africa\"])\n  .range([\"#4e0016\", \"#294041\", \"rgb(156, 112, 74)\", \"#557057\"]);\n\nconst update = (data, time) => {\n  const t = d3.transition().duration(100);\n\n  data = Object(_buttons_js__WEBPACK_IMPORTED_MODULE_4__[\"select\"])(data)[0];\n\n  data = Object(_buttons_js__WEBPACK_IMPORTED_MODULE_4__[\"checkCountry\"])(data)[0];\n\n  let checked = Object(_buttons_js__WEBPACK_IMPORTED_MODULE_4__[\"checkCountry\"])(data)[1];\n  let selected = Object(_buttons_js__WEBPACK_IMPORTED_MODULE_4__[\"select\"])(data)[1];\n  let continent = Object(_buttons_js__WEBPACK_IMPORTED_MODULE_4__[\"select\"])(data)[2];\n\n  // contLegend.remove();\n  \n  _continent_legends_js__WEBPACK_IMPORTED_MODULE_5__[\"contLegend\"];\n  Object(_continent_legends_js__WEBPACK_IMPORTED_MODULE_5__[\"createContLegend\"])(continent);\n\n\n  let color = (\n    d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent);}\n  );\n\n  if (selected && (continent === \"africa\")) {\n    color = (\n      d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"africaColor\"])(d.country); }\n    );\n  } else if (selected && (continent === \"asia\")) {\n    color = (\n      d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"asiaColor\"])(d.country); }\n    );\n  } else if (selected && (continent === \"europe\")) {\n    color = (\n      d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"europeColor\"])(d.country); }\n    );\n  } else if (selected && (continent === \"americas\")) {\n    color = (\n      d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"americaColor\"])(d.country); }\n    );\n  }\n\n\n\n  const circles = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].selectAll(\"circle\")\n    .data(data, d => {\n      return d.country;\n    });\n\n  circles.exit().remove();\n\n  circles.enter()\n    .append(\"circle\")\n      .on(\"mouseover\", _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"tip\"].show)\n      .on(\"mouseout\", _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"tip\"].hide)\n      .merge(circles)\n      .transition(t)\n        // .attr(\"fill\", (d) => { return continentColor(d.continent); })\n        .attr(\"fill\", color)\n        .attr(\"cy\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])(d.life_exp); })\n        .attr(\"cx\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])(d.income); })\n        .attr(\"r\", d => {\n          return Math.sqrt(Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"area\"])(d.population) / Math.PI);\n        })\n        .attr(\"stroke\", (d) => { return labelColor(d.continent); })\n        .attr(\"stroke-width\", \"1px\")\n        .attr(\"opacity\", \"0.8\");\n\n  let labelData \n\n  if (checked) {\n    labelData = data;\n  } else {\n    labelData =[];\n  }\n\n  const labels = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].selectAll(\"#labels\")\n    .data(labelData, d => {\n      return d.country;\n    });\n\n  labels.exit().remove();\n\n  labels.enter()\n    .append(\"text\")\n    .attr(\"id\", \"labels\")\n    .merge(labels)\n    .attr(\"y\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])(d.life_exp) - (Math.sqrt(Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"area\"])(d.population) / (1.5 * Math.PI)))  ; })\n    .attr(\"x\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])(d.income) + (Math.sqrt(Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"area\"])(d.population) / (1.5 * Math.PI))); })\n    .attr(\"font-size\", \"14px\")\n    .attr(\"font-weight\", \"bold\")\n    .attr(\"fill\", (d) => { return labelColor(d.continent); })\n    .text(d => { return d.country; });\n\n  _labels_axes_js__WEBPACK_IMPORTED_MODULE_2__[\"timeLabel\"].text(+(time + 1800));\n};\n\n//# sourceURL=webpack:///./src/update.js?");

/***/ }),

/***/ "./src/visual.js":
/*!***********************!*\
  !*** ./src/visual.js ***!
  \***********************/
/*! exports provided: formattedData, Visual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formattedData\", function() { return formattedData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Visual\", function() { return Visual; });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n/* harmony import */ var _legend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legend.js */ \"./src/legend.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n/* harmony import */ var _continent_legends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continent_legends.js */ \"./src/continent_legends.js\");\n\n\n\n\n\n\nlet formattedData;\n// export let africa = [];\n\nconst Visual = () => {\n  _legend_js__WEBPACK_IMPORTED_MODULE_1__[\"legend\"];\n  _continent_legends_js__WEBPACK_IMPORTED_MODULE_3__[\"contLegend\"];\n\n  d3.json(\"data/data.json\").then((data) => {\n\n    // changes data from string to integer\n    data.forEach(d => {\n      d.countries.forEach(c => {\n        c.income = +c.income;\n      });\n      d.year = +d.year;\n    });\n    \n    // formats data to get rid of null values\n    formattedData = data.map(year => {\n      return year[\"countries\"].filter(country => {\n        let dataExists = (country.income && country.life_exp);\n        return dataExists;\n      })\n    });\n\n    // buttons and selectors\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"play\"])(formattedData);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"reset\"])(formattedData);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"updateSelect\"])(formattedData);\n    // updateCountry(formattedData);\n    // updateSelectedCountry(formattedData);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"clearAllChecks\"])(formattedData);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"sliderListener\"])(formattedData);\n    // formattedData = selectCountry(formattedData)\n    \n    let countries = [];\n    \n    formattedData[0].forEach( r => {\n      // console.log(r)\n      countries.push(r.country)\n      // countries.push(r.country);\n    });\n    \n    countries.sort();\n  \n\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"createCheckBoxes\"])(countries);\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_2__[\"checkListener\"])(formattedData);\n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(formattedData[0], 0);\n \n  });\n};\n\n\n//# sourceURL=webpack:///./src/visual.js?");

/***/ })

/******/ });