(function () {

	'use strict';

	var sass = require('node-sass');

	module.exports = function (grunt) {

		require('load-grunt-tasks')(grunt);

		grunt.initConfig({
            babel: {
                options: {
                    presets: ['@babel/preset-env']
                },
                dist: {
                    files: {
                        'dist/js/jquery.peekabar.js': 'dist/js/jquery.peekabar.js'
                    }
                }
            },
			copy: {
				main: {
					files: [
						{
							expand: true,
							src: 'src/js/peekabar.js',
							dest: 'dist/js/',
							rename: function (dest) {
								return dest + 'jquery.peekabar.js';
							}
						}
					]
				}
			},
			uglify: {
				options: {
					mangle: true,
					sourceMap: true
				},
				my_target: {
					files: {
						'dist/js/jquery.peekabar.min.js': ['dist/js/jquery.peekabar.js']
					}
				}
			},
			sass: {
				options: {
                    implementation: sass,
					style: 'compressed'
				},
				dist: {
					files: {
						'dist/css/jquery.peekabar.css': 'src/scss/peekabar.scss'
					}
				}
			},
			cssmin: {
				options: {
					sourceMap: true
				},
				target: {
					files: {
						'dist/css/jquery.peekabar.min.css': ['dist/css/jquery.peekabar.css']
					}
				}
			},
			watch: {
				options: {
					nospawn: true
				},
				scripts: {
					files: 'src/js/peekabar.js',
					tasks: ['copy', 'uglify']
				},
				css: {
					files: 'src/scss/peekabar.scss',
					tasks: ['sass', 'cssmin']
				}
			}
		});

		grunt.registerTask('build', ['copy', 'babel', 'uglify', 'sass', 'cssmin']);
	};
})();
