var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var livereload = require('gulp-livereload');

gulp.task( 'less', function () {
	return gulp.src( './style/**/*.less' )
		.pipe( less() )
		.pipe( gulp.dest( './compile/style' ) )
    .pipe(livereload());
} );
