module.exports = function(grunt){

  /** * Load Grunt plugins **/
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // intial grunt configuration
  grunt.initConfig({

    // load tasks from package.json
    pkg: grunt.file.readJSON('package.json'),
    /**
     * Project banner
     */
    tag: {
      banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
          ' * <%= pkg.title %>\n' +
            ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                  ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
                    ' */\n'
    },
      sass: {
        dist: {
        files: {
          'lib/css/main.css' : 'src/app/styles/main.scss'
      },
        },
      /**
       * Watch
       */
    watch: {
      scripts: {
      files: ['**/*.js'],
      tasks: ['jshint'],
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
      },
   /**
    * WireDep
    */
    wiredep: {
      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          '/src/app/**/*.html',   // .html support...
          '/src/app/**/*.jade',   // .jade support...
          '/src/app/styles/main.scss',  // .scss & .sass support...
          '/src/app/config.yml'         // and .yml & .yaml support out of the box!
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
  // task setup
  grunt.registerTask('default', ['sass', 'watch']);
};
