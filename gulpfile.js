var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
	browserSync.init({
    		server: {
      		baseDir: ''
      	}
      });
});

gulp.task('default', ['serve'], function() {
	gulp.watch('/*.html').on('change', reload);
	gulp.watch('css/**/*.css').on('change', reload);
	gulp.watch('js/**/*.js').on('change', reload);
	gulp.watch('images/**/*.jpg').on('change', reload);
});