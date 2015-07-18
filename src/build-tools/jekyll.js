var log 	= require("./log.js"),
	exec	= require("child_process").exec,
	Q 		= require("q");

module.exports = {
	start: function (dev) {
		var deferred = Q.defer(),
			query = "jekyll serve --no-watch";
		
		log.info("Jekyll started.");

		if (dev) {
			query += " --config=_config.yml,_config-dev.yml";
		}

		exec(query, function (err, stdout, stderr) {
			deferred.resolve();
			
			if (err) {
				log.error("Jekyll failed: " + err.message);
			}
			else {
				log.success("Jekyll is running!");
			}
		});

		return deferred.promise;
	},
	build: function (dev) {
		var deferred = Q.defer(),
			query = "jekyll build";
		
		log.info("Jekyll rebuild started.");

		if (dev) {
			query += " --config=_config.yml,_config-dev.yml";
		}

		exec(query, function (err, stdout, stderr) {
			deferred.resolve();
			
			if (err) {
				log.error("Jekyll buid failed: " + err.message);
			}
			else {
				log.success("Jekyll build succeeded!");
			}
		});

		return deferred.promise;
	},

	buildDev: function () {
		return this.build(true);
	},

	buildProd: function () {
		return this.build(false);
	}
};