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
	pngquant		= require("imagemin-pngquant"),
	karmaServer		= require("karma").Server,
	plugin 			= gulpPlugins();

gulp.task("default", ["dev", "build:sass", "build:js", "watch:css", "watch:html", "watch:js"]); 

gulp.task("test", function (done) {
	new karmaServer({
		configFile:  __dirname + "/karma.conf.local.js",
		singleRun: true
	}, done).start();
});

gulp.task("uglify:js", function () {
	log.info("Minifying JavaScript");

	return gulp.src(["./assets/js/**/*.js", "!./assets/js/**/*.min.js"])
		.pipe(plugin.uglify())
		.pipe(plugin.rename({
			extname: ".min.js"	
		}))
		.pipe(gulp.dest("./assets/js"));
});

// Convert ES2015  files.
gulp.task("build:babel", function () {
	var babelTask = plugin.babel({
		loose: "all"
	});

	log.info("Converting ES2015 to ES5");

	return gulp.src("./src/js/**/*.js")
		.pipe(plugin.sourcemaps.init())
		.pipe(babelTask)
   		.on("error", function (err) {
   			log.error(err.stack);
   			babelTask.end();
		})
		.pipe(plugin.sourcemaps.write())
		.pipe(gulp.dest("./src/temp/js"));
});

// Build modules bundle.
gulp.task("build:bundles", function () {
	log.info("Bundling modules");

	var browserified = transform(function(filename) {
		var basename = path.basename(filename),
			expose = "modules/" + basename;

		return browserify(filename, {
				debug: true
			})
			.require(filename, { expose: expose })
		    .bundle();
	});

	return gulp.src(["./src/temp/js/modules/**/*.js"])
		.pipe(plugin.sourcemaps.init())
		.pipe(browserified)
		.pipe(plugin.concat("lib.js"))
		.pipe(plugin.sourcemaps.write())
		.pipe(gulp.dest("./assets/js"))
});

// Build custom scripts.
gulp.task("build:client", function (done) {
	var modules, browserified, files;

	log.info("Building page-specific JavaScript files");

	files = glob.sync("./src/temp/js/modules/**/*.js");

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

	return gulp.src(["./src/temp/js/site/**/*.js"])
		.pipe(browserified)
		.pipe(gulp.dest("./assets/js"));
});


// Starts jekyll and browser sync in development environment.
gulp.task("dev", function () {
	log.info("Starting Jekyll (Development)");

	start(true);
});


// Starts jekyll and browser sync in production environment.
gulp.task("prod", function () {
	log.info("Starting Jekyll (Production)");

	start(false);
});


// Builds css file with sourcemaps and all
// necessary vendor prefixes.
gulp.task("build:sass", function () {
	log.info("Building SASS files");

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
	log.info("Watching CSS...");

	return gulp.watch(["./src/css/**/*.scss"])
		.on("change", function () {
			runSequence("build:sass", "jekyll:dev", function () {
				browserSync.reload("*.css");
			});
		})
});


// Builds jekyll in development environment.
gulp.task("jekyll:dev", function () {
	log.info("Building Jekyll (Development)");

	return jekyll.buildDev();
});


// Builds jekyll in production environment.
gulp.task("jekyl:prod", function () {
	log.info("Building Jekyll (Production)");

	return jekyll.buildProd();
});


// This tasks watches for every .html
gulp.task("watch:html", function () {
	log.info("Watching HTML...");

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
	log.info("Watching JS...");

	return gulp.watch(["./src/js/**/*.js", "!./src/js/test/**/*.js"])
		.on("change", function () {
			runSequence("build:js", "jekyll:dev", "test", function () {
				browserSync.reload();
			});
		})	
});

// Build all javascript files.
gulp.task("build:js", function (done) {
	log.info("Building all JavaScript files");

	runSequence("build:babel", "build:bundles", "build:client", done);	
});

// Optimise images.
gulp.task("imagemin", function () {
	log.info("Optimising images");

	return gulp.src("./src/images/*")
		.pipe(plugin.imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			use: [pngquant()]	
		}))
		.pipe(gulp.dest("./assets/images"));
});

// Minify CSS
gulp.task("cssmin", function () {
	return gulp.src("./assets/styles/style.css")
		.pipe(plugin.minifyCss())
		.pipe(plugin.rename("style.min.css"))
		.pipe(gulp.dest("./assets/styles"));
});


// ===== PRODUCTION TASKS =====
// use these before pushing your changes!


// This task is used to compile all necessary
// files for production.
gulp.task("production", function (done) {
	runSequence("build:sass", "cssmin", "build:js", "uglify:js", "imagemin", done);
});


// This task runs `production` task and then
// it also builds jekyll with `production` flag.
// The purpose of this task is to see how the website
// will look like with minified files.
gulp.task("production:preview", function (done) {
	runSequence("production", "prod", done);
});


// This methods will start jekyll (development or production
// environment) and run browser sync.
function start (dev) {
	jekyll.start(dev);

	browserSync.init({
		proxy: {
			target: "http://localhost:4000"
		},
		logLevel: "silent"
	});
}