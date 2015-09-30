module.exports = function(grunt) {

  grunt.initConfig({
		today		: grunt.template.today("yyyy-mm-dd-hh-mm-ss"),
		todayStr: grunt.template.today("dd-mmm-yyyy HH:mm"),
    pkg			: grunt.file.readJSON('package.json'),
    bwr			: grunt.file.readJSON('bower.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name + "_" + today %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy-hh-mm") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
//			niels: {
	      files: ['temp/**.js'],
		    options: {
			    // options here to override JSHint defaults
				  globals: {
					  jQuery: true,
						console: true,
	          module: true,
		        document: true
			    }
				}
//			}
		},

		copy: {
		  js: {
				expand: true,
		    cwd: 'src/',
				src: '**/*.js',
		    dest: 'temp/',
				flatten: true,
		    filter: 'isFile',
		  },
			index: {
				src: 'index_TEMPLATE.html',
				dest:'temp/'
			}
		},

		rename: {
			"temp-index": {
				files: [ {src: ['temp/index_TEMPLATE.html'], dest: 'temp/index.html'} ]
			}
		},

		replace: {
		  'meta': {
				src: ['temp/index.html'],
		    overwrite: true,                 // overwrite matched source files 
				replacements: [
					{from: '{APPLICATION_NAME}',	to: "<%= bwr.name %>" },
					{from: '{VERSION}',						to: "<%= bwr.version %>" },
					{from: '{BUILD}',							to: "<%= todayStr %>" }
				]
		  }
		}, 

		clean: {
		  temp:		["temp"],
		  dest:		["dest"],
		},

		bower: {
			dev: {
				base: 'bower_components', /* the path to the bower_components directory */
				dest: 'web/bower_components',
				options: {
					checkExistence: true,
					debugging: true,
					paths: {
						bowerDirectory: 'bower_components',
						bowerrc: '.bowerrc',
						bowerJson: 'bower.json'
					}
				}
			},
			flat: { /* flat folder/file structure */
				dest: 'public/vendor',
				options: {
					debugging: true
				}
			}
		},
	
		exec: {
			bower_update: 'bower update"',
		},
	
	});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-qunit');
//  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-continue');

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('main-bower-files');
	grunt.loadNpmTasks('grunt-contrib-rename');
	grunt.loadNpmTasks('grunt-exec');



	grunt.registerTask('test', ['copy:index', 'rename:temp-index', 'replace:meta']);

	
	grunt.registerTask('mycopy', ['clean:temp', 'copy']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);



	grunt.registerTask('text', 'Do something interesting.', function(arg) {
	  var msg = 'Doing something...';
		grunt.log.writeln(arg,msg);
	});


	grunt.registerTask('niels', [
    'clean:temp',
		'copy:js',
    'continue:on',
    // All tasks after this point will be run with the force option so that grunt will continue after failures 
		'jshint',

		'continue:off',	// Tasks after this point will be run without the force option so that grunt exits if they fail 
    'clean:temp',
    'continue:fail-on-warning'
	]);

};