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
		  //in previous versions, setting this to an empty object would prevent htmlhint.  that doesn't seem to work anymore
		  //htmlhint: {}
          //setting all the default htmlhint props (as described in https://www.npmjs.org/package/grunt-php2html) to false to try to prevent it from erring.  
          htmlhint: {
			'tagname-lowercase': false,
			'attr-lowercase': false,
			'attr-value-double-quotes': false,
			'doctype-first': false,
			'tag-pair': false,
			'spec-char-escape': false,
			'id-unique': false,
			'src-not-empty': false
		  }
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