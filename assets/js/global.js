(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _modulesNavigationJs = require("modules/navigation.js");

var _modulesModalJs = require("modules/modal.js");

// Setup navigation.
_modulesNavigationJs.setupNav();

// Setup "Hire Me" modal.
new _modulesModalJs.Modal(document.getElementById("hire-me"), document.getElementById("hire-me-close"), document.querySelectorAll(".hire-me-trigger"));

},{"modules/modal.js":"modules/modal.js","modules/navigation.js":"modules/navigation.js"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O21DQ0F1Qix1QkFBdUI7OzhCQUMxQixrQkFBa0I7OztBQUl0QyxxQkFMUSxRQUFRLEVBS04sQ0FBQzs7O0FBR1gsb0JBUFEsS0FBSyxDQU9ILFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQ3hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQ3hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtzZXR1cE5hdn0gZnJvbSBcIm1vZHVsZXMvbmF2aWdhdGlvbi5qc1wiO1xyXG5pbXBvcnQge01vZGFsfSBmcm9tIFwibW9kdWxlcy9tb2RhbC5qc1wiO1xyXG5cclxuXHJcbi8vIFNldHVwIG5hdmlnYXRpb24uXHJcbnNldHVwTmF2KCk7XHJcblxyXG4vLyBTZXR1cCBcIkhpcmUgTWVcIiBtb2RhbC5cclxubmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZS1tZVwiKSwgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmUtbWUtY2xvc2VcIiksIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaXJlLW1lLXRyaWdnZXJcIikpOyJdfQ==
