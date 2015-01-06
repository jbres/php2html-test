module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //TASK CONFIGURATIONS AND OPTIONS

    //The Clean task will delete previous build dir
    clean: ["build/"],

    //PHP2HTML to produce static flat html from the raw php
    php2html: {
      default: {
        options: {
          htmlhint:false
        },
        files: [
          //process all php file under the source dir, generating html in the build dir
          {expand: true, cwd: 'source', src: ['**/*.php'], dest: 'build/', ext: '.html' }
        ]
      }
    }
	
  });

  //LOAD REQUIRED TASKS
  grunt.loadNpmTasks('grunt-contrib-clean');        // https://npmjs.org/package/grunt-contrib-clean
  grunt.loadNpmTasks('grunt-php2html');             // https://npmjs.org/package/grunt-php2html


  // Register Default task(s).
  grunt.registerTask('default', ['clean', 'php2html']);
  
};