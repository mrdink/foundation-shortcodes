'use strict';
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

    // Uglify
    uglify: {
      min: {
        files: {
          "assets/js/editor.min.js": ["src/js/editor.js"]
        }
      }
    }

	});

  grunt.registerTask('default', [
    'uglify',
    'watch'
  ]);

};