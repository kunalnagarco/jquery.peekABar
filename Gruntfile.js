(function() {

	'use strict';

	module.exports = function(grunt) {
		require('load-grunt-tasks')(grunt);
		grunt.initConfig({
			copy: {
				main: {
					files: [
						{
							expand: true,
							src: 'src/js/peekabar.js',
							dest: 'dist/js/',
							rename: function(dest, src) {
								return dest + 'jquery.peekabar.js';
							}
						}
					]
				}
			},
			uglify: {
				options: {
					mangle: false
				},
				my_target: {
					files: {
						'dist/js/jquery.peekabar.min.js': ['src/js/peekabar.js']
					}
				}
			},
			sass: {
				options: {
					sourceMap: true,
					style: 'compact'
				},
				dist: {
					files: {
						'dist/css/jquery.peekabar.min.css': 'src/scss/peekabar.scss'
					}
				}
			},
			watch: {
				options: {
					nospawn: true
				},
				scripts: {
					files: 'src/js/peekabar.js',
					tasks: ['uglify']
				},
				css: {
					files: 'src/scss/peekabar.scss',
					tasks: ['sass']
				}
			}
		});
	};
})();
