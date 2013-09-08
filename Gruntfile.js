
var collect = require('grunt-collection-helper');

module.exports = function (grunt) {
    'use strict';

    // shortcut for flattened file copy
    // (This causes all files flat copied to the destination folder,
    // instead of keeping the src structure as the default behaviour)
    function flattenCopy(files) {
        var result = [];
        Object.keys(files).forEach(function (dest) {
            var sources = files[dest];
            sources.forEach(function (src) {
                var i = src.lastIndexOf('/');
                var cwd = '';
                if (i != -1) {
                    cwd = src.substring(0, i + 1);
                    src = src.substring(i + 1);
                }
                result.push({
                    expand: true,
                    cwd: cwd,
                    src: src,
                    dest: dest
                });
            });
        });
        return result;
    }


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            version: '0.1.0',
            banner: '/*!\n* <%= pkg.name %> - v<%= meta.version %>\n' +
                '* http://pylonsproject.org/\n' +
                '* <%= grunt.template.today("yyyy") %> \n*/\n\n'
        },
        copy: {
            'default': {
                files: flattenCopy({
                    'src/pyramid_sphinx_themes/ground/static/dist/js/': collect.select('copy.js'),
                    'src/pyramid_sphinx_themes/ground/static/dist/fonts/': collect.select('copy.fonts')
                })
            }
        },
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            bootstrap: {
                src: collect.select('bootstrap.js'),
                dest: 'src/pyramid_sphinx_themes/ground/static/dist/js/bootstrap.js'
            },
            css: {
                files: [
                    {
                        src: collect.select('all.css'),
                        dest: 'src/pyramid_sphinx_themes/ground/static/dist/css/all.css'
                    }
                ]
            },
            js: {
                files: [
                    {
                        src: collect.select('ground.js'),
                        dest: 'src/pyramid_sphinx_themes/ground/static/dist/js/ground.js'
                    }
                ]
            }
        },
        cssmin: {
            dist: {
                src: collect.select('all.css'),
                dest: 'src/pyramid_sphinx_themes/ground/static/dist/css/all.min.css'
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            bootstrap: {
                src: collect.select('bootstrap.js'),
                dest: 'src/pyramid_sphinx_themes/ground/static/dist/js/bootstrap.min.js'
            },
            dist: {
                src: collect.select('ground.js'),
                dest: 'src/pyramid_sphinx_themes/ground/static/dist/js/ground.min.js'
            }
        },
        less: {
            'default': {
                files: [
                    {
                        src: collect.select('bootstrap.css'),
                        dest: 'src/pyramid_sphinx_themes/ground/static/dist/css/bootstrap.css'
                    },
                    {
                        src: collect.select('ground.css'),
                        dest: 'src/pyramid_sphinx_themes/ground/static/dist/css/ground.css'
                    }
                ]
            }
        },
        watch: {
            less: {
                files: ['src/pyramid_sphinx_themes/ground/static/less/*.less'],
                tasks: ['less:default'],
                options: { livereload: true }
            },
            concat: {
                files: [
                    'src/pyramid_sphinx_themes/ground/static/js/*.css',
                    'src/pyramid_sphinx_themes/ground/static/js/*.js'
                    ],
                tasks: ['concat:css', 'concat:js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', [
        'less:default',
        'concat:css',
        'concat:js'
        ]);
    grunt.registerTask('init', [
        'copy:default',
        'concat:bootstrap',
        'uglify:bootstrap'
        ]);
    grunt.registerTask('dist', [
        'uglify:dist',
        'cssmin:dist'
        ]);
};
