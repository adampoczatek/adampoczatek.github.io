(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _modulesMoneyCalculatorJs = require("modules/moneyCalculator.js");

var lib = _interopRequireWildcard(_modulesMoneyCalculatorJs);

var _modulesModuleOneJs = require("modules/moduleOne.js");

var m1 = _interopRequireWildcard(_modulesModuleOneJs);

var Wallet = (function () {
	function Wallet(cash) {
		_classCallCheck(this, Wallet);

		this.cash = cash;
	}

	Wallet.prototype.getCash = function getCash() {
		return this.penceToPounds(this.cash);
	};

	Wallet.prototype.penceToPounds = function penceToPounds(amount) {
		return lib.penceToPounds(amount);
	};

	return Wallet;
})();

debugger;

var t = new Wallet(500);

$("body").css("background", "grey");

},{"modules/moduleOne.js":"modules/moduleOne.js","modules/moneyCalculator.js":"modules/moneyCalculator.js"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7d0NDQXFCLDRCQUE0Qjs7SUFBckMsR0FBRzs7a0NBQ0ssc0JBQXNCOztJQUE5QixFQUFFOztJQUVSLE1BQU07QUFDQSxVQUROLE1BQU0sQ0FDQyxJQUFJLEVBQUU7d0JBRGIsTUFBTTs7QUFFVixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztFQUNqQjs7QUFISSxPQUFNLFdBS1gsT0FBTyxHQUFDLG1CQUFHO0FBQ1YsU0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNyQzs7QUFQSSxPQUFNLFdBU1gsYUFBYSxHQUFDLHVCQUFDLE1BQU0sRUFBRTtBQUN0QixTQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDakM7O1FBWEksTUFBTTs7O0FBZVosU0FBUzs7QUFHVCxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICogYXMgbGliIGZyb20gXCJtb2R1bGVzL21vbmV5Q2FsY3VsYXRvci5qc1wiO1xyXG5pbXBvcnQgKiBhcyBtMSBmcm9tIFwibW9kdWxlcy9tb2R1bGVPbmUuanNcIjtcclxuXHJcbmNsYXNzIFdhbGxldCB7XHJcblx0Y29uc3RydWN0b3IoY2FzaCkge1xyXG5cdFx0dGhpcy5jYXNoID0gY2FzaDtcclxuXHR9XHJcblxyXG5cdGdldENhc2ggKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGVuY2VUb1BvdW5kcyh0aGlzLmNhc2gpO1xyXG5cdH1cclxuXHJcblx0cGVuY2VUb1BvdW5kcyAoYW1vdW50KSB7XHJcblx0XHRyZXR1cm4gbGliLnBlbmNlVG9Qb3VuZHMoYW1vdW50KTtcclxuXHR9IFxyXG59XHJcblxyXG4gXHJcbmRlYnVnZ2VyOyBcclxuXHJcblxyXG5sZXQgdCA9IG5ldyBXYWxsZXQoNTAwKTtcclxuXHJcbiQoXCJib2R5XCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCJncmV5XCIpO1xyXG4iXX0=
