var gutil = require("gulp-util");

module.exports = {
	error: function (message) {
		gutil.log(gutil.colors.red(message));
	},
	warning: function (message) {
		gutil.log(gutil.colors.yellow(message));
	},
	success: function (message) {
		gutil.log(gutil.colors.green(message))
	},
	info: function (message) {
		gutil.log(gutil.colors.cyan(message));
	}
};