var gulp = require( 'gulp' );
var atom = require( 'gulp-atom' );

gulp.task( 'atom', function () {
	return atom( {
		srcPath: './compile',
		releasePath: './build',
		cachePath: './cache',
		version: 'v0.27.3',
		rebuild: false,
		platforms: [ 'win32-ia32' ]
	} );
} );
