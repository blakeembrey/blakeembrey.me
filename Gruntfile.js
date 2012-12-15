module.exports = function (grunt) {
  'use strict';

  // Grunt configuration:
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.initConfig({

    clean: {
      dist: ['dist/']
    },

    copy: {
      dist: {
        files: {
          'dist/': 'app/**'
        }
      }
    },

    mincss: {
      compress: {
        files: {
          'dist/public/css/main.css': 'dist/public/css/main.css'
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          removeCDATASectionsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeOptionalTags: true
        },
        files: {
          'dist/public/index.html': 'dist/public/index.html'
        }
      }
    },

    usemin: {
      html: 'dist/**/*.html',
      css: 'dist/**/*.css'
    }

  });

  // Can't use any of the usemin handlers or preparation as it breaks task configs
  grunt.registerTask('default', ['clean', 'copy', 'mincss', 'htmlmin']);
};
