const gulp = require("gulp");

// INDIVIDUAL TASKS
const Config = require("./config/paths")
const scssTask = require("./tasks/scssTask").scssTask;
const jsTask = require("./tasks/jsTask").jsTask;

// BUILD TASKS
const build = gulp.series(
  scssTask,
  // jsTask,
);

// PRODUCTION TASKS
const production = gulp.series(
  gulp.parallel(
    scssTask,
    // jsTask,
  )
);


// WATCH TASKS
const watch = () => {
  build();

  gulp.watch("./src/scss/**/*", scssTask);

  // gulp.watch(Config.srcPaths.js, jsTask);
};

// EXPORTED TASKS
exports.scssTask = scssTask;
exports.jsTask = jsTask;


// Build, Production and Default tasks
exports.build = build;
exports.production = production;
exports.default = watch;