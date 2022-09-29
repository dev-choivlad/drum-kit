const gulp = require('gulp');
const paths = require('../paths');

const audio = () => {
  return gulp.src(paths.app.sounds)
    .pipe(gulp.dest(paths.docs.sounds))
}

module.exports = audio;
