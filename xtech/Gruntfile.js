module.exports = function(grunt) {

	var npmDependencies = require('./package.json').devDependencies;
	var hasSass = npmDependencies['grunt-contrib-sass'] !== undefined;

	grunt.initConfig({

		// Watches for changes and runs tasks
		watch : {
			sass : {
				files : ['scss/*.scss', 'scss/**/*.scss'],
				tasks : (hasSass) ? ['sass:dev'] : null
			},
			css : {
				files : ['css/**/*.css'],
				options : {
					livereload : true
				}
			},
		},

		// JsHint your javascript
		

		// Dev and production build for sass
		sass : {
			production : {
				files : [
					{
						src : ['**/*.scss', '!**/_*.scss'],
						cwd : 'scss',
						dest : 'dist/css',
						ext : '.css',
						expand : true
					}
				],
				options : {
					style : 'compressed'
				}
			},
			dev : {
				files : [
					{
						src : ['**/*.scss', '!**/_*.scss'],
						cwd : 'scss',
						dest : 'css',
						ext : '.css',
						expand : true
					}
				],
				options : {
					style : 'compressed'
				}
			}
			
		},

		

		// Bower task sets up require config
		bower : {
			all : {
				rjsConfig : 'js/global.js'
			}
		},

		// Require config
		requirejs : {
			production : {
				options : {
					name : 'global',
					baseUrl : 'js',
					mainConfigFile : 'js/global.js',
					out : 'js/optimized.min.js'
				}
			}
		},

		uglify: {
		   dist: {
		      options: {
		         sourceMap: true,
		         banner: '/*! main js - Allintegra - template xtexh conncta */'
		      },
		      files: {
		         'dist/js/allintegra-xtech.min.js': ['js/*.js'],
		      }
		   }
		},


		cssmin: {
		   dist: {
		      options: {
		         banner: '/*! TESTE CSS*/'
		      },
		      files: {
		         'dist/css/style.min.css': ['css/**/*.css']
		      }
		  }
		},

		// Image min
		imagemin : {
			production : {
				files : [
					{
						expand: true,
						cwd: 'images',
						src: '**/*.{png,jpg,jpeg}',
						dest: 'dist/images'
					}
				]
			}
		},

		// SVG min
		svgmin: {
			production : {
				files: [
					{
						expand: true,
						cwd: 'images',
						src: '**/*.svg',
						dest: 'dist/images'
					}
				]
			}
		}

	});

	// Default task
	grunt.registerTask('default', ['watch']);

		// Template Setup Task
	grunt.registerTask('production', function() {
		var arr = [];

		if (hasSass) {
			arr.push('sass:production');
		}
		arr.push('cssmin:dist');
		arr.push('uglify:dist');
		arr.push('imagemin:production');
		arr.push('svgmin:production');
		return grunt.task.run(arr);
	});

	

	// Template Setup Task
	grunt.registerTask('setup', function() {
		var arr = [];

		if (hasSass) {
			arr.push('sass:dev');
		}

		arr.push('bower-install');

		return grunt.task.run(arr);
	});

	// Load up tasks
	if (hasSass) {
		grunt.loadNpmTasks('grunt-contrib-sass');
	}

		
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-svgmin');

	// Run bower install
	grunt.registerTask('bower-install', function() {
		var done = this.async();
		var bower = require('bower').commands;
		bower.install().on('end', function(data) {
			done();
		}).on('data', function(data) {
			console.log(data);
		}).on('error', function(err) {
			console.error(err);
			done();
		});
	});

};
