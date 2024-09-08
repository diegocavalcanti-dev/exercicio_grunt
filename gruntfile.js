module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
        development: {
            files: {
            'dev/styles/main.css': 'src/styles/main.less'
            }
        },
        production: {
            options: {
            compress: true
            },
            files: {
            'dist/styles/main.min.css': 'src/styles/main.less'
            }
        }
        },
        uglify: {
        dist: {
            files: {
            'dist/scripts/main.min.js': ['src/scripts/main.js']
            }
        }
        },
        copy: {
        dist: {
            files: [
            {
                expand: true,
                cwd: 'src/',
                src: ['index.html'],
                dest: 'dist/'
            }
            ]
        }
        },
        watch: {
        scripts: {
            files: ['src/scripts/**/*.js'],
            tasks: ['uglify']
        },
        styles: {
            files: ['src/styles/**/*.less'],
            tasks: ['less:development']
        }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less:development', 'uglify', 'copy']);
    grunt.registerTask('build', ['less:production', 'uglify', 'copy']);
};
