module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'mvc/**/*.js', 'test/*_test.js']
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
          // then GMaps
          'public/js/gmaps.js',
          // then other js libs
          'public/js/*.js'
        ],
        dest: 'dist/js/all.js'
      },
      'mvc': {
        src: 'mvc/*.js',
        dest: 'public/mvc/all.js'
      }
    },
    less: {
      'public': {
        src: 'public/css/index.less',
        dest: 'dist/css/all.css'
      }
    },
    watch: {
      'js': {
        files: ['public/js/**', 'mvc/**/*.js', 'routes/**/*.js'],
        tasks: 'js'
      },
      'css': {
        files: 'public/css/**',
        tasks: 'css'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,

        // ugh, should get a proper set up for envs
        browser: true,

        // Ignore strict
        strict: false
      },
      globals: {
        exports: true,
        describe: true,
        it: true,
        ko: true,
        $: true
      }
    }
  });

  // Load in grunt-contrib (contains LESS)
  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  // grunt.registerTask('default', 'lint concat less test');
  grunt.registerTask('default', 'single watch');

  grunt.registerTask('single', 'js css');

  grunt.registerTask('js', 'lint concat');
  grunt.registerTask('css', 'less');
};