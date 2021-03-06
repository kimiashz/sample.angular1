module.exports = function (grunt) {

	// ===========================================================================
	// CONFIGURE GRUNT ===========================================================
	// ===========================================================================
	grunt.initConfig({
		pkg:    grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					base:       './',
					port:       8004,
					debug:      true,
					open:       true
				}
			}
		},

		concat: {
			libjs:  {
				src:  [
					'modules/jquery/jquery.js',
					'modules/angular/angular.js',
					'modules/**/*.js'
				],
				dest: 'dist/modules.js'
			},
			js:     {
				src:  [
					'app/js/app.js',
					'app/js/*.js'
				],
				dest: 'dist/app.js'
			},
			libcss: {
				src:  [
					'modules/**/*.css'
				],
				dest: 'dist/modules.css'
			}
		},

		sass: {
			dist: {
				options: {
					sourcemap: 'none'
				},
				files: {
					'dist/app.css': 'app/sass/main.sass'
				}
			}
		},

		watch: {
			libjs:  {
				files: ['modules/**/*.js'],
				tasks: ['concat:libjs']
			},
			js:     {
				files: ['app/js/**/*.js'],
				tasks: ['concat:js', 'copy', 'replace']
			},
			libcss: {
				files: ['modules/**/*.css'],
				tasks: ['concat:libcss']
			},
			sass:   {
				files: ['app/sass/**/*.sass'],
				tasks: ['sass']
			},
			package: {
				files: ['package.json'],
				tasks: ['concat:js', 'replace']
			}
		},

		app:           {
			scripts: [
				'dist/modules.js',
				'dist/app.js'
			],
			styles:  [
				'dist/modules.css',
				'dist/app.css'
			]
		},
		includeSource: {
			options: {
				basePath: './',
				baseUrl:  '',
				ordering: 'top-down'
			},
			app:     {
				files: {
					'./index.html': './index.template.html'
				}
			}
		},

		replace: {
			dist: {
				options: {
					patterns:  [{
						match:       'VERSION',
						replacement: '<%= pkg.version %>'
					}]
				},
				files:   [{
					src:  ['dist/app.js'],
					dest: './'
				}]
			}
		}
	});

	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-include-source');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// ===========================================================================
	// Define GRUNT Commands =====================================================
	// ===========================================================================
	grunt.registerTask('develop', ['concat', 'sass', 'includeSource', 'replace']);
	grunt.registerTask('sample-app', ['develop', 'connect', 'watch']);
};
