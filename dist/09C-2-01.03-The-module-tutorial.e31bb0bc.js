// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/canvas-circular-countdown/dist/CanvasCircularCountdown.js":[function(require,module,exports) {
var define;
/*!
 * canvas-circular-countdown
 * Draw a configurable circular canvas countdown timer
 * 
 * @version v1.1.1
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/canvas-circular-countdown#readme
 * @repository git+https://github.com/georapbox/canvas-circular-countdown.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CanvasCircularCountdown", [], factory);
	else if(typeof exports === 'object')
		exports["CanvasCircularCountdown"] = factory();
	else
		root["CanvasCircularCountdown"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/@georapbox/timer/dist/Timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@georapbox/timer/dist/Timer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @georapbox/timer
 * Minimal javascript library to create and manage timers
 * 
 * @version v1.0.0
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/Timer#readme
 * @repository git+https://github.com/georapbox/Timer.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tick = __webpack_require__(/*! ./tick */ "./src/tick.js");

var _tick2 = _interopRequireDefault(_tick);

var _now = __webpack_require__(/*! ./now */ "./src/now.js");

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  /**
   * Timer constructor
   *
   * @constructor Timer
   * @param {Number} [duration] The timer's duration (ms). If left undefined or 0 the timer counts up instead of down.
   * @param {Function} [callback] Function to be executed while timer is running. The Timer instance is passed by as parameter.
   */
  function Timer(duration, callback) {
    _classCallCheck(this, Timer);

    this._started = false;
    this._now = 0;
    this._time = 0;
    this._duration = duration;
    this._callback = callback;

    if (typeof duration === 'function') {
      this._duration = 0;
      this._callback = duration;
    }
  }

  /**
   * Get the remaining and elapsed time.
   * If no duration is specified during initialization, the remaining time will always be 0.
   *
   * @memberof Timer
   * @this {Timer}
   * @returns {Object} An object that contains the remaining and the elapsed time in milliseconds.
   */


  _createClass(Timer, [{
    key: 'time',
    value: function time() {
      return {
        remaining: Math.max(0, this._duration - this._time),
        elapsed: this._time
      };
    }

    /**
     * Start the timer.
     * If the timer instance has been already started, the timer will just resume.
     *
     * @memberof Timer
     * @this {Timer}
     * @param {Boolean} [shouldReset] If set to true, the timer will reset to initial specified duration.
     * @returns {Timer} The Timer instance.
     */

  }, {
    key: 'start',
    value: function start(shouldReset) {
      if (shouldReset) {
        this.reset(true);
      }

      if (this._started || Number(this._duration) && this._time > this._duration) {
        return this;
      }

      this._started = true;
      this._now = (0, _now2.default)();
      window.requestAnimationFrame(_tick2.default.bind(this, this));
      return this;
    }

    /**
     * Stop/Pause the timer.
     *
     * @memberof Timer
     * @this {Timer}
     * @returns {Timer} The Timer instance.
     */

  }, {
    key: 'stop',
    value: function stop() {
      this._started = false;
      return this;
    }

    /**
     * Resets the timer to initial specified duration.
     *
     * @memberof Timer
     * @this {Timer}
     * @param {Boolean} [shouldStop] If set to true, the timer will be forced to stop; otherwise will reset and continue running.
     * @returns {Timer} The Timer instance.
     */

  }, {
    key: 'reset',
    value: function reset(shouldStop) {
      if (shouldStop) {
        this.stop();
      }

      this._time = 0;
      return this;
    }
  }]);

  return Timer;
}();

exports.default = Timer;
module.exports = exports['default'];

/***/ }),

/***/ "./src/now.js":
/*!********************!*\
  !*** ./src/now.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = now;
function now() {
  return window.performance ? window.performance.now() : Date.now ? Date.now() : new Date().getTime();
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/tick.js":
/*!*********************!*\
  !*** ./src/tick.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tick;

var _now = __webpack_require__(/*! ./now */ "./src/now.js");

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tick(instance) {
  if (instance._started === false) {
    return;
  }

  instance._time = instance._time + (0, _now2.default)() - instance._now;
  instance.stop().start();
  instance._callback && instance._callback(instance);
}
module.exports = exports['default'];

/***/ })

/******/ });
});


/***/ }),

/***/ "./src/drawCanvas.js":
/*!***************************!*\
  !*** ./src/drawCanvas.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawCanvas;
function drawCanvas(percentage, instance) {
  var opts = instance.options;

  var circleStart = 1.5 * Math.PI;
  var circleEnd = circleStart + percentage / 50 * Math.PI;
  var ceiledPercentage = Math.ceil(percentage);

  // ensure that radius is not negative value
  var circleRadius = opts.radius < 0 ? 0 : opts.radius;
  var barRadius = opts.radius - opts.progressBarOffset - opts.progressBarWidth / 2;
  barRadius = barRadius < 0 ? 0 : barRadius;

  var centerX = circleRadius;
  var centerY = circleRadius;

  instance._ctx.clearRect(0, 0, instance._canvas.width, instance._canvas.height);

  // draw inner circle
  instance._ctx.beginPath();
  instance._ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI, false);
  instance._ctx.fillStyle = opts.circleBackgroundColor;
  instance._ctx.fill();

  // draw empty bar
  if (opts.progressBarWidth) {
    instance._ctx.beginPath();
    instance._ctx.arc(centerX, centerY, barRadius, circleStart, 4 * Math.PI, false);
    instance._ctx.lineWidth = opts.progressBarWidth;
    instance._ctx.strokeStyle = opts.emptyProgressBarBackgroundColor;
    instance._ctx.stroke();
  }

  // draw filled bar
  if (opts.progressBarWidth) {
    instance._ctx.beginPath();
    instance._ctx.arc(centerX, centerY, barRadius, circleStart, circleEnd, false);
    instance._ctx.lineWidth = opts.progressBarWidth;

    instance._ctx.strokeStyle = typeof opts.filledProgressBarBackgroundColor === 'function' ? opts.filledProgressBarBackgroundColor(ceiledPercentage, instance._timer.time()) : opts.filledProgressBarBackgroundColor;

    instance._ctx.stroke();
  }

  var shouldShowCaption = typeof opts.showCaption === 'function' ? opts.showCaption(ceiledPercentage, instance._timer.time()) : !!opts.showCaption;

  if (shouldShowCaption) {
    instance._ctx.fillStyle = typeof opts.captionColor === 'function' ? opts.captionColor(ceiledPercentage, instance._timer.time()) : opts.captionColor;

    instance._ctx.font = typeof opts.captionFont === 'function' ? opts.captionFont(ceiledPercentage, instance._timer.time()) : opts.captionFont;

    instance._ctx.textBaseline = 'middle';
    instance._ctx.textAlign = 'center';

    var captionStr = ceiledPercentage + '%';

    if (typeof opts.captionText === 'string') {
      captionStr = opts.captionText;
    } else if (typeof opts.captionText === 'function') {
      captionStr = opts.captionText(ceiledPercentage, instance._timer.time());
    }

    instance._ctx.fillText(captionStr, centerX, centerY);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _timer = __webpack_require__(/*! @georapbox/timer */ "./node_modules/@georapbox/timer/dist/Timer.js");

var _timer2 = _interopRequireDefault(_timer);

var _drawCanvas = __webpack_require__(/*! ./drawCanvas */ "./src/drawCanvas.js");

var _drawCanvas2 = _interopRequireDefault(_drawCanvas);

var _makeHighResCanvas = __webpack_require__(/*! ./makeHighResCanvas */ "./src/makeHighResCanvas.js");

var _makeHighResCanvas2 = _interopRequireDefault(_makeHighResCanvas);

var _normalise = __webpack_require__(/*! ./utils/normalise */ "./src/utils/normalise.js");

var _normalise2 = _interopRequireDefault(_normalise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasCircularCountdown = function () {
  function CanvasCircularCountdown(element, options, onTimerRunning) {
    var _this = this;

    _classCallCheck(this, CanvasCircularCountdown);

    var defaults = {
      duration: 60 * 1000, // ms
      radius: 150,
      progressBarWidth: 15,
      progressBarOffset: 5,
      circleBackgroundColor: '#ffffff',
      emptyProgressBarBackgroundColor: '#dddddd',
      filledProgressBarBackgroundColor: '#00bfeb',
      showCaption: true,
      captionColor: '#343a40',
      captionFont: '20px sans-serif'
    };

    if (typeof options === 'function') {
      onTimerRunning = options;
      options = {};
    }

    this.options = _extends({}, defaults, options);

    if (typeof this.options.duration !== 'number') {
      throw new TypeError('Expected a number for duration, instead got ' + _typeof(this.options.duration));
    }

    if (element.nodeName === 'CANVAS') {
      this._canvas = element;
    } else {
      var canvas = document.createElement('canvas');
      element.appendChild(canvas);
      this._canvas = canvas;
    }

    this._timer = new _timer2.default(this.options.duration, function (timer) {
      var percentage = (0, _normalise2.default)(timer.time().remaining, 0, _this.options.duration) * 100;
      (0, _drawCanvas2.default)(percentage, _this);
      typeof onTimerRunning === 'function' && onTimerRunning(Math.ceil(percentage), timer.time(), _this);
    });

    this._canvas.width = this.options.radius * 2;
    this._canvas.height = this.options.radius * 2;
    this._ctx = (0, _makeHighResCanvas2.default)(this._canvas);

    (0, _drawCanvas2.default)(100, this);
  }

  _createClass(CanvasCircularCountdown, [{
    key: 'style',
    value: function style() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      try {
        delete options.duration;
      } catch (error) {}

      var defaults = _extends({}, this.options);

      this.options = _extends({
        duration: this.options.duration
      }, defaults, options);

      var percentage = (0, _normalise2.default)(this._timer.time().remaining, 0, this.options.duration) * 100;

      this._canvas.width = this.options.radius * 2;
      this._canvas.height = this.options.radius * 2;
      this._ctx = (0, _makeHighResCanvas2.default)(this._canvas);

      (0, _drawCanvas2.default)(percentage, this);

      return this;
    }
  }, {
    key: 'start',
    value: function start() {
      if (this.options.duration === 0) {
        return this;
      }
      this._timer.start(false);
      return this;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._timer.stop();
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._timer.reset(true);
      (0, _drawCanvas2.default)(100, this);
      return this;
    }
  }]);

  return CanvasCircularCountdown;
}();

exports.default = CanvasCircularCountdown;
module.exports = exports['default'];

/***/ }),

/***/ "./src/makeHighResCanvas.js":
/*!**********************************!*\
  !*** ./src/makeHighResCanvas.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHighResCanvas;
function makeHighResCanvas(canvas) {
  var ctx = canvas.getContext('2d');
  var devicePixelRatio = window.devicePixelRatio || 1;

  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;

  var ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    var oldWidth = canvas.width;
    var oldHeight = canvas.height;

    canvas.width = Math.round(oldWidth * ratio);
    canvas.height = Math.round(oldHeight * ratio);
    canvas.style.width = oldWidth + 'px';
    canvas.style.height = oldHeight + 'px';

    ctx.scale(ratio, ratio);
  }

  return ctx;
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/normalise.js":
/*!********************************!*\
  !*** ./src/utils/normalise.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Takes a value within a range of values and converts that value
 * to a number from 0 to 1 that indicates where it lies in that range.
 *
 * @param {Number} value The numerical value to normalise.
 * @param {Number} min The minimum value of the range of values.
 * @param {Number} max The maximum value of the range of values.
 * @throws {TypeError} If any of the arguments passed is not a number.
 * @returns {Number} The normalised value.
 */
function normalise(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('"normalise" expects numbers as arguments');
  }

  return (value - min) / (max - min);
}

exports.default = normalise;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=CanvasCircularCountdown.js.map
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _canvasCircularCountdown = _interopRequireDefault(require("canvas-circular-countdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('countdown-canvas');
var form = document.querySelector('form');
var countdown = new _canvasCircularCountdown.default(canvas, {
  duration: 0,
  showCaption: true
}, function (percentage, time, instance) {
  if (time.elapsed >= 5000) {
    instance.stop();
  }
});
form.addEventListener('submit', function (e) {
  var todayDate = new Date(); //console.log(todayDate)

  var finalDate = new Date(form.elements.date.value); //Getting date difference

  var dateDifference = Math.abs(finalDate - todayDate) / 1000;
  var secondsDifference = dateDifference % 60;
  var milliSecondsDifference = secondsDifference * 1000; //console.log(finalDate)

  countdown.options.duration = milliSecondsDifference; //console.log(countdown.options.duration)

  e.preventDefault();
  countdown.start();
}); //console.log(CanvasCircularCountdown)
//onsole.log(startBtn)
},{"canvas-circular-countdown":"node_modules/canvas-circular-countdown/dist/CanvasCircularCountdown.js"}],"../../../../Users/Joshua/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59203" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/Joshua/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/09C-2-01.03-The-module-tutorial.e31bb0bc.js.map