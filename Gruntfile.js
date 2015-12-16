module.exports = function(grunt){

  // intial grunt configuration
  grunt.initConfig({

    // load tasks from package.json
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/scripts/**/*.js'],
        dest: 'lib/js/**/.js'
      }
    },
    wiredep: {

      task: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          '/src/**/*.html',   // .html support...
          '/src/**/*.jade',   // .jade support...
          '/src/styles/main.scss',  // .scss & .sass support...
          '/src/config.yml'         // and .yml & .yaml support out of the box!
        ],
        target: {
          src: '/lib/index.html' // point to HTML file
        },

        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // task setup
    grunt.registerTask('default', ['grunt-wiredep', 'jshint', 'concat']);

  };
