module.exports = function(config) {

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1);
  }

  // Browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/OS combos
  var customLaunchers = {
    'SL_Chrome_Win': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 8.1'
    },
    'SL_Chrome_Mac': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Linux'
    },
    'SL_Chrome_Lin': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'OS X 10.10'
    },

    'SL_Firefox_Win': {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 8.1'
    },
    'SL_Firefox_Mac': {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Linux'
    },
    'SL_Firefox_Lin': {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'OS X 10.10'
    },

    'SL_IE_Win': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    'SL_IE_Mac': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Linux',
      version: '11'
    },
    'SL_IE_Lin': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'OS X 10.10',
      version: '11'
    },

    'SL_IE_10_Win': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8',
      version: '10'
    },

    'SL_IE_9_Win': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    },

    'SL_Iphone': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.10'
    },

    'SL_Android': {
      base: 'SauceLabs',
      browserName: 'android',
      platform: 'Linux',
      version: '4.2'
    }
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './assets/js/lib.js',
      './src/js/tests/**/*.js'
    ],
    reporters: ['progress', 'saucelabs'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    sauceLabs: {
      testName: 'Adam Poczatek Blog',
      recordScreenshots: false,
      connectOptions: {
        port: 5757,
        logfile: 'sauce_connect.log'
      }
    },
    logLevel: 'debug',
    // Increase timeout in case connection in CI is slow
    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};