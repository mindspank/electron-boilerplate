var gulp = require( 'gulp' );
var livereload = require('gulp-livereload');
var requireDir = require( 'require-dir' );
var runSequence = require('run-sequence');
var run = require( 'gulp-run' );

requireDir( './gulp' );

function watchAndRebuild() {
	gulp.watch( ['./compile/**/*'], [ 'build' ] );
}

function watchAndRecompile() {
  livereload.listen({
    basePath: 'compile'
  });
  gulp.watch( './component/**/*', [ 'browserify' ] );
  gulp.watch( [ './index.html', './index.js' ], [ 'through' ] );
  gulp.watch( './style/**/*', [ 'less' ] );
}

gulp.task( 'watch-all', function () {
	watchAndRecompile();
	watchAndRebuild();
} );

gulp.task( 'watch-compile-build', runSequence('compile', 'build', 'watch-all', 'run') );

gulp.task( 'watch-compile', [ 'build' ], watchAndRecompile );
gulp.task( 'watch-build', [ 'build' ], watchAndRebuild );

gulp.task( 'default', [ 'watch-compile-build' ] );
