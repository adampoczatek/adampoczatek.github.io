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

var test = function test(a, b) {
	var c = a * b,
	    d = undefined;

	{
		var myPrivVar = c;

		d = myPrivVar / 5 > 5;
	}

	return d;
};

test(4, 5);

var t = new Wallet('500');
console.log("Yes!");

},{"modules/moduleOne.js":"modules/moduleOne.js","modules/moneyCalculator.js":"modules/moneyCalculator.js"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7d0NDQXFCLDRCQUE0Qjs7SUFBckMsR0FBRzs7a0NBQ0ssc0JBQXNCOztJQUE5QixFQUFFOztJQUVSLE1BQU07QUFDQSxVQUROLE1BQU0sQ0FDQyxJQUFJLEVBQUU7d0JBRGIsTUFBTTs7QUFFVixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztFQUNqQjs7QUFISSxPQUFNLFdBS1gsT0FBTyxHQUFDLG1CQUFHO0FBQ1YsU0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNyQzs7QUFQSSxPQUFNLFdBU1gsYUFBYSxHQUFDLHVCQUFDLE1BQU0sRUFBRTtBQUN0QixTQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDakM7O1FBWEksTUFBTTs7O0FBY1osSUFBSSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUksQ0FBQyxFQUFDLENBQUMsRUFBSztBQUNuQixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQztLQUNWLENBQUMsWUFBQSxDQUFDOztBQUVIO0FBQ0MsTUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixHQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdEI7O0FBRUQsUUFBTyxDQUFDLENBQUM7Q0FDVCxDQUFBOztBQUVELElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRVIsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgKiBhcyBsaWIgZnJvbSBcIm1vZHVsZXMvbW9uZXlDYWxjdWxhdG9yLmpzXCI7XHJcbmltcG9ydCAqIGFzIG0xIGZyb20gXCJtb2R1bGVzL21vZHVsZU9uZS5qc1wiO1xyXG5cclxuY2xhc3MgV2FsbGV0IHtcclxuXHRjb25zdHJ1Y3RvcihjYXNoKSB7XHJcblx0XHR0aGlzLmNhc2ggPSBjYXNoO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FzaCAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wZW5jZVRvUG91bmRzKHRoaXMuY2FzaCk7XHJcblx0fVxyXG4gXHJcblx0cGVuY2VUb1BvdW5kcyAoYW1vdW50KSB7XHJcblx0XHRyZXR1cm4gbGliLnBlbmNlVG9Qb3VuZHMoYW1vdW50KTtcclxuXHR9IFxyXG59XHJcblxyXG5sZXQgdGVzdCA9IChhLGIpID0+IHtcclxuXHRsZXQgYyA9IGEqYixcclxuXHRcdGQ7XHJcblxyXG5cdHtcclxuXHRcdGxldCBteVByaXZWYXIgPSBjO1xyXG5cclxuXHRcdGQgPSBteVByaXZWYXIgLyA1ID4gNTsgIFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGQ7XHJcbn1cclxuXHJcbnRlc3QoNCw1KTsgXHJcblxyXG4gIGxldCB0ID0gbmV3IFdhbGxldCgnNTAwJyk7XHJcbmNvbnNvbGUubG9nKFwiWWVzIVwiKTsgIFxyXG4iXX0=
