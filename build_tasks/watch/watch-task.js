var watch;

watch = {
    dist: {
        files: [
            "./assets/**/*",
            "!<%= cssDir %>/style.css",
            "!<%= cssDir %>/style.min.css"
        ],
        tasks: ["build"]
    }
};

module.exports = watch;