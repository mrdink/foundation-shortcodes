'use strict';
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

    // Uglify
    uglify: {
      min: {
        files: {
          "editor.min.js": ["src/editor.js"]
        }
      }
    },

    // Watch for file changes
    watch: {
      options: {
        livereload: false
      },
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['uglify']
      },
      markup: {
        files: ["*.php"],
      },
      js: {
        files: ['src/**/*'],
        tasks: ['uglify']
      }
    }

	});

  grunt.registerTask('default', [
    'uglify',
    'watch'
  ]);

};