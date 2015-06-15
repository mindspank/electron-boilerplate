var gulp = require( 'gulp' );
var livereload = require('gulp-livereload');

gulp.task( 'through', function () {
	return gulp.src( [ './index.html', './index.js' ] )
		.pipe( gulp.dest( './compile' ) )
    .pipe(livereload());
} );
