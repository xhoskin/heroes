module.exports = function(grunt) {
 
    require('time-grunt')(grunt);

    grunt.registerTask('default', [ 'connect', 'less', 'watch' ]);

    grunt.initConfig({
        dirs: {
            css:    'css/',
            cssWeb: '/css/',
            js:     'js/',
            bower:  '/bower_components',
        },
        less: {
            options: {
                compress: true,
                cleancss: false,
                sourceMap: true,
                sourceMapBasepath: '/',       
            },
            main: {
                options: {
                    sourceMapFilename: '<%= dirs.css.webPath %>style.css.map', 
                },
                files: {
                    "<%= dirs.css %>style.css":     "<%= dirs.css %>style.less",
                }
            },
            /*
            bootstrap: {
                options: {
                    sourceMapFilename: '<%= dirs.css.webPath %>bootstrap.css.map', 
                },
                files: {
                    "<%= dirs.css %>bootstrap.css":     "<%= dirs.css %>bootstrap.less",
                }
            },
            */
        },
        connect: {
            livereload: {
                options: {
                    port: 9001,
                }
            }
        },
        watch: {
            options: {
                livereload: 35728,
            },
            less: {
                options: {
                    livereload: false,
                },
                files: ['<%= dirs.css %>**/*.less'],
                tasks: ['less'],
            },
            css: {
                files: ['<%= dirs.css %>style.css'],
                tasks: [],
            },
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
};
