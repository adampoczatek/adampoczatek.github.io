var gulp 			= require("gulp"),
	gutil			= require("gulp-util"),
	log 			= require("./src/build-tools/log"),
	gulpPlugins 	= require("gulp-load-plugins"),
	browserSync 	= require("browser-sync").create(),
	runSequence		= require("run-sequence"),
	jekyll			= require("./src/build-tools/jekyll"),
	path			= require("path"),
	Q 				= require("q"),
	transform 		= require("vinyl-transform"),
	browserify		= require("browserify"),
	glob 			= require("glob"),
	karmaServer		= require("karma").Server,
	plugin 			= gulpPlugins();

gulp.task("default", ["dev", "build:sass", "build:js", "watch:css", "watch:html", "watch:js"]); 

gulp.task("test", function (done) {
	new karmaServer({
		configFile:  __dirname + "/karma.conf.js",
		singleRun: true
	}, done).start();
});

gulp.task("uglify:js", function () {
	gulp.src("./assets/js/**/*.js")
		.pipe(plugin.uglify())
		.pipe(plugin.rename({
			extname: ".min.js"	
		}))
		.pipe(gulp.dest("./assets/js"));
});

gulp.task("build:babel", function () {
	return gulp.src("./src/js/**/*.js")
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.babel({
				loose: "all"
			}))
		.pipe(plugin.sourcemaps.write())
		.pipe(gulp.dest("./src/temp/js"));	
});

gulp.task("build:bundles", function () {
	var browserified = transform(function(filename) {
		var basename = path.basename(filename),
			expose = "modules/" + basename;

		return browserify(filename, {
				debug: true
			})
			.require(filename, { expose: expose })
		    .bundle();
	});

	gulp.src(["./src/temp/js/modules/**/*.js"])
		.pipe(plugin.sourcemaps.init())
		.pipe(browserified)
		.pipe(plugin.concat("lib.js"))
		.pipe(plugin.sourcemaps.write())
		.pipe(gulp.dest("./assets/js"))
});

// Build custom scripts.
gulp.task("build:client", function () {
	var deferred = Q.defer()

	// Get a list of all available modules.
	glob("./src/temp/js/modules/**/*.js", {}, function (err, files) {
		var modules, browserified;

		// Create new paths.
		modules = files.map(function (file) {
			return "modules/" + path.basename(file);
		});

		browserified = transform(function (filename) {
			return browserify(filename, {
					debug: true
				})
				.external(modules)
				.bundle();
		});

		gulp.src(["./src/temp/js/site/**/*.js"])
			.pipe(browserified)
			.pipe(gulp.dest("./assets/js"));

		deferred.resolve();
	});


	return deferred.promise;
});


// Starts jekyll and browser sync in development environment.
gulp.task("dev", function () {
	start(true);
});


// Starts jekyll and browser sync in production environment.
gulp.task("prod", function () {
	start(false);
});


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


// Builds jekyll in development environment.
gulp.task("jekyll:dev", function () {
	return jekyll.buildDev();
});


// Builds jekyll in production environment.
gulp.task("jekyl:prod", function () {
	return jekyll.buildProd();
});


// This tasks watches for every .html
gulp.task("watch:html", function () {
	gulp.watch([
			"./**/*.html",
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

// Watch for JS changes.
gulp.task("watch:js", function () {
	gulp.watch(["./src/**/*.js", "!./src/test/**/*.js"])
		.on("change", function () {
			runSequence("build:js", "jekyll:dev", function () {
				browserSync.reload();
			});
		})	
});

// Build all javascript files.
gulp.task("build:js", function () {
	var deferred = Q.defer();

	runSequence("build:babel", ["build:bundles", "build:client"], function () {
		deferred.resolve();
	});	

	return deferred.promise;
});

// ===== PRODUCTION TASKS =====
// use these before pushing your changes!


// This task is used to compile all necessary
// files for production.
gulp.task("production", function () {
	runSequence("build:sass", "build:js", function () {
		gulp.src("./assets/styles/style.css")
			.pipe(plugin.minifyCss())
			.pipe(plugin.rename("style.min.css"))
			.pipe(gulp.dest("./assets/styles"))
	});
});


// This task runs `production` task and then
// it also builds jekyll with `production` flag.
// The purpose of this task is to see how the website
// will look like with minified files.
gulp.task("production:preview", function () {
	runSequence("production", "prod");
});


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