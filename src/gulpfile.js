const { src, dest, series } = require('gulp');
const atimport = require('postcss-import');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const tailwindcss = require('tailwindcss');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

const PUBLIC_CSS = '../assets/css';
const PUBLIC_JS = '../assets/js';

const SOURCE_STYLESHEET = '../assets/css/styles.css';
const TAILWIND_CONFIG = './tailwind.config.js';

var jsSources = [
	'js/lib/jquery-3.6.1.min.js',
	'js/app.js'
];

var sassSources = ['sass/styles.scss'];

function generateCSS(cb) {
	src(sassSources)
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(
			postcss([
				require('precss'),
				require('tailwindcss'),
				require('autoprefixer'),
			])
		)
		.pipe(dest(PUBLIC_CSS));
	cb();
}

function generateJs(cb) {
	src(jsSources).pipe(concat('app.js')).pipe(terser()).pipe(dest(PUBLIC_JS));

	cb();
}

function purgeCSS(cb) {
	src(SOURCE_STYLESHEET)
		.pipe(
			postcss([
				atimport(),
				tailwindcss(TAILWIND_CONFIG),
				purgecss({
					content: ['../**/*.html'],
					defaultExtractor: (content) =>
						content.match(/[\w-/:]+(?<!:)/g) || [],
				}),
			])
		)
		.pipe(
			cleanCSS({
				compatibility: 'ie8',
				level: {
					2: {
						removeDuplicateRules: true, // turns on removing duplicate rules
					},
				},
			})
		)
		.pipe(dest(PUBLIC_CSS, { overwrite: true }));

	cb();
}

function minifyHTML(cb) {
	src('../index.html')
		.pipe(htmlmin({ removeComments: true, collapseWhitespace: true }))
		.pipe(dest('../build', { overwrite: true }));

	cb();
}

exports.local = series(generateCSS, generateJs);
exports.purge = purgeCSS;
exports.minify = minifyHTML;
