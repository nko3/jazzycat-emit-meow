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
        src: ['public/js/*.js'],
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
      tasks: 'default'
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
        exports: true
      }
    }
  });

  // Load in grunt-contrib (contains LESS)
  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  // grunt.registerTask('default', 'lint concat less test');
  grunt.registerTask('default', 'lint concat less');

};