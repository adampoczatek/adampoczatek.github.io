# Adam Poczatek - Personal Site, 2015 

Build on Jekyll and hosted on Github. If you have any suggestions please [open a new issue](https://github.com/adampoczatek/adampoczatek.github.io/issues/new).

## Installation

This project is dependent on Jekyll so you need to have ruby installed as well as `jekyll` and `sass` gems. Once you clone this repo simply run:

```bash
npm install
```

This will get all remaining dependencies.

## Running this site locally

Once you have this repository cloned and all dependencies installed then you have couple of `gulp` tasks to choose from:

```bash
gulp
```

This (default) task will build CSS and JS and start Jekyll server in "development" environment. This means you will see .scss and ES 2015 files in the "sources" tab -- quite useful for debugging. This task will watch for changes to the source files and will automatically reload your browser.

```bash
gulp production:preview
```   

This task will give you a preview of what the site will look like once it's published. It will bundle all CSS and JS files and serve minified versions without any source maps.


[![Build Status](https://travis-ci.org/adampoczatek/adampoczatek.github.io.svg?branch=newsite)](https://travis-ci.org/adampoczatek/adampoczatek.github.io)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/adampoczatek_github.svg)](https://saucelabs.com/u/adampoczatek_github)