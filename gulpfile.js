var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('controller', function() {
 return gulp.src('./pages/**/*.controller.js')
   .pipe(concat('controller.js'))
   .pipe(gulp.dest('./js/'));
});

gulp.task('app', function() {
    return gulp.src('./pages/**/*.app.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./js/'));
   });
   gulp.task("moveFiles",function(){
    return gulp.src('./pages/**/*.html')
      .pipe(gulp.dest("html"));
});
gulp.task('watch', function() {
    gulp.watch('./pages/**/*.controller.js', ['controller']);
    gulp.watch('./pages/**/*.app.js', ['app']);
    gulp.watch('./pages/**/*.html', ['moveFiles'])
  });

// gulp.task('scripts', function() {
//     return gulp.src('./pages/**/main.controller.js')
//       .pipe(sourcemaps.init())
//         .pipe(concat('controller.js'))
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest('dist'));
//    });

 gulp.task('default', ['watch','app','controller','moveFiles']);
