(function () {
  'use strict';

  var sass = require('node-sass');

  module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      babel: {
        options: {
          presets: ['@babel/preset-env'],
        },
        dist: {
          files: {
            'build/dist/js/jquery.peekabar.js':
              'build/dist/js/jquery.peekabar.js',
          },
        },
      },
      copy: {
        main: {
          files: [
            {
              expand: true,
              src: 'src/js/peekabar.js',
              dest: 'build/dist/js/',
              rename: function (dest) {
                return dest + 'jquery.peekabar.js';
              },
            },
          ],
        },
      },
      uglify: {
        options: {
          mangle: true,
          sourceMap: true,
        },
        my_target: {
          files: {
            'build/dist/js/jquery.peekabar.min.js': [
              'build/dist/js/jquery.peekabar.js',
            ],
          },
        },
      },
      sass: {
        options: {
          implementation: sass,
          style: 'compressed',
        },
        dist: {
          files: {
            'build/dist/css/jquery.peekabar.css': 'src/scss/peekabar.scss',
          },
        },
      },
      cssmin: {
        options: {
          sourceMap: true,
        },
        target: {
          files: {
            'build/dist/css/jquery.peekabar.min.css': [
              'build/dist/css/jquery.peekabar.css',
            ],
          },
        },
      },
      watch: {
        options: {
          nospawn: true,
        },
        scripts: {
          files: 'src/js/peekabar.js',
          tasks: ['copy', 'uglify'],
        },
        css: {
          files: 'src/scss/peekabar.scss',
          tasks: ['sass', 'cssmin'],
        },
      },
    });

    grunt.registerTask('build', ['copy', 'babel', 'uglify', 'sass', 'cssmin']);
  };
})();
