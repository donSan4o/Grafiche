var gulp       = require('gulp'), // Gulp
	sass         = require('gulp-sass'), // the Sass package,
	browserSync  = require('browser-sync'), // Browser Sync
	concat       = require('gulp-concat'), // gulp-concat (for concatenating files)
	uglify       = require('gulp-uglifyjs'), // gulp-uglifyjs (minifiying JS)
	cssnano      = require('gulp-cssnano'), // CSS minification
	rename       = require('gulp-rename'), // Library for automatic file rename
	del          = require('del'), // Library for auto file deleting 
	imagemin     = require('gulp-imagemin'), // Library for operationg and minifiying images
	pngquant     = require('imagemin-pngquant'), // to work with png
	cache        = require('gulp-cache'), // For clean cache
	autoprefixer = require('gulp-autoprefixer');// Autoprefixer library
	gulpIncludeTemplate = require("gulp-include-template"); //Template

gulp.task('sass', function(){ // Creating Sass task
	return gulp.src('app/sass/**/*.sass') // Source select
		.pipe(sass()) // Convert Sass to CSS using gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7', 'Firefox >= 20'], { cascade: true })) // Creating prefixes
		.pipe(gulp.dest('app/css')) // Uploading results to app/css
		.pipe(browserSync.reload({stream: true})) // Refreshing CSS live on page
});

gulp.task("includeTemplate", function() {
    return gulp.src("app/html/*.html")
        .pipe(gulpIncludeTemplate())
        .pipe(gulp.dest("app"));
});

gulp.task('browser-sync', function() { // Creating browser-sync task
	browserSync({ // Perform browserSync
		server: { // Server parameters difining
			baseDir: 'app' // Server directory - app
		},
		notify: false //Turning notifications off
	});
});

gulp.task('scripts', function() {
	return gulp.src([ // all the necessary libraries
		'app/libs/jquery/dist/jquery.min.js' // jQuery
		])
		.pipe(concat('libs.min.js')) // Connecting all in libs.min.js
		.pipe(uglify()) // Minifiying JS files
		.pipe(gulp.dest('app/js')); // Upload all to app/js
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css') // Defining file for minification
		.pipe(cssnano()) // Minifiying
		.pipe(rename({suffix: '.min'})) // Adding suffix .min
		.pipe(gulp.dest('app/css')); // Uploading to  app/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'includeTemplate', 'scripts'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']); // Watching for sass files in sass folder
	gulp.watch('app/html/*.html', browserSync.reload); // Watching for HTML files in root directory
	gulp.watch('app/js/**/*.js', browserSync.reload);   // Watching for JS files in JS folder
});

gulp.task('clean', function() {
	return del.sync('dist'); // Deleting dist folder before building
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Taking al images from app folder
		.pipe(cache(imagemin({  // Minifiying with best settings including caching
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Uploading to productiong
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ // Moving libraries to production folder
		'app/css/*.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // Fonts to production
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') // Scripts to production
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // HTML files to production
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);