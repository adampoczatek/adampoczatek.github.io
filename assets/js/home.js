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

var t = new Wallet("500");
console.log("Yess, yes!");

},{"modules/moduleOne.js":"modules/moduleOne.js","modules/moneyCalculator.js":"modules/moneyCalculator.js"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7d0NDQXFCLDRCQUE0Qjs7SUFBckMsR0FBRzs7a0NBQ0ssc0JBQXNCOztJQUE5QixFQUFFOztJQUVSLE1BQU07QUFDQSxVQUROLE1BQU0sQ0FDQyxJQUFJLEVBQUU7d0JBRGIsTUFBTTs7QUFFVixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztFQUNqQjs7QUFISSxPQUFNLFdBS1gsT0FBTyxHQUFDLG1CQUFHO0FBQ1YsU0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNyQzs7QUFQSSxPQUFNLFdBU1gsYUFBYSxHQUFDLHVCQUFDLE1BQU0sRUFBRTtBQUN0QixTQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDakM7O1FBWEksTUFBTTs7O0FBZVosU0FBUzs7QUFHUCxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAqIGFzIGxpYiBmcm9tIFwibW9kdWxlcy9tb25leUNhbGN1bGF0b3IuanNcIjtcclxuaW1wb3J0ICogYXMgbTEgZnJvbSBcIm1vZHVsZXMvbW9kdWxlT25lLmpzXCI7XHJcblxyXG5jbGFzcyBXYWxsZXQge1xyXG5cdGNvbnN0cnVjdG9yKGNhc2gpIHtcclxuXHRcdHRoaXMuY2FzaCA9IGNhc2g7XHJcblx0fVxyXG5cclxuXHRnZXRDYXNoICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBlbmNlVG9Qb3VuZHModGhpcy5jYXNoKTtcclxuXHR9XHJcbiBcclxuXHRwZW5jZVRvUG91bmRzIChhbW91bnQpIHtcclxuXHRcdHJldHVybiBsaWIucGVuY2VUb1BvdW5kcyhhbW91bnQpO1xyXG5cdH0gXHJcbn1cclxuXHJcbiBcclxuZGVidWdnZXI7IFxyXG4gXHJcblxyXG4gIGxldCB0ID0gbmV3IFdhbGxldCgnNTAwJyk7XHJcbmNvbnNvbGUubG9nKFwiWWVzcywgeWVzIVwiKTsgIFxyXG4iXX0=
