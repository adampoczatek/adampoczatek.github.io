var gulp 			= require("gulp"),
	gutil			= require("gulp-util"),
	log 			= require("./src/build-tools/log"),
	gulpPlugins 	= require("gulp-load-plugins"),
	browserSync 	= require("browser-sync").create(),
	runSequence		= require("run-sequence"),
	jekyll			= require("./src/build-tools/jekyll"),
	buildJekyll		= jekyll.build,
	plugin 			= gulpPlugins();

gulp.task("default", ["dev", "watch:css", "watch:files"]); 

// `dev`
//
// Starts jekyll and browser sync in development environment.
gulp.task("dev", function () {
	start(true);
});

// `dev`
//
// Starts jekyll and browser sync in production environment.
gulp.task("prod", function () {
	start(false);
});

// `build:sass`
//
// Builds css file with sourcemaps and all
// necessary vendor prefixes.
gulp.task("build:sass", function () {
	return plugin.rubySass("./src/css/style.scss", {
			sourcemap: true
		})
		.pipe(plugin.autoprefixer({
			browsers: ["Firefox >= 31", "Chrome >= 36", "Safari >= 6", "ie >= 9"]
		}))
		.pipe(plugin.sourcemaps.write(".", {
			includeContent: false,
        	sourceRoot: "/src/css"
		}))
		.pipe(gulp.dest("./assets/styles"));
});

// `watch:css`
// 
// This task watches for sass changes and
// calls `sequence:sass` if something changes.
gulp.task("watch:css", function () {
	return gulp.watch(["./src/css/**/*.scss"])
		.on("change", function () {
			runSequence("build:sass", "jekyll:dev", function () {
				browserSync.reload("*.css");
			});
		})
});

// `jekyll:dev`
//
// Builds jekyll in development environment.
gulp.task("jekyll:dev", function () {
	return jekyll.buildDev();
});

// `jekyll:prod`
//
// Builds jekyll in production environment.
gulp.task("jekyl:prod", function () {
	return jekyll.buildProd();
});


// `watch:files`
//
// This tasks watches for every .html and
// .js file and if anything changes 
// `sequence:files` fill be called.
gulp.task("watch:files", function () {
	gulp.watch([
			"./**/*.html",
			"./assets/**/*.js",
			"!./node_modules",
			"!./_site/**/*",
			"!./src/build-tools" 
		])
		.on("change", function () {
			runSequence("jekyll:dev", function () {
				browserSync.reload();
			});
		});
});

// ===== PRODUCTION TASKS =====
// use these before pushing your changes!

// `production`
//
// This task is used to compile all necessary
// files for production.
gulp.task("production", function () {
	runSequence("build:sass", function () {
		gulp.src("./assets/styles/style.css")
			.pipe(plugin.minifyCss())
			.pipe(plugin.rename("style.min.css"))
			.pipe(gulp.dest("./assets/styles"))
	});
});

// `production:preview`
//
// This task runs `production` task and then
// it also builds jekyll with `production` flag.
// The purpose of this task is to see how the website
// will look like with minified files.
gulp.task("production:preview", function () {
	runSequence("production", "prod");
});

// `start`
//
// This methods will start jekyll (development or production
// environment) and run browser sync.
function start (dev) {
	jekyll.start(dev);

	browserSync.init({
		proxy: {
			target: "http://localhost:4000"
		}
	});
}