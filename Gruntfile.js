'use strict';
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);
	grunt.initConfig({
    jshint: {
      options: {
        "bitwise": true,
        "browser": true,
        "curly": true,
        "eqeqeq": true,
        "eqnull": true,
        "esnext": true,
        "immed": true,
        "jquery": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "node": true,
        "strict": false,
        "trailing": true,
        "undef": true,
        "globals": {
          "jQuery": true,
          "alert": true,
          "tinymce": false
        }
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/**/*.min.*'
      ]
    },
		uglify: {
			min: {
				files: {
					"assets/js/editor.min.js": ["assets/js/editor.js"]
				}
			}
		},
		watch: {
			options: {
				livereload: false
			},
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['jshint', 'uglify']
			},
			markup: {
				files: ["*.php"],
			},
			js: {
				files: ['assets/**/*'],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.registerTask('default', [
    'jshint',
		'uglify',
		'watch'
	]);

};
