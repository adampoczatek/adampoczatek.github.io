var watch;

watch = {
    dist: {
        files: [
            "<%= cssDir %>/**/*",
            "!<%= cssDir %>/style.css",
            "!<%= cssDir %>/style.min.css"
        ],
        tasks: ["build"]
    }
};

module.exports = watch;