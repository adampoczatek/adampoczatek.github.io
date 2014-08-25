module.exports = function (grunt) {
    var matchdep;

    matchdep = require("matchdep");

    matchdep.filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        cssDir: "./assets/css",

        sass: require("./build_tasks/sass/sass-task.js"),
        watch: require("./build_tasks/watch/watch-task.js")
    });

    grunt.registerTask("build", ["sass"]);

    grunt.registerTask("start", ["build", "watch"]);

    grunt.registerTask("default", ["start"]);
};