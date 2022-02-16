// const { task } = require('gulp');
// // const task = require('gulp').task;

// task('hello', function (done) {
//   console.log('Hello Gulp');
//   done();
// });

const gulp = require('gulp');

gulp.task('task-1', function (done) {
  console.log('Task one completed');
  done();
});

gulp.task('task-2', function (done) {
  return gulp.src('./digits.txt');
});
