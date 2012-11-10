module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/*_test.js']
    },
    concat: {
      // Public JS
      'public': {
        src: [
          // sugar
          'public/js/sugar.js',
          // jQuery, then Bootstrap
          'public/js/jquery.js', 'public/js/bootstrap.js',
          // then Knockout
          'public/js/knockout.js',
          // then everything else
          'public/js/*.js'
        ],
        dest: 'dist/js/all.js'
      }
    },
    less: {
      'public': {
        src: 'public/css/index.less',
        dest: 'dist/css/all.css'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'single'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,

        // Ignore strict
        strict: false
      },
      globals: {
        exports: true,
        describe: true,
        it: true
      }
    }
  });

  // Load in grunt-contrib (contains LESS)
  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  // grunt.registerTask('default', 'lint concat less test');
  grunt.registerTask('default', 'single watch');

  grunt.registerTask('single', 'lint concat less');
};