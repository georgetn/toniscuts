var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
	browserSync.init({
    		server: {
      		baseDir: 'app'
      	}
      });
});

gulp.task('default', ['serve'], function() {
	gulp.watch('app/**/*.html').on('change', reload);
	gulp.watch('app/css/**/*.css').on('change', reload);
	gulp.watch('app/js/**/*.js').on('change', reload);
	gulp.watch('app/images/**/*.jpg').on('change', reload);
});