var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var reactify = require( 'reactify' );
var source = require( 'vinyl-source-stream' );
var livereload = require('gulp-livereload');

gulp.task( 'browserify', function () {
	var bundler = browserify( {
		entries: [ './component/app.js' ],
		transform: [ reactify ]
	} );
	return bundler.bundle()
		.pipe( source( 'app.js' ) )
		.pipe( gulp.dest( './compile' ) )
    .pipe(livereload());
} );
