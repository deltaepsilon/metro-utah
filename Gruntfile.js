module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'style/metro.css': 'style/metro.scss',
          'style/utah.css': 'style/utah.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['style/metro.css', 'style/utah.css'],
        dest: 'style.css'
      }
    },
    watch: {
      sass: {
        files: ['style/*.scss'],
        tasks: ['sass']
      },
      concat: {
        files: ['style/*.css'],
        tasks: ['concat']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat']);

};