module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './assets/js/lib.js',
      './src/js/tests/**/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    browsers: ["PhantomJS"],
    logLevel: config.LOG_ERROR,
    singleRun: true
  });
};